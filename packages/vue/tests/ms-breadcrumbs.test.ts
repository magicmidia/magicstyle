import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import MsBreadcrumbItem from "../src/components/MsBreadcrumbs/MsBreadcrumbItem.vue";
import MsBreadcrumbSeparator from "../src/components/MsBreadcrumbs/MsBreadcrumbSeparator.vue";
import MsBreadcrumbs from "../src/components/MsBreadcrumbs/MsBreadcrumbs.vue";

describe("MsBreadcrumbs (doc 05 §7)", () => {
  it("renders slot-based breadcrumb trail with correct WAI-ARIA structure", () => {
    const wrapper = mount(MsBreadcrumbs, {
      props: {
        ariaLabel: "Navigation trail",
      },
      slots: {
        default: () => [
          h(MsBreadcrumbItem, { href: "/" }, () => "Home"),
          h(MsBreadcrumbSeparator),
          h(MsBreadcrumbItem, { href: "/projetos" }, () => "Projects"),
          h(MsBreadcrumbSeparator),
          h(MsBreadcrumbItem, { current: true }, () => "Design System"),
        ],
      },
    });

    const nav = wrapper.find("nav.ms-breadcrumbs");
    expect(nav.exists()).toBe(true);
    expect(nav.attributes("aria-label")).toBe("Navigation trail");

    const list = wrapper.find("ol.ms-breadcrumbs__list");
    expect(list.exists()).toBe(true);

    const items = wrapper.findAll("li.ms-breadcrumbs__item");
    expect(items).toHaveLength(3);

    // Links
    const links = wrapper.findAll("a.ms-breadcrumbs__link");
    expect(links).toHaveLength(2);
    expect(links[0]?.attributes("href")).toBe("/");
    expect(links[1]?.attributes("href")).toBe("/projetos");

    // Current page
    const current = wrapper.find(".ms-breadcrumbs__current");
    expect(current.exists()).toBe(true);
    expect(current.attributes("aria-current")).toBe("page");
    expect(current.text()).toBe("Design System");
  });

  it("renders automatically from items prop with separators", () => {
    const wrapper = mount(MsBreadcrumbs, {
      props: {
        separator: "/",
        items: [
          { label: "Dashboard", href: "/admin" },
          { label: "Users", href: "/admin/users" },
          { label: "Profile" },
        ],
      },
    });

    const items = wrapper.findAll("li.ms-breadcrumbs__item");
    expect(items).toHaveLength(3);

    // Last item automatically marked as current
    const current = wrapper.find(".ms-breadcrumbs__current");
    expect(current.text()).toBe("Profile");
    expect(current.attributes("aria-current")).toBe("page");

    // Separators
    const separators = wrapper.findAll(".ms-breadcrumbs__separator");
    expect(separators).toHaveLength(2);
    expect(separators[0]?.text()).toBe("/");
  });

  it("handles disabled items correctly", () => {
    const wrapper = mount(MsBreadcrumbs, {
      slots: {
        default: () => [
          h(MsBreadcrumbItem, { href: "/item", disabled: true }, () => "Disabled item"),
        ],
      },
    });

    const item = wrapper.find("li.ms-breadcrumbs__item");
    expect(item.classes()).toContain("ms-breadcrumbs__item--disabled");
    // Should render text instead of anchor link
    expect(wrapper.find("a.ms-breadcrumbs__link").exists()).toBe(false);
  });

  it("supports variants, sizes, and separator presets", () => {
    const wrapper = mount(MsBreadcrumbs, {
      props: {
        variant: "pills",
        size: "lg",
        separatorType: "arrow",
        items: [{ label: "Home", href: "/", icon: "🏠" }, { label: "Docs" }],
      },
    });

    expect(wrapper.classes()).toContain("ms-breadcrumbs--pills");
    expect(wrapper.classes()).toContain("ms-breadcrumbs--lg");
    const separator = wrapper.find(".ms-breadcrumbs__separator");
    expect(separator.text()).toBe("→");
    expect(wrapper.find(".ms-breadcrumbs__icon").text()).toBe("🏠");
  });

  it("collapses items when exceeding maxItems and expands upon clicking ellipsis", async () => {
    const wrapper = mount(MsBreadcrumbs, {
      props: {
        maxItems: 3,
        items: [
          { label: "Home", href: "/" },
          { label: "Cat 1", href: "/c1" },
          { label: "Cat 2", href: "/c2" },
          { label: "Cat 3", href: "/c3" },
          { label: "Current Page" },
        ],
      },
    });

    const ellipsisBtn = wrapper.find(".ms-breadcrumbs__ellipsis");
    expect(ellipsisBtn.exists()).toBe(true);

    await ellipsisBtn.trigger("click");
    // All 5 items should now be visible
    expect(wrapper.find(".ms-breadcrumbs__ellipsis").exists()).toBe(false);
    expect(wrapper.findAll("li.ms-breadcrumbs__item")).toHaveLength(5);
  });
});
