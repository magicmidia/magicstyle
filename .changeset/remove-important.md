---
"@magic-style/css": patch
---

Remove os 20 `!important` de `sidebar`, `grid` (bento) e `scrollbar`. Dentro de `@layer`, um `!important` da biblioteca vence até o `!important` do CSS do consumidor, então essas regras não podiam ser sobrescritas.

- `scrollbar`: os estados trocam uma variável interna (`--_ms-scrollbar-thumb-current`), e hover, `always` e `none` passam a funcionar só por especificidade. Corrige as setas de `arrows`, que nunca apareciam porque `height: 0 !important` vencia o tamanho definido para elas.
- `sidebar` recolhida e bento responsivo: resolvidos por especificidade e ordem.
- Só restam os de `prefers-reduced-motion` do `glimpse`, que são intencionais. Um novo teste impede novos `!important` em componentes.
