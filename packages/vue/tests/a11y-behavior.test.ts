/**
 * Keyboard, focus and layering behavior with components attached to the document,
 * so document.activeElement reflects real focus (doc 11 — WAI-ARIA APG patterns).
 */
import { afterEach, describe, expect, it } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { defineComponent, h, nextTick, ref } from "vue";
import {
  MsCheckbox,
  MsCodeBlock,
  MsCommandPalette,
  MsDialog,
  MsDropdownButton,
  MsDropzone,
  MsField,
  MsInput,
  MsPopover,
  MsSelect,
  MsSplitPane,
  MsTree,
} from "../src/index.ts";
import { scrollLockCount } from "../src/composables/use-scroll-lock.ts";
import { dismissableLayerCount } from "../src/composables/use-dismissable-layer.ts";

const mounted: VueWrapper[] = [];
function attach<T extends VueWrapper>(wrapper: T): T {
  mounted.push(wrapper);
  return wrapper;
}
const flush = async () => {
  await nextTick();
  await nextTick();
};
const key = (target: EventTarget, keyName: string, init: KeyboardEventInit = {}) =>
  target.dispatchEvent(new KeyboardEvent("keydown", { key: keyName, bubbles: true, ...init }));

afterEach(() => {
  while (mounted.length) mounted.pop()!.unmount();
  document.body.innerHTML = "";
  document.body.style.overflow = "";
});

describe("overlay primitives", () => {
  it("ref-counts the body scroll lock across overlays", async () => {
    const a = attach(mount(MsDialog, { props: { open: true }, attachTo: document.body }));
    const b = attach(mount(MsDialog, { props: { open: true }, attachTo: document.body }));
    // Mounting a closed overlay must not unlock the page.
    attach(mount(MsDialog, { props: { open: false }, attachTo: document.body }));
    await flush();
    expect(scrollLockCount()).toBe(2);
    expect(document.body.style.overflow).toBe("hidden");

    await a.setProps({ open: false });
    expect(document.body.style.overflow).toBe("hidden");
    await b.setProps({ open: false });
    expect(scrollLockCount()).toBe(0);
    expect(document.body.style.overflow).toBe("");
  });

  it("moves focus into a dialog and restores it on close", async () => {
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);
    trigger.focus();

    const dialog = attach(
      mount(MsDialog, {
        props: { open: false, title: "T" },
        slots: { default: () => h("input", { id: "inside" }) },
        attachTo: document.body,
      }),
    );
    await dialog.setProps({ open: true });
    await flush();
    const content = document.querySelector(".ms-dialog-content")!;
    expect(content.contains(document.activeElement)).toBe(true);

    await dialog.setProps({ open: false });
    await flush();
    expect(document.activeElement).toBe(trigger);
  });

  it("wraps Tab inside the dialog", async () => {
    attach(
      mount(MsDialog, {
        props: { open: true, showClose: false },
        slots: {
          default: () => [h("button", { id: "first" }, "1"), h("button", { id: "last" }, "2")],
        },
        attachTo: document.body,
      }),
    );
    await flush();
    const last = document.getElementById("last")!;
    last.focus();
    key(last, "Tab");
    expect(document.activeElement?.id).toBe("first");
    key(document.activeElement!, "Tab", { shiftKey: true });
    expect(document.activeElement?.id).toBe("last");
  });

  it("Escape closes only the topmost layer", async () => {
    const Host = defineComponent({
      setup() {
        const dialogOpen = ref(true);
        const popoverOpen = ref(true);
        return () =>
          h(
            MsDialog,
            { open: dialogOpen.value, "onUpdate:open": (v: boolean) => (dialogOpen.value = v) },
            () =>
              h(
                MsPopover,
                {
                  open: popoverOpen.value,
                  "onUpdate:open": (v: boolean) => (popoverOpen.value = v),
                },
                { trigger: () => h("button", "t"), default: () => "body" },
              ),
          );
      },
    });
    attach(mount(Host, { attachTo: document.body }));
    await flush();
    expect(dismissableLayerCount()).toBe(2);

    key(window, "Escape");
    await flush();
    expect(document.querySelector(".ms-popover-panel")).toBeNull();
    expect(document.querySelector(".ms-dialog-content")).not.toBeNull();

    key(window, "Escape");
    await flush();
    expect(document.querySelector(".ms-dialog-content")).toBeNull();
  });
});

