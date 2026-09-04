export type DtcgTokenType =
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "number"
  | "shadow"
  | "other"
  | "typography-role";

export interface ShadowLayer {
  readonly offsetX: string;
  readonly offsetY: string;
  readonly blur: string;
  readonly spread: string;
  readonly color: string;
}

export interface TypographyRole {
  readonly family: string;
  readonly size: string;
  readonly "line-height": string;
  readonly weight: string;
  readonly feature?: string;
  readonly tracking?: string;
}

export type DtcgValue = string | number | readonly ShadowLayer[] | TypographyRole;

export interface DtcgToken {
  readonly $type: DtcgTokenType;
  readonly $value: DtcgValue;
  readonly $description?: string;
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
