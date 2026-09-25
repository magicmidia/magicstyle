---
title: Temas
description: Personaliza Magic-Style con un contrato de 27 variables CSS, tokens derivados, diales de densidad, radio y contraste, y temas propios validados.
---

# Temas

Un tema de Magic-Style define **solo 27 variables** (el modelo de contrato de daisyUI y FlyonUI). Superficies, textos, bordes, estados de hover y foco, colores de feedback, la escala de radios y las sombras se **derivan en el propio CSS** con `color-mix()` y colores relativos `oklch(from …)`. Cambias una variable y todos los componentes la siguen, en cualquier modo de color.

```text
contrato del tema (27 vars)  ──►  tokens derivados (themes.css)  ──►  componentes
--ms-color-primary                --ms-color-interactive-primary-hover     .ms-button
--ms-color-base-100               --ms-color-text-muted                     .ms-alert
--ms-radius-field                 --ms-radius-md, --ms-control-radius       …
```

Todos los temas comparten el mismo aspecto por defecto, al estilo shadcn/ui: controles de 36px, sombras discretas y anillo de foco con halo. Cada tema cambia colores, radios, profundidad y fuentes. Compáralos en la [galería de temas](/es/themes) y consulta todos los tokens en la [referencia de tokens](/es/tokens).

## Temas incluidos

`magic` (por defecto), `graphite`, `shadcn`, `vercel`, `linear`, `github`, `supabase`, `nord`, `material` y `bootstrap`. Todos tienen modo claro y oscuro.

Activa un tema con el atributo `data-ms-theme` o con `MsProvider`:

```html
<html data-ms-theme="shadcn" data-ms-color-mode="system"></html>
```

```vue
<MsProvider theme="shadcn" color-mode="system">
  <App />
</MsProvider>
```

## Atributos y props

`MsProvider` (y `MsThemeScope`, para una parte de la página) escribe atributos `data-ms-*` en su propio wrapper o, con `target="root"`, en el `<html>`. Sin Vue, escribe los atributos directamente en el HTML.

| Prop de `MsProvider` | Atributo             | Valores                                                  | Por defecto   |
| :------------------- | :------------------- | :------------------------------------------------------- | :------------ |
| `theme`              | `data-ms-theme`      | nombre del tema                                          | `magic`       |
| `color-mode`         | `data-ms-color-mode` | `light`, `dark`, `system`                                | `system`      |
| `density`            | `data-ms-density`    | `compact` (0,875), `comfortable` (1), `spacious` (1,125) | `comfortable` |
| `radius`             | `data-ms-radius`     | `sharp`, `subtle`, `medium`, `rounded`                   | `medium`      |
| `contrast`           | `data-ms-contrast`   | `normal`, `high`                                         | `normal`      |
| `dir`                | `dir`                | `ltr`, `rtl`                                             | `ltr`         |
| `overrides`          | `style` (variables)  | claves del contrato                                      | —             |

- **Densidad** escala la altura de todos los controles (`--ms-control-height-*`), redondeada a píxeles enteros.
- **Radio** cambia solo el radio de los controles (`--ms-radius-control`): `sharp` es la mitad de `radius-selector`, `subtle` es `radius-selector`, `medium` es `radius-field` y `rounded` es `radius-box`.
- **Contraste alto** refuerza los textos secundarios y los bordes.

Los diales funcionan en cualquier elemento, no solo junto a `data-ms-theme`. Para cambiarlos en tiempo de ejecución, usa `useThemeContext()` (consulta [Modo oscuro](/es/guide/dark-mode)).

## Personalización rápida (solo CSS)

Carga el CSS y sobrescribe las variables del contrato. No hace falta recompilar nada:

```css
@import "@magic-style/css";

:root {
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
  --ms-font-sans: "Inter", system-ui, sans-serif;
}
```

Para cambiar solo una zona, usa el mismo bloque en un selector (`.checkout { … }`). Como el CSS de la biblioteca vive en la capa `ms`, tu CSS sin capa siempre gana.

## Personalización en tiempo de ejecución (Vue)

`MsProvider` y `MsThemeScope` aceptan `overrides` con claves del contrato. Es la vía para apps multi-tenant donde el color de marca llega desde el backend:

