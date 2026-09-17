import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCanvas } from "../src/index.ts";

describe("MsCanvas component", () => {
  it("renders canvas with pattern and content", () => {
    const wrapper = mount(MsCanvas, {
      props: { pattern: "grid", size: 24 },
      slots: { default: "Workspace Playground" },
    });
    expect(wrapper.classes()).toContain("ms-canvas--grid");
    expect(wrapper.text()).toContain("Workspace Playground");
    expect(wrapper.attributes("data-pattern")).toBe("grid");
  });

  it("supports interactive class", () => {
    const wrapper = mount(MsCanvas, {
      props: { interactive: true },
    });
    expect(wrapper.classes()).toContain("ms-canvas--interactive");
  });

  it("supports expanded geometric patterns", () => {
    const wrapper = mount(MsCanvas, {
      props: { pattern: "isometric" },
    });
    expect(wrapper.classes()).toContain("ms-canvas--isometric");
    expect(wrapper.attributes("data-pattern")).toBe("isometric");
  });
});
