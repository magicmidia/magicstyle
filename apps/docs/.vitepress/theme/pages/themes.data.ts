import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { THEMES } from "../composables/themes.ts";

export interface ThemeInfo {
  name: string;
  label: string;
  shared: Record<string, string>;
  light: Record<string, string>;
  dark: Record<string, string>;
}

declare const data: ThemeInfo[];
export { data };

const themesDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../../../../packages/internal/themes/src/themes",
);

/** The official theme sources, in the site's THEMES order. */
export default {
  watch: [join(themesDir, "*.json")],
  load(): ThemeInfo[] {
    const byName = new Map(
      readdirSync(themesDir)
        .filter((file) => file.endsWith(".json"))
        .map((file) => {
          const json = JSON.parse(readFileSync(join(themesDir, file), "utf8")) as ThemeInfo;
          return [json.name, json] as const;
        }),
    );
    return THEMES.map(({ name }) => {
      const theme = byName.get(name);
      if (!theme) throw new Error(`[themes.data] missing theme source: ${name}`);
      return {
        name,
        label: theme.label,
        shared: theme.shared,
        light: theme.light,
        dark: theme.dark,
      };
    });
  },
};
