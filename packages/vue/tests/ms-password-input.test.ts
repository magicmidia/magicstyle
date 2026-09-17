import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsPasswordInput } from "../src/index.ts";

describe("MsPasswordInput component", () => {
  it("renders password input with show/hide toggle", async () => {
    const wrapper = mount(MsPasswordInput, {
      props: { modelValue: "secret123" },
    });
    const input = wrapper.find("input");
    expect(input.attributes("type")).toBe("password");
    expect(input.element.value).toBe("secret123");

    const toggle = wrapper.find("button.ms-password-input__toggle");
    expect(toggle.exists()).toBe(true);

    await toggle.trigger("click");
    expect(input.attributes("type")).toBe("text");
  });

  it("calculates strength meter score and renders bars", async () => {
    const wrapper = mount(MsPasswordInput, {
      props: {
        modelValue: "P@ssw0rdEnterprise!",
        showStrengthMeter: true,
      },
    });
    const strength = wrapper.find(".ms-password-input__strength");
    expect(strength.exists()).toBe(true);
    const activeBars = wrapper.findAll(".ms-password-input__bar--active");
    expect(activeBars.length).toBeGreaterThanOrEqual(3);
  });

  it("displays criteria list and marks satisfied rules", () => {
    const wrapper = mount(MsPasswordInput, {
      props: {
        modelValue: "Aa1!",
        showCriteria: true,
      },
    });
    const criteria = wrapper.findAll(".ms-password-input__criterion");
    expect(criteria.length).toBe(5);
    const met = wrapper.findAll(".ms-password-input__criterion--met");
    // lowercase, uppercase, number, symbol -> 4 met, length < 8 -> 1 unmet
    expect(met.length).toBe(4);
  });
});
