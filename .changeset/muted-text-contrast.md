---
"@magic-style/css": patch
"@magic-style/vue": patch
---

`muted` text with AA contrast (4.5:1) on every surface:

- The themes' contrast contract now requires 4.5:1 for `--ms-color-text-muted` on `surface-default`, `surface-raised` and `surface-sunken`; previously it required 3:1 on `surface-default` only. `checkMsThemeContrast` applies the same rule to custom themes.
- **Nord:** light `base-content` becomes `#242933` and dark `base-raised` becomes `#353c4a`. Muted text ranged from 4.20 to 4.44:1 in light mode and sat at 4.33:1 on cards in dark mode.
