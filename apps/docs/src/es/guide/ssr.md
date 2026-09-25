---
title: SSR
description: Renderizado en el servidor sin parpadeo ni hydration mismatch, con toasts por petición y modo de color resuelto en CSS.
---

# SSR

Todos los componentes de `@magic-style/vue` se renderizan en el servidor sin acceder a `window` ni a `document`. Esto vale para Inertia SSR, Nuxt o tu propio servidor con Vite.

## Qué se prueba

| Prueba                                 | Qué garantiza                                                                                 |
| :------------------------------------- | :-------------------------------------------------------------------------------------------- |
| `packages/vue/tests/ssr.test.ts`       | Cada componente exportado se renderiza con `renderToString` en un entorno Node, sin `window`. |
| `packages/vue/tests/hydration.test.ts` | `MsProvider`, `MsThemeScope` y `MsDatePicker` se hidratan sin avisos de mismatch.             |

## Entrada del servidor

Crea una app nueva por petición e instala los plugins en ella:

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

Con Laravel + Inertia, lo mismo aplica a `resources/js/ssr.ts`. Consulta [Laravel + Inertia](/es/guide/laravel-inertia).

## Checklist

### Toasts por app

Instala `createMsToast()` en cada app que crees. Sin el plugin, `useToast()` usa un store compartido en el navegador, pero en el servidor crea un store desechable en cada llamada: los toasts lanzados durante el SSR se pierden. Con el plugin, cada petición tiene su propio store y nada se filtra entre usuarios.

```ts
app.use(createMsToast());
```

### Modo de color

Usa `color-mode="system"` cuando la elección del usuario no esté disponible en el servidor. El provider renderiza `data-ms-color-mode="system"` en ambos lados, y el CSS resuelve claro u oscuro con `prefers-color-scheme`. El marcado es idéntico, así que no hay parpadeo ni mismatch.

`useSystemColorMode()` solo lee `matchMedia` después del montaje. Hasta entonces, `resolvedColorMode` vale `light` en el servidor y en el cliente. Para respetar una elección explícita (`light` o `dark`) sin parpadeo, consulta [Modo oscuro](/es/guide/dark-mode#sin-parpadeo-en-ssr).

### `target="root"`

Con `target="root"`, `MsProvider` escribe los atributos (`data-ms-theme`, `data-ms-color-mode`, `dir`…) y los `overrides` en el `<html>`, pero solo en el cliente, porque en el servidor no existe `document`. Escribe los mismos atributos en la plantilla HTML del servidor:

```html
<html lang="es-ES" dir="ltr" data-ms-theme="magic" data-ms-color-mode="system"></html>
```

Con el `target="wrapper"` por defecto, los atributos van en el `div` del provider y ya salen en el HTML del servidor.

### Fechas

`MsDatePicker` interpreta `YYYY-MM-DD` y `YYYY-MM-DD HH:mm` en la zona horaria local y resuelve "hoy" solo en el cliente. Un servidor y un navegador en zonas horarias distintas no provocan mismatch.

### Idioma

Pasa el mismo `locale` al servidor y al cliente (por ejemplo, la shared prop `locale` de Inertia). Los nombres de meses y días salen de `Intl` con ese `locale`, así que ambos lados generan el mismo texto.

## Ver también

- [Modo oscuro](/es/guide/dark-mode)
- [Idiomas (i18n)](/es/guide/i18n)
- [Toast](/es/components/toast)
