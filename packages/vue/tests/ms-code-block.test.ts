import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { MsCodeBlock } from "../src/index.ts";

describe("MsCodeBlock component", () => {
  const snippet = `function hello() {\n  return "world";\n}`;

  it("renders code block with pre and code tags", () => {
    const wrapper = mount(MsCodeBlock, {
      props: { code: snippet },
    });
    expect(wrapper.find(".ms-code-block").exists()).toBe(true);
    expect(wrapper.find("pre").text()).toContain('return "world";');
  });

  it("displays header when filename or language is provided", () => {
    const wrapper = mount(MsCodeBlock, {
      props: { code: snippet, filename: "index.ts", language: "typescript" },
    });
    expect(wrapper.find(".ms-code-block__header").exists()).toBe(true);
    expect(wrapper.find(".ms-code-block__filename").text()).toContain("index.ts");
    expect(wrapper.find(".ms-code-block__lang").text()).toBe("typescript");
  });

  it("renders line numbers by default", () => {
    const wrapper = mount(MsCodeBlock, {
      props: { code: snippet },
    });
    const lines = wrapper.find(".ms-code-block__lines");
    expect(lines.exists()).toBe(true);
    expect(lines.findAll("span").length).toBe(3);
  });

  it("hides line numbers when showLineNumbers is false", () => {
    const wrapper = mount(MsCodeBlock, {
      props: { code: snippet, showLineNumbers: false },
    });
    expect(wrapper.find(".ms-code-block__lines").exists()).toBe(false);
  });

  it("supports collapsible mode with toggle button", async () => {
    const wrapper = mount(MsCodeBlock, {
      props: { code: snippet, collapsible: true, defaultCollapsed: true },
    });
    expect(wrapper.classes()).toContain("ms-code-block--collapsed");
    const toggleBtn = wrapper.find("button.ms-code-block__collapse-btn");
    expect(toggleBtn.exists()).toBe(true);
    expect(toggleBtn.text()).toContain("Mostrar mais");

    await toggleBtn.trigger("click");
    expect(wrapper.emitted("toggle-collapse")).toBeTruthy();
    expect(wrapper.classes()).not.toContain("ms-code-block--collapsed");
  });

  it("safely escapes HTML tags and quotes to prevent script execution", () => {
    const rawCode = '<script>alert("xss")</script>';
    const wrapper = mount(MsCodeBlock, {
      props: { code: rawCode },
    });
    const codeTag = wrapper.find("code");
    // Inner HTML should contain escaped entities, never raw unescaped script tag
    expect(codeTag.html()).not.toContain("<script>");
    expect(codeTag.html()).toContain("&lt;");
  });
});
