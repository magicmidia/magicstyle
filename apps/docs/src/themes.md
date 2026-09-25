---
title: Theme gallery
description: The 10 official Magic-Style themes side by side in light and dark mode, plus a theme generator with AA contrast checks.
aside: false
pageClass: docs-wide
---

# Theme gallery

Every theme shares the same shadcn/ui-style structure. Each one only sets the [variable contract](/tokens): colors, radii, depth and fonts. Switch the mode to compare, or apply a theme to the whole site.

<ThemeGallery />

## Theme generator

Pick a base theme, the primary color for each mode, the neutral hue, the radius and the shadows. The preview uses the real components, contrast is checked with `checkMsThemeContrast`, and the code is ready to copy.

<ThemeBuilder />

## Using the generated theme

1. Save the definition in your project (for example `src/themes/acme.ts`).
2. Generate the CSS with `msThemeToCss` at build time, or copy the **Generated CSS** tab, and load it after `@magic-style/css`.
3. Activate it with `data-ms-theme="acme"` on `<html>` or with `<MsProvider theme="acme">`.

The contract, the derivations and the density, radius and contrast dials are covered in the [theming](/guide/theming) guide.
