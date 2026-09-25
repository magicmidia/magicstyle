#!/usr/bin/env node
/**
 * Single source for the numbers quoted in docs (components, themes, tokens).
 * `node scripts/stats.mjs` prints them; `--check` fails when README/package.json drift.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(root, path), "utf8");

const componentDirs = readdirSync(join(root, "packages/vue/src/components"), {
  withFileTypes: true,
}).filter((entry) => entry.isDirectory()).length;

const vueExports = new Set(
  [
    ...read("packages/vue/src/index.ts").matchAll(
      /as (Ms\w+) \} from "\.\/components\/[^"]+\.vue"/g,
    ),
  ].map((match) => match[1]),
).size;

const themes = readdirSync(join(root, "packages/internal/themes/src/themes")).filter((name) =>
  name.endsWith(".json"),
).length;

const countTokens = (node) => {
  if (node === null || typeof node !== "object") return 0;
  if ("$value" in node) return 1;
  return Object.entries(node)
    .filter(([key]) => !key.startsWith("$"))
    .reduce((sum, [, child]) => sum + countTokens(child), 0);
};
const tokenDir = join(root, "packages/internal/tokens/src/tokens");
const tokens = readdirSync(tokenDir)
  .filter((name) => name.endsWith(".json"))
  .reduce(
    (sum, name) => sum + countTokens(JSON.parse(readFileSync(join(tokenDir, name), "utf8"))),
    0,
  );

const cssVars = existsSync(join(root, "packages/internal/tokens/dist/tokens.css"))
  ? new Set(read("packages/internal/tokens/dist/tokens.css").match(/--ms-[\w-]+(?=\s*:)/g)).size
  : undefined;

const stats = { components: componentDirs, vueExports, themes, tokens, cssVars };

if (process.argv.includes("--check")) {
  const expectations = [
    ["README.md", new RegExp(`\\b${componentDirs} componentes`, "i")],
    ["README.md", new RegExp(`\\b${themes} temas`, "i")],
    ["README.md", new RegExp(`\\b${tokens} (design )?tokens`, "i")],
    ["package.json", new RegExp(`${componentDirs} accessible components`)],
    ["package.json", new RegExp(`${tokens} DTCG tokens`)],
  ];
  const drift = expectations.filter(([file, pattern]) => !pattern.test(read(file)));
  if (drift.length > 0) {
    console.error("[stats] docs out of sync with the code:", stats);
    for (const [file, pattern] of drift) console.error(`  ${file} should match ${pattern}`);
    process.exit(1);
  }
  console.log("[stats] docs in sync", stats);
} else {
  console.log(JSON.stringify(stats, null, 2));
}
