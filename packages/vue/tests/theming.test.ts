import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { h } from "vue";
import {
  MS_THEME_CONTRACT,
  MsProvider,
  MsThemeScope,
  checkMsThemeContrast,
  defineMsTheme,
  msThemeToCss,
} from "../src/index.ts";

describe("theming API", () => {
  it("exposes the theme contract", () => {
    const keys = MS_THEME_CONTRACT.map((entry) => entry.key);
    expect(keys).toContain("color-primary");
    expect(keys).toContain("radius-field");
    expect(MS_THEME_CONTRACT.filter((e) => e.required).length).toBeLessThanOrEqual(30);
  });

  it("builds CSS for a partial theme that inherits from an official one", () => {
    const acme = defineMsTheme({
      name: "acme",
      extends: "shadcn",
      shared: { "radius-field": "10px" },
      light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
    });
    const css = msThemeToCss(acme);
    expect(css).toContain('[data-ms-theme="acme"]');
    expect(css).toContain("--ms-color-primary: #7c3aed;");
    expect(css).toContain("--ms-radius-field: 10px;");
    expect(css).toContain('[data-ms-theme="acme"][data-ms-color-mode="dark"]');
    expect(css).toContain("@media (prefers-color-scheme: dark)");
    // Inherited from shadcn (not magic).
    expect(css).toContain("--ms-color-base-100: #ffffff;");
  });

  it("reports contrast problems before a theme ships", () => {
    const unreadable = defineMsTheme({
      name: "low",
      light: { "color-primary": "#ffff00", "color-primary-content": "#ffffff" },
    });
    const issues = checkMsThemeContrast(unreadable);
    expect(issues.some((i) => i.mode === "light" && i.fg === "color-primary-content")).toBe(true);
    expect(checkMsThemeContrast(defineMsTheme({ name: "ok", extends: "magic" }))).toEqual([]);
  });
});

describe("runtime overrides", () => {
  it("MsThemeScope applies contract overrides as CSS variables", () => {
    const wrapper = mount(MsThemeScope, {
      props: { theme: "magic", overrides: { "color-primary": "#7c3aed", "radius-field": "12px" } },
      slots: { default: () => h("span", "x") },
    });
    const style = (wrapper.element as HTMLElement).style;
    expect(style.getPropertyValue("--ms-color-primary")).toBe("#7c3aed");
    expect(style.getPropertyValue("--ms-radius-field")).toBe("12px");
  });

  it("MsProvider target=root sets and removes overrides on <html>", async () => {
    const wrapper = mount(MsProvider, {
      props: { target: "root", overrides: { "color-primary": "#0ea5e9" } },
      slots: { default: () => "x" },
    });
    const root = document.documentElement.style;
    expect(root.getPropertyValue("--ms-color-primary")).toBe("#0ea5e9");
    await wrapper.setProps({ overrides: {} });
    expect(root.getPropertyValue("--ms-color-primary")).toBe("");
    await wrapper.setProps({ overrides: { "color-accent": "#f97316" } });
    wrapper.unmount();
    expect(root.getPropertyValue("--ms-color-accent")).toBe("");
  });
});
