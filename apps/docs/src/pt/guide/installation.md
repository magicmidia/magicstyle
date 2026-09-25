---
title: Instalação
description: Instale @magic-style/vue e @magic-style/css, carregue o CSS e use os componentes com TypeScript.
---

# Instalação

## Requisitos

- Vue **3.5** ou superior (peer dependency do `@magic-style/vue`).
- Um bundler que resolva imports de CSS em pacotes (Vite, por exemplo).

O `@magic-style/css` é peer **opcional** do pacote Vue: os componentes não trazem estilos próprios, mas sem ele ficam sem visual.

## Instalar os pacotes

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

## Carregar o CSS

Importe o CSS completo uma vez, no ponto de entrada da aplicação:

```ts
// main.ts
import "@magic-style/css";
```

Isso inclui tokens, temas, estilos base, todos os componentes e utilitários. O reset é opcional e fica fora do pacote completo:

```ts
import "@magic-style/css/reset.css";
```

### Importação granular

Se você usa poucos componentes, carregue só as camadas e os componentes necessários. Tokens, temas e base são obrigatórios:

```css
@import "@magic-style/css/tokens.css";
@import "@magic-style/css/themes.css";
@import "@magic-style/css/base.css";
@import "@magic-style/css/components/button.css";
@import "@magic-style/css/components/field.css";
@import "@magic-style/css/components/input.css";
```

Cada componente tem um arquivo em `@magic-style/css/components/<nome>.css`. A lista completa está nos `exports` do `package.json` do pacote.

### Cascade layers

Todo o CSS fica em camadas nomeadas, nesta ordem:

```css
@layer ms.reset, ms.tokens, ms.themes, ms.base, ms.components, ms.utilities;
```

CSS sem layer sempre vence CSS em layer, então os estilos da sua aplicação sobrescrevem os da biblioteca sem `!important`. Com Tailwind CSS v4, posicione a camada `ms` antes das utilidades:

```css
@layer theme, base, ms, components, utilities;
```

::: tip Fontes
Os temas declaram fontes como IBM Plex Sans ou Inter, com fallback para fontes do sistema. Os arquivos de fonte não vêm no pacote: carregue-os você mesmo, se quiser a tipografia exata.
:::

## Usar os componentes

Importe cada componente pelo nome. O pacote é ESM e `sideEffects: false`, então o bundler descarta o que você não usar:

```vue
<script setup lang="ts">
import { MsButton, MsCard } from "@magic-style/vue";
</script>

<template>
  <MsCard>
    <MsButton variant="outline">Cancelar</MsButton>
    <MsButton>Salvar</MsButton>
  </MsCard>
</template>
```

Não existe um plugin que registre todos os componentes globalmente. Se preferir registro global, faça só com os que você usa:

```ts
import { createApp } from "vue";
import { MsButton, MsInput } from "@magic-style/vue";

const app = createApp(App);
app.component("MsButton", MsButton).component("MsInput", MsInput);
```

## Plugins recomendados

Dois plugins são opcionais, mas recomendados:

```ts
import { createApp } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import "@magic-style/css";
import App from "./App.vue";

createApp(App)
  .use(createMsToast()) // store de toasts por app (obrigatório com SSR)
  .use(createMsI18n({ locale: "pt-BR" })) // idioma dos textos embutidos
  .mount("#app");
```

Depois, envolva a aplicação num `MsProvider` para escolher tema e modo de cor:

```vue
<template>
  <MsProvider theme="magic" color-mode="system">
    <RouterView />
  </MsProvider>
</template>
```

## TypeScript

O pacote publica as declarações (`dist/index.d.ts`), que resolvem com `moduleResolution` `bundler`, `node16` e `nodenext`. Props, eventos e tipos públicos têm JSDoc, então aparecem no autocomplete do editor. Os tipos públicos também são exportados:

```ts
import type { MsButtonProps, MsTone, MsMessages, MsThemeValues } from "@magic-style/vue";
```

## Próximos passos

- [Laravel + Inertia](/pt/guide/laravel-inertia)
- [Temas](/pt/guide/theming)
- [SSR](/pt/guide/ssr)
