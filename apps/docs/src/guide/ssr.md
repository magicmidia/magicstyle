---
title: SSR
description: Renderização no servidor sem flash e sem hydration mismatch, com toasts por requisição e modo de cor resolvido em CSS.
---

# SSR

Todos os componentes do `@magic-style/vue` renderizam no servidor sem acessar `window` ou `document`. Isso vale para Inertia SSR, Nuxt ou um servidor Vite próprio.

## O que é testado

| Teste                                  | O que garante                                                                             |
| :------------------------------------- | :---------------------------------------------------------------------------------------- |
| `packages/vue/tests/ssr.test.ts`       | Cada componente exportado renderiza com `renderToString` num ambiente Node, sem `window`. |
| `packages/vue/tests/hydration.test.ts` | `MsProvider`, `MsThemeScope` e `MsDatePicker` hidratam sem avisos de mismatch.            |

## Entrada do servidor

Crie um app novo por requisição e instale os plugins dentro dela:

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

Com Laravel + Inertia, o mesmo vale para o `resources/js/ssr.ts`. Veja [Laravel + Inertia](/guide/laravel-inertia).

## Checklist

### Toasts por app

Instale `createMsToast()` em cada app criado. Sem o plugin, o `useToast()` usa um store compartilhado no navegador, mas no servidor cria um store descartável a cada chamada: toasts disparados durante o SSR se perdem. Com o plugin, cada requisição tem o seu store e nada vaza entre usuários.

```ts
app.use(createMsToast());
```

### Modo de cor

Use `color-mode="system"` quando a escolha do usuário não estiver disponível no servidor. O provider renderiza `data-ms-color-mode="system"` dos dois lados, e o CSS resolve claro ou escuro com `prefers-color-scheme`. A marcação é idêntica, então não há flash nem mismatch.

O `useSystemColorMode()` só lê `matchMedia` depois da montagem. Até lá, `resolvedColorMode` vale `light` no servidor e no cliente. Para respeitar uma escolha explícita (`light` ou `dark`) sem flash, veja [Modo escuro](/guide/dark-mode#sem-flash-no-ssr).

### `target="root"`

Com `target="root"`, o `MsProvider` grava os atributos (`data-ms-theme`, `data-ms-color-mode`, `dir`…) e os `overrides` no `<html>`, mas só no cliente, porque no servidor não existe `document`. Escreva os mesmos atributos no template HTML do servidor:

```html
<html lang="pt-BR" dir="ltr" data-ms-theme="magic" data-ms-color-mode="system"></html>
```

Com o `target="wrapper"` padrão, os atributos saem no `div` do provider e já vêm no HTML do servidor.

### Datas

O `MsDatePicker` interpreta `YYYY-MM-DD` e `YYYY-MM-DD HH:mm` no fuso local e resolve "hoje" só no cliente. Servidor e navegador em fusos diferentes não causam mismatch.

### Idioma

Passe o mesmo `locale` para o servidor e para o cliente (por exemplo, a shared prop `locale` do Inertia). Nomes de mês e dia saem do `Intl` com esse `locale`, então os dois lados geram o mesmo texto.

## Veja também

- [Modo escuro](/guide/dark-mode)
- [Idiomas (i18n)](/guide/i18n)
- [Toast](/components/toast)
