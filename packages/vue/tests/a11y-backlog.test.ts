import { afterEach, describe, expect, it, vi } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createSSRApp, defineComponent, h, nextTick, ref } from "vue";
import { renderToString } from "vue/server-renderer";
import {
  MsAccordion,
  MsAccordionItem,
  MsBanner,
  MsBlockquote,
  MsCarousel,
  MsCarouselSlide,
  MsChoicebox,
  MsCollapse,
  MsDatePicker,
  MsEmojiPicker,
  MsFab,
  MsField,
  MsFileInput,
  MsGlimpse,
  MsIconPicker,
  MsList,
  MsListGroup,
  MsListItem,
  MsMarquee,
  MsMasonryGrid,
  MsMenu,
  MsParallax,
  MsPointer,
  MsProvider,
  MsScrollSpy,
  MsStep,
  MsStepper,
  MsTag,
  MsTimeline,
  MsTimelineItem,
  usePrefersReducedMotion,
} from "../src/index.ts";

const mounted: VueWrapper[] = [];
afterEach(() => {
  while (mounted.length) mounted.pop()?.unmount();
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});

function track<T extends VueWrapper>(wrapper: T): T {
  mounted.push(wrapper);
  return wrapper;
}

function pressEscape(): void {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
}

function pointerdownOutside(): void {
  document.body.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
}

