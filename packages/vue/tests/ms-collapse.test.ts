import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCollapse } from "../src/index.ts";

describe("MsCollapse component", () => {
  it("renders header and toggles collapse on click", async () => {
    const wrapper = mount(MsCollapse, {
      props: { title: "Mais detalhes", modelValue: false },
      slots: { default: "Conteúdo expandido secreto." },
    });
    expect(wrapper.classes()).not.toContain("ms-collapse--open");
    const header = wrapper.find("button.ms-collapse__header");
    expect(header.attributes("aria-expanded")).toBe("false");
    expect(wrapper.text()).toContain("Mais detalhes");

    await header.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
    expect(wrapper.emitted("toggle")?.[0]).toEqual([true]);
  });

  it("respects disabled state blocking click", async () => {
    const wrapper = mount(MsCollapse, {
      props: { title: "Bloqueado", disabled: true },
    });
    const header = wrapper.find("button.ms-collapse__header");
    expect(header.attributes("disabled")).toBeDefined();
    await header.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeFalsy();
  });
});
