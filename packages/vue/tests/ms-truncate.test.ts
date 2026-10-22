import { afterEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
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

  afterEach(() => vi.restoreAllMocks());

  it("renders no toggle when the text fits", async () => {
    const wrapper = mount(MsTruncate, { props: { text: "Short", expandable: true, lines: 2 } });
    await nextTick();
    expect(wrapper.find("button.ms-truncate__toggle").exists()).toBe(false);
  });

  it("handles expand and collapse toggle button", async () => {
    // jsdom has no layout: simulate overflowing content.
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(40);
    const wrapper = mount(MsTruncate, {
      props: { text: longText, expandable: true, lines: 2 },
    });
    await nextTick();
    const btn = wrapper.find("button.ms-truncate__toggle");
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toBe("Show more");
    expect(btn.attributes("aria-expanded")).toBe("false");
    expect(btn.attributes("aria-controls")).toBe(
      wrapper.find(".ms-truncate__content").attributes("id"),
    );

    await btn.trigger("click");
    expect(wrapper.emitted("update:expanded")?.[0]).toEqual([true]);
    expect(wrapper.emitted("toggle")?.[0]).toEqual([true]);
    expect(btn.text()).toBe("Show less");
    expect(btn.attributes("aria-expanded")).toBe("true");
  });
});
