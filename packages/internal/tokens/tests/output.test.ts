import { describe, expect, it } from "vitest";
import { emitCss } from "../src/lib/css-vars.ts";
import { resolveAliases } from "../src/lib/resolve.ts";
import { tokens, cssVarName, cssVarValue } from "../src/index.ts";
import { tokenTree } from "../src/sources.ts";

describe("compiler outputs (doc 06 §8)", () => {
  it("resolves the canonical tree without diagnostics", () => {
    const { diagnostics } = resolveAliases(tokenTree);
    expect(diagnostics).toEqual([]);
    expect(tokens.size).toBeGreaterThan(100);
  });

  it("emits CSS vars with resolved values only", () => {
    const css = emitCss(tokens);
    expect(css).toContain("--ms-color-primary-500: oklch(0.612 0.157 252)");
    expect(css).toContain("--ms-space-1: 4px;");
    expect(css).toContain("--ms-space-4: 16px;");
    expect(css).toContain("--ms-layout-sidebar-width: 272px;");
    expect(css).not.toMatch(/"--?\{/);
    expect(css).not.toContain("{color.");
    expect(css).toContain(":root {");
  });

  it("renders structured shadows as CSS box-shadow lists", () => {
    const line = cssVarValue({
      $type: "shadow",
      $value: [
        {
          offsetX: "0px",
          offsetY: "1px",
          blur: "2px",
          spread: "0px",
          color: "oklch(0.2 0 0 / 0.1)",
        },
        {
          offsetX: "0px",
          offsetY: "4px",
          blur: "8px",
          spread: "-2px",
          color: "oklch(0.2 0 0 / 0.2)",
        },
      ],
    });
    expect(line).toBe(
      "0px 1px 2px 0px oklch(0.2 0 0 / 0.1), 0px 4px 8px -2px oklch(0.2 0 0 / 0.2)",
    );
  });

  it("excludes composite role entries from :root vars", () => {
    const css = emitCss(tokens);
    expect(css).not.toContain("--ms-role-body:");
    expect(cssVarName("role.body")).toBe("--ms-role-body");
  });

  it("keeps brand identity on the approved palette hues", () => {
    expect(tokens.get("color.primary.500")?.$value).toContain("252)");
    expect(tokens.get("color.accent.500")?.$value).toContain("280)");
    expect(tokens.get("color.secondary.500")?.$value).toContain("034)");
    expect(tokens.get("color.success.500")?.$value).toContain("168)");
  });
});
