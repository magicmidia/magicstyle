import {
  validateThemeValues,
  type ColorMode,
  type ThemeSource,
  type ThemeValues,
} from "./contract.ts";
import { OPTIONAL_DEFAULTS } from "./derive.ts";
import magic from "../themes/magic.json" with { type: "json" };
import graphite from "../themes/graphite.json" with { type: "json" };
import shadcn from "../themes/shadcn.json" with { type: "json" };
import bootstrap from "../themes/bootstrap.json" with { type: "json" };
import material from "../themes/material.json" with { type: "json" };
import github from "../themes/github.json" with { type: "json" };
import linear from "../themes/linear.json" with { type: "json" };
import vercel from "../themes/vercel.json" with { type: "json" };
import supabase from "../themes/supabase.json" with { type: "json" };
import nord from "../themes/nord.json" with { type: "json" };
import dialsJson from "../dials.json" with { type: "json" };

export type { ColorMode } from "./contract.ts";

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

/** Official themes; "magic" is the default and must define every required key. */
export const THEMES: readonly ThemeSource[] = [
  magic,
  graphite,
  shadcn,
  bootstrap,
  material,
  github,
  linear,
  vercel,
  supabase,
  nord,
] as ThemeSource[];

export const DEFAULT_THEME = "magic";
export const DIALS = dialsJson;

export interface ResolvedMode {
  /** Complete contract values (optional keys filled with their defaults). */
  readonly values: ThemeValues;
  /** Signature tokens outside the contract (full names without --ms-). */
  readonly extras: ThemeValues;
}

/**
 * Resolves one mode of a theme: parent → shared → mode. Every theme except
 * "magic" inherits from `extends` (default "magic"), so a user theme only
 * needs the keys it changes.
 */
export function resolveThemeMode(
  name: string,
  mode: ColorMode,
  sources: readonly ThemeSource[] = THEMES,
  seen: readonly string[] = [],
): ResolvedMode {
  const theme = sources.find((t) => t.name === name) ?? THEMES.find((t) => t.name === name);
  if (!theme) throw new Error(`unknown theme "${name}"`);
  if (seen.includes(name))
    throw new Error(`theme inheritance cycle: ${[...seen, name].join(" -> ")}`);
  const parentName = theme.extends ?? (name === DEFAULT_THEME ? undefined : DEFAULT_THEME);
  const parent = parentName
    ? resolveThemeMode(parentName, mode, sources, [...seen, name])
    : { values: {}, extras: {} };
  const values: Record<string, string> = { ...parent.values, ...theme.shared, ...theme[mode] };
  for (const [key, fallback] of Object.entries(OPTIONAL_DEFAULTS)) values[key] ??= fallback;
  const extras = { ...parent.extras, ...theme.extras?.shared, ...theme.extras?.[mode] };
  return { values, extras };
}

/** Validation problems for every theme/mode (empty = all complete and known). */
export function validateThemes(sources: readonly ThemeSource[] = THEMES): string[] {
  return sources.flatMap((theme) =>
    (["light", "dark"] as const).flatMap((mode) =>
      validateThemeValues(
        resolveThemeMode(theme.name, mode, sources).values,
        `${theme.name}/${mode}`,
      ),
    ),
  );
}
