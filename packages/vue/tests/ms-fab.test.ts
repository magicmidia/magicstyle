import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsFab } from "../src/index.ts";

describe("MsFab component", () => {
  it("renders floating action button with icon", () => {
    const wrapper = mount(MsFab, {
      props: { icon: "+", position: "bottom-right" },
    });
    expect(wrapper.classes()).toContain("ms-fab-container--bottom-right");
    const fabBtn = wrapper.find("button.ms-fab");
    expect(fabBtn.text()).toBe("+");
  });

  it("toggles speed-dial menu when actions are present", async () => {
    const actions = [
      { id: "share", label: "Compartilhar", icon: "🔗" },
      { id: "print", label: "Imprimir", icon: "🖨️" },
    ];
    const wrapper = mount(MsFab, {
      props: { actions },
    });
    expect(wrapper.find(".ms-fab__speed-dial").exists()).toBe(false);

    await wrapper.find("button.ms-fab").trigger("click");
    expect(wrapper.find(".ms-fab__speed-dial").exists()).toBe(true);
    const actionBtns = wrapper.findAll("button.ms-fab-action");
    expect(actionBtns.length).toBe(2);

    await actionBtns[0]?.trigger("click");
    expect(wrapper.emitted("action-click")?.[0]).toEqual([actions[0]]);
  });
});
