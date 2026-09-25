/**
 * Minimal color math for theme validation: parsing (hex, rgb(), oklch()),
 * OKLab mixing identical to CSS `color-mix(in oklab, …)`, and WCAG 2.x contrast.
 */
export type Rgb = readonly [number, number, number];
type Lab = readonly [number, number, number];

const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));
const toLinear = (c: number): number => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const fromLinear = (c: number): number => {
  const x = clamp01(c);
  return x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
};

function linearToOklab([r, g, b]: Rgb): Lab {
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function oklabToLinear([L, a, b]: Lab): Rgb {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

/** Parses an opaque color into sRGB 0..1; null for unsupported or translucent values. */
export function parseColor(value: string): Rgb | null {
  const v = value.trim().toLowerCase();
  let m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/.exec(v);
  if (m) {
    const hex = m[1]!.length === 3 ? [...m[1]!].map((ch) => ch + ch).join("") : m[1]!;
    return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as unknown as Rgb;
  }
  m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+))?\s*\)$/.exec(v);
  if (m) {
    if (m[4] !== undefined && Number(m[4]) < 1) return null;
    return [Number(m[1]) / 255, Number(m[2]) / 255, Number(m[3]) / 255];
  }
  m = /^oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)$/.exec(v);
  if (m) {
    if (m[5] !== undefined && Number(m[5]) < 1) return null;
    const l = m[2] === "%" ? Number(m[1]) / 100 : Number(m[1]);
    const h = (Number(m[4]) * Math.PI) / 180;
    const c = Number(m[3]);
    const lin = oklabToLinear([l, c * Math.cos(h), c * Math.sin(h)]);
    return lin.map(fromLinear) as unknown as Rgb;
  }
  return null;
}

/** Same result as CSS `color-mix(in oklab, a pct%, b)`. */
export function mixOklab(a: Rgb, pct: number, b: Rgb): Rgb {
  const la = linearToOklab(a.map(toLinear) as unknown as Rgb);
  const lb = linearToOklab(b.map(toLinear) as unknown as Rgb);
  const t = pct / 100;
  const mixed: Lab = [0, 1, 2].map((i) => la[i]! * t + lb[i]! * (1 - t)) as unknown as Lab;
  return oklabToLinear(mixed).map(fromLinear) as unknown as Rgb;
}

/**
 * Same as CSS `oklch(from <color> l calc(c * k) h)`: scales chroma, keeps lightness
 * and hue. Out-of-gamut results are clipped per channel.
 */
export function scaleChroma(color: Rgb, k: number): Rgb {
  const [L, a, b] = linearToOklab(color.map(toLinear) as unknown as Rgb);
  return oklabToLinear([L, a * k, b * k]).map(fromLinear) as unknown as Rgb;
}

/** Same as CSS `oklch(from <color> l 0 h)`: same lightness, no chroma. */
export function neutralize(color: Rgb): Rgb {
  const [L] = linearToOklab(color.map(toLinear) as unknown as Rgb);
  return oklabToLinear([L, 0, 0]).map(fromLinear) as unknown as Rgb;
}

const luminance = ([r, g, b]: Rgb): number =>
  0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

export function contrastRatio(fg: Rgb, bg: Rgb): number {
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

export function toHex(rgb: Rgb): string {
  return `#${rgb
    .map((c) =>
      Math.round(clamp01(c) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}
