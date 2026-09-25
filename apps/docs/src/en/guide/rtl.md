---
title: RTL
description: Right-to-left support with logical properties, dir on MsProvider and the exceptions that stay physical.
---

# RTL

Magic-Style's CSS uses logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `text-align: start`…). With `dir="rtl"`, components mirror themselves, with no extra stylesheet.

## Turning it on

For the whole document:

```html
<html lang="ar" dir="rtl"></html>
```

Or through `MsProvider`, which writes `dir` on its wrapper or, with `target="root"`, on `<html>`:

```vue
<MsProvider dir="rtl" target="root">
  <App />
</MsProvider>
```

For part of the page, use `MsThemeScope`:

```vue
<MsThemeScope dir="rtl">
  <MsCard>…</MsCard>
</MsThemeScope>
```

Direction can also change at runtime with `useThemeContext().setDir("rtl")`.

::: tip SSR
With `target="root"`, `dir` only reaches `<html>` on the client. In SSR apps, also write `dir` in the server template, as in the [dark mode](/en/guide/dark-mode) example.
:::

## What mirrors

- Spacing, borders, corner radii and text alignment in every component.
- `MsCarousel` and `MsMarquee` reverse their motion under `:dir(rtl)`, and the carousel arrows sit on the logical edges.
- In the `MsDatePicker` calendar, the left and right arrow keys swap.
- The `MsSplitPane` separator responds to the keyboard according to the direction.

## Exceptions (stay physical)

A few cases stay physical on purpose:

| Case                                                                 | Why                                                                    |
| :------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| Side-named props: `placement="left"`, corners such as `top-right`    | The name promises a side of the screen. Change the value to mirror it. |
| JS-positioned panels (`MsSelect`), tooltip, glimpse, FAB and pointer | Their position is computed in screen coordinates.                      |
| `MsCodeBlock`                                                        | Forces `direction: ltr`, because code reads left to right.             |

If you write your own CSS next to the library, prefer logical properties too, so the whole layout mirrors together.

## See also

- [Internationalization](/en/guide/i18n)
- [Carousel](/en/components/carousel) and [Marquee](/en/components/marquee)
