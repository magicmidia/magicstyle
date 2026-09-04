#!/usr/bin/env node
/** Tiny static server for the preview app (dev only). */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const workspace = join(root, "..");
const port = Number(process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

async function firstExisting(candidates) {
  for (const file of candidates) {
    try {
      await stat(file);
      return file;
    } catch {
      /* keep looking */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    let path = url.pathname === "/" ? "/apps/preview/index.html" : url.pathname;
    let candidates = [];
    if (path.startsWith("/css/")) {
      candidates = [join(root, "packages", "css", "dist", path.slice(5))];
    } else if (path.startsWith("/temp/")) {
      candidates = [join(workspace, "temp", path.slice(6))];
    } else if (path.endsWith(".html") || path.endsWith(".js")) {
      candidates = [join(root, "apps", "preview", path), join(root, path)];
    } else {
      candidates = [join(root, path)];
    }
    const file = await firstExisting(candidates.map((c) => normalize(c)));
    if (file === null) throw new Error("not found");
    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": types[extname(file)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("not found");
  }
});

server.listen(port, () => console.log(`preview: http://localhost:${port}`));
