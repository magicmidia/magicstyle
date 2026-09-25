---
"@magic-style/css": minor
"@magic-style/vue": minor
---

Novo modelo de temas: contrato de 27 variáveis + tokens derivados (modelo daisyUI/FlyonUI).

- Cada tema define só o contrato (`--ms-color-base-100/200/300/content`, 8 cores de papel + `-content`, `--ms-radius-selector/field/box`, `--ms-border-width`, `--ms-depth`, `--ms-font-sans/mono`, e 3 opcionais). Os ~150 tokens semânticos (surface, text, border, interactive, feedback, radius, elevation e aliases legados) são derivados em runtime com `color-mix()` e `oklch(from …)`; os nomes existentes continuam válidos.
- Personalização em um lugar: sobrescrever `--ms-color-primary` (ou qualquer chave do contrato) atualiza hover, active, subtle, texto, foco e bordas em todos os componentes e modos.
- Temas oficiais reduzidos de ~40–50 tokens por modo para 21 por modo + 8 compartilhados, em JSON com `$schema` (autocompletar/validação no editor). Todos os pares de texto/fundo passam WCAG AA (teste cobre 10 temas × 2 modos).
- `@magic-style/vue`: `defineMsTheme()`, `msThemeToCss()`, `checkMsThemeContrast()`, `MS_THEME_CONTRACT` e prop `overrides` em `MsProvider`/`MsThemeScope` (cores de marca em tempo real, ex.: multi-tenant).
- CSS dos componentes: 1.143 fallbacks mortos e 529 cores hex fixas removidos (sidebar-menu, progress, navbar e footer agora seguem o tema); botão reescrito com 2 variáveis por tom.
- Mudanças visíveis: textos "muted" mais legíveis e texto escuro sobre o `accent` claro do Nord (antes falhavam contraste). Guia: `docs/theming.md`.
