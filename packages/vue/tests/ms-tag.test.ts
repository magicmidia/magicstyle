import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MsTag from "../src/components/MsTag/MsTag.vue";

describe("MsTag (doc 05 §10)", () => {
  it("renders with default props and slot content", () => {
    const wrapper = mount(MsTag, {
      slots: {
        default: () => "Design Tokens",
      },
    });

    expect(wrapper.classes()).toContain("ms-tag");
    expect(wrapper.classes()).toContain("ms-tag--soft");
    expect(wrapper.classes()).toContain("ms-tag--neutral");
    expect(wrapper.classes()).toContain("ms-tag--md");
    expect(wrapper.text()).toContain("Design Tokens");
    expect(wrapper.find("button.ms-tag__close").exists()).toBe(false);
  });

  it("applies variant, tone, and size classes", () => {
    const wrapper = mount(MsTag, {
      props: {
        variant: "solid",
        tone: "primary",
        size: "lg",
      },
    });

    expect(wrapper.classes()).toContain("ms-tag--solid");
    expect(wrapper.classes()).toContain("ms-tag--primary");
    expect(wrapper.classes()).toContain("ms-tag--lg");
  });

  it("renders close button and emits close event on click", async () => {
    const wrapper = mount(MsTag, {
      props: {
        closable: true,
      },
      slots: {
        default: () => "Active filter",
      },
    });

    const closeBtn = wrapper.find("button.ms-tag__close");
    expect(closeBtn.exists()).toBe(true);
    expect(closeBtn.attributes("aria-label")).toBe("Remove");

    await closeBtn.trigger("click");
    expect(wrapper.emitted("close")).toHaveLength(1);
  });

  it("handles clickable state and keydown triggers", async () => {
    const wrapper = mount(MsTag, {
      props: {
        clickable: true,
      },
      slots: {
        default: () => "Clickable",
      },
    });

    expect(wrapper.classes()).toContain("ms-tag--clickable");
    expect(wrapper.attributes("role")).toBe("button");
    expect(wrapper.attributes("tabindex")).toBe("0");

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);

    await wrapper.trigger("keydown.enter");
    expect(wrapper.emitted("click")).toHaveLength(2);
  });

  it("prevents interaction when disabled", async () => {
    const wrapper = mount(MsTag, {
      props: {
        closable: true,
        clickable: true,
        disabled: true,
      },
      slots: {
        default: () => "Blocked",
      },
    });

    expect(wrapper.classes()).toContain("ms-tag--disabled");
    expect(wrapper.attributes("tabindex")).toBeUndefined();

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();

    const closeBtn = wrapper.find("button.ms-tag__close");
    await closeBtn.trigger("click");
    expect(wrapper.emitted("close")).toBeUndefined();
  });

  it("supports pill/square shapes, dot indicator, and suffix slot", () => {
    const wrapper = mount(MsTag, {
      props: {
        shape: "pill",
        dot: true,
        tone: "success",
      },
      slots: {
        default: () => "Online",
        suffix: () => "✓",
      },
    });

    expect(wrapper.classes()).toContain("ms-tag--pill");
    expect(wrapper.find(".ms-tag__dot").exists()).toBe(true);
    expect(wrapper.find(".ms-tag__suffix").text()).toBe("✓");

    const square = mount(MsTag, { props: { shape: "square" } });
    expect(square.classes()).toContain("ms-tag--square");
  });
});
