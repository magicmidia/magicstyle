import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsParallax } from "../src/index.ts";

describe("MsParallax component", () => {
  it("renders layer and content", () => {
    const wrapper = mount(MsParallax, {
      slots: {
        background: '<div class="bg">Background Image</div>',
        default: '<div class="fg">Foreground Text</div>',
      },
    });
    expect(wrapper.classes()).toContain("ms-parallax");
    expect(wrapper.find(".ms-parallax__layer").exists()).toBe(true);
    expect(wrapper.find(".ms-parallax__content").exists()).toBe(true);
    expect(wrapper.text()).toContain("Background Image");
    expect(wrapper.text()).toContain("Foreground Text");
  });
});
