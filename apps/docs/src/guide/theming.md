---
title: Theming
description: Customize Magic-Style with a 27-variable CSS contract, derived tokens, density, radius and contrast dials, and validated custom themes.
---

# Theming

A Magic-Style theme sets **only 27 variables** (the contract model used by daisyUI and FlyonUI). Surfaces, text, borders, hover and focus states, feedback colors, the radius scale and shadows are **derived in CSS** with `color-mix()` and relative `oklch(from …)` colors. Change one variable and every component follows, in every color mode.

```text
theme contract (27 vars)  ──►  derived tokens (themes.css)  ──►  components
--ms-color-primary             --ms-color-interactive-primary-hover     .ms-button
--ms-color-base-100            --ms-color-text-muted                     .ms-alert
--ms-radius-field              --ms-radius-md, --ms-control-radius       …
```

Every theme shares the same shadcn/ui-style default look: 36px controls, subtle shadows and a focus ring with a halo. Each theme swaps colors, radii, depth and fonts. Compare them in the [theme gallery](/themes) and browse every token in the [token reference](/tokens).

## Built-in themes

`magic` (default), `graphite`, `shadcn`, `vercel`, `linear`, `github`, `supabase`, `nord`, `material` and `bootstrap`. All of them have light and dark modes.

Turn a theme on with the `data-ms-theme` attribute or with `MsProvider`:

```html
<html data-ms-theme="shadcn" data-ms-color-mode="system"></html>
```

```vue
<MsProvider theme="shadcn" color-mode="system">
  <App />
</MsProvider>
```

## Attributes and props

`MsProvider` (and `MsThemeScope`, for part of the page) writes `data-ms-*` attributes on its own wrapper or, with `target="root"`, on `<html>`. Without Vue, write the attributes straight into the HTML.

| `MsProvider` prop | Attribute            | Values                                                   | Default       |
| :---------------- | :------------------- | :------------------------------------------------------- | :------------ |
| `theme`           | `data-ms-theme`      | theme name                                               | `magic`       |
| `color-mode`      | `data-ms-color-mode` | `light`, `dark`, `system`                                | `system`      |
| `density`         | `data-ms-density`    | `compact` (0.875), `comfortable` (1), `spacious` (1.125) | `comfortable` |
| `radius`          | `data-ms-radius`     | `sharp`, `subtle`, `medium`, `rounded`                   | `medium`      |
| `contrast`        | `data-ms-contrast`   | `normal`, `high`                                         | `normal`      |
| `dir`             | `dir`                | `ltr`, `rtl`                                             | `ltr`         |
| `overrides`       | `style` (variables)  | contract keys                                            | —             |

- **Density** scales the height of every control (`--ms-control-height-*`), rounded to whole pixels.
- **Radius** changes only the control radius (`--ms-radius-control`): `sharp` is half of `radius-selector`, `subtle` is `radius-selector`, `medium` is `radius-field` and `rounded` is `radius-box`.
- **High contrast** strengthens secondary text and borders.

The dials work on any element, not only next to `data-ms-theme`. To change them at runtime, use `useThemeContext()` (see [Dark mode](/guide/dark-mode)).

## Quick customization (CSS only)

Load the CSS and override the contract variables. Nothing needs rebuilding:

```css
@import "@magic-style/css";

:root {
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
  --ms-font-sans: "Inter", system-ui, sans-serif;
}
```

To change just one area, use the same block on a selector (`.checkout { … }`). Since the library CSS lives in the `ms` layer, your unlayered CSS always wins.

## Runtime customization (Vue)

`MsProvider` and `MsThemeScope` accept `overrides` with contract keys. This is the way to go for multi-tenant apps where the brand color comes from the backend:

```vue
<script setup lang="ts">
import { MsProvider } from "@magic-style/vue";
import { usePage } from "@inertiajs/vue3";

const tenant = usePage().props.tenant as { brand: string; brandText: string };
</script>

<template>
  <MsProvider
    target="root"
    theme="shadcn"
    color-mode="system"
    :overrides="{ 'color-primary': tenant.brand, 'color-primary-content': tenant.brandText }"
  >
    <slot />
  </MsProvider>
</template>
```

## Creating a theme

### With CSS

A theme is one block per mode. Keys you leave out come from the default theme (Magic):

```css
[data-ms-theme="acme"] {
  color-scheme: light;
  --ms-color-base-100: #ffffff;
  --ms-color-base-200: #f4f4f5;
  --ms-color-base-300: #e4e4e7;
  --ms-color-base-content: #18181b;
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
}

[data-ms-theme="acme"][data-ms-color-mode="dark"] {
  color-scheme: dark;
  --ms-color-base-100: #18181b;
  --ms-color-base-200: #09090b;
  --ms-color-base-300: #3f3f46;
  --ms-color-base-content: #fafafa;
  --ms-color-primary: #a78bfa;
  --ms-color-primary-content: #1e1b4b;
}
```

Turn it on with `<html data-ms-theme="acme">` or `<MsProvider theme="acme">`. This example covers `light` and `dark`. For `system` to follow the OS as well, repeat the dark block inside `@media (prefers-color-scheme: dark)` with the `[data-ms-theme="acme"][data-ms-color-mode="system"]` selector, or generate everything with `msThemeToCss`, below.

### With TypeScript (validated)

`defineMsTheme` gives you autocomplete for every key. `checkMsThemeContrast` reports WCAG AA failures before you ship. `msThemeToCss` generates the light, dark and `system` blocks:

