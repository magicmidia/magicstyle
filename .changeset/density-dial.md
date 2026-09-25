---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Dial de densidade funcional: `data-ms-density` (compact 0,875 · comfortable 1 · spacious 1,125) escala a altura de todos os controles por meio de `--ms-control-height-*` (arredondada para pixels inteiros). As alturas padrão não mudam. `data-ms-density` e `data-ms-radius` passam a valer em qualquer elemento, não só junto de `data-ms-theme`. Date/Emoji/Icon picker e MaskedInput usam os tokens de altura em vez de valores fixos.
