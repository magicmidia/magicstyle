import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsMaskedInput } from "../src/index.ts";

describe("MsMaskedInput component", () => {
  it("renders input with mask formatting for CPF", async () => {
    const wrapper = mount(MsMaskedInput, {
      props: {
        mask: "cpf",
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);

    input.element.value = "12345678901";
    await input.trigger("input");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["123.456.789-01"]);
    expect(wrapper.emitted("update:unmasked")?.[0]).toEqual(["12345678901"]);
    expect(wrapper.emitted("complete")).toBeTruthy();
  });

  it("handles custom phone mask", async () => {
    const wrapper = mount(MsMaskedInput, {
      props: {
        mask: "phone",
      },
    });
    const input = wrapper.find("input");
    input.element.value = "11988887777";
    await input.trigger("input");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["(11) 98888-7777"]);
  });

  it("supports clearable button", async () => {
    const wrapper = mount(MsMaskedInput, {
      props: {
        modelValue: "123.456.789-01",
        clearable: true,
      },
    });
    const clearBtn = wrapper.find("button.ms-masked-input__clear");
    expect(clearBtn.exists()).toBe(true);

    await clearBtn.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([""]);
    expect(wrapper.emitted("update:unmasked")?.[0]).toEqual([""]);
  });
});
