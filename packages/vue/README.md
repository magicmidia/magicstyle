# @magic-style/vue

Accessible Vue 3 components for the Magic-Style design system (95 components, SSR-safe, TypeScript strict).

```bash
pnpm add @magic-style/vue @magic-style/css
```

```ts
// main.ts
import { createApp } from "vue";
import { createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

createApp(App).use(createMsToast()).mount("#app");
```

```vue
<script setup lang="ts">
import { MsField, MsInput, MsButton } from "@magic-style/vue";
</script>

<template>
  <MsField label="E-mail" description="Usado para login">
    <MsInput type="email" name="email" autocomplete="email" required />
  </MsField>
  <MsButton variant="solid" tone="primary">Salvar</MsButton>
</template>
```

- Attributes such as `name`, `required`, `autocomplete` and `aria-*` reach the native control.
- With SSR (Inertia/Nuxt), install `createMsToast()` per app and use `color-mode="system"` on `MsProvider` for flash-free dark mode.
- Theming: `<MsProvider :overrides="{ 'color-primary': '#7c3aed' }">` for runtime brand colors, or `defineMsTheme()` + `checkMsThemeContrast()` + `msThemeToCss()` for complete, validated themes ([guide](https://github.com/magicmidia/magicstyle/blob/main/docs/theming.md)).
- Built-in strings (accessible names, placeholders, empty states, date names) default to Portuguese (English and Spanish included); switch with `app.use(createMsI18n({ locale: "en-US" }))` or `<MsProvider locale="en-US" :messages="{…}">` ([guide](https://github.com/magicmidia/magicstyle/blob/main/docs/i18n.md)).
- `@magic-style/css` is an optional peer: components ship no styles of their own.

Full documentation: https://github.com/magicmidia/magicstyle#readme — MIT licensed.
