<div align="center">

# Magic-Style

**Accessible Vue 3 components and framework-free CSS, with themes you can actually own.**

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?style=flat-square)](CHANGELOG.md)
[![Components](https://img.shields.io/badge/components-95-10b981.svg?style=flat-square)](apps/docs/)
[![Themes](https://img.shields.io/badge/themes-10-6366f1.svg?style=flat-square)](#theming)
[![Design tokens](https://img.shields.io/badge/tokens-199%20DTCG-06b6d4.svg?style=flat-square)](packages/internal/tokens/)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%202.2%20AA-16a34a.svg?style=flat-square)](#accessibility)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6.svg?style=flat-square)](tsconfig.base.json)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](LICENSE)

[Documentation](#documentation) · [Quick start](#quick-start) · [Theming](#theming) · [Components](#components) · [Contributing](CONTRIBUTING.md) · [Changelog](CHANGELOG.md)

</div>

---

Magic-Style is a design system for Vue 3 apps: **95 components**, **10 themes** and **199 DTCG tokens**, shipped as two packages. `@magic-style/vue` holds the behavior (keyboard, focus, ARIA, SSR), and `@magic-style/css` holds every style, so the same look works in a Vue SPA, an Inertia app with SSR or a plain Blade/HTML page.

The default look follows shadcn/ui: 36px controls, 14px text, subtle shadows and a single focus ring with a halo. Each theme swaps only colors, radii, depth and fonts through a small contract, so switching themes never breaks a layout.

## Features

|                               |                                                                                                                                                                                                 |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Accessible by default**     | WAI-ARIA APG patterns for menus, comboboxes, dialogs, tabs, trees, grids and more. Roving tabindex, focus traps, layered Escape handling. Targets WCAG 2.2 AA.                                  |
| **10 themes, one contract**   | Every theme is 27 CSS variables; about 150 semantic tokens are derived with `color-mix()` and `oklch(from …)`. Text, field borders and focus rings are contrast-tested in every theme and mode. |
| **Themes you can validate**   | `defineMsTheme()` gives you autocomplete, `checkMsThemeContrast()` reports WCAG AA failures, `msThemeToCss()` emits the light, dark and `system` blocks.                                        |
| **SSR and Laravel + Inertia** | Every component renders with `renderToString`. `color-mode="system"` is resolved in CSS, so there is no flash and no hydration mismatch. Per-request toast stores.                              |
| **i18n and RTL**              | Built-in strings in English, Portuguese and Spanish, dates through `Intl`. Styles use logical properties, so `dir="rtl"` just works.                                                            |
| **DTCG design tokens**        | 199 tokens in the W3C Design Tokens Community Group format, with OKLCH primitives kept inside the sRGB gamut.                                                                                   |
| **CSS-only usage**            | `@magic-style/css` works without Vue: semantic `ms-*` classes and `data-*` attributes, shipped in the `ms` cascade layer so your CSS always wins.                                               |
| **Strict TypeScript**         | Typed props, events and slots with JSDoc in your editor. The API tables on the docs site are generated from the source.                                                                         |

## Quick start

### Install

```bash
pnpm add @magic-style/vue @magic-style/css
# or
npm install @magic-style/vue @magic-style/css
yarn add @magic-style/vue @magic-style/css
bun add @magic-style/vue @magic-style/css
```

Requires Vue **3.5** or later. `@magic-style/css` is an optional peer of the Vue package, but the components ship no styles of their own, so you almost always want both.

### Vite + Vue

```ts
// main.ts
import { createApp } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

createApp(App)
  .use(createMsToast()) // per-app toast store (required with SSR)
  .use(createMsI18n()) // English by default; see below to switch
  .mount("#app");
```

```vue
<!-- App.vue -->
<script setup lang="ts">
import { MsButton, MsCard, MsField, MsInput, MsProvider } from "@magic-style/vue";
</script>

<template>
  <MsProvider theme="magic" color-mode="system">
    <MsCard>
      <MsField label="Email" description="We'll never share it.">
        <MsInput type="email" name="email" autocomplete="email" required />
      </MsField>
      <MsButton variant="outline">Cancel</MsButton>
      <MsButton>Save</MsButton>
    </MsCard>
  </MsProvider>
</template>
```

Components are imported by name. The package is ESM with `sideEffects: false`, so your bundler drops whatever you don't use.

English is the default language of built-in strings (accessible names, placeholders, empty states, date names). To switch:

```ts
app.use(createMsI18n({ locale: "pt-BR" })); // or "es-ES", "es-MX", …
```

`<MsProvider locale="es-ES">` does the same for part of the tree, and `:messages` overrides individual strings.

### Laravel + Inertia

Share the locale from `HandleInertiaRequests`, install the plugins in both `app.ts` and `ssr.ts`, write the theme attributes in the Blade root template and wrap your layout in `MsProvider target="root"`:

```vue
<MsProvider target="root" theme="magic" color-mode="system" :locale="page.props.locale">
  <slot />
  <MsToastContainer />
</MsProvider>
```

`MsField` takes `form.errors.email` straight from Inertia's `useForm`. The full walkthrough, with SSR, flash toasts and validation, is in the [Laravel + Inertia guide](apps/docs/src/guide/laravel-inertia.md).

### CSS only (no Vue)

```css
@import "@magic-style/css"; /* tokens, themes, base, components, utilities */
@import "@magic-style/css/reset.css"; /* optional */
```

```html
<html data-ms-theme="bootstrap" data-ms-color-mode="system">
  <body>
    <div class="ms-card">
      <button class="ms-button" data-variant="solid" data-tone="primary">Save</button>
    </div>
  </body>
</html>
```

Granular imports are available too (`@magic-style/css/tokens.css`, `themes.css`, `base.css`, `components/<name>.css`). All rules live in the `ms` cascade layer (`ms.reset`, `ms.tokens`, `ms.themes`, `ms.base`, `ms.components`, `ms.utilities`), so unlayered app CSS always wins without `!important`. With Tailwind CSS v4:

```css
@layer theme, base, ms, components, utilities;
@import "tailwindcss";
@import "@magic-style/css";
```

## Theming

Ten built-in themes, each with light and dark modes:

`magic` (default) · `graphite` · `shadcn` · `vercel` · `linear` · `github` · `supabase` · `nord` · `material` · `bootstrap`

Pick one with an attribute or with `MsProvider` (`MsThemeScope` does the same for part of the page):

```html
<html data-ms-theme="shadcn" data-ms-color-mode="system"></html>
```

```vue
<MsProvider theme="shadcn" color-mode="system" density="compact" radius="rounded">
  <App />
</MsProvider>
```

Besides `theme` and `color-mode` (`light`, `dark`, `system`), the provider takes `density`, `radius`, `contrast="high"`, `dir` and `overrides`. There are three ways to customize, from the smallest change to a full theme:

```css
/* 1. CSS only: override contract variables */
:root {
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
}
```

```vue
<!-- 2. At runtime, e.g. a tenant's brand color from the backend -->
<MsProvider theme="shadcn" :overrides="{ 'color-primary': tenant.brand }">…</MsProvider>
```

```ts
// 3. A complete, typed and validated theme
import { checkMsThemeContrast, defineMsTheme, msThemeToCss } from "@magic-style/vue";

const acme = defineMsTheme({
  name: "acme",
  extends: "shadcn",
  light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
  dark: { "color-primary": "#a78bfa", "color-primary-content": "#1e1b4b" },
});

checkMsThemeContrast(acme); // [] when every pair passes WCAG AA
msThemeToCss(acme); // light, dark and system blocks
```

See the [theming guide](apps/docs/src/guide/theming.md) for the full contract and the list of derived tokens. The docs site also has a theme gallery and a theme generator with live contrast checks.

## Components

95 components in 8 categories (135 Vue exports, counting subcomponents such as `MsTab` and `MsTableRow`):

| Category              | Count | Components                                                                                                                                                                                                                   |
| :-------------------- | ----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actions**           |     7 | Button · Button Group · Dropdown Button · FAB · Icon Button · Segmented Control · Toggle Group                                                                                                                               |
| **Forms**             |    18 | Checkbox · Dropzone · Field · File Input · Form Wizard · Input · Label · Masked Input · Native Select · Password Input · Pin Input · Radio · Radio Group · Range · Rating · Search Field · Switch · Textarea                 |
| **Pickers**           |     7 | Choicebox · Color Picker · Command Palette · Date Picker · Emoji Picker · Icon Picker · Select                                                                                                                               |
| **Overlays**          |     9 | Confirm Dialog · Context Menu · Dialog · Drawer · Hover Card · Lightbox · Menu · Popover · Tooltip                                                                                                                           |
| **Feedback**          |     9 | Alert · Banner · Empty State · Progress · Progress Radial · Skeleton · Spinner · Status · Toast                                                                                                                              |
| **Navigation**        |    10 | Breadcrumbs · Dock · Link · Navbar · Pagination · Scroll Spy · Sidebar · Sidebar Menu · Stepper · Tabs                                                                                                                       |
| **Layout & surfaces** |    13 | App Shell · Aspect Ratio · Canvas · Card · Container · Footer · Grid · Page · Provider · Scrollbar · Separator · Split Pane · Theme Scope                                                                                    |
| **Data & content**    |    22 | Accordion · Animated Number · Avatar · Badge · Blockquote · Carousel · Chat Bubble · Code · Code Block · Collapse · Glimpse · Kbd · List · Marquee · Parallax · Pointer · Snippet · Table · Tag · Timeline · Tree · Truncate |

Every component is exported with the `Ms` prefix (`MsButton`, `MsSelect`, …). `MsSelect` is a single engine for single, multiple, searchable, async, creatable and grouped selection; `MsNativeSelect` is the native fallback.

The numbers in this README are verified by `node scripts/stats.mjs --check`, which runs as part of `pnpm validate`.

## Accessibility

- Interactive components follow the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns, and the component pages document the keyboard interactions.
- Text passes 4.5:1, and focus rings and field borders pass 3:1 (WCAG 1.4.11), in all 10 themes and both color modes. A test fails any theme that drops below.
- `MsField` wires `for`, `aria-describedby` and `aria-invalid`; `required`, `autocomplete` and `aria-*` reach the native control.
- Animations honor `prefers-reduced-motion` and `data-ms-motion="reduced"`; `forced-colors` is supported.
- Tested with axe-core in interactive states, per-component keyboard and ARIA tests, and an axe audit of the built docs site.

Automated checks catch only part of the problems, so test your own screens with a keyboard and a screen reader too.

## Documentation

The documentation site lives in [`apps/docs`](apps/docs/) (VitePress). Run it locally:

```bash
pnpm install
pnpm docs:dev
```

It includes:

- **Guides:** installation, theming, dark mode, i18n, RTL, SSR, Laravel + Inertia, accessibility and migration.
- **95 component pages** with live demos, source code and API tables generated from the component types.
- **Themes:** a gallery of the 10 themes and a theme generator with WCAG contrast checks.
- **Tokens:** an explorer for every design token.
- **Blocks:** complete screens built from the components, at `/blocks`.
- **Three languages:** English at the root, Portuguese under `/pt/` and Spanish under `/es/`.

## Repository

```text
apps/
  docs/                   VitePress site: guides, component pages, themes, tokens, blocks
packages/
  css/                    @magic-style/css: framework-free styles
  vue/                    @magic-style/vue: Vue 3 components
  internal/
    tokens/               @magic-style-internal/tokens (private): DTCG tokens
    themes/               @magic-style-internal/themes (private): the 10 themes
scripts/                  architecture and stats checks
docs/
  baseline/               Architecture Baseline 1.2 (normative, in Portuguese)
  adr/                    architecture decision records
```

Dependency rules, enforced by `scripts/check-architecture.mjs`:

- Browser packages (`@magic-style/vue`, `@magic-style/css`) never import Node tooling.
- Internal foundations (`tokens`, `themes`) never depend on public packages.
- Published packages never depend at runtime on private ones.
- `@magic-style/vue` and `@magic-style/css` are versioned together; every change to them needs a changeset.

## Development

Contributors need **Node 24** and **pnpm** (the version is pinned in `packageManager`).

| Command             | What it does                                                                                     |
| :------------------ | :----------------------------------------------------------------------------------------------- |
| `pnpm install`      | Installs with a frozen lockfile and strict engines.                                              |
| `pnpm validate`     | Full health gate: Prettier, ESLint, Stylelint, architecture, docs stats, types, tests and build. |
| `pnpm docs:dev`     | Docs site with hot reload.                                                                       |
| `pnpm docs:build`   | Static build of the docs site in all three languages.                                            |
| `pnpm docs:preview` | Serves the built site locally.                                                                   |
| `pnpm docs:e2e`     | Smoke test of every route plus an axe audit over the build (Playwright).                         |
| `pnpm test`         | Unit tests (Vitest) in every package.                                                            |
| `pnpm typecheck`    | Strict type checking across the monorepo.                                                        |
| `pnpm lint`         | ESLint for TypeScript, JavaScript and `.vue` files.                                              |
| `pnpm lint:css`     | Stylelint for the CSS.                                                                           |
| `pnpm architecture` | Checks for forbidden imports between packages.                                                   |
| `pnpm changeset`    | Records a release note for changes to public packages.                                           |

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the setup, the component rules and the pull request checklist. Architectural decisions follow the [Architecture Baseline 1.2](docs/baseline/Magic-Style-Architecture-Baseline-1.2/).

To report a vulnerability, follow [SECURITY.md](SECURITY.md). Please don't open a public issue.

## License

[MIT](LICENSE)
