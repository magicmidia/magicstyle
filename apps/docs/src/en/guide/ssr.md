---
title: SSR
description: Server-side rendering with no flash and no hydration mismatch, per-request toasts and color mode resolved in CSS.
---

# SSR

Every `@magic-style/vue` component renders on the server without touching `window` or `document`. That holds for Inertia SSR, Nuxt or your own Vite server.

## What's tested

| Test                                   | What it guarantees                                                                              |
| :------------------------------------- | :---------------------------------------------------------------------------------------------- |
| `packages/vue/tests/ssr.test.ts`       | Every exported component renders with `renderToString` in a Node environment, with no `window`. |
| `packages/vue/tests/hydration.test.ts` | `MsProvider`, `MsThemeScope` and `MsDatePicker` hydrate without mismatch warnings.              |

## Server entry

Create a new app per request and install the plugins on it:

```ts
// entry-server.ts
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { createMsI18n, createMsToast } from "@magic-style/vue";
import App from "./App.vue";

export async function render(locale: string) {
  const app = createSSRApp(App).use(createMsToast()).use(createMsI18n({ locale }));

  return renderToString(app);
}
```

With Laravel + Inertia, the same applies to `resources/js/ssr.ts`. See [Laravel + Inertia](/en/guide/laravel-inertia).

## Checklist

### Per-app toasts

Install `createMsToast()` on every app you create. Without the plugin, `useToast()` uses a shared store in the browser, but on the server it creates a throwaway store on every call: toasts fired during SSR are lost. With the plugin, each request has its own store and nothing leaks between users.

```ts
app.use(createMsToast());
```

### Color mode

Use `color-mode="system"` when the user's choice isn't available on the server. The provider renders `data-ms-color-mode="system"` on both sides, and CSS resolves light or dark through `prefers-color-scheme`. The markup is identical, so there is no flash and no mismatch.

`useSystemColorMode()` only reads `matchMedia` after mount. Until then, `resolvedColorMode` is `light` on server and client. To honor an explicit choice (`light` or `dark`) without a flash, see [Dark mode](/en/guide/dark-mode#no-flash-with-ssr).

### `target="root"`

With `target="root"`, `MsProvider` writes the attributes (`data-ms-theme`, `data-ms-color-mode`, `dir`…) and the `overrides` on `<html>`, but only on the client, since there is no `document` on the server. Write the same attributes in the server HTML template:

```html
<html lang="en-US" dir="ltr" data-ms-theme="magic" data-ms-color-mode="system"></html>
```

With the default `target="wrapper"`, the attributes go on the provider's `div` and are already in the server HTML.

### Dates

`MsDatePicker` parses `YYYY-MM-DD` and `YYYY-MM-DD HH:mm` in the local time zone and resolves "today" on the client only. A server and a browser in different time zones don't cause a mismatch.

### Locale

Pass the same `locale` to server and client (for example, Inertia's `locale` shared prop). Month and day names come from `Intl` with that `locale`, so both sides produce the same text.

## See also

- [Dark mode](/en/guide/dark-mode)
- [Internationalization](/en/guide/i18n)
- [Toast](/en/components/toast)
