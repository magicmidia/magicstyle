---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Real RTL: 134 physical declarations (`margin-left`, `padding-right`, `border-left`, `left`/`right`, `text-align: left`, corner radii) and 4 asymmetric `padding` shorthands became logical properties across 43 stylesheets. Nothing changes in LTR: the computed-style diff against the previous version was zero across 68k elements of the preview pages.

- Intentionally still physical: placements named after a side (`placement="left"`, `top-right` corners, `data-align="right"`), panels positioned from JS (`MsSelect`), tooltip, glimpse, FAB, pointer and `code-block`. The latter now forces `direction: ltr`, because code reads left to right.
- `MsCarousel` and `MsMarquee` reverse their motion under `:dir(rtl)`, and the carousel arrows sit on the logical edges. The marquee with `pause-hover` also pauses on focus (WCAG 2.2.2).
- `th` inside `.ms-table` inherits the table's alignment: the browser would center the header when the parent uses `start`.
- A new test prevents physical properties from coming back outside the documented exceptions.
