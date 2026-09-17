import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsRating from "../src/components/MsRating/MsRating.vue";

describe("MsRating", () => {
  it("renders 5 stars and handles click selection", async () => {
    const wrapper = mount(MsRating, {
      props: {
        modelValue: 3,
        max: 5,
      },
    });

    expect(wrapper.classes()).toContain("ms-rating");
    const buttons = wrapper.findAll(".ms-rating__item");
    expect(buttons.length).toBe(5);

    // Click 4th star
    await buttons[3]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([4]);
    expect(wrapper.emitted("change")?.[0]).toEqual([4]);
  });

  it("prevents interaction when readonly or disabled", async () => {
    const wrapper = mount(MsRating, {
      props: {
        modelValue: 2,
        readonly: true,
      },
    });

    const buttons = wrapper.findAll(".ms-rating__item");
    await buttons[4]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
