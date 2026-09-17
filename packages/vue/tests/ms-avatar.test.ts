import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsAvatar from "../src/components/MsAvatar/MsAvatar.vue";

describe("MsAvatar", () => {
  it("renders image when src is provided", () => {
    const wrapper = mount(MsAvatar, {
      props: {
        src: "https://example.com/photo.jpg",
        name: "Ada Lovelace",
      },
    });

    const img = wrapper.find("img.ms-avatar-image");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://example.com/photo.jpg");
    expect(img.attributes("alt")).toBe("Ada Lovelace");
  });

  it("renders initials fallback when src is missing", () => {
    const wrapper = mount(MsAvatar, {
      props: {
        name: "Ada Lovelace",
      },
    });

    expect(wrapper.find("img").exists()).toBe(false);
    const fallback = wrapper.find(".ms-avatar-fallback");
    expect(fallback.exists()).toBe(true);
    expect(fallback.text()).toBe("AL");
  });

  it("handles single-word names for initials", () => {
    const wrapper = mount(MsAvatar, {
      props: {
        name: "Linus",
      },
    });

    expect(wrapper.find(".ms-avatar-fallback").text()).toBe("LI");
  });

  it("switches to fallback on image error", async () => {
    const wrapper = mount(MsAvatar, {
      props: {
        src: "https://invalid-url/broken.jpg",
        name: "Grace Hopper",
      },
    });

    expect(wrapper.find("img").exists()).toBe(true);
    await wrapper.find("img").trigger("error");

    expect(wrapper.find("img").exists()).toBe(false);
    expect(wrapper.find(".ms-avatar-fallback").text()).toBe("GH");
  });

  it("applies size, shape, and status indicator", () => {
    const wrapper = mount(MsAvatar, {
      props: {
        name: "Margaret Hamilton",
        size: "lg",
        shape: "rounded",
        status: "online",
        tone: "accent",
      },
    });

    expect(wrapper.attributes("data-size")).toBe("lg");
    expect(wrapper.attributes("data-shape")).toBe("rounded");
    expect(wrapper.attributes("data-tone")).toBe("accent");

    const indicator = wrapper.find(".ms-avatar-indicator");
    expect(indicator.exists()).toBe(true);
    expect(indicator.attributes("data-status")).toBe("online");
  });

  it("supports square shape, bordered ring, and top-right status placement", () => {
    const wrapper = mount(MsAvatar, {
      props: {
        name: "Alan Turing",
        shape: "square",
        size: "2xl",
        bordered: true,
        status: "busy",
        statusPlacement: "top-right",
      },
    });

    expect(wrapper.attributes("data-shape")).toBe("square");
    expect(wrapper.attributes("data-size")).toBe("2xl");
    expect(wrapper.attributes("data-bordered")).toBeDefined();
    const indicator = wrapper.find(".ms-avatar-indicator");
    expect(indicator.attributes("data-placement")).toBe("top-right");
  });
});

describe("MsAvatarGroup", () => {
  it("renders grouped avatars with max limit and excess counter", async () => {
    const { default: MsAvatarGroup } = await import("../src/components/MsAvatar/MsAvatarGroup.vue");

    const items = [
      { name: "User One" },
      { name: "User Two" },
      { name: "User Three" },
      { name: "User Four" },
      { name: "User Five" },
    ];

    const wrapper = mount(MsAvatarGroup, {
      props: {
        items,
        max: 3,
        size: "md",
        spacing: "tight",
      },
    });

    expect(wrapper.classes()).toContain("ms-avatar-group");
    expect(wrapper.classes()).toContain("ms-avatar-group--spacing-tight");
    const avatars = wrapper.findAll(".ms-avatar");
    // 3 visible avatars + 1 excess avatar = 4 total .ms-avatar elements
    expect(avatars).toHaveLength(4);

    const excess = wrapper.find(".ms-avatar--excess");
    expect(excess.exists()).toBe(true);
    expect(excess.text()).toBe("+2");
  });
});
