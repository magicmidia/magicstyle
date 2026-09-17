import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsSplitPane } from "../src/index.ts";

describe("MsSplitPane component", () => {
  it("renders two panes and a gutter", () => {
    const wrapper = mount(MsSplitPane, {
      props: { split: 40 },
      slots: {
        first: "Left Pane",
        second: "Right Pane",
      },
    });
    expect(wrapper.classes()).toContain("ms-split-pane--horizontal");
    expect(wrapper.find(".ms-split-pane__gutter").exists()).toBe(true);
    expect(wrapper.text()).toContain("Left Pane");
    expect(wrapper.text()).toContain("Right Pane");
  });

  it("supports vertical orientation", () => {
    const wrapper = mount(MsSplitPane, {
      props: { direction: "vertical" },
    });
    expect(wrapper.classes()).toContain("ms-split-pane--vertical");
  });
});
