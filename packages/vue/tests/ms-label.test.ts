import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsLabel } from "../src/index.ts";

describe("MsLabel component", () => {
  it("renders label with text and for attribute", () => {
    const wrapper = mount(MsLabel, {
      props: { for: "user-email" },
      slots: { default: "Login email" },
    });
    const label = wrapper.find("label.ms-label");
    expect(label.exists()).toBe(true);
    expect(label.text()).toContain("Login email");
    expect(label.attributes("for")).toBe("user-email");
  });

  it("shows required mark when required is true", () => {
    const wrapper = mount(MsLabel, {
      props: { required: true },
      slots: { default: "Full name" },
    });
    const req = wrapper.find(".ms-label__required");
    expect(req.exists()).toBe(true);
    expect(req.text()).toBe("*");
    expect(wrapper.attributes("data-required")).toBeDefined();
  });

  it("shows optional text when optional is true", () => {
    const wrapper = mount(MsLabel, {
      props: { optional: true },
      slots: { default: "Secondary phone" },
    });
    const opt = wrapper.find(".ms-label__optional");
    expect(opt.exists()).toBe(true);
    expect(opt.text()).toBe("(optional)");
  });

  it("renders tooltip trigger when tooltip prop is provided", () => {
    const wrapper = mount(MsLabel, {
      props: { tooltip: "Filling instructions" },
      slots: { default: "CPF" },
    });
    const tt = wrapper.find(".ms-label__tooltip-trigger");
    expect(tt.exists()).toBe(true);
    expect(tt.attributes("title")).toBe("Filling instructions");
  });
});
