#!/usr/bin/env node
/**
 * Interactive static & live-reload server for the preview app (dev only).
 * Resolves packages/css, packages/vue, and vendor modules (Vue 3 ESM) with SSE LiveReload.
 */
import { createServer } from "node:http";
import { readFile, realpath, stat } from "node:fs/promises";
import { existsSync, watch } from "node:fs";
import { extname, join, dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const port = Number(process.env.PORT ?? 4173);
// Loopback by default. To expose on the network set HOST (e.g. 0.0.0.0) and list the
// hostnames/IPs clients will use in PREVIEW_ALLOWED_HOSTS (comma-separated).
const host = process.env.HOST ?? "127.0.0.1";
const allowedHostnames = new Set(["localhost", "127.0.0.1", "[::1]"]);
for (const extra of (process.env.PREVIEW_ALLOWED_HOSTS ?? "").split(",")) {
  if (extra.trim()) allowedHostnames.add(extra.trim().toLowerCase());
}
if (host !== "127.0.0.1" && host !== "localhost" && host !== "0.0.0.0" && host !== "::") {
  allowedHostnames.add(host.toLowerCase());
}

/** URL prefix → directories it may be served from (first match wins). Nothing else is reachable. */
const mounts = [
  ["/css/", [join(root, "packages", "css", "dist"), join(root, "packages", "css", "src")]],
  ["/vue/", [join(root, "packages", "vue", "dist"), join(root, "packages", "vue", "src")]],
  ["/", [here]],
];

const securityHeaders = {
  "x-content-type-options": "nosniff",
  "referrer-policy": "no-referrer",
  "cross-origin-resource-policy": "same-origin",
  "x-frame-options": "SAMEORIGIN",
};

const require = createRequire(join(root, "packages", "vue", "package.json"));
let vueEsmPath = null;
try {
  vueEsmPath = require.resolve("vue/dist/vue.esm-browser.js");
} catch {
  // Fallback if not found
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

/** Set of active Server-Sent Events clients for live reload */
const sseClients = new Set();

function broadcastReload() {
  for (const client of sseClients) {
    try {
      client.write("data: reload\n\n");
    } catch {
      sseClients.delete(client);
    }
  }
}

// Watch dist and preview directories for changes with debounce
let debounceTimer = null;
const watchDirs = [
  join(root, "apps", "preview"),
  join(root, "packages", "css", "dist"),
  join(root, "packages", "vue", "dist"),
];

for (const dir of watchDirs) {
  if (existsSync(dir)) {
    try {
      watch(dir, { recursive: true }, () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          console.log("[preview] File change detected, broadcasting reload...");
          broadcastReload();
        }, 150);
      });
    } catch (err) {
      console.warn(`[preview] Could not watch directory ${dir}:`, err);
    }
  }
}

/** Resolves a URL path inside the allowed mounts, rejecting dotfiles and symlink escapes. */
async function resolveFile(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.some((segment) => segment.startsWith(".") || segment.includes("\\"))) return null;

  for (const [prefix, dirs] of mounts) {
    if (!pathname.startsWith(prefix)) continue;
    const relative = pathname.slice(prefix.length);
    for (const dir of dirs) {
      const candidate = resolve(dir, relative);
      if (candidate !== dir && !candidate.startsWith(dir + sep)) continue;
      try {
        const real = await realpath(candidate);
        const realDir = await realpath(dir);
        if (!real.startsWith(realDir + sep)) continue;
        if ((await stat(real)).isFile()) return real;
      } catch {
        /* keep looking */
      }
    }
    return null;
  }
  return null;
}

function isAllowedHost(hostHeader) {
  if (!hostHeader) return false;
  const hostname = hostHeader.replace(/:\d+$/, "").toLowerCase();
  return allowedHostnames.has(hostname);
}

const server = createServer(async (req, res) => {
  for (const [name, value] of Object.entries(securityHeaders)) res.setHeader(name, value);

  // DNS-rebinding guard: only answer requests addressed to this machine.
  if (!isAllowedHost(req.headers.host)) {
    res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    res.end("forbidden host");
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { allow: "GET, HEAD" });
    res.end();
    return;
  }

  try {
    const url = new URL(req.url ?? "/", "http://localhost");

    // SSE endpoint for live reload
    if (url.pathname === "/events") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      });
      res.write("data: connected\n\n");
      sseClients.add(res);
      req.on("close", () => {
        sseClients.delete(res);
      });
      return;
    }

    // Vue 3 browser ESM vendor bundle
    if (url.pathname === "/vendor/vue.js" && vueEsmPath) {
      const body = await readFile(vueEsmPath);
      res.writeHead(200, {
        "content-type": types[".js"],
        "cache-control": "no-store",
      });
      res.end(body);
      return;
    }

    let path = url.pathname;
    if (path === "/" || path === "/index.html") {
      path = "/index.html";
    } else if (path === "/docs") {
      path = "/components.html";
    } else if (path === "/changelog") {
      path = "/changelog.html";
    }

    const file = await resolveFile(path);
    if (file === null) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("not found");
      return;
    }

    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": types[extname(file)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch (err) {
    console.error("[preview] request failed:", err);
    if (!res.headersSent) res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("internal error");
  }
});

server.on("error", (err) => {
  console.error(`[preview] could not start on ${host}:${port}: ${err.message}`);
  process.exit(1);
});

server.listen(port, host, () => {
  const shown = host === "127.0.0.1" ? "localhost" : host;
  console.log(`preview: http://${shown}:${port}`);
});
