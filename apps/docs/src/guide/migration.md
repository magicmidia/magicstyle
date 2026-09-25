---
title: Migration
description: What changed from the preview-era look to the new shadcn/ui-style defaults, and how to opt back when you need to.
---

# Migration

The next release replaces the preview-era look with shadcn/ui-style defaults across every theme. The API stays the same. What changes are a few prop defaults, the visuals and the built-in strings. This page lists each change and how to get the previous behavior back.

## New prop defaults

| Component     | Prop        | Before      | Now         | To opt back           |
| :------------ | :---------- | :---------- | :---------- | :-------------------- |
| `MsBadge`     | `variant`   | `"soft"`    | `"solid"`   | `variant="soft"`      |
| `MsTabs`      | `variant`   | `"line"`    | `"pill"`    | `variant="line"`      |
| `MsAlert`     | `tone`      | `"info"`    | `"neutral"` | `tone="info"`         |
| `MsTooltip`   | `tone`      | `"dark"`    | `"primary"` | `tone="dark"`         |
| `MsSkeleton`  | `animation` | `"shimmer"` | `"pulse"`   | `animation="shimmer"` |
| `MsHoverCard` | `width`     | `"300px"`   | `"256px"`   | `width="300px"`       |

```vue
<!-- Previous look, made explicit -->
<MsBadge variant="soft">New</MsBadge>
<MsTabs variant="line">…</MsTabs>
<MsAlert tone="info">…</MsAlert>
```

## Behavior changes

### `MsCommandPalette` without demo items

Without `items`, the palette now shows its empty state. It used to show 6 built-in demo commands. Pass your commands explicitly:

```vue
<MsCommandPalette v-model="open" :items="commands" />
```

### Built-in strings in English by default

