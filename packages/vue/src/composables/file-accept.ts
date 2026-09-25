/**
 * Mirrors the native `accept` attribute for files that bypass the picker (drag and drop):
 * extensions (".pdf"), exact MIME types ("image/png") and `type/*` wildcards.
 * An empty value, "*" or "*\/*" accepts everything.
 */
export function matchesAccept(file: File, accept: string | undefined): boolean {
  const tokens = (accept ?? "")
    .split(",")
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean);
  if (tokens.length === 0 || tokens.includes("*/*") || tokens.includes("*")) return true;
  const name = file.name.toLowerCase();
  const type = (file.type || "").toLowerCase();
  return tokens.some((token) => {
    if (token.startsWith(".")) return name.endsWith(token);
    if (token.endsWith("/*")) return type.startsWith(token.slice(0, -1));
    return type === token;
  });
}
