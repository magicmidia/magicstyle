---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Accessibility, i18n and SSR fixes:

- i18n: `MsField` uses `label.optional` (no hardcoded "(optional)"); new messages `rating.star`, `tag.removeLabel`, `chatBubble.*`, `avatar.moreCount`, `codeBlock.label` and `table.label` (pt-BR, en, es).
- `MsRating`: translated star labels, `aria-valuetext` and `MsField` integration (id, `aria-labelledby`, `aria-describedby`, `aria-invalid`).
- `MsSegmentedControl`: roving tabindex (the selected item, or the first enabled one, is focusable); arrows/Home/End move focus together with the selection; the `name` prop now submits the value through an `<input type="hidden">`.
- `MsProgressRadial`: `aria-valuenow` uses the raw value (consistent with `aria-valuemax`) and gains a percentage `aria-valuetext`.
- `MsCommandPalette`: item `icon` is rendered (fallback ❖).
- `MsMaskedInput`/`MsPasswordInput`: the invalid state also comes from the `MsField` `error`; `password-input.css` gains error styles.
- `MsBanner`/`MsToast`: default icons for the `secondary` and `accent` tones.
- `MsIconButton`: new `label` prop; `ariaLabel` becomes optional (deprecated) so that `aria-label="…"` in templates type-checks. Dev warning when there is no accessible name.
- `MsColorPicker`: `aria-pressed` on the swatches. `MsRadioGroup`: the root receives the `MsField` control id.
- `MsTag`: Enter/Space are only handled on the tag itself (the remove button works from the keyboard again), and the remove button includes the tag text.
- `MsSnippet`: arrows/Home/End move focus to the tab. `MsTableHeaderCell`: sorting through a `<button>` (keyboard) with `aria-sort` on the `th`.
- `MsChatBubble`: translated status with `role="img"`. `MsAvatarGroup`: "+N" counter with `role="img"` and a label with the count.
- `MsTabs`: `aria-controls` only points to registered panels (after mount, SSR-stable).
- `MsCodeBlock`: focusable scrollable body (`role="region"`, labeled with the file name or "Code"); syntax colors use text tokens with AA contrast. `MsTable`: a scrolling container (horizontal, or vertical with `stickyHeader` and a fixed height) becomes a focusable region labeled by the caption.
- `MsSelect`: chip-remove and clear buttons with a 24px target size (WCAG 2.5.8).
- `MsAppShellSidebar`/`MsAppShellFooter`: classes renamed to `ms-app-shell__sidebar*` / `ms-app-shell__footer` (no longer collide with `MsSidebar`/`MsFooter`); `MsAppShell` works without `v-model` (uncontrolled).
- `MsCol`: `span="auto"`/`"flex-1"` are now styled. `MsNavbar`: `data-tone` only with an explicit tone. `MsDockItem` and `MsCard interactive`: activation with Enter/Space. `MsSidebar`: the button label follows the effective state.
- `MsBreadcrumbs`: separators inside the `<li>` (valid HTML); `MsBreadcrumbSeparator` honors `as`; `MsBreadcrumbItem` gains the `separator` slot.
- `MsSidebarMenu`: submenus inside a `<ul>` (no hydration error), closed with `inert` instead of `aria-hidden`; labels are visually hidden (not `display: none`) in collapsed mode.
- `MsIconPicker`: custom SVGs render after mount (no hydration mismatch). `MsGlimpse`: phrasing elements only (`span`), valid inside a `<p>`.
