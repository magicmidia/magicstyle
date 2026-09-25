---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Working density dial: `data-ms-density` (compact 0.875 · comfortable 1 · spacious 1.125) scales the height of every control through `--ms-control-height-*` (rounded to whole pixels). Default heights don't change. `data-ms-density` and `data-ms-radius` now work on any element, not only next to `data-ms-theme`. The Date/Emoji/Icon pickers and MaskedInput use the height tokens instead of fixed values.
