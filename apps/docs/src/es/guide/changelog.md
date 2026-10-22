---
title: Registro de cambios
description: Qué cambió en cada versión, con un enlace al historial completo.
---

# Registro de cambios

El historial completo de versiones está en el [CHANGELOG.md del repositorio](https://github.com/magicmidia/magicstyle/blob/main/CHANGELOG.md). La versión más reciente es la **0.2.0** (aún no publicada en npm). `@magic-style/vue` y `@magic-style/css` se versionan juntos.

## 0.2.0 — 22/10/2026

Resumen agrupado por tema. Para actualizar una app existente, consulta [Migración](/es/guide/migration).

### Destacados

- Este sitio de documentación (inglés, portugués y español), con demos en vivo, tablas de API generadas y traducidas, generador de temas con exportación DTCG y Tokens Studio, explorador de tokens y pantallas completas en la página [Bloques](/es/blocks).
- El inglés pasa a ser el idioma por defecto de los componentes. Usa `createMsI18n({ locale: "pt-BR" })` para mantener el portugués.
- `MsButton`, `MsBadge` y `MsCard` se renderizan como enlaces o componentes de ruta con `as`/`href`.
- Un `MsProvider` anidado con `color-mode="inherit"` sigue el modo claro u oscuro del ancestro más cercano, en cualquier tema.
- Cada prop, evento y slot está documentado.

### Aspecto visual

- Nuevo aspecto por defecto tipo shadcn/ui en todos los temas: controles de 36px con texto de 14px, cards con `radius-xl`, diálogos de hasta 512px, menús y popovers con la sombra `dropdown`.
- Nuevos valores por defecto: badge `solid`, tabs `pill`, alert `neutral`, tooltip `primary`, skeleton `pulse`.
- El tema Graphite tiene paleta propia en modo claro y oscuro. Magic pasa a superficies neutras.
- Se elimina `!important` de sidebar, bento grid y scrollbar. Los botones `arrows` del scrollbar vuelven a aparecer.

### Accesibilidad

- Focus trap, pila de capas para Escape y clic fuera, y bloqueo de desplazamiento en Dialog, Drawer, ConfirmDialog, Lightbox, CommandPalette, Popover, ContextMenu y Menu.
- Navegación por teclado según APG en Menu, Select, CommandPalette, ContextMenu, Tree, SplitPane y el calendario de DatePicker (grid con tabindex itinerante).
- Correcciones en Tooltip, HoverCard, Collapse y Carousel. El carrusel incorpora un botón de pausa (WCAG 2.2.2).
- Bordes de campo y anillo de foco con 3:1 en todos los temas (WCAG 1.4.11).
- Las animaciones decorativas respetan el movimiento reducido.
- RTL con propiedades lógicas en 43 hojas de estilo. Carousel y marquee se reflejan.

### Idiomas (i18n)

- Los textos incluidos de unos 45 componentes salen de un diccionario tipado (`MsMessages`), con `createMsI18n`, `MsProvider locale` y `useMsMessages`.
- Inglés por defecto, con portugués y español incluidos.
- `MsDatePicker` genera los nombres de meses y días con `Intl` en el idioma activo.
- `MsCommandPalette` sin `items` muestra su estado vacío en lugar de comandos de demostración.

### Temas

- Contrato de 27 variables con tokens derivados en tiempo de ejecución (`color-mix()` y `oklch(from …)`).
- `defineMsTheme`, `msThemeToCss`, `checkMsThemeContrast`, `MS_THEME_CONTRACT` y la prop `overrides` en `MsProvider` y `MsThemeScope`.
- Motor de tonos: `[data-tone]` deriva hover, active, subtle, border y texto de la misma forma en todos los componentes.
- Dial de densidad funcional (`data-ms-density`). Los diales ahora aplican a cualquier elemento.

### Tokens

- Tokens compatibles con DTCG, tamaños de fuente en `rem` y primitivas OKLCH dentro del gamut sRGB.
- Escala de sombras de `--ms-elevation-xs` a `-xl`, proporcional a `--ms-depth`.
- Tokens de foco `--ms-focus-ring-color` y `--ms-focus-ring-shadow`, y de borde de campo `--ms-color-border-field`.

### SSR y DX

- `color-mode="system"` resuelto en CSS: sin parpadeo ni hydration mismatch.
- Toasts por app con `createMsToast()`.
- `MsCheckbox` y `MsSwitch` aceptan `v-model` estándar.
- Los tipos `.d.ts` resuelven con `bundler`, `node16` y `nodenext`, y todas las props públicas tienen JSDoc.
- Los enlaces pasan por `safeHref`, y el SVG de `MsIconPicker` se sanea con una allowlist.
