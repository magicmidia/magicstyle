---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Correct CSS and tokens:

- Fixes 25 non-existent CSS variables (e.g. `--ms-color-interactive-focus`, `--ms-shadow-*`, `--ms-font-size-*`, `--ms-motion-duration-normal`), which restores the focus ring on link, code, code-block, password-input and truncate. A new test prevents regressions.
- `base.css` no longer overrides the themes' brand colors, and the aliases (`--ms-color-primary`, `*-subtle`, `*-soft-*`, `status-*`) are now resolved per scope, so nested `MsThemeScope` works.
- The `--ms-elevation-card/button/dropdown/modal/input` tokens are now emitted.
- New tokens `--ms-color-feedback-{info,success,danger}-solid-fg` and aliases `--ms-color-{info,warning}-contrast`. The solid states of badge, alert, button and tag, and the Nord, Supabase and Bootstrap themes, reach WCAG AA, validated by a contrast test across every theme and mode.
- All CSS ships in cascade layers (`ms.*`), with `color-scheme` per mode and CSS support for `data-ms-color-mode="system"`.
