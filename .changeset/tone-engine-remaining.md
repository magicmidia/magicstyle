---
"@magic-style/css": patch
"@magic-style/vue": patch
---

Tone engine in `icon-button`, `chat-bubble`, `code` and `empty-state`, the last components with hand-written per-tone colors:

- Tones that the types accepted but had no CSS now work: `secondary`, `accent`, `info` and `warning` in `MsIconButton` (the type now accepts all 8 tones), and `info`, `success`, `warning` and `danger` in `MsChatBubble`. The icon-button `outline` and `ghost` accept any tone, not only `primary`.
- Text uses `--ms-tone-text` and `solid` uses `--ms-tone-content`. Pairs below WCAG AA in these 4 components: from 164 to 1, across 10 themes × 2 modes, with no regressions. The only one left is the `ghost` `neutral` icon-button, which uses the default muted text.
- `empty-state` no longer uses the Magic theme's hardcoded `rgba()`, and `code` goes from 18 hand-written rules to 3.
