/**
 * Generates .vitepress/generated/api/<Component>.json from the library source with
 * vue-component-meta (props, events, slots, exposed), so API tables never drift.
 * Usage: node scripts/gen-api.ts [--if-stale] [--strict]
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createChecker } from "vue-component-meta";

const here = dirname(fileURLToPath(import.meta.url));
const vueRoot = join(here, "../../../packages/vue");
const srcDir = join(vueRoot, "src");
const outDir = join(here, "../.vitepress/generated/api");
const args = new Set(process.argv.slice(2));

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const sources = walk(join(srcDir, "components")).filter((f) => /\.(vue|ts)$/.test(f));
const hash = createHash("sha256");
for (const file of sources.sort()) hash.update(relative(srcDir, file)).update(readFileSync(file));
const digest = hash.digest("hex");
const hashFile = join(outDir, ".hash");

if (args.has("--if-stale") && existsSync(hashFile) && readFileSync(hashFile, "utf8") === digest) {
  console.log("[gen-api] up to date");
  process.exit(0);
}

const index = readFileSync(join(srcDir, "index.ts"), "utf8");
const exports = [
  ...index.matchAll(/export \{ default as (Ms\w+) \} from "\.\/(components\/[^"]+\.vue)"/g),
].map(([, name, path]) => ({ name: name!, file: join(srcDir, path!) }));

const checker = createChecker(join(vueRoot, "tsconfig.json"), {
  forceUseTs: true,
  schema: true,
  printer: { newLine: 1 },
});

interface ApiProp {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
  deprecated?: string;
}
interface ApiDoc {
  name: string;
  props: ApiProp[];
  events: { name: string; signature: string; description: string }[];
  slots: { name: string; type: string; description: string }[];
  exposed: { name: string; type: string; description: string }[];
}

const clean = (text: string) => text.replace(/\s+/g, " ").trim();

/** Expands aliases of literal unions (e.g. MsButtonShape -> "square" | "rounded" | …). */
function enumMembers(schema: unknown): string[] | undefined {
  if (typeof schema === "string") return [schema];
  const s = schema as { kind?: string; schema?: unknown[] } | undefined;
  if (s?.kind !== "enum" || !Array.isArray(s.schema)) return undefined;
  const out: string[] = [];
  for (const member of s.schema) {
    const nested = enumMembers(member);
    if (!nested) return undefined;
    out.push(...nested);
  }
  return out;
}

function displayType(type: string, schema: unknown): string {
  const members = enumMembers(schema)?.filter((m) => m !== "undefined");
  if (
    members &&
    members.length > 0 &&
    members.length <= 12 &&
    members.every((m) => !/[{(]/.test(m))
  ) {
    const unique = [...new Set(members)];
    if (unique.includes("false") && unique.includes("true")) {
      unique.splice(unique.indexOf("false"), 1, "boolean");
      unique.splice(unique.indexOf("true"), 1);
    }
    return unique.join(" | ");
  }
  return clean(type.replace(/ \| undefined$/, ""));
}

const byName = <T extends { name: string }>(a: T, b: T) => a.name.localeCompare(b.name);
const missing: string[] = [];

mkdirSync(outDir, { recursive: true });
for (const { name, file } of exports) {
  const meta = checker.getComponentMeta(file);
  const tagDefault = (tags: { name: string; text?: string }[]) =>
    tags.find((t) => t.name === "default")?.text?.trim();
  const doc: ApiDoc = {
    name,
    props: meta.props
      .filter((p) => !p.global)
      .map((p) => {
        const prop: ApiProp = {
          name: p.name,
          type: displayType(p.type, p.schema),
          required: p.required,
          description: clean(p.description),
        };
        const def = tagDefault(p.tags) ?? p.default;
        if (def !== undefined && def !== "undefined") prop.default = clean(def);
        const deprecated = p.tags.find((t) => t.name === "deprecated");
        if (deprecated) prop.deprecated = deprecated.text ?? "";
        if (!prop.description) missing.push(`${name}.${p.name}`);
        return prop;
      })
      .sort(byName),
    events: meta.events
      .map((e) => ({
        name: e.name,
        signature: clean(e.signature),
        description: clean(e.description),
      }))
      .sort(byName),
    slots: meta.slots
      .map((s) => ({ name: s.name, type: clean(s.type), description: clean(s.description) }))
      .sort(byName),
    exposed: meta.exposed
      .filter((x) => !x.name.startsWith("$") && !/^[A-Z]/.test(x.name))
      .filter((x) => !meta.props.some((p) => p.name === x.name))
      .map((x) => ({ name: x.name, type: clean(x.type), description: clean(x.description) }))
      .sort(byName),
  };
  writeFileSync(join(outDir, `${name}.json`), `${JSON.stringify(doc, null, 2)}\n`);
}
writeFileSync(hashFile, digest);

console.log(`[gen-api] ${exports.length} components -> ${relative(process.cwd(), outDir)}`);
if (missing.length > 0) {
  console.log(`[gen-api] ${missing.length} props without description`);
  if (args.has("--strict")) {
    console.error(missing.join("\n"));
    process.exit(1);
  }
}
