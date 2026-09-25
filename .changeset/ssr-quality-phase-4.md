---
"@magic-style/vue": patch
"@magic-style/css": patch
---

SSR e qualidade:

- `MsProvider`/`MsThemeScope` com `color-mode="system"` renderizam `data-ms-color-mode="system"` (resolvido por CSS): mesma marcação no servidor e no cliente, sem flash nem hydration mismatch. `useSystemColorMode` lê `matchMedia` só após montar e remove o listener; `MsProvider target="root"` restaura os atributos do `<html>` ao desmontar. Regras de componentes específicas de dark mode e alto contraste também valem para `system`.
- Toasts: store por aplicação via `app.use(createMsToast())` (não vaza entre requisições SSR); `MsToastContainer` anuncia por live regions persistentes (erros em região assertiva); timer pausa com foco.
- `MsDatePicker`: datas `YYYY-MM-DD`/`YYYY-MM-DD HH:mm` interpretadas no fuso local (antes abria no mês anterior em UTC-3 e falhava no Safari); modo 12h com AM/PM; "hoje" resolvido só no cliente.
- `MsSelect`: combobox recebe nome acessível do `MsField` (`aria-labelledby`) e atributos do consumidor (`aria-label`, `id`).
- Novos testes: SSR de todos os componentes, hidratação, auditoria axe-core. ESLint passa a validar arquivos `.vue` (`eslint-plugin-vue`, `vue/no-v-html`), stylelint com regras de correção no health gate, cache do Turbo invalidado por configs compartilhadas.
