import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCommandPalette } from "../src/index.ts";

describe("MsCommandPalette component", () => {
  it("renders when modelValue is true", () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    const palette = document.querySelector(".ms-command-palette");
    expect(palette).not.toBeNull();
    wrapper.unmount();
  });

  it("filters items according to query", async () => {
    const wrapper = mount(MsCommandPalette, {
      props: { modelValue: true },
      attachTo: document.body,
    });
    const input = document.querySelector(
      "input.ms-command-palette__search-input",
    ) as HTMLInputElement;
    expect(input).not.toBeNull();

    input.value = "Tokens";
    input.dispatchEvent(new Event("input"));

    await wrapper.vm.$nextTick();
    const items = document.querySelectorAll(".ms-command-palette__item");
    expect(items.length).toBe(1);
    expect(items[0]?.textContent).toContain("Tokens");

    wrapper.unmount();
  });
});
