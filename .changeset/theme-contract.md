---
"@magic-style/css": minor
"@magic-style/vue": minor
---

New theme model: a 27-variable contract + derived tokens (the daisyUI/FlyonUI model).

- Each theme defines only the contract (`--ms-color-base-100/200/300/content`, 8 role colors + `-content`, `--ms-radius-selector/field/box`, `--ms-border-width`, `--ms-depth`, `--ms-font-sans/mono`, and 3 optional ones). The ~150 semantic tokens (surface, text, border, interactive, feedback, radius, elevation and legacy aliases) are derived at runtime with `color-mix()` and `oklch(from …)`; existing names remain valid.
- Customization in one place: overriding `--ms-color-primary` (or any contract key) updates hover, active, subtle, text, focus and borders in every component and mode.
- Official themes reduced from ~40–50 tokens per mode to 21 per mode + 8 shared, in JSON with `$schema` (editor autocomplete and validation). Every text/background pair passes WCAG AA (the test covers 10 themes × 2 modes).
- `@magic-style/vue`: `defineMsTheme()`, `msThemeToCss()`, `checkMsThemeContrast()`, `MS_THEME_CONTRACT` and the `overrides` prop on `MsProvider`/`MsThemeScope` (runtime brand colors, e.g. multi-tenant).
- Component CSS: 1,143 dead fallbacks and 529 hardcoded hex colors removed (sidebar-menu, progress, navbar and footer now follow the theme); button rewritten with 2 variables per tone.
- Visible changes: more legible "muted" text and dark text on Nord's light `accent` (both previously failed contrast). Guide: `docs/theming.md`.
