---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Tone engine: `[data-tone]` (ou a classe de tom) define `--ms-tone`/`--ms-tone-content`, e os estados (`--ms-tone-hover`, `-active`, `-subtle`, `-border`, `-text`) são derivados uma única vez com as mesmas fórmulas dos tokens do tema.

- 20 componentes migrados (button, badge, alert, avatar, select, input, navbar, scrollbar, sidebar-menu, card, tag, toast, status, choicebox, timeline, range, progress-radial, banner, confirm-dialog, progress): os blocos de 5–9 variáveis por tom viram mapeamentos únicos. Isso remove inconsistências arbitrárias entre tons, como bordas de 20% ou 25% e texto ora cru, ora seguro.
- Texto sempre usa `--ms-tone-text`: 370 pares de texto/fundo que estavam abaixo de WCAG AA passam a atender (medido em 10 temas × 2 modos). Anel de foco do `select` deixa de usar o azul fixo do tema Magic.
- Corrige `--ms-color-interactive-*-subtle`/`-text`, que ficaram sem a restauração de croma documentada.
