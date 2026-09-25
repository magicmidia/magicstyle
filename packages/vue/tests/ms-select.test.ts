import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MsSelect from "../src/components/MsSelect/MsSelect.vue";
import type { MsSelectOption, MsSelectGroup } from "../src/components/MsSelect/types.ts";

const sampleOptions: MsSelectOption[] = [
  { value: "vue", label: "Vue.js", description: "Progressive Framework" },
  { value: "react", label: "React", description: "UI Library" },
  { value: "svelte", label: "Svelte", description: "Cybernetically enhanced" },
  { value: "angular", label: "Angular", disabled: true },
];

const sampleGroups: MsSelectGroup[] = [
  {
    group: "Frontend",
    options: [
      { value: "vue", label: "Vue" },
      { value: "react", label: "React" },
    ],
  },
  {
    group: "Backend",
    options: [
      { value: "node", label: "Node.js" },
      { value: "rust", label: "Rust" },
    ],
  },
];

describe("MsSelect (Doc 04 §9, Doc 05 §6, Doc 27 §6)", () => {
  it("renders combobox trigger with placeholder and WAI-ARIA attributes", () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        placeholder: "Choose framework...",
      },
    });

    const trigger = wrapper.find('[role="combobox"]');
    expect(trigger.exists()).toBe(true);
    expect(trigger.attributes("aria-expanded")).toBe("false");
    expect(trigger.attributes("aria-haspopup")).toBe("listbox");
    expect(wrapper.find(".ms-select__placeholder").text()).toBe("Choose framework...");
    expect(wrapper.find(".ms-select__dropdown").exists()).toBe(false);
  });

  it("handles single selection flow and updates modelValue", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        modelValue: undefined,
      },
    });

    // Click trigger to open
    const trigger = wrapper.find('[role="combobox"]');
    await trigger.trigger("click");
    expect(trigger.attributes("aria-expanded")).toBe("true");

    const dropdown = wrapper.find(".ms-select__dropdown");
    expect(dropdown.exists()).toBe(true);

    // Select Vue option
    const options = wrapper.findAll('[role="option"]');
    expect(options.length).toBe(4);
    await options[0]!.trigger("click");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["vue"]);
    expect(wrapper.emitted("change")?.[0]).toEqual(["vue"]);
    // Dropdown closes after single selection
    expect(wrapper.find(".ms-select__dropdown").exists()).toBe(false);
  });

  it("handles multiple selection and tags display", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        multiple: true,
        modelValue: ["vue"],
      },
    });

    // Selected tag is rendered
    const tags = wrapper.findAll(".ms-select__tag");
    expect(tags.length).toBe(1);
    expect(tags[0]!.text()).toContain("Vue.js");

    // Open dropdown and toggle another option
    await wrapper.find('[role="combobox"]').trigger("click");
    const options = wrapper.findAll('[role="option"]');
    await options[1]!.trigger("click"); // select React

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["vue", "react"]]);

    // Remove first tag via remove button
    const removeBtn = wrapper.find(".ms-select__tag-remove");
    await removeBtn.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[1]).toEqual([[]]);
  });

  it("filters options when searchable is enabled", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        searchable: true,
        open: true,
      },
    });

    const searchInput = wrapper.find(".ms-select__search-input");
    expect(searchInput.exists()).toBe(true);

    await searchInput.setValue("svel");
    expect(wrapper.emitted("search")?.[0]).toEqual(["svel"]);

    const visibleOptions = wrapper.findAll('[role="option"]');
    expect(visibleOptions.length).toBe(1);
    expect(visibleOptions[0]!.text()).toContain("Svelte");
  });

  it("supports keyboard navigation with ArrowDown, Enter and Escape", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
      },
    });

    const trigger = wrapper.find('[role="combobox"]');

    // Press ArrowDown to open
    await trigger.trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.find(".ms-select__dropdown").exists()).toBe(true);

    // Dropdown handles ArrowDown to move to next item
    const dropdown = wrapper.find(".ms-select__dropdown");
    await dropdown.trigger("keydown", { key: "ArrowDown" });

    // Press Enter to select highlighted
    await dropdown.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toBeDefined();

    // Reopen and test Escape
    await trigger.trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.find(".ms-select__dropdown").exists()).toBe(true);
    await wrapper.find(".ms-select__dropdown").trigger("keydown", { key: "Escape" });
    expect(wrapper.find(".ms-select__dropdown").exists()).toBe(false);
  });

  it("clears selection when clearable is enabled and clear button is clicked", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        modelValue: "vue",
        clearable: true,
      },
    });

    const clearBtn = wrapper.find(".ms-select__clear");
    expect(clearBtn.exists()).toBe(true);

    await clearBtn.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([null]);
    expect(wrapper.emitted("clear")).toHaveLength(1);
  });

  it("renders grouped options with group labels and role='group'", () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleGroups,
        open: true,
      },
    });

    const groups = wrapper.findAll('[role="group"]');
    expect(groups.length).toBe(2);
    expect(groups[0]!.attributes("aria-label")).toBe("Frontend");
    expect(groups[1]!.attributes("aria-label")).toBe("Backend");

    const options = wrapper.findAll('[role="option"]');
    expect(options.length).toBe(4);
  });

  it("supports creatable capability for custom options", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        searchable: true,
        creatable: true,
        open: true,
      },
    });

    const searchInput = wrapper.find(".ms-select__search-input");
    await searchInput.setValue("SolidJS");

    const createBtn = wrapper.find(".ms-select__create");
    expect(createBtn.exists()).toBe(true);
    expect(createBtn.text()).toContain('Criar "SolidJS"');

    await createBtn.trigger("click");
    expect(wrapper.emitted("create")?.[0]).toEqual(["SolidJS"]);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["SolidJS"]);
  });

  it("prevents opening and interaction when disabled", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        disabled: true,
      },
    });

    const trigger = wrapper.find('[role="combobox"]');
    expect(trigger.attributes("aria-disabled")).toBe("true");

    await trigger.trigger("click");
    expect(wrapper.find(".ms-select__dropdown").exists()).toBe(false);
  });

  it("renders clear button with single clean icon and clears selection", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        modelValue: "vue",
        clearable: true,
      },
    });

    const clearBtn = wrapper.find(".ms-select__clear");
    expect(clearBtn.exists()).toBe(true);

    // Verify SVG icon only has one path and no duplicate line elements
    const svg = clearBtn.find("svg");
    expect(svg.exists()).toBe(true);
    expect(svg.findAll("line")).toHaveLength(0);
    expect(svg.findAll("path")).toHaveLength(1);

    await clearBtn.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([null]);
    expect(wrapper.emitted("clear")).toBeTruthy();
  });

  it("supports tone, variant, pill, and size attributes", () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        tone: "accent",
        variant: "filled",
        pill: true,
        size: "xs",
      },
    });

    const root = wrapper.find(".ms-select");
    expect(root.exists()).toBe(true);
    expect(root.attributes("data-tone")).toBe("accent");
    expect(root.attributes("data-variant")).toBe("filled");
    expect(root.attributes("data-size")).toBe("xs");
    expect(root.classes()).toContain("ms-select--pill");
    expect(root.classes()).toContain("ms-select--variant-filled");
    expect(root.classes()).toContain("ms-select--tone-accent");
  });

  it("supports shape modifiers (square, rounded-sm, rounded-lg, pill)", () => {
    const wrapperSquare = mount(MsSelect, {
      props: { options: sampleOptions, shape: "square" },
    });
    expect(wrapperSquare.find(".ms-select").classes()).toContain("ms-select--shape-square");

    const wrapperRoundedLg = mount(MsSelect, {
      props: { options: sampleOptions, shape: "rounded-lg" },
    });
    expect(wrapperRoundedLg.find(".ms-select").classes()).toContain("ms-select--shape-rounded-lg");
  });

  it("supports placement prop (top / bottom)", () => {
    const wrapper = mount(MsSelect, {
      props: { options: sampleOptions, placement: "top" },
    });
    expect(wrapper.find(".ms-select").classes()).toContain("ms-select--placement-top");
    expect(wrapper.find(".ms-select").attributes("data-placement")).toBe("top");
  });

  it("supports multiple with counter and conditional counter", () => {
    const wrapperCounter = mount(MsSelect, {
      props: {
        options: sampleOptions,
        multiple: true,
        counter: true,
        modelValue: ["vue", "react", "svelte"],
      },
    });
    expect(wrapperCounter.find(".ms-select__counter").text()).toContain("3 selecionados");

    const wrapperConditional = mount(MsSelect, {
      props: {
        options: sampleOptions,
        multiple: true,
        conditionalCounter: 1,
        modelValue: ["vue", "react", "svelte"],
      },
    });
    const tags = wrapperConditional.findAll(".ms-select__tag");
    expect(tags.length).toBe(1);
    expect(wrapperConditional.find(".ms-select__counter").text()).toContain("+2 mais");
  });

  it("supports search limit and minimal search length", async () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        searchable: true,
        open: true,
        minSearchLength: 3,
        searchLimit: 2,
      },
    });

    const searchInput = wrapper.find(".ms-select__search-input");
    // With query length < 3, it should not filter
    await searchInput.setValue("re");
    // All 2 limited options displayed
    expect(wrapper.findAll('[role="option"]').length).toBe(2);

    // With query length >= 3, it filters and respects limit
    await searchInput.setValue("eac");
    const filtered = wrapper.findAll('[role="option"]');
    expect(filtered.length).toBe(1);
    expect(filtered[0]!.text()).toContain("React");
  });

  it("supports floating label and custom slots", () => {
    const wrapper = mount(MsSelect, {
      props: {
        options: sampleOptions,
        floatingLabel: "Framework",
        modelValue: "vue",
      },
      slots: {
        prefix: () => "🚀",
        selectedOption: ({ option }: { option: MsSelectOption }) => `🌟 ${option.label}`,
      },
    });

    expect(wrapper.find(".ms-select").classes()).toContain("ms-select--floating");
    expect(wrapper.find(".ms-select__floating-label").text()).toBe("Framework");
    expect(wrapper.find(".ms-select__prefix").text()).toBe("🚀");
    expect(wrapper.find(".ms-select__single-value").text()).toBe("🌟 Vue.js");
  });
});
