---
title: Modo oscuro
description: Modo claro, oscuro o del sistema con data-ms-color-mode, cambio en tiempo de ejecución y cómo evitar el parpadeo con SSR.
---

# Modo oscuro

Cada tema tiene modo claro y oscuro. El modo se elige con el atributo `data-ms-color-mode`, que acepta tres valores:

| Valor    | Comportamiento                                                                            |
| :------- | :---------------------------------------------------------------------------------------- |
| `light`  | Siempre claro.                                                                            |
| `dark`   | Siempre oscuro.                                                                           |
| `system` | Sigue al sistema operativo mediante `prefers-color-scheme`, solo con CSS, sin JavaScript. |

Cada bloque de tema también define `color-scheme`, así que las barras de desplazamiento y los controles nativos siguen el modo.

## Solo con CSS

```html
<html data-ms-theme="magic" data-ms-color-mode="system">
  …
</html>
```

## Con `MsProvider`

`color-mode` es `system` por defecto:

```vue
<MsProvider theme="magic" color-mode="system">
  <App />
</MsProvider>
```

Por defecto, los atributos van al `div` del provider. Con `target="root"` van al `<html>`, lo que también pinta el fondo de la página y los elementos teletransportados al `body`. Al desmontarse, el provider restaura los atributos que tenía el `<html>`.

Para cambiar el modo solo en una parte de la página, usa `MsThemeScope`:

```vue
<MsThemeScope color-mode="dark">
  <MsCard>Siempre oscuro</MsCard>
</MsThemeScope>
```

## Cambiar en tiempo de ejecución

`useThemeContext()` (o su alias `useMagicStyle()`) devuelve el contexto del provider más cercano:

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
    {{ isDark ? "Modo claro" : "Modo oscuro" }}
  </MsButton>
</template>
```

| Campo                 | Tipo                                 | Descripción                                         |
| :-------------------- | :----------------------------------- | :-------------------------------------------------- |
| `colorModePreference` | `Ref<"light" \| "dark" \| "system">` | Lo que eligió el usuario.                           |
| `resolvedColorMode`   | `ComputedRef<"light" \| "dark">`     | El modo en uso, con `system` ya resuelto.           |
| `setColorMode(mode)`  | función                              | Cambia la preferencia (`light`, `dark` o `system`). |

El contexto también expone `setTheme`, `setDensity`, `setRadius`, `setContrast` y `setDir`.

::: tip
En `system`, `resolvedColorMode` vale `light` en el servidor y en el primer render del cliente. El valor real del sistema llega después del montaje. El aspecto no depende de eso, porque el CSS resuelve `system` por su cuenta.
:::

## Sin parpadeo en SSR

Con `color-mode="system"`, el provider renderiza `data-ms-color-mode="system"` en el servidor y en el cliente. El CSS decide entre claro y oscuro, así que no hay parpadeo ni hydration mismatch.

El parpadeo aparece cuando el usuario elige `light` o `dark` y esa elección solo existe en el navegador. Dos formas de evitarlo:

**1. Guarda la elección en una cookie y renderízala en el servidor.** Es la opción más robusta con Laravel:

```blade
<html data-ms-theme="magic" data-ms-color-mode="{{ request()->cookie('ms-color-mode', 'system') }}">
```

Pasa el mismo valor a `MsProvider` (por ejemplo, como shared prop de Inertia) y escribe la cookie cuando el usuario cambie de modo.

**2. Aplica la elección antes del primer pintado** con un script inline en el `<head>`, antes del CSS:

```html
<script>
  try {
    const mode = localStorage.getItem("ms-color-mode");
    if (mode) document.documentElement.setAttribute("data-ms-color-mode", mode);
  } catch {}
</script>
```

::: warning
Con `target="root"`, el provider sobrescribe los atributos del `<html>` al montarse. Pásale el mismo modo que aplicó el servidor o el script; si no, la página cambiará de modo justo después de cargar.
:::

## Ver también

- [Temas](/es/guide/theming)
- [SSR](/es/guide/ssr)
- [Provider](/es/components/provider) y [Theme Scope](/es/components/theme-scope)
