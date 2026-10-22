---
title: Migración
description: Qué cambió del aspecto de la fase preview al nuevo estilo por defecto tipo shadcn/ui, y cómo volver al comportamiento anterior cuando lo necesites.
---

# Migración

La próxima versión reemplaza el aspecto de la fase preview por un estilo por defecto tipo shadcn/ui, aplicado a todos los temas. La API sigue igual. Lo que cambia son algunos valores por defecto de props, el aspecto visual y los textos incluidos. Esta página enumera cada cambio y cómo recuperar el comportamiento anterior.

## Props con nuevo valor por defecto

| Componente    | Prop        | Antes       | Ahora       | Para volver           |
| :------------ | :---------- | :---------- | :---------- | :-------------------- |
| `MsBadge`     | `variant`   | `"soft"`    | `"solid"`   | `variant="soft"`      |
| `MsTabs`      | `variant`   | `"line"`    | `"pill"`    | `variant="line"`      |
| `MsAlert`     | `tone`      | `"info"`    | `"neutral"` | `tone="info"`         |
| `MsTooltip`   | `tone`      | `"dark"`    | `"primary"` | `tone="dark"`         |
| `MsSkeleton`  | `animation` | `"shimmer"` | `"pulse"`   | `animation="shimmer"` |
| `MsHoverCard` | `width`     | `"300px"`   | `"256px"`   | `width="300px"`       |

```vue
<!-- Aspecto anterior, explícito -->
<MsBadge variant="soft">Nuevo</MsBadge>
<MsTabs variant="line">…</MsTabs>
<MsAlert tone="info">…</MsAlert>
```

## Cambios de comportamiento

### `MsCommandPalette` sin demostración

Sin `items`, la paleta ahora muestra su estado vacío. Antes mostraba 6 comandos de demostración incluidos. Pasa tus comandos de forma explícita:

```vue
<MsCommandPalette v-model="open" :items="commands" />
```

### Textos incluidos en inglés por defecto

