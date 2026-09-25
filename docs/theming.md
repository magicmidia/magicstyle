# Temas e personalização

O Magic-Style segue o modelo de contrato usado por daisyUI/FlyonUI: **um tema define só 27 variáveis**. Todo o resto (superfícies, textos, bordas, hover/active/subtle, cores de feedback, escala de raio, sombras e os nomes legados) é **derivado em tempo real** com `color-mix()` e cores relativas `oklch(from …)`. Mudar uma variável reestiliza todos os componentes, em qualquer modo de cor.

```
contrato do tema (27 vars)  ──►  tokens derivados (≈150, em themes.css)  ──►  componentes
--ms-color-primary               --ms-color-interactive-primary-hover          .ms-button
--ms-color-base-100              --ms-color-text-muted                         .ms-alert
--ms-radius-field                --ms-radius-md, --ms-control-radius           …
```

## 1. Personalização rápida (só CSS)

Carregue o CSS e sobrescreva as variáveis do contrato. Nada precisa ser recompilado:

```css
@import "@magic-style/css";

:root {
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
  --ms-font-sans: "Inter", system-ui, sans-serif;
}
```

Para trocar só num trecho da página, use o mesmo bloco num seletor (`.checkout { … }`).

## 2. Personalização em tempo real (Vue / Inertia)

`MsProvider` e `MsThemeScope` aceitam `overrides` com as chaves do contrato. Isso serve, por exemplo, para multi-tenant, quando a cor da marca vem do backend (Laravel/Inertia shared props):

```vue
<script setup lang="ts">
import { MsProvider } from "@magic-style/vue";
import { usePage } from "@inertiajs/vue3";

const tenant = usePage().props.tenant as { brand: string; brandText: string };
</script>

<template>
  <MsProvider
    target="root"
    theme="shadcn"
    color-mode="system"
    :overrides="{ 'color-primary': tenant.brand, 'color-primary-content': tenant.brandText }"
  >
    <slot />
  </MsProvider>
</template>
```

## 3. Criando um tema

### Com CSS

Um tema é um bloco para cada modo. As chaves que você omitir são herdadas do tema padrão (Magic):

```css
[data-ms-theme="acme"] {
  color-scheme: light;
  --ms-color-base-100: #ffffff;
  --ms-color-base-200: #f4f4f5;
  --ms-color-base-300: #e4e4e7;
  --ms-color-base-content: #18181b;
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
}

[data-ms-theme="acme"][data-ms-color-mode="dark"] {
  color-scheme: dark;
  --ms-color-base-100: #18181b;
  --ms-color-base-200: #09090b;
  --ms-color-base-300: #3f3f46;
  --ms-color-base-content: #fafafa;
  --ms-color-primary: #a78bfa;
  --ms-color-primary-content: #1e1b4b;
}
```

Ative com `<html data-ms-theme="acme">` ou `<MsProvider theme="acme">`.

### Com JavaScript/TypeScript (validado)

`defineMsTheme` dá autocompletar para todas as chaves. `checkMsThemeContrast` aponta falhas de WCAG AA antes de publicar. `msThemeToCss` gera os blocos claro, escuro e `system`:

```ts
import { defineMsTheme, checkMsThemeContrast, msThemeToCss } from "@magic-style/vue";

export const acme = defineMsTheme({
  name: "acme",
  extends: "shadcn", // herda tudo o que não for definido (padrão: "magic")
  shared: { "radius-field": "10px", "font-sans": "Inter, system-ui, sans-serif" },
  light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
  dark: { "color-primary": "#a78bfa", "color-primary-content": "#1e1b4b" },
});

console.assert(checkMsThemeContrast(acme).length === 0);
const css = msThemeToCss(acme); // grave num arquivo ou injete num <style>
```

Só as páginas que importam `msThemeToCss` carregam o gerador (o pacote é tree-shakeable).

### Tema oficial (neste repositório)

1. Crie `packages/internal/themes/src/themes/<nome>.json`. O `$schema` dá autocompletar e validação no editor.
2. Adicione o import em `packages/internal/themes/src/lib/themes.ts`.
3. Rode `pnpm validate`. O teste de contraste reprova o tema se algum par de texto/fundo ficar abaixo de AA.

`extras` é uma saída de emergência para assinaturas que o contrato não cobre, como as sombras do Material. O teste limita a 6 extras por modo e proíbe cores ali.

## 4. O contrato

