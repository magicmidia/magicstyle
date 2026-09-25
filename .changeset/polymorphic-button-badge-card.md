---
"@magic-style/vue": minor
"@magic-style/css": minor
---

Polymorphic `as`/`href` rendering:

- `MsButton`: new `href` (renders an `<a>`) and `as` (any element or component, e.g. `RouterLink` or Inertia `Link`; extra attributes such as `to` pass through). `type`/`disabled` only apply to a native `<button>`; a disabled or loading link/component drops its `href`, gets `aria-disabled="true"` and `tabindex="-1"`, and its clicks are prevented. The default `<button>` markup (and SSR output) is unchanged; data attributes and slots are kept in every mode.
- `MsBadge`: new `as` prop for the standalone badge (default `span`).
- `MsCard`: new `as` (default `div`) and `href` (renders an `<a>` link card with hover/focus styling and no `interactive` button semantics); new `"soft"` variant so `tone` renders as a tinted surface.
- CSS: `.ms-button[aria-disabled="true"]` looks disabled; `.ms-card[data-link]` gets the interactive card styling.