```ts
import { checkMsThemeContrast, defineMsTheme, msThemeToCss } from "@magic-style/vue";

export const acme = defineMsTheme({
  name: "acme",
  extends: "shadcn", // inherits whatever you don't set (default: "magic")
  shared: { "radius-field": "10px", "font-sans": "Inter, system-ui, sans-serif" },
  light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
  dark: { "color-primary": "#a78bfa", "color-primary-content": "#1e1b4b" },
});

const issues = checkMsThemeContrast(acme); // [] when every pair passes
const css = msThemeToCss(acme); // write it to a file or inject it in a <style>
```

Load the generated CSS after `@magic-style/css`. Only code that imports `msThemeToCss` pulls in the generator, since the package is tree-shakeable.

::: details Official theme (contributing to the repository)

1. Create `packages/internal/themes/src/themes/<name>.json`. The `$schema` gives you autocomplete and validation in the editor.
2. Add the import to `packages/internal/themes/src/lib/themes.ts`.
3. Run `pnpm validate`. The contrast test fails the theme if any text/background pair drops below AA.

`extras` is an escape hatch for signatures the contract doesn't cover. The test caps it at 6 extras per mode and forbids colors there.
:::

## The contract

| Variable                              | Purpose                                                    |
| :------------------------------------ | :--------------------------------------------------------- |
| `--ms-color-base-100`                 | Page and component surface                                 |
| `--ms-color-base-200`                 | Sunken surface (wells, stripes, inputs on cards)           |
| `--ms-color-base-300`                 | Borders and dividers                                       |
| `--ms-color-base-content`             | Main text on surfaces                                      |
| `--ms-color-primary` / `-content`     | Main action / text on top of it                            |
| `--ms-color-secondary` / `-content`   | Secondary action                                           |
| `--ms-color-accent` / `-content`      | Highlight                                                  |
| `--ms-color-neutral` / `-content`     | Neutral action (dark or inverse)                           |
| `--ms-color-info` / `-content`        | Informational feedback                                     |
| `--ms-color-success` / `-content`     | Success                                                    |
| `--ms-color-warning` / `-content`     | Warning                                                    |
| `--ms-color-danger` / `-content`      | Error / destructive action                                 |
| `--ms-radius-selector`                | Small elements (checkbox, tag, badge)                      |
| `--ms-radius-field`                   | Fields                                                     |
| `--ms-radius-box`                     | Cards, dialogs, popovers                                   |
| `--ms-border-width`                   | Default border width                                       |
| `--ms-depth`                          | Shadow intensity (0 = flat, 1 = default)                   |
| `--ms-font-sans`                      | UI font                                                    |
| `--ms-font-mono`                      | Code font                                                  |
| `--ms-color-base-raised` _(optional)_ | Raised surface, when it differs from `base-100`            |
| `--ms-radius-control` _(optional)_    | Buttons and controls, when they differ from fields (pills) |
| `--ms-font-display` _(optional)_      | Heading font (default: `font-sans`)                        |

The full list, with types and descriptions, is exported as `MS_THEME_CONTRACT` from `@magic-style/vue`.

## Derived tokens

| Token                                                                     | How it's computed                                                                     |
| :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| `--ms-color-interactive-<color>-hover` / `-active`                        | 86% / 74% of the color + the rest of `base-content`                                   |
| `--ms-color-interactive-<color>-subtle`, `--ms-color-feedback-<color>-bg` | 14% of the color over the base, with chroma restored                                  |
| `--ms-color-interactive-<color>-text`, `--ms-color-feedback-<color>-text` | 40% of the color over `base-content`, with chroma restored. Passes AA in every theme. |
| `--ms-color-text-secondary` / `-muted` / `-subtle`                        | 80% / 66% / 52% of `base-content` over the base                                       |
| `--ms-color-border-field` / `-hover`                                      | 50% / 30% of `base-300` over `base-content`: 3:1 field borders (WCAG 1.4.11)          |
| `--ms-focus-ring-color`                                                   | 80% primary + 20% `base-content`: 3:1 on every surface                                |
| `--ms-focus-ring-shadow`                                                  | 3px halo (30% of the ring color) used on focused fields                               |
| `--ms-radius-sm` / `-md` / `-lg` / `-xl`                                  | `selector` / `field` / `box` / `box × 1.5`                                            |
| `--ms-elevation-xs` … `--ms-elevation-xl`                                 | Neutral shadows on the Tailwind scale, multiplied by `--ms-depth`                     |

Semantic shadows point at that scale: `--ms-elevation-button` and `-input` use `xs`, `-card` uses `sm`, `-dropdown` uses `md` and `-modal` uses `lg`. The legacy names `--ms-elevation-1`, `-2` and `-3` still work as aliases of `sm`, `md` and `lg`.

Any derived token can be overridden like a regular variable. For example, for softer field borders (below 3:1, outside WCAG 1.4.11):

```css
:root {
  --ms-color-border-field: var(--ms-color-base-300);
  --ms-color-border-field-hover: var(--ms-color-border-strong);
}
```

## Tones in components

Tones (`primary`, `success`…) work the same way in every component. `[data-tone="success"]` sets `--ms-tone` and `--ms-tone-content`, and the tone engine derives `--ms-tone-hover`, `-active`, `-subtle`, `-border` and `-text` with the same ratios as the theme tokens. For a one-off brand tone:

```css
.ms-button[data-tone="brand"],
.ms-badge[data-tone="brand"] {
  --ms-tone: #7c3aed;
  --ms-tone-content: #ffffff;
}
```

- **Text uses `--ms-tone-text`**, never the raw tone, because that's what guarantees AA. The raw tone is for fills, borders and indicators.
- `neutral` uses the base text color instead of tinted text, because in some themes it is a light gray.
