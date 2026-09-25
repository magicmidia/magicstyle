import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { h } from "vue";
import type { VueWrapper } from "@vue/test-utils";
import MsTooltip from "../src/components/MsTooltip/MsTooltip.vue";

/** The tooltip is always rendered (v-show) so aria-describedby stays valid; "shown" = not display:none. */
const shown = (wrapper: VueWrapper) => {
  const tooltip = wrapper.find('[role="tooltip"]');
  return tooltip.exists() && !/display:\s*none/.test(tooltip.attributes("style") ?? "");
};

describe("MsTooltip (doc 05 §7)", () => {
  it("renders trigger element and does not render tooltip initially", () => {
    const wrapper = mount(MsTooltip, {
      props: {
        content: "Dica de Ajuda",
      },
      slots: {
        default: () => h("button", "Passe o mouse"),
      },
    });

    expect(wrapper.text()).toContain("Passe o mouse");
    expect(shown(wrapper)).toBe(false);
    expect(wrapper.attributes("aria-describedby")).toBeUndefined();
    // Described on the focusable trigger from the start (not on the wrapper).
    expect(wrapper.find("button").attributes("aria-describedby")).toBe(
      wrapper.find('[role="tooltip"]').attributes("id"),
    );
  });

  it("shows tooltip on pointerenter and focusin with ARIA relationship", async () => {
    vi.useFakeTimers();

    const wrapper = mount(MsTooltip, {
      props: {
        content: "Dica de Ajuda",
        showDelay: 100,
        placement: "bottom",
      },
      slots: {
        default: () => h("button", "Ação"),
      },
    });

    await wrapper.trigger("mouseenter");
    vi.advanceTimersByTime(100);
    await wrapper.vm.$nextTick();

    const tooltip = wrapper.find('[role="tooltip"]');
    expect(shown(wrapper)).toBe(true);
    expect(tooltip.text()).toBe("Dica de Ajuda");
    expect(tooltip.classes()).toContain("ms-tooltip--bottom");

    // Check aria-describedby
    const tooltipId = tooltip.attributes("id");
    expect(tooltipId).toBeDefined();
    expect(wrapper.find("button").attributes("aria-describedby")).toBe(tooltipId);

    vi.useRealTimers();
  });

  it("hides tooltip on mouseleave and Escape keydown", async () => {
    vi.useFakeTimers();

    const wrapper = mount(MsTooltip, {
      props: {
        content: "Atalho ⌘S",
        showDelay: 0,
        hideDelay: 50,
      },
      slots: {
        default: () => h("button", "Salvar"),
      },
    });

    await wrapper.trigger("mouseenter");
    expect(shown(wrapper)).toBe(true);

    // Escape closes immediately
    await wrapper.trigger("keydown.esc");
    expect(shown(wrapper)).toBe(false);

    // Trigger again, then mouseleave with hide delay
    await wrapper.trigger("mouseenter");
    expect(shown(wrapper)).toBe(true);

    await wrapper.trigger("mouseleave");
    vi.advanceTimersByTime(50);
    await wrapper.vm.$nextTick();
    expect(shown(wrapper)).toBe(false);

    vi.useRealTimers();
  });

  it("does not show tooltip when disabled", async () => {
    const wrapper = mount(MsTooltip, {
      props: {
        content: "Desabilitado",
        showDelay: 0,
        disabled: true,
      },
      slots: {
        default: () => h("button", "Trigger"),
      },
    });

    await wrapper.trigger("mouseenter");
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false);
  });

  it("supports tone, size, arrow and maxWidth variations", async () => {
    const wrapper = mount(MsTooltip, {
      props: {
        content: "Tooltip com variações ricas",
        showDelay: 0,
        tone: "light",
        size: "lg",
        arrow: false,
        maxWidth: 220,
      },
      slots: {
        default: () => h("button", "Trigger"),
      },
    });

    await wrapper.trigger("mouseenter");
    const tooltip = wrapper.find('[role="tooltip"]');
    expect(tooltip.exists()).toBe(true);
    expect(tooltip.classes()).toContain("ms-tooltip--tone-light");
    expect(tooltip.classes()).toContain("ms-tooltip--lg");
    expect(tooltip.classes()).toContain("ms-tooltip--multiline");
    expect(tooltip.attributes("style")).toContain("max-width: 220px");
    expect(tooltip.find(".ms-tooltip__arrow").exists()).toBe(false);
  });
});
