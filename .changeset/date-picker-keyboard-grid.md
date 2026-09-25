---
"@magic-style/css": patch
"@magic-style/vue": patch
---

`MsDatePicker` follows the APG date picker pattern:

- The calendar is a labeled `role="dialog"`, and the input announces `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`.
- Days form a `role="grid"` with one row per week and a roving tabindex. Each day has a full label ("January 31, 2026"), `aria-selected`, and `aria-current="date"` for today.
- Keyboard: arrows move by day or week (in RTL, left and right are swapped); Home/End go to the start and end of the week; PageUp/PageDown change the month, and with Shift the year. The visible month follows focus.
- Closes with Escape (focus returns to the input), with an outside click or when focus leaves the component. Previously, outside clicks did not close it.
- Dates outside `minDate`/`maxDate` use `aria-disabled`: they stay navigable but not selectable. The focused day gets a visible focus ring.
