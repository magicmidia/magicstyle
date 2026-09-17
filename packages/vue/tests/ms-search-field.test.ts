import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsSearchField from "../src/components/MsSearchField/MsSearchField.vue";

describe("MsSearchField", () => {
  it("renders search input with searchbox role", () => {
    const wrapper = mount(MsSearchField, {
      props: {
        placeholder: "Buscar itens...",
      },
    });

    expect(wrapper.classes()).toContain("ms-search-field");
    const input = wrapper.find("input");
    expect(input.attributes("type")).toBe("search");
    expect(input.attributes("role")).toBe("searchbox");
    expect(input.attributes("placeholder")).toBe("Buscar itens...");
  });

  it("handles input updates and v-model emission", async () => {
    const wrapper = mount(MsSearchField, {
      props: {
        modelValue: "",
      },
    });

    const input = wrapper.find("input");
    await input.setValue("Design System");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["Design System"]);
  });

  it("emits search event when Enter key is pressed", async () => {
    const wrapper = mount(MsSearchField, {
      props: {
        modelValue: "Tokens",
      },
    });

    const input = wrapper.find("input");
    await input.trigger("keydown", { key: "Enter" });

    expect(wrapper.emitted("search")?.[0]).toEqual(["Tokens"]);
  });

  it("renders clear button when value is present and clears on click", async () => {
    const wrapper = mount(MsSearchField, {
      props: {
        modelValue: "Query",
        clearable: true,
      },
    });

    const clearBtn = wrapper.find(".ms-search-field__clear");
    expect(clearBtn.exists()).toBe(true);

    await clearBtn.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([""]);
    expect(wrapper.emitted("clear")).toHaveLength(1);
  });

  it("renders spinner when loading is true", () => {
    const wrapper = mount(MsSearchField, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.classes()).toContain("is-loading");
    expect(wrapper.find(".ms-spinner").exists()).toBe(true);
  });

  it("supports variants and shortcut badge", () => {
    const wrapper = mount(MsSearchField, {
      props: {
        variant: "filled",
        shortcut: "⌘K",
      },
    });

    expect(wrapper.classes()).toContain("ms-search-field--filled");
    const shortcut = wrapper.find(".ms-search-field__shortcut");
    expect(shortcut.exists()).toBe(true);
    expect(shortcut.text()).toBe("⌘K");
  });
});
