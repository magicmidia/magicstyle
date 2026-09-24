import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsKbd from "../src/components/MsKbd/MsKbd.vue";

describe("MsKbd", () => {
  it("renders with default props", () => {
    const wrapper = mount(MsKbd, {
      slots: { default: "⌘K" },
    });
    expect(wrapper.classes()).toContain("ms-kbd");
    expect(wrapper.classes()).toContain("ms-kbd--size-sm");
    expect(wrapper.classes()).toContain("ms-kbd--variant-raised");
    expect(wrapper.text()).toBe("⌘K");
  });

  it("applies size and variant modifiers", () => {
    const wrapper = mount(MsKbd, {
      props: { size: "lg", variant: "outline", tone: "primary" },
      slots: { default: "Ctrl" },
    });
    expect(wrapper.classes()).toContain("ms-kbd--size-lg");
    expect(wrapper.classes()).toContain("ms-kbd--variant-outline");
    expect(wrapper.classes()).toContain("ms-kbd--tone-primary");
  });
});
