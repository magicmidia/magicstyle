#!/usr/bin/env node
/**
 * Prints the release notes of one version from the root CHANGELOG.md (Keep a Changelog
 * format), with relative links made absolute for GitHub Releases.
 *   node scripts/release-notes.mjs 0.2.0 [--repo owner/name]
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const version = process.argv[2]?.replace(/^v/, "");
const repoFlag = process.argv.indexOf("--repo");
const repo = repoFlag === -1 ? "magicmidia/magicstyle" : process.argv[repoFlag + 1];

if (!version || !/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version)) {
  console.error("usage: node scripts/release-notes.mjs <x.y.z> [--repo owner/name]");
  process.exit(1);
}

const changelog = readFileSync(join(root, "CHANGELOG.md"), "utf8");
const heading = new RegExp(`^## \\[${version.replace(/\./g, "\\.")}\\][^\\n]*\\n`, "m");
const match = heading.exec(changelog);
if (!match) {
  console.error(`[release-notes] no "## [${version}]" section in CHANGELOG.md`);
  process.exit(1);
}
const rest = changelog.slice(match.index + match[0].length);
const next = rest.search(/^## \[/m);
const notes = (next === -1 ? rest : rest.slice(0, next)).replace(/\n-{3,}\s*$/, "").trim();

const base = `https://github.com/${repo}/blob/v${version}/`;
const absolute = notes.replace(/\]\((?!https?:\/\/|#)([^)]+)\)/g, (_, path) => `](${base}${path})`);
process.stdout.write(`${absolute}\n`);
