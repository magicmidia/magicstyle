import type { MsThemeValues } from "./theming.ts";

/** Inline style object setting contract variables (used by MsProvider/MsThemeScope `overrides`). */
export function msThemeOverridesToStyle(
  overrides: MsThemeValues | undefined,
): Record<string, string> {
  const style: Record<string, string> = {};
  for (const [key, value] of Object.entries(overrides ?? {})) {
    if (value !== undefined && value !== "") style[`--ms-${key}`] = value;
  }
  return style;
}
