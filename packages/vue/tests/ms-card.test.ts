import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import MsCard from "../src/components/MsCard/MsCard.vue";

describe("MsCard", () => {
  it("renders with default props and content", () => {
    const wrapper = mount(MsCard, {
      slots: {
        default: () => "Card content",
      },
    });

    expect(wrapper.classes()).toContain("ms-card");
    expect(wrapper.attributes("data-variant")).toBe("raised");
    expect(wrapper.attributes("data-padding")).toBe("md");
    expect(wrapper.find(".ms-card-content").text()).toBe("Card content");
  });

  it("renders header with title and description", () => {
    const wrapper = mount(MsCard, {
      props: {
        title: "Overview",
        description: "Consolidated workspace metrics",
      },
      slots: {
        default: () => "Data",
      },
    });

    expect(wrapper.find(".ms-card-title").text()).toBe("Overview");
    expect(wrapper.find(".ms-card-description").text()).toBe("Consolidated workspace metrics");
  });

  it("applies variants and padding scales correctly", () => {
    const wrapper = mount(MsCard, {
      props: {
        variant: "flat",
        padding: "lg",
      },
    });

    expect(wrapper.attributes("data-variant")).toBe("flat");
    expect(wrapper.attributes("data-padding")).toBe("lg");
  });

  it("handles interactive prop and click emission", async () => {
    const wrapper = mount(MsCard, {
      props: {
        interactive: true,
      },
      slots: {
        default: () => "Clickable card",
      },
    });

    expect(wrapper.attributes("data-interactive")).toBe("true");
    expect(wrapper.attributes("tabindex")).toBe("0");

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("renders footer slot", () => {
    const wrapper = mount(MsCard, {
      slots: {
        footer: () => h("button", "Save"),
      },
    });

    expect(wrapper.find(".ms-card-footer").exists()).toBe(true);
    expect(wrapper.find(".ms-card-footer button").text()).toBe("Save");
  });

  it("supports glass variant, xl padding, hoverable, dividers, and cover media", () => {
    const wrapper = mount(MsCard, {
      props: {
        variant: "glass",
        padding: "xl",
        hoverable: true,
        headerDivider: true,
        footerDivider: true,
        coverSrc: "https://example.com/cover.jpg",
        coverAlt: "Card banner",
        orientation: "horizontal",
      },
      slots: {
        default: () => "Horizontal body",
        footer: () => "Footer",
      },
    });

    expect(wrapper.attributes("data-variant")).toBe("glass");
    expect(wrapper.attributes("data-padding")).toBe("xl");
    expect(wrapper.attributes("data-hoverable")).toBe("true");
    expect(wrapper.attributes("data-orientation")).toBe("horizontal");
    expect(wrapper.classes()).toContain("ms-card--header-divider");
    expect(wrapper.classes()).toContain("ms-card--footer-divider");

    const cover = wrapper.find(".ms-card__cover img");
    expect(cover.exists()).toBe(true);
    expect(cover.attributes("src")).toBe("https://example.com/cover.jpg");
    expect(cover.attributes("alt")).toBe("Card banner");
  });

  it("supports tone prop and adds accent class and data attribute", () => {
    const wrapper = mount(MsCard, {
      props: {
        tone: "accent",
      },
    });

    expect(wrapper.attributes("data-tone")).toBe("accent");
    expect(wrapper.classes()).toContain("ms-card--tone-accent");
  });
});
