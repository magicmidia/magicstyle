import { existsSync } from "node:fs";
import { join } from "node:path";
import type { MarkdownRenderer } from "vitepress";
import { demoSource } from "./demo-source.ts";

const DEMOS = join(import.meta.dirname, "../../demos");
const TAG = /^<Demo\s+src="([\w/-]+)"\s*\/>\s*$/;

function localeOf(relativePath: string): string {
  if (relativePath.startsWith("en/")) return "en-US";
  if (relativePath.startsWith("es/")) return "es-ES";
  return "pt-BR";
}

/**
 * `<Demo src="button/basic" />` → live demo + build-time highlighted source for the
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
        const file = join(DEMOS, `${src}.vue`);
        if (!existsSync(file)) {
          throw new Error(`[demo] ${src}.vue not found (${state.env.relativePath})`);
        }
        const code = demoSource(file, locale);
        const highlighted = md.options.highlight?.(code, "vue", "") ?? md.utils.escapeHtml(code);
        const b64 = Buffer.from(code, "utf8").toString("base64");
        token.content =
          `<Demo src="${src}" code="${b64}">` +
          `<template #code><div class="language-vue vp-adaptive-theme" v-pre>${highlighted}</div></template>` +
          `</Demo>\n`;
      }
    };
    visit(state.tokens);
  });
}
