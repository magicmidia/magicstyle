---
"@magic-style/vue": patch
---

Every public event and slot now has a JSDoc description, so the API tables document them (previously about 350 were empty). Also:

- `MsList` with `selectable`: the listbox `tabindex` is computed from props only, so server and client render the same single tab stop.
- `MsAvatarTone` accepts `secondary` and `accent`.
- JSDoc fixes: `MsButton` `caret` does not set `aria-expanded` by itself (pass `open`); `MsCarousel` `totalSlides` is optional but recommended with SSR.
