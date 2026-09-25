---
"@magic-style/css": patch
---

Animações decorativas e de entrada respeitam o movimento reduzido: accordion, badge (ping/pulse), onda do botão, confirm-dialog, context-menu, glimpse, hover-card, popover, status (ping) e as listras do progress. Antes, as durações fixas desses componentes ignoravam o `prefers-reduced-motion` e o `data-ms-motion="reduced"`; agora multiplicam a duração por `--ms-motion-scale`. Os indicadores de carregamento (spinner, progress-radial, progress indeterminado e o spin do select) continuam animando, por serem movimento essencial. Um teste impede novas durações fixas fora dessa lista.
