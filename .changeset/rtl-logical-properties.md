---
"@magic-style/css": patch
"@magic-style/vue": patch
---

RTL de verdade: 134 declarações físicas (`margin-left`, `padding-right`, `border-left`, `left`/`right`, `text-align: left`, raios de canto) e 4 atalhos `padding` assimétricos viraram propriedades lógicas em 43 folhas de estilo. Em LTR não muda nada: a diferença de estilos computados contra a versão anterior deu zero em 68 mil elementos das páginas do preview.

- Continuam físicas de propósito: placements com nome de lado (`placement="left"`, cantos `top-right`, `data-align="right"`), painéis posicionados via JS (`MsSelect`), tooltip, glimpse, FAB, pointer e o `code-block`. Este último agora força `direction: ltr`, porque código se lê da esquerda para a direita.
- `MsCarousel` e `MsMarquee` invertem o movimento em `:dir(rtl)`, e as setas do carrossel ficam nas bordas lógicas. O marquee com `pause-hover` também pausa com foco (WCAG 2.2.2).
- `th` dentro de `.ms-table` herda o alinhamento da tabela: o navegador centralizaria o cabeçalho quando o pai usa `start`.
- Novo teste impede a volta de propriedades físicas fora das exceções documentadas.
