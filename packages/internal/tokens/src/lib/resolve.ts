import type { DtcgToken, TokenTree } from "./dtcg.ts";
import { flatten } from "./dtcg.ts";

export const MAX_ALIAS_DEPTH = 4;

const ALIAS_PATTERN = /^\{([a-z0-9.-]+)\}$/;

export interface Diagnostic {
  readonly path: string;
  readonly message: string;
}

export interface ResolveResult {
  readonly tokens: Map<string, DtcgToken>;
  readonly diagnostics: readonly Diagnostic[];
}

function lookupAlias(tree: TokenTree, alias: string): DtcgToken | undefined {
  const segments = alias.split(".");
  let current: unknown = tree;
  for (const segment of segments) {
    if (typeof current !== "object" || current === null || !(segment in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }
  return current !== null && typeof current === "object" && "$type" in current
    ? (current as DtcgToken)
    : undefined;
}

/**
 * Resolves `{alias}` references against the merged tree.
 * Guarantees: acyclic graph, bounded depth (doc 06 §9), clear diagnostics.
 */
export function resolveAliases(tree: TokenTree): ResolveResult {
  const flat = flatten(tree);
  const tokens = new Map<string, DtcgToken>();
  const diagnostics: Diagnostic[] = [];

  function resolveValue(path: string, value: unknown, chain: readonly string[]): unknown {
    if (typeof value === "string") {
      const match = ALIAS_PATTERN.exec(value);
      if (match === null) return value;
      const alias = match[1]!;
      if (chain.includes(alias)) {
        diagnostics.push({ path, message: `alias cycle: ${[...chain, alias].join(" -> ")}` });
        return value;
      }
      if (chain.length >= MAX_ALIAS_DEPTH) {
        diagnostics.push({
          path,
          message: `alias depth exceeds ${MAX_ALIAS_DEPTH}: ${chain.join(" -> ")}`,
        });
        return value;
      }
      const target = flat.get(alias) ?? lookupAlias(tree, alias);
      if (target === undefined) {
        diagnostics.push({ path, message: `unresolved alias: {${alias}}` });
        return value;
      }
      return resolveValue(`${path} -> {${alias}}`, target.$value, [...chain, alias]);
    }
    if (Array.isArray(value)) {
      return value.map((layer) => {
        if (typeof layer !== "object" || layer === null) return layer;
        const resolved: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(layer)) {
          resolved[k] = resolveValue(path, v, chain);
        }
        return resolved;
      });
    }
    if (typeof value === "object" && value !== null) {
      const resolved: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(value)) {
        resolved[k] = resolveValue(path, v, chain);
      }
      return resolved;
    }
    return value;
  }

  for (const [path, token] of flat) {
    tokens.set(path, {
      ...token,
      $value: resolveValue(path, token.$value, [path]) as DtcgToken["$value"],
    });
  }

  for (const diagnostic of diagnostics) {
    console.error(`[tokens] ${diagnostic.path}: ${diagnostic.message}`);
  }
  return { tokens, diagnostics };
}
