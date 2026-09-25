---
title: Installation
description: Install @magic-style/vue and @magic-style/css, load the CSS and use the components with TypeScript.
---

# Installation

## Requirements

- Vue **3.5** or later (peer dependency of `@magic-style/vue`).
- A bundler that resolves CSS imports from packages (Vite, for example).

`@magic-style/css` is an **optional** peer of the Vue package: the components ship no styles of their own, so without it they render unstyled.

## Install the packages

::: code-group

```bash [pnpm]
pnpm add @magic-style/vue @magic-style/css
```

```bash [npm]
npm install @magic-style/vue @magic-style/css
```

```bash [yarn]
yarn add @magic-style/vue @magic-style/css
```

```bash [bun]
bun add @magic-style/vue @magic-style/css
```

:::

## Load the CSS

Import the full stylesheet once, in your app's entry point:

```ts
// main.ts
import "@magic-style/css";
```

That includes tokens, themes, base styles, every component and utilities. The reset is opt-in and not part of the full bundle:

```ts
import "@magic-style/css/reset.css";
```

### Granular imports

If you only use a few components, load just the layers and components you need. Tokens, themes and base are required:

```css
@import "@magic-style/css/tokens.css";
@import "@magic-style/css/themes.css";
@import "@magic-style/css/base.css";
@import "@magic-style/css/components/button.css";
@import "@magic-style/css/components/field.css";
@import "@magic-style/css/components/input.css";
```

Every component has a file at `@magic-style/css/components/<name>.css`. The full list is in the `exports` field of the package's `package.json`.

### Cascade layers

All CSS lives in named layers, in this order:

```css
@layer ms.reset, ms.tokens, ms.themes, ms.base, ms.components, ms.utilities;
```

Unlayered CSS always beats layered CSS, so your app's styles override the library's without `!important`. With Tailwind CSS v4, place the `ms` layer before the utilities:

```css
@layer theme, base, ms, components, utilities;
```

::: tip Fonts
Themes declare fonts such as IBM Plex Sans or Inter, falling back to system fonts. The font files are not bundled: load them yourself if you want the exact typography.
:::

## Use the components

Import each component by name. The package is ESM with `sideEffects: false`, so your bundler drops whatever you don't use:

```vue
<script setup lang="ts">
import { MsButton, MsCard } from "@magic-style/vue";
</script>

<template>
  <MsCard>
    <MsButton variant="outline">Cancel</MsButton>
    <MsButton>Save</MsButton>
  </MsCard>
</template>
```

There is no plugin that registers every component globally. If you prefer global registration, do it for the components you use:

```ts
import { createApp } from "vue";
import { MsButton, MsInput } from "@magic-style/vue";

const app = createApp(App);
app.component("MsButton", MsButton).component("MsInput", MsInput);
```

## Recommended plugins

Two plugins are optional but recommended:

```ts
import { createApp } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

createApp(App)
  .use(createMsToast()) // per-app toast store (required with SSR)
  .use(createMsI18n({ locale: "en-US" })) // language of built-in strings
  .mount("#app");
```

Then wrap your app in an `MsProvider` to pick the theme and color mode:

```vue
<template>
  <MsProvider theme="magic" color-mode="system">
    <RouterView />
  </MsProvider>
</template>
```

## TypeScript

The package ships its declarations (`dist/index.d.ts`), which resolve with `moduleResolution` set to `bundler`, `node16` or `nodenext`. Props, events and public types carry JSDoc, so they show up in your editor's autocomplete. Public types are exported too:

```ts
import type { MsButtonProps, MsTone, MsMessages, MsThemeValues } from "@magic-style/vue";
```

## Next steps

- [Laravel + Inertia](/en/guide/laravel-inertia)
- [Theming](/en/guide/theming)
- [SSR](/en/guide/ssr)
