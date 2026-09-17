---
"@magic-style/vue": patch
"@magic-style/css": patch
---

- **vue**: Add `@wheel` and `@touchmove` passive listeners alongside `@scroll` in `MsScrollbar` to immediately activate the `.is-scrolling` visibility state on mouse wheel and touch gestures, resetting smoothly after 1000ms of inactivity.
- **css**: Remove container `:hover` lock from `visibility="auto"` scrollbars so the thumb only appears during active scroll/wheel interaction and properly disappears when the user stops, even if the cursor remains over the element. Direct hover on the thumb (`::-webkit-scrollbar-thumb:hover`) remains available for manual dragging.
- **css**: Isolate standard `scrollbar-width` and `scrollbar-color` to non-WebKit browsers (Firefox) to prevent Chromium from disabling custom WebKit scrollbars, completely removing native Windows arrow buttons by default.
