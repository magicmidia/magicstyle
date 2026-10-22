import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MsChatBubble from "../src/components/MsChatBubble/MsChatBubble.vue";

describe("MsChatBubble", () => {
  it("renders bubble with start placement, sender name and timestamp", () => {
    const wrapper = mount(MsChatBubble, {
      props: {
        placement: "start",
        name: "AI assistant",
        timestamp: "14:32",
      },
      slots: {
        default: () => "Hi! How can I help you today?",
      },
    });

    expect(wrapper.classes()).toContain("ms-chat-bubble-wrapper--start");
    expect(wrapper.text()).toContain("AI assistant");
    expect(wrapper.text()).toContain("14:32");
    expect(wrapper.text()).toContain("Hi! How can I help you today?");
  });

  it("supports end placement, tone, and read status", () => {
    const wrapper = mount(MsChatBubble, {
      props: {
        placement: "end",
        tone: "primary",
        status: "read",
      },
      slots: {
        default: () => "Message sent by the user",
      },
    });

    expect(wrapper.classes()).toContain("ms-chat-bubble-wrapper--end");
    expect(wrapper.find(".ms-chat-bubble").classes()).toContain("ms-chat-bubble--tone-primary");
    expect(wrapper.find(".ms-chat-bubble-status").exists()).toBe(true);
  });
});
