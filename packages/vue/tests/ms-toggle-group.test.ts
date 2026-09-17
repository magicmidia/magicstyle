import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsToggleGroup, MsToggleGroupItem } from "../src/index.ts";

describe("MsToggleGroup component", () => {
  const items = [
    { value: "bold", label: "Negrito" },
    { value: "italic", label: "Itálico" },
    { value: "underline", label: "Sublinhado" },
  ];

  it("renders toggle items with single selection", async () => {
    const wrapper = mount(MsToggleGroup, {
      props: { items, modelValue: "bold" },
    });
    const buttons = wrapper.findAll("button.ms-toggle-group-item");
    expect(buttons.length).toBe(3);
    expect(buttons[0]?.attributes("aria-pressed")).toBe("true");
    expect(buttons[1]?.attributes("aria-pressed")).toBe("false");

    await buttons[1]?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["italic"]);
  });

  it("supports multiple selection mode", async () => {
    const wrapper = mount(MsToggleGroup, {
      props: { items, multiple: true, modelValue: ["bold"] },
    });
    const buttons = wrapper.findAll("button.ms-toggle-group-item");
    await buttons[1]?.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["bold", "italic"]]);
  });

  it("renders with slot-based MsToggleGroupItem child components", () => {
    const wrapper = mount(MsToggleGroup, {
      props: { modelValue: "center" },
      slots: {
        default: `
          <MsToggleGroupItem value="left">Esquerda</MsToggleGroupItem>
          <MsToggleGroupItem value="center">Centro</MsToggleGroupItem>
          <MsToggleGroupItem value="right">Direita</MsToggleGroupItem>
        `,
      },
      global: {
        components: { MsToggleGroupItem },
      },
    });
    const itemComps = wrapper.findAllComponents(MsToggleGroupItem);
    expect(itemComps.length).toBe(3);
    expect(itemComps[1]?.attributes("aria-pressed")).toBe("true");
    expect(itemComps[0]?.attributes("aria-pressed")).toBe("false");
  });
});
