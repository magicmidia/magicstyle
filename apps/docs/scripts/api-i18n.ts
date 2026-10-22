/**
 * Translations of the generated API descriptions (props, events, slots).
 *
 * English is the source (JSDoc in packages/vue). Each locale file maps
 * `Component.kind.name` to `{ text, source }`, where `source` is the English text the
 * translation was made from; when the JSDoc changes the entry becomes stale and the
 * page shows the English text with an "EN" badge.
 *
 *   node scripts/api-i18n.ts --check            # fail on missing or stale entries
 *   node scripts/api-i18n.ts --todo pt-BR       # print the entries to (re)translate as JSON
 *   node scripts/api-i18n.ts --apply pt-BR f.json  # merge [{component, kind, name, english, text}]
 *
 * Run `node scripts/gen-api.ts` first.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const API_LOCALES = ["pt-BR", "es-ES"] as const;
export type ApiLocale = (typeof API_LOCALES)[number];
type Kind = "props" | "events" | "slots";
type Entry = { text: string; source: string };
export type ApiOverrides = Record<string, Partial<Record<Kind, Record<string, Entry>>>>;

const ROOT = join(import.meta.dirname, "..");
const GENERATED = join(ROOT, ".vitepress/generated/api");

interface Described {
  component: string;
  kind: Kind;
  name: string;
  english: string;
}

/** Every non-empty English description in the generated API JSON. */
export function englishDescriptions(): Described[] {
  if (!existsSync(GENERATED)) throw new Error("[api-i18n] run `node scripts/gen-api.ts` first");
  const out: Described[] = [];
  for (const file of readdirSync(GENERATED)
    .filter((f) => f.endsWith(".json"))
    .sort()) {
    const doc = JSON.parse(readFileSync(join(GENERATED, file), "utf8")) as Record<
      Kind,
      { name: string; description: string }[]
    > & { name: string };
    for (const kind of ["props", "events", "slots"] as const) {
      for (const item of doc[kind] ?? []) {
        if (item.description.trim()) {
          out.push({ component: doc.name, kind, name: item.name, english: item.description });
        }
      }
    }
  }
  return out;
}

export function loadOverrides(locale: ApiLocale): ApiOverrides {
  return JSON.parse(readFileSync(join(ROOT, "i18n/api", `${locale}.json`), "utf8")) as ApiOverrides;
}

/** Descriptions with no translation, or whose translation was made from older English. */
export function pendingTranslations(locale: ApiLocale): Described[] {
  const overrides = loadOverrides(locale);
  return englishDescriptions().filter((d) => {
    const entry = overrides[d.component]?.[d.kind]?.[d.name];
    return !entry || entry.source !== d.english || !entry.text.trim();
  });
}

/** Merges translated entries; `source` is the English text they were translated from. */
export function applyTranslations(
  locale: ApiLocale,
  entries: (Described & { text: string })[],
): number {
  const overrides = loadOverrides(locale);
  for (const entry of entries) {
    const component = (overrides[entry.component] ??= {});
    const kind = (component[entry.kind] ??= {});
    kind[entry.name] = { text: entry.text.trim(), source: entry.english };
  }
  const sorted = Object.fromEntries(
    Object.keys(overrides)
      .sort()
      .map((name) => {
        const kinds = overrides[name]!;
        return [
          name,
          Object.fromEntries(
            (["props", "events", "slots"] as const)
              .filter((k) => kinds[k])
              .map((k) => [
                k,
                Object.fromEntries(
                  Object.keys(kinds[k]!)
                    .sort()
                    .map((n) => [n, kinds[k]![n]]),
                ),
              ]),
          ),
        ];
      }),
  );
  writeFileSync(join(ROOT, "i18n/api", `${locale}.json`), `${JSON.stringify(sorted, null, 2)}\n`);
  return entries.length;
}

if (import.meta.main) {
  const todo = process.argv.indexOf("--todo");
  const apply = process.argv.indexOf("--apply");
  if (apply !== -1) {
    const locale = process.argv[apply + 1] as ApiLocale;
    const file = process.argv[apply + 2];
    if (!API_LOCALES.includes(locale) || !file) {
      throw new Error("[api-i18n] usage: --apply <pt-BR|es-ES> <entries.json>");
    }
    const entries = JSON.parse(readFileSync(file, "utf8")) as (Described & { text: string })[];
    console.log(`[api-i18n] ${locale}: merged ${applyTranslations(locale, entries)} entries`);
  } else if (todo !== -1) {
    const locale = process.argv[todo + 1] as ApiLocale;
    if (!API_LOCALES.includes(locale))
      throw new Error(`[api-i18n] locale: ${API_LOCALES.join(", ")}`);
    console.log(JSON.stringify(pendingTranslations(locale), null, 2));
  } else {
    const total = englishDescriptions().length;
    let failed = false;
    for (const locale of API_LOCALES) {
      const pending = pendingTranslations(locale);
      console.log(`[api-i18n] ${locale}: ${total - pending.length}/${total} translated`);
      if (pending.length > 0) failed = true;
    }
    if (process.argv.includes("--check") && failed) process.exit(1);
  }
}
