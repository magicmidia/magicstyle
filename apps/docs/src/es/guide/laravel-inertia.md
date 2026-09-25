---
title: Laravel + Inertia
description: Configuración completa de Magic-Style en una app Laravel con Inertia y Vue 3, con SSR, formularios e idioma desde el backend.
---

# Laravel + Inertia

Esta guía parte de una app Laravel con Inertia y Vue 3 ya configurados (por ejemplo, el starter kit oficial de Vue). Al final tendrás el tema y el idioma controlados por el backend, toasts aislados por petición y formularios con los errores de validación del servidor.

## 1. Instalar

```bash
pnpm add @magic-style/vue @magic-style/css
```

## 2. Compartir el idioma

Envía el idioma actual como shared prop desde el middleware `HandleInertiaRequests`. Laravel usa `pt_BR` y los componentes esperan una etiqueta BCP 47 (`pt-BR`), por eso se cambia `_` por `-`:

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

## 3. Entrada del cliente

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

Sin SSR, usa `createApp` en lugar de `createSSRApp`.

## 4. Entrada del servidor (SSR)

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

::: warning Toasts y SSR
Llama a `createMsToast()` dentro de `setup`, una vez por app. Así cada petición tiene su propio store y un toast nunca se filtra a otro usuario.
:::

Indica a Vite la entrada SSR y genera los dos bundles:

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

## 5. Plantilla raíz

Con `MsProvider target="root"`, los atributos del tema van al `<html>`, pero solo en el cliente. Escribe los mismos valores en Blade para que el HTML del servidor ya salga con el tema correcto:

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

## 6. Layout con `MsProvider`

El layout aplica el tema y el modo de color, sigue el idioma en cada visita y muestra los toasts:

```vue
<!-- resources/js/Layouts/AppLayout.vue -->
<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
import { MsProvider, MsToastContainer, useToast } from "@magic-style/vue";

const page = usePage<{ locale: string; flash: { success: string | null } }>();
const locale = computed(() => page.props.locale);
const toast = useToast();

// Solo en el cliente: un toast creado durante el SSR no tendría dónde mostrarse.
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

`createMsI18n` define el idioma inicial de toda la app. El `:locale` del provider sigue la shared prop, así que al cambiar el idioma en Laravel los componentes se actualizan en la siguiente visita de Inertia, sin recargar la página.

## 7. Formularios

`MsField` conecta la etiqueta, la descripción y el error con el control (`for`, `aria-describedby`, `aria-invalid`). Con el `useForm` de Inertia, basta con pasar `form.errors.<campo>` a la prop `error`:

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
    <MsField label="Correo electrónico" :error="form.errors.email" required>
      <MsInput v-model="form.email" type="email" name="email" autocomplete="email" />
    </MsField>

    <MsField label="Contraseña" :error="form.errors.password" required>
      <MsInput
        v-model="form.password"
        type="password"
        name="password"
        autocomplete="current-password"
        password-toggle
      />
    </MsField>

    <MsCheckbox v-model="form.remember" label="Recordarme" />

    <MsButton type="submit" :loading="form.processing">Iniciar sesión</MsButton>
  </form>
</template>
```

En Laravel, la validación no cambia. Inertia devuelve el primer mensaje de cada campo en `form.errors`:

```php
public function store(Request $request)
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    // ...

    return redirect()->intended('/dashboard')->with('success', '¡Bienvenido de nuevo!');
}
```

Cómo se mapean los errores del servidor:

| Laravel                    | Inertia                       | Magic-Style                            |
| :------------------------- | :---------------------------- | :------------------------------------- |
| `'email' => ['required']`  | `form.errors.email`           | `<MsField :error="form.errors.email">` |
| `'items.*.name' => [...]`  | `form.errors['items.0.name']` | `:error="form.errors['items.0.name']"` |
| `->with('success', '...')` | `page.props.flash.success`    | `useToast().success(...)` en el layout |

::: tip
La prop `required` de `MsField` solo muestra el indicador en la etiqueta. Si también quieres la validación nativa del navegador, pasa `required` a `MsInput`; el componente lo reenvía al `<input>`.
:::

`MsCheckbox` y `MsSwitch` aceptan `v-model` directamente en campos booleanos de `useForm`, como `form.remember`.

## 8. Enlaces con Inertia

`MsButton` renderiza cualquier componente con `as`. Pasa el `Link` de Inertia para tener el aspecto de botón con las visitas de Inertia, sin recargar la página:

```vue
<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import { MsButton } from "@magic-style/vue";
</script>

<template>
  <MsButton :as="Link" href="/dashboard">Ir al panel</MsButton>
  <MsButton :as="Link" href="/settings" variant="outline" tone="neutral" preserve-scroll>
    Configuración
  </MsButton>
</template>
```

`href` y cualquier otro atributo, como `preserve-scroll`, llegan a `Link`. Con `disabled`, el botón recibe `aria-disabled="true"`, sale del orden de tabulación y bloquea la visita. Para un enlace normal a otro sitio, basta con `href`, que renderiza un `<a>`.

## Ver también

- [Idiomas (i18n)](/es/guide/i18n)
- [SSR](/es/guide/ssr)
- [Modo oscuro](/es/guide/dark-mode)
- [Field](/es/components/field) y [Toast](/es/components/toast)
