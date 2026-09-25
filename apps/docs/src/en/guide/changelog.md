---
title: Changelog
description: Summary of unreleased changes and a link to the full release history.
---

# Changelog

The full release history lives in the [repository CHANGELOG.md](https://github.com/magicmidia/magicstyle/blob/main/CHANGELOG.md). The latest published release is **0.1.0**. `@magic-style/vue` and `@magic-style/css` are versioned together.

## Next release (unreleased)

A summary of the changes already on `main`, grouped by theme. To upgrade an existing app, see [Migration](/en/guide/migration).

### Visual

- New shadcn/ui-style default look across every theme: 36px controls with 14px text, `radius-xl` cards, dialogs up to 512px, menus and popovers with the `dropdown` shadow.
- New prop defaults: badge `solid`, tabs `pill`, alert `neutral`, tooltip `primary`, skeleton `pulse`.
- The Graphite theme gets its own light and dark palette. Magic moves to neutral surfaces.
- `!important` removed from sidebar, bento grid and scrollbar. The `arrows` scrollbar buttons show up again.

### Accessibility

- Focus trap, a layer stack for Escape and outside clicks, and scroll lock in Dialog, Drawer, ConfirmDialog, Lightbox, CommandPalette, Popover, ContextMenu and Menu.
- APG keyboard navigation in Menu, Select, CommandPalette, ContextMenu, Tree, SplitPane and the DatePicker calendar (a grid with roving tabindex).
- Tooltip, HoverCard, Collapse and Carousel fixes. The carousel gets a pause button (WCAG 2.2.2).
- Field borders and the focus ring reach 3:1 in every theme (WCAG 1.4.11).
- Decorative animations honor reduced motion.
- RTL with logical properties in 43 stylesheets. Carousel and marquee mirror.

### Internationalization

- Built-in strings of about 45 components come from a typed dictionary (`MsMessages`), with `createMsI18n`, `MsProvider locale` and `useMsMessages`.
- Portuguese by default, with English and Spanish included.
- `MsDatePicker` builds month and day names with `Intl` in the active locale.
- `MsCommandPalette` without `items` shows its empty state instead of demo commands.

### Theming

- 27-variable contract with tokens derived at runtime (`color-mix()` and `oklch(from …)`).
- `defineMsTheme`, `msThemeToCss`, `checkMsThemeContrast`, `MS_THEME_CONTRACT` and the `overrides` prop on `MsProvider` and `MsThemeScope`.
- Tone engine: `[data-tone]` derives hover, active, subtle, border and text the same way in every component.
- Working density dial (`data-ms-density`). Dials now apply to any element.

### Tokens

- DTCG-compatible tokens, `rem` font sizes and OKLCH primitives within the sRGB gamut.
- Shadow scale `--ms-elevation-xs` to `-xl`, proportional to `--ms-depth`.
- Focus tokens `--ms-focus-ring-color` and `--ms-focus-ring-shadow`, and the field border token `--ms-color-border-field`.

### SSR and DX

- `color-mode="system"` resolved in CSS: no flash and no hydration mismatch.
- Per-app toasts with `createMsToast()`.
- `MsCheckbox` and `MsSwitch` accept plain `v-model`.
- `.d.ts` types resolve with `bundler`, `node16` and `nodenext`, and every public prop has JSDoc.
- Links go through `safeHref`, and `MsIconPicker` SVG is sanitized with an allowlist.
