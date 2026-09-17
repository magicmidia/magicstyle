import { cssVarName, cssVarValue, type DtcgToken } from "@magic-style-internal/tokens";
import { CONTRAST_HIGH, DIALS, THEMES, baseline, deltaAgainst, resolveTheme } from "./themes.ts";

const RADIUS_TOKEN_REF: Record<string, string> = {
  sharp: "--ms-radius-xs",
  subtle: "--ms-radius-sm",
  medium: "--ms-radius-md",
  rounded: "--ms-radius-lg",
};

function block(selector: string, entries: ReadonlyArray<[string, DtcgToken]>): string {
  if (entries.length === 0) return "";
  const lines = entries.map(([path, token]) => `  ${cssVarName(path)}: ${cssVarValue(token)};`);
  return `${selector} {\n${lines.join("\n")}\n}\n`;
}

/** Emits the full theme/color-mode/dial CSS layer (doc 07 §2 DOM contract). */
export function emitThemesCss(): string {
  const base = baseline();
  const parts: string[] = [];
  parts.push("/*");
  parts.push(" * Magic-Style Themes - generated output. DO NOT EDIT.");
  parts.push(" * Theme != color mode (doc 07 §1). Baseline magic/light lives in tokens.css :root.");
  parts.push(" */");

  /*
   * Cascade order matters:
   *   1. generic dark (default theme Magic applies by mode alone - §3)
   *   2. per-theme light overrides
   *   3. per-theme dark overrides (win over both above)
   */
  parts.push(
    block('[data-ms-color-mode="dark"]', deltaAgainst(base, resolveTheme("magic", "dark"))),
    // Restores baseline light values inside a light scope nested on a dark page.
    block('[data-ms-color-mode="light"]', deltaAgainst(resolveTheme("magic", "dark"), base)),
  );

  for (const theme of THEMES.filter((t) => t.name !== "magic")) {
    for (const mode of ["light", "dark"] as const) {
      const delta = deltaAgainst(base, resolveTheme(theme.name, mode));
      const selector =
        mode === "dark"
          ? `[data-ms-theme="${theme.dataMs}"][data-ms-color-mode="dark"]`
          : `[data-ms-theme="${theme.dataMs}"], [data-ms-theme="${theme.dataMs}"][data-ms-color-mode="light"]`;
      parts.push(block(selector, delta));
    }
  }

  for (const [name, dial] of Object.entries(DIALS.density)) {
    parts.push(
      block(`[data-ms-density="${name}"]`, [
        ["density.scale", { $type: "number", $value: dial.$value }],
      ]),
    );
  }

  for (const name of Object.keys(DIALS.radius)) {
    parts.push(
      block(`[data-ms-radius="${name}"]`, [
        ["control.radius", { $type: "dimension", $value: `var(${RADIUS_TOKEN_REF[name]})` }],
      ]),
    );
  }

  parts.push(
    block(
      '[data-ms-contrast="high"]',
      deltaAgainst(base, resolveTheme("magic", "light", CONTRAST_HIGH.light)),
    ),
  );
  const darkBase = resolveTheme("magic", "dark");
  parts.push(
    block(
      '[data-ms-color-mode="dark"][data-ms-contrast="high"]',
      deltaAgainst(darkBase, resolveTheme("magic", "dark", CONTRAST_HIGH.dark)),
    ),
  );

  parts.push(`/* Global Semantic Aliases & Compatibility Fallbacks */
:root {
  --ms-color-surface: var(--ms-color-surface-default);
  --ms-color-surface-subtle: var(--ms-color-surface-sunken);
  --ms-color-surface-hover: var(--ms-color-interactive-neutral-subtle);
  --ms-color-text: var(--ms-color-text-primary);
  --ms-color-text-default: var(--ms-color-text-primary);
  --ms-color-border: var(--ms-color-border-default);
  --ms-color-border-hover: var(--ms-color-border-strong);
  --ms-color-primary: var(--ms-color-brand-primary);
  --ms-color-secondary: var(--ms-color-brand-secondary);
  --ms-color-accent: var(--ms-color-brand-accent);
  --ms-color-neutral: var(--ms-color-brand-neutral);
  --ms-color-info: var(--ms-color-brand-info);
  --ms-color-success: var(--ms-color-brand-success);
  --ms-color-warning: var(--ms-color-brand-warning);
  --ms-color-danger: var(--ms-color-brand-danger);
  --ms-color-primary-subtle: var(--ms-color-interactive-primary-subtle);
  --ms-color-secondary-subtle: var(--ms-color-interactive-secondary-subtle);
  --ms-color-accent-subtle: var(--ms-color-interactive-accent-subtle);
  --ms-color-neutral-subtle: var(--ms-color-interactive-neutral-subtle);
  --ms-color-info-subtle: var(--ms-color-feedback-info-bg);
  --ms-color-success-subtle: var(--ms-color-feedback-success-bg);
  --ms-color-warning-subtle: var(--ms-color-feedback-warning-bg);
  --ms-color-danger-subtle: var(--ms-color-feedback-danger-bg);
  --ms-color-primary-default: var(--ms-color-interactive-primary);
  --ms-color-neutral-default: var(--ms-color-interactive-neutral);
  --ms-color-danger-default: var(--ms-color-feedback-danger-solid);
  --ms-color-success-default: var(--ms-color-feedback-success-solid);
  --ms-color-info-default: var(--ms-color-feedback-info-solid);
  --ms-color-warning-default: var(--ms-color-feedback-warning-solid);
  --ms-color-status-danger: var(--ms-color-feedback-danger-text);
  --ms-color-status-warning: var(--ms-color-feedback-warning-text);
  --ms-color-status-success: var(--ms-color-feedback-success-text);
  --ms-color-primary-text: var(--ms-color-interactive-primary-text);
  --ms-color-primary-hover: var(--ms-color-interactive-primary-hover);
  --ms-color-primary-active: var(--ms-color-interactive-primary-active);
  --ms-color-primary-contrast: var(--ms-color-text-on-accent);
  --ms-color-primary-hover-subtle: var(--ms-color-interactive-primary-subtle);
  --ms-color-neutral-hover: var(--ms-color-interactive-neutral-hover);
  --ms-color-neutral-contrast: var(--ms-color-interactive-neutral-fg);
  --ms-color-danger-hover: var(--ms-color-feedback-danger-solid-hover);
  --ms-color-danger-contrast: var(--ms-color-text-on-accent);
  --ms-color-success-hover: var(--ms-color-feedback-success-solid-hover);
  --ms-color-success-contrast: var(--ms-color-text-on-accent);
  --ms-color-text-disabled: var(--ms-color-text-muted);
  --ms-color-surface-disabled: var(--ms-color-surface-sunken);
  --ms-color-surface-elevated: var(--ms-color-surface-raised);
  --ms-color-backdrop-dock: rgba(15, 23, 42, 0.4);
  --ms-color-backdrop: rgba(15, 23, 42, 0.55);
  --ms-color-focus-ring: var(--ms-focus-ring-color);
}

[data-ms-color-mode="dark"] {
  --ms-color-backdrop: rgba(0, 0, 0, 0.75);
  --ms-color-backdrop-dock: rgba(0, 0, 0, 0.6);
}`);

  return `${parts.filter((part) => part !== "").join("\n")}`;
}

export function manifest(): string {
  return (
    JSON.stringify(
      {
        version: "0.1.0",
        domContract: {
          theme: "data-ms-theme",
          colorMode: "data-ms-color-mode",
          density: "data-ms-density",
          contrast: "data-ms-contrast",
          radius: "data-ms-radius",
        },
        themes: THEMES.map((t) => ({
          name: t.name,
          dataMs: t.dataMs,
          description: t.description,
          colorModes: ["light", "dark"],
          defaultMode: "light",
        })),
        dials: {
          density: Object.keys(DIALS.density),
          radius: Object.keys(DIALS.radius).map((name) => ({
            name,
            varRef: RADIUS_TOKEN_REF[name],
          })),
          contrast: ["default", "high"],
        },
        preferenceResolution: "system resolves to light|dark on DOM (doc 07 §3)",
      },
      null,
      2,
    ) + "\n"
  );
}
