---
"@magic-style/css": patch
"@magic-style/vue": patch
---

CSS e tokens corretos:

- Corrige 25 variáveis CSS inexistentes (ex.: `--ms-color-interactive-focus`, `--ms-shadow-*`, `--ms-font-size-*`, `--ms-motion-duration-normal`), o que restaura o anel de foco em link, code, code-block, password-input e truncate. Um novo teste impede regressões.
- `base.css` deixou de sobrescrever as cores de marca dos temas, e os aliases (`--ms-color-primary`, `*-subtle`, `*-soft-*`, `status-*`) passam a ser resolvidos por escopo, então o `MsThemeScope` aninhado funciona.
- Tokens `--ms-elevation-card/button/dropdown/modal/input` agora são emitidos.
- Novos tokens `--ms-color-feedback-{info,success,danger}-solid-fg` e aliases `--ms-color-{info,warning}-contrast`. Os estados solid de badge, alert, button e tag, e os temas Nord, Supabase e Bootstrap, atingem WCAG AA, validado por um teste de contraste em todos os temas e modos.
- Todo o CSS é entregue em cascade layers (`ms.*`), com `color-scheme` por modo e suporte a `data-ms-color-mode="system"` via CSS.
