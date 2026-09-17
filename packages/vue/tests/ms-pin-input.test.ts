import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsPinInput } from "../src/index.ts";

describe("MsPinInput component", () => {
  it("renders specified count of input boxes", () => {
    const wrapper = mount(MsPinInput, {
      props: { length: 6 },
    });
    const inputs = wrapper.findAll("input.ms-pin-input__box");
    expect(inputs.length).toBe(6);
  });

  it("updates individual boxes from modelValue", () => {
    const wrapper = mount(MsPinInput, {
      props: { length: 4, modelValue: "1234" },
    });
    const inputs = wrapper.findAll("input");
    expect(inputs[0]?.element.value).toBe("1");
    expect(inputs[1]?.element.value).toBe("2");
    expect(inputs[2]?.element.value).toBe("3");
    expect(inputs[3]?.element.value).toBe("4");
  });

  it("emits update:modelValue and complete when all boxes filled", async () => {
    const wrapper = mount(MsPinInput, {
      props: { length: 4 },
    });
    const inputs = wrapper.findAll("input");
    inputs[0]!.element.value = "1";
    await inputs[0]!.trigger("input");
    inputs[1]!.element.value = "2";
    await inputs[1]!.trigger("input");
    inputs[2]!.element.value = "3";
    await inputs[2]!.trigger("input");
    inputs[3]!.element.value = "4";
    await inputs[3]!.trigger("input");

    expect(wrapper.emitted("complete")?.[0]).toEqual(["1234"]);
  });

  it("supports separator between boxes", () => {
    const wrapper = mount(MsPinInput, {
      props: { length: 4, separator: "-" },
    });
    const seps = wrapper.findAll(".ms-pin-input__separator");
    expect(seps.length).toBe(3);
    expect(seps[0]?.text()).toBe("-");
  });
});
