import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MsProgress from "../src/components/MsProgress/MsProgress.vue";

describe("MsProgress (doc 05 §8)", () => {
  it("renders determinate progress with accurate percentage and ARIA attributes", () => {
    const wrapper = mount(MsProgress, {
      props: {
        modelValue: 40,
        min: 0,
        max: 100,
        label: "Progresso do Upload",
        showValue: true,
      },
    });

    const progressbar = wrapper.find('[role="progressbar"]');
    expect(progressbar.exists()).toBe(true);
    expect(progressbar.attributes("aria-valuenow")).toBe("40");
    expect(progressbar.attributes("aria-valuemin")).toBe("0");
    expect(progressbar.attributes("aria-valuemax")).toBe("100");
    expect(progressbar.attributes("aria-valuetext")).toBe("40%");
    expect(progressbar.attributes("aria-label")).toBe("Progresso do Upload");

    const bar = wrapper.find(".ms-progress__bar");
    expect(bar.attributes("style")).toContain("width: 40%;");

    const label = wrapper.find(".ms-progress__label");
    expect(label.text()).toBe("Progresso do Upload");

    const value = wrapper.find(".ms-progress__value");
    expect(value.text()).toBe("40%");
  });

  it("handles indeterminate mode correctly", () => {
    const wrapper = mount(MsProgress, {
      props: {
        indeterminate: true,
      },
    });

    const progressbar = wrapper.find('[role="progressbar"]');
    expect(progressbar.attributes("aria-valuenow")).toBeUndefined();
    expect(progressbar.classes()).toContain("ms-progress__track--indeterminate");
  });

  it("clamps percentage within min and max", () => {
    const wrapperOver = mount(MsProgress, {
      props: {
        modelValue: 150,
        min: 0,
        max: 100,
      },
    });
    expect(wrapperOver.find(".ms-progress__bar").attributes("style")).toContain("width: 100%;");

    const wrapperUnder = mount(MsProgress, {
      props: {
        modelValue: -20,
        min: 0,
        max: 100,
      },
    });
    expect(wrapperUnder.find(".ms-progress__bar").attributes("style")).toContain("width: 0%;");
  });

  it("applies size, tone, striped, and animated classes", () => {
    const wrapper = mount(MsProgress, {
      props: {
        modelValue: 75,
        size: "lg",
        tone: "success",
        striped: true,
        animated: true,
      },
    });

    expect(wrapper.classes()).toContain("ms-progress--lg");
    expect(wrapper.classes()).toContain("ms-progress--success");

    const track = wrapper.find(".ms-progress__track");
    expect(track.classes()).toContain("ms-progress__track--striped");
    expect(track.classes()).toContain("ms-progress__track--animated");
  });

  it("supports shape, gradient, and inlineValue", () => {
    const wrapper = mount(MsProgress, {
      props: {
        modelValue: 50,
        shape: "square",
        gradient: true,
        inlineValue: true,
        size: "xl",
      },
    });

    expect(wrapper.classes()).toContain("ms-progress--shape-square");
    expect(wrapper.classes()).toContain("ms-progress--gradient");
    const inlineText = wrapper.find(".ms-progress__bar-text");
    expect(inlineText.exists()).toBe(true);
    expect(inlineText.text()).toBe("50%");
  });
});
