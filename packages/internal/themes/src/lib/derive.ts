/**
 * Derivation layer: every semantic token components use, computed at runtime
 * from the theme contract with CSS color-mix()/calc(). One rule list drives both
 * the emitted CSS and the JS evaluator used for contrast validation.
 */
import { contrastRatio, mixOklab, neutralize, parseColor, scaleChroma, type Rgb } from "./color.ts";
import { CONTRACT_COLOR_ROLES, type ThemeValues } from "./contract.ts";

export type Expr =
  | { readonly ref: string }
  /**
   * color-mix(in oklab). With `chroma`, the target is neutralized first (so the hue
   * always comes from the role color) and the lost saturation is restored.
   */
  | { readonly mix: readonly [string, number, string]; readonly chroma?: number }
  | { readonly css: string };

const ref = (name: string): Expr => ({ ref: name });
const mix = (a: string, pct: number, b: string, chroma?: number): Expr =>
  chroma === undefined ? { mix: [a, pct, b] } : { mix: [a, pct, b], chroma };
const css = (value: string): Expr => ({ css: value });

const BASE = "color-base-100";
const INK = "color-base-content";

/** Tunable ratios for state colors (percentage of the role color kept). */
export const RATIOS = {
  hover: 86,
  active: 74,
  subtle: 14,
  border: 40,
  /** Tinted text (links, outline/ghost labels, feedback text): AA on base and subtle in every theme. */
  text: 40,
  textSecondary: 80,
  textMuted: 66,
  textSubtle: 52,
  borderSubtle: 55,
  borderStrong: 65,
  /** Chroma restored after mixing (tints keep ~30% and shades ~80% of the role's saturation). */
  tintChroma: 2.2,
  textChroma: 2,
  borderChroma: 1.5,
} as const;

const interactive = (role: string): Array<[string, Expr]> => [
  [`color-interactive-${role}`, ref(`color-${role}`)],
  [`color-interactive-${role}-hover`, mix(`color-${role}`, RATIOS.hover, INK)],
  [`color-interactive-${role}-active`, mix(`color-${role}`, RATIOS.active, INK)],
  [`color-interactive-${role}-subtle`, mix(`color-${role}`, RATIOS.subtle, BASE)],
  // Neutral has no hue (it can even be a light gray): its tinted text is the ink itself.
  [
    `color-interactive-${role}-text`,
    role === "neutral" ? ref(INK) : mix(`color-${role}`, RATIOS.text, INK),
  ],
  [`color-interactive-${role}-fg`, ref(`color-${role}-content`)],
];

const feedback = (role: string): Array<[string, Expr]> => [
  [`color-feedback-${role}-solid`, ref(`color-${role}`)],
  [`color-feedback-${role}-solid-hover`, mix(`color-${role}`, RATIOS.hover, INK)],
  [`color-feedback-${role}-solid-fg`, ref(`color-${role}-content`)],
  [`color-feedback-${role}-bg`, mix(`color-${role}`, RATIOS.subtle, BASE, RATIOS.tintChroma)],
  [`color-feedback-${role}-border`, mix(`color-${role}`, RATIOS.border, BASE, RATIOS.borderChroma)],
  [`color-feedback-${role}-text`, mix(`color-${role}`, RATIOS.text, INK, RATIOS.textChroma)],
];

