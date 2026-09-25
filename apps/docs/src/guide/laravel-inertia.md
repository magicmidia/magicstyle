---
title: Laravel + Inertia
description: Full Magic-Style setup in a Laravel app with Inertia and Vue 3, including SSR, forms and the locale coming from the backend.
---

# Laravel + Inertia

This guide assumes a Laravel app with Inertia and Vue 3 already set up (for example, the official Vue starter kit). By the end you'll have the theme and locale driven by the backend, per-request toasts and forms that show server-side validation errors.

## 1. Install

```bash
pnpm add @magic-style/vue @magic-style/css
```

## 2. Share the locale

Send the current locale as a shared prop from the `HandleInertiaRequests` middleware. Laravel uses `pt_BR`, while the components expect a BCP 47 tag (`pt-BR`), hence the `_` to `-` swap:

```php
// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return [
        ...parent::share($request),
        'locale' => str_replace('_', '-', app()->getLocale()),
        'flash' => [
            'success' => fn () => $request->session()->get('success'),
        ],
    ];
}
```

## 3. Client entry

```ts
// resources/js/app.ts
import "@magic-style/css";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h, type DefineComponent } from "vue";
import { createMsI18n, createMsToast } from "@magic-style/vue";

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob<DefineComponent>("./Pages/**/*.vue"),
    ),
  setup({ el, App, props, plugin }) {
    const locale = props.initialPage.props.locale as string;

    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createMsToast())
      .use(createMsI18n({ locale }))
      .mount(el);
  },
});
```

Without SSR, use `createApp` instead of `createSSRApp`.

## 4. Server entry (SSR)

```ts
// resources/js/ssr.ts
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createSSRApp, h, type DefineComponent } from "vue";
import { renderToString } from "vue/server-renderer";
import { createMsI18n, createMsToast } from "@magic-style/vue";

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) =>
      resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob<DefineComponent>("./Pages/**/*.vue"),
      ),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(createMsToast())
        .use(createMsI18n({ locale: props.initialPage.props.locale as string }));
    },
  }),
);
```

::: warning Toasts and SSR
Call `createMsToast()` inside `setup`, once per app. Each request then gets its own store, and a toast never leaks to another user.
:::

Point Vite at the SSR entry and build both bundles:

```ts
// vite.config.ts
laravel({
  input: ["resources/js/app.ts"],
  ssr: "resources/js/ssr.ts",
  refresh: true,
}),
```

```bash
pnpm vite build && pnpm vite build --ssr
php artisan inertia:start-ssr
```

## 5. Root template

With `MsProvider target="root"`, the theme attributes land on `<html>`, but only on the client. Write the same values in Blade so the server HTML already has the right theme:

```blade
{{-- resources/views/app.blade.php --}}
<!DOCTYPE html>
<html
  lang="{{ str_replace('_', '-', app()->getLocale()) }}"
  data-ms-theme="magic"
  data-ms-color-mode="system"
>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    @vite('resources/js/app.ts')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
```

## 6. Layout with `MsProvider`

The layout applies the theme and color mode, follows the locale on every visit and renders toasts:

```vue
<!-- resources/js/Layouts/AppLayout.vue -->
<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
import { MsProvider, MsToastContainer, useToast } from "@magic-style/vue";

const page = usePage<{ locale: string; flash: { success: string | null } }>();
const locale = computed(() => page.props.locale);
const toast = useToast();

// Client only: a toast created during SSR would have nowhere to go.
onMounted(() => {
  watch(
    () => page.props.flash.success,
    (message) => message && toast.success(message),
    { immediate: true },
  );
});
</script>

<template>
  <MsProvider target="root" theme="magic" color-mode="system" :locale="locale">
    <slot />
    <MsToastContainer />
  </MsProvider>
</template>
```

`createMsI18n` sets the initial locale for the whole app. The provider's `:locale` follows the shared prop, so switching the locale in Laravel updates the components on the next Inertia visit, without a full reload.

## 7. Forms

`MsField` wires the label, description and error to its control (`for`, `aria-describedby`, `aria-invalid`). With Inertia's `useForm`, pass `form.errors.<field>` to the `error` prop:

```vue
<!-- resources/js/Pages/Auth/Login.vue -->
<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { MsButton, MsCheckbox, MsField, MsInput } from "@magic-style/vue";
import AppLayout from "@/Layouts/AppLayout.vue";

defineOptions({ layout: AppLayout });

const form = useForm({ email: "", password: "", remember: false });

function submit() {
  form.post("/login", { onFinish: () => form.reset("password") });
}
</script>

<template>
  <form @submit.prevent="submit">
    <MsField label="Email" :error="form.errors.email" required>
      <MsInput v-model="form.email" type="email" name="email" autocomplete="email" />
    </MsField>

    <MsField label="Password" :error="form.errors.password" required>
      <MsInput
        v-model="form.password"
        type="password"
        name="password"
        autocomplete="current-password"
        password-toggle
      />
    </MsField>

    <MsCheckbox v-model="form.remember" label="Remember me" />

    <MsButton type="submit" :loading="form.processing">Sign in</MsButton>
  </form>
</template>
```

Validation in Laravel stays the same. Inertia returns the first message of each field in `form.errors`:

```php
public function store(Request $request)
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    // ...

    return redirect()->intended('/dashboard')->with('success', 'Welcome back!');
}
```

How server errors map:

| Laravel                    | Inertia                       | Magic-Style                             |
| :------------------------- | :---------------------------- | :-------------------------------------- |
| `'email' => ['required']`  | `form.errors.email`           | `<MsField :error="form.errors.email">`  |
| `'items.*.name' => [...]`  | `form.errors['items.0.name']` | `:error="form.errors['items.0.name']"`  |
| `->with('success', '...')` | `page.props.flash.success`    | `useToast().success(...)` in the layout |

::: tip
`MsField`'s `required` prop only shows the indicator on the label. If you also want native browser validation, pass `required` to `MsInput`; it forwards the attribute to the `<input>`.
:::

`MsCheckbox` and `MsSwitch` accept plain `v-model` on boolean `useForm` fields such as `form.remember`.

## See also

- [Internationalization](/guide/i18n)
- [SSR](/guide/ssr)
- [Dark mode](/guide/dark-mode)
- [Field](/components/field) and [Toast](/components/toast)
