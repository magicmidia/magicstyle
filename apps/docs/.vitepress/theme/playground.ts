/**
 * "Open in StackBlitz": builds a minimal Vite + Vue + TypeScript project around a demo
 * and posts it to https://stackblitz.com/run (no SDK). The demo source is the one shown
 * to the reader, with the page locale's strings already inlined.
 */
export interface PlaygroundOptions {
  /** Demo SFC source as displayed on the page. */
  code: string;
  /** BCP 47 tag of the page, passed to createMsI18n. */
  locale: string;
  /** Published @magic-style/* version to install. */
  version: string;
  title: string;
}

export function playgroundFiles(options: PlaygroundOptions): Record<string, string> {
  const packageJson = {
    name: "magic-style-demo",
    private: true,
    type: "module",
    scripts: { dev: "vite", build: "vite build" },
    dependencies: {
      "@magic-style/css": `^${options.version}`,
      "@magic-style/vue": `^${options.version}`,
      vue: "^3.5.0",
    },
    devDependencies: {
      "@vitejs/plugin-vue": "^6.0.0",
      typescript: "^5.9.0",
      vite: "^7.0.0",
    },
  };
  return {
    "package.json": `${JSON.stringify(packageJson, null, 2)}\n`,
    "index.html": `<!doctype html>
<html lang="${options.locale}" data-ms-theme="magic" data-ms-color-mode="system">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(options.title)}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`,
    "vite.config.ts": `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({ plugins: [vue()] });
`,
    "src/main.ts": `import { createApp } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import "./style.css";
import App from "./App.vue";

createApp(App)
  .use(createMsI18n({ locale: ${JSON.stringify(options.locale)} }))
  .use(createMsToast())
  .mount("#app");
`,
    "src/style.css": `body {
  margin: 0;
  padding: 32px;
  font-family: var(--ms-font-sans);
  background: var(--ms-color-surface-default);
  color: var(--ms-color-text-primary);
}
`,
    "src/env.d.ts": `/// <reference types="vite/client" />\n`,
    "src/App.vue": options.code.endsWith("\n") ? options.code : `${options.code}\n`,
  };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"]/g, (ch) => `&#${ch.charCodeAt(0)};`);
}

/** Opens the project in a new StackBlitz tab through a hidden form POST. */
export function openInStackBlitz(options: PlaygroundOptions): void {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://stackblitz.com/run?file=src/App.vue";
  form.target = "_blank";
  form.hidden = true;
  const fields: Record<string, string> = {
    "project[title]": options.title,
    "project[description]": "Magic-Style demo",
    "project[template]": "node",
  };
  for (const [path, content] of Object.entries(playgroundFiles(options))) {
    fields[`project[files][${path}]`] = content;
  }
  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.append(input);
  }
  document.body.append(form);
  form.submit();
  form.remove();
}