/** jsdom has no matchMedia: install one that answers `matches` for reduced motion. */
function mockReducedMotion(matches: boolean): void {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: query.includes("reduce") ? matches : false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

afterEach(() => vi.unstubAllGlobals());

describe("MsEmojiPicker / MsIconPicker popups", () => {
  it.each([
    ["MsEmojiPicker", MsEmojiPicker, ".ms-emoji-picker__trigger", ".ms-emoji-picker__search"],
    ["MsIconPicker", MsIconPicker, ".ms-icon-picker__trigger", ".ms-icon-picker__search"],
  ] as const)(
    "%s exposes disclosure state and closes on Escape",
    async (_, Picker, trigger, search) => {
      const wrapper = track(mount(Picker, { attachTo: document.body }));
      const button = wrapper.find(trigger);
      expect(button.attributes("aria-haspopup")).toBe("dialog");
      expect(button.attributes("aria-expanded")).toBe("false");

      await button.trigger("click");
      expect(button.attributes("aria-expanded")).toBe("true");
      const panel = wrapper.find("[role='dialog']");
      expect(button.attributes("aria-controls")).toBe(panel.attributes("id"));
      expect(panel.attributes("aria-label")).toBeTruthy();
      expect(wrapper.find(search).attributes("aria-label")).toBeTruthy();

      pressEscape();
      await nextTick();
      expect(wrapper.find("[role='dialog']").exists()).toBe(false);
      expect(document.activeElement).toBe(button.element);
    },
  );

  it("closes on outside click and returns focus to the trigger", async () => {
    const wrapper = track(mount(MsEmojiPicker, { attachTo: document.body }));
    await wrapper.find(".ms-emoji-picker__trigger").trigger("click");
    pointerdownOutside();
    await nextTick();
    expect(wrapper.find(".ms-emoji-picker__dropdown").exists()).toBe(false);
    expect(document.activeElement).toBe(wrapper.find(".ms-emoji-picker__trigger").element);
  });

  it("labels the search input from the messages", async () => {
    const wrapper = track(mount(MsEmojiPicker));
    await wrapper.find(".ms-emoji-picker__trigger").trigger("click");
    expect(wrapper.find(".ms-emoji-picker__search").attributes("aria-label")).toBe("Search emoji");
  });

  it("shows the icon name on the icon picker trigger", () => {
    const wrapper = track(mount(MsIconPicker, { props: { modelValue: "trash" } }));
    expect(wrapper.find(".ms-icon-picker__trigger").text()).toContain("Delete");
    expect(wrapper.find(".ms-icon-picker__trigger").text()).not.toContain("trash");
  });
});

describe("MsDatePicker", () => {
  it("connects the input to MsField", () => {
    const wrapper = track(
      mount(MsField, {
        props: { label: "Due date", description: "Pick a day" },
        slots: { default: () => h(MsDatePicker) },
      }),
    );
    const input = wrapper.find(".ms-date-picker__input");
    const label = wrapper.find("label");
    expect(input.attributes("id")).toBeTruthy();
    expect(label.attributes("for")).toBe(input.attributes("id"));
    expect(input.attributes("aria-describedby")).toBeTruthy();
  });

  it("disables presets outside minDate/maxDate", async () => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    const wrapper = track(mount(MsDatePicker, { props: { maxDate: todayStr } }));
    await wrapper.find("input").trigger("click");
    const [todayBtn, tomorrowBtn] = wrapper.findAll(".ms-date-picker__preset-btn");
    expect(todayBtn!.attributes("disabled")).toBeUndefined();
    expect(tomorrowBtn!.attributes("disabled")).toBeDefined();
    await tomorrowBtn!.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("keeps a time chosen before the date and stays open in datetime mode", async () => {
    const wrapper = track(
      mount(MsDatePicker, { props: { mode: "datetime", modelValue: "" }, attachTo: document.body }),
    );
    await wrapper.find("input").trigger("click");
    const [hour, minute] = wrapper.findAll("select");
    await hour!.setValue("14");
    await minute!.setValue("30");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();

    const day = wrapper.find(".ms-date-picker__day:not(.ms-date-picker__day--other-month)");
    await day.trigger("click");
    const emitted = wrapper.emitted("update:modelValue")?.[0]?.[0] as string;
    expect(emitted).toMatch(/^\d{4}-\d{2}-\d{2} 14:30$/);
    expect(wrapper.find("[role='dialog']").exists()).toBe(true);
  });
});

describe("MsFab speed dial", () => {
  const actions = [
    { id: "a", label: "Add" },
    { id: "b", label: "Share" },
  ];

  it("forwards attributes to the button and exposes aria-expanded/controls", async () => {
    const wrapper = track(
      mount(MsFab, {
        props: { actions },
        attrs: { "aria-label": "Quick actions", class: "extra" },
        attachTo: document.body,
      }),
    );
    const button = wrapper.find("button.ms-fab");
    expect(button.attributes("aria-label")).toBe("Quick actions");
    expect(wrapper.classes()).toContain("extra");
    expect(wrapper.attributes("aria-label")).toBeUndefined();
    expect(button.attributes("aria-expanded")).toBe("false");
    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("true");
    expect(button.attributes("aria-controls")).toBe(
      wrapper.find(".ms-fab__speed-dial").attributes("id"),
    );
  });

  it("closes on Escape (focus back to the button) and on outside click", async () => {
    const wrapper = track(mount(MsFab, { props: { actions }, attachTo: document.body }));
    const button = wrapper.find("button.ms-fab");
    await button.trigger("click");
    pressEscape();
    await nextTick();
    expect(wrapper.find(".ms-fab__speed-dial").exists()).toBe(false);
    expect(document.activeElement).toBe(button.element);

    await button.trigger("click");
    pointerdownOutside();
    await nextTick();
    expect(wrapper.find(".ms-fab__speed-dial").exists()).toBe(false);
  });
});

describe("MsMenu focus return", () => {
  it("returns focus to the trigger on Escape and selection", async () => {
    const Host = defineComponent({
      setup() {
        const open = ref(false);
        return { open };
      },
      render() {
        return h("div", [
          h("button", { id: "trigger", onClick: () => (this.open = true) }, "Menu"),
          this.open
            ? h(MsMenu, {
                items: [
                  { label: "One", value: 1 },
                  { label: "Two", value: 2 },
                ],
                open: true,
                "onUpdate:open": (value: boolean) => (this.open = value),
                onSelect: () => (this.open = false),
              })
            : null,
        ]);
      },
    });
    const wrapper = track(mount(Host, { attachTo: document.body }));
    const trigger = wrapper.find("#trigger");
    (trigger.element as HTMLElement).focus();
    await trigger.trigger("click");
    await nextTick();
    expect(document.activeElement?.getAttribute("role")).toBe("menuitem");

    await wrapper.find("[role='menu']").trigger("keydown", { key: "Escape" });
    await nextTick();
    expect(document.activeElement).toBe(trigger.element);

    await trigger.trigger("click");
    await nextTick();
    await wrapper.find("[role='menuitem']").trigger("click");
    await nextTick();
    expect(document.activeElement).toBe(trigger.element);
  });
});

describe("MsBanner region name", () => {
  it("is labelled by the title when present", () => {
    const wrapper = track(mount(MsBanner, { props: { title: "Maintenance" } }));
    const region = wrapper.find("[role='region']");
    const title = wrapper.find(".ms-banner__title");
    expect(region.attributes("aria-labelledby")).toBe(title.attributes("id"));
  });

  it("falls back to the localized banner.label", () => {
    const en = track(mount(MsBanner, { slots: { default: () => "Hi" } }));
    expect(en.find("[role='region']").attributes("aria-label")).toBe("Notice");
    const pt = track(
      mount(MsProvider, {
        props: { locale: "pt-BR" },
        slots: { default: () => h(MsBanner, null, () => "Oi") },
      }),
    );
    expect(pt.find("[role='region']").attributes("aria-label")).toBe("Aviso");
  });
});

describe("MsFileInput", () => {
  function drop(wrapper: VueWrapper, files: File[]) {
    const event = new Event("drop", { bubbles: true, cancelable: true }) as DragEvent;
    Object.defineProperty(event, "dataTransfer", { value: { files } });
    wrapper.find(".ms-file-input__dropzone").element.dispatchEvent(event);
  }

  it("rejects dropped files that do not match accept", async () => {
    const wrapper = track(
      mount(MsFileInput, { props: { accept: "image/*,.pdf", multiple: true } }),
    );
    const png = new File(["x"], "a.png", { type: "image/png" });
    const pdf = new File(["x"], "b.pdf", { type: "application/pdf" });
    const txt = new File(["x"], "c.txt", { type: "text/plain" });
    drop(wrapper, [png, pdf, txt]);
    await nextTick();
    expect(wrapper.emitted("reject")).toEqual([[txt, "accept"]]);
    expect(wrapper.emitted("update:modelValue")?.[0]?.[0]).toEqual([png, pdf]);
  });

  it("clears the list when v-model is reset to null", async () => {
    const file = new File(["x"], "a.txt", { type: "text/plain" });
    const wrapper = track(mount(MsFileInput, { props: { modelValue: file } }));
    expect(wrapper.findAll(".ms-file-input__item")).toHaveLength(1);
    await wrapper.setProps({ modelValue: null });
    expect(wrapper.findAll(".ms-file-input__item")).toHaveLength(0);
  });
});

describe("MsChoicebox radio group keyboard", () => {
  const items = [
    { value: "a", title: "A" },
    { value: "b", title: "B", disabled: true },
    { value: "c", title: "C" },
  ];

  it("has a single tab stop and moves selection with arrow keys", async () => {
    const wrapper: VueWrapper = track(
      mount(MsChoicebox, { props: { items }, attachTo: document.body }),
    );
    const sync = (value: unknown) => wrapper.setProps({ modelValue: value as string });
    await wrapper.setProps({ "onUpdate:modelValue": sync });
    const radios = () => wrapper.findAll("[role='radio']");
    expect(radios().map((r) => r.attributes("tabindex"))).toEqual(["0", "-1", "-1"]);

    await radios()[0]!.trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["c"]);
    await nextTick();
    expect(document.activeElement).toBe(radios()[2]!.element);
    expect(radios().map((r) => r.attributes("tabindex"))).toEqual(["-1", "-1", "0"]);

    await radios()[2]!.trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["a"]);
  });

  it("keeps every checkbox tabbable", () => {
    const wrapper = track(mount(MsChoicebox, { props: { items, type: "checkbox" } }));
    expect(wrapper.findAll("[role='checkbox']").map((r) => r.attributes("tabindex"))).toEqual([
      "0",
      "-1",
      "0",
    ]);
  });
});