describe("MsPopover", () => {
  it("opens when the parent only listens to update:open (uncontrolled)", async () => {
    const wrapper = attach(
      mount(MsPopover, {
        props: { "onUpdate:open": () => undefined },
        slots: { trigger: () => h("button", { class: "t" }, "t"), default: () => "body" },
        attachTo: document.body,
      }),
    );
    await wrapper.find(".t").trigger("click");
    expect(wrapper.find(".ms-popover-panel").exists()).toBe(true);
    expect(wrapper.find(".t").attributes("aria-expanded")).toBe("true");
  });

  it("does not double-toggle when the slot calls toggle()", async () => {
    const wrapper = attach(
      mount(MsPopover, {
        slots: {
          trigger: ({ toggle }: { toggle: () => void }) =>
            h("button", { class: "t", onClick: toggle }, "t"),
          default: () => "body",
        },
        attachTo: document.body,
      }),
    );
    await wrapper.find(".t").trigger("click");
    expect(wrapper.find(".ms-popover-panel").exists()).toBe(true);
  });
});

describe("MsDropdownButton / MsMenu", () => {
  const items = [
    { label: "Editar", value: "edit" },
    { label: "Duplicar", value: "dup" },
    { label: "Excluir", value: "del", disabled: true },
  ];

  it("focuses menu items and moves with arrows; Escape returns focus to the trigger", async () => {
    const wrapper = attach(
      mount(MsDropdownButton, { props: { label: "Ações", items }, attachTo: document.body }),
    );
    const trigger = wrapper.find("button").element as HTMLButtonElement;
    trigger.focus();
    key(trigger, "ArrowDown");
    await flush();
    expect(document.activeElement?.textContent).toContain("Editar");

    key(document.activeElement!, "ArrowDown");
    await flush();
    expect(document.activeElement?.textContent).toContain("Duplicar");
    // Disabled item is skipped and navigation wraps.
    key(document.activeElement!, "ArrowDown");
    await flush();
    expect(document.activeElement?.textContent).toContain("Editar");

    key(document.activeElement!, "Escape");
    await flush();
    expect(wrapper.find('[role="menu"]').exists()).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });

  it("clicking the trigger again closes the menu", async () => {
    const wrapper = attach(
      mount(MsDropdownButton, { props: { label: "Ações", items }, attachTo: document.body }),
    );
    const trigger = wrapper.find("button");
    await trigger.trigger("click");
    expect(wrapper.find('[role="menu"]').exists()).toBe(true);
    trigger.element.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
    await trigger.trigger("click");
    expect(wrapper.find('[role="menu"]').exists()).toBe(false);
  });
});

describe("MsSelect (select-only combobox)", () => {
  it("navigates and selects with the keyboard while focus stays on the trigger", async () => {
    const wrapper = attach(
      mount(MsSelect, {
        props: {
          options: [
            { label: "Um", value: 1 },
            { label: "Dois", value: 2 },
          ],
        },
        attachTo: document.body,
      }),
    );
    const trigger = wrapper.find('[role="combobox"]');
    await trigger.trigger("keydown", { key: "ArrowDown" });
    expect(trigger.attributes("aria-expanded")).toBe("true");
    await trigger.trigger("keydown", { key: "ArrowDown" });
    expect(trigger.attributes("aria-activedescendant")).toMatch(/opt-n2$/);
    await trigger.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([2]);
  });
});

describe("form controls", () => {
  it("gives each control in one MsField a unique id and forwards attrs to the native input", () => {
    const wrapper = attach(
      mount(MsField, {
        props: { label: "Nome", description: "Como no documento" },
        slots: {
          default: () => [
            h(MsInput, { "aria-label": "primeiro", required: true, autocomplete: "given-name" }),
            h(MsInput, { class: "second" }),
          ],
        },
      }),
    );
    const inputs = wrapper.findAll("input");
    const [first, second] = inputs.map((input) => input.element as HTMLInputElement);
    expect(first!.id).not.toBe(second!.id);
    expect(wrapper.find("label").attributes("for")).toBe(first!.id);
    expect(first!.getAttribute("aria-label")).toBe("primeiro");
    expect(first!.required).toBe(true);
    expect(first!.getAttribute("autocomplete")).toBe("given-name");
    expect(first!.getAttribute("aria-describedby")).toBeTruthy();
    // class stays on the visual root, not the native input.
    expect(wrapper.find(".ms-input.second").exists()).toBe(true);
    expect(second!.classList.contains("second")).toBe(false);
  });

  it("applies the indeterminate DOM property on mount", () => {
    const wrapper = mount(MsCheckbox, { props: { indeterminate: true } });
    expect((wrapper.find("input").element as HTMLInputElement).indeterminate).toBe(true);
  });

  it("MsDropzone rejects files outside `accept` and extra files when not multiple", async () => {
    const wrapper = mount(MsDropzone, { props: { accept: "image/*,.pdf", multiple: false } });
    const files = [
      new File(["a"], "photo.png", { type: "image/png" }),
      new File(["b"], "notes.txt", { type: "text/plain" }),
    ];
    const drop = new Event("drop", { bubbles: true }) as DragEvent;
    Object.defineProperty(drop, "dataTransfer", { value: { files } });
    wrapper.element.dispatchEvent(drop);
    await nextTick();
    expect((wrapper.emitted("files-dropped")?.[0]?.[0] as File[]).map((f) => f.name)).toEqual([
      "photo.png",
    ]);
    const rejected = wrapper.emitted("files-rejected")?.[0]?.[0] as { reason: string }[];
    expect(rejected.map((r) => r.reason)).toEqual(["multiple"]);
  });
});

