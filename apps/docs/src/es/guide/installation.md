---
title: Instalación
description: Instala @magic-style/vue y @magic-style/css, carga el CSS y usa los componentes con TypeScript.
---

# Instalación

## Requisitos

- Vue **3.5** o superior (peer dependency de `@magic-style/vue`).
- Un bundler que resuelva imports de CSS desde paquetes (Vite, por ejemplo).

`@magic-style/css` es un peer **opcional** del paquete Vue: los componentes no traen estilos propios, así que sin él se ven sin estilo.

## Instalar los paquetes

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

## Cargar el CSS

Importa el CSS completo una sola vez, en el punto de entrada de la aplicación:

```ts
// main.ts
import "@magic-style/css";
```

Esto incluye tokens, temas, estilos base, todos los componentes y utilidades. El reset es opcional y no forma parte del paquete completo:

```ts
import "@magic-style/css/reset.css";
```

### Importación granular

Si usas pocos componentes, carga solo las capas y los componentes que necesites. Tokens, temas y base son obligatorios:

```css
@import "@magic-style/css/tokens.css";
@import "@magic-style/css/themes.css";
@import "@magic-style/css/base.css";
@import "@magic-style/css/components/button.css";
@import "@magic-style/css/components/field.css";
@import "@magic-style/css/components/input.css";
```

Cada componente tiene un archivo en `@magic-style/css/components/<nombre>.css`. La lista completa está en los `exports` del `package.json` del paquete.

### Cascade layers

Todo el CSS vive en capas con nombre, en este orden:

```css
@layer ms.reset, ms.tokens, ms.themes, ms.base, ms.components, ms.utilities;
```

El CSS sin capa siempre gana al CSS en capa, así que los estilos de tu aplicación sobrescriben los de la biblioteca sin `!important`. Con Tailwind CSS v4, coloca la capa `ms` antes de las utilidades:

```css
@layer theme, base, ms, components, utilities;
```

::: tip Fuentes
Los temas declaran fuentes como IBM Plex Sans o Inter, con respaldo en fuentes del sistema. Los archivos de fuente no vienen en el paquete: cárgalos tú si quieres la tipografía exacta.
:::

## Usar los componentes

Importa cada componente por su nombre. El paquete es ESM con `sideEffects: false`, así que el bundler descarta lo que no uses:

```vue
<script setup lang="ts">
import { MsButton, MsCard } from "@magic-style/vue";
</script>

<template>
  <MsCard>
    <MsButton variant="outline">Cancelar</MsButton>
    <MsButton>Guardar</MsButton>
  </MsCard>
</template>
```

No existe un plugin que registre todos los componentes de forma global. Si prefieres el registro global, hazlo solo con los que uses:

```ts
import { createApp } from "vue";
import { MsButton, MsInput } from "@magic-style/vue";

const app = createApp(App);
app.component("MsButton", MsButton).component("MsInput", MsInput);
```

## Plugins recomendados

Dos plugins son opcionales, pero recomendados:

```ts
import { createApp } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

createApp(App)
  .use(createMsToast()) // store de toasts por app (obligatorio con SSR)
  .use(createMsI18n({ locale: "es-ES" })) // idioma de los textos incluidos
  .mount("#app");
```

Después, envuelve la aplicación en un `MsProvider` para elegir tema y modo de color:

```vue
<template>
  <MsProvider theme="magic" color-mode="system">
    <RouterView />
  </MsProvider>
</template>
```

## TypeScript

El paquete publica sus declaraciones (`dist/index.d.ts`), que resuelven con `moduleResolution` `bundler`, `node16` y `nodenext`. Las props, los eventos y los tipos públicos tienen JSDoc, así que aparecen en el autocompletado del editor. Los tipos públicos también se exportan:

```ts
import type { MsButtonProps, MsTone, MsMessages, MsThemeValues } from "@magic-style/vue";
```

## Próximos pasos

- [Laravel + Inertia](/es/guide/laravel-inertia)
- [Temas](/es/guide/theming)
- [SSR](/es/guide/ssr)
