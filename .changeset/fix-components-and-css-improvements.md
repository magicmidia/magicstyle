---
"@magic-style/vue": patch
"@magic-style/css": patch
---

- **vue**: Fix reactivity in `MsRadioGroup` context so controlled state updates properly.
- **vue**: Fix `MsMenu` active index alignment to always point to valid enabled items.
- **vue**: Fix `MsField` error check to prevent empty string errors from rendering invalid state.
- **css**: Add dedicated `textarea.css` component layer and package export.
- **css**: Add `:focus:not(:focus-visible)` across base and button layers for cleaner pointer interaction.
