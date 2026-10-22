/**
 * Validates demos/<slug>/: meta.json shape, referenced SFCs, strings.json key parity
 * and that every demo's displayed source renders in all 3 locales.
 * Usage: node scripts/check-demos.ts [slug ...]
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { demoSource } from "../.vitepress/plugins/demo-source.ts";
import { COMPONENTS } from "../catalog/components.ts";
import type { DemoMeta } from "../catalog/demo-meta.ts";

const LOCALES = ["pt-BR", "en-US", "es-ES"] as const;
const root = join(import.meta.dirname, "../demos");
const only = process.argv.slice(2);
const problems: string[] = [];
const slugs = new Set(COMPONENTS.map((c) => c.slug));

/** Blocks live in demos/blocks/<slug>/ and are not catalog components. */
export function blockSlugs(): string[] {
  const dir = join(root, "blocks");
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((d) => existsSync(join(dir, d, "meta.json")));
}

export function checkSlug(slug: string, options: { catalog?: boolean } = {}): string[] {
  const out: string[] = [];
  const dir = join(root, slug);
  if (options.catalog !== false && !slugs.has(slug)) out.push(`${slug}: not in catalog`);
  const metaFile = join(dir, "meta.json");
  if (!existsSync(metaFile)) return [...out, `${slug}: missing meta.json`];
  const meta = JSON.parse(readFileSync(metaFile, "utf8")) as DemoMeta;
  const localized = (value: unknown, where: string) => {
    for (const l of LOCALES) {
      const text = (value as Record<string, unknown> | undefined)?.[l];
      if (typeof text !== "string" || !text.trim()) out.push(`${slug}: ${where} missing ${l}`);
    }
  };
  if (meta.intro) localized(meta.intro, "intro");
  if (meta.a11y) localized(meta.a11y, "a11y");
  if (!Array.isArray(meta.demos) || meta.demos.length === 0) out.push(`${slug}: no demos`);
  const stringsFile = join(dir, "strings.json");
  if (existsSync(stringsFile)) {
    const strings = JSON.parse(readFileSync(stringsFile, "utf8")) as Record<
      string,
      Record<string, string>
    >;
    const keys = (l: string) =>
      Object.keys(strings[l] ?? {})
        .sort()
        .join(",");
    for (const l of LOCALES)
      if (keys(l) !== keys("pt-BR")) out.push(`${slug}: strings.json keys differ in ${l}`);
  }
  for (const demo of meta.demos ?? []) {
    localized(demo.title, `demo ${demo.file} title`);
    if (demo.description) localized(demo.description, `demo ${demo.file} description`);
    const file = join(dir, `${demo.file}.vue`);
    if (!existsSync(file)) {
      out.push(`${slug}: ${demo.file}.vue not found`);
      continue;
    }
    for (const l of LOCALES) {
      try {
        const code = demoSource(file, l);
        if (/\bt\.\w+/.test(code) || /useDemoStrings|strings\.json/.test(code)) {
          out.push(`${slug}/${demo.file}: displayed ${l} source still references strings`);
        }
      } catch (error) {
        out.push(`${slug}/${demo.file}: ${(error as Error).message}`);
      }
    }
  }
  const listed = new Set((meta.demos ?? []).map((d) => `${d.file}.vue`));
  for (const f of readdirSync(dir).filter((f) => f.endsWith(".vue"))) {
    if (!listed.has(f)) out.push(`${slug}: ${f} is not listed in meta.json`);
  }
  return out;
}

if (import.meta.main) {
  const targets =
    only.length > 0
      ? only
      : readdirSync(root).filter((d) => existsSync(join(root, d, "meta.json")));
  for (const slug of targets) problems.push(...checkSlug(slug));
  if (only.length === 0) {
    for (const block of blockSlugs())
      problems.push(...checkSlug(`blocks/${block}`, { catalog: false }));
  }
  if (problems.length > 0) {
    console.error(problems.join("\n"));
    process.exit(1);
  }
  console.log(`[check-demos] ${targets.length} component(s) OK`);
}
