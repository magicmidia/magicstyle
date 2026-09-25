---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Accessibility and behavior (WAI-ARIA APG):

- New internal primitives: `useScrollLock` (reference-counted), `useDismissableLayer` (a stack for Escape/outside click — only the top layer closes) and `useFocusTrap` (initial focus, Tab cycling, focus restoration). Applied to Dialog, Drawer, ConfirmDialog (initial focus on "Cancel"), Lightbox, CommandPalette, Popover, ContextMenu and Menu; removed every `@click.stop` that broke outside clicks.
- `MsMenu`/`MsDropdownButton`: real focus on items (roving tabindex), arrows/Home/End/typeahead, ArrowDown/ArrowUp on the trigger, Escape returns focus, clicking the trigger closes the menu. New `dismiss` event.
- `MsSelect`: keyboard works without `searchable` (including Home/End/Space); the search input has combobox semantics; option ids no longer collide; control through `open` is reliable.
- `MsPopover`: opens when the parent only listens to `update:open`; the slot's `toggle` no longer toggles twice; ARIA on the real button.
- `MsCommandPalette`: Ctrl/⌘+K focuses the search; navigation follows the grouped order and skips disabled items; combobox/listbox with `aria-activedescendant`; new `hotkey` prop.
- `MsContextMenu`: Shift+F10/Menu key, arrow navigation, never opens outside the viewport.
- Inputs (`MsInput`, `MsTextarea`, `MsNativeSelect`, `MsPasswordInput`, `MsMaskedInput`, `MsRange`, `MsSearchField`, `MsCheckbox`, `MsSwitch`): `inheritAttrs: false` — `aria-*`, `required`, `autocomplete` and listeners go to the native element; `class`/`style` stay on the root.
- `MsField`: unique ids per control; `aria-describedby`/`aria-invalid`/`aria-labelledby` also on PasswordInput, MaskedInput, Range, SearchField, PinInput, ColorPicker, FileInput, RadioGroup and Switch.
- `MsCheckbox`: `indeterminate` applied on mount. `MsCodeBlock`: highlighting no longer corrupts code with quotes.
- `MsTree`: arrows/Home/End navigation with a single tab stop. `MsSplitPane`: focusable separator with keyboard and pointer events (touch/pen), RTL. `MsDropzone`: keyboard-accessible input, `accept`/`multiple` validation for dropped files and a new `files-rejected` event.
