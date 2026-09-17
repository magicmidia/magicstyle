import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsBentoGrid, MsBentoItem, MsMasonryGrid } from "../src/index.ts";

describe("Grid components", () => {
  it("renders BentoGrid and BentoItem with column and row spans", () => {
    const wrapper = mount(MsBentoGrid, {
      props: { cols: 4 },
      slots: {
        default:
          '<div class="ms-bento-item ms-bento-item--col-2 ms-bento-item--row-2">Card 1</div>',
      },
    });
    expect(wrapper.classes()).toContain("ms-bento-grid");
    expect(wrapper.text()).toContain("Card 1");
  });

  it("renders BentoItem with computed props", () => {
    const wrapper = mount(MsBentoItem, {
      props: { colSpan: 3, rowSpan: 2, variant: "elevated", interactive: true },
      slots: { default: "Feature Hero" },
    });
    expect(wrapper.classes()).toContain("ms-bento-item--col-3");
    expect(wrapper.classes()).toContain("ms-bento-item--row-2");
    expect(wrapper.classes()).toContain("ms-bento-item--elevated");
    expect(wrapper.classes()).toContain("ms-bento-item--interactive");
  });

  it("supports dense bento grid and custom gap", () => {
    const wrapper = mount(MsBentoGrid, {
      props: { cols: 4, dense: true, gap: "lg" },
    });
    expect(wrapper.classes()).toContain("ms-bento-grid--dense");
  });

  it("renders MasonryGrid distributing items across columns", () => {
    const items = ["A", "B", "C", "D", "E", "F"];
    const wrapper = mount(MsMasonryGrid, {
      props: { cols: 3, items, gap: "sm" },
    });
    const cols = wrapper.findAll(".ms-masonry-grid__column");
    expect(cols.length).toBe(3);
  });
});
