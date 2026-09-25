---
"@magic-style/css": patch
---

Removes the 20 `!important` declarations from `sidebar`, `grid` (bento) and `scrollbar`. Inside `@layer`, a library `!important` beats even the consumer's `!important`, so these rules could not be overridden.

- `scrollbar`: states swap an internal variable (`--_ms-scrollbar-thumb-current`), and hover, `always` and `none` now work through specificity alone. Fixes the `arrows` buttons, which never showed because `height: 0 !important` beat the size set for them.
- Collapsed `sidebar` and responsive bento: resolved through specificity and order.
- Only the `prefers-reduced-motion` ones in `glimpse` remain, and they are intentional. A new test prevents new `!important` in components.
