import { afterEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import {
  MsAppShellFooter,
  MsAvatar,
  MsBadge,
  MsChatBubble,
  MsChoicebox,
  MsEmptyState,
  MsFormWizard,
  MsProvider,
  MsTextarea,
  MsTimeline,
  MsTimelineItem,
} from "../src/index.ts";

afterEach(() => vi.restoreAllMocks());

describe("props that used to be documented as not applied", () => {
  it("MsAppShellFooter bordered toggles the top border hook (default on)", () => {
    const bordered = mount(MsAppShellFooter, { slots: { default: () => "©" } });
    expect(bordered.attributes("data-bordered")).toBe("");
    const plain = mount(MsAppShellFooter, { props: { bordered: false } });
    expect(plain.attributes("data-bordered")).toBeUndefined();
  });

  it("MsTextarea maxRows caps autoGrow height and lets the rest scroll", async () => {
    vi.spyOn(window, "getComputedStyle").mockReturnValue({
      fontSize: "16px",
      lineHeight: "20px",
      paddingTop: "4px",
      paddingBottom: "4px",
    } as CSSStyleDeclaration);
    const scroll = vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(300);
    const wrapper = mount(MsTextarea, {
      props: { autoGrow: true, maxRows: 4, modelValue: "" },
    });
    const textarea = wrapper.find("textarea");
    await textarea.setValue("a\nb\nc\nd\ne\nf\ng");
    // 4 rows × 20px + 8px padding
    expect((textarea.element as HTMLTextAreaElement).style.height).toBe("88px");
    expect((textarea.element as HTMLTextAreaElement).style.overflowY).toBe("auto");

    scroll.mockReturnValue(48);
    await textarea.setValue("a");
    await nextTick();
    expect((textarea.element as HTMLTextAreaElement).style.height).toBe("48px");
    expect((textarea.element as HTMLTextAreaElement).style.overflowY).toBe("hidden");
  });

  it("MsFormWizard renders a step icon until the step is completed", () => {
    const wrapper = mount(MsFormWizard, {
      props: {
        modelValue: 1,
        steps: [
          { id: "a", title: "Account", icon: "👤" },
          { id: "b", title: "Billing", icon: "💳" },
          { id: "c", title: "Done" },
        ],
      },
    });
    const badges = wrapper.findAll(".ms-form-wizard__step-badge");
    expect(badges[0]!.find("svg").exists()).toBe(true);
    expect(badges[1]!.text()).toBe("💳");
    expect(badges[2]!.text()).toBe("3");
  });

  it("MsChoicebox name submits the selection through hidden inputs", () => {
    const items = [
      { value: "a", title: "A" },
      { value: "b", title: "B" },
    ];
    const radio = mount(MsChoicebox, { props: { items, name: "plan", modelValue: "b" } });
    const radioInputs = radio.findAll("input[type='hidden']");
    expect(radioInputs.map((i) => [i.attributes("name"), i.attributes("value")])).toEqual([
      ["plan", "b"],
    ]);

    const checkbox = mount(MsChoicebox, {
      props: { items, name: "extras", type: "checkbox", modelValue: ["a", "b"] },
    });
    expect(checkbox.findAll("input[type='hidden']").map((i) => i.attributes("value"))).toEqual([
      "a",
      "b",
    ]);

    const unnamed = mount(MsChoicebox, { props: { items, modelValue: "a" } });
    expect(unnamed.find("input[type='hidden']").exists()).toBe(false);
  });
});

describe("props exposing existing CSS", () => {
  it("MsChatBubble typing renders a labelled status with three dots and no content", () => {
    const wrapper = mount(MsChatBubble, {
      props: { typing: true, tone: "accent" },
      slots: { default: () => "hidden message" },
    });
    const bubble = wrapper.find(".ms-chat-bubble");
    expect(bubble.classes()).toContain("ms-chat-bubble--typing");
    expect(bubble.classes()).toContain("ms-chat-bubble--tone-accent");
    expect(bubble.attributes("role")).toBe("status");
    expect(bubble.findAll("span[aria-hidden='true']")).toHaveLength(3);
    expect(bubble.find(".ms-chat-bubble__typing-label").text()).toBe("Typing…");
    expect(wrapper.text()).not.toContain("hidden message");

    const pt = mount(MsProvider, {
      props: { locale: "pt-BR" },
      slots: { default: () => h(MsChatBubble, { typing: true }) },
    });
    expect(pt.find(".ms-chat-bubble__typing-label").text()).toBe("Digitando…");
  });

  it("MsTimelineItem solid and active", () => {
    const wrapper = mount(MsTimeline, {
      slots: {
        default: () => [
          h(MsTimelineItem, { title: "Done", solid: true }),
          h(MsTimelineItem, { title: "Now", active: true }),
        ],
      },
    });
    const items = wrapper.findAll(".ms-timeline-item");
    expect(items[0]!.classes()).toContain("ms-timeline-item--solid");
    expect(items[0]!.attributes("aria-current")).toBeUndefined();
    expect(items[1]!.classes()).toContain("ms-timeline-item--active");
    expect(items[1]!.attributes("aria-current")).toBe("step");
  });

  it("MsEmptyState ring and extra icon tones", () => {
    const wrapper = mount(MsEmptyState, {
      props: { title: "Empty", iconTone: "info", ring: true },
    });
    const icon = wrapper.find(".ms-empty-state__icon");
    expect(icon.classes()).toContain("ms-empty-state__icon--info");
    expect(icon.classes()).toContain("ms-empty-state__icon--ring");
  });

  it("MsAvatar and MsBadge accept explicit undefined", () => {
    const avatar = mount(MsAvatar, { props: { src: undefined, name: "Ada Lovelace" } });
    expect(avatar.find(".ms-avatar-fallback").exists()).toBe(true);
    const badge = mount(MsBadge, { props: { tone: undefined, count: undefined } });
    expect(badge.attributes("data-tone")).toBe("primary");
  });
});
