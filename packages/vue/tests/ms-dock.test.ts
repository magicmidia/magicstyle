import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsDock from "../src/components/MsDock/MsDock.vue";
import MsDockItem from "../src/components/MsDock/MsDockItem.vue";

describe("MsDock & MsDockItem", () => {
  it("renders dock bar with positioned container and interactive items", () => {
    const wrapper = mount({
      components: { MsDock, MsDockItem },
      template: `
        <MsDock position="bottom" size="md">
          <MsDockItem label="Home" active>🏠</MsDockItem>
          <MsDockItem label="Messages">💬</MsDockItem>
        </MsDock>
      `,
    });

    const container = wrapper.find(".ms-dock-container");
    expect(container.classes()).toContain("ms-dock-container--bottom");

    const items = wrapper.findAll(".ms-dock-item");
    expect(items.length).toBe(2);
    expect(items[0]!.find(".ms-dock-item__dot").exists()).toBe(true);
    expect(items[1]!.find(".ms-dock-item__dot").exists()).toBe(false);
  });
});
