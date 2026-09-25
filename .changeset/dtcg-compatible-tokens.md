---
"@magic-style/css": patch
---

DTCG-compatible tokens (baseline doc 06 §1):

- No more types outside the specification. Easing uses `cubicBezier` (an array of 4 numbers); typography roles use the `typography` composite with the official keys; letter-spacing in `em` is a `number` with the unit in `$extensions`, since `dimension` only accepts px/rem. `font-feature-settings`, which has no DTCG type, now lives in `base.css`. The generated CSS for easing, letter-spacing and features is identical to before.
- Font sizes in `rem` (equal to 16px at the default root size), so they follow the font size chosen by the user.
- 33 OKLCH primitives that were outside the sRGB gamut had their chroma reduced until they fit, keeping lightness and hue. The color is now the same on every screen; previously the browser clipped channel by channel on sRGB screens. Themes don't change, since they use the contract.
- The description of `neutral.700` quoted a hex that didn't match the value.
- The resolver reports unknown `$type`s, and new tests cover types, gamut and the hex values in descriptions.
