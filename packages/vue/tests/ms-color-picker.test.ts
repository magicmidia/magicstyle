import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsColorPicker from "../src/components/MsColorPicker/MsColorPicker.vue";

describe("MsColorPicker", () => {
  it("renders color swatch preview, input, and updates on swatch click", async () => {
    const wrapper = mount(MsColorPicker, {
      props: {
        modelValue: "#6366f1",
      },
    });

    expect(wrapper.classes()).toContain("ms-color-picker");

    const input = wrapper.find(".ms-color-picker__input");
    expect(input.exists()).toBe(true);

    const swatches = wrapper.findAll(".ms-color-picker__swatch");
    expect(swatches.length).toBeGreaterThan(0);

    // Click 2nd swatch (#3b82f6)
    await swatches[1]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["#3b82f6"]);
  });
});
