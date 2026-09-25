---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Acessibilidade de Tooltip, HoverCard, Collapse e Carousel:

- `MsTooltip`: o balão fica sempre no DOM (oculto com `v-show`) e `aria-describedby` vai para o primeiro elemento focável do slot, não para o wrapper.
- `MsHoverCard`: remove `role="tooltip"` (o conteúdo é interativo) e fecha com Esc.
- `MsCollapse`: `aria-controls` no cabeçalho aponta para o conteúdo, e o conteúdo fechado usa `inert` em vez de `aria-hidden`, para que os filhos focáveis saiam da ordem de tabulação.
- `MsCarousel`: botão de pausar/iniciar a rotação (WCAG 2.2.2); a rotação pausa com foco, hover ou `prefers-reduced-motion`; `aria-live` fica "off" durante a rotação; os indicadores viram botões com `aria-current`; cada slide recebe o rótulo "N de total" e `inert` quando inativo.
