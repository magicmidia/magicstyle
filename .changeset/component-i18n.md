---
"@magic-style/vue": minor
---

Textos dos componentes configuráveis por idioma (i18n):

- Nomes acessíveis, placeholders padrão, estados vazios e textos de ajuda de cerca de 45 componentes saem de um dicionário tipado (`MsMessages`). O padrão é pt-BR, e o inglês vem incluso (`msMessagesEn`).
- Troque o idioma com `app.use(createMsI18n({ locale: "en-US" }))` ou `<MsProvider locale="en-US">`, e ajuste textos pontuais com `:messages="{ select: { empty: '…' } }"`. Providers aninhados herdam do ancestral, e props de texto (`placeholder`, `emptyText`, `confirmLabel`…) continuam valendo mais que o dicionário.
- `MsDatePicker` gera nomes de mês, dias da semana e o rótulo de cada dia com `Intl.DateTimeFormat` no `locale` ativo.
- Textos que estavam em inglês no meio de uma interface em português passam a sair em pt-BR por padrão: `MsSelect` (placeholder, busca, limpar, vazio, criar, remover opção), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` e `MsBreadcrumbs`.
- **Mudança de comportamento:** `MsCommandPalette` sem `items` agora mostra o estado vazio, em vez de 6 comandos de demonstração embutidos. Passe `items` explicitamente.
- Novos exports: `useMsMessages`, `provideMsMessages`, `createMsI18n`, `MS_MESSAGES_KEY`, `msMessagesPtBR`, `msMessagesEn`, `msMessagesForLocale`, `mergeMsMessages` e os tipos `MsMessages`, `MsMessagesOverride` e `MsI18nOptions`. Guia em `docs/i18n.md`.
