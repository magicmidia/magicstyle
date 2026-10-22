import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsScrollSpy from "../src/components/MsScrollSpy/MsScrollSpy.vue";

describe("MsScrollSpy", () => {
  it("renders navigation links for observed sections", () => {
    const items = [
      { id: "intro", label: "Introduction" },
      { id: "installation", label: "Installation" },
      { id: "usage", label: "Usage" },
    ];

    const wrapper = mount(MsScrollSpy, {
      props: {
        items,
      },
    });

    expect(wrapper.classes()).toContain("ms-scroll-spy");
    const links = wrapper.findAll(".ms-scroll-spy__link");
    expect(links.length).toBe(3);
    expect(links[0]!.text()).toBe("Introduction");
    expect(links[1]!.text()).toBe("Installation");
    expect(links[2]!.text()).toBe("Usage");
  });
});