export const DERIVED: ReadonlyArray<readonly [string, Expr]> = [
  // Surfaces and text
  ["color-surface-default", ref(BASE)],
  ["color-surface-raised", ref("color-base-raised")],
  ["color-surface-sunken", ref("color-base-200")],
  ["color-surface-subtle", ref("color-base-200")],
  ["color-surface-inverse", ref(INK)],
  ["color-text-primary", ref(INK)],
  ["color-text-secondary", mix(INK, RATIOS.textSecondary, BASE)],
  ["color-text-muted", mix(INK, RATIOS.textMuted, BASE)],
  ["color-text-subtle", mix(INK, RATIOS.textSubtle, BASE)],
  ["color-text-inverse", ref(BASE)],
  ["color-text-on-accent", ref("color-primary-content")],
  // Borders and focus
  ["color-border-subtle", mix("color-base-300", RATIOS.borderSubtle, BASE)],
  ["color-border-default", ref("color-base-300")],
  ["color-border-strong", mix("color-base-300", RATIOS.borderStrong, INK)],
  ["color-border-focus", ref("color-primary")],
  ["focus-ring-color", ref("color-primary")],
  // Roles
  ...CONTRACT_COLOR_ROLES.map((role): [string, Expr] => [
    `color-brand-${role}`,
    ref(`color-${role}`),
  ]),
  ...["primary", "secondary", "accent", "neutral"].flatMap(interactive),
  [
    "color-interactive-accent-gradient",
    css("linear-gradient(135deg, var(--ms-color-primary), var(--ms-color-accent))"),
  ],
  ...["info", "success", "warning", "danger"].flatMap(feedback),
  // Shape and type
  ["control-radius", ref("radius-control")],
  ["radius-xs", css("calc(var(--ms-radius-selector) / 2)")],
  ["radius-sm", ref("radius-selector")],
  ["radius-md", ref("radius-field")],
  ["radius-lg", ref("radius-box")],
  ["radius-xl", css("calc(var(--ms-radius-box) * 1.5)")],
  ["radius-2xl", css("calc(var(--ms-radius-box) * 2)")],
  // Shadows scale with --ms-depth (0 = flat themes).
  [
    "elevation-1",
    css(
      "0 1px 2px 0 oklch(0.19 0.016 248 / calc(0.1 * var(--ms-depth))), 0 1px 1px -1px oklch(0.19 0.016 248 / calc(0.06 * var(--ms-depth)))",
    ),
  ],
  [
    "elevation-2",
    css(
      "0 4px 12px -2px oklch(0.19 0.018 248 / calc(0.12 * var(--ms-depth))), 0 1px 2px 0 oklch(0.19 0.016 248 / calc(0.06 * var(--ms-depth)))",
    ),
  ],
  [
    "elevation-3",
    css(
      "0 12px 32px -8px oklch(0.12 0.014 248 / calc(0.18 * var(--ms-depth))), 0 2px 6px -2px oklch(0.12 0.012 248 / calc(0.08 * var(--ms-depth)))",
    ),
  ],
  ["elevation-card", ref("elevation-1")],
  ["elevation-dropdown", ref("elevation-2")],
  ["elevation-modal", ref("elevation-3")],
  // Legacy aliases kept for component compatibility (point at derived tokens).
  ["color-surface", ref("color-surface-default")],
  ["color-surface-hover", ref("color-interactive-neutral-subtle")],
  ["color-text", ref("color-text-primary")],
  ["color-text-default", ref("color-text-primary")],
  ["color-border", ref("color-border-default")],
  ["color-border-hover", ref("color-border-strong")],
  ["color-primary-subtle", ref("color-interactive-primary-subtle")],
  ["color-secondary-subtle", ref("color-interactive-secondary-subtle")],
  ["color-accent-subtle", ref("color-interactive-accent-subtle")],
  ["color-neutral-subtle", ref("color-interactive-neutral-subtle")],
  ["color-info-subtle", ref("color-feedback-info-bg")],
  ["color-success-subtle", ref("color-feedback-success-bg")],
  ["color-warning-subtle", ref("color-feedback-warning-bg")],
  ["color-danger-subtle", ref("color-feedback-danger-bg")],
  ["color-primary-default", ref("color-interactive-primary")],
  ["color-neutral-default", ref("color-interactive-neutral")],
  ["color-danger-default", ref("color-feedback-danger-solid")],
  ["color-success-default", ref("color-feedback-success-solid")],
  ["color-info-default", ref("color-feedback-info-solid")],
  ["color-warning-default", ref("color-feedback-warning-solid")],
  ["color-status-danger", ref("color-feedback-danger-text")],
  ["color-status-warning", ref("color-feedback-warning-text")],
  ["color-status-success", ref("color-feedback-success-text")],
  ["color-status-info", ref("color-feedback-info-text")],
  ["color-primary-text", ref("color-interactive-primary-text")],
  ["color-primary-hover", ref("color-interactive-primary-hover")],
  ["color-primary-active", ref("color-interactive-primary-active")],
  ["color-primary-contrast", ref("color-text-on-accent")],
  ["color-primary-hover-subtle", ref("color-interactive-primary-subtle")],
  ["color-neutral-hover", ref("color-interactive-neutral-hover")],
  ["color-neutral-contrast", ref("color-interactive-neutral-fg")],
  ["color-danger-hover", ref("color-feedback-danger-solid-hover")],
  ["color-danger-contrast", ref("color-feedback-danger-solid-fg")],
  ["color-success-hover", ref("color-feedback-success-solid-hover")],
  ["color-success-contrast", ref("color-feedback-success-solid-fg")],
  ["color-info-contrast", ref("color-feedback-info-solid-fg")],
  ["color-warning-contrast", ref("color-feedback-warning-solid-fg")],
  ["color-text-disabled", ref("color-text-muted")],
  ["color-surface-disabled", ref("color-surface-sunken")],
  ["color-surface-elevated", ref("color-surface-raised")],
  ["color-surface-overlay", ref("color-surface-raised")],
  ["color-focus-ring", ref("focus-ring-color")],
  ["color-primary-soft-bg", ref("color-interactive-primary-text")],
  ["color-primary-soft-fg", ref("color-interactive-primary-subtle")],
  ["color-secondary-soft-bg", ref("color-interactive-secondary-text")],
  ["color-secondary-soft-fg", ref("color-interactive-secondary-subtle")],
  ["color-accent-soft-bg", ref("color-interactive-accent-text")],
  ["color-accent-soft-fg", ref("color-interactive-accent-subtle")],
  ["color-neutral-soft-bg", ref("color-interactive-neutral-text")],
  ["color-neutral-soft-fg", ref("color-interactive-neutral-subtle")],
  ["color-success-soft-bg", ref("color-feedback-success-text")],
  ["color-success-soft-fg", ref("color-feedback-success-bg")],
  ["color-info-soft-bg", ref("color-feedback-info-text")],
  ["color-info-soft-fg", ref("color-feedback-info-bg")],
  ["color-warning-soft-bg", ref("color-feedback-warning-text")],
  ["color-warning-soft-fg", ref("color-feedback-warning-bg")],
  ["color-danger-soft-bg", ref("color-feedback-danger-text")],
  ["color-danger-soft-fg", ref("color-feedback-danger-bg")],
];

