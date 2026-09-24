import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsAspectRatio from "../src/components/MsAspectRatio/MsAspectRatio.vue";

describe("MsAspectRatio", () => {
  it("renders with default 16/9 aspect ratio", () => {
    const wrapper = mount(MsAspectRatio, {
      slots: { default: '<img src="test.jpg" alt="test" />' },
    });
    expect(wrapper.classes()).toContain("ms-aspect-ratio");
    expect(wrapper.attributes("style")).toContain("--ms-aspect-ratio: 16 / 9");
  });

  it("handles numeric ratio", () => {
    const wrapper = mount(MsAspectRatio, {
      props: { ratio: 1 },
      slots: { default: "<div>Content</div>" },
    });
    expect(wrapper.attributes("style")).toContain("--ms-aspect-ratio: 1");
  });

  it("handles string fraction ratio", () => {
    const wrapper = mount(MsAspectRatio, {
      props: { ratio: "4/3" },
      slots: { default: "<div>Content</div>" },
    });
    expect(wrapper.attributes("style")).toContain("--ms-aspect-ratio: 4 / 3");
  });
});
