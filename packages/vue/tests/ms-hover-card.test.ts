import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import MsHoverCard from "../src/components/MsHoverCard/MsHoverCard.vue";

describe("MsHoverCard", () => {
  it("renders trigger and displays content on hover with delay", async () => {
    vi.useFakeTimers();
    const wrapper = mount(MsHoverCard, {
      props: { openDelay: 100, closeDelay: 100 },
      slots: {
        default: '<a href="#">@antigravity</a>',
        content: "<div>User Profile Preview</div>",
      },
    });

    expect(wrapper.classes()).toContain("ms-hover-card");
    expect(wrapper.find(".ms-hover-card__content").exists()).toBe(false);

    // Trigger mouseenter
    await wrapper.trigger("mouseenter");
    expect(wrapper.find(".ms-hover-card__content").exists()).toBe(false);

    // Fast-forward delay
    vi.advanceTimersByTime(110);
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".ms-hover-card__content").exists()).toBe(true);
    expect(wrapper.find(".ms-hover-card__content").text()).toContain("User Profile Preview");

    // Trigger mouseleave
    await wrapper.trigger("mouseleave");
    vi.advanceTimersByTime(110);
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".ms-hover-card__content").exists()).toBe(false);

    vi.useRealTimers();
  });
});
