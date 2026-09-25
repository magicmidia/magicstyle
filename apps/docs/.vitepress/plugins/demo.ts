import { existsSync } from "node:fs";
import { join } from "node:path";
import type { MarkdownRenderer } from "vitepress";
import { demoSource } from "./demo-source.ts";

const DEMOS = join(import.meta.dirname, "../../demos");
const TAG = /^<Demo\s+src="([\w/-]+)"(\s+wide)?\s*\/>\s*$/;

/** English lives at the site root; Portuguese under pt/, Spanish under es/. */
export function localeOf(relativePath: string): string {
  if (relativePath.startsWith("pt/")) return "pt-BR";
  if (relativePath.startsWith("es/")) return "es-ES";
  return "en-US";
}

/**
 * `<Demo src="button/basic" />` (or `<Demo src="blocks/login/Block" wide />`) → live demo + build-time highlighted source for the
 * page locale (no runtime highlighter, no v-html).
 */
export function demoPlugin(md: MarkdownRenderer): void {
  md.core.ruler.push("ms-demo", (state) => {
    const locale = localeOf(String(state.env.relativePath ?? ""));
    const visit = (tokens: typeof state.tokens) => {
      for (const token of tokens) {
        if (token.children) visit(token.children);
        if (token.type !== "html_block" && token.type !== "html_inline") continue;
        const match = TAG.exec(token.content.trim());
        if (!match) continue;
        const src = match[1]!;
        const wide = match[2] ? " wide" : "";
        const file = join(DEMOS, `${src}.vue`);
        if (!existsSync(file)) {
          throw new Error(`[demo] ${src}.vue not found (${state.env.relativePath})`);
        }
        const code = demoSource(file, locale);
        const highlighted = md.options.highlight?.(code, "vue", "") ?? md.utils.escapeHtml(code);
        const b64 = Buffer.from(code, "utf8").toString("base64");
        token.content =
          `<Demo src="${src}" code="${b64}"${wide}>` +
          `<template #code><div class="language-vue vp-adaptive-theme" v-pre>${highlighted}</div></template>` +
          `</Demo>\n`;
      }
    };
    visit(state.tokens);
  });
}