/** Defaults for optional contract keys (emitted when a theme omits them). */
export const OPTIONAL_DEFAULTS: Readonly<Record<string, string>> = {
  "color-base-raised": "var(--ms-color-base-100)",
  "radius-control": "var(--ms-radius-field)",
  "font-display": "var(--ms-font-sans)",
};

export function exprToCss(expr: Expr): string {
  if ("ref" in expr) return `var(--ms-${expr.ref})`;
  if ("mix" in expr) {
    const [a, pct, b] = expr.mix;
    if (expr.chroma === undefined)
      return `color-mix(in oklab, var(--ms-${a}) ${pct}%, var(--ms-${b}))`;
    const target = `oklch(from var(--ms-${b}) l 0 h)`;
    return `oklch(from color-mix(in oklab, var(--ms-${a}) ${pct}%, ${target}) l calc(c * ${expr.chroma}) h)`;
  }
  return expr.css;
}

const DERIVED_MAP = new Map(DERIVED);

/**
 * Evaluates a token for concrete contract values (null when not a plain color,
 * e.g. calc()/gradients). Mirrors how the browser resolves the emitted CSS.
 */
export function evaluateColor(name: string, values: ThemeValues, depth = 0): Rgb | null {
  if (depth > 12) throw new Error(`derivation cycle at ${name}`);
  if (name in values) {
    const raw = values[name]!;
    const fallback = /^var\(--ms-([\w-]+)\)$/.exec(raw.trim());
    return fallback ? evaluateColor(fallback[1]!, values, depth + 1) : parseColor(raw);
  }
  if (name in OPTIONAL_DEFAULTS) {
    const target = /^var\(--ms-([\w-]+)\)$/.exec(OPTIONAL_DEFAULTS[name]!)![1]!;
    return evaluateColor(target, values, depth + 1);
  }
  const expr = DERIVED_MAP.get(name);
  if (!expr) return null;
  if ("ref" in expr) return evaluateColor(expr.ref, values, depth + 1);
  if ("mix" in expr) {
    const [a, pct, b] = expr.mix;
    const ca = evaluateColor(a, values, depth + 1);
    const cb = evaluateColor(b, values, depth + 1);
    if (!ca || !cb) return null;
    if (expr.chroma === undefined) return mixOklab(ca, pct, cb);
    return scaleChroma(mixOklab(ca, pct, neutralize(cb)), expr.chroma);
  }
  return null;
}

/** Foreground/background pairs components render, with the WCAG AA minimum. */
export const CONTRAST_PAIRS: ReadonlyArray<readonly [fg: string, bg: string, min: number]> = [
  ["color-text-primary", "color-surface-default", 4.5],
  ["color-text-secondary", "color-surface-default", 4.5],
  ["color-text-primary", "color-surface-sunken", 4.5],
  ...["primary", "secondary", "accent", "neutral"].flatMap((role) => [
    [`color-interactive-${role}-text`, "color-surface-default", 4.5] as const,
    [`color-interactive-${role}-text`, `color-interactive-${role}-subtle`, 4.5] as const,
  ]),
  ...CONTRACT_COLOR_ROLES.map((role): readonly [string, string, number] => [
    `color-${role}-content`,
    `color-${role}`,
    4.5,
  ]),
  ...["info", "success", "warning", "danger"].map((role): readonly [string, string, number] => [
    `color-feedback-${role}-text`,
    `color-feedback-${role}-bg`,
    4.5,
  ]),
  ["color-text-muted", "color-surface-default", 3],
];

export interface ContrastIssue {
  readonly fg: string;
  readonly bg: string;
  readonly ratio: number;
  readonly min: number;
}

/** WCAG contrast issues for one mode of a theme (empty = passes). */
export function checkContrast(values: ThemeValues): ContrastIssue[] {
  const issues: ContrastIssue[] = [];
  for (const [fg, bg, min] of CONTRAST_PAIRS) {
    const a = evaluateColor(fg, values);
    const b = evaluateColor(bg, values);
    if (!a || !b) continue;
    const ratio = contrastRatio(a, b);
    if (ratio < min) issues.push({ fg, bg, ratio: Math.round(ratio * 100) / 100, min });
  }
  return issues;
}
