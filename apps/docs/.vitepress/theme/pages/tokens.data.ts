import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

export interface TokenRow {
  /** Custom property name without the leading `--ms-`. */
  name: string;
  value: string;
  group: string;
}

export interface TokensData {
  primitives: TokenRow[];
  derived: TokenRow[];
}

declare const data: TokensData;
export { data };

const require = createRequire(import.meta.url);
const cssDist = dirname(require.resolve("@magic-style/css"));

const DECLARATION = /^\s*--ms-([\w-]+):\s*([^;]+);/;

function group(name: string): string {
  if (name.startsWith("color-")) {
    const [, family] = name.split("-");
    return `color-${family}`;
  }
  return name.split("-")[0]!;
}

function parse(block: string): TokenRow[] {
  return block
    .split("\n")
    .map((line) => DECLARATION.exec(line))
    .filter((match): match is RegExpExecArray => match !== null)
    .map(([, name, value]) => ({ name: name!, value: value!.trim(), group: group(name!) }));
}

/** Tokens from the built CSS: DTCG primitives and the derived (themed) layer. */
export default {
  watch: [],
  load(): TokensData {
    const tokens = readFileSync(join(cssDist, "tokens.css"), "utf8");
    const themes = readFileSync(join(cssDist, "themes.css"), "utf8");
    // The first rule of themes.css holds every derived token (see packages/internal/themes).
    const start = themes.indexOf("{", themes.indexOf("Derived tokens"));
    const derivedBlock = themes.slice(start + 1, themes.indexOf("}", start));
    return { primitives: parse(tokens), derived: parse(derivedBlock) };
  },
};
