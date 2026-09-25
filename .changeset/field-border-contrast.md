---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Field borders with 3:1 contrast (WCAG 1.4.11). The new derived tokens `--ms-color-border-field` and `--ms-color-border-field-hover` (50% and 30% of `base-300` over `base-content`) are now used in input, native-select, select, date-picker, masked-input, search-field, password-input, pin-input, color-picker, checkbox and radio.

- Measured in the browser across 10 themes × 2 modes: field borders below 3:1 dropped from 170/200 to 0/200. The worst case went from 1.01:1 (in shadcn dark, the border was invisible) to 3.76:1.
- The generator's contrast test now requires 3:1 for these borders on the default, raised and sunken surfaces.
- For a softer look, override the two variables (example in `docs/theming.md`).
