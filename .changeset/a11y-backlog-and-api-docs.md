---
"@magic-style/vue": minor
"@magic-style/css": minor
---

Accessibility backlog, new props and API documentation:

- `MsEmojiPicker`/`MsIconPicker`: triggers expose `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`; the panel is a labelled `role="dialog"`; Escape and outside clicks close it and return focus to the trigger; the search input is labelled (new messages `emojiPicker.label/searchLabel`, `iconPicker.label/searchLabel`). The icon picker trigger shows the icon name instead of its id.
- `MsDatePicker`: the input is connected to `MsField` (id, `aria-describedby`, `aria-invalid`); Today/Tomorrow/Next N days presets are disabled outside `minDate`/`maxDate`; in `datetime` mode a time chosen before the date is kept and picking a day no longer closes the panel.
- `MsFab`: Escape and outside clicks close the speed dial; attributes such as `aria-label` go to the main button (`inheritAttrs: false`, class/style stay on the container); `aria-controls` on the toggle.
- `MsMenu`: Escape and selection return focus to the element focused before the menu opened (or the `anchor`) when focus was in the menu.
- `MsBanner`: the `region` is named by its title, or by the new `banner.label` message.
- `MsFileInput`: dropped files are validated against `accept` (`reject` with reason `"accept"`); setting `v-model` to `null`/`[]` clears the list.
- `MsChoicebox`: radio mode is an APG radio group (one tab stop, arrow keys/Home/End move focus and selection); the `name` prop now submits the value(s) through hidden inputs.
- `MsList`: `MsListGroup` renders `<li role="none">` with a labelled nested `<ul role="group">`; `active` maps to `aria-current` unless the new `selectable` prop turns the list into a `role="listbox"` (options with `aria-selected`, arrow-key navigation); `interactive` items are focusable and activate with Enter/Space.
- `MsCollapse`, `MsAccordionItem` and `MsStep`: no `<div>` inside header buttons. `MsStep` renders its default slot below the trigger.
- `MsGlimpse`: `aria-expanded`/`aria-controls` move from the wrapper span to the focusable link (or the first focusable element of a custom trigger).
- `MsTruncate`: the toggle has `aria-expanded`/`aria-controls` and only renders when the text actually overflows (measured after mount; SSR renders no toggle).
- New `usePrefersReducedMotion()` composable (SSR-safe). `MsMarquee` gets a pause/play button (`controls`, default on; messages `marquee.pause/play`, WCAG 2.2.2) and starts paused with reduced motion; `MsParallax` stops moving and `MsPointer` hides and removes its global listener with reduced motion or when disabled.
- `MsBlockquote`: new `citeUrl` for the native `cite` attribute; `cite` is only the visible source title.
- `MsTimelineItem`: new `titleTag` (default `"h4"`), `solid` and `active` (`aria-current="step"`) props.
- `MsCarousel`: `totalSlides` is optional and derived from the registered slides.
- `MsTag`: clickable + closable tags render the clickable part and the close button as siblings (no nested controls).
- `MsPagination`: removed the never-emitted `update:pageSize` event (there is no page-size control).
- `MsMasonryGrid`: the slot `index` is the item's global index.
- `MsScrollSpy`: new `container` prop (element, ref or selector) and the default slot is rendered.
- `MsProvider`: `colorMode="inherit"` leaves out `data-ms-color-mode` (and `data-ms-theme` while it matches the inherited theme) so a wrapper follows its ancestor's mode.
- `MsChatBubble`: new `typing` prop (three-dot indicator with a localized `role="status"` label, message `chatBubble.typing`) and `secondary`/`accent` tones. `MsEmptyState`: `secondary`/`accent`/`info` icon tones and a `ring` prop.
- Props that were documented as not applied now work: `MsAppShellFooter` `bordered` (default true; `false` removes the top border), `MsTextarea` `maxRows` (caps `autoGrow`), `MsWizardStep.icon` (shown in the step badge).
- `MsAvatar` `src`/`name` and `MsBadge` `tone`/`count` accept an explicit `undefined`.
- CSS: `.ms-field-description`/`.ms-field-error` have no UA margins; the neutral avatar fallback has an inset hairline; slotted SVGs in `.ms-icon-button` follow the button size (16/16/20px for sm/md/lg); disabled date presets; nested list groups; marquee viewport/control; stepper content; typing indicator label and reduced motion; pointer hidden with reduced motion.
- Every public prop now has a JSDoc description (API tables), plus descriptions for the events and slots touched here.
- `MsButton`: no longer renders `aria-expanded="false"` on every button; the attribute is only set when `open` is passed.
