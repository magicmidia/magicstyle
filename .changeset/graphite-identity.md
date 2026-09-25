---
"@magic-style/css": patch
"@magic-style/vue": patch
---

The Graphite theme gets its own identity in light and dark modes. Previously it was Magic with a different `accent`.

- Low-saturation graphite neutrals (in dark mode, graphite-gray surfaces instead of navy), a steel-blue primary and a subtle petrol secondary; the soft indigo `accent` is kept.
- More compact radii (3/5/6px) and `depth` 0.6, for dense interfaces.
- Every contract pair passes WCAG AA; the tightest is `danger`, at 5.57:1. In the components, 47 text pairs improved, with no regressions.
