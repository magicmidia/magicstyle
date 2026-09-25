import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCommandPalette } from "../src/index.ts";

const items = [
  { id: "docs", label: "Go to documentation", group: "Navigation" },
  { id: "tokens", label: "Inspect design tokens", group: "Navigation" },
  { id: "theme", label: "Toggle theme", group: "Quick actions" },
];

describe("MsCommandPalette component", () => {
  it("renders when modelValue is true", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true, items },
      attachTo: document.body,
    });
    const palette = document.querySelector(".ms-command-palette");
    expect(palette).not.toBeNull();
    expect(palette?.getAttribute("aria-label")).toBe("Command palette");
    expect(document.querySelectorAll(".ms-command-palette__item")).toHaveLength(3);
    const footer = document.querySelector(".ms-command-palette__footer");
    expect(footer?.textContent).toContain("Navigate with ↑ ↓");
    expect(footer?.textContent).toContain("Run with ↵");
    wrapper.unmount();
  });

  it("filters items according to query", async () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true, items },
      attachTo: document.body,
    });
    const input = document.querySelector(
      "input.ms-command-palette__search-input",
    ) as HTMLInputElement;
    expect(input).not.toBeNull();

    input.value = "Tokens";
    input.dispatchEvent(new Event("input"));

    await wrapper.vm.$nextTick();
    const found = document.querySelectorAll(".ms-command-palette__item");
    expect(found.length).toBe(1);
    expect(found[0]?.textContent).toContain("tokens");

    wrapper.unmount();
  });

  it("ships no demo commands: without items it shows the empty state", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    expect(document.querySelectorAll(".ms-command-palette__item")).toHaveLength(0);
    expect(document.querySelector(".ms-command-palette__results")).toBeNull();
    expect(document.querySelector(".ms-command-palette__empty")?.textContent?.trim()).toBe(
      "No commands found.",
    );
    const input = document.querySelector<HTMLInputElement>(".ms-command-palette__search-input");
    expect(input?.placeholder).toBe("Type a command or search...");
    wrapper.unmount();
  });

  it("placeholder and emptyText props win over the messages", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true, placeholder: "Search actions", emptyText: "Nothing here" },
      attachTo: document.body,
    });
    const input = document.querySelector<HTMLInputElement>(".ms-command-palette__search-input");
    expect(input?.placeholder).toBe("Search actions");
    expect(input?.getAttribute("aria-label")).toBe("Search actions");
    expect(document.querySelector(".ms-command-palette__empty")?.textContent?.trim()).toBe(
      "Nothing here",
    );
    wrapper.unmount();
  });
});