```vue
<script setup lang="ts">
import { MsProvider } from "@magic-style/vue";
import { usePage } from "@inertiajs/vue3";

const tenant = usePage().props.tenant as { brand: string; brandText: string };
</script>

<template>
  <MsProvider
    target="root"
    theme="shadcn"
    color-mode="system"
    :overrides="{ 'color-primary': tenant.brand, 'color-primary-content': tenant.brandText }"
  >
    <slot />
  </MsProvider>
</template>
```

## Crear un tema

### Con CSS

Un tema es un bloque por modo. Las claves que omitas se toman del tema por defecto (Magic):

```css
[data-ms-theme="acme"] {
  color-scheme: light;
  --ms-color-base-100: #ffffff;
  --ms-color-base-200: #f4f4f5;
  --ms-color-base-300: #e4e4e7;
  --ms-color-base-content: #18181b;
  --ms-color-primary: #7c3aed;
  --ms-color-primary-content: #ffffff;
  --ms-radius-field: 10px;
}

[data-ms-theme="acme"][data-ms-color-mode="dark"] {
  color-scheme: dark;
  --ms-color-base-100: #18181b;
  --ms-color-base-200: #09090b;
  --ms-color-base-300: #3f3f46;
  --ms-color-base-content: #fafafa;
  --ms-color-primary: #a78bfa;
  --ms-color-primary-content: #1e1b4b;
}
```

Actívalo con `<html data-ms-theme="acme">` o `<MsProvider theme="acme">`. Este ejemplo cubre `light` y `dark`. Para que `system` también siga al sistema operativo, repite el bloque oscuro dentro de `@media (prefers-color-scheme: dark)` con el selector `[data-ms-theme="acme"][data-ms-color-mode="system"]`, o genera todo con `msThemeToCss`, más abajo.

### Con TypeScript (validado)

`defineMsTheme` ofrece autocompletado para todas las claves. `checkMsThemeContrast` señala fallos de WCAG AA antes de publicar. `msThemeToCss` genera los bloques claro, oscuro y `system`:

```ts
import { checkMsThemeContrast, defineMsTheme, msThemeToCss } from "@magic-style/vue";

export const acme = defineMsTheme({
  name: "acme",
  extends: "shadcn", // hereda lo que no definas (por defecto: "magic")
  shared: { "radius-field": "10px", "font-sans": "Inter, system-ui, sans-serif" },
  light: { "color-primary": "#7c3aed", "color-primary-content": "#ffffff" },
  dark: { "color-primary": "#a78bfa", "color-primary-content": "#1e1b4b" },
});

const issues = checkMsThemeContrast(acme); // [] cuando todos los pares pasan
const css = msThemeToCss(acme); // guárdalo en un archivo o inyéctalo en un <style>
```

Carga el CSS generado después de `@magic-style/css`. Solo el código que importa `msThemeToCss` incluye el generador, porque el paquete es tree-shakeable.

::: details Tema oficial (contribuir al repositorio)

1. Crea `packages/internal/themes/src/themes/<nombre>.json`. El `$schema` ofrece autocompletado y validación en el editor.
2. Agrega el import en `packages/internal/themes/src/lib/themes.ts`.
3. Ejecuta `pnpm validate`. La prueba de contraste rechaza el tema si algún par de texto y fondo queda por debajo de AA.

`extras` es una salida de emergencia para rasgos que el contrato no cubre. La prueba limita a 6 extras por modo y prohíbe colores ahí.
:::

## El contrato

