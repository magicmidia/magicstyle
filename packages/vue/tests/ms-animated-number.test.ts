import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsAnimatedNumber from "../src/components/MsAnimatedNumber/MsAnimatedNumber.vue";

describe("MsAnimatedNumber", () => {
  it("renders initial formatted number with prefix and suffix", () => {
    const wrapper = mount(MsAnimatedNumber, {
      props: {
        value: 1250,
        prefix: "$",
        suffix: " USD",
        duration: 0,
      },
    });

    expect(wrapper.classes()).toContain("ms-animated-number");
    expect(wrapper.text()).toBe("$1250 USD");
  });

  it("handles decimal places and custom formatter", () => {
    const wrapper = mount(MsAnimatedNumber, {
      props: {
        value: 99.456,
        decimals: 2,
        duration: 0,
      },
    });

    expect(wrapper.text()).toBe("99.46");
  });
});
