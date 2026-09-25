/**
 * Theme authoring API: define a theme with the ~27 contract values, validate its
 * contrast, and turn it into CSS. The engine is bundled from the internal themes
 * package; the public types below are the stable surface.
 */
import {
  THEME_CONTRACT,
  checkContrast,
  resolveThemeMode,
  themeToCss,
  type ThemeSource,
} from "@magic-style-internal/themes";

export type MsThemeColorRole =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "danger";

/** Every CSS variable a theme may set, without the `--ms-` prefix. */
export type MsThemeKey =
  | "color-base-100"
  | "color-base-200"
  | "color-base-300"
  | "color-base-content"
  | "color-base-raised"
  | `color-${MsThemeColorRole}`
  | `color-${MsThemeColorRole}-content`
  | "radius-selector"
  | "radius-field"
  | "radius-box"
  | "radius-control"
  | "border-width"
  | "depth"
  | "font-sans"
  | "font-mono"
  | "font-display";

export type MsThemeValues = Partial<Record<MsThemeKey, string>>;

export interface MsThemeDefinition {
  /** Value used in `data-ms-theme` / `<MsProvider theme>`. */
  name: string;
  label?: string;
  description?: string;
  /** Official or user theme to inherit from (default "magic"). */
  extends?: string;
  /** Values for both color modes (radius, fonts, depth…). */
  shared?: MsThemeValues;
  light?: MsThemeValues;
  dark?: MsThemeValues;
}

export interface MsThemeContractEntry {
  readonly key: MsThemeKey;
  readonly description: string;
  readonly kind: "color" | "length" | "number" | "font";
  readonly required: boolean;
}

export interface MsThemeContrastIssue {
  readonly mode: "light" | "dark";
  /** Foreground token (without `--ms-`). */
  readonly fg: string;
  readonly bg: string;
  readonly ratio: number;
  readonly min: number;
}

/** The theme contract: the variables a theme defines; everything else is derived. */
export const MS_THEME_CONTRACT: readonly MsThemeContractEntry[] = THEME_CONTRACT;

function toSource(theme: MsThemeDefinition): ThemeSource {
  return {
    label: theme.name,
    description: "",
    ...theme,
  } as ThemeSource;
}

/** Identity helper for typed theme definitions (autocompletion of every key). */
export function defineMsTheme(theme: MsThemeDefinition): MsThemeDefinition {
  return theme;
}

/**
 * CSS for a theme (light, dark and OS-driven "system" blocks). Load it after
 * `@magic-style/css`, then activate it with `data-ms-theme="<name>"`.
 * Pass `extendsThemes` when the theme extends another user theme.
 */
export function msThemeToCss(
  theme: MsThemeDefinition,
  extendsThemes: readonly MsThemeDefinition[] = [],
): string {
  const sources = [theme, ...extendsThemes].map(toSource);
  const { base, system } = themeToCss(sources[0]!, sources);
  return `${base}@media (prefers-color-scheme: dark) {\n${system}}\n`;
}

/** WCAG AA problems in the theme's derived colors (empty array = passes). */
export function checkMsThemeContrast(
  theme: MsThemeDefinition,
  extendsThemes: readonly MsThemeDefinition[] = [],
): MsThemeContrastIssue[] {
  const sources = [theme, ...extendsThemes].map(toSource);
  return (["light", "dark"] as const).flatMap((mode) =>
    checkContrast(resolveThemeMode(theme.name, mode, sources).values).map((issue) => ({
      mode,
      ...issue,
    })),
  );
}

export { msThemeOverridesToStyle } from "./theme-overrides.ts";
