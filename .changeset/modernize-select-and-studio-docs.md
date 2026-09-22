---
"@magic-style/vue": minor
"@magic-style/css": minor
---

Comprehensive modernization and visual unification of MsSelect and Studio Documentation:

- Added shape geometry modifiers: `shape` ("square" | "rounded-sm" | "rounded" | "rounded-lg" | "pill").
- Added dropdown positioning controls: `placement` ("top" | "bottom" | "auto") and teleport support via `<Teleport>` to body with dynamic bounding rect tracking.
- Added advanced selection features: `counter` mode for compact badge display, `conditionalCounter` for progressive tag display (`+N mais`), `searchLimit`, and `minSearchLength`.
- Added floating label support with inset label transitions (`floatingLabel`), prefix props/slots (`prefix`), and custom option template slots (`#option`, `#selectedOption`).
- Rebuilt Studio Select documentation and gallery to cover all 32 usage patterns with live previews and official `<MsCodeBlock>` and `<MsCode>` syntax highlighting.
