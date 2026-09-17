import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsAccordion from "../src/components/MsAccordion/MsAccordion.vue";
import MsAccordionItem from "../src/components/MsAccordion/MsAccordionItem.vue";

describe("MsAccordion & MsAccordionItem", () => {
  it("renders accordion and items properly with single expansion", async () => {
    const wrapper = mount({
      components: { MsAccordion, MsAccordionItem },
      template: `
          <MsAccordion model-value="item-1">
            <MsAccordionItem value="item-1" title="Item 1">Content 1</MsAccordionItem>
            <MsAccordionItem value="item-2" title="Item 2">Content 2</MsAccordionItem>
          </MsAccordion>
        `,
    });

    const items = wrapper.findAll(".ms-accordion-item");
    expect(items.length).toBe(2);

    expect(items[0]!.classes()).toContain("ms-accordion-item--expanded");
    expect(items[1]!.classes()).not.toContain("ms-accordion-item--expanded");

    // Click item 2 trigger
    const trigger2 = items[1]!.find(".ms-accordion-item__trigger");
    await trigger2.trigger("click");

    const accordion = wrapper.findComponent(MsAccordion);
    expect(accordion.emitted("update:modelValue")?.[0]).toEqual(["item-2"]);
  });

  it("handles multiple mode", async () => {
    const wrapper = mount({
      components: { MsAccordion, MsAccordionItem },
      template: `
          <MsAccordion :model-value="['item-1']" multiple>
            <MsAccordionItem value="item-1" title="Item 1">Content 1</MsAccordionItem>
            <MsAccordionItem value="item-2" title="Item 2">Content 2</MsAccordionItem>
          </MsAccordion>
        `,
    });

    const items = wrapper.findAll(".ms-accordion-item");
    const trigger2 = items[1]!.find(".ms-accordion-item__trigger");
    await trigger2.trigger("click");

    const accordion = wrapper.findComponent(MsAccordion);
    expect(accordion.emitted("update:modelValue")?.[0]).toEqual([["item-1", "item-2"]]);
  });

  it("does not toggle when item is disabled", async () => {
    const wrapper = mount({
      components: { MsAccordion, MsAccordionItem },
      template: `
          <MsAccordion model-value="item-1">
            <MsAccordionItem value="item-1" title="Item 1" disabled>Content 1</MsAccordionItem>
          </MsAccordion>
        `,
    });

    const trigger = wrapper.find(".ms-accordion-item__trigger");
    expect(trigger.attributes("disabled")).toBeDefined();
    await trigger.trigger("click");

    const accordion = wrapper.findComponent(MsAccordion);
    expect(accordion.emitted("update:modelValue")).toBeUndefined();
  });
});
