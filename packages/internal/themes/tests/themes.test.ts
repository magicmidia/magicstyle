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
  it("resolves all 20 theme x mode combos across 10 official themes without diagnostics", () => {
    for (const theme of [
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
    ] as const) {
      for (const mode of ["light", "dark"] as const) {
        const tokens = resolveTheme(theme, mode);
        expect(tokens.size).toBeGreaterThan(100);
      }
    }
  });

  it("verifies authentic signature palettes for top-tier design themes", () => {
    // Shadcn: black button in light, white button in dark
    expect(resolveTheme("shadcn", "light").get("color.interactive.primary")?.$value).toBe(
      "#18181b",
    );
    expect(resolveTheme("shadcn", "dark").get("color.interactive.primary")?.$value).toBe("#fafafa");

    // Bootstrap: royal blue #0d6efd
    expect(resolveTheme("bootstrap", "light").get("color.brand.primary")?.$value).toBe("#0d6efd");
    expect(resolveTheme("bootstrap", "dark").get("color.brand.primary")?.$value).toBe("#0d6efd");

    // MaterialUI: royal purple #6750a4 in light, pastel lavender #d0bcff in dark
    expect(resolveTheme("material", "light").get("color.brand.primary")?.$value).toBe("#6750a4");
    expect(resolveTheme("material", "dark").get("color.brand.primary")?.$value).toBe("#d0bcff");

    // GitHub: green #1f883d in light, #238636 in dark
    expect(resolveTheme("github", "light").get("color.brand.primary")?.$value).toBe("#1f883d");
    expect(resolveTheme("github", "dark").get("color.brand.primary")?.$value).toBe("#238636");

    // Linear: electric indigo #5e6ad2
    expect(resolveTheme("linear", "light").get("color.brand.primary")?.$value).toBe("#5e6ad2");
    expect(resolveTheme("linear", "dark").get("color.brand.primary")?.$value).toBe("#5e6ad2");

    // Vercel: pure black #000000 in light, pure white #ffffff in dark
    expect(resolveTheme("vercel", "light").get("color.interactive.primary")?.$value).toBe(
      "#000000",
    );
    expect(resolveTheme("vercel", "dark").get("color.interactive.primary")?.$value).toBe("#ffffff");

    // Supabase: emerald green #24b47e in light, neon emerald #3ecf8e in dark
    expect(resolveTheme("supabase", "light").get("color.brand.primary")?.$value).toBe("#24b47e");
    expect(resolveTheme("supabase", "dark").get("color.brand.primary")?.$value).toBe("#3ecf8e");

    // Nord: frost blue #5e81ac in light, glacial cyan #88c0d0 in dark
    expect(resolveTheme("nord", "light").get("color.brand.primary")?.$value).toBe("#5e81ac");
    expect(resolveTheme("nord", "dark").get("color.brand.primary")?.$value).toBe("#88c0d0");
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
    for (const theme of [
      "graphite",
      "shadcn",
      "bootstrap",
      "material",
      "github",
      "linear",
      "vercel",
      "supabase",
      "nord",
    ]) {
      expect(css).toContain(`[data-ms-theme="${theme}"]`);
      expect(css).toContain(`[data-ms-theme="${theme}"][data-ms-color-mode="dark"]`);
    }
    expect(css).toMatch(/\[data-ms-color-mode="dark"\]\s*\{/);
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
