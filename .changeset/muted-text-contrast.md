---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Texto `muted` com contraste AA (4,5:1) em todas as superfícies:

- O contrato de contraste dos temas passa a exigir 4,5:1 para `--ms-color-text-muted` sobre `surface-default`, `surface-raised` e `surface-sunken`; antes, exigia 3:1 só sobre `surface-default`. `checkMsThemeContrast` aplica a mesma regra aos temas próprios.
- **Nord:** `base-content` claro passa a `#242933` e `base-raised` escuro a `#353c4a`. O texto muted ia de 4,20 a 4,44:1 no claro e ficava em 4,33:1 sobre cards no escuro.
