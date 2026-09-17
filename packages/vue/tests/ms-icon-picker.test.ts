import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsIconPicker } from "../src/index.ts";

describe("MsIconPicker component", () => {
  it("renders trigger and opens icon grid on click", async () => {
    const wrapper = mount(MsIconPicker, {
      props: { placeholder: "Escolha um ícone" },
    });
    const trigger = wrapper.find("button.ms-icon-picker__trigger");
    expect(trigger.text()).toContain("Escolha um ícone");

    await trigger.trigger("click");
    const dropdown = wrapper.find(".ms-icon-picker__dropdown");
    expect(dropdown.exists()).toBe(true);
    const icons = wrapper.findAll(".ms-icon-picker__item");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("selects an icon and emits update:modelValue", async () => {
    const wrapper = mount(MsIconPicker);
    await wrapper.find("button.ms-icon-picker__trigger").trigger("click");

    const firstIcon = wrapper.find(".ms-icon-picker__item");
    await firstIcon.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("select")).toBeTruthy();
  });

  it("renders vector SVGs for icons", () => {
    const wrapper = mount(MsIconPicker, {
      props: { modelValue: "home" },
    });
    const previewSvg = wrapper.find(".ms-icon-picker__preview svg");
    expect(previewSvg.exists()).toBe(true);
  });
});
