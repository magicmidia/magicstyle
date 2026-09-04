import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { emitCss } from "./lib/css-vars.ts";
import { resolveAliases } from "./lib/resolve.ts";
import { tokenTree } from "./sources.ts";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "..", "dist");

const { tokens, diagnostics } = resolveAliases(tokenTree);
if (diagnostics.length > 0) {
  console.error(`[compile] aborting: ${diagnostics.length} diagnostic(s)`);
  for (const d of diagnostics) console.error(`  - ${d.path}: ${d.message}`);
  process.exit(1);
}

mkdirSync(dist, { recursive: true });

writeFileSync(join(dist, "tokens.css"), emitCss(tokens, `Compiled ${tokens.size} tokens.`), "utf8");
writeFileSync(
  join(dist, "tokens.json"),
  JSON.stringify(
    Object.fromEntries(
      [...tokens].map(([path, token]) => [path, { type: token.$type, value: token.$value }]),
    ),
    null,
    2,
  ) + "\n",
  "utf8",
);

console.log(`[compile] OK — ${tokens.size} tokens -> dist/tokens.css, dist/tokens.json`);
