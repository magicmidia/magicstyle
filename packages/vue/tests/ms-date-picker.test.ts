import { describe, expect, it } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import { nextTick } from "vue";
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

describe("MsDatePicker keyboard grid (APG date picker)", () => {
  const open = async (props: Record<string, unknown> = {}) => {
    const wrapper = mount(MsDatePicker, {
      props: { modelValue: "2026-01-31", ...props },
      attachTo: document.body,
    });
    const input = wrapper.find("input");
    (input.element as HTMLInputElement).focus();
    await input.trigger("keydown", { key: "Enter" });
    await nextTick();
    return wrapper;
  };
  const active = () => document.activeElement as HTMLElement;
  const press = async (wrapper: VueWrapper, key: string, init: KeyboardEventInit = {}) => {
    active().dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, ...init }));
    await nextTick();
    await nextTick();
    return wrapper;
  };

  it("opens as a labelled dialog and focuses the selected day", async () => {
    const wrapper = await open();
    const input = wrapper.find("input");
    expect(input.attributes("aria-haspopup")).toBe("dialog");
    expect(input.attributes("aria-expanded")).toBe("true");
    const dialog = wrapper.find('[role="dialog"]');
    expect(input.attributes("aria-controls")).toBe(dialog.attributes("id"));
    expect(wrapper.findAll('[role="row"]')).toHaveLength(7);
    expect(active().dataset.date).toBe("2026-01-31");
    expect(active().getAttribute("aria-selected")).toBe("true");
    expect(active().getAttribute("aria-label")).toBe("31 de janeiro de 2026");
    expect(wrapper.findAll('[role="gridcell"][tabindex="0"]')).toHaveLength(1);
    wrapper.unmount();
  });

  it("moves by day, week and month, crossing month boundaries", async () => {
    const wrapper = await open();
    await press(wrapper, "ArrowRight");
    expect(active().dataset.date).toBe("2026-02-01");
    expect(wrapper.find(".ms-date-picker__title").text()).toBe("Fevereiro 2026");
    await press(wrapper, "ArrowUp");
    expect(active().dataset.date).toBe("2026-01-25");
    await press(wrapper, "End");
    expect(active().dataset.date).toBe("2026-01-31");
    await press(wrapper, "Home");
    expect(active().dataset.date).toBe("2026-01-25");
    await press(wrapper, "PageDown");
    expect(active().dataset.date).toBe("2026-02-25");
    await press(wrapper, "PageUp", { shiftKey: true });
    expect(active().dataset.date).toBe("2025-02-25");
    wrapper.unmount();
  });

  it("clamps month jumps to the last day of shorter months", async () => {
    const wrapper = await open();
    await press(wrapper, "PageDown");
    expect(active().dataset.date).toBe("2026-02-28");
    wrapper.unmount();
  });

  it("selects with Enter and returns focus to the input", async () => {
    const wrapper = await open();
    await press(wrapper, "ArrowLeft");
    active().click();
    await nextTick();
    await nextTick();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["2026-01-30"]);
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
    expect(active()).toBe(wrapper.find("input").element);
    wrapper.unmount();
  });

  it("closes on Escape (focus back to input) and on outside pointerdown", async () => {
    const wrapper = await open();
    await press(wrapper, "Escape");
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
    expect(active()).toBe(wrapper.find("input").element);

    await wrapper.find("input").trigger("click");
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true);
    document.body.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
    await nextTick();
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
    wrapper.unmount();
  });

  it("keeps out-of-range days focusable but not selectable", async () => {
    const wrapper = await open({ maxDate: "2026-01-31" });
    await press(wrapper, "ArrowRight");
    expect(active().dataset.date).toBe("2026-02-01");
    expect(active().getAttribute("aria-disabled")).toBe("true");
    active().click();
    await nextTick();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    wrapper.unmount();
  });
});
