import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsIconButton from "../src/components/MsIconButton/MsIconButton.vue";

describe("MsIconButton", () => {
  it("renders with aria-label and default styling classes", () => {
    const wrapper = mount(MsIconButton, {
      props: {
        ariaLabel: "Configurações",
      },
      slots: {
        default: "⚙️",
      },
    });

    expect(wrapper.element.tagName).toBe("BUTTON");
    expect(wrapper.attributes("aria-label")).toBe("Configurações");
    expect(wrapper.classes()).toContain("ms-icon-button");
    expect(wrapper.classes()).toContain("ms-icon-button--solid");
    expect(wrapper.classes()).toContain("ms-icon-button--primary");
    expect(wrapper.classes()).toContain("ms-icon-button--md");
    expect(wrapper.text()).toContain("⚙️");
  });

  it("applies circle shape and variant/tone props", () => {
    const wrapper = mount(MsIconButton, {
      props: {
        ariaLabel: "Fechar",
        variant: "ghost",
        tone: "danger",
        size: "sm",
        circle: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-icon-button--ghost");
    expect(wrapper.classes()).toContain("ms-icon-button--danger");
    expect(wrapper.classes()).toContain("ms-icon-button--sm");
    expect(wrapper.classes()).toContain("ms-icon-button--circle");
  });

  it("emits click when clicked", async () => {
    const wrapper = mount(MsIconButton, {
      props: {
        ariaLabel: "Adicionar",
      },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("prevents click and disables button when disabled is true", async () => {
    const wrapper = mount(MsIconButton, {
      props: {
        ariaLabel: "Adicionar",
        disabled: true,
      },
    });

    expect(wrapper.attributes("disabled")).toBeDefined();
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("shows spinner and sets aria-busy when loading", () => {
    const wrapper = mount(MsIconButton, {
      props: {
        ariaLabel: "Processando",
        loading: true,
      },
    });

    expect(wrapper.attributes("aria-busy")).toBe("true");
    expect(wrapper.classes()).toContain("is-loading");
    expect(wrapper.find(".ms-spinner").exists()).toBe(true);
  });

  it("supports shape square and active toggle state", () => {
    const wrapper = mount(MsIconButton, {
      props: {
        ariaLabel: "Favorito",
        shape: "square",
        size: "2xs",
        active: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-icon-button--shape-square");
    expect(wrapper.classes()).toContain("ms-icon-button--2xs");
    expect(wrapper.classes()).toContain("ms-icon-button--active");
    expect(wrapper.attributes("aria-pressed")).toBe("true");
  });
});
