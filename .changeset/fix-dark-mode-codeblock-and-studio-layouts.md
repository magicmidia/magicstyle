---
"@magic-style/vue": patch
"@magic-style/css": patch
---

- **css**: Fix dark mode color contrast across all 26 enterprise components (password-input, masked-input, pin-input, pagination, code, code-block, collapse, blockquote, icon-picker, emoji-picker, date-picker, canvas, form-wizard, dropzone, split-pane, grid, command-palette, toggle-group, fab) by migrating from non-existent surface-base / surface-elevated tokens to canonical semantic tokens (--ms-color-surface-raised, --ms-color-surface-sunken, --ms-color-surface-default, --ms-color-text-primary, and --ms-color-text-inverse).
- **vue**: Add zero-dependency, high-performance syntax highlighting in MsCodeBlock for TypeScript, JavaScript, HTML, Vue, CSS, JSON, and Bash, tokenizing keywords, strings, comments, numbers, tags, attributes, and functions.
- **css**: Add .ms-code-token--* syntax token styles mapped to brand design tokens with WCAG 2.2 AAA contrast in both light and dark mode.
- **apps/preview**: Restructure Batch 9-14 templates to standard .canvas-preview, .controls-card, .prop-row, .prop-label, .prop-select, .prop-input, and .prop-checkbox controls with minmax(0, 1fr) bounding, eliminating horizontal scroll blowouts and overlapping options in MsLink, MsCode, and all other new components.
