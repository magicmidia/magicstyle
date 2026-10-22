---
"@magic-style/css": patch
"@magic-style/vue": patch
---

A theme scope without its own color mode now follows the nearest ancestor's mode in any theme. Before, `<MsProvider theme="nord" color-mode="inherit">` inside a dark page rendered Nord's light palette.

- `themes.css` adds `@scope ([data-ms-color-mode="light" | "dark" | "system"])` rules for `[data-ms-theme]:not([data-ms-color-mode])`. Scope proximity makes the closest ancestor win when providers are nested, and `system` follows `prefers-color-scheme`. User themes built with `msThemeToCss` get the same rules.
- `MsProvider` with `colorMode="inherit"` always renders `data-ms-theme`; it no longer omits it when the theme matches the inherited one.
