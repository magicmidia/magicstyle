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

### Built-in strings in Portuguese

Strings that came out in English in the middle of a Portuguese UI now come from the language dictionary, in pt-BR by default: `MsSelect` (placeholder, search, clear, empty, create, remove option), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` and `MsBreadcrumbs`.

If your app is in English, turn on the English dictionary:

```ts
app.use(createMsI18n({ locale: "en-US" }));
```

See [Internationalization](/en/guide/i18n) to tweak individual strings.

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

- **27-variable contract.** Themes now set only the contract, and everything else is derived. Existing token names still work. If you overrode many semantic tokens to build a theme, move to the contract variables. See [Theming](/en/guide/theming).
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
- **RTL.** The CSS uses logical properties. Nothing changes in LTR. See [RTL](/en/guide/rtl).

## Checklist

1. Upgrade `@magic-style/vue` and `@magic-style/css` together. Both packages are versioned in lockstep.
2. Look for `MsBadge`, `MsTabs`, `MsAlert`, `MsTooltip`, `MsSkeleton` and `MsHoverCard` without the prop from the table above, and decide whether you want the new default.
3. Pass `items` to every `MsCommandPalette`.
4. If your app isn't in Portuguese, install `createMsI18n` with your `locale`.
5. Review CSS overrides that relied on `!important` or on old shadow and focus tokens.
