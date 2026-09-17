import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsBanner from "../src/components/MsBanner/MsBanner.vue";

describe("MsBanner", () => {
  it("renders with default props", () => {
    const wrapper = mount(MsBanner, {
      slots: { default: () => "Important system announcement" },
    });

    expect(wrapper.classes()).toContain("ms-banner");
    expect(wrapper.classes()).toContain("ms-banner--tone-info");
    expect(wrapper.classes()).toContain("ms-banner--variant-soft");
    expect(wrapper.classes()).toContain("ms-banner--position-inline");
    expect(wrapper.text()).toContain("Important system announcement");
    expect(wrapper.attributes("role")).toBe("region");
  });

  it("handles title and tone props correctly", () => {
    const wrapper = mount(MsBanner, {
      props: {
        tone: "danger",
        variant: "solid",
        title: "Alerta de Manutenção",
      },
      slots: { default: () => "Servidores indisponíveis." },
    });

    expect(wrapper.classes()).toContain("ms-banner--tone-danger");
    expect(wrapper.classes()).toContain("ms-banner--variant-solid");
    expect(wrapper.text()).toContain("Alerta de Manutenção");
  });

  it("emits dismiss and hides when dismiss button is clicked", async () => {
    const wrapper = mount(MsBanner, {
      props: {
        dismissible: true,
      },
      slots: { default: () => "Dismissible banner" },
    });

    const closeBtn = wrapper.find(".ms-banner__close");
    expect(closeBtn.exists()).toBe(true);

    await closeBtn.trigger("click");
    expect(wrapper.emitted("dismiss")).toBeTruthy();
    expect(wrapper.find(".ms-banner").exists()).toBe(false);
  });

  it("emits action event when action button is clicked", async () => {
    const wrapper = mount(MsBanner, {
      props: {
        actionLabel: "Ver detalhes",
      },
      slots: { default: () => "Action banner" },
    });

    const actionBtn = wrapper.find(".ms-banner__action-btn");
    expect(actionBtn.exists()).toBe(true);

    await actionBtn.trigger("click");
    expect(wrapper.emitted("action")).toBeTruthy();
  });
});