| Variable                              | Uso                                                             |
| :------------------------------------ | :-------------------------------------------------------------- |
| `--ms-color-base-100`                 | Superficie de la página y de los componentes                    |
| `--ms-color-base-200`                 | Superficie hundida (pozos, franjas, inputs en cards)            |
| `--ms-color-base-300`                 | Bordes y divisores                                              |
| `--ms-color-base-content`             | Texto principal sobre las superficies                           |
| `--ms-color-primary` / `-content`     | Acción principal / texto sobre ella                             |
| `--ms-color-secondary` / `-content`   | Acción secundaria                                               |
| `--ms-color-accent` / `-content`      | Destacado                                                       |
| `--ms-color-neutral` / `-content`     | Acción neutra (oscura o inversa)                                |
| `--ms-color-info` / `-content`        | Feedback informativo                                            |
| `--ms-color-success` / `-content`     | Éxito                                                           |
| `--ms-color-warning` / `-content`     | Advertencia                                                     |
| `--ms-color-danger` / `-content`      | Error / acción destructiva                                      |
| `--ms-radius-selector`                | Elementos pequeños (checkbox, tag, badge)                       |
| `--ms-radius-field`                   | Campos                                                          |
| `--ms-radius-box`                     | Cards, diálogos, popovers                                       |
| `--ms-border-width`                   | Grosor de borde por defecto                                     |
| `--ms-depth`                          | Intensidad de las sombras (0 = plano, 1 = por defecto)          |
| `--ms-font-sans`                      | Fuente de la interfaz                                           |
| `--ms-font-mono`                      | Fuente de código                                                |
| `--ms-color-base-raised` _(opcional)_ | Superficie elevada, si difiere de `base-100`                    |
| `--ms-radius-control` _(opcional)_    | Botones y controles, si difieren de los campos (p. ej. píldora) |
| `--ms-font-display` _(opcional)_      | Fuente de títulos (por defecto: `font-sans`)                    |

La lista completa, con tipos y descripciones, se exporta como `MS_THEME_CONTRACT` desde `@magic-style/vue`.

## Tokens derivados

| Token                                                                     | Cómo se calcula                                                                            |
| :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------- |
| `--ms-color-interactive-<color>-hover` / `-active`                        | 86% / 74% del color + el resto de `base-content`                                           |
| `--ms-color-interactive-<color>-subtle`, `--ms-color-feedback-<color>-bg` | 14% del color sobre la base, con saturación restaurada                                     |
| `--ms-color-interactive-<color>-text`, `--ms-color-feedback-<color>-text` | 40% del color sobre `base-content`, con saturación restaurada. Pasa AA en todos los temas. |
| `--ms-color-text-secondary` / `-muted` / `-subtle`                        | 80% / 66% / 52% de `base-content` sobre la base                                            |
| `--ms-color-border-field` / `-hover`                                      | 50% / 30% de `base-300` sobre `base-content`: bordes de campo con 3:1 (WCAG 1.4.11)        |
| `--ms-focus-ring-color`                                                   | 80% del primario + 20% de `base-content`: 3:1 sobre todas las superficies                  |
| `--ms-focus-ring-shadow`                                                  | Halo de 3px (30% del color del anillo) en los campos con foco                              |
| `--ms-radius-sm` / `-md` / `-lg` / `-xl`                                  | `selector` / `field` / `box` / `box × 1,5`                                                 |
| `--ms-elevation-xs` … `--ms-elevation-xl`                                 | Sombras neutras en la escala de Tailwind, multiplicadas por `--ms-depth`                   |

Las sombras semánticas apuntan a esa escala: `--ms-elevation-button` e `-input` usan `xs`, `-card` usa `sm`, `-dropdown` usa `md` y `-modal` usa `lg`. Los nombres antiguos `--ms-elevation-1`, `-2` y `-3` siguen funcionando como alias de `sm`, `md` y `lg`.

Cualquier token derivado se puede sobrescribir como una variable normal. Por ejemplo, para bordes de campo más suaves (por debajo de 3:1, fuera de WCAG 1.4.11):

```css
:root {
  --ms-color-border-field: var(--ms-color-base-300);
  --ms-color-border-field-hover: var(--ms-color-border-strong);
}
```

## Tonos en los componentes

Los tonos (`primary`, `success`…) funcionan igual en todos los componentes. `[data-tone="success"]` define `--ms-tone` y `--ms-tone-content`, y el motor de tonos deriva `--ms-tone-hover`, `-active`, `-subtle`, `-border` y `-text` con las mismas proporciones que los tokens del tema. Para un tono de marca puntual:

```css
.ms-button[data-tone="brand"],
.ms-badge[data-tone="brand"] {
  --ms-tone: #7c3aed;
  --ms-tone-content: #ffffff;
}
```

- **El texto usa `--ms-tone-text`**, nunca el tono puro, porque es lo que garantiza AA. El tono puro queda para rellenos, bordes e indicadores.
- `neutral` usa el color de texto base en lugar del texto tintado, porque en algunos temas es un gris claro.
