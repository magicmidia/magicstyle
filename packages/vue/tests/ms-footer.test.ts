import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsFooter } from "../src";

describe("MsFooter", () => {
  it("renders with default layout and simple content", () => {
    const wrapper = mount(MsFooter, {
      props: {
        copyright: "© 2026 MagicStyle Inc.",
      },
      slots: {
        default: "Links",
      },
    });

    expect(wrapper.classes()).toContain("ms-footer");
    expect(wrapper.classes()).toContain("ms-footer--layout-simple");
    expect(wrapper.find(".ms-footer__copyright").text()).toBe("© 2026 MagicStyle Inc.");
    expect(wrapper.text()).toContain("Links");
  });

  it("renders multi-column layout with column links", () => {
    const columns = [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [{ label: "About", href: "#about" }],
      },
    ];

    const wrapper = mount(MsFooter, {
      props: {
        layout: "multi-column",
        variant: "sunken",
        tone: "neutral",
        columns,
      },
    });

    expect(wrapper.classes()).toContain("ms-footer--layout-multi-column");
    expect(wrapper.classes()).toContain("ms-footer--variant-sunken");
    expect(wrapper.classes()).toContain("ms-footer--tone-neutral");
    expect(wrapper.findAll(".ms-footer__column")).toHaveLength(2);
    expect(wrapper.findAll(".ms-footer__link")).toHaveLength(3);
  });

  it("applies fixed position, shadow, and container modes", () => {
    const wrapper = mount(MsFooter, {
      props: {
        fixed: true,
        shadow: "lg",
        container: "xl",
      },
      slots: {
        default: "Fixed Footer Content",
      },
    });

    expect(wrapper.classes()).toContain("ms-footer--position-fixed");
    expect(wrapper.classes()).toContain("ms-footer--shadow-lg");
    expect(wrapper.attributes("data-position")).toBe("fixed");
    expect(wrapper.attributes("data-shadow")).toBe("lg");
    expect(wrapper.find(".ms-footer__container").classes()).toContain("ms-footer__container--xl");
  });
});
