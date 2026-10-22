/**
 * Theme contract: the ONLY variables a theme defines. Everything else
 * (surfaces, text, borders, hover/active/subtle states, feedback colors,
 * radius scale, legacy aliases) is derived from these in lib/derive.ts.
 *
 * Each key maps to the CSS custom property `--ms-<key>`.
 */
export const CONTRACT_COLOR_ROLES = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "info",
  "success",
  "warning",
  "danger",
] as const;

export type ContractColorRole = (typeof CONTRACT_COLOR_ROLES)[number];

/** Every key a theme may set (CSS variable `--ms-<key>`). */
export type ThemeContractKey =
  | "color-base-100"
  | "color-base-200"
  | "color-base-300"
  | "color-base-content"
  | "color-base-raised"
  | `color-${ContractColorRole}`
  | `color-${ContractColorRole}-content`
  | "radius-selector"
  | "radius-field"
  | "radius-box"
  | "radius-control"
  | "border-width"
  | "depth"
  | "font-sans"
  | "font-mono"
  | "font-display";

export interface ContractEntry {
  readonly key: ThemeContractKey;
  readonly description: string;
  readonly kind: "color" | "length" | "number" | "font";
  readonly required: boolean;
}

const role = (name: ContractColorRole, label: string): ContractEntry[] => [
  {
    key: `color-${name}` as const,
    description: `${label} fill color.`,
    kind: "color",
    required: true,
  },
  {
    key: `color-${name}-content` as const,
    description: `Text/icon color on top of --ms-color-${name} (must reach WCAG AA 4.5:1).`,
    kind: "color",
    required: true,
  },
];

export const THEME_CONTRACT: readonly ContractEntry[] = [
  {
    key: "color-base-100",
    description: "Page and component surface.",
    kind: "color",
    required: true,
  },
  {
    key: "color-base-200",
    description: "Sunken/subtle surface (wells, table stripes, inputs on cards).",
    kind: "color",
    required: true,
  },
  {
    key: "color-base-300",
    description: "Default border and divider color.",
    kind: "color",
    required: true,
  },
  {
    key: "color-base-content",
    description: "Main text color on base surfaces.",
    kind: "color",
    required: true,
  },
  ...role("primary", "Main action / brand"),
  ...role("secondary", "Secondary action"),
  ...role("accent", "Highlight"),
  ...role("neutral", "Neutral (dark/inverse) action"),
  ...role("info", "Informational feedback"),
  ...role("success", "Success feedback"),
  ...role("warning", "Warning feedback"),
  ...role("danger", "Error / destructive"),
  {
    key: "radius-selector",
    description: "Small elements: checkbox, tag, badge.",
    kind: "length",
    required: true,
  },
  { key: "radius-field", description: "Inputs and fields.", kind: "length", required: true },
  { key: "radius-box", description: "Cards, dialogs, popovers.", kind: "length", required: true },
  { key: "border-width", description: "Default border width.", kind: "length", required: true },
  {
    key: "depth",
    description: "Shadow intensity multiplier (0 = flat, 1 = default).",
    kind: "number",
    required: true,
  },
  { key: "font-sans", description: "UI font stack.", kind: "font", required: true },
  { key: "font-mono", description: "Code font stack.", kind: "font", required: true },
  // Optional keys: omit them and the derived default applies.
  {
    key: "color-base-raised",
    description: "Raised surface (cards/menus) when it differs from base-100. Default: base-100.",
    kind: "color",
    required: false,
  },
  {
    key: "radius-control",
    description:
      "Buttons and controls when they differ from fields (e.g. pill buttons). Default: radius-field.",
    kind: "length",
    required: false,
  },
  {
    key: "font-display",
    description: "Headings font stack. Default: font-sans.",
    kind: "font",
    required: false,
  },
];

export const CONTRACT_KEYS: readonly string[] = THEME_CONTRACT.map((entry) => entry.key);
export const REQUIRED_CONTRACT_KEYS = THEME_CONTRACT.filter((e) => e.required).map((e) => e.key);

/** Values of one theme in one color mode, keyed by contract key. */
export type ThemeValues = Readonly<Record<string, string>>;

export interface ThemeSource {
  readonly name: string;
  readonly label: string;
  readonly description: string;
  /** Inherit every value not set here from another theme. */
  readonly extends?: string;
  /** Contract values shared by both modes (radius, fonts, depth…). */
  readonly shared?: ThemeValues;
  readonly light?: ThemeValues;
  readonly dark?: ThemeValues;
  /**
   * Signature tokens outside the contract (full names without `--ms-`), e.g.
   * theme-specific shadows or typography. Keep this small: prefer the contract.
   */
  readonly extras?: {
    readonly shared?: ThemeValues;
    readonly light?: ThemeValues;
    readonly dark?: ThemeValues;
  };
}

export type ColorMode = "light" | "dark";

/** Returns human-readable problems (unknown keys, missing required keys). */
export function validateThemeValues(values: ThemeValues, context: string): string[] {
  const problems: string[] = [];
  for (const key of Object.keys(values)) {
    if (!CONTRACT_KEYS.includes(key)) problems.push(`${context}: unknown contract key "${key}"`);
  }
  for (const key of REQUIRED_CONTRACT_KEYS) {
    if (!(key in values)) problems.push(`${context}: missing required key "${key}"`);
  }
  return problems;
}
