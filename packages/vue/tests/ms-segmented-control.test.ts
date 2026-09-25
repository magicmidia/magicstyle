import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsSegmentedControl from "../src/components/MsSegmentedControl/MsSegmentedControl.vue";

describe("MsSegmentedControl", () => {
  const options = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly", disabled: true },
  ];

  it("renders with radiogroup semantics and items", () => {
    const wrapper = mount(MsSegmentedControl, {
      props: {
        modelValue: "daily",
        options,
      },
    });

    expect(wrapper.classes()).toContain("ms-segmented-control");
    expect(wrapper.attributes("role")).toBe("radiogroup");

    const buttons = wrapper.findAll(".ms-segmented-control__item");
    expect(buttons).toHaveLength(3);
    expect(buttons[0]!.attributes("role")).toBe("radio");
    expect(buttons[0]!.classes()).toContain("is-active");
    expect(buttons[0]!.attributes("aria-checked")).toBe("true");
    expect(buttons[1]!.classes()).not.toContain("is-active");
    expect(buttons[1]!.attributes("aria-checked")).toBe("false");
    expect(buttons[2]!.attributes("disabled")).toBeDefined();
  });

  it("emits update:modelValue and change on click", async () => {
    const wrapper = mount(MsSegmentedControl, {
      props: {
        modelValue: "daily",
        options,
      },
    });

    const buttons = wrapper.findAll(".ms-segmented-control__item");
    await buttons[1]!.trigger("click");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["weekly"]);
    expect(wrapper.emitted("change")?.[0]).toEqual(["weekly"]);
  });

  it("does not select disabled option", async () => {
    const wrapper = mount(MsSegmentedControl, {
      props: {
        modelValue: "daily",
        options,
      },
    });

    const buttons = wrapper.findAll(".ms-segmented-control__item");
    await buttons[2]!.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("navigates via arrow keys", async () => {
    const wrapper = mount(MsSegmentedControl, {
      props: {
        modelValue: "daily",
        options,
      },
    });

    const buttons = wrapper.findAll(".ms-segmented-control__item");
    await buttons[0]!.trigger("keydown", { key: "ArrowRight" });

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["weekly"]);
  });

  it("applies shape, tone, and size modifier classes", () => {
    const wrapper = mount(MsSegmentedControl, {
      props: {
        modelValue: "daily",
        options,
        shape: "pill",
        tone: "primary",
        size: "xs",
      },
    });

    expect(wrapper.classes()).toContain("ms-segmented-control--pill");
    expect(wrapper.classes()).toContain("ms-segmented-control--tone-primary");
    expect(wrapper.classes()).toContain("ms-segmented-control--xs");
  });
});
