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
          : `[data-ms-theme="${theme.dataMs}"]`;
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
