import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsNavbar } from "../src";

describe("MsNavbar", () => {
  it("renders with default props and classes", () => {
    const wrapper = mount(MsNavbar, {
      slots: {
        brand: "MagicStyle",
        default: "Nav Links",
      },
    });

    expect(wrapper.classes()).toContain("ms-navbar");
    expect(wrapper.classes()).toContain("ms-navbar--size-md");
    expect(wrapper.attributes("data-position")).toBe("static");
    expect(wrapper.attributes("data-variant")).toBe("default");
    expect(wrapper.find(".ms-navbar__brand").text()).toBe("MagicStyle");
    expect(wrapper.find(".ms-navbar__content").text()).toBe("Nav Links");
  });

  it("applies position, variant, tone, and floating classes", () => {
    const wrapper = mount(MsNavbar, {
      props: {
        position: "sticky",
        variant: "glass",
        tone: "accent",
        size: "lg",
        floating: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-navbar--position-sticky");
    expect(wrapper.classes()).toContain("ms-navbar--variant-glass");
    expect(wrapper.classes()).toContain("ms-navbar--tone-accent");
    expect(wrapper.classes()).toContain("ms-navbar--size-lg");
    expect(wrapper.classes()).toContain("ms-navbar--floating");
    expect(wrapper.attributes("data-floating")).toBe("true");
  });

  it("applies fixed, shadow, and container classes", () => {
    const wrapper = mount(MsNavbar, {
      props: {
        fixed: true,
        shadow: "lg",
        container: "xl",
      },
    });

    expect(wrapper.classes()).toContain("ms-navbar--position-fixed");
    expect(wrapper.classes()).toContain("ms-navbar--shadow-lg");
    expect(wrapper.attributes("data-shadow")).toBe("lg");
    expect(wrapper.find(".ms-navbar__container").classes()).toContain("ms-navbar__container--xl");
  });

  it("emits toggle-menu and update:mobileMenuOpen when mobile toggle is clicked", async () => {
    const wrapper = mount(MsNavbar, {
      props: {
        mobileMenuOpen: false,
      },
      slots: {
        "mobile-toggle": "Menu",
        "mobile-menu": "Expanded Links",
      },
    });

    const btn = wrapper.find(".ms-navbar__mobile-toggle");
    expect(btn.exists()).toBe(true);
    expect(wrapper.find(".ms-navbar__mobile-menu").exists()).toBe(false);

    await btn.trigger("click");
    expect(wrapper.emitted("toggle-menu")).toHaveLength(1);
    expect(wrapper.emitted("update:mobileMenuOpen")?.[0]).toEqual([true]);
    expect(wrapper.find(".ms-navbar__mobile-menu").text()).toBe("Expanded Links");
  });
});
