---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Tone engine em `icon-button`, `chat-bubble`, `code` e `empty-state`, os últimos componentes com cores por tom escritas à mão:

- Tons que os tipos aceitavam mas que não tinham CSS agora funcionam: `secondary`, `accent`, `info` e `warning` no `MsIconButton` (o tipo passou a aceitar os 8 tons), e `info`, `success`, `warning` e `danger` no `MsChatBubble`. `outline` e `ghost` do icon-button aceitam qualquer tom, não só `primary`.
- O texto usa `--ms-tone-text` e o `solid` usa `--ms-tone-content`. Pares abaixo de WCAG AA nesses 4 componentes: de 164 para 1, em 10 temas × 2 modos, sem regressões. O único restante é o icon-button `ghost` `neutral`, que usa o texto atenuado padrão.
- `empty-state` deixa de usar `rgba()` fixo do tema Magic, e `code` passa de 18 regras escritas à mão para 3.
