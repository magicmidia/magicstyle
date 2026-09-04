import { describe, expect, it } from "vitest";
import {
  baseline,
  deltaAgainst,
  emitThemesCss,
  manifest,
  resolveTheme,
  THEMES,
} from "../src/index.ts";

describe("theming system (doc 07)", () => {
  it("resolves all 4 theme x mode combos without diagnostics", () => {
    for (const theme of ["magic", "graphite"] as const) {
      for (const mode of ["light", "dark"] as const) {
        const tokens = resolveTheme(theme, mode);
        expect(tokens.size).toBeGreaterThan(100);
      }
    }
  });

  it("keeps theme != color mode (§1): graphite changes accent in both modes", () => {
    const base = baseline();
    for (const mode of ["light", "dark"] as const) {
      const graphite = resolveTheme("graphite", mode);
      const baseVal = base.get("color.accent.500")?.$value;
      const graphVal = graphite.get("color.accent.500")?.$value;
      expect(baseVal).not.toBe(graphVal);
      expect(String(baseVal)).toContain("280)");
      expect(String(graphVal)).toContain("280)");
    }
  });

  it("designs dark independently, not as inversion (§ dark)", () => {
    const dark = resolveTheme("magic", "dark");
    const light = baseline();
    // raised surface must be LIGHTER than default surface in dark mode
    const luma = (v: unknown) => Number(/oklch\((\d+\.\d+)/.exec(String(v))?.[1]);
    expect(luma(dark.get("color.surface.raised")?.$value)).toBeGreaterThan(
      luma(dark.get("color.surface.default")?.$value),
    );
    // and text flips contrast direction per mode while staying on the same hue family
    expect(luma(dark.get("color.text.primary")?.$value)).toBeGreaterThan(0.8);
    expect(luma(light.get("color.text.primary")?.$value)).toBeLessThan(0.3);
  });

  it("emits only deltas under DOM-contract selectors (§2)", () => {
    const css = emitThemesCss();
    expect(css).toContain('[data-ms-theme="graphite"]');
    expect(css).toMatch(/\[data-ms-color-mode="dark"\]\s*\{/);
    expect(css).toContain('[data-ms-theme="graphite"][data-ms-color-mode="dark"]');
    expect(css).not.toContain('[data-ms-theme="magic"][data-ms-color-mode="dark"]');
    expect(css).toContain('[data-ms-density="compact"]');
    expect(css).toContain('[data-ms-radius="rounded"]');
    expect(css).toMatch(/--ms-control-radius: var\(--ms-radius-md\)/);
    // baseline magic/light must NOT be duplicated
    expect(css).not.toContain("--ms-space-1:");
    // no unresolved aliases anywhere
    expect(css).not.toContain("{color.");
  });

  it("manifest documents the DOM contract and dials", () => {
    const m = JSON.parse(manifest()) as {
      domContract: Record<string, string>;
      themes: Array<{ name: string; colorModes: string[] }>;
      dials: { density: string[]; contrast: string[] };
    };
    expect(m.domContract.theme).toBe("data-ms-theme");
    expect(m.domContract.colorMode).toBe("data-ms-color-mode");
    expect(m.themes).toHaveLength(THEMES.length);
    expect(m.themes.every((t) => t.colorModes.join(",") === "light,dark")).toBe(true);
    expect(m.dials.density).toEqual(["compact", "comfortable", "spacious"]);
    expect(m.dials.contrast).toEqual(["default", "high"]);
  });

  it("theme artifacts carry no remote references (§9 security)", () => {
    const css = emitThemesCss();
    expect(css).not.toMatch(/url\(|@import|<script|http(s)?:\/\//);
  });

  it("delta computation is stable and minimal", () => {
    const base = baseline();
    expect(deltaAgainst(base, resolveTheme("magic", "light"))).toHaveLength(0);
    expect(deltaAgainst(base, resolveTheme("magic", "dark")).length).toBeGreaterThan(10);
  });
});
