import type { TokenTree } from "@magic-style-internal/tokens";

type Mutable = Record<string, unknown>;

function isPlainObject(value: unknown): value is Mutable {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Recursive merge where overlay wins; arrays and primitives replace. */
export function deepMerge(base: unknown, overlay: unknown): unknown {
  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return overlay ?? base;
  }
  const out: Mutable = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    out[key] = key in base ? deepMerge(base[key], value) : value;
  }
  return out;
}

export function deepMergeAll(...layers: readonly unknown[]): unknown {
  return layers.reduce((acc, layer) => deepMerge(acc, layer), {});
}

export function asTree(value: unknown): TokenTree {
  return value as TokenTree;
}
