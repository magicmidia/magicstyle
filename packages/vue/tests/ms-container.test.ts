import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsContainer from "../src/components/MsContainer/MsContainer.vue";

describe("MsContainer", () => {
  it("renders container with default classes and tag", () => {
    const wrapper = mount(MsContainer, {
      slots: { default: () => "Container Content" },
    });

    expect(wrapper.classes()).toContain("ms-container");
    expect(wrapper.classes()).toContain("ms-container--max-xl");
    expect(wrapper.classes()).toContain("ms-container--padded");
    expect(wrapper.element.tagName.toLowerCase()).toBe("div");
    expect(wrapper.text()).toBe("Container Content");
  });

  it("applies custom maxWidth, padded false, and custom tag", () => {
    const wrapper = mount(MsContainer, {
      props: {
        maxWidth: "fluid",
        padded: false,
        as: "section",
      },
      slots: { default: () => "Fluid Section" },
    });

    expect(wrapper.classes()).toContain("ms-container--max-fluid");
    expect(wrapper.classes()).not.toContain("ms-container--padded");
    expect(wrapper.element.tagName.toLowerCase()).toBe("section");
  });
});
