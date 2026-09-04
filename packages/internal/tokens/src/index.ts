import type { DtcgToken } from "./lib/dtcg.ts";
import { cssVarName, cssVarValue, emitCss } from "./lib/css-vars.ts";
import { resolveAliases } from "./lib/resolve.ts";
import { tokenTree } from "./sources.ts";

export type {
  DtcgToken,
  DtcgTokenType,
  DtcgValue,
  ShadowLayer,
  TypographyRole,
  TokenTree,
} from "./lib/dtcg.ts";
export { flatten, isToken } from "./lib/dtcg.ts";
export { cssVarName, cssVarValue, emitCss };
export {
  MAX_ALIAS_DEPTH,
  resolveAliases,
  type Diagnostic,
  type ResolveResult,
} from "./lib/resolve.ts";

const resolved = resolveAliases(tokenTree);

if (resolved.diagnostics.length > 0) {
  throw new Error(
    `token graph invalid: ${resolved.diagnostics.length} diagnostic(s) — fix sources before use`,
  );
}

/** Fully resolved flat token set: dot-path -> token (aliases inlined). */
export const tokens: ReadonlyMap<string, DtcgToken> = resolved.tokens;

export { tokenTree };
