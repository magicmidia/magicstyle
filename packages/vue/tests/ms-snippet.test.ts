import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import MsSnippet from "../src/components/MsSnippet/MsSnippet.vue";

describe("MsSnippet", () => {
  it("renders single snippet with code and default prompt", () => {
    const wrapper = mount(MsSnippet, {
      props: {
        code: "pnpm add @magic-style/vue",
      },
    });

    expect(wrapper.classes()).toContain("ms-snippet");
    expect(wrapper.find(".ms-snippet__prompt").text().trim()).toBe("$");
    expect(wrapper.find(".ms-snippet__code").text()).toBe("pnpm add @magic-style/vue");
    expect(wrapper.find(".ms-snippet__copy-btn").exists()).toBe(true);
  });

  it("applies variant, size and tone classes correctly", () => {
    const wrapper = mount(MsSnippet, {
      props: {
        code: "npm install",
        variant: "bordered",
        size: "lg",
        tone: "success",
        wrapLines: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-snippet--bordered");
    expect(wrapper.classes()).toContain("ms-snippet--lg");
    expect(wrapper.classes()).toContain("ms-snippet--tone-success");
    expect(wrapper.classes()).toContain("ms-snippet--wrap");
  });

  it("renders multiple tabs with WAI-ARIA tablist", async () => {
    const tabs = [
      { id: "pnpm", label: "pnpm", code: "pnpm add @magic-style/vue" },
      { id: "npm", label: "npm", code: "npm install @magic-style/vue" },
      { id: "yarn", label: "yarn", code: "yarn add @magic-style/vue" },
    ];

    const wrapper = mount(MsSnippet, {
      props: {
        tabs,
        activeTab: 0,
      },
    });

    expect(wrapper.find('[role="tablist"]').exists()).toBe(true);
    const tabButtons = wrapper.findAll('[role="tab"]');
    expect(tabButtons.length).toBe(3);
    expect(tabButtons[0]!.attributes("aria-selected")).toBe("true");
    expect(tabButtons[1]!.attributes("aria-selected")).toBe("false");

    // Code displays the first tab
    expect(wrapper.find(".ms-snippet__code").text()).toBe("pnpm add @magic-style/vue");

    // Click second tab
    await tabButtons[1]!.trigger("click");
    expect(wrapper.emitted("update:activeTab")?.[0]).toEqual(["npm"]);
    expect(wrapper.emitted("tab-change")?.[0]?.[0]).toEqual(tabs[1]);
  });

  it("handles copy to clipboard", async () => {
    // Mock navigator.clipboard
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      configurable: true,
      writable: true,
    });

    const wrapper = mount(MsSnippet, {
      props: {
        code: "bun add @magic-style/vue",
      },
    });

    const copyBtn = wrapper.find(".ms-snippet__copy-btn");
    await copyBtn.trigger("click");

    expect(writeTextMock).toHaveBeenCalledWith("bun add @magic-style/vue");
    expect(wrapper.emitted("copy")).toBeTruthy();
    expect(wrapper.emitted("copy")?.[0]?.[0]).toEqual({
      code: "bun add @magic-style/vue",
      tab: 0,
    });
  });
});
