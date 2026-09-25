---
"@magic-style/vue": minor
---

English is now the default language of the built-in component strings.

- Without `MsProvider`/`createMsI18n`, or with an unknown locale (e.g. `"de-DE"`), components render the English (`en-US`) dictionary; the requested tag is still used for Intl formatting. Portuguese (`pt-BR`) and Spanish (`es`) remain built in.
- `MsEmojiPicker`: emoji names are English and the category button titles come from the new messages `emojiPicker.categories.*` (en, pt-BR, es).
- `MsIconPicker`: built-in icon names and categories are English.
- `MsPasswordInput`: `defaultCriteria` labels are English.

**Migration:** apps that relied on the previous Portuguese default must now set the locale explicitly, app-wide with `app.use(createMsI18n({ locale: "pt-BR" }))` or per subtree with `<MsProvider locale="pt-BR">`.
