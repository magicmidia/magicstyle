import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import MsGlimpse from "../src/components/MsGlimpse/MsGlimpse.vue";

describe("MsGlimpse", () => {
  it("renders trigger link with label and domain", () => {
    const wrapper = mount(MsGlimpse, {
      props: {
        href: "https://magic-style.dev",
        label: "Visit MagicStyle",
        title: "MagicStyle Documentation",
        description: "Enterprise component library for Vue and CSS",
        domain: "magic-style.dev",
      },
    });

    const link = wrapper.find("a");
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe("Visit MagicStyle");
    expect(link.attributes("href")).toBe("https://magic-style.dev");
    expect(wrapper.find(".ms-glimpse__card").exists()).toBe(true);
  });

  it("opens hovercard on trigger mouseenter with delay and emits open", async () => {
    vi.useFakeTimers();

    const wrapper = mount(MsGlimpse, {
      props: {
        href: "https://github.com/magicmidia/magicstyle",
        title: "MagicStyle GitHub",
        showDelay: 100,
        hideDelay: 50,
      },
    });

    const trigger = wrapper.find(".ms-glimpse__trigger");
    await trigger.trigger("mouseenter");

    expect(wrapper.find(".ms-glimpse__card--open").exists()).toBe(false);

    vi.advanceTimersByTime(100);
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".ms-glimpse__card--open").exists()).toBe(true);
    expect(wrapper.emitted("open")).toBeTruthy();

    await trigger.trigger("mouseleave");
    vi.advanceTimersByTime(50);
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".ms-glimpse__card--open").exists()).toBe(false);
    expect(wrapper.emitted("close")).toBeTruthy();

    vi.useRealTimers();
  });

  it("renders skeleton placeholder when loading is true", () => {
    const wrapper = mount(MsGlimpse, {
      props: {
        href: "https://example.com",
        loading: true,
      },
    });

    expect(wrapper.find(".ms-glimpse__skeleton-image").exists()).toBe(true);
    expect(wrapper.findAll(".ms-glimpse__skeleton-line").length).toBeGreaterThan(0);
  });
});
