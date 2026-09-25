---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Documentação e DX:

- Tipos `.d.ts` agora resolvem com `moduleResolution` `bundler`, `node16` e `nodenext` (antes os componentes viravam `any` em node16/nodenext); verificação pós-build (`check-dts`).
- Exporta ~45 tipos públicos que faltavam e blocos de construção para componentes próprios: `useFieldControl`, `useFieldContext`, `FIELD_CONTEXT_KEY`, `THEME_CONTEXT_KEY`, `useFocusTrap`, `useDismissableLayer`, `useScrollLock`, `safeHref`, `safeRel`, `sanitizeSvg`, `msPasswordDefaultCriteria`.
- `@magic-style/css` declarado como peer opcional de `@magic-style/vue`; README em cada pacote publicado.
- Contagens corrigidas (95 componentes, 285 tokens) e verificadas por script no health gate; `engines.node` aceita Node ≥24.
