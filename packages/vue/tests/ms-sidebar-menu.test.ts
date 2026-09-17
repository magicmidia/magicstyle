import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import {
  MsSidebarMenu,
  MsSidebarMenuGroup,
  MsSidebarMenuItem,
  type MsSidebarMenuGroupData,
} from "../src";

describe("MsSidebarMenu", () => {
  it("renders with navigation role and semantic classes", () => {
    const wrapper = mount(MsSidebarMenu, {
      props: {
        tone: "accent",
        density: "compact",
        shape: "pill",
      },
      slots: {
        default: () =>
          h(MsSidebarMenuGroup, { title: "Navigation" }, () => [
            h(MsSidebarMenuItem, { id: "item-1", label: "Dashboard" }),
          ]),
      },
    });

    expect(wrapper.classes()).toContain("ms-sidebar-menu");
    expect(wrapper.attributes("role")).toBe("navigation");
    expect(wrapper.attributes("data-tone")).toBe("accent");
    expect(wrapper.attributes("data-density")).toBe("compact");
    expect(wrapper.attributes("data-shape")).toBe("pill");
    expect(wrapper.find(".ms-sidebar-menu-title").text()).toBe("Navigation");
  });

  it("handles active item selection via modelValue and click", async () => {
    const wrapper = mount(MsSidebarMenu, {
      props: {
        modelValue: "dash",
      },
      slots: {
        default: () => [
          h(MsSidebarMenuItem, { id: "dash", label: "Dashboard" }),
          h(MsSidebarMenuItem, { id: "reports", label: "Reports" }),
        ],
      },
    });

    const items = wrapper.findAllComponents(MsSidebarMenuItem);
    expect(items[0]!.find(".ms-sidebar-menu-button").classes()).toContain("is-active");
    expect(items[0]!.find(".ms-sidebar-menu-button").attributes("aria-current")).toBe("page");
    expect(items[1]!.find(".ms-sidebar-menu-button").classes()).not.toContain("is-active");

    await items[1]!.find(".ms-sidebar-menu-button").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["reports"]);
  });

  it("toggles submenus with aria-expanded", async () => {
    const wrapper = mount(MsSidebarMenu, {
      slots: {
        default: () =>
          h(
            MsSidebarMenuItem,
            { id: "settings", label: "Settings", hasChildren: true },
            {
              sub: () => [
                h(MsSidebarMenuItem, { id: "profile", label: "Profile" }),
                h(MsSidebarMenuItem, { id: "security", label: "Security" }),
              ],
            },
          ),
      },
    });

    const settingsItem = wrapper.findAllComponents(MsSidebarMenuItem)[0]!;
    const button = settingsItem.find(".ms-sidebar-menu-button");

    expect(button.attributes("aria-expanded")).toBe("false");
    expect(settingsItem.find(".ms-sidebar-menu-sub").classes()).not.toContain("is-open");

    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("true");
    expect(settingsItem.find(".ms-sidebar-menu-sub").classes()).toContain("is-open");
  });

  it("renders data-driven items and groups structure", () => {
    const sampleItems: MsSidebarMenuGroupData[] = [
      {
        title: "Main Navigation",
        items: [
          { id: "home", label: "Home", icon: "🏠" },
          {
            id: "analytics",
            label: "Analytics",
            icon: "📊",
            badge: "Pro",
            badgeTone: "accent",
            children: [
              { id: "realtime", label: "Realtime" },
              { id: "audience", label: "Audience" },
            ],
          },
        ],
      },
    ];

    const wrapper = mount(MsSidebarMenu, {
      props: {
        items: sampleItems,
      },
    });

    expect(wrapper.find(".ms-sidebar-menu-group").exists()).toBe(true);
    expect(wrapper.find(".ms-sidebar-menu-title").text()).toContain("Main Navigation");
    expect(wrapper.findAll(".ms-sidebar-menu-item").length).toBeGreaterThanOrEqual(2);
    expect(wrapper.find(".ms-sidebar-menu-badge").text()).toBe("Pro");
  });
});
