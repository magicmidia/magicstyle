import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsChoicebox from "../src/components/MsChoicebox/MsChoicebox.vue";
import MsChoiceboxItem from "../src/components/MsChoicebox/MsChoiceboxItem.vue";

describe("MsChoicebox", () => {
  it("renders radio group and items with correct roles", () => {
    const items = [
      { value: "starter", title: "Starter", description: "Up to 3 members", price: "Free" },
      {
        value: "pro",
        title: "Professional",
        description: "Growing teams",
        price: "$49/month",
      },
    ];

    const wrapper = mount(MsChoicebox, {
      props: {
        modelValue: "starter",
        items,
        type: "radio",
        layout: "grid",
        columns: 2,
      },
    });

    expect(wrapper.attributes("role")).toBe("radiogroup");
    expect(wrapper.classes()).toContain("ms-choicebox--grid");
    expect(wrapper.classes()).toContain("ms-choicebox--cols-2");

    const optionCards = wrapper.findAll(".ms-choicebox-item");
    expect(optionCards.length).toBe(2);
    expect(optionCards[0]!.attributes("role")).toBe("radio");
    expect(optionCards[0]!.attributes("aria-checked")).toBe("true");
    expect(optionCards[1]!.attributes("aria-checked")).toBe("false");
  });

  it("emits update:modelValue when an item is selected in radio mode", async () => {
    const wrapper = mount(MsChoicebox, {
      props: {
        modelValue: "starter",
        type: "radio",
      },
      slots: {
        default: `
          <MsChoiceboxItem value="starter" title="Starter" />
          <MsChoiceboxItem value="enterprise" title="Enterprise" />
        `,
      },
      global: {
        components: { MsChoiceboxItem },
      },
    });

    const items = wrapper.findAllComponents(MsChoiceboxItem);
    await items[1]!.trigger("click");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["enterprise"]);
    expect(wrapper.emitted("change")?.[0]).toEqual(["enterprise"]);
  });

  it("handles multiple selection in checkbox mode", async () => {
    const wrapper = mount(MsChoicebox, {
      props: {
        modelValue: ["notifications"],
        type: "checkbox",
      },
      slots: {
        default: `
          <MsChoiceboxItem value="notifications" title="Notifications" />
          <MsChoiceboxItem value="analytics" title="Metrics" />
        `,
      },
      global: {
        components: { MsChoiceboxItem },
      },
    });

    expect(wrapper.attributes("role")).toBe("group");
    const items = wrapper.findAllComponents(MsChoiceboxItem);

    // Toggle analytics on
    await items[1]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["notifications", "analytics"]]);

    // Toggle notifications off
    await items[0]!.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[1]).toEqual([[]]);
  });

  it("does not trigger when disabled", async () => {
    const wrapper = mount(MsChoicebox, {
      props: {
        modelValue: "option1",
        disabled: true,
      },
      slots: {
        default: `
          <MsChoiceboxItem value="option1" title="Option 1" />
          <MsChoiceboxItem value="option2" title="Option 2" />
        `,
      },
      global: {
        components: { MsChoiceboxItem },
      },
    });

    const items = wrapper.findAllComponents(MsChoiceboxItem);
    await items[1]!.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
