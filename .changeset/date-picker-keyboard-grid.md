---
"@magic-style/css": patch
"@magic-style/vue": patch
---

`MsDatePicker` segue o padrão APG de date picker:

- O calendário é um `role="dialog"` rotulado, e o input anuncia `aria-haspopup="dialog"`, `aria-expanded` e `aria-controls`.
- Os dias formam um `role="grid"` com uma linha por semana e tabindex itinerante. Cada dia tem rótulo por extenso ("31 de janeiro de 2026"), `aria-selected` e `aria-current="date"` para hoje.
- Teclado: setas movem por dia ou semana (em RTL, esquerda e direita se invertem); Home/End vão ao início e ao fim da semana; PageUp/PageDown mudam o mês, e com Shift o ano. O mês visível acompanha o foco.
- Fecha com Esc (o foco volta ao input), com clique fora ou quando o foco sai do componente. Antes, o clique fora não fechava.
- Datas fora de `minDate`/`maxDate` usam `aria-disabled`: continuam navegáveis, mas não selecionáveis. O dia focado ganha anel de foco visível.
