---
"@magic-style/vue": patch
"@magic-style/css": patch
---

- **themes/tokens**: Rework dark mode color palette from crushed pitch-black to refined modern dark slate/obsidian (Linear/Vercel/GitHub inspired) with distinct 3-layer surface elevations (sunken, default, raised), luminous borders, and WCAG AAA/AA text contrast.
- **themes**: Introduce comprehensive semantic aliases and compatibility fallbacks for shorthand CSS custom properties (--ms-color-surface, --ms-color-text, --ms-color-border, --ms-color-primary, etc.).
- **css**: Update accordion, confirm-dialog, context-menu, drawer, color-picker, popover, toast, list, file-input, chat-bubble, stepper, timeline, and range component styles to use canonical semantic tokens.
- **preview**: Enhance Preview Studio topbar, canvas preview dot-grid background, and variation galleries to adapt seamlessly across Light and Dark color modes.
