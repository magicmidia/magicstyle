import {
  cssVarValue,
  resolveAliases,
  tokenTree,
  type DtcgToken,
} from "@magic-style-internal/tokens";
import { asTree, deepMergeAll } from "./merge.ts";

export type ColorMode = "light" | "dark";
export type ThemeName = "magic" | "graphite";

export interface ThemeDefinition {
  readonly name: ThemeName;
  readonly dataMs: string;
  readonly description: string;
  readonly overrides: unknown;
}

import graphiteOverrides from "../theme-graphite.json" with { type: "json" };
import darkOverlay from "../mode-dark.json" with { type: "json" };
import dialsJson from "../dials.json" with { type: "json" };
import contrastHighLight from "../contrast-high-light.json" with { type: "json" };
import contrastHighDark from "../contrast-high-dark.json" with { type: "json" };

export const THEMES: readonly ThemeDefinition[] = [
  {
    name: "magic",
    dataMs: "magic",
    description: "Technical blue accent on cool quiet surfaces. Default theme.",
    overrides: {},
  },
  {
    name: "graphite",
    dataMs: "graphite",
    description: "Muted steel accent and deeper neutral tint for dense product UI.",
    overrides: graphiteOverrides,
  },
];

export const MODE_OVERLAYS: Readonly<Record<ColorMode, unknown>> = {
  light: {},
  dark: darkOverlay,
};

export const DIALS = dialsJson;
export const CONTRAST_HIGH: Readonly<Record<ColorMode, unknown>> = {
  light: contrastHighLight,
  dark: contrastHighDark,
};

/** Resolved (theme, mode) pair with aliases inlined; optional extra overlay (e.g. contrast). */
export function resolveTheme(
  theme: ThemeName,
  mode: ColorMode,
  extraOverlay?: unknown,
): Map<string, DtcgToken> {
  const definition = THEMES.find((t) => t.name === theme);
  if (definition === undefined) throw new Error(`unknown theme: ${theme}`);
  const layers: unknown[] = [tokenTree, definition.overrides, MODE_OVERLAYS[mode]];
  if (extraOverlay !== undefined) layers.push(extraOverlay);
  const merged = deepMergeAll(...layers);
  const { tokens, diagnostics } = resolveAliases(asTree(merged));
  if (diagnostics.length > 0) {
    throw new Error(
      `invalid token graph for ${theme}/${mode}: ${diagnostics.map((d) => `${d.path}: ${d.message}`).join("; ")}`,
    );
  }
  return tokens;
}

/** Baseline is magic/light — the values already emitted by tokens.css :root. */
export function baseline(): Map<string, DtcgToken> {
  return resolveTheme("magic", "light");
}

/** Entries whose rendered CSS value differs from the baseline set. */
export function deltaAgainst(
  baselineSet: ReadonlyMap<string, DtcgToken>,
  candidate: ReadonlyMap<string, DtcgToken>,
): Array<[string, DtcgToken]> {
  const delta: Array<[string, DtcgToken]> = [];
  for (const [path, token] of candidate) {
    if (token.$type === "typography-role") continue;
    const base = baselineSet.get(path);
    if (base === undefined || cssVarValue(base) !== cssVarValue(token)) {
      delta.push([path, token]);
    }
  }
  return delta.sort(([a], [b]) => a.localeCompare(b));
}
