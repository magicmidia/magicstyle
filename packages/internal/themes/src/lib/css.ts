import { THEME_CONTRACT, type ColorMode, type ThemeSource, type ThemeValues } from "./contract.ts";
import { DERIVED, TONE_DERIVED, exprToCss } from "./derive.ts";
import { CONTRACT_COLOR_ROLES } from "./contract.ts";
import { DEFAULT_THEME, DIALS, THEMES, resolveThemeMode } from "./themes.ts";

/** Selectors on which derived tokens re-resolve (so nested theme scopes work). */
export const SCOPE_SELECTOR = ":root, [data-ms-theme], [data-ms-color-mode], [data-ms-contrast]";

const RADIUS_DIAL: Record<string, string> = {
  sharp: "calc(var(--ms-radius-selector) / 2)",
  subtle: "var(--ms-radius-selector)",
  medium: "var(--ms-radius-field)",
  rounded: "var(--ms-radius-box)",
};

function rule(
  selectors: readonly string[],
  declarations: ReadonlyArray<readonly [string, string]>,
  indent = "",
): string {
  const body = declarations.map(([name, value]) => `${indent}  ${name}: ${value};`).join("\n");
  return `${indent}${selectors.join(`,\n${indent}`)} {\n${body}\n${indent}}\n`;
}

function modeDeclarations(scheme: ColorMode, values: ThemeValues, extras: ThemeValues) {
  const contract = THEME_CONTRACT.filter((entry) => entry.key in values).map(
    (entry) => [`--ms-${entry.key}`, values[entry.key]!] as const,
  );
  const extra = Object.entries(extras).map(([name, value]) => [`--ms-${name}`, value] as const);
  return [["color-scheme", scheme] as const, ...contract, ...extra];
}

interface ThemeSelectors {
  light: string[];
  dark: string[];
  system: string[];
}

function selectorsFor(name: string): ThemeSelectors {
  if (name === DEFAULT_THEME) {
    return {
      light: [
        ":root",
        `[data-ms-theme="${name}"]`,
        '[data-ms-color-mode="light"]',
        '[data-ms-color-mode="system"]',
      ],
      dark: ['[data-ms-color-mode="dark"]', `[data-ms-theme="${name}"][data-ms-color-mode="dark"]`],
      system: [
        '[data-ms-color-mode="system"]',
        `[data-ms-theme="${name}"][data-ms-color-mode="system"]`,
      ],
    };
  }
  const t = `[data-ms-theme="${name}"]`;
  return {
    light: [t, `${t}[data-ms-color-mode="light"]`, `${t}[data-ms-color-mode="system"]`],
    dark: [`${t}[data-ms-color-mode="dark"]`],
    system: [`${t}[data-ms-color-mode="system"]`],
  };
}

/**
 * CSS for one theme: light, dark and OS-driven ("system") blocks. Works for
 * official themes and user themes (`extends` defaults to "magic").
 */
export function themeToCss(
  theme: ThemeSource,
  sources: readonly ThemeSource[] = [theme],
): { base: string; system: string } {
  const light = resolveThemeMode(theme.name, "light", sources);
  const dark = resolveThemeMode(theme.name, "dark", sources);
  const sel = selectorsFor(theme.name);
  return {
    base:
      `/* ${theme.label} — ${theme.description} */\n` +
      rule(sel.light, modeDeclarations("light", light.values, light.extras)) +
      rule(sel.dark, modeDeclarations("dark", dark.values, dark.extras)),
    system: rule(sel.system, modeDeclarations("dark", dark.values, dark.extras), "  "),
  };
}

