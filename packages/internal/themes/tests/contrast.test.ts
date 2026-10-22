import { describe, expect, it } from "vitest";
import {
  THEMES,
  checkContrast,
  contrastRatio,
  mixOklab,
  parseColor,
  resolveThemeMode,
  toHex,
} from "../src/index.ts";

describe("theme contrast (WCAG 2.2 AA, doc 11)", () => {
  for (const theme of THEMES) {
    for (const mode of ["light", "dark"] as const) {
      it(`${theme.name}/${mode}: contract + derived tokens meet AA`, () => {
        expect(checkContrast(resolveThemeMode(theme.name, mode).values)).toEqual([]);
      });
    }
  }
});

describe("color math", () => {
  it("matches known WCAG ratios", () => {
    expect(contrastRatio(parseColor("#000")!, parseColor("#fff")!)).toBeCloseTo(21, 1);
    expect(contrastRatio(parseColor("#767676")!, parseColor("#ffffff")!)).toBeCloseTo(4.54, 1);
    expect(contrastRatio(parseColor("oklch(1 0 0)")!, parseColor("#000000")!)).toBeCloseTo(21, 0);
  });

  it("mixes like CSS color-mix(in oklab, …)", () => {
    // Browsers render color-mix(in oklab, white 50%, black) as rgb(99 99 99).
    expect(toHex(mixOklab(parseColor("#fff")!, 50, parseColor("#000")!))).toBe("#636363");
    expect(toHex(mixOklab(parseColor("#ff0000")!, 100, parseColor("#000")!))).toBe("#ff0000");
  });
});
