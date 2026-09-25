import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import MsButton from "../src/components/MsButton/MsButton.vue";
import MsEmptyState from "../src/components/MsEmptyState/MsEmptyState.vue";

describe("MsEmptyState (doc 05 §8)", () => {
  it("renders with title and description props", () => {
    const wrapper = mount(MsEmptyState, {
      props: {
        title: "No data found",
        description: "Try refining your search or filters.",
        size: "lg",
      },
    });

    expect(wrapper.classes()).toContain("ms-empty-state");
    expect(wrapper.classes()).toContain("ms-empty-state--lg");

    const title = wrapper.find(".ms-empty-state__title");
    expect(title.text()).toBe("No data found");

    const description = wrapper.find(".ms-empty-state__description");
    expect(description.text()).toBe("Try refining your search or filters.");

    // Default icon
    expect(wrapper.find("svg.ms-empty-state__default-icon").exists()).toBe(true);
  });

  it("supports custom icon and actions slots", () => {
    const wrapper = mount(MsEmptyState, {
      slots: {
        icon: () => h("span", { class: "custom-icon" }, "🔍"),
        title: () => "Slot title",
        description: () => "Slot description",
        actions: () => h(MsButton, { tone: "primary" }, () => "New item"),
      },
    });

    expect(wrapper.find(".custom-icon").text()).toBe("🔍");
    expect(wrapper.find(".ms-empty-state__title").text()).toBe("Slot title");
    expect(wrapper.find(".ms-empty-state__description").text()).toBe("Slot description");

    const btn = wrapper.findComponent(MsButton);
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toBe("New item");
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
