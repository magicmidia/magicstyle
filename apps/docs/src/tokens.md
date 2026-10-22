---
title: Tokens
description: Reference for every Magic-Style token — theme contract, derived semantic tokens and DTCG primitives — with search and live previews.
aside: false
pageClass: docs-wide
---

# Tokens

Magic-Style organizes tokens in three layers. Values and previews follow the theme and mode picked in **Customize**, in the top bar. Click a token name to copy `var(--ms-…)`.

<TokenExplorer />

## Formats

- **CSS:** the `--ms-*` variables ship in `@magic-style/css` (`tokens.css` and `themes.css`).
- **DTCG:** primitive tokens follow the W3C Design Tokens Community Group format and can feed Figma (Tokens Studio) or Style Dictionary.
- **TypeScript:** the contract is available as `MS_THEME_CONTRACT`, and `defineMsTheme` autocompletes its keys. See the [theme gallery](/themes).
