import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h, nextTick } from "vue";
import { MsButton, MsButtonGroup, MsDropdownButton } from "../src/index.ts";

const Icon = defineComponent({ render: () => h("svg") });

describe("MsButton sizes", () => {
  it("supports sm/md/lg/xl/xxl", () => {
    for (const size of ["sm", "md", "lg", "xl", "xxl"] as const) {
      const wrapper = mount(MsButton, { props: { size }, slots: { default: "x" } });
      expect(wrapper.find("button").attributes("data-size")).toBe(size);
    }
  });
});

describe("MsButton circular (icon-only)", () => {
  it("becomes icon-only automatically when no label slot is given", () => {
    const wrapper = mount(MsButton, { slots: { "icon-start": () => h(Icon) } });
    expect(wrapper.find("button").attributes("data-icon-only")).toBeDefined();
    expect(wrapper.find(".ms-button-label").exists()).toBe(false);
  });

  it("keeps label mode when both label and icon are given", () => {
    const wrapper = mount(MsButton, { slots: { default: "Go", "icon-end": () => h(Icon) } });
    expect(wrapper.find("button").attributes("data-icon-only")).toBeUndefined();
  });
});

describe("MsButton prefix/suffix/caret", () => {
  it("renders prefix and suffix slots with documented hooks", () => {
    const wrapper = mount(MsButton, {
      slots: { default: "Run", prefix: "⌘", suffix: "K" },
    });
    expect(wrapper.find('[data-ms-slot="prefix"]').text()).toBe("⌘");
    expect(wrapper.find('[data-ms-slot="suffix"]').text()).toBe("K");
  });

  it("caret renders chevron and mirrors open state via aria-expanded", () => {
    const wrapper = mount(MsButton, {
      props: { caret: true, open: true },
      slots: { default: "Options" },
    });
    expect(wrapper.find(".ms-button-caret svg").exists()).toBe(true);
    expect(wrapper.find("button").attributes("aria-expanded")).toBe("true");
    expect(wrapper.find("button").attributes("data-open")).toBeDefined();
  });
});

describe("MsButtonGroup", () => {
  it("renders a joined group with group role", () => {
    const wrapper = mount(MsButtonGroup, {
      slots: {
        default: () => [
          h(MsButton, { variant: "outline" }, { default: () => "A" }),
          h(MsButton, { variant: "outline" }, { default: () => "B" }),
        ],
      },
    });
    expect(wrapper.find('[role="group"]').exists()).toBe(true);
    expect(wrapper.findAll("button")).toHaveLength(2);
  });
});

describe("MsDropdownButton", () => {
  const items = [
    { label: "Editar", value: "edit" },
    { label: "Duplicar", value: "duplicate", suffix: "⌘D" },
    { label: "Excluir", value: "delete", disabled: true },
  ] as const;

  it("opens the menu on click and selects an item", async () => {
    const wrapper = mount(MsDropdownButton, { props: { label: "Ações", items } });
    expect(wrapper.find('[role="menu"]').exists()).toBe(false);
    await wrapper.find("button").trigger("click");
    await nextTick();
    expect(wrapper.find('[role="menu"]').exists()).toBe(true);
    expect(wrapper.find("button").attributes("aria-expanded")).toBe("true");

    await wrapper.findAll('[role="menuitem"]')[0]!.trigger("click");
    await nextTick();
    expect(wrapper.emitted("select")?.[0]?.[0]).toMatchObject({ label: "Editar", value: "edit" });
    expect(wrapper.find('[role="menu"]').exists()).toBe(false);
  });

  it("closes on Escape", async () => {
    const wrapper = mount(MsDropdownButton, { props: { label: "Ações", items } });
    await wrapper.find("button").trigger("click");
    await nextTick();
    const menu = wrapper.find('[role="menu"]');
    await menu.trigger("keydown", { key: "Escape" });
    await nextTick();
    expect(wrapper.find('[role="menu"]').exists()).toBe(false);
  });

  it("skips disabled items on keyboard activation", async () => {
    const wrapper = mount(MsDropdownButton, { props: { label: "Ações", items } });
    await wrapper.find("button").trigger("click");
    await nextTick();
    const menu = wrapper.find('[role="menu"]');
    await menu.trigger("keydown", { key: "Enter" });
    await nextTick();
    expect((wrapper.emitted("select")?.[0]?.[0] as { value: string }).value).toBe("edit");
  });
});
