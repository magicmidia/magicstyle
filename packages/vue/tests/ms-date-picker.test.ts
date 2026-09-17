import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsDatePicker } from "../src/index.ts";

describe("MsDatePicker component", () => {
  it("renders input field and opens calendar on click", async () => {
    const wrapper = mount(MsDatePicker, {
      props: { placeholder: "Escolha uma data" },
    });
    const input = wrapper.find("input.ms-date-picker__input");
    expect(input.attributes("placeholder")).toBe("Escolha uma data");

    await input.trigger("click");
    const dropdown = wrapper.find(".ms-date-picker__dropdown");
    expect(dropdown.exists()).toBe(true);

    const days = wrapper.findAll(".ms-date-picker__day");
    expect(days.length).toBe(42);
  });

  it("selects a day and emits update:modelValue", async () => {
    const wrapper = mount(MsDatePicker);
    await wrapper.find("input").trigger("click");

    const activeDay = wrapper
      .findAll(".ms-date-picker__day")
      .find((d) => !d.classes().includes("ms-date-picker__day--other-month"));
    await activeDay?.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("handles range mode selection", async () => {
    const wrapper = mount(MsDatePicker, {
      props: {
        mode: "range",
        modelValue: { start: "2026-09-10", end: "2026-09-20" },
      },
    });
    const input = wrapper.find("input.ms-date-picker__input");
    const el = input.element as HTMLInputElement;
    expect(el.value).toContain("2026-09-10");
    expect(el.value).toContain("2026-09-20");
  });

  it("handles time mode selection", async () => {
    const wrapper = mount(MsDatePicker, {
      props: {
        mode: "time",
        modelValue: "15:45",
      },
    });
    const input = wrapper.find("input.ms-date-picker__input");
    const el = input.element as HTMLInputElement;
    expect(el.value).toBe("15:45");
  });
});
