import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import MsTab from "../src/components/MsTabs/MsTab.vue";
import MsTabList from "../src/components/MsTabs/MsTabList.vue";
import MsTabPanel from "../src/components/MsTabs/MsTabPanel.vue";
import MsTabPanels from "../src/components/MsTabs/MsTabPanels.vue";
import MsTabs from "../src/components/MsTabs/MsTabs.vue";

describe("MsTabs (doc 05 §7)", () => {
  function renderTabs(props = {}, initialTab = "tab1") {
    return mount(MsTabs, {
      props: {
        defaultValue: initialTab,
        ...props,
      },
      slots: {
        default: () => [
          h(MsTabList, { ariaLabel: "Settings navigation" }, () => [
            h(MsTab, { value: "tab1" }, () => "General"),
            h(MsTab, { value: "tab2" }, () => "Security"),
            h(MsTab, { value: "tab3", disabled: true }, () => "Billing"),
            h(MsTab, { value: "tab4" }, () => "Notifications"),
          ]),
          h(MsTabPanels, () => [
            h(MsTabPanel, { value: "tab1" }, () => "General Settings Content"),
            h(MsTabPanel, { value: "tab2" }, () => "Security Settings Content"),
            h(MsTabPanel, { value: "tab3" }, () => "Billing Settings Content"),
            h(MsTabPanel, { value: "tab4" }, () => "Notifications Content"),
          ]),
        ],
      },
      attachTo: document.body,
    });
  }

  it("renders tab structure and correct ARIA attributes", () => {
    const wrapper = renderTabs();

    const tablist = wrapper.find('[role="tablist"]');
    expect(tablist.exists()).toBe(true);
    expect(tablist.attributes("aria-label")).toBe("Settings navigation");
    expect(tablist.attributes("aria-orientation")).toBe("horizontal");

    const tabs = wrapper.findAll('[role="tab"]');
    expect(tabs).toHaveLength(4);

    expect(tabs[0]!.attributes("aria-selected")).toBe("true");
    expect(tabs[0]!.attributes("tabindex")).toBe("0");
    expect(tabs[1]!.attributes("aria-selected")).toBe("false");
    expect(tabs[1]!.attributes("tabindex")).toBe("-1");

    // Check panel
    const panels = wrapper.findAll('[role="tabpanel"]');
    expect(panels).toHaveLength(4);
    // tab1 panel is active
    expect(panels[0]!.isVisible()).toBe(true);
    expect(panels[0]!.attributes("tabindex")).toBe("0");
    expect(panels[1]!.isVisible()).toBe(false);

    wrapper.unmount();
  });

  it("switches tabs upon clicking a non-disabled tab", async () => {
    const wrapper = renderTabs();
    const tabs = wrapper.findAll('[role="tab"]');

    await tabs[1]!.trigger("click");

    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["tab2"]);
    expect(wrapper.emitted("change")?.[0]).toEqual(["tab2"]);

    expect(tabs[0]!.attributes("aria-selected")).toBe("false");
    expect(tabs[1]!.attributes("aria-selected")).toBe("true");

    const panels = wrapper.findAll('[role="tabpanel"]');
    expect(panels[0]!.isVisible()).toBe(false);
    expect(panels[1]!.isVisible()).toBe(true);

    wrapper.unmount();
  });

  it("prevents switching to disabled tabs", async () => {
    const wrapper = renderTabs();
    const tabs = wrapper.findAll('[role="tab"]');

    await tabs[2]!.trigger("click");

    // tab1 should remain selected because tab3 is disabled
    expect(tabs[0]!.attributes("aria-selected")).toBe("true");
    expect(tabs[2]!.attributes("aria-selected")).toBe("false");

    wrapper.unmount();
  });

  it("supports keyboard navigation: ArrowRight, ArrowLeft, Home, End skipping disabled tabs", async () => {
    const wrapper = renderTabs();
    const tabs = wrapper.findAll('[role="tab"]');

    // Currently on tab1 (index 0). Next enabled is tab2 (index 1).
    await tabs[0]!.trigger("keydown", { key: "ArrowRight" });
    expect(tabs[1]!.attributes("aria-selected")).toBe("true");

    // Next enabled is tab4 (tab3 is disabled)
    await tabs[1]!.trigger("keydown", { key: "ArrowRight" });
    expect(tabs[3]!.attributes("aria-selected")).toBe("true");

    // Loop back to start with ArrowRight
    await tabs[3]!.trigger("keydown", { key: "ArrowRight" });
    expect(tabs[0]!.attributes("aria-selected")).toBe("true");

    // ArrowLeft loops to end (tab4)
    await tabs[0]!.trigger("keydown", { key: "ArrowLeft" });
    expect(tabs[3]!.attributes("aria-selected")).toBe("true");

    // Home key goes to first enabled tab
    await tabs[3]!.trigger("keydown", { key: "Home" });
    expect(tabs[0]!.attributes("aria-selected")).toBe("true");

    // End key goes to last enabled tab
    await tabs[0]!.trigger("keydown", { key: "End" });
    expect(tabs[3]!.attributes("aria-selected")).toBe("true");

    wrapper.unmount();
  });

  it("applies variant and orientation classes", () => {
    const wrapper = renderTabs({
      variant: "pill",
      size: "lg",
      orientation: "vertical",
      fitted: true,
    });

    expect(wrapper.classes()).toContain("ms-tabs--pill");
    expect(wrapper.classes()).toContain("ms-tabs--lg");
    expect(wrapper.classes()).toContain("ms-tabs--vertical");
    expect(wrapper.classes()).toContain("ms-tabs--fitted");

    const tablist = wrapper.find(".ms-tab-list");
    expect(tablist.classes()).toContain("ms-tab-list--pill");
    expect(tablist.classes()).toContain("ms-tab-list--fitted");

    wrapper.unmount();
  });

  it("supports solid variant and scrollable tab list wrapper", () => {
    const wrapper = renderTabs({
      variant: "solid",
      scrollable: true,
    });

    expect(wrapper.classes()).toContain("ms-tabs--solid");
    expect(wrapper.find(".ms-tab-list-wrapper").exists()).toBe(true);
    expect(wrapper.find(".ms-tab-list").classes()).toContain("ms-tab-list--solid");
    expect(wrapper.find(".ms-tab-list").classes()).toContain("ms-tab-list--scrollable");

    const tabs = wrapper.findAll('[role="tab"]');
    expect(tabs[0]!.classes()).toContain("ms-tab--solid");

    wrapper.unmount();
  });
});
