---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Bordas de campos com contraste de 3:1 (WCAG 1.4.11). Os novos tokens derivados `--ms-color-border-field` e `--ms-color-border-field-hover` (50% e 30% do `base-300` sobre o `base-content`) passam a ser usados em input, native-select, select, date-picker, masked-input, search-field, password-input, pin-input, color-picker, checkbox e radio.

- Medido no navegador em 10 temas × 2 modos: bordas de campo abaixo de 3:1 caíram de 170/200 para 0/200. O pior caso passou de 1,01:1 (no shadcn escuro, a borda era invisível) para 3,76:1.
- O teste de contraste do gerador passa a exigir 3:1 dessas bordas sobre as superfícies padrão, elevada e rebaixada.
- Para um visual mais suave, basta sobrescrever as duas variáveis (exemplo em `docs/theming.md`).
