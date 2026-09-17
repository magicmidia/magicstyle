import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import MsPopover from "../src/components/MsPopover/MsPopover.vue";

describe("MsPopover", () => {
  it("renders trigger slot and does not display panel when closed", () => {
    const wrapper = mount(MsPopover, {
      slots: {
        trigger: () => h("button", { class: "test-btn" }, "Click me"),
        default: () => h("div", { class: "popover-content" }, "Popover Body"),
      },
    });

    expect(wrapper.find(".test-btn").exists()).toBe(true);
    expect(wrapper.find(".ms-popover-panel").exists()).toBe(false);
  });

  it("opens popover when trigger is clicked", async () => {
    const wrapper = mount(MsPopover, {
      slots: {
        trigger: () => h("button", { class: "test-btn" }, "Click me"),
        default: () => h("div", { class: "popover-content" }, "Popover Body"),
      },
    });

    const triggerBtn = wrapper.find(".test-btn");
    await triggerBtn.trigger("click");

    expect(wrapper.find(".ms-popover-panel").exists()).toBe(true);
    expect(wrapper.text()).toContain("Popover Body");
  });

  it("respects open prop when controlled", () => {
    const wrapper = mount(MsPopover, {
      props: {
        open: true,
        title: "Popover Header",
      },
      slots: {
        default: () => "Controlled body",
      },
    });

    expect(wrapper.find(".ms-popover-panel").exists()).toBe(true);
    expect(wrapper.find(".ms-popover__header").text()).toBe("Popover Header");
    expect(wrapper.text()).toContain("Controlled body");
  });
});
