---
title: Temas
description: Personalize o Magic-Style com um contrato de 27 variáveis CSS, tokens derivados, dials de densidade, raio e contraste, e temas próprios validados.
---

# Temas

Um tema do Magic-Style define **só 27 variáveis** (o modelo de contrato do daisyUI e do FlyonUI). Superfícies, textos, bordas, estados de hover e foco, cores de feedback, escala de raio e sombras são **derivados no próprio CSS** com `color-mix()` e cores relativas `oklch(from …)`. Mudou uma variável, todos os componentes acompanham, em qualquer modo de cor.

```text
contrato do tema (27 vars)  ──►  tokens derivados (themes.css)  ──►  componentes
--ms-color-primary               --ms-color-interactive-primary-hover     .ms-button
--ms-color-base-100              --ms-color-text-muted                     .ms-alert
--ms-radius-field                --ms-radius-md, --ms-control-radius       …
```

Todos os temas compartilham o mesmo visual padrão, no estilo shadcn/ui: controles de 36px, sombras discretas e anel de foco com halo. Cada tema troca cores, raios, profundidade e fontes. Compare os temas na [galeria](/themes) e todos os tokens na [referência de tokens](/tokens).

## Temas inclusos

`magic` (padrão), `graphite`, `shadcn`, `vercel`, `linear`, `github`, `supabase`, `nord`, `material` e `bootstrap`. Todos têm modo claro e escuro.

Ative um tema com o atributo `data-ms-theme` ou com o `MsProvider`:

```html
<html data-ms-theme="shadcn" data-ms-color-mode="system"></html>
```

```vue
<MsProvider theme="shadcn" color-mode="system">
  <App />
</MsProvider>
```

## Atributos e props

O `MsProvider` (e o `MsThemeScope`, para um trecho da página) grava atributos `data-ms-*` no próprio wrapper ou, com `target="root"`, no `<html>`. Sem Vue, escreva os atributos direto no HTML.

| Prop do `MsProvider` | Atributo             | Valores                                                  | Padrão        |
| :------------------- | :------------------- | :------------------------------------------------------- | :------------ |
| `theme`              | `data-ms-theme`      | nome do tema                                             | `magic`       |
| `color-mode`         | `data-ms-color-mode` | `light`, `dark`, `system`                                | `system`      |
| `density`            | `data-ms-density`    | `compact` (0,875), `comfortable` (1), `spacious` (1,125) | `comfortable` |
| `radius`             | `data-ms-radius`     | `sharp`, `subtle`, `medium`, `rounded`                   | `medium`      |
| `contrast`           | `data-ms-contrast`   | `normal`, `high`                                         | `normal`      |
| `dir`                | `dir`                | `ltr`, `rtl`                                             | `ltr`         |
| `overrides`          | `style` (variáveis)  | chaves do contrato                                       | —             |

- **Densidade** escala a altura de todos os controles (`--ms-control-height-*`), arredondada para pixels inteiros.
- **Raio** muda só o raio dos controles (`--ms-radius-control`): `sharp` é metade do `radius-selector`, `subtle` é o `radius-selector`, `medium` é o `radius-field` e `rounded` é o `radius-box`.
- **Contraste alto** reforça textos secundários e bordas.

Os dials funcionam em qualquer elemento, não só junto de `data-ms-theme`. Para mudar tudo isso em tempo de execução, use `useThemeContext()` (veja [Modo escuro](/guide/dark-mode)).

## Personalização rápida (só CSS)

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

Para mudar só um trecho, use o mesmo bloco num seletor (`.checkout { … }`). Como o CSS da biblioteca está na layer `ms`, seu CSS sem layer sempre vence.

## Personalização em tempo real (Vue)

`MsProvider` e `MsThemeScope` aceitam `overrides` com as chaves do contrato. É o caminho para apps multi-tenant em que a cor da marca vem do backend:

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

## Criar um tema

### Com CSS

Um tema é um bloco por modo. As chaves que você omitir vêm do tema padrão (Magic):

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

Ative com `<html data-ms-theme="acme">` ou `<MsProvider theme="acme">`. Esse exemplo cobre `light` e `dark`. Para `system` também seguir o sistema operacional, repita o bloco escuro dentro de `@media (prefers-color-scheme: dark)` com o seletor `[data-ms-theme="acme"][data-ms-color-mode="system"]`, ou gere tudo com `msThemeToCss`, abaixo.

### Com TypeScript (validado)

`defineMsTheme` dá autocompletar para todas as chaves. `checkMsThemeContrast` aponta falhas de WCAG AA antes de publicar. `msThemeToCss` gera os blocos claro, escuro e `system`:

```ts
import { checkMsThemeContrast, defineMsTheme, msThemeToCss } from "@magic-style/vue";

export const acme = defineMsTheme({
  name: "acme",
  extends: "shadcn", // herda o que não for definido (padrão: "magic")
  shared: { "radius-field": "10px", "font-sans": "Inter, system-ui, sans-serif" },
  light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
  dark: { "color-primary": "#a78bfa", "color-primary-content": "#1e1b4b" },
});

const issues = checkMsThemeContrast(acme); // [] quando todos os pares passam
const css = msThemeToCss(acme); // grave num arquivo ou injete num <style>
```

Carregue o CSS gerado depois do `@magic-style/css`. Só quem importa `msThemeToCss` carrega o gerador, porque o pacote é tree-shakeable.

::: details Tema oficial (contribuindo com o repositório)

