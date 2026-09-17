import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsMarquee } from "../src/index.ts";

describe("MsMarquee component", () => {
  it("renders dual tracks for seamless loop", () => {
    const wrapper = mount(MsMarquee, {
      slots: { default: "<span>Breaking News</span>" },
    });
    expect(wrapper.classes()).toContain("ms-marquee");
    const tracks = wrapper.findAll(".ms-marquee__track");
    expect(tracks.length).toBe(2);
    expect(tracks[0]?.text()).toContain("Breaking News");
  });

  it("supports reverse and fade props", () => {
    const wrapper = mount(MsMarquee, {
      props: { reverse: true, fade: true },
    });
    expect(wrapper.classes()).toContain("ms-marquee--reverse");
    expect(wrapper.classes()).toContain("ms-marquee--fade");
  });
});
