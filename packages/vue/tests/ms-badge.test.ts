import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsBadge from "../src/components/MsBadge/MsBadge.vue";

describe("MsBadge", () => {
  it("renders with default props and slot content", () => {
    const wrapper = mount(MsBadge, {
      slots: {
        default: () => "New",
      },
    });

    expect(wrapper.classes()).toContain("ms-badge");
    expect(wrapper.text()).toBe("New");
    expect(wrapper.attributes("data-variant")).toBe("solid");
    expect(wrapper.attributes("data-tone")).toBe("primary");
    expect(wrapper.attributes("data-size")).toBe("md");
  });

  it("applies variant and tone attributes correctly", () => {
    const wrapper = mount(MsBadge, {
      props: {
        variant: "outline",
        tone: "success",
        size: "sm",
      },
      slots: {
        default: () => "Active",
      },
    });

    expect(wrapper.attributes("data-variant")).toBe("outline");
    expect(wrapper.attributes("data-tone")).toBe("success");
    expect(wrapper.attributes("data-size")).toBe("sm");
  });

  it("renders pill shape when pill prop is true", () => {
    const wrapper = mount(MsBadge, {
      props: {
        pill: true,
      },
      slots: {
        default: () => "99+",
      },
    });

    expect(wrapper.attributes("data-pill")).toBe("true");
  });

  it("renders dot indicator when dot prop is true", () => {
    const wrapper = mount(MsBadge, {
      props: {
        dot: true,
        tone: "danger",
      },
      slots: {
        default: () => "Offline",
      },
    });

    const dot = wrapper.find(".ms-badge-dot");
    expect(dot.exists()).toBe(true);
    expect(dot.attributes("aria-hidden")).toBe("true");
  });

  it("supports numeric count formatting and maxCount overflow", () => {
    const normal = mount(MsBadge, { props: { count: 8 } });
    expect(normal.text()).toBe("8");

    const overflow = mount(MsBadge, { props: { count: 120, maxCount: 99 } });
    expect(overflow.text()).toBe("99+");

    const zeroHidden = mount(MsBadge, { props: { count: 0, showZero: false } });
    expect(zeroHidden.find(".ms-badge").exists()).toBe(false);

    const zeroVisible = mount(MsBadge, { props: { count: 0, showZero: true } });
    expect(zeroVisible.text()).toBe("0");
  });

  it("supports dotOnly mode and pulse animation", () => {
    const wrapper = mount(MsBadge, {
      props: {
        dotOnly: true,
        pulse: true,
        bordered: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-badge--dot-only");
    expect(wrapper.classes()).toContain("ms-badge--pulse");
    expect(wrapper.classes()).toContain("ms-badge--bordered");
  });

  it("wraps child element and positions badge at corner placement", () => {
    const wrapper = mount(MsBadge, {
      props: {
        count: 5,
        placement: "top-right",
      },
      slots: {
        default: () => "Inbox",
      },
    });

    expect(wrapper.classes()).toContain("ms-badge-wrapper");
    expect(wrapper.text()).toContain("Inbox");
    const badge = wrapper.find(".ms-badge");
    expect(badge.exists()).toBe(true);
    expect(badge.classes()).toContain("ms-badge--corner");
    expect(badge.classes()).toContain("ms-badge--placement-top-right");
    expect(badge.text()).toBe("5");
  });
});
