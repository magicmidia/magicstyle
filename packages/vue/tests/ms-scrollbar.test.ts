import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsScrollbar } from "../src";

describe("MsScrollbar", () => {
  it("renders with default props and classes", () => {
    const wrapper = mount(MsScrollbar, {
      slots: {
        default: "Scrollable Content",
      },
    });

    expect(wrapper.classes()).toContain("ms-scrollbar");
    expect(wrapper.classes()).toContain("ms-scrollbar--vertical");
    expect(wrapper.classes()).toContain("ms-scrollbar--size-normal");
    expect(wrapper.classes()).toContain("ms-scrollbar--visibility-auto");
    expect(wrapper.classes()).not.toContain("ms-scrollbar--arrows");
    expect(wrapper.attributes("data-arrows")).toBe("false");
    expect(wrapper.text()).toBe("Scrollable Content");
  });

  it("applies orientation, size, tone, dimension, and color styles", () => {
    const wrapper = mount(MsScrollbar, {
      props: {
        orientation: "both",
        size: "thick",
        tone: "accent",
        arrows: true,
        trackColor: "#f1f5f9",
        thumbColor: "#341f97",
        thumbRadius: 8,
        maxHeight: 250,
        maxWidth: "400px",
      },
    });

    expect(wrapper.classes()).toContain("ms-scrollbar--both");
    expect(wrapper.classes()).toContain("ms-scrollbar--size-thick");
    expect(wrapper.classes()).toContain("ms-scrollbar--tone-accent");
    expect(wrapper.classes()).toContain("ms-scrollbar--arrows");
    expect(wrapper.attributes("data-arrows")).toBe("true");
    expect(wrapper.attributes("style")).toContain("max-height: 250px");
    expect(wrapper.attributes("style")).toContain("max-width: 400px");
    expect(wrapper.attributes("style")).toContain("--ms-scrollbar-track: #f1f5f9");
    expect(wrapper.attributes("style")).toContain("--ms-scrollbar-thumb: #341f97");
    expect(wrapper.attributes("style")).toContain("--ms-scrollbar-radius: 8px");
  });
});
