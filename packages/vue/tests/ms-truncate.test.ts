import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsTruncate } from "../src/index.ts";

describe("MsTruncate component", () => {
  const longText =
    "This is a long text that needs to be truncated gracefully by the Magic-Style library.";

  it("renders single-line truncation with tooltip title by default", () => {
    const wrapper = mount(MsTruncate, {
      props: { text: longText },
    });
    expect(wrapper.classes()).toContain("ms-truncate--single");
    expect(wrapper.attributes("title")).toBe(longText);
    expect(wrapper.text()).toBe(longText);
  });

  it("supports multiline clamp with lines prop", () => {
    const wrapper = mount(MsTruncate, {
      props: { text: longText, lines: 3 },
    });
    expect(wrapper.classes()).toContain("ms-truncate--multiline");
    expect(wrapper.attributes("data-lines")).toBe("3");
  });

  it("supports middle truncation mode", () => {
    const wrapper = mount(MsTruncate, {
      props: { text: "0x1234567890abcdef1234567890abcdef", position: "middle", middleChars: 6 },
    });
    expect(wrapper.classes()).toContain("ms-truncate--middle");
    expect(wrapper.find(".ms-truncate__start").exists()).toBe(true);
    expect(wrapper.find(".ms-truncate__end").exists()).toBe(true);
    expect(wrapper.find(".ms-truncate__end").text()).toBe("abcdef");
  });

  it("handles expand and collapse toggle button", async () => {
    const wrapper = mount(MsTruncate, {
      props: { text: longText, expandable: true, lines: 2 },
    });
    const btn = wrapper.find("button.ms-truncate__toggle");
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toBe("Show more");

    await btn.trigger("click");
    expect(wrapper.emitted("update:expanded")?.[0]).toEqual([true]);
    expect(wrapper.emitted("toggle")?.[0]).toEqual([true]);
    expect(btn.text()).toBe("Show less");
  });
});
