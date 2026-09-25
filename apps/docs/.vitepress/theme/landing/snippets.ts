import type { MsSnippetItem } from "@magic-style/vue";

const PACKAGES = "@magic-style/vue @magic-style/css";

export const INSTALL_SNIPPETS: MsSnippetItem[] = [
  { label: "pnpm", code: `pnpm add ${PACKAGES}`, language: "bash" },
  { label: "npm", code: `npm install ${PACKAGES}`, language: "bash" },
  { label: "yarn", code: `yarn add ${PACKAGES}`, language: "bash" },
  { label: "bun", code: `bun add ${PACKAGES}`, language: "bash" },
];

export const SETUP_CODE = {
  vite: `import { createApp } from "vue";
import { createMsI18n } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

createApp(App)
  .use(createMsI18n({ locale: "pt-BR" }))
  .mount("#app");`,
  inertia: `import "@magic-style/css";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h, type DefineComponent } from "vue";
import { createMsI18n } from "@magic-style/vue";

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      \`./Pages/\${name}.vue\`,
      import.meta.glob<DefineComponent>("./Pages/**/*.vue"),
    ),
  setup({ el, App, props, plugin }) {
    const locale = props.initialPage.props.locale as string;
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createMsI18n({ locale }))
      .mount(el);
  },
});`,
  css: `<!doctype html>
<html data-ms-theme="shadcn" data-ms-color-mode="system">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@magic-style/css/dist/index.css" />
  </head>
  <body>
    <button class="ms-button" data-variant="solid" data-tone="primary" data-size="md">
      <span class="ms-button-label">Magic-Style</span>
    </button>
  </body>
</html>`,
} as const;