Los textos que salían en inglés en medio de una interfaz en portugués ahora vienen del diccionario de idiomas: `MsSelect` (placeholder, búsqueda, limpiar, vacío, crear, quitar opción), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` y `MsBreadcrumbs`.

El diccionario por defecto ahora es el inglés (`en-US`). Si tu app está en español o en portugués, define el idioma al instalar el plugin:

```ts
app.use(createMsI18n({ locale: "es-ES" }));
```

Para portugués, usa `createMsI18n({ locale: "pt-BR" })`. Consulta [Idiomas (i18n)](/es/guide/i18n) para ajustar textos concretos.

### `v-model` en checkbox y switch

`MsCheckbox` y `MsSwitch` aceptan el `v-model` estándar, además de `v-model:checked`, que sigue funcionando. No hace falta cambiar nada, pero el código queda más simple con el `useForm` de Inertia:

```vue
<!-- Antes -->
<MsCheckbox v-model:checked="form.remember" label="Recordarme" />
<!-- Ahora también -->
<MsCheckbox v-model="form.remember" label="Recordarme" />
```

### Icono de cerrar de `MsDrawer`

El botón de cerrar usa un icono SVG en lugar del carácter `✕`. Para usar otro icono, rellena el slot `close`.

## Cambios de marcado y de API

### `MsButton` y `aria-expanded`

`MsButton` ya no renderiza `aria-expanded="false"` en cada botón. El atributo solo aparece cuando pasas `open`, así que los disparadores de menús y popovers deben enlazarlo:

```vue
<MsButton caret :open="menuAbierto" @click="menuAbierto = !menuAbierto">Opciones</MsButton>
```

`MsButton` ahora también renderiza enlaces: `href` genera un `<a>`, y `as` acepta una etiqueta o un componente como `RouterLink` o el `Link` de Inertia.

### `MsPagination` sin `update:pageSize`

`MsPagination` ya no declara el evento `update:pageSize`, que nunca se emitía. Sustituye `v-model:page-size` por la prop `page-size` y un selector de tamaño de página propio.

### `MsTag` clicable y eliminable

Una etiqueta `clickable` y `closable` a la vez ya no coloca el botón de cerrar dentro de un `role="button"`. La parte clicable ahora es un `span.ms-tag__action` con `role="button"`, hermano del botón de cerrar, y la raíz no tiene rol. Actualiza los selectores de CSS y las pruebas que apuntaban a `.ms-tag[role="button"]` en esas etiquetas.

### Grupos de `MsList` y `aria-current`

- `MsListGroup` debe ser hijo de `MsList`. Renderiza un `<li role="none">` con un `<ul role="group">` anidado, etiquetado por su encabezado. Mueve dentro de `MsList` los grupos que envolvían una lista entera.
- `active` en `MsListItem` ahora se expone como `aria-current="true"` (antes era `aria-selected`). Para selección única, usa la nueva prop `selectable`, que convierte la lista en un `role="listbox"` con opciones `aria-selected`.

### `label` en `MsIconButton`

`MsIconButton` recibe el nombre accesible en la nueva prop `label`. La prop `ariaLabel` queda obsoleta; el atributo `aria-label="…"` sigue funcionando.

```vue
<MsIconButton label="Cerrar"><XIcon /></MsIconButton>
```

### Clases del app shell

Las clases de la barra lateral y del pie de `MsAppShell` ya no chocan con `MsSidebar` y `MsFooter`. Actualiza tu CSS:

| Antes                    | Ahora                               |
| :----------------------- | :---------------------------------- |
| `.ms-sidebar`            | `.ms-app-shell__sidebar`            |
| `.ms-sidebar--collapsed` | `.ms-app-shell__sidebar--collapsed` |
| `.ms-sidebar__header`    | `.ms-app-shell__sidebar-header`     |
| `.ms-sidebar__content`   | `.ms-app-shell__sidebar-content`    |
| `.ms-sidebar__footer`    | `.ms-app-shell__sidebar-footer`     |
| `.ms-footer`             | `.ms-app-shell__footer`             |

## Cambios visuales

Aplican a todos los temas. Cada tema sigue cambiando solo colores, radios, profundidad y fuentes.

- **Controles:** altura por defecto de 36px y texto de 14px. Campos con fondo transparente y sombra `xs`.
- **Botones:** sin `scale` al hacer clic y sin letter-spacing. El botón solo con icono es cuadrado. `outline` y `ghost` son neutros. `soft` vuelve a ser fondo claro con texto del tono (también en tag y banner).
- **Checkbox, radio y switch:** siguen las medidas de shadcn/ui.
- **Superficies:** cards con `radius-xl` y padding de 24px. Diálogos de hasta 512px con overlay negro al 50% sin desenfoque. Popovers y menús con `radius-md`, sombra `dropdown` y hover neutro.
- **Datos y feedback:** tabla sin fondo en el encabezado, toasts sin franja lateral de color, avatares de 32px.
- **Tipografía:** `typography-size-xs` pasa a 12px, y los tamaños de fuente pasan a `rem`, siguiendo el tamaño de fuente que elija el usuario.
- **Tema Magic:** superficies neutras (sin el tinte azulado en oscuro), manteniendo el primario azul.
- **Tema Graphite:** paleta propia (antes era Magic con otro `accent`), radios más compactos y `depth` 0,6.

## Tokens y temas

- **Contrato de 27 variables.** Los temas ahora definen solo el contrato, y el resto se deriva. Los nombres de tokens existentes siguen funcionando. Si sobrescribías muchos tokens semánticos para armar un tema, pásate a las variables del contrato. Consulta [Temas](/es/guide/theming).
- **Sombras.** La nueva escala va de `--ms-elevation-xs` a `--ms-elevation-xl`, proporcional a `--ms-depth`. `--ms-elevation-1`, `-2` y `-3` siguen como alias de `sm`, `md` y `lg`.
- **Foco.** Un único estilo en toda la biblioteca: `--ms-focus-ring-color` (3:1 sobre todas las superficies) y `--ms-focus-ring-shadow` para el halo de los campos.
- **Bordes de campo más marcados.** Inputs, selects, checkbox y radio usan `--ms-color-border-field`, con 3:1 (WCAG 1.4.11). Para el aspecto anterior, más suave:

```css
:root {
  --ms-color-border-field: var(--ms-color-base-300);
  --ms-color-border-field-hover: var(--ms-color-border-strong);
}
```

- **Sin `!important`.** Sidebar, bento grid y scrollbar ya no usan `!important`, así que tus sobrescrituras funcionan con la especificidad normal.
- **Movimiento reducido.** Las animaciones decorativas (accordion, ping del badge, popover, hover card…) ahora respetan `prefers-reduced-motion` y `data-ms-motion="reduced"`.
- **RTL.** El CSS usa propiedades lógicas. En LTR no cambia nada. Consulta [RTL](/es/guide/rtl).

## Checklist

1. Actualiza `@magic-style/vue` y `@magic-style/css` a la vez. Los dos paquetes se versionan juntos.
2. Busca `MsBadge`, `MsTabs`, `MsAlert`, `MsTooltip`, `MsSkeleton` y `MsHoverCard` sin la prop de la tabla de arriba y decide si quieres el nuevo valor por defecto.
3. Pasa `items` a cada `MsCommandPalette`.
4. Si tu app no está en inglés, instala `createMsI18n` con tu `locale` (por ejemplo `es-ES`).
5. Revisa las sobrescrituras de CSS que dependían de `!important` o de tokens antiguos de sombra y foco.
6. Pasa `:open` a cada `MsButton` que abre un menú o popover y sustituye `v-model:page-size` en `MsPagination`.
7. Mueve `MsListGroup` dentro de `MsList`, usa `label` en `MsIconButton` y renombra las clases del app shell en tu CSS.
