---
title: Laravel + Inertia
description: Setup completo do Magic-Style num app Laravel com Inertia e Vue 3, com SSR, formulários e idioma vindo do backend.
---

# Laravel + Inertia

Este guia parte de um app Laravel com Inertia e Vue 3 já configurados (por exemplo, o starter kit oficial de Vue). Ao final você terá tema e idioma vindos do backend, toasts isolados por requisição e formulários com erros de validação do servidor.

## 1. Instalar

```bash
pnpm add @magic-style/vue @magic-style/css
```

## 2. Compartilhar o idioma

Envie o idioma atual como shared prop no middleware `HandleInertiaRequests`. O Laravel usa `pt_BR`, e os componentes esperam uma tag BCP 47 (`pt-BR`), por isso a troca de `_` por `-`:

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

## 3. Entrada do cliente

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

Sem SSR, troque `createSSRApp` por `createApp`.

## 4. Entrada do servidor (SSR)

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

::: warning Toasts no SSR
Chame `createMsToast()` dentro do `setup`, uma vez por app. Assim cada requisição tem o próprio store e um toast nunca vaza para outro usuário.
:::

Aponte a entrada SSR no Vite e gere os dois bundles:

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

## 5. Template raiz

Com `MsProvider target="root"`, os atributos de tema vão para o `<html>`, mas só no cliente. Escreva os mesmos valores no Blade para o HTML do servidor já sair com o tema certo:

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

## 6. Layout com `MsProvider`

O layout aplica tema e modo de cor, acompanha o idioma a cada navegação e mostra os toasts:

```vue
<!-- resources/js/Layouts/AppLayout.vue -->
<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
import { MsProvider, MsToastContainer, useToast } from "@magic-style/vue";

const page = usePage<{ locale: string; flash: { success: string | null } }>();
const locale = computed(() => page.props.locale);
const toast = useToast();

// Só no cliente: um toast criado durante o SSR não teria para onde ir.
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

O `createMsI18n` define o idioma inicial do app todo. O `:locale` do provider acompanha a shared prop, então trocar o idioma no Laravel atualiza os componentes na próxima visita do Inertia, sem recarregar a página.

## 7. Formulários

`MsField` liga rótulo, descrição e erro ao controle (`for`, `aria-describedby`, `aria-invalid`). Com o `useForm` do Inertia, basta passar `form.errors.<campo>` para a prop `error`:

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
    <MsField label="E-mail" :error="form.errors.email" required>
      <MsInput v-model="form.email" type="email" name="email" autocomplete="email" />
    </MsField>

    <MsField label="Senha" :error="form.errors.password" required>
      <MsInput
        v-model="form.password"
        type="password"
        name="password"
        autocomplete="current-password"
        password-toggle
      />
    </MsField>

    <MsCheckbox v-model="form.remember" label="Lembrar de mim" />

    <MsButton type="submit" :loading="form.processing">Entrar</MsButton>
  </form>
</template>
```

No Laravel, a validação continua a mesma. O Inertia devolve a primeira mensagem de cada campo em `form.errors`:

```php
public function store(Request $request)
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    // ...

    return redirect()->intended('/dashboard')->with('success', 'Bem-vindo de volta!');
}
```

Como os erros do servidor são mapeados:

| Laravel                    | Inertia                       | Magic-Style                            |
| :------------------------- | :---------------------------- | :------------------------------------- |
| `'email' => ['required']`  | `form.errors.email`           | `<MsField :error="form.errors.email">` |
| `'items.*.name' => [...]`  | `form.errors['items.0.name']` | `:error="form.errors['items.0.name']"` |
| `->with('success', '...')` | `page.props.flash.success`    | `useToast().success(...)` no layout    |

::: tip
A prop `required` do `MsField` só mostra o indicador no rótulo. Se quiser também a validação nativa do navegador, passe `required` para o `MsInput`; ele repassa o atributo ao `<input>`.
:::

`MsCheckbox` e `MsSwitch` aceitam `v-model` direto em campos booleanos do `useForm`, como `form.remember`.

## Veja também

- [Idiomas (i18n)](/guide/i18n)
- [SSR](/guide/ssr)
- [Modo escuro](/guide/dark-mode)
- [Field](/components/field) e [Toast](/components/toast)