| Variável                              | Uso                                                             |
| :------------------------------------ | :-------------------------------------------------------------- |
| `--ms-color-base-100`                 | Superfície da página e dos componentes                          |
| `--ms-color-base-200`                 | Superfície rebaixada (poços, listras, inputs em cards)          |
| `--ms-color-base-300`                 | Borda e divisores                                               |
| `--ms-color-base-content`             | Texto principal sobre as superfícies                            |
| `--ms-color-primary` / `-content`     | Ação principal / texto sobre ela                                |
| `--ms-color-secondary` / `-content`   | Ação secundária                                                 |
| `--ms-color-accent` / `-content`      | Destaque                                                        |
| `--ms-color-neutral` / `-content`     | Ação neutra (escura/inversa)                                    |
| `--ms-color-info` / `-content`        | Feedback informativo                                            |
| `--ms-color-success` / `-content`     | Sucesso                                                         |
| `--ms-color-warning` / `-content`     | Aviso                                                           |
| `--ms-color-danger` / `-content`      | Erro / destrutivo                                               |
| `--ms-radius-selector`                | Elementos pequenos (checkbox, tag, badge)                       |
| `--ms-radius-field`                   | Campos                                                          |
| `--ms-radius-box`                     | Cards, diálogos, popovers                                       |
| `--ms-border-width`                   | Largura padrão de borda                                         |
| `--ms-depth`                          | Intensidade das sombras (0 = plano)                             |
| `--ms-font-sans`                      | Fonte da interface                                              |
| `--ms-font-mono`                      | Fonte de código                                                 |
| `--ms-color-base-raised` _(opcional)_ | Superfície elevada, se diferente de `base-100`                  |
| `--ms-radius-control` _(opcional)_    | Botões/controles, se diferentes dos campos (ex.: botões pílula) |
| `--ms-font-display` _(opcional)_      | Fonte de títulos (padrão: `font-sans`)                          |

A lista completa, com tipos, está em `@magic-style/vue` (`MS_THEME_CONTRACT`) e em `themes/dist/manifest.json`.

## 5. Como os tokens são derivados

| Token                                                                 | Fórmula                                                                                       |
| :-------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| `--ms-color-interactive-<cor>-hover`                                  | 86% da cor + 14% do `base-content` (escurece no claro, clareia no escuro)                     |
| `--ms-color-interactive-<cor>-active`                                 | 74% da cor + 26% do `base-content`                                                            |
| `--ms-color-interactive-<cor>-subtle`, `--ms-color-feedback-<cor>-bg` | 14% da cor sobre a base, com saturação restaurada (×2,2)                                      |
| `--ms-color-interactive-<cor>-text`, `--ms-color-feedback-<cor>-text` | 40% da cor sobre o `base-content`, com saturação restaurada (×2). Passa AA em todos os temas. |
| `--ms-color-text-secondary` / `-muted` / `-subtle`                    | 80% / 66% / 52% do `base-content` sobre a base                                                |
| `--ms-radius-sm` / `-md` / `-lg` / `-xl`                              | `selector` / `field` / `box` / `box × 1.5`                                                    |
| `--ms-elevation-1…3`                                                  | Sombras multiplicadas por `--ms-depth`                                                        |

As proporções ficam num único lugar (`RATIOS`, em `packages/internal/themes/src/lib/derive.ts`). O mesmo código gera o CSS e calcula os valores que o teste de contraste valida.

## 6. Tons nos componentes (tone engine)

Os tons (`primary`, `success`…) funcionam do mesmo jeito em todos os componentes. `[data-tone="success"]` define `--ms-tone` e `--ms-tone-content`, e o motor (em `themes.css`) deriva `--ms-tone-hover`, `--ms-tone-active`, `--ms-tone-subtle`, `--ms-tone-border` e `--ms-tone-text` com as mesmas proporções da seção 5. O componente só lê essas variáveis:

```css
.ms-badge:is([data-tone], :not([data-tone])) {
  --_ms-badge-solid-bg: var(--ms-tone);
  --_ms-badge-solid-fg: var(--ms-tone-content);
  --_ms-badge-soft-bg: var(--ms-tone-subtle);
  --_ms-badge-soft-fg: var(--ms-tone-text);
}
```

Tom próprio ou cor de marca pontual, em qualquer componente:

```css
.ms-button[data-tone="brand"],
.ms-badge[data-tone="brand"] {
  --ms-tone: #7c3aed;
  --ms-tone-content: #ffffff;
}
```

Regras:

- **Texto usa `--ms-tone-text`**, nunca o tom puro, porque é ele que garante AA. O tom puro fica para preenchimentos, bordas e indicadores.
- Componentes com tom por classe (ex.: `.ms-tag--success`) definem as duas variáveis por classe, em 2 linhas por tom.
- `neutral` define `--ms-tone-text-mix: 0%` (texto = tinta da base), porque em alguns temas ele é um cinza claro.
