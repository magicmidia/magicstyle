---
title: RTL
description: Soporte para idiomas de derecha a izquierda con propiedades lógicas, dir en MsProvider y las excepciones que siguen siendo físicas.
---

# RTL

El CSS de Magic-Style usa propiedades lógicas (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `text-align: start`…). Con `dir="rtl"`, los componentes se reflejan solos, sin hojas de estilo extra.

## Activar

En todo el documento:

```html
<html lang="ar" dir="rtl"></html>
```

O con `MsProvider`, que escribe `dir` en su wrapper o, con `target="root"`, en el `<html>`:

```vue
<MsProvider dir="rtl" target="root">
  <App />
</MsProvider>
```

Para una parte de la página, usa `MsThemeScope`:

```vue
<MsThemeScope dir="rtl">
  <MsCard>…</MsCard>
</MsThemeScope>
```

La dirección también puede cambiar en tiempo de ejecución con `useThemeContext().setDir("rtl")`.

::: tip SSR
Con `target="root"`, `dir` solo llega al `<html>` en el cliente. En apps con SSR, escribe `dir` también en la plantilla del servidor, como en el ejemplo de [modo oscuro](/es/guide/dark-mode).
:::

## Qué se refleja

- Espaciados, bordes, radios de esquina y alineación de texto de todos los componentes.
- `MsCarousel` y `MsMarquee` invierten el movimiento con `:dir(rtl)`, y las flechas del carrusel quedan en los bordes lógicos.
- En el calendario de `MsDatePicker`, las flechas izquierda y derecha se invierten.
- El separador de `MsSplitPane` responde al teclado según la dirección.

## Excepciones (siguen siendo físicas)

Algunos casos siguen siendo físicos a propósito:

| Caso                                                                              | Motivo                                                                     |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| Props con nombre de lado: `placement="left"`, esquinas como `top-right`           | El nombre promete un lado de la pantalla. Cambia el valor para reflejarlo. |
| Paneles posicionados con JavaScript (`MsSelect`), tooltip, glimpse, FAB y pointer | La posición se calcula en coordenadas de pantalla.                         |
| `MsCodeBlock`                                                                     | Fuerza `direction: ltr`, porque el código se lee de izquierda a derecha.   |

Si escribes CSS propio junto a la biblioteca, usa también propiedades lógicas. Así todo el layout se refleja a la vez.

## Ver también

- [Idiomas (i18n)](/es/guide/i18n)
- [Carousel](/es/components/carousel) y [Marquee](/es/components/marquee)
