---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Accessibility of Tooltip, HoverCard, Collapse and Carousel:

- `MsTooltip`: the bubble always stays in the DOM (hidden with `v-show`), and `aria-describedby` goes to the first focusable element of the slot, not to the wrapper.
- `MsHoverCard`: drops `role="tooltip"` (the content is interactive) and closes with Escape.
- `MsCollapse`: `aria-controls` on the header points to the content, and closed content uses `inert` instead of `aria-hidden`, so focusable children leave the tab order.
- `MsCarousel`: a pause/play button for auto-rotation (WCAG 2.2.2); rotation pauses on focus, hover or `prefers-reduced-motion`; `aria-live` is "off" while rotating; indicators become buttons with `aria-current`; each slide gets an "N of total" label and `inert` when inactive.
