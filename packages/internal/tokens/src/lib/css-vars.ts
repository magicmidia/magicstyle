import type { DtcgToken } from "./dtcg.ts";

/** `color.surface.default` -> `--ms-color-surface-default` (doc 06 §3). */
export function cssVarName(tokenPath: string): string {
  return `--ms-${tokenPath.replaceAll(".", "-").toLowerCase()}`;
}

export function cssVarValue(token: DtcgToken): string {
  const v = token.$value;
  if (token.$type === "shadow" && Array.isArray(v)) {
    return v.map((l) => `${l.offsetX} ${l.offsetY} ${l.blur} ${l.spread} ${l.color}`).join(", ");
  }
  if (token.$type === "fontFamily" && Array.isArray(v)) {
    return v.join(", ");
  }
  if (typeof v === "object" && v !== null && !Array.isArray(v)) {
    return JSON.stringify(v);
  }
  return String(v);
}

/** Emits the resolved token set as a CSS custom properties file. */
export function emitCss(tokens: ReadonlyMap<string, DtcgToken>, banner?: string): string {
  const lines: string[] = [];
  lines.push("/*");
  lines.push(" * Magic-Style Design Tokens — generated output. DO NOT EDIT.");
  lines.push(" * Source of truth: @magic-style-internal/tokens tokens/ (DTCG).");
  if (banner !== undefined) lines.push(` * ${banner}`);
  lines.push(" */");
  lines.push(":root {");
  for (const [path, token] of [...tokens].sort(([a], [b]) => a.localeCompare(b))) {
    if (token.$type === "typography-role") continue;
    const description = token.$description === undefined ? "" : ` /* ${token.$description} */`;
    lines.push(`  ${cssVarName(path)}: ${cssVarValue(token)};${description}`);
  }
  lines.push("}");
  return `${lines.join("\n")}\n`;
}
