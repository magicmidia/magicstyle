import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCode } from "../src/index.ts";

describe("MsCode component", () => {
  it("renders inline code element with default props", () => {
    const wrapper = mount(MsCode, {
      slots: { default: "const x = 42;" },
    });
    const code = wrapper.find("code.ms-code");
    expect(code.exists()).toBe(true);
    expect(code.text()).toBe("const x = 42;");
    expect(code.attributes("data-variant")).toBe("subtle");
    expect(code.attributes("data-tone")).toBe("default");
    expect(code.attributes("data-size")).toBe("md");
  });

  it("applies tones and variants correctly", () => {
    const wrapper = mount(MsCode, {
      props: { tone: "danger", variant: "solid", size: "lg" },
      slots: { default: "Error: 500" },
    });
    const code = wrapper.find("code");
    expect(code.classes()).toContain("ms-code--danger");
    expect(code.classes()).toContain("ms-code--solid");
    expect(code.classes()).toContain("ms-code--lg");
    expect(code.attributes("data-tone")).toBe("danger");
    expect(code.attributes("data-variant")).toBe("solid");
  });

  it("renders copy button when copyable is true", async () => {
    const wrapper = mount(MsCode, {
      props: { copyable: true },
      slots: { default: "pnpm install" },
    });
    const btn = wrapper.find("button.ms-code__copy-btn");
    expect(btn.exists()).toBe(true);
  });
});
