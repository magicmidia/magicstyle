import { describe, expect, it } from "vitest";
import { emitCss } from "../src/lib/css-vars.ts";
import { resolveAliases } from "../src/lib/resolve.ts";
import { tokens, cssVarName } from "../src/index.ts";
import { tokenTree } from "../src/sources.ts";

describe("compiler outputs (doc 06 §8)", () => {
  it("resolves the canonical tree without diagnostics", () => {
    const { diagnostics } = resolveAliases(tokenTree);
    expect(diagnostics).toEqual([]);
    expect(tokens.size).toBeGreaterThan(100);
  });

  it("emits CSS vars with resolved values only", () => {
    const css = emitCss(tokens);
    expect(css).toContain("--ms-color-surface-default: oklch(0.975");
    expect(css).toContain("--ms-space-1: 4px;");
    expect(css).toContain("--ms-space-4: 16px;");
    expect(css).toContain("--ms-layout-sidebar-width: 272px;");
    expect(css).not.toMatch(/"--?\{/);
    expect(css).not.toContain("{color.");
    expect(css).toContain(":root {");
  });

  it("renders structured shadows as CSS box-shadow lists", () => {
    const css = emitCss(tokens);
    const line = css.split("\n").find((l) => l.includes("--ms-elevation-1:"));
    expect(line).toBeDefined();
    expect(line).toMatch(/^ {2}--ms-elevation-1: \d+px \d+px \d+px [-\d]+px oklch\(.+\), \d+px/);
  });

  it("excludes composite role entries from :root vars", () => {
    const css = emitCss(tokens);
    expect(css).not.toContain("--ms-role-body:");
    expect(cssVarName("role.body")).toBe("--ms-role-body");
  });

  it("keeps brand identity on the approved palette hues", () => {
    expect(tokens.get("color.interactive.primary")?.$value).toContain("252)");
    expect(tokens.get("color.interactive.accent")?.$value).toContain("280)");
    expect(tokens.get("color.interactive.secondary")?.$value).toContain("34)");
    expect(tokens.get("color.feedback.success-solid")?.$value).toContain("168)");
  });
});
