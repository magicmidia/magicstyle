import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsList from "../src/components/MsList/MsList.vue";
import MsListItem from "../src/components/MsList/MsListItem.vue";
import MsListGroup from "../src/components/MsList/MsListGroup.vue";

describe("MsList, MsListItem, MsListGroup", () => {
  it("renders list and items with custom variant and size", () => {
    const wrapper = mount({
      components: { MsList, MsListItem, MsListGroup },
      template: `
        <MsList variant="bordered" size="md">
          <MsListGroup title="Configurações">
            <MsListItem title="Notificações" description="Gerenciar alertas push" interactive />
            <MsListItem title="Segurança" active />
          </MsListGroup>
        </MsList>
      `,
    });

    expect(wrapper.classes()).toContain("ms-list");
    expect(wrapper.classes()).toContain("ms-list--variant-bordered");

    const header = wrapper.find(".ms-list-group__header");
    expect(header.text()).toBe("Configurações");

    const items = wrapper.findAll(".ms-list-item");
    expect(items.length).toBe(2);
    expect(items[0]!.classes()).toContain("ms-list-item--interactive");
    expect(items[0]!.text()).toContain("Notificações");
    expect(items[0]!.text()).toContain("Gerenciar alertas push");
    expect(items[1]!.classes()).toContain("ms-list-item--active");
  });
});
