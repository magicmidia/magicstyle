import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsSeparator from "../src/components/MsSeparator/MsSeparator.vue";

describe("MsSeparator", () => {
  it("renders with default horizontal orientation and decorative attributes", () => {
    const wrapper = mount(MsSeparator);
    expect(wrapper.classes()).toContain("ms-separator");
    expect(wrapper.classes()).toContain("ms-separator--horizontal");
    expect(wrapper.attributes("role")).toBe("none");
    expect(wrapper.attributes("aria-hidden")).toBe("true");
  });

  it("renders non-decorative vertical separator with role separator", () => {
    const wrapper = mount(MsSeparator, {
      props: {
        orientation: "vertical",
        decorative: false,
      },
    });
    expect(wrapper.classes()).toContain("ms-separator--vertical");
    expect(wrapper.attributes("role")).toBe("separator");
    expect(wrapper.attributes("aria-orientation")).toBe("vertical");
    expect(wrapper.attributes("aria-hidden")).toBeUndefined();
  });

  it("applies variant classes", () => {
    const wrapper = mount(MsSeparator, {
      props: {
        variant: "dashed",
      },
    });
    expect(wrapper.classes()).toContain("ms-separator--dashed");
  });

  it("supports tones, thickness, and labeled text dividers", () => {
    const wrapper = mount(MsSeparator, {
      props: {
        tone: "primary",
        thickness: 2,
        label: "OU",
        align: "center",
      },
    });

    expect(wrapper.find(".ms-separator-group").exists()).toBe(true);
    expect(wrapper.find(".ms-separator__label").text()).toBe("OU");
    const parts = wrapper.findAll(".ms-separator-part");
    expect(parts).toHaveLength(2);
    expect(parts[0]!.classes()).toContain("ms-separator--tone-primary");
    expect(parts[0]!.classes()).toContain("ms-separator--thickness-2");
  });
});
