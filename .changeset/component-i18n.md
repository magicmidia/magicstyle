---
"@magic-style/vue": minor
---

Component strings configurable per language (i18n):

- Accessible names, default placeholders, empty states and help text of about 45 components come from a typed dictionary (`MsMessages`). The default is pt-BR, and English is included (`msMessagesEn`).
- Switch the language with `app.use(createMsI18n({ locale: "en-US" }))` or `<MsProvider locale="en-US">`, and tweak individual strings with `:messages="{ select: { empty: '…' } }"`. Nested providers inherit from their ancestor, and text props (`placeholder`, `emptyText`, `confirmLabel`…) still take precedence over the dictionary.
- `MsDatePicker` generates month names, weekday names and each day's label with `Intl.DateTimeFormat` in the active `locale`.
- Strings that were in English in the middle of a Portuguese interface now come out in pt-BR by default: `MsSelect` (placeholder, search, clear, empty, create, remove option), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` and `MsBreadcrumbs`.
- **Behavior change:** `MsCommandPalette` without `items` now shows the empty state instead of 6 built-in demo commands. Pass `items` explicitly.
- New exports: `useMsMessages`, `provideMsMessages`, `createMsI18n`, `MS_MESSAGES_KEY`, `msMessagesPtBR`, `msMessagesEn`, `msMessagesForLocale`, `mergeMsMessages` and the types `MsMessages`, `MsMessagesOverride` and `MsI18nOptions`. Guide in `docs/i18n.md`.