describe("MsList semantics", () => {
  it("renders groups as <li role=none> with a labelled nested group list", () => {
    const wrapper = track(
      mount(MsList, {
        slots: {
          default: () =>
            h(MsListGroup, { title: "Settings" }, () => [h(MsListItem, { title: "One" })]),
        },
      }),
    );
    const group = wrapper.find(".ms-list-group");
    expect(group.element.tagName).toBe("LI");
    expect(group.attributes("role")).toBe("none");
    const nested = group.find("ul[role='group']");
    expect(nested.attributes("aria-labelledby")).toBe(
      group.find(".ms-list-group__header").attributes("id"),
    );
    expect(wrapper.element.querySelector(":scope > div")).toBeNull();
  });

  it("uses aria-current (not aria-selected) outside listbox mode", () => {
    const wrapper = track(
      mount(MsList, { slots: { default: () => h(MsListItem, { title: "A", active: true }) } }),
    );
    const item = wrapper.find(".ms-list-item");
    expect(item.attributes("aria-selected")).toBeUndefined();
    expect(item.attributes("aria-current")).toBe("true");
  });

  it("makes interactive items focusable and activates them with Enter/Space", async () => {
    const onClick = vi.fn();
    const wrapper = track(
      mount(MsList, {
        slots: { default: () => h(MsListItem, { title: "A", interactive: true, onClick }) },
      }),
    );
    const item = wrapper.find(".ms-list-item");
    expect(item.attributes("tabindex")).toBe("0");
    await item.trigger("keydown", { key: "Enter" });
    await item.trigger("keydown", { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("becomes a listbox with options when selectable", async () => {
    const wrapper = track(
      mount(MsList, {
        props: { selectable: true },
        slots: {
          default: () => [
            h(MsListItem, { title: "A" }),
            h(MsListItem, { title: "B", active: true }),
            h(MsListItem, { title: "C" }),
          ],
        },
        attachTo: document.body,
      }),
    );
    expect(wrapper.attributes("role")).toBe("listbox");
    const options = wrapper.findAll("[role='option']");
    expect(options.map((o) => o.attributes("aria-selected"))).toEqual(["false", "true", "false"]);
    expect(options.map((o) => o.attributes("tabindex"))).toEqual(["-1", "0", "-1"]);
    (options[1]!.element as HTMLElement).focus();
    await wrapper.trigger("keydown", { key: "ArrowDown" });
    expect(document.activeElement).toBe(options[2]!.element);
  });
});

describe("Disclosure headers contain phrasing content only", () => {
  it("MsCollapse and MsAccordionItem have no <div> inside the header button", () => {
    const collapse = track(mount(MsCollapse, { props: { title: "More" } }));
    expect(collapse.find("button").element.querySelector("div")).toBeNull();
    const accordion = track(
      mount(MsAccordion, {
        slots: { default: () => h(MsAccordionItem, { value: "a", title: "A", subtitle: "S" }) },
      }),
    );
    expect(accordion.find("button").element.querySelector("div")).toBeNull();
  });

  it("MsStep has no <div> inside its trigger and renders its default slot", () => {
    const wrapper = track(
      mount(MsStepper, {
        slots: { default: () => h(MsStep, { index: 0, title: "One" }, () => "Details") },
      }),
    );
    expect(wrapper.find(".ms-step__trigger").element.querySelector("div")).toBeNull();
    expect(wrapper.find(".ms-step__content").text()).toBe("Details");
  });
});

describe("MsGlimpse trigger", () => {
  it("puts aria-expanded/aria-controls on the focusable link", async () => {
    const wrapper = track(
      mount(MsGlimpse, { props: { href: "https://example.com", showDelay: 0 } }),
    );
    const link = wrapper.find("a");
    const card = wrapper.find("[role='dialog']");
    expect(wrapper.find(".ms-glimpse__trigger").attributes("aria-expanded")).toBeUndefined();
    expect(link.attributes("aria-expanded")).toBe("false");
    expect(link.attributes("aria-controls")).toBe(card.attributes("id"));
    await wrapper.find(".ms-glimpse__trigger").trigger("focusin");
    expect(link.attributes("aria-expanded")).toBe("true");
  });

  it("also annotates a custom focusable trigger", async () => {
    const wrapper = track(
      mount(MsGlimpse, {
        props: { showDelay: 0 },
        slots: { default: () => h("button", { type: "button" }, "Custom") },
      }),
    );
    await nextTick();
    const button = wrapper.find("button");
    expect(button.attributes("aria-expanded")).toBe("false");
    expect(button.attributes("aria-controls")).toBe(
      wrapper.find("[role='dialog']").attributes("id"),
    );
  });
});

describe("Reduced motion", () => {
  it("usePrefersReducedMotion is false during SSR and reads matchMedia after mount", async () => {
    mockReducedMotion(true);
    let value: { value: boolean } | undefined;
    const Probe = defineComponent({
      setup() {
        value = usePrefersReducedMotion();
        return () => h("span", String(value!.value));
      },
    });
    const html = await renderToString(createSSRApp(Probe));
    expect(html).toContain("false");
    const wrapper = track(mount(Probe));
    await nextTick();
    expect(wrapper.text()).toBe("true");
  });

  it("MsMarquee has a pause/play button and starts paused with reduced motion", async () => {
    const running = track(mount(MsMarquee, { slots: { default: () => "News" } }));
    const control = running.find(".ms-marquee__control");
    expect(control.attributes("aria-label")).toBe("Pause animation");
    await control.trigger("click");
    expect(running.classes()).toContain("ms-marquee--paused");
    expect(control.attributes("aria-label")).toBe("Play animation");

    mockReducedMotion(true);
    const reduced = track(mount(MsMarquee, { slots: { default: () => "News" } }));
    await nextTick();
    expect(reduced.classes()).toContain("ms-marquee--paused");
  });

  it("MsParallax does not listen to scroll with reduced motion", async () => {
    mockReducedMotion(true);
    const add = vi.spyOn(window, "addEventListener");
    track(mount(MsParallax));
    await nextTick();
    await nextTick();
    expect(add.mock.calls.some(([type]) => type === "scroll")).toBe(false);
  });

  it("MsPointer attaches no global listener when disabled or with reduced motion", async () => {
    const add = vi.spyOn(window, "addEventListener");
    track(mount(MsPointer, { props: { disabled: true } }));
    await nextTick();
    expect(add.mock.calls.some(([type]) => type === "mousemove")).toBe(false);

    mockReducedMotion(true);
    track(mount(MsPointer));
    await nextTick();
    await nextTick();
    expect(add.mock.calls.some(([type]) => type === "mousemove")).toBe(false);

    mockReducedMotion(false);
    track(mount(MsPointer));
    await nextTick();
    await nextTick();
    expect(add.mock.calls.some(([type]) => type === "mousemove")).toBe(true);
  });
});

describe("Content components", () => {
  it("MsBlockquote uses citeUrl for the cite attribute and cite as visible title", () => {
    const wrapper = track(
      mount(MsBlockquote, {
        props: { cite: "The Book", citeUrl: "https://example.com/book" },
        slots: { default: () => "Quote" },
      }),
    );
    expect(wrapper.attributes("cite")).toBe("https://example.com/book");
    expect(wrapper.find("cite").text()).toBe("The Book");
    const noUrl = track(mount(MsBlockquote, { props: { cite: "The Book" } }));
    expect(noUrl.attributes("cite")).toBeUndefined();
  });

  it("MsTimelineItem renders titleTag (h4 by default)", () => {
    const wrapper = track(
      mount(MsTimeline, {
        slots: {
          default: () => [
            h(MsTimelineItem, { title: "Default" }),
            h(MsTimelineItem, { title: "Custom", titleTag: "h3" }),
          ],
        },
      }),
    );
    const titles = wrapper.findAll(".ms-timeline-item__title");
    expect(titles[0]!.element.tagName).toBe("H4");
    expect(titles[1]!.element.tagName).toBe("H3");
  });

  it("MsCarousel derives totalSlides from its slides", async () => {
    const wrapper = track(
      mount(MsCarousel, {
        slots: {
          default: () => [
            h(MsCarouselSlide, () => "1"),
            h(MsCarouselSlide, () => "2"),
            h(MsCarouselSlide, () => "3"),
          ],
        },
      }),
    );
    await nextTick();
    expect(wrapper.findAll(".ms-carousel__indicator, [role='tab']").length).toBeGreaterThan(0);
    expect(wrapper.findAll("[data-ms-carousel-slide]")[2]!.attributes("aria-label")).toContain("3");
    expect(wrapper.findAll("[data-ms-carousel-slide]")[2]!.attributes("aria-label")).toContain(
      "of 3",
    );
  });

  it("MsTag clickable+closable renders the action and the close button as siblings", async () => {
    const wrapper = track(
      mount(MsTag, { props: { clickable: true, closable: true }, slots: { default: () => "Vue" } }),
    );
    expect(wrapper.attributes("role")).toBeUndefined();
    const action = wrapper.find(".ms-tag__action");
    expect(action.attributes("role")).toBe("button");
    expect(action.find("button").exists()).toBe(false);
    expect(wrapper.find("[role='button'] button").exists()).toBe(false);
    await action.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
    await wrapper.find(".ms-tag__close").trigger("click");
    expect(wrapper.emitted("close")).toHaveLength(1);
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("MsMasonryGrid passes the global item index to the slot", () => {
    const wrapper = track(
      mount(MsMasonryGrid, {
        props: { cols: 2, items: ["a", "b", "c", "d"] },
        slots: {
          default: (p: { item: unknown; index: number }) =>
            h("span", { class: "cell" }, `${String(p.item)}${p.index}`),
        },
      }),
    );
    const columns = wrapper.findAll(".ms-masonry-grid__column");
    expect(columns[0]!.findAll(".cell").map((c) => c.text())).toEqual(["a0", "c2"]);
    expect(columns[1]!.findAll(".cell").map((c) => c.text())).toEqual(["b1", "d3"]);
  });
});

describe("MsScrollSpy", () => {
  it("renders its default slot", () => {
    const wrapper = track(
      mount(MsScrollSpy, {
        props: { items: [{ id: "a", label: "A" }] },
        slots: { default: () => h("p", { class: "extra" }, "Back to top") },
      }),
    );
    expect(wrapper.find("nav .extra").exists()).toBe(true);
  });

  it("observes a scroll container given as a selector", async () => {
    document.body.innerHTML = `<div id="box"><section id="one"></section><section id="two"></section></div>`;
    const box = document.getElementById("box")!;
    const add = vi.spyOn(box, "addEventListener");
    const windowAdd = vi.spyOn(window, "addEventListener");
    const wrapper = track(
      mount(MsScrollSpy, {
        props: {
          container: "#box",
          offset: 0,
          items: [
            { id: "one", label: "One" },
            { id: "two", label: "Two" },
          ],
        },
        attachTo: document.body,
      }),
    );
    expect(add).toHaveBeenCalledWith("scroll", expect.any(Function), { passive: true });
    expect(windowAdd.mock.calls.some(([type]) => type === "scroll")).toBe(false);

    vi.spyOn(document.getElementById("two")!, "getBoundingClientRect").mockReturnValue({
      top: -10,
    } as DOMRect);
    box.dispatchEvent(new Event("scroll"));
    await nextTick();
    expect(wrapper.emitted("activeChange")?.at(-1)).toEqual(["two"]);
  });
});

describe("MsProvider colorMode inherit", () => {
  it("omits data-ms-color-mode (and an unchanged theme) on the wrapper", () => {
    const wrapper = track(
      mount(MsProvider, {
        props: { colorMode: "dark" },
        slots: {
          default: () =>
            h(MsProvider, { colorMode: "inherit", density: "compact", class: "inner" }, () => "x"),
        },
      }),
    );
    const inner = wrapper.find(".inner");
    expect(inner.attributes("data-ms-color-mode")).toBeUndefined();
    expect(inner.attributes("data-ms-theme")).toBeUndefined();
    expect(inner.attributes("data-ms-density")).toBe("compact");
    expect(wrapper.attributes("data-ms-color-mode")).toBe("dark");
  });

  it("keeps a different theme on the wrapper", () => {
    const wrapper = track(
      mount(MsProvider, { props: { colorMode: "inherit", theme: "graphite" } }),
    );
    expect(wrapper.attributes("data-ms-theme")).toBe("graphite");
    expect(wrapper.attributes("data-ms-color-mode")).toBeUndefined();
  });
});
