import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsEmojiPicker } from "../src/index.ts";

describe("MsEmojiPicker component", () => {
  it("renders trigger and opens emoji list on click", async () => {
    const wrapper = mount(MsEmojiPicker);
    const trigger = wrapper.find("button.ms-emoji-picker__trigger");
    expect(trigger.exists()).toBe(true);

    await trigger.trigger("click");
    const dropdown = wrapper.find(".ms-emoji-picker__dropdown");
    expect(dropdown.exists()).toBe(true);
    const emojis = wrapper.findAll(".ms-emoji-picker__item");
    expect(emojis.length).toBeGreaterThan(10);
  });

  it("selects emoji and emits event", async () => {
    const wrapper = mount(MsEmojiPicker);
    await wrapper.find("button.ms-emoji-picker__trigger").trigger("click");

    const emojiBtn = wrapper.find(".ms-emoji-picker__item");
    await emojiBtn.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("select")).toBeTruthy();
  });
});
