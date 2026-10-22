#!/usr/bin/env node
/**
 * Declaration contract: every relative specifier in dist/**\/*.d.ts ends in ".js"
 * and resolves to an emitted .d.ts, so consumers on moduleResolution
 * bundler/node16/nodenext all get real component types (never `any`).
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : path.endsWith(".d.ts") ? [path] : [];
  });

const problems = [];
for (const file of walk(dist)) {
  const content = readFileSync(file, "utf8");
  if (content.includes("@magic-style-internal/")) {
    problems.push(`${file}: references a private @magic-style-internal package`);
  }
  for (const [, specifier] of content.matchAll(/["'](\.{1,2}\/[^"']+)["']/g)) {
    if (!specifier.endsWith(".js")) {
      problems.push(`${file}: "${specifier}" must end in .js`);
      continue;
    }
    const target = resolve(dirname(file), specifier.replace(/\.js$/, ".d.ts"));
    if (!existsSync(target)) problems.push(`${file}: "${specifier}" has no ${target}`);
  }
}

if (problems.length > 0) {
  console.error(`[check-dts] ${problems.length} unresolvable declaration import(s):`);
  for (const problem of problems.slice(0, 20)) console.error(`  ${problem}`);
  process.exit(1);
}
console.log("[check-dts] declaration imports OK");
