import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MsSkeleton from "../src/components/MsSkeleton/MsSkeleton.vue";

describe("MsSkeleton (doc 05 §8)", () => {
  it("renders with default props as decorative text skeleton", () => {
    const wrapper = mount(MsSkeleton);

    expect(wrapper.classes()).toContain("ms-skeleton");
    expect(wrapper.classes()).toContain("ms-skeleton--text");
    expect(wrapper.classes()).toContain("ms-skeleton--shimmer");
    expect(wrapper.attributes("aria-hidden")).toBe("true");
  });

  it("applies variant and animation classes", () => {
    const wrapper = mount(MsSkeleton, {
      props: {
        variant: "circle",
        animation: "pulse",
        width: 48,
        height: 48,
      },
    });

    expect(wrapper.classes()).toContain("ms-skeleton--circle");
    expect(wrapper.classes()).toContain("ms-skeleton--pulse");
    expect(wrapper.attributes("style")).toContain("width: 48px;");
    expect(wrapper.attributes("style")).toContain("height: 48px;");
  });

  it("renders multiple lines when count is greater than 1", () => {
    const wrapper = mount(MsSkeleton, {
      props: {
        count: 3,
        variant: "text",
      },
    });

    expect(wrapper.classes()).toContain("ms-skeleton-group");
    const lines = wrapper.findAll(".ms-skeleton");
    expect(lines).toHaveLength(3);
    // Last line should have a shorter width (70%) for natural typography flow
    expect(lines[2]?.attributes("style")).toContain("width: 70%;");
  });

  it("supports tone, speed, and preset variants", () => {
    const wrapper = mount(MsSkeleton, {
      props: {
        variant: "button",
        tone: "primary",
        speed: "fast",
      },
    });

    expect(wrapper.classes()).toContain("ms-skeleton--button");
    expect(wrapper.classes()).toContain("ms-skeleton--tone-primary");
    expect(wrapper.classes()).toContain("ms-skeleton--speed-fast");
  });
});
