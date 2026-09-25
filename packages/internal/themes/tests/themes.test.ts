import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  CONTRACT_KEYS,
  DERIVED,
  RATIOS,
  TONE_DERIVED,
  REQUIRED_CONTRACT_KEYS,
  THEMES,
  emitThemesCss,
  manifest,
  resolveThemeMode,
  themeJsonSchema,
  themeToCss,
  validateThemes,
  type ThemeSource,
} from "../src/index.ts";

const css = emitThemesCss();

describe("theme contract", () => {
  it("ships 10 official themes, each complete in both modes", () => {
    expect(THEMES.map((t) => t.name)).toEqual([
      "magic",
      "graphite",
      "shadcn",
      "bootstrap",
      "material",
      "github",
      "linear",
      "vercel",
      "supabase",
      "nord",
    ]);
    expect(validateThemes()).toEqual([]);
  });

  it("keeps the contract small and the theme files free of derived tokens", () => {
    expect(REQUIRED_CONTRACT_KEYS.length).toBeLessThanOrEqual(30);
    for (const theme of THEMES) {
      for (const part of [theme.shared, theme.light, theme.dark]) {
        for (const key of Object.keys(part ?? {})) expect(CONTRACT_KEYS).toContain(key);
      }
      // Extras are signature exceptions only (e.g. Material shadows), never a second palette.
      for (const part of Object.values(theme.extras ?? {})) {
        expect(Object.keys(part).length).toBeLessThanOrEqual(6);
        for (const key of Object.keys(part)) expect(key).not.toMatch(/^color-/);
      }
    }
  });

  it("derives every semantic token from the contract (no literal colors)", () => {
    const derivedBlock = css.slice(css.indexOf(":root,\n[data-ms-theme]"), css.indexOf("}\n"));
    // Palette tokens only: shadows and the modal backdrop are fixed ink by design.
    const paletteLines = derivedBlock
      .split("\n")
      .filter((line) => /--ms-color-/.test(line) && !/backdrop/.test(line));
    expect(paletteLines.length).toBeGreaterThan(80);
    for (const line of paletteLines)
      expect(line).not.toMatch(/#[0-9a-f]{3,6}\b|oklch\(\d|rgba?\(/i);
    expect(DERIVED.length).toBeGreaterThan(100);
  });

  it("emits light, dark and system blocks for every theme", () => {
    for (const theme of THEMES.filter((t) => t.name !== "magic")) {
      expect(css).toContain(`[data-ms-theme="${theme.name}"][data-ms-color-mode="dark"] {`);
      expect(css).toContain(`[data-ms-theme="${theme.name}"][data-ms-color-mode="system"]`);
    }
    expect(css).toMatch(/:root,\n\[data-ms-theme="magic"\],\n\[data-ms-color-mode="light"\]/);
    expect(css).toContain("@media (prefers-color-scheme: dark)");
  });

  it("builds a user theme from a partial definition (inherits magic)", () => {
    const brand: ThemeSource = {
      name: "acme",
      label: "Acme",
      description: "Tenant theme",
      shared: { "radius-field": "10px" },
      light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
    };
    const light = resolveThemeMode("acme", "light", [brand]);
    expect(light.values["color-primary"]).toBe("#7c3aed");
    expect(light.values["color-base-100"]).toBe(
      resolveThemeMode("magic", "light").values["color-base-100"],
    );
    const out = themeToCss(brand);
    expect(out.base).toContain('[data-ms-theme="acme"]');
    expect(out.base).toContain("--ms-color-primary: #7c3aed;");
    expect(out.base).toContain("--ms-radius-field: 10px;");
  });

  it("rejects unknown keys and inheritance cycles", () => {
    const bad: ThemeSource = {
      name: "bad",
      label: "Bad",
      description: "",
      light: { "color-primay": "#000" },
    };
    expect(validateThemes([bad]).join()).toContain('unknown contract key "color-primay"');
    const a: ThemeSource = { name: "a", label: "A", description: "", extends: "b" };
    const b: ThemeSource = { name: "b", label: "B", description: "", extends: "a" };
    expect(() => resolveThemeMode("a", "light", [a, b])).toThrow(/cycle/);
  });

  it("manifest documents the contract and the committed schema is in sync", () => {
    const parsed = JSON.parse(manifest());
    expect(parsed.contract.map((c: { variable: string }) => c.variable)).toContain(
      "--ms-color-primary",
    );
    const committed = readFileSync(new URL("../src/theme.schema.json", import.meta.url), "utf8");
    expect(JSON.parse(committed)).toEqual(themeJsonSchema());
  });

  it("docs/theming.md documents every contract key", () => {
    const docs = readFileSync(new URL("../../../../docs/theming.md", import.meta.url), "utf8");
    for (const key of CONTRACT_KEYS) {
      const base = key.replace(/-content$/, "");
      expect(
        docs.includes(`--ms-${key}`) || docs.includes(`--ms-${base}\` / \`-content`),
        key,
      ).toBe(true);
    }
  });

  it("tinted tokens and the tone engine share one formula (chroma restored)", () => {
    const expr = (name: string) => DERIVED.find(([n]) => n === name)?.[1];
    for (const role of ["primary", "accent", "success", "danger"]) {
      const family = ["info", "success", "warning", "danger"].includes(role)
        ? "feedback"
        : "interactive";
      const subtle = expr(
        family === "feedback" ? `color-feedback-${role}-bg` : `color-interactive-${role}-subtle`,
      );
      const text = expr(`color-${family}-${role}-text`);
      expect(subtle, `${role} subtle`).toMatchObject({ chroma: RATIOS.tintChroma });
      expect(text, `${role} text`).toMatchObject({ chroma: RATIOS.textChroma });
    }
    const tone = Object.fromEntries(TONE_DERIVED);
    expect(tone["tone-subtle"]).toMatchObject({ chroma: RATIOS.tintChroma });
    expect(tone["tone-text"]).toMatchObject({ chroma: RATIOS.textChroma });
  });

  it("every emitted color-mix has explicit percentages (guards generator regressions)", () => {
    const total = css.match(/color-mix\(in oklab, var\(/g)?.length ?? 0;
    const valid =
      css.match(/color-mix\(in oklab, var\([^)]*\) (?:\d+%|var\(--ms-[\w-]+, \d+%\)), /g)?.length ??
      0;
    expect(total).toBeGreaterThan(30);
    expect(valid).toBe(total);
    expect(css).toContain("var(--ms-tone-text-mix, 40%)");
  });
});
