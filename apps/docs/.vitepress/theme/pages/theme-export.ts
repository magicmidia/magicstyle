/**
 * Theme export for design tools: the fully resolved contract of a generated theme
 * (base theme values + the generator's overrides), per color mode.
 *
 * - DTCG: W3C Design Tokens Community Group format (`$type` / `$value`), one group per
 *   mode plus `shared` for mode-independent values.
 * - Tokens Studio: token sets `global`, `light`, `dark` with `$metadata.tokenSetOrder`
 *   and `$themes`, importable in the Tokens Studio for Figma plugin.
 */
export interface ResolvedTheme {
  name: string;
  shared: Record<string, string>;
  light: Record<string, string>;
  dark: Record<string, string>;
}

type DtcgType = "color" | "dimension" | "number" | "fontFamily";

function dtcgType(key: string): DtcgType {
  if (key.startsWith("color-")) return "color";
  if (key === "depth") return "number";
  if (key.startsWith("font-")) return "fontFamily";
  return "dimension";
}

function dtcgValue(key: string, value: string): string | number | string[] {
  const type = dtcgType(key);
  if (type === "number") return Number(value);
  if (type === "fontFamily") return value.split(",").map((font) => font.trim());
  return value;
}

function group(values: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(values)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => [key, { $type: dtcgType(key), $value: dtcgValue(key, value) }]),
  );
}

export function toDtcg(theme: ResolvedTheme): Record<string, unknown> {
  return {
    $description: `Magic-Style theme "${theme.name}". Each key maps to the CSS variable --ms-<key>.`,
    [theme.name]: {
      shared: group(theme.shared),
      light: group(theme.light),
      dark: group(theme.dark),
    },
  };
}

const STUDIO_TYPE: Record<DtcgType, string> = {
  color: "color",
  dimension: "dimension",
  number: "number",
  fontFamily: "fontFamilies",
};

function studioSet(values: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(values)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => {
        const type = dtcgType(key);
        return [
          key,
          { $type: STUDIO_TYPE[type], $value: type === "number" ? Number(value) : value },
        ];
      }),
  );
}

export function toTokensStudio(theme: ResolvedTheme): Record<string, unknown> {
  return {
    global: studioSet(theme.shared),
    light: studioSet(theme.light),
    dark: studioSet(theme.dark),
    $themes: (["light", "dark"] as const).map((mode) => ({
      id: `${theme.name}-${mode}`,
      name: `${theme.name} / ${mode}`,
      selectedTokenSets: { global: "enabled", [mode]: "enabled" },
    })),
    $metadata: { tokenSetOrder: ["global", "light", "dark"] },
  };
}

/** Triggers a JSON file download in the browser. */
export function downloadJson(filename: string, data: unknown): void {
  const blob = new Blob([`${JSON.stringify(data, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
