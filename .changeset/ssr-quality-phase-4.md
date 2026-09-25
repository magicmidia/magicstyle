---
"@magic-style/vue": patch
"@magic-style/css": patch
---

SSR and quality:

- `MsProvider`/`MsThemeScope` with `color-mode="system"` render `data-ms-color-mode="system"` (resolved in CSS): the same markup on server and client, with no flash and no hydration mismatch. `useSystemColorMode` reads `matchMedia` only after mount and removes its listener; `MsProvider target="root"` restores the `<html>` attributes on unmount. Component rules specific to dark mode and high contrast also apply to `system`.
- Toasts: a per-app store through `app.use(createMsToast())` (doesn't leak between SSR requests); `MsToastContainer` announces through persistent live regions (errors in an assertive region); the timer pauses on focus.
- `MsDatePicker`: `YYYY-MM-DD`/`YYYY-MM-DD HH:mm` dates parsed in the local time zone (previously it opened on the previous month in UTC-3 and failed in Safari); 12-hour mode with AM/PM; "today" resolved on the client only.
- `MsSelect`: the combobox gets its accessible name from `MsField` (`aria-labelledby`) and the consumer's attributes (`aria-label`, `id`).
- New tests: SSR of every component, hydration, axe-core audit. ESLint now checks `.vue` files (`eslint-plugin-vue`, `vue/no-v-html`), Stylelint with correctness rules in the health gate, and the Turbo cache is invalidated by shared configs.
