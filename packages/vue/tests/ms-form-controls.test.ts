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

  it("does not mark invalid when error is empty string", async () => {
    const wrapper = mount(MsField, {
      props: { label: "Email", error: "" },
      slots: { default: () => h(MsInput, { modelValue: "" }) },
    });
    await nextTick();
    expect(wrapper.find(".ms-field-error").exists()).toBe(false);
    expect(wrapper.find("input").attributes("aria-invalid")).toBeUndefined();
  });

  it("supports horizontal orientation and wraps content", () => {
    const wrapper = mount(MsField, {
      props: { label: "Bio", orientation: "horizontal", description: "Breve biografia" },
      slots: { default: () => h("input") },
    });
    expect(wrapper.classes()).toContain("ms-field--horizontal");
    expect(wrapper.find(".ms-field-content").exists()).toBe(true);
    expect(wrapper.find(".ms-field-content .ms-field-description").text()).toBe("Breve biografia");
  });

  it("renders optional indicator when optional is true and not required", () => {
    const wrapper = mount(MsField, {
      props: { label: "Website", optional: true },
      slots: { default: () => h("input") },
    });
    expect(wrapper.find(".ms-field-optional").exists()).toBe(true);
    expect(wrapper.find(".ms-field-optional").text()).toBe("(opcional)");
  });

  it("applies size classes for sm and lg", () => {
    const sm = mount(MsField, { props: { label: "Small", size: "sm" } });
    expect(sm.classes()).toContain("ms-field--sm");

    const lg = mount(MsField, { props: { label: "Large", size: "lg" } });
    expect(lg.classes()).toContain("ms-field--lg");
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
    for (const tone of [
      "primary",
      "secondary",
      "accent",
      "neutral",
      "success",
      "info",
      "warning",
      "danger",
    ] as const) {
      const wrapper = mount(MsInput, { props: { tone } });
      expect(wrapper.find(".ms-input").attributes("data-tone")).toBe(tone);
    }

    const xs = mount(MsInput, { props: { size: "xs" } });
    expect(xs.find(".ms-input").attributes("data-size")).toBe("xs");

    const floating = mount(MsInput, { props: { floatingLabel: "Email" } });
    expect(floating.find(".ms-input").attributes("data-floating")).toBeDefined();
    expect(floating.find(".ms-input-floating-label").text()).toBe("Email");
    expect(floating.find("input").attributes("placeholder")).toBe(" ");
  });

  it("supports variants, pill, clearable, and passwordToggle", async () => {
    const filled = mount(MsInput, { props: { variant: "filled", pill: true } });
    expect(filled.find(".ms-input").attributes("data-variant")).toBe("filled");
    expect(filled.find(".ms-input").attributes("data-pill")).toBe("true");

    const clearable = mount(MsInput, { props: { modelValue: "Texto", clearable: true } });
    const clearBtn = clearable.find(".ms-input-action-btn");
    expect(clearBtn.exists()).toBe(true);
    await clearBtn.trigger("click");
    expect(clearable.emitted("update:modelValue")?.[0]).toEqual([""]);
    expect(clearable.emitted("clear")).toBeTruthy();

    const pwd = mount(MsInput, {
      props: { type: "password", modelValue: "secret123", passwordToggle: true },
    });
    expect(pwd.find("input").attributes("type")).toBe("password");
    const toggleBtn = pwd.find(".ms-input-action-btn");
    expect(toggleBtn.exists()).toBe(true);
    await toggleBtn.trigger("click");
    expect(pwd.find("input").attributes("type")).toBe("text");
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

  it("supports size, resize, and character count display", () => {
    const wrapper = mount(MsTextarea, {
      props: {
        modelValue: "Texto teste",
        size: "lg",
        resize: "both",
        showCount: true,
        maxLength: 100,
      },
    });

    expect(wrapper.find(".ms-textarea").classes()).toContain("ms-textarea--lg");
    expect(wrapper.find("textarea").classes()).toContain("ms-textarea--resize-both");
    expect(wrapper.find(".ms-textarea__counter").text()).toBe("11 / 100");
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

  it("supports sizes, tones, card mode, and description", () => {
    const wrapper = mount(MsCheckbox, {
      props: {
        label: "Plano Pro",
        description: "Acesso a todos os recursos premium",
        size: "lg",
        tone: "accent",
        card: true,
      },
    });

    expect(wrapper.attributes("data-size")).toBe("lg");
    expect(wrapper.attributes("data-tone")).toBe("accent");
    expect(wrapper.attributes("data-card")).toBe("true");
    expect(wrapper.find(".ms-checkbox-label").text()).toBe("Plano Pro");
    expect(wrapper.find(".ms-checkbox-description").text()).toBe(
      "Acesso a todos os recursos premium",
    );
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

  it("updates radio checked states reactively when modelValue changes", async () => {
    const wrapper = mount(MsRadioGroup, {
      props: { modelValue: "a" },
      slots: {
        default: () => [
          h(MsRadio, { value: "a", label: "A" }),
          h(MsRadio, { value: "b", label: "B" }),
        ],
      },
    });
    const radios = wrapper.findAll('input[type="radio"]');
    expect((radios[0]!.element as HTMLInputElement).checked).toBe(true);
    expect((radios[1]!.element as HTMLInputElement).checked).toBe(false);

    await wrapper.setProps({ modelValue: "b" });
    await nextTick();
    expect((radios[0]!.element as HTMLInputElement).checked).toBe(false);
    expect((radios[1]!.element as HTMLInputElement).checked).toBe(true);
  });

  it("supports size, tone, card mode, orientation and description", () => {
    const wrapper = mount(MsRadioGroup, {
      props: {
        modelValue: "pro",
        orientation: "vertical",
        size: "lg",
        tone: "success",
        card: true,
      },
      slots: {
        default: () => [
          h(MsRadio, { value: "free", label: "Starter", description: "Gratuito" }),
          h(MsRadio, { value: "pro", label: "Pro", description: "Profissional" }),
        ],
      },
    });

    expect(wrapper.classes()).toContain("ms-radio-group--vertical");
    const radios = wrapper.findAll(".ms-radio");
    expect(radios[0]!.classes()).toContain("ms-radio--lg");
    expect(radios[0]!.classes()).toContain("ms-radio--success");
    expect(radios[0]!.classes()).toContain("ms-radio--card");
    expect(radios[1]!.attributes("data-checked")).toBeDefined();
    expect(radios[0]!.find(".ms-radio-description").text()).toBe("Gratuito");
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

  it("supports sizes, tones, labelPlacement and description", () => {
    const wrapper = mount(MsSwitch, {
      props: {
        label: "Notificações",
        description: "Receba alertas no desktop",
        size: "lg",
        tone: "success",
        labelPlacement: "left",
      },
    });

    expect(wrapper.attributes("data-size")).toBe("lg");
    expect(wrapper.attributes("data-tone")).toBe("success");
    expect(wrapper.attributes("data-label-placement")).toBe("left");
    expect(wrapper.find(".ms-switch-label").text()).toBe("Notificações");
    expect(wrapper.find(".ms-switch-description").text()).toBe("Receba alertas no desktop");
  });
});
