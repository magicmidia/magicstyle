import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import { MsDatePicker, MsFileInput, MsFormWizard, MsProvider } from "../src/index.ts";

const steps = [
  { id: "one", title: "One" },
  { id: "two", title: "Two" },
];

describe("i18n group B", () => {
  it("renders MsDatePicker chrome and Intl names in English under MsProvider locale", async () => {
    const wrapper = mount(
      defineComponent(
        () => () =>
          h(MsProvider, { locale: "en-US" }, () => h(MsDatePicker, { modelValue: "2026-02-10" })),
      ),
      { attachTo: document.body },
    );
    const input = wrapper.find("input.ms-date-picker__input");
    expect(input.attributes("placeholder")).toBe("Select a date...");
    await input.trigger("click");

    expect(wrapper.find(".ms-date-picker__title").text()).toBe("February 2026");
    const nav = wrapper.findAll(".ms-date-picker__nav-btn");
    expect(nav[0]?.attributes("aria-label")).toBe("Previous month");
    expect(nav[1]?.attributes("aria-label")).toBe("Next month");
    expect(wrapper.find('[role="dialog"]').attributes("aria-label")).toBe("Choose date");

    const headers = wrapper.findAll('[role="columnheader"]');
    expect(headers.map((c) => c.text())).toEqual(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    expect(headers[1]?.attributes("abbr")).toBe("Monday");

    expect(wrapper.find('[data-date="2026-02-10"]').attributes("aria-label")).toBe(
      "February 10, 2026",
    );
    expect(wrapper.find(".ms-date-picker__presets").text()).toContain("Today");
    expect(wrapper.find(".ms-date-picker__clear-btn").attributes("aria-label")).toBe("Clear date");
    wrapper.unmount();
  });

  it("renders MsFormWizard and MsFileInput strings in English", () => {
    const wrapper = mount(
      defineComponent(
        () => () =>
          h(MsProvider, { locale: "en-US" }, () => [h(MsFormWizard, { steps }), h(MsFileInput)]),
      ),
    );
    expect(wrapper.find(".ms-form-wizard__steps").attributes("aria-label")).toBe("Form progress");
    const buttons = wrapper.findAll(".ms-form-wizard__footer button");
    expect(buttons[0]?.text()).toBe("Back");
    expect(buttons[1]?.text()).toBe("Next");
    expect(wrapper.find(".ms-file-input__label").text()).toBe(
      "Drag and drop files here, or click to select",
    );
  });

  it("applies :messages overrides on top of pt-BR while explicit props still win", async () => {
    const wrapper = mount(
      defineComponent(
        () => () =>
          h(
            MsProvider,
            {
              locale: "pt-BR",
              messages: {
                formWizard: { previous: "Anterior", next: "Seguir" },
                datePicker: { nextMonth: "Mês seguinte", rangeSeparator: " → " },
              },
            },
            () => [
              h(MsFormWizard, { steps, prevText: "Retornar" }),
              h(MsDatePicker, { mode: "range", modelValue: ["2026-02-01", "2026-02-05"] }),
            ],
          ),
      ),
      { attachTo: document.body },
    );
    const buttons = wrapper.findAll(".ms-form-wizard__footer button");
    expect(buttons[0]?.text()).toBe("Retornar");
    expect(buttons[1]?.text()).toBe("Seguir");

    const input = wrapper.find("input.ms-date-picker__input");
    expect((input.element as HTMLInputElement).value).toBe("2026-02-01 → 2026-02-05");
    await input.trigger("click");
    const nav = wrapper.findAll(".ms-date-picker__nav-btn");
    expect(nav[0]?.attributes("aria-label")).toBe("Mês anterior");
    expect(nav[1]?.attributes("aria-label")).toBe("Mês seguinte");
    expect(wrapper.find(".ms-date-picker__title").text()).toBe("Fevereiro 2026");
    const headers = wrapper.findAll('[role="columnheader"]');
    expect(headers.map((c) => c.text())).toEqual(["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]);
    expect(headers[1]?.attributes("abbr")).toBe("Segunda-feira");
    wrapper.unmount();
  });
});
