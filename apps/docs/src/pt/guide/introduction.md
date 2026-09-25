---
title: Introdução
description: O que é o Magic-Style, quais pacotes ele publica e por onde começar.
---

# Introdução

Magic-Style é um design system para Vue 3: componentes acessíveis, temas definidos por um contrato de 27 variáveis CSS e SSR sem flash. Ele foi pensado para apps Laravel + Inertia, mas funciona em qualquer app Vue 3.5+.

```vue
<script setup lang="ts">
import { MsButton, MsField, MsInput } from "@magic-style/vue";
</script>

<template>
  <MsField label="E-mail" description="Usado para entrar na conta">
    <MsInput type="email" name="email" autocomplete="email" />
  </MsField>
  <MsButton>Salvar</MsButton>
</template>
```

## Pacotes

| Pacote             | O que entrega                                                                             |
| :----------------- | :---------------------------------------------------------------------------------------- |
| `@magic-style/vue` | 95 componentes Vue 3 em TypeScript strict, composables e utilitários de tema e idioma.    |
| `@magic-style/css` | CSS sem framework: tokens, 10 temas com modo claro e escuro e classes `.ms-*` semânticas. |

Os componentes Vue não trazem estilo próprio. Todo o visual vem do `@magic-style/css`, que também funciona sozinho, em HTML puro ou Blade.

## Princípios

- **Tema por contrato.** Um tema define 27 variáveis. Hover, foco, bordas, textos e sombras são derivados delas no próprio CSS. Veja [Temas](/pt/guide/theming).
- **Acessível por padrão.** Os componentes seguem os padrões WAI-ARIA APG e miram WCAG 2.2 AA, com auditoria axe-core e testes de contraste em todos os temas. Veja [Acessibilidade](/pt/guide/accessibility).
- **SSR de primeira.** Todos os componentes renderizam no servidor, e o modo de cor `system` é resolvido em CSS, sem flash nem hydration mismatch. Veja [SSR](/pt/guide/ssr).
- **Três idiomas embutidos.** Os textos gerados pelos componentes saem em português por padrão, com inglês e espanhol inclusos. Veja [Idiomas](/pt/guide/i18n).
- **RTL real.** O CSS usa propriedades lógicas. Veja [RTL](/pt/guide/rtl).
- **Sobrescrevível.** Todo o CSS fica na cascade layer `ms`, então o CSS da sua aplicação sempre vence.

## Próximos passos

- [Instalação](/pt/guide/installation): adicione os pacotes e o CSS.
- [Laravel + Inertia](/pt/guide/laravel-inertia): setup completo com SSR, formulários e idioma vindo do backend.
- [Temas](/pt/guide/theming) e [Modo escuro](/pt/guide/dark-mode): ajuste o visual à sua marca.
- [Componentes](/pt/components/button): exemplos e API de cada componente.
