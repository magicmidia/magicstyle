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
- `@magic-style/css` is an optional peer: components ship no styles of their own.

Full documentation: https://github.com/magicmidia/magicstyle#readme — MIT licensed.
