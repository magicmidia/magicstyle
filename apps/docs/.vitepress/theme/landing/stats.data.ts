import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { THEMES } from "../composables/themes.ts";
import { COMPONENTS } from "../../../catalog/components.ts";

export interface LandingStats {
  components: number;
  themes: number;
  tokens: number;
  languages: number;
  tests: number;
  version: string;
}

declare const data: LandingStats;
export { data };

const root = join(dirname(fileURLToPath(import.meta.url)), "../../../../..");

function countTokens(node: unknown): number {
  if (node === null || typeof node !== "object") return 0;
  if ("$value" in node) return 1;
  return Object.entries(node)
    .filter(([key]) => !key.startsWith("$"))
    .reduce((sum, [, child]) => sum + countTokens(child), 0);
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, out);
    else if (/\.test\.ts$/.test(entry.name)) out.push(path);
  }
  return out;
}

/** Numbers shown on the landing page, computed from the sources at build time. */
export default {
  watch: [],
  load(): LandingStats {
    const tokenDir = join(root, "packages/internal/tokens/src/tokens");
    const tokens = readdirSync(tokenDir)
      .filter((name) => name.endsWith(".json"))
      .reduce(
        (sum, name) => sum + countTokens(JSON.parse(readFileSync(join(tokenDir, name), "utf8"))),
        0,
      );
    const tests = walk(join(root, "packages")).reduce(
      (sum, file) =>
        sum +
        (readFileSync(file, "utf8").match(/^\s*(?:it|test)(?:\.each\([^)]*\))?\(/gm)?.length ?? 0),
      0,
    );
    const { version } = JSON.parse(
      readFileSync(join(root, "packages/vue/package.json"), "utf8"),
    ) as {
      version: string;
    };
    return {
      components: COMPONENTS.length,
      themes: THEMES.length,
      tokens,
      languages: 3,
      tests,
      version,
    };
  },
};