Strings that used to come out in English in the middle of a Portuguese UI now come from the language dictionary: `MsSelect` (placeholder, search, clear, empty, create, remove option), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` and `MsBreadcrumbs`.

The default dictionary is now English (`en-US`). If your app is in Portuguese or Spanish, set the locale when you install the plugin:

```ts
app.use(createMsI18n({ locale: "pt-BR" }));
```

See [Internationalization](/guide/i18n) to tweak individual strings.

### `v-model` on checkbox and switch

`MsCheckbox` and `MsSwitch` accept plain `v-model`, in addition to `v-model:checked`, which still works. Nothing needs to change, but code gets simpler with Inertia's `useForm`:

```vue
<!-- Before -->
<MsCheckbox v-model:checked="form.remember" label="Remember me" />
<!-- Now also -->
<MsCheckbox v-model="form.remember" label="Remember me" />
```

### `MsDrawer` close icon

The close button uses an SVG icon instead of the `✕` character. Fill the `close` slot to use a different icon.

## Markup and API changes

### `MsButton` and `aria-expanded`

`MsButton` no longer renders `aria-expanded="false"` on every button. The attribute only appears when you pass `open`, so menu and popover triggers must bind it:

```vue
<MsButton caret :open="menuOpen" @click="menuOpen = !menuOpen">Options</MsButton>
```

`MsButton` can now also render a link: `href` gives an `<a>`, and `as` takes a tag or a component such as `RouterLink` or Inertia's `Link`.

### `MsPagination` without `update:pageSize`

`MsPagination` no longer declares the `update:pageSize` event, which was never emitted. Replace `v-model:page-size` with the `page-size` prop and your own page-size selector.

### `MsTag` clickable and closable

A tag that is both `clickable` and `closable` no longer puts the close button inside a `role="button"`. The clickable part is now a sibling `span.ms-tag__action` with `role="button"`, next to the close button, and the root has no role. Update CSS selectors and tests that targeted `.ms-tag[role="button"]` for these tags.

### `MsList` groups and `aria-current`

- `MsListGroup` must be a child of `MsList`. It renders an `<li role="none">` with a nested `<ul role="group">`, labeled by its header. Move groups that wrapped a whole `MsList` inside it.
- `active` on `MsListItem` now maps to `aria-current="true"` (it used to be `aria-selected`). For a single-select list, use the new `selectable` prop, which turns the list into a `role="listbox"` with `aria-selected` options.

### `MsIconButton` `label`

`MsIconButton` takes its accessible name in the new `label` prop. The `ariaLabel` prop is deprecated; the plain `aria-label="…"` attribute keeps working.

```vue
<MsIconButton label="Close"><XIcon /></MsIconButton>
```

### App shell classes

The `MsAppShell` sidebar and footer classes no longer clash with `MsSidebar` and `MsFooter`. Update custom CSS:

| Before                   | Now                                 |
| :----------------------- | :---------------------------------- |
| `.ms-sidebar`            | `.ms-app-shell__sidebar`            |
| `.ms-sidebar--collapsed` | `.ms-app-shell__sidebar--collapsed` |
| `.ms-sidebar__header`    | `.ms-app-shell__sidebar-header`     |
| `.ms-sidebar__content`   | `.ms-app-shell__sidebar-content`    |
| `.ms-sidebar__footer`    | `.ms-app-shell__sidebar-footer`     |
| `.ms-footer`             | `.ms-app-shell__footer`             |

## Visual changes

These apply to every theme. Each theme still only swaps colors, radii, depth and fonts.

- **Controls:** 36px default height and 14px text. Fields with a transparent background and an `xs` shadow.
- **Buttons:** no `scale` on click and no letter-spacing. Icon-only buttons are square. `outline` and `ghost` are neutral. `soft` is back to a light background with tone-colored text (also in tag and banner).
- **Checkbox, radio and switch:** follow shadcn/ui sizing.
- **Surfaces:** cards with `radius-xl` and 24px padding. Dialogs up to 512px with an unblurred 50% black overlay. Popovers and menus with `radius-md`, the `dropdown` shadow and a neutral hover.
- **Data and feedback:** table header without a background, toasts without a colored side stripe, 32px avatars.
- **Typography:** `typography-size-xs` becomes 12px, and font sizes are now in `rem`, following the user's chosen font size.
- **Magic theme:** neutral surfaces (no bluish tint in dark mode), keeping its blue primary.
- **Graphite theme:** its own palette (it used to be Magic with a different `accent`), tighter radii and `depth` 0.6.

## Tokens and themes

- **27-variable contract.** Themes now set only the contract, and everything else is derived. Existing token names still work. If you overrode many semantic tokens to build a theme, move to the contract variables. See [Theming](/guide/theming).
- **Shadows.** The new scale is `--ms-elevation-xs` to `--ms-elevation-xl`, proportional to `--ms-depth`. `--ms-elevation-1`, `-2` and `-3` remain as aliases of `sm`, `md` and `lg`.
- **Focus.** One style across the library: `--ms-focus-ring-color` (3:1 on every surface) and `--ms-focus-ring-shadow` for the field halo.
- **Stronger field borders.** Inputs, selects, checkboxes and radios use `--ms-color-border-field`, at 3:1 (WCAG 1.4.11). For the previous, softer look:

```css
:root {
  --ms-color-border-field: var(--ms-color-base-300);
  --ms-color-border-field-hover: var(--ms-color-border-strong);
}
```

- **No `!important`.** Sidebar, bento grid and scrollbar no longer use `!important`, so your overrides now work through normal specificity.
- **Reduced motion.** Decorative animations (accordion, badge ping, popover, hover card…) now honor `prefers-reduced-motion` and `data-ms-motion="reduced"`.
- **RTL.** The CSS uses logical properties. Nothing changes in LTR. See [RTL](/guide/rtl).

## Checklist

1. Upgrade `@magic-style/vue` and `@magic-style/css` together. Both packages are versioned in lockstep.
2. Look for `MsBadge`, `MsTabs`, `MsAlert`, `MsTooltip`, `MsSkeleton` and `MsHoverCard` without the prop from the table above, and decide whether you want the new default.
3. Pass `items` to every `MsCommandPalette`.
4. If your app isn't in English, install `createMsI18n` with your `locale` (for example `pt-BR`).
5. Review CSS overrides that relied on `!important` or on old shadow and focus tokens.
6. Pass `:open` to every `MsButton` that opens a menu or popover, and replace `v-model:page-size` on `MsPagination`.
7. Move `MsListGroup` inside `MsList`, switch `MsIconButton` to `label` and rename app shell classes in your CSS.