1. Crie `packages/internal/themes/src/themes/<nome>.json`. O `$schema` dá autocompletar e validação no editor.
2. Adicione o import em `packages/internal/themes/src/lib/themes.ts`.
3. Rode `pnpm validate`. O teste de contraste reprova o tema se algum par de texto e fundo ficar abaixo de AA.

`extras` é uma saída de emergência para assinaturas que o contrato não cobre. O teste limita a 6 extras por modo e proíbe cores ali.
:::

## O contrato

| Variável                              | Uso                                                        |
| :------------------------------------ | :--------------------------------------------------------- |
| `--ms-color-base-100`                 | Superfície da página e dos componentes                     |
| `--ms-color-base-200`                 | Superfície rebaixada (poços, listras, inputs em cards)     |
| `--ms-color-base-300`                 | Bordas e divisores                                         |
| `--ms-color-base-content`             | Texto principal sobre as superfícies                       |
| `--ms-color-primary` / `-content`     | Ação principal / texto sobre ela                           |
| `--ms-color-secondary` / `-content`   | Ação secundária                                            |
| `--ms-color-accent` / `-content`      | Destaque                                                   |
| `--ms-color-neutral` / `-content`     | Ação neutra (escura ou inversa)                            |
| `--ms-color-info` / `-content`        | Feedback informativo                                       |
| `--ms-color-success` / `-content`     | Sucesso                                                    |
| `--ms-color-warning` / `-content`     | Aviso                                                      |
| `--ms-color-danger` / `-content`      | Erro / ação destrutiva                                     |
| `--ms-radius-selector`                | Elementos pequenos (checkbox, tag, badge)                  |
| `--ms-radius-field`                   | Campos                                                     |
| `--ms-radius-box`                     | Cards, diálogos, popovers                                  |
| `--ms-border-width`                   | Largura padrão de borda                                    |
| `--ms-depth`                          | Intensidade das sombras (0 = plano, 1 = padrão)            |
| `--ms-font-sans`                      | Fonte da interface                                         |
| `--ms-font-mono`                      | Fonte de código                                            |
| `--ms-color-base-raised` _(opcional)_ | Superfície elevada, se diferente de `base-100`             |
| `--ms-radius-control` _(opcional)_    | Botões e controles, se diferentes dos campos (ex.: pílula) |
| `--ms-font-display` _(opcional)_      | Fonte de títulos (padrão: `font-sans`)                     |

A lista completa, com tipos e descrições, está exportada como `MS_THEME_CONTRACT` em `@magic-style/vue`.

## Tokens derivados

| Token                                                                 | Como é calculado                                                                         |
| :-------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `--ms-color-interactive-<cor>-hover` / `-active`                      | 86% / 74% da cor + o restante do `base-content`                                          |
| `--ms-color-interactive-<cor>-subtle`, `--ms-color-feedback-<cor>-bg` | 14% da cor sobre a base, com saturação restaurada                                        |
| `--ms-color-interactive-<cor>-text`, `--ms-color-feedback-<cor>-text` | 40% da cor sobre o `base-content`, com saturação restaurada. Passa AA em todos os temas. |
| `--ms-color-text-secondary` / `-muted` / `-subtle`                    | 80% / 66% / 52% do `base-content` sobre a base                                           |
| `--ms-color-border-field` / `-hover`                                  | 50% / 30% do `base-300` sobre o `base-content`: bordas de campo com 3:1 (WCAG 1.4.11)    |
| `--ms-focus-ring-color`                                               | 80% do primário + 20% do `base-content`: 3:1 em todas as superfícies                     |
| `--ms-focus-ring-shadow`                                              | Halo de 3px (30% da cor do anel) usado nos campos focados                                |
| `--ms-radius-sm` / `-md` / `-lg` / `-xl`                              | `selector` / `field` / `box` / `box × 1,5`                                               |
| `--ms-elevation-xs` … `--ms-elevation-xl`                             | Sombras neutras na escala do Tailwind, multiplicadas por `--ms-depth`                    |

As sombras semânticas apontam para essa escala: `--ms-elevation-button` e `-input` usam `xs`, `-card` usa `sm`, `-dropdown` usa `md` e `-modal` usa `lg`. Os nomes antigos `--ms-elevation-1`, `-2` e `-3` continuam válidos como aliases de `sm`, `md` e `lg`.

Qualquer token derivado pode ser sobrescrito como uma variável comum. Por exemplo, para bordas de campo mais suaves (abaixo de 3:1, fora da WCAG 1.4.11):

```css
:root {
  --ms-color-border-field: var(--ms-color-base-300);
  --ms-color-border-field-hover: var(--ms-color-border-strong);
}
```

## Tons nos componentes

Os tons (`primary`, `success`…) funcionam igual em todos os componentes. `[data-tone="success"]` define `--ms-tone` e `--ms-tone-content`, e o motor de tons deriva `--ms-tone-hover`, `-active`, `-subtle`, `-border` e `-text` com as mesmas proporções dos tokens do tema. Para um tom de marca pontual:

```css
.ms-button[data-tone="brand"],
.ms-badge[data-tone="brand"] {
  --ms-tone: #7c3aed;
  --ms-tone-content: #ffffff;
}
```

- **Texto usa `--ms-tone-text`**, nunca o tom puro, porque é ele que garante AA. O tom puro fica para preenchimentos, bordas e indicadores.
- `neutral` usa a cor do texto base no lugar do texto tingido, porque em alguns temas ele é um cinza claro.
