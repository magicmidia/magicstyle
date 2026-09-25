---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Tone engine: `[data-tone]` (or the tone class) sets `--ms-tone`/`--ms-tone-content`, and the states (`--ms-tone-hover`, `-active`, `-subtle`, `-border`, `-text`) are derived once, with the same formulas as the theme tokens.

- 20 components migrated (button, badge, alert, avatar, select, input, navbar, scrollbar, sidebar-menu, card, tag, toast, status, choicebox, timeline, range, progress-radial, banner, confirm-dialog, progress): blocks of 5–9 variables per tone become single mappings. This removes arbitrary inconsistencies between tones, such as 20% or 25% borders and text that was sometimes raw, sometimes safe.
- Text always uses `--ms-tone-text`: 370 text/background pairs that were below WCAG AA now pass (measured across 10 themes × 2 modes). The `select` focus ring no longer uses the Magic theme's hardcoded blue.
- Fixes `--ms-color-interactive-*-subtle`/`-text`, which lacked the documented chroma restoration.
