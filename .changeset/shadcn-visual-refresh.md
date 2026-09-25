---
"@magic-style/css": minor
"@magic-style/vue": minor
---

New default look in the shadcn/ui style, applied to every theme (each theme still only swaps colors):

- **Global tokens:**
  - Shadows on the Tailwind scale (`--ms-elevation-xs|sm|md|lg|xl`), neutral and proportional to `depth`. The semantic ones (`button`, `input`, `card`, `dropdown`, `modal`) point to that scale.
  - A single focus style across the library. Fields use a border in the ring color plus a 3px halo (`--ms-focus-ring-shadow`); other elements use an offset outline. The ring color (`--ms-focus-ring-color`) reaches 3:1 on every surface of every theme.
  - `typography-size-xs` becomes 12px.
- **Controls:** 36px default height and 14px text at every size. Transparent fields with an xs shadow. The button loses the press `scale` and the letter-spacing; the icon-only button is square. `outline` and `ghost` become neutral. `soft` is back to a light background with tinted text (in button, tag and banner). Checkbox, radio and switch follow shadcn's measurements.
- **Surfaces:** cards with `radius-xl` and 24px padding. Dialog up to 512px, a 50% black overlay without blur and the `modal` shadow. Popover and menus with `radius-md`, the `dropdown` shadow and a neutral hover. The tooltip uses the primary color by default.
- **Data and feedback:**
  - The badge is solid by default.
  - `MsTabs` uses the `pill` variant by default; `line` is still available.
  - `MsAlert` is neutral by default (`tone="neutral"`).
  - Table without a header background, toast without a colored side stripe, 32px avatar.
  - `MsSkeleton` uses `pulse` by default.
- **Themes:**
  - Magic gets neutral surfaces (no bluish tint in dark mode) and keeps the blue primary.
  - The shadcn theme is complete: `base-raised`, zinc secondary, the official `destructive` and `font-display`. The shadcn-specific overrides were removed.
- **Contrast:** across 10 themes × 2 modes, 102 text pairs moved above AA. The `danger` menu item, the status bar and trend text use feedback text tokens.
