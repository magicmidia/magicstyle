---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Acessibilidade e comportamento (WAI-ARIA APG):

- Novas primitivas internas: `useScrollLock` (ref-count), `useDismissableLayer` (pilha para Esc/clique fora — fecha só a camada do topo) e `useFocusTrap` (foco inicial, Tab cíclico, restauração de foco). Aplicadas em Dialog, Drawer, ConfirmDialog (foco inicial em "Cancelar"), Lightbox, CommandPalette, Popover, ContextMenu e Menu; removidos todos os `@click.stop` que quebravam o clique fora.
- `MsMenu`/`MsDropdownButton`: foco real nos itens (roving tabindex), setas/Home/End/typeahead, ArrowDown/ArrowUp no trigger, Esc devolve o foco, clicar no trigger fecha o menu. Novo evento `dismiss`.
- `MsSelect`: teclado funciona sem `searchable` (Home/End/Espaço inclusive); input de busca com semântica de combobox; ids de opção sem colisão; controle via `open` confiável.
- `MsPopover`: abre quando o pai só escuta `update:open`; `toggle` do slot não alterna duas vezes; ARIA no botão real.
- `MsCommandPalette`: Ctrl/⌘+K foca a busca; navegação segue a ordem agrupada e pula itens desabilitados; combobox/listbox com `aria-activedescendant`; nova prop `hotkey`.
- `MsContextMenu`: Shift+F10/tecla Menu, navegação por setas, nunca abre fora da viewport.
- Inputs (`MsInput`, `MsTextarea`, `MsNativeSelect`, `MsPasswordInput`, `MsMaskedInput`, `MsRange`, `MsSearchField`, `MsCheckbox`, `MsSwitch`): `inheritAttrs: false` — `aria-*`, `required`, `autocomplete` e listeners vão para o elemento nativo; `class`/`style` ficam na raiz.
- `MsField`: ids únicos por controle; `aria-describedby`/`aria-invalid`/`aria-labelledby` também em PasswordInput, MaskedInput, Range, SearchField, PinInput, ColorPicker, FileInput, RadioGroup e Switch.
- `MsCheckbox`: `indeterminate` aplicado na montagem. `MsCodeBlock`: realce não corrompe mais código com aspas.
- `MsTree`: navegação por setas/Home/End com um único tab stop. `MsSplitPane`: separador focável com teclado e pointer events (toque/caneta), RTL. `MsDropzone`: input acessível por teclado, validação de `accept`/`multiple` em arquivos arrastados e novo evento `files-rejected`.
