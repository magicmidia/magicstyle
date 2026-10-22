const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);
// Browsers ignore ASCII whitespace/control chars when parsing a scheme ("java\tscript:").
// eslint-disable-next-line no-control-regex
const IGNORED_CHARS = /[\u0000- \u007f]/g;
const SCHEME = /^([a-z][a-z0-9+.-]*):/i;

/**
 * Returns the href when it is relative or uses an allowlisted protocol
 * (http, https, mailto, tel); otherwise undefined. Blocks javascript:,
 * data:, vbscript: and obfuscated variants (doc 15 — untrusted content).
 */
export function safeHref(href: string | null | undefined): string | undefined {
  if (href == null) return undefined;
  const trimmed = href.trim();
  if (trimmed === "") return undefined;
  const match = SCHEME.exec(trimmed.replace(IGNORED_CHARS, ""));
  if (!match) return trimmed;
  return SAFE_PROTOCOLS.has(`${match[1]!.toLowerCase()}:`) ? trimmed : undefined;
}

/**
 * Ensures target="_blank" links always carry noopener/noreferrer,
 * merged with any rel tokens provided by the consumer.
 */
export function safeRel(
  rel: string | null | undefined,
  target: string | null | undefined,
): string | undefined {
  const tokens = new Set((rel ?? "").split(/\s+/).filter(Boolean));
  if (target === "_blank") {
    tokens.add("noopener");
    tokens.add("noreferrer");
  }
  return tokens.size > 0 ? Array.from(tokens).join(" ") : undefined;
}
