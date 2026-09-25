---
title: Dark mode
description: Light, dark or system color mode with data-ms-color-mode, runtime switching and how to avoid a flash with SSR.
---

# Dark mode

Every theme has a light and a dark mode. The mode is picked by the `data-ms-color-mode` attribute, which takes three values:

| Value    | Behavior                                                                   |
| :------- | :------------------------------------------------------------------------- |
| `light`  | Always light.                                                              |
| `dark`   | Always dark.                                                               |
| `system` | Follows the OS through `prefers-color-scheme`, in CSS only, no JavaScript. |

Each theme block also sets `color-scheme`, so scrollbars and native controls follow the mode.

## CSS only

```html
<html data-ms-theme="magic" data-ms-color-mode="system">
  …
</html>
```

## With `MsProvider`

`color-mode` defaults to `system`:

```vue
<MsProvider theme="magic" color-mode="system">
  <App />
</MsProvider>
```

By default the attributes go on the provider's `div`. With `target="root"` they go on `<html>`, which also paints the page background and elements teleported to `body`. On unmount, the provider restores whatever attributes `<html>` had before.

To change the mode for part of the page, use `MsThemeScope`:

```vue
<MsThemeScope color-mode="dark">
  <MsCard>Always dark</MsCard>
</MsThemeScope>
```

## Switching at runtime

`useThemeContext()` (or its alias `useMagicStyle()`) returns the nearest provider's context:

```vue
<script setup lang="ts">
import { computed } from "vue";
import { MsButton, useThemeContext } from "@magic-style/vue";

const theme = useThemeContext()!;
const isDark = computed(() => theme.resolvedColorMode.value === "dark");

function toggle() {
  theme.setColorMode(isDark.value ? "light" : "dark");
}
</script>

<template>
  <MsButton variant="outline" @click="toggle">
    {{ isDark ? "Light mode" : "Dark mode" }}
  </MsButton>
</template>
```

| Field                 | Type                                 | Description                                         |
| :-------------------- | :----------------------------------- | :-------------------------------------------------- |
| `colorModePreference` | `Ref<"light" \| "dark" \| "system">` | What the user picked.                               |
| `resolvedColorMode`   | `ComputedRef<"light" \| "dark">`     | The mode in use, with `system` already resolved.    |
| `setColorMode(mode)`  | function                             | Changes the preference (`light`, `dark`, `system`). |

The context also exposes `setTheme`, `setDensity`, `setRadius`, `setContrast` and `setDir`.

::: tip
In `system` mode, `resolvedColorMode` is `light` on the server and on the first client render. The real OS value arrives after mount. The visuals don't depend on it, because CSS resolves `system` on its own.
:::

## No flash with SSR

With `color-mode="system"`, the provider renders `data-ms-color-mode="system"` on both server and client. CSS picks light or dark, so there is no flash and no hydration mismatch.

A flash shows up when the user picks `light` or `dark` and that choice only lives in the browser. Two ways to avoid it:

**1. Store the choice in a cookie and render it on the server.** This is the most robust option with Laravel:

```blade
<html data-ms-theme="magic" data-ms-color-mode="{{ request()->cookie('ms-color-mode', 'system') }}">
```

Pass the same value to `MsProvider` (for example as an Inertia shared prop) and write the cookie when the user switches modes.

**2. Apply the choice before first paint** with an inline script in `<head>`, before the CSS:

```html
<script>
  try {
    const mode = localStorage.getItem("ms-color-mode");
    if (mode) document.documentElement.setAttribute("data-ms-color-mode", mode);
  } catch {}
</script>
```

::: warning
With `target="root"`, the provider overwrites the `<html>` attributes on mount. Pass it the same mode the server or the script applied, or the page will switch modes right after loading.
:::

## See also

- [Theming](/guide/theming)
- [SSR](/guide/ssr)
- [Provider](/components/provider) and [Theme Scope](/components/theme-scope)
