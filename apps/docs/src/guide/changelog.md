---
title: Changelog
description: What changed in each release, with a link to the full release history.
---

# Changelog

The full release history lives in the [repository CHANGELOG.md](https://github.com/magicmidia/magicstyle/blob/main/CHANGELOG.md). The latest release is **0.2.0** (not published to npm yet). `@magic-style/vue` and `@magic-style/css` are versioned together.

## 0.2.0 — 2026-10-22

A summary grouped by theme. To upgrade an existing app, see [Migration](/guide/migration).

### Highlights

- This documentation site (English, Portuguese and Spanish), with live demos, generated and translated API tables, a theme generator with DTCG and Tokens Studio export, a token explorer and complete screens on the [Blocks](/blocks) page.
- English is the default locale of the components. Pass `createMsI18n({ locale: "pt-BR" })` to keep Portuguese.
- `MsButton`, `MsBadge` and `MsCard` render as links or router components with `as`/`href`.
- A nested `MsProvider` with `color-mode="inherit"` follows the nearest ancestor's light or dark mode in any theme.
- Every prop, event and slot is documented.

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
- English by default, with Portuguese and Spanish included.
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
