import {
  cssVarValue,
  resolveAliases,
  tokenTree,
  type DtcgToken,
} from "@magic-style-internal/tokens";
import { asTree, deepMergeAll } from "./merge.ts";

export type ColorMode = "light" | "dark";
export type ThemeName =
  | "magic"
  | "graphite"
  | "shadcn"
  | "bootstrap"
  | "material"
  | "github"
  | "linear"
  | "vercel"
  | "supabase"
  | "nord";

export interface ThemeDefinition {
  readonly name: ThemeName;
  readonly dataMs: string;
  readonly description: string;
  readonly overrides: unknown;
  readonly darkOverrides?: unknown;
}

import graphiteOverrides from "../theme-graphite.json" with { type: "json" };
import shadcnOverrides from "../theme-shadcn.json" with { type: "json" };
import shadcnDarkOverrides from "../theme-shadcn-dark.json" with { type: "json" };
import bootstrapOverrides from "../theme-bootstrap.json" with { type: "json" };
import bootstrapDarkOverrides from "../theme-bootstrap-dark.json" with { type: "json" };
import materialOverrides from "../theme-material.json" with { type: "json" };
import materialDarkOverrides from "../theme-material-dark.json" with { type: "json" };
import githubOverrides from "../theme-github.json" with { type: "json" };
import githubDarkOverrides from "../theme-github-dark.json" with { type: "json" };
import linearOverrides from "../theme-linear.json" with { type: "json" };
import linearDarkOverrides from "../theme-linear-dark.json" with { type: "json" };
import vercelOverrides from "../theme-vercel.json" with { type: "json" };
import vercelDarkOverrides from "../theme-vercel-dark.json" with { type: "json" };
import supabaseOverrides from "../theme-supabase.json" with { type: "json" };
import supabaseDarkOverrides from "../theme-supabase-dark.json" with { type: "json" };
import nordOverrides from "../theme-nord.json" with { type: "json" };
import nordDarkOverrides from "../theme-nord-dark.json" with { type: "json" };
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
  {
    name: "shadcn",
    dataMs: "shadcn",
    description:
      "Minimalist zinc monochrome design inspired by shadcn/ui. Clean borders, stark primary contrast, subtle accents.",
    overrides: shadcnOverrides,
    darkOverrides: shadcnDarkOverrides,
  },
  {
    name: "bootstrap",
    dataMs: "bootstrap",
    description:
      "Classic enterprise UI inspired by Bootstrap 5. Vibrant royal blue primary, semantic tones, and balanced radius.",
    overrides: bootstrapOverrides,
    darkOverrides: bootstrapDarkOverrides,
  },
  {
    name: "material",
    dataMs: "material",
    description:
      "Tonal surfaces and expressive palettes inspired by Material Design 3 (M3 / MUI). Soft rounded contours and rich tonal depth.",
    overrides: materialOverrides,
    darkOverrides: materialDarkOverrides,
  },
  {
    name: "github",
    dataMs: "github",
    description:
      "Developer-first aesthetic inspired by GitHub Primer. Crisp borders, iconic GitHub green primary actions, and deep slate dark mode.",
    overrides: githubOverrides,
    darkOverrides: githubDarkOverrides,
  },
  {
    name: "linear",
    dataMs: "linear",
    description:
      "Sleek, ultra-modern product design inspired by Linear and Raycast. Deep obsidian surfaces, radiant electric indigo accents, and hairline borders.",
    overrides: linearOverrides,
    darkOverrides: linearDarkOverrides,
  },
  {
    name: "vercel",
    dataMs: "vercel",
    description:
      "Hyper-minimalist monochrome design inspired by Vercel Geist. High-contrast pure black and white, razor-sharp geometric precision.",
    overrides: vercelOverrides,
    darkOverrides: vercelDarkOverrides,
  },
  {
    name: "supabase",
    dataMs: "supabase",
    description:
      "Developer platform aesthetic inspired by Supabase. Dark emerald neon accents, modern dark slate surfaces, and clean dashboard typography.",
    overrides: supabaseOverrides,
    darkOverrides: supabaseDarkOverrides,
  },
  {
    name: "nord",
    dataMs: "nord",
    description:
      "Arctic, north-bluish aesthetic based on the Nord palette. Calm polar night surfaces, cool snow storm light mode, and frost cyan accents.",
    overrides: nordOverrides,
    darkOverrides: nordDarkOverrides,
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
  if (mode === "dark" && definition.darkOverrides !== undefined) {
    layers.push(definition.darkOverrides);
  }
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
