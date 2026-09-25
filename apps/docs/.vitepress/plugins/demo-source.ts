import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

type Strings = Record<string, Record<string, string>>;

const escapeAttr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * Turns a demo SFC into the code shown to readers for one locale: removes the
 * strings plumbing and inlines `t.key` references as literals.
 */
export function demoSource(file: string, locale: string): string {
  let code = readFileSync(file, "utf8");
  const stringsFile = join(dirname(file), "strings.json");
  if (!existsSync(stringsFile) || !/useDemoStrings/.test(code)) return code.trim() + "\n";
  const strings = (JSON.parse(readFileSync(stringsFile, "utf8")) as Strings)[locale] ?? {};
  const value = (key: string) => {
    const text = strings[key];
    if (text === undefined)
      throw new Error(`[demo] missing "${key}" for ${locale} in ${stringsFile}`);
    return text;
  };
  code = code
    .replace(/^import strings from "\.\/strings\.json";\n/m, "")
    .replace(/^import \{ useDemoStrings \} from "[^"]+";\n/m, "")
    .replace(/^const t = useDemoStrings\(strings\);\n/m, "");
  // Template: text interpolations become text, bound attributes become static ones,
  // other expressions get single-quoted literals (they sit inside "…" attributes).
  const start = code.indexOf("<template>");
  const end = code.lastIndexOf("</template>");
  const single = (text: string) =>
    `'${text.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;")}'`;
  const textNode = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  if (start !== -1 && end > start) {
    const template = code
      .slice(start, end)
      .replace(/\{\{\s*t\.(\w+)\s*\}\}/g, (_, key: string) => textNode(value(key)))
      .replace(
        /:([\w-]+)="t\.(\w+)"/g,
        (_, attr: string, key: string) => `${attr}="${escapeAttr(value(key))}"`,
      )
      .replace(/\bt\.(\w+)\b/g, (_, key: string) => single(value(key)));
    code = code.slice(0, start) + template + code.slice(end);
  }
  // Script: double-quoted literals (Prettier style).
  code = code
    .replace(/\bt\.(\w+)\b/g, (_, key: string) => JSON.stringify(value(key)))
    .replace(/<script setup lang="ts">\s*<\/script>\n*/g, "")
    .replace(/\n{3,}/g, "\n\n");
  return code.trim() + "\n";
}
