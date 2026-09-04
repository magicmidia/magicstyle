#!/usr/bin/env node
/** Package contract check: every export points to an existing built file. */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, "..");
const manifest = JSON.parse(readFileSync(join(pkgRoot, "package.json"), "utf8"));

let failures = 0;
for (const [entry, target] of Object.entries(manifest.exports ?? {})) {
  const file = join(
    pkgRoot,
    typeof target === "string" ? target : (target.import ?? target.default),
  );
  const ok = existsSync(file);
  if (!ok) failures++;
  console.log(`  ${ok ? "OK  " : "MISS"} ${entry} -> ${target}`);
}

if (failures > 0) {
  console.error(`[check-package] ${failures} export(s) sem arquivo. Rode o build primeiro.`);
  process.exit(1);
}
console.log("[check-package] exports OK");
