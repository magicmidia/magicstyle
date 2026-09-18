---
"@magic-style/vue": minor
"@magic-style/css": minor
---

Comprehensive security, microanimations, visual polish, and performance overhaul:

- **Security & Memory Safety**:
  - `MsIconPicker`: Enforced strict SVG sanitization stripping `<script>`, `<style>`, inline event handlers (`on*`), and `javascript:` URIs.
  - `MsCodeBlock` & `MsCode`: Implemented full HTML entity escaping and guaranteed unmount cleanup for copy notification timers.
  - `MsSelect`, `MsMenu`, `MsPopover`, `MsContextMenu`: Refactored global listeners (`click`, `keydown`, `resize`, `scroll`) to dynamically bind only while open and automatically detach upon closing or component unmount.
  - `MsSplitPane`, `MsParallax`, `MsPointer`: Guarded mouse/scroll event listeners with `requestAnimationFrame` throttling and explicit lifecycle teardown to prevent memory leaks and layout thrashing.
  - `MsDialog`, `MsDrawer`, `MsConfirmDialog`: Integrated native Vue `<Transition>` wrappers for animated overlays and panels.

- **Tokenized Microanimations & CSS Modernization**:
  - `base.css`: Introduced `--ms-motion-scale: 1` token and comprehensive zero-motion overrides for both `@media (prefers-reduced-motion: reduce)` and `[data-ms-motion="reduced"]` attribute selectors without `!important`.
  - `button.css`, `card.css`: Added active press micro-transforms (`scale(0.98)` / `scale(0.995)`).
  - `input.css`: Implemented multi-layered OKLCH ambient focus ring halos.
  - `switch.css`: Added spring-like thumb elongation feedback on active drag/press.
  - `toast.css`: Tokenized animation durations to `--ms-motion-duration-fast` with hardware-accelerated transforms.
  - `dialog.css`, `drawer.css`, `confirm-dialog.css`: Created enter/leave transition states matching Vue `<Transition>`.

- **Documentation & Studio Synchronization**:
  - Synchronized all 82 catalog directory items on the landing page with deep-link Studio hashes.
  - Added bidirectional hash-routing in Studio with browser history synchronization and instant tab activation.
  - Added motion toggle control in the floating Theme Settings Drawer (`theme-toggle.js` & `components.html`).
