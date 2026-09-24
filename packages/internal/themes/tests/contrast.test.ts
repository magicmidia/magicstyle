import { describe, expect, it } from "vitest";
import { cssVarValue } from "@magic-style-internal/tokens";
import { resolveTheme, THEMES } from "../src/index.ts";
import { contrastRatio, parseColor } from "./color-math.ts";

/** Foreground/background token pairs rendered by components, with the WCAG 2.2 AA minimum. */
const TEXT_PAIRS: ReadonlyArray<readonly [fg: string, bg: string, min: number]> = [
  ["color.text.primary", "color.surface.default", 4.5],
  ["color.text.secondary", "color.surface.default", 4.5],
  ["color.interactive.primary-text", "color.surface.default", 4.5],
  ["color.text.on-accent", "color.interactive.primary", 4.5],
  ["color.interactive.neutral-fg", "color.interactive.neutral", 4.5],
  ["color.feedback.info-solid-fg", "color.feedback.info-solid", 4.5],
  ["color.feedback.success-solid-fg", "color.feedback.success-solid", 4.5],
  ["color.feedback.warning-solid-fg", "color.feedback.warning-solid", 4.5],
  ["color.feedback.danger-solid-fg", "color.feedback.danger-solid", 4.5],
  ["color.feedback.info-text", "color.feedback.info-bg", 4.5],
  ["color.feedback.success-text", "color.feedback.success-bg", 4.5],
  ["color.feedback.warning-text", "color.feedback.warning-bg", 4.5],
  ["color.feedback.danger-text", "color.feedback.danger-bg", 4.5],
];

describe("theme contrast (WCAG 2.2 AA, doc 11)", () => {
  for (const theme of THEMES) {
    for (const mode of ["light", "dark"] as const) {
      it(`${theme.name}/${mode} meets AA for text pairs`, () => {
        const tokens = resolveTheme(theme.name, mode);
        const value = (path: string): string => {
          const token = tokens.get(path);
          if (!token) throw new Error(`missing token ${path}`);
          return String(cssVarValue(token));
        };
        const failures: string[] = [];
        for (const [fg, bg, min] of TEXT_PAIRS) {
          const fgColor = parseColor(value(fg));
          const bgColor = parseColor(value(bg));
          if (!fgColor || !bgColor) {
            failures.push(`unparseable ${fg}=${value(fg)} / ${bg}=${value(bg)}`);
            continue;
          }
          const ratio = contrastRatio(fgColor, bgColor);
          if (ratio < min) failures.push(`${fg} on ${bg}: ${ratio.toFixed(2)} < ${min}`);
        }
        expect(failures).toEqual([]);
      });
    }
  }

  it("color math matches known WCAG ratios", () => {
    expect(contrastRatio(parseColor("#000")!, parseColor("#fff")!)).toBeCloseTo(21, 1);
    expect(contrastRatio(parseColor("#767676")!, parseColor("#ffffff")!)).toBeCloseTo(4.54, 1);
    expect(contrastRatio(parseColor("oklch(1 0 0)")!, parseColor("#000000")!)).toBeCloseTo(21, 0);
  });
});
