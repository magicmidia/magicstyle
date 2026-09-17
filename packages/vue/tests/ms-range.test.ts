import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsRange from "../src/components/MsRange/MsRange.vue";

describe("MsRange", () => {
  it("renders range input with min, max, value and tone", async () => {
    const wrapper = mount(MsRange, {
      props: {
        modelValue: 40,
        min: 0,
        max: 100,
        tone: "success",
        showValue: true,
      },
    });

    const input = wrapper.find("input[type='range']");
    expect(input.exists()).toBe(true);
    expect(input.classes()).toContain("ms-range--tone-success");
    expect(wrapper.find(".ms-range__value").text()).toBe("40");

    await input.setValue("65");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([65]);
  });
});
