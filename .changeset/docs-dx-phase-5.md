---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Documentation and DX:

- `.d.ts` types now resolve with `moduleResolution` `bundler`, `node16` and `nodenext` (previously components became `any` under node16/nodenext); post-build check (`check-dts`).
- Exports ~45 missing public types and building blocks for your own components: `useFieldControl`, `useFieldContext`, `FIELD_CONTEXT_KEY`, `THEME_CONTEXT_KEY`, `useFocusTrap`, `useDismissableLayer`, `useScrollLock`, `safeHref`, `safeRel`, `sanitizeSvg`, `msPasswordDefaultCriteria`.
- `@magic-style/css` declared as an optional peer of `@magic-style/vue`; a README in each published package.
- Counts corrected (95 components, 285 tokens) and verified by a script in the health gate; `engines.node` accepts Node ≥24.
