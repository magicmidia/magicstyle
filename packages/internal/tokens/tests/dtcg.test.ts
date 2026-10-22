import { describe, expect, it } from "vitest";
import { DTCG_TOKEN_TYPES, flatten } from "../src/lib/dtcg.ts";
import { resolveAliases } from "../src/lib/resolve.ts";
import { cssVarValue } from "../src/lib/css-vars.ts";
import { tokenTree } from "../src/sources.ts";

const flat = flatten(tokenTree);

/** OKLCH -> linear sRGB (Björn Ottosson's reference matrices). */
function oklchToLinearSrgb(l: number, c: number, hDeg: number): number[] {
  const h = (hDeg * Math.PI) / 180;
  const a = c * Math.cos(h);
  const b = c * Math.sin(h);
  const L = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const M = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const S = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
}

function toHex(linear: number[]): string {
  const encode = (x: number) => {
    const v = Math.min(1, Math.max(0, x));
    return v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
  };
  return `#${linear
    .map((x) =>
      Math.round(encode(x) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

const OKLCH = /^oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)$/;

describe("DTCG compatibility (doc 06 §1)", () => {
  it("every token uses a DTCG type and resolves without diagnostics", () => {
    for (const [path, token] of flat) expect(DTCG_TOKEN_TYPES, path).toContain(token.$type);
    expect(resolveAliases(tokenTree).diagnostics).toEqual([]);
  });

  it("easings are cubicBezier arrays and letter-spacing keeps its em unit", () => {
    const easing = flat.get("motion.easing.standard")!;
    expect(easing.$value).toEqual([0.16, 1, 0.3, 1]);
    expect(cssVarValue(easing)).toBe("cubic-bezier(0.16, 1, 0.3, 1)");
    expect(cssVarValue(flat.get("typography.letter-spacing.tight")!)).toBe("-0.02em");
    const display = resolveAliases(tokenTree).tokens.get("role.display")!;
    expect(display.$value).toMatchObject({ letterSpacing: "-0.02em", fontSize: "2.25rem" });
  });

  it("font sizes use rem so they follow the user's font size", () => {
    const sizes = [...flat].filter(([path]) => path.startsWith("typography.size."));
    expect(sizes.length).toBeGreaterThan(5);
    for (const [path, token] of sizes) expect(String(token.$value), path).toMatch(/^[\d.]+rem$/);
  });
});

describe("color primitives", () => {
  const colors = [...flat].filter(([, token]) => token.$type === "color");

  it("stay inside the sRGB gamut (no display-dependent clipping)", () => {
    const outside = colors.flatMap(([path, token]) => {
      const m = OKLCH.exec(String(token.$value));
      if (!m) return [];
      const rgb = oklchToLinearSrgb(Number(m[1]), Number(m[2]), Number(m[3]));
      return rgb.some((x) => x < -0.0005 || x > 1.0005) ? [path] : [];
    });
    expect(outside).toEqual([]);
  });

  it("hex values quoted in descriptions match the token value", () => {
    for (const [path, token] of colors) {
      const quoted = token.$description?.match(/#[0-9a-f]{6}/i)?.[0];
      const m = OKLCH.exec(String(token.$value));
      if (!quoted || !m) continue;
      const actual = toHex(oklchToLinearSrgb(Number(m[1]), Number(m[2]), Number(m[3])));
      const distance = [1, 3, 5].reduce(
        (sum, i) =>
          sum +
          Math.abs(parseInt(quoted.slice(i, i + 2), 16) - parseInt(actual.slice(i, i + 2), 16)),
        0,
      );
      expect(distance, `${path}: ${quoted} vs ${actual}`).toBeLessThanOrEqual(12);
    }
  });
});
