import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MsSpinner from "../src/components/MsSpinner/MsSpinner.vue";

describe("MsSpinner (doc 05 §8)", () => {
  it("renders with default props and accessibility attributes", () => {
    const wrapper = mount(MsSpinner);

    expect(wrapper.classes()).toContain("ms-spinner");
    expect(wrapper.classes()).toContain("ms-spinner--md");
    expect(wrapper.classes()).toContain("ms-spinner--primary");
    expect(wrapper.classes()).toContain("ms-spinner--normal");

    expect(wrapper.attributes("role")).toBe("status");
    expect(wrapper.attributes("aria-live")).toBe("polite");

    const hiddenText = wrapper.find(".ms-visually-hidden");
    expect(hiddenText.exists()).toBe(true);
    expect(hiddenText.text()).toBe("Loading...");
  });

  it("applies custom size and tone classes", () => {
    const wrapper = mount(MsSpinner, {
      props: {
        size: "lg",
        tone: "success",
        thickness: "thick",
        label: "Saving changes...",
      },
    });

    expect(wrapper.classes()).toContain("ms-spinner--lg");
    expect(wrapper.classes()).toContain("ms-spinner--success");
    expect(wrapper.classes()).toContain("ms-spinner--thick");

    const hiddenText = wrapper.find(".ms-visually-hidden");
    expect(hiddenText.text()).toBe("Saving changes...");
  });

  it("renders SVG track and indicator circles", () => {
    const wrapper = mount(MsSpinner);

    const svg = wrapper.find("svg.ms-spinner__svg");
    expect(svg.exists()).toBe(true);
    expect(svg.attributes("aria-hidden")).toBe("true");

    const track = wrapper.find("circle.ms-spinner__track");
    const indicator = wrapper.find("circle.ms-spinner__indicator");

    expect(track.exists()).toBe(true);
    expect(indicator.exists()).toBe(true);
  });

  it("applies speed and extended size classes", () => {
    const wrapper = mount(MsSpinner, {
      props: {
        size: "2xl",
        speed: "fast",
      },
    });

    expect(wrapper.classes()).toContain("ms-spinner--2xl");
    expect(wrapper.classes()).toContain("ms-spinner--speed-fast");
  });
});
