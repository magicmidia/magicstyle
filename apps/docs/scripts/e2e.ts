/**
 * Browser checks over the built site (`vitepress build` first):
 *  - smoke: every sitemap route loads with no console error, page error or hydration
 *    mismatch, and `<html lang>` matches the locale of the URL;
 *  - a11y: axe-core finds no serious/critical violation on the key pages, light and dark.
 *
 *   node scripts/e2e.ts            # all routes
 *   node scripts/e2e.ts --a11y-only
 *   node scripts/e2e.ts --only=/components/tabs,/en/   # smoke a subset, verbose console
 *
 * Chromium comes from playwright-core (`pnpm exec playwright-core install chromium`)
 * or from PLAYWRIGHT_CHROMIUM_EXECUTABLE.
 */
import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { createRequire } from "node:module";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type Browser, type Page } from "playwright-core";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "../.vitepress/dist");
const AXE_SOURCE = readFileSync(
  createRequire(import.meta.url).resolve("axe-core/axe.min.js"),
  "utf8",
);
const A11Y_PAGES = [
  "/",
  "/en/",
  "/es/",
  "/guide/introduction",
  "/components/button",
  "/components/dialog",
  "/components/select",
  "/en/components/table",
  "/es/components/tabs",
  "/themes",
  "/en/tokens",
];
const CONCURRENCY = 4;
/** Requests that fail on purpose (the avatar demo shows its fallback for a missing photo). */
const EXPECTED_FAILURES = [/\/avatars\/missing\.png$/];
const expected = (url: string) => EXPECTED_FAILURES.some((pattern) => pattern.test(url));
const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".xml": "application/xml",
  ".woff2": "font/woff2",
  ".png": "image/png",
};

if (!existsSync(join(DIST, "index.html"))) {
  console.error("[e2e] .vitepress/dist not found: run `vitepress build` first.");
  process.exit(1);
}

/** Static server with VitePress cleanUrls semantics (/a/b -> /a/b.html). */
function serve(): Promise<{ origin: string; close: () => void }> {
  const server = createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
    const base = normalize(join(DIST, pathname));
    if (!base.startsWith(DIST)) {
      res.writeHead(403).end();
      return;
    }
    const candidates = [base, `${base}.html`, join(base, "index.html")];
    const file = candidates.find((path) => existsSync(path) && statSync(path).isFile());
    if (!file) {
      res.writeHead(404, { "content-type": TYPES[".html"] });
      createReadStream(join(DIST, "404.html")).pipe(res);
      return;
    }
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
    createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address() as AddressInfo;
      resolve({ origin: `http://127.0.0.1:${port}`, close: () => server.close() });
    });
  });
}

function routesFromSitemap(): string[] {
  const xml = readFileSync(join(DIST, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]!).pathname);
}

function expectedLang(path: string): string {
  if (path.startsWith("/en/") || path === "/en") return "en-US";
  if (path.startsWith("/es/") || path === "/es") return "es-ES";
  return "pt-BR";
}

async function smoke(browser: Browser, origin: string, path: string): Promise<string[]> {
  const context = await browser.newContext();
  const page = await context.newPage();
  const problems: string[] = [];
  const pending: Promise<void>[] = [];
  page.on("console", (message) => {
    const text = message.text();
    if (verbose && message.type() === "warning") {
      // Resolve DOM handles so mismatch warnings show the offending markup.
      pending.push(
        Promise.all(
          message
            .args()
            .map((arg) =>
              arg.evaluate((value) =>
                value instanceof Element
                  ? value.outerHTML.slice(0, 400)
                  : value instanceof Node
                    ? JSON.stringify(value.textContent)
                    : String(value),
              ),
            ),
        ).then((parts) => {
          problems.push(`console: ${parts.join(" ")}`);
        }),
      );
    } else if (expected(message.location().url)) {
      return;
    } else if (message.type() === "error" || /hydration/i.test(text)) {
      problems.push(`console: ${text}`);
    }
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("response", (response) => {
    if (
      response.status() >= 400 &&
      response.url().startsWith(origin) &&
      !expected(response.url())
    ) {
      problems.push(`${response.status()}: ${response.url().slice(origin.length)}`);
    }
  });
  try {
    await page.goto(origin + path, { waitUntil: "networkidle" });
    const lang = await page.evaluate(() => document.documentElement.lang);
    if (lang !== expectedLang(path))
      problems.push(`html[lang]="${lang}", expected ${expectedLang(path)}`);
  } catch (error) {
    problems.push(`navigation: ${String(error)}`);
  }
  await Promise.allSettled(pending);
  await context.close();
  return problems;
}

async function audit(page: Page): Promise<string[]> {
  await page.addScriptTag({ content: AXE_SOURCE });
  const violations = await page.evaluate(async () => {
    const axe = (
      window as unknown as {
        axe: {
          run: (
            ctx: unknown,
            opts: unknown,
          ) => Promise<{
            violations: { id: string; impact: string | null; nodes: { target: string[] }[] }[];
          }>;
        };
      }
    ).axe;
    // VitePress chrome that the site does not own is excluded; demos and content are audited.
    const result = await axe.run(
      { exclude: [[".VPLocalSearchBox"]] },
      {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
      },
    );
    return result.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      targets: v.nodes.slice(0, 3).map((node) => node.target.join(" ")),
    }));
  });
  return violations
    .filter((v) => v.impact === "serious" || v.impact === "critical")
    .map((v) => `${v.impact} ${v.id}: ${v.targets.join(", ")}`);
}

async function a11y(
  browser: Browser,
  origin: string,
  path: string,
  dark: boolean,
): Promise<string[]> {
  const context = await browser.newContext({ colorScheme: dark ? "dark" : "light" });
  await context.addInitScript(
    (mode) => localStorage.setItem("vitepress-theme-appearance", mode),
    dark ? "dark" : "light",
  );
  const page = await context.newPage();
  await page.goto(origin + path, { waitUntil: "networkidle" });
  const problems = await audit(page);
  await context.close();
  return problems;
}

async function pool<T>(items: T[], worker: (item: T) => Promise<void>): Promise<void> {
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < items.length) await worker(items[next++]!);
    }),
  );
}

const { origin, close } = await serve();
const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
    : {},
);
const failures: string[] = [];

const only = process.argv.find((arg) => arg.startsWith("--only="))?.slice("--only=".length);
const verbose = only !== undefined;

if (!process.argv.includes("--a11y-only")) {
  const routes = only ? only.split(",") : routesFromSitemap();
  await pool(routes, async (path) => {
    for (const problem of await smoke(browser, origin, path))
      failures.push(`[smoke] ${path} ${problem}`);
  });
  console.log(`[e2e] smoke: ${routes.length} routes`);
}

const audits = (verbose ? [] : A11Y_PAGES).flatMap((path) => [
  { path, dark: false },
  { path, dark: true },
]);
await pool(audits, async ({ path, dark }) => {
  for (const problem of await a11y(browser, origin, path, dark)) {
    failures.push(`[axe ${dark ? "dark" : "light"}] ${path} ${problem}`);
  }
});
console.log(`[e2e] axe: ${audits.length} page/mode combinations`);

await browser.close();
close();

if (failures.length > 0) {
  console.error(`[e2e] ${failures.length} problem(s):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("[e2e] OK");
