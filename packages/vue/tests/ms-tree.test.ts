import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsTree from "../src/components/MsTree/MsTree.vue";
import type { MsTreeNodeData } from "../src/components/MsTree/types.ts";

describe("MsTree", () => {
  const treeData: MsTreeNodeData[] = [
    {
      key: "src",
      label: "src",
      children: [
        { key: "components", label: "components" },
        { key: "styles", label: "styles" },
      ],
    },
    {
      key: "package.json",
      label: "package.json",
    },
  ];

  it("renders hierarchical nodes and handles expand/select", async () => {
    const wrapper = mount(MsTree, {
      props: {
        items: treeData,
        expandedKeys: ["src"],
        selectedKey: "components",
      },
    });

    const nodes = wrapper.findAll(".ms-tree-node");
    expect(nodes.length).toBe(4); // src, components, styles, package.json

    expect(nodes[0]!.classes()).toContain("ms-tree-node--expanded");
    expect(nodes[1]!.classes()).toContain("ms-tree-node--selected");

    // Click on styles
    const stylesRow = nodes[2]!.find(".ms-tree-node__row");
    await stylesRow.trigger("click");

    expect(wrapper.emitted("update:selectedKey")?.[0]).toEqual(["styles"]);
    expect(wrapper.emitted("select")).toBeTruthy();
  });
});
