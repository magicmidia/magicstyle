import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import MsNativeSelect from "../src/components/MsNativeSelect/MsNativeSelect.vue";
import MsField from "../src/components/MsField/MsField.vue";

describe("MsNativeSelect", () => {
  const sampleOptions = [
    { label: "Opção 1", value: "opt1" },
    { label: "Opção 2", value: "opt2" },
    { label: "Opção 3 (desabilitada)", value: "opt3", disabled: true },
  ];

  it("renders options from options prop", () => {
    const wrapper = mount(MsNativeSelect, {
      props: {
        options: sampleOptions,
        modelValue: "opt1",
      },
    });

    const select = wrapper.find("select");
    expect(select.exists()).toBe(true);
    expect(select.classes()).toContain("ms-native-select");

    const options = wrapper.findAll("option");
    expect(options).toHaveLength(3);
    expect(options[0]!.text()).toBe("Opção 1");
    expect(options[2]!.attributes("disabled")).toBeDefined();
  });

  it("renders options from slot when options prop is not provided", () => {
    const wrapper = mount(MsNativeSelect, {
      slots: {
        default: () => [
          h("option", { value: "a" }, "Item A"),
          h("option", { value: "b" }, "Item B"),
        ],
      },
    });

    const options = wrapper.findAll("option");
    expect(options).toHaveLength(2);
    expect(options[0]!.text()).toBe("Item A");
  });

  it("emits update:modelValue and change events when selection changes", async () => {
    const wrapper = mount(MsNativeSelect, {
      props: {
        options: sampleOptions,
        modelValue: "opt1",
      },
    });

    const select = wrapper.find("select");
    await select.setValue("opt2");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["opt2"]);
    expect(wrapper.emitted("change")).toBeTruthy();
    expect(wrapper.emitted("change")![0]).toEqual(["opt2"]);
  });

  it("renders placeholder option correctly", () => {
    const wrapper = mount(MsNativeSelect, {
      props: {
        options: sampleOptions,
        placeholder: "Selecione um item...",
      },
    });

    const firstOption = wrapper.find("option");
    expect(firstOption.text()).toBe("Selecione um item...");
    expect(firstOption.attributes("disabled")).toBeDefined();
  });

  it("applies data-size attribute", () => {
    const wrapper = mount(MsNativeSelect, {
      props: {
        size: "lg",
        options: sampleOptions,
      },
    });

    expect(wrapper.find("select").attributes("data-size")).toBe("lg");
  });

  it("handles disabled state properly", () => {
    const wrapper = mount(MsNativeSelect, {
      props: {
        disabled: true,
        options: sampleOptions,
      },
    });

    const select = wrapper.find("select");
    expect(select.attributes("disabled")).toBeDefined();
    expect(select.attributes("data-disabled")).toBe("true");
  });

  it("integrates seamlessly into MsField context", async () => {
    const wrapper = mount(MsField, {
      props: {
        label: "País",
        description: "Selecione seu país de residência",
        error: "Seleção obrigatória",
      },
      slots: {
        default: () => h(MsNativeSelect, { options: sampleOptions }),
      },
    });

    await nextTick();
    const select = wrapper.find("select");
    expect(select.attributes("id")).toBeDefined();
    expect(select.attributes("aria-describedby")).toBeDefined();
    expect(select.attributes("aria-invalid")).toBe("true");
    expect(select.attributes("data-invalid")).toBe("true");
  });

  it("supports variant, tone, and pill attributes", () => {
    const wrapper = mount(MsNativeSelect, {
      props: {
        variant: "filled",
        tone: "success",
        pill: true,
        options: sampleOptions,
      },
    });

    const select = wrapper.find("select");
    expect(select.attributes("data-variant")).toBe("filled");
    expect(select.attributes("data-tone")).toBe("success");
    expect(select.attributes("data-pill")).toBe("true");
  });
});