describe("MsCommandPalette", () => {
  it("Ctrl+K opens it with the search input focused; arrows follow grouped order and skip disabled", async () => {
    const wrapper = attach(
      mount(MsCommandPalette, {
        props: {
          items: [
            { id: "a", label: "Alpha", group: "G1" },
            { id: "b", label: "Beta", group: "G2" },
            { id: "c", label: "Gamma", group: "G1" },
            { id: "d", label: "Delta", group: "G1", disabled: true },
          ],
        },
        attachTo: document.body,
      }),
    );
    key(window, "k", { ctrlKey: true });
    await flush();
    const input = document.querySelector<HTMLInputElement>(".ms-command-palette__search-input")!;
    expect(document.activeElement).toBe(input);

    const active = () =>
      document.getElementById(input.getAttribute("aria-activedescendant") ?? "")?.textContent;
    expect(active()).toContain("Alpha");
    key(input, "ArrowDown");
    await flush();
    expect(active()).toContain("Gamma"); // rendered next inside group G1
    key(input, "ArrowDown");
    await flush();
    expect(active()).toContain("Beta"); // Delta is disabled
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });
});

describe("MsTree", () => {
  it("supports arrow navigation, expand/collapse and a single tab stop", async () => {
    const wrapper = attach(
      mount(MsTree, {
        props: {
          items: [
            { key: "a", label: "A", children: [{ key: "a1", label: "A1" }] },
            { key: "b", label: "B" },
          ],
        },
        attachTo: document.body,
      }),
    );
    const tabStops = () => wrapper.findAll('[role="treeitem"][tabindex="0"]');
    expect(tabStops()).toHaveLength(1);
    const first = wrapper.find('[data-ms-tree-key="a"]').element as HTMLElement;
    first.focus();
    key(first, "ArrowRight");
    await flush();
    expect(wrapper.emitted("toggle")?.[0]?.[1]).toBe(true);
    key(first, "ArrowRight");
    await flush();
    expect((document.activeElement as HTMLElement).dataset.msTreeKey).toBe("a1");
    key(document.activeElement!, "ArrowLeft");
    await flush();
    expect((document.activeElement as HTMLElement).dataset.msTreeKey).toBe("a");
    key(document.activeElement!, "End");
    await flush();
    expect((document.activeElement as HTMLElement).dataset.msTreeKey).toBe("b");
    expect(tabStops()).toHaveLength(1);
  });
});

describe("MsSplitPane", () => {
  it("is a focusable separator adjustable with the keyboard", async () => {
    const wrapper = mount(MsSplitPane, { props: { split: 50, min: 20, max: 80 } });
    const gutter = wrapper.find('[role="separator"]');
    expect(gutter.attributes("tabindex")).toBe("0");
    expect(gutter.attributes("aria-orientation")).toBe("vertical");
    await gutter.trigger("keydown", { key: "ArrowRight" });
    await gutter.trigger("keydown", { key: "ArrowRight", shiftKey: true });
    await gutter.trigger("keydown", { key: "End" });
    expect(wrapper.emitted("update:split")?.map((e) => e[0])).toEqual([51, 61, 80]);
  });
});

describe("MsCodeBlock highlighter", () => {
  it("keeps apostrophes and quotes intact and highlights strings", () => {
    const wrapper = mount(MsCodeBlock, {
      props: { code: `const a = 'hi'; let b = "yo"; // done`, language: "ts" },
    });
    const html = wrapper.find("code").html();
    expect(html).toContain(`<span class="ms-code-token--string">'hi'</span>`);
    expect(html).toContain('<span class="ms-code-token--string">"yo"</span>');
    expect(html).toContain('<span class="ms-code-token--comment">// done</span>');
    expect(wrapper.find("code").text()).toBe(`const a = 'hi'; let b = "yo"; // done`);
  });
});
