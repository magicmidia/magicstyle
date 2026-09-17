import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import MsButton from "../src/components/MsButton/MsButton.vue";
import MsEmptyState from "../src/components/MsEmptyState/MsEmptyState.vue";

describe("MsEmptyState (doc 05 §8)", () => {
  it("renders with title and description props", () => {
    const wrapper = mount(MsEmptyState, {
      props: {
        title: "Nenhum dado encontrado",
        description: "Tente refinar sua pesquisa ou filtros.",
        size: "lg",
      },
    });

    expect(wrapper.classes()).toContain("ms-empty-state");
    expect(wrapper.classes()).toContain("ms-empty-state--lg");

    const title = wrapper.find(".ms-empty-state__title");
    expect(title.text()).toBe("Nenhum dado encontrado");

    const description = wrapper.find(".ms-empty-state__description");
    expect(description.text()).toBe("Tente refinar sua pesquisa ou filtros.");

    // Default icon
    expect(wrapper.find("svg.ms-empty-state__default-icon").exists()).toBe(true);
  });

  it("supports custom icon and actions slots", () => {
    const wrapper = mount(MsEmptyState, {
      slots: {
        icon: () => h("span", { class: "custom-icon" }, "🔍"),
        title: () => "Título do Slot",
        description: () => "Descrição do Slot",
        actions: () => h(MsButton, { tone: "primary" }, () => "Novo Item"),
      },
    });

    expect(wrapper.find(".custom-icon").text()).toBe("🔍");
    expect(wrapper.find(".ms-empty-state__title").text()).toBe("Título do Slot");
    expect(wrapper.find(".ms-empty-state__description").text()).toBe("Descrição do Slot");

    const btn = wrapper.findComponent(MsButton);
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toBe("Novo Item");
  });

  it("supports variant card and iconTone warning", () => {
    const wrapper = mount(MsEmptyState, {
      props: {
        variant: "card",
        iconTone: "warning",
      },
    });

    expect(wrapper.classes()).toContain("ms-empty-state--card");
    expect(wrapper.find(".ms-empty-state__icon").classes()).toContain(
      "ms-empty-state__icon--warning",
    );
  });
});
