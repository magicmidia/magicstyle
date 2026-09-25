---
"@magic-style/css": minor
"@magic-style/vue": minor
---

Novo visual padrão no estilo shadcn/ui, aplicado a todos os temas (cada tema continua trocando só as cores):

- **Tokens globais:**
  - Sombras na escala do Tailwind (`--ms-elevation-xs|sm|md|lg|xl`), neutras e proporcionais a `depth`. As semânticas (`button`, `input`, `card`, `dropdown`, `modal`) apontam para essa escala.
  - Um único padrão de foco em toda a biblioteca. Campos usam a borda na cor do anel mais o halo de 3px (`--ms-focus-ring-shadow`); os demais elementos usam contorno com recuo. A cor do anel (`--ms-focus-ring-color`) atinge 3:1 em todas as superfícies de todos os temas.
  - `typography-size-xs` passa a 12px.
- **Controles:** altura padrão de 36px e texto de 14px em todos os tamanhos. Campos transparentes com sombra xs. O botão perde o `scale` no clique e o letter-spacing; o botão só de ícone fica quadrado. `outline` e `ghost` ficam neutros. O `soft` volta a ser fundo claro com texto no tom (em botão, tag e banner). Checkbox, radio e switch seguem as medidas do shadcn.
- **Superfícies:** cards com `radius-xl` e padding de 24px. Dialog com até 512px, overlay preto a 50% sem blur e sombra `modal`. Popover e menus com `radius-md`, sombra `dropdown` e hover neutro. O tooltip passa a usar o primário por padrão.
- **Dados e feedback:**
  - O badge é sólido por padrão.
  - O `MsTabs` usa a variante `pill` por padrão; `line` continua disponível.
  - O `MsAlert` é neutro por padrão (`tone="neutral"`).
  - Tabela sem fundo no cabeçalho, toast sem faixa lateral colorida, avatar de 32px.
  - O `MsSkeleton` usa `pulse` por padrão.
- **Temas:**
  - Magic ganha superfícies neutras (sem o tom azulado no escuro) e mantém o primário azul.
  - O tema shadcn fica completo: `base-raised`, secundário zinc, `destructive` oficial e `font-display`. Os overrides específicos do shadcn foram removidos.
- **Contraste:** em 10 temas × 2 modos, 102 pares de texto passaram para acima de AA. O item `danger` de menus, a barra de status e textos de tendência usam tokens de texto de feedback.
