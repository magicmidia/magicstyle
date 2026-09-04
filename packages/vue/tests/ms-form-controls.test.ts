import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick, h } from "vue";
import {
  MsCheckbox,
  MsField,
  MsInput,
  MsRadio,
  MsRadioGroup,
  MsSwitch,
  MsTextarea,
} from "../src/index.ts";

describe("MsField wiring", () => {
  it("links label to the control id and marks required", () => {
    const wrapper = mount(MsField, {
      props: { label: "Nome", required: true },
      slots: { default: () => "control" },
    });
    expect(wrapper.find(".ms-field-label").attributes("for")).toMatch(/^ms-field-/);
    expect(wrapper.find(".ms-field").attributes("data-required")).toBeDefined();
  });

  it("wires error into inputs via field context", async () => {
    const wrapper = mount(MsField, {
      props: { label: "Email", error: "Inválido" },
      slots: { default: () => h(MsInput, { modelValue: "" }) },
    });
    await nextTick();
    expect(wrapper.find(".ms-field-error").text()).toBe("Inválido");
    expect(wrapper.find("input").attributes("aria-invalid")).toBe("true");
  });
});

describe("MsInput", () => {
  it("emits update:modelValue on input", async () => {
    const wrapper = mount(MsInput, { props: { modelValue: "a" } });
    await wrapper.find("input").setValue("ab");
    expect(wrapper.emitted("update:modelValue")?.at(-1)?.[0]).toBe("ab");
  });

  it("exposes size and renders prefix/suffix hooks", () => {
    const wrapper = mount(MsInput, {
      props: { size: "lg" },
      slots: { prefix: "$", suffix: "USD" },
    });
    expect(wrapper.find(".ms-input").attributes("data-size")).toBe("lg");
    expect(wrapper.find('[data-ms-slot="prefix"]').text()).toBe("$");
    expect(wrapper.find('[data-ms-slot="suffix"]').text()).toBe("USD");
  });

  it("marks invalid and disabled states", () => {
    const wrapper = mount(MsInput, { props: { invalid: true, disabled: true } });
    expect(wrapper.find(".ms-input").attributes("data-invalid")).toBeDefined();
    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });

  it("applies tone and floating label", () => {
    const tone = mount(MsInput, { props: { tone: "success" } });
    expect(tone.find(".ms-input").attributes("data-tone")).toBe("success");

    const floating = mount(MsInput, { props: { floatingLabel: "Email" } });
    expect(floating.find(".ms-input").attributes("data-floating")).toBeDefined();
    expect(floating.find(".ms-input-floating-label").text()).toBe("Email");
    expect(floating.find("input").attributes("placeholder")).toBe(" ");
  });
});

describe("MsTextarea", () => {
  it("emits update:modelValue and renders textarea", async () => {
    const wrapper = mount(MsTextarea, { props: { modelValue: "a" } });
    await wrapper.find("textarea").setValue("abc");
    expect(wrapper.emitted("update:modelValue")?.at(-1)?.[0]).toBe("abc");
  });

  it("marks invalid state", () => {
    const wrapper = mount(MsTextarea, { props: { invalid: true } });
    expect(wrapper.find(".ms-textarea").attributes("data-invalid")).toBeDefined();
    expect(wrapper.find("textarea").attributes("aria-invalid")).toBe("true");
  });
});

describe("MsCheckbox", () => {
  it("emits update:checked and sets aria-checked mixed when indeterminate", async () => {
    const wrapper = mount(MsCheckbox, { props: { label: "Aceito" } });
    await wrapper.find("input").setValue(true);
    expect(wrapper.emitted("update:checked")?.at(-1)?.[0]).toBe(true);

    const ind = mount(MsCheckbox, { props: { indeterminate: true } });
    expect(ind.find("input").attributes("aria-checked")).toBe("mixed");
  });
});

describe("MsRadioGroup/MsRadio", () => {
  it("selects a value and emits update:modelValue", async () => {
    const wrapper = mount(MsRadioGroup, {
      props: { modelValue: undefined },
      slots: {
        default: () => [
          h(MsRadio, { value: "a", label: "A" }),
          h(MsRadio, { value: "b", label: "B" }),
        ],
      },
    });
    const radios = wrapper.findAll('input[type="radio"]');
    expect(radios).toHaveLength(2);
    await radios[1]!.setValue(true);
    expect(wrapper.emitted("update:modelValue")?.at(-1)?.[0]).toBe("b");
  });

  it("shares the same name across radios", () => {
    const wrapper = mount(MsRadioGroup, {
      slots: { default: () => [h(MsRadio, { value: 1 }), h(MsRadio, { value: 2 })] },
    });
    const names = wrapper.findAll('input[type="radio"]').map((r) => r.attributes("name"));
    expect(names[0]).toBeDefined();
    expect(names[0]).toBe(names[1]);
  });
});

describe("MsSwitch", () => {
  it("uses role=switch and emits update:checked", async () => {
    const wrapper = mount(MsSwitch, { props: { label: "Ativo" } });
    const input = wrapper.find('input[type="checkbox"]');
    expect(input.attributes("role")).toBe("switch");
    await input.setValue(true);
    expect(wrapper.emitted("update:checked")?.at(-1)?.[0]).toBe(true);
  });
});
