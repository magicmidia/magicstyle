---
title: Changelog
description: Resumo das mudanças ainda não publicadas e link para o histórico completo de versões.
---

# Changelog

O histórico completo de versões está no [CHANGELOG.md do repositório](https://github.com/magicmidia/magicstyle/blob/main/CHANGELOG.md). A última versão publicada é a **0.1.0**. `@magic-style/vue` e `@magic-style/css` são versionados juntos.

## Próxima versão (não publicada)

Resumo das mudanças já no `main`, agrupadas por tema. Para atualizar um app existente, veja [Migração](/pt/guide/migration).

### Visual

- Novo visual padrão no estilo shadcn/ui em todos os temas: controles de 36px com texto de 14px, cards com `radius-xl`, dialogs de até 512px, menus e popovers com sombra `dropdown`.
- Novos padrões de props: badge `solid`, tabs `pill`, alert `neutral`, tooltip `primary`, skeleton `pulse`.
- O tema Graphite ganha paleta própria nos modos claro e escuro. O Magic passa a ter superfícies neutras.
- `!important` removido de sidebar, bento grid e scrollbar. As setas do scrollbar `arrows` voltam a aparecer.

### Acessibilidade

- Focus trap, pilha de camadas para Esc e clique fora, e trava de rolagem em Dialog, Drawer, ConfirmDialog, Lightbox, CommandPalette, Popover, ContextMenu e Menu.
- Navegação por teclado no padrão APG em Menu, Select, CommandPalette, ContextMenu, Tree, SplitPane e no calendário do DatePicker (grid com tabindex itinerante).
- Tooltip, HoverCard, Collapse e Carousel corrigidos. O carrossel ganha botão de pausar (WCAG 2.2.2).
- Bordas de campo e anel de foco com 3:1 em todos os temas (WCAG 1.4.11).
- Animações decorativas respeitam o movimento reduzido.
- RTL com propriedades lógicas em 43 folhas de estilo. Carousel e marquee se espelham.

### Idiomas (i18n)

- Textos embutidos de cerca de 45 componentes saem de um dicionário tipado (`MsMessages`), com `createMsI18n`, `MsProvider locale` e `useMsMessages`.
- Inglês por padrão, com português e espanhol inclusos.
- `MsDatePicker` gera nomes de mês e dia com `Intl` no idioma ativo.
- `MsCommandPalette` sem `items` mostra o estado vazio, em vez de comandos de demonstração.

### Temas

- Contrato de 27 variáveis com tokens derivados em tempo real (`color-mix()` e `oklch(from …)`).
- `defineMsTheme`, `msThemeToCss`, `checkMsThemeContrast`, `MS_THEME_CONTRACT` e a prop `overrides` em `MsProvider` e `MsThemeScope`.
- Tone engine: `[data-tone]` deriva hover, active, subtle, border e texto de forma igual em todos os componentes.
- Dial de densidade funcional (`data-ms-density`). Os dials passam a valer em qualquer elemento.

### Tokens

- Tokens compatíveis com DTCG, tamanhos de fonte em `rem` e primitivas OKLCH dentro do gamut sRGB.
- Escala de sombras `--ms-elevation-xs` a `-xl`, proporcional a `--ms-depth`.
- Tokens de foco `--ms-focus-ring-color` e `--ms-focus-ring-shadow`, e de borda de campo `--ms-color-border-field`.

### SSR e DX

- `color-mode="system"` resolvido em CSS: sem flash e sem hydration mismatch.
- Toasts por app com `createMsToast()`.
- `MsCheckbox` e `MsSwitch` aceitam `v-model` padrão.
- Tipos `.d.ts` resolvem com `bundler`, `node16` e `nodenext`, e todas as props públicas têm JSDoc.
- Links passam por `safeHref`, e o SVG do `MsIconPicker` é sanitizado por allowlist.
