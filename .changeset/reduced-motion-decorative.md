---
"@magic-style/css": patch
---

Decorative and entrance animations honor reduced motion: accordion, badge (ping/pulse), button ripple, confirm-dialog, context-menu, glimpse, hover-card, popover, status (ping) and the progress stripes. Previously, these components' fixed durations ignored `prefers-reduced-motion` and `data-ms-motion="reduced"`; they now multiply the duration by `--ms-motion-scale`. Loading indicators (spinner, progress-radial, indeterminate progress and the select spinner) keep animating, since that motion is essential. A test prevents new fixed durations outside this list.
