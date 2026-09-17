import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsSidebar } from "../src";

describe("MsSidebar", () => {
  it("renders with default classes and attributes", () => {
    const wrapper = mount(MsSidebar, {
      slots: {
        default: "Sidebar Content",
      },
    });

    expect(wrapper.classes()).toContain("ms-sidebar");
    expect(wrapper.classes()).toContain("ms-sidebar--side-left");
    expect(wrapper.classes()).toContain("ms-sidebar--position-sticky");
    expect(wrapper.classes()).toContain("ms-sidebar--width-normal");
    expect(wrapper.attributes("data-collapsed")).toBe("false");
    expect(wrapper.find(".ms-sidebar__body").text()).toBe("Sidebar Content");
  });

  it("handles collapsed state and width variants", () => {
    const wrapper = mount(MsSidebar, {
      props: {
        collapsed: true,
        width: "wide",
        side: "right",
        variant: "bordered",
        tone: "neutral",
      },
    });

    expect(wrapper.classes()).toContain("ms-sidebar--collapsed");
    expect(wrapper.classes()).toContain("ms-sidebar--width-wide");
    expect(wrapper.classes()).toContain("ms-sidebar--side-right");
    expect(wrapper.classes()).toContain("ms-sidebar--variant-bordered");
    expect(wrapper.classes()).toContain("ms-sidebar--tone-neutral");
    expect(wrapper.attributes("data-collapsed")).toBe("true");
  });

  it("emits update:collapsed and toggle when collapse button is clicked", async () => {
    const wrapper = mount(MsSidebar, {
      props: {
        collapsed: false,
        showToggle: true,
      },
      slots: {
        header: "Logo",
      },
    });

    const toggleBtn = wrapper.find(".ms-sidebar__collapse-btn");
    expect(toggleBtn.exists()).toBe(true);
    await toggleBtn.trigger("click");

    expect(wrapper.emitted("update:collapsed")?.[0]).toEqual([true]);
    expect(wrapper.emitted("toggle")).toHaveLength(1);
  });
});
