import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsBlockquote } from "../src/index.ts";

describe("MsBlockquote component", () => {
  it("renders blockquote with content and defaults", () => {
    const wrapper = mount(MsBlockquote, {
      slots: { default: "Design is not just what it looks like and feels like." },
    });
    const bq = wrapper.find("blockquote.ms-blockquote");
    expect(bq.exists()).toBe(true);
    expect(bq.text()).toContain("Design is not just what it looks like");
    expect(bq.attributes("data-variant")).toBe("bordered");
    expect(bq.attributes("data-size")).toBe("md");
  });

  it("renders author and citation in footer", () => {
    const wrapper = mount(MsBlockquote, {
      props: {
        author: "Steve Jobs",
        authorRole: "Apple Inc.",
        cite: "https://apple.com",
      },
      slots: { default: "Simplicity is the ultimate sophistication." },
    });
    const footer = wrapper.find("footer.ms-blockquote__footer");
    expect(footer.exists()).toBe(true);
    expect(wrapper.find(".ms-blockquote__author").text()).toBe("Steve Jobs");
    expect(wrapper.find(".ms-blockquote__role").text()).toBe("Apple Inc.");
    expect(wrapper.find(".ms-blockquote__cite").text()).toBe("https://apple.com");
  });
});
