/** Token types from the DTCG format (2025.10). */
export type DtcgTokenType =
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "cubicBezier"
  | "number"
  | "shadow"
  | "typography";

export const DTCG_TOKEN_TYPES: readonly DtcgTokenType[] = [
  "color",
  "dimension",
  "fontFamily",
  "fontWeight",
  "duration",
  "cubicBezier",
  "number",
  "shadow",
  "typography",
];

/** Vendor namespace for data DTCG has no field for (DTCG `$extensions`). */
export const EXTENSION_NAMESPACE = "dev.magic-style";

export interface ShadowLayer {
  readonly offsetX: string;
  readonly offsetY: string;
  readonly blur: string;
  readonly spread: string;
  readonly color: string;
}

/** DTCG typography composite. */
export interface DtcgTypography {
  readonly fontFamily: string;
  readonly fontSize: string;
  readonly fontWeight: string;
  readonly lineHeight: string;
  readonly letterSpacing: string;
}

export type DtcgValue =
  string | number | readonly string[] | readonly number[] | readonly ShadowLayer[] | DtcgTypography;

export interface DtcgToken {
  readonly $type: DtcgTokenType;
  readonly $value: DtcgValue;
  readonly $description?: string;
  readonly $extensions?: Readonly<Record<string, Readonly<Record<string, unknown>>>>;
}

export type TokenTree = {
  readonly [key: string]: DtcgToken | TokenTree;
};

export function isToken(node: unknown): node is DtcgToken {
  return typeof node === "object" && node !== null && "$type" in node && "$value" in node;
}

/** Depth-first flatten of a DTCG tree into dot-path -> token entries. */
export function flatten(
  tree: TokenTree,
  prefix = "",
  out: Map<string, DtcgToken> = new Map(),
): Map<string, DtcgToken> {
  for (const [key, node] of Object.entries(tree)) {
    if (key.startsWith("$")) continue;
    const path = prefix === "" ? key : `${prefix}.${key}`;
    if (isToken(node)) {
      out.set(path, node);
    } else if (typeof node === "object" && node !== null && !Array.isArray(node)) {
      flatten(node as TokenTree, path, out);
    }
  }
  return out;
}
