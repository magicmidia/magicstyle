import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { h, nextTick, type Component } from "vue";
import { MsProvider, MsSelect, MsSpinner, MsTruncate } from "../src/index.ts";

const options = [
  { value: "vue", label: "Vue.js" },
  { value: "react", label: "React" },
];

function withProvider(
  providerProps: Record<string, unknown>,
  component: Component,
  props: Record<string, unknown> = {},
) {
  return mount(MsProvider, {
    props: providerProps,
    slots: { default: () => h(component, props) },
  });
}

describe("group D components read built-in strings from messages", () => {
  it("MsSelect renders English placeholder, search placeholder and empty text", async () => {
    const wrapper = withProvider({ locale: "en-US" }, MsSelect, {
      options,
      searchable: true,
      open: true,
    });
    expect(wrapper.find(".ms-select__placeholder").text()).toBe("Select...");

    const search = wrapper.find(".ms-select__search-input");
    expect(search.attributes("placeholder")).toBe("Search...");
    await search.setValue("zzz");
    expect(wrapper.find(".ms-select__empty").text()).toBe("No options found");
  });

  it("MsSelect keeps the query emphasized in the English create option", async () => {
    const wrapper = withProvider({ locale: "en-US" }, MsSelect, {
      options,
      searchable: true,
      creatable: true,
      open: true,
    });
    await wrapper.find(".ms-select__search-input").setValue("Solid");
    const create = wrapper.find(".ms-select__create");
    expect(create.text()).toBe('Create "Solid"');
    expect(create.find("strong").text()).toBe("Solid");
  });

  it("MsSpinner and MsTruncate render English defaults", async () => {
    expect(withProvider({ locale: "en-US" }, MsSpinner).text()).toBe("Loading...");
    // The toggle only renders for overflowing text; jsdom has no layout, so fake it.
    const scroll = vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    const truncate = withProvider({ locale: "en-US" }, MsTruncate, {
      text: "Long text",
      expandable: true,
    });
    await nextTick();
    expect(truncate.find(".ms-truncate__toggle").text()).toBe("Show more");
    scroll.mockRestore();
  });

  it("applies :messages overrides while explicit props still win", () => {
    const messages = { select: { placeholder: "Pick one" }, spinner: { label: "Hold on" } };
    expect(withProvider({ messages }, MsSelect, { options }).text()).toContain("Pick one");
    expect(withProvider({ messages }, MsSpinner).text()).toBe("Hold on");
    expect(withProvider({ messages }, MsSpinner, { label: "Custom" }).text()).toBe("Custom");
  });
});