/** Full themes.css: derived layer, every official theme, contrast and dials. */
export function emitThemesCss(): string {
  const derived = rule(
    SCOPE_SELECTOR.split(", "),
    DERIVED.map(([name, expr]) => [`--ms-${name}`, exprToCss(expr)] as const),
  );
  const themes = THEMES.map((theme) => themeToCss(theme, THEMES));

  const toneEngine = [
    rule(
      [':where([class*="ms-"], [data-tone])'],
      TONE_DERIVED.map(([name, expr]) => [`--ms-${name}`, exprToCss(expr)] as const),
    ),
    ...CONTRACT_COLOR_ROLES.map((role) =>
      rule(
        [`[data-tone="${role}"]`],
        [
          ["--ms-tone", `var(--ms-color-${role})`],
          ["--ms-tone-content", `var(--ms-color-${role}-content)`],
          // Neutral has no hue (it can be a light gray): tinted text uses the ink.
          ...(role === "neutral" ? [["--ms-tone-text-mix", "0%"] as const] : []),
        ],
      ),
    ),
  ];

  const highContrast = rule(
    ['[data-ms-contrast="high"]'],
    [
      ["--ms-color-text-secondary", "var(--ms-color-base-content)"],
      [
        "--ms-color-text-muted",
        "color-mix(in oklab, var(--ms-color-base-content) 88%, var(--ms-color-base-100))",
      ],
      [
        "--ms-color-text-subtle",
        "color-mix(in oklab, var(--ms-color-base-content) 80%, var(--ms-color-base-100))",
      ],
      [
        "--ms-color-border-default",
        "color-mix(in oklab, var(--ms-color-base-content) 60%, var(--ms-color-base-100))",
      ],
      [
        "--ms-color-border-subtle",
        "color-mix(in oklab, var(--ms-color-base-content) 45%, var(--ms-color-base-100))",
      ],
    ],
  );

  const dials = [
    ...Object.entries(DIALS.density).map(([name, dial]) =>
      rule([`[data-ms-density="${name}"]`], [["--ms-density-scale", String(dial.$value)]]),
    ),
    // Doubled attribute: beats `[data-ms-theme][data-ms-color-mode]` theme blocks.
    ...Object.entries(RADIUS_DIAL).map(([name, value]) =>
      rule([`[data-ms-radius="${name}"][data-ms-radius]`], [["--ms-radius-control", value]]),
    ),
  ];

  return [
    "/*",
    " * Magic-Style Themes - generated from packages/internal/themes/src/themes/*.json. DO NOT EDIT.",
    " * A theme only sets the contract (--ms-color-*, --ms-radius-*, --ms-depth, --ms-font-*);",
    " * every other token is derived below and re-resolves on each theme scope.",
    " */",
    "",
    "/* Derived tokens (computed from the theme contract) */",
    derived,
    "/* Tone engine: [data-tone] or a component sets --ms-tone/--ms-tone-content; states derive here */",
    ...toneEngine,
    ...themes.map((t) => t.base),
    '/* data-ms-color-mode="system": follows the OS preference without JavaScript */',
    `@media (prefers-color-scheme: dark) {\n${themes.map((t) => t.system).join("\n")}}\n`,
    "/* Accessibility and density dials */",
    highContrast,
    ...dials,
  ].join("\n");
}

export function manifest(): string {
  return (
    JSON.stringify(
      {
        version: "0.2.0",
        domContract: {
          theme: "data-ms-theme",
          colorMode: "data-ms-color-mode",
          density: "data-ms-density",
          contrast: "data-ms-contrast",
          radius: "data-ms-radius",
        },
        contract: THEME_CONTRACT.map(({ key, kind, required, description }) => ({
          variable: `--ms-${key}`,
          kind,
          required,
          description,
        })),
        themes: THEMES.map((t) => ({
          name: t.name,
          label: t.label,
          description: t.description,
          colorModes: ["light", "dark"],
        })),
        dials: {
          density: Object.keys(DIALS.density),
          radius: Object.keys(RADIUS_DIAL),
          contrast: ["default", "high"],
          colorMode: ["light", "dark", "system"],
        },
      },
      null,
      2,
    ) + "\n"
  );
}
