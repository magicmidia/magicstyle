---
title: Accesibilidad
description: Objetivos WCAG 2.2 AA, patrones WAI-ARIA APG implementados, foco, contraste, movimiento reducido y cómo se prueba la biblioteca.
---

# Accesibilidad

Magic-Style apunta a **WCAG 2.2 nivel AA**. La biblioteca se ocupa de lo que depende de ella (semántica, teclado, foco, contraste de los tokens), pero la conformidad final depende de cómo armes la página: etiquetas, orden de los encabezados, textos alternativos y el propio contenido.

## Contraste

- **Texto:** todos los pares de texto y fondo del contrato pasan AA (4,5:1) en los 10 temas, en modo claro y oscuro. Una prueba rechaza cualquier tema que quede por debajo.
- **Anillo de foco:** `--ms-focus-ring-color` alcanza 3:1 contra las superficies por defecto, elevada y hundida de todos los temas (WCAG 1.4.11).
- **Bordes de campo:** `--ms-color-border-field` garantiza 3:1 en los bordes de inputs, selects, checkboxes, radios y otros controles de formulario (WCAG 1.4.11).
- **Contraste alto:** `contrast="high"` en `MsProvider` (o `data-ms-contrast="high"`) refuerza los textos secundarios y los bordes.

Si sobrescribes colores del tema, valídalos con `checkMsThemeContrast` (consulta [Temas](/es/guide/theming)).

## Foco visible

Todos los componentes usan el mismo estilo de foco:

- **Campos:** borde del color del anillo más un halo de 3px (`--ms-focus-ring-shadow`).
- **Resto de elementos:** contorno sólido con separación, en `--ms-focus-ring-color`.

En el modo de alto contraste del sistema (`forced-colors`), el contorno usa el color `Highlight`.

## Teclado y patrones APG

Los componentes interactivos siguen los patrones del [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/):

| Patrón APG         | Componentes                                                                                                                             |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Accordion          | [Accordion](/es/components/accordion)                                                                                                   |
| Alert              | [Alert](/es/components/alert)                                                                                                           |
| Alert Dialog       | [Confirm Dialog](/es/components/confirm-dialog)                                                                                         |
| Breadcrumb         | [Breadcrumbs](/es/components/breadcrumbs)                                                                                               |
| Carousel           | [Carousel](/es/components/carousel)                                                                                                     |
| Checkbox           | [Checkbox](/es/components/checkbox)                                                                                                     |
| Combobox           | [Select](/es/components/select), [Command Palette](/es/components/command-palette)                                                      |
| Date Picker Dialog | [Date Picker](/es/components/date-picker)                                                                                               |
| Dialog (Modal)     | [Dialog](/es/components/dialog), [Drawer](/es/components/drawer), [Lightbox](/es/components/lightbox)                                   |
| Disclosure         | [Collapse](/es/components/collapse)                                                                                                     |
| Menu / Menu Button | [Menu](/es/components/menu), [Context Menu](/es/components/context-menu), [Dropdown Button](/es/components/dropdown-button)             |
| Radio Group        | [Radio Group](/es/components/radio-group), [Segmented Control](/es/components/segmented-control), [Choicebox](/es/components/choicebox) |
| Slider             | [Range](/es/components/range), [Rating](/es/components/rating)                                                                          |
| Switch             | [Switch](/es/components/switch)                                                                                                         |
| Tabs               | [Tabs](/es/components/tabs)                                                                                                             |
| Toolbar            | [Dock](/es/components/dock)                                                                                                             |
| Tooltip            | [Tooltip](/es/components/tooltip)                                                                                                       |
| Tree View          | [Tree](/es/components/tree)                                                                                                             |
| Window Splitter    | [Split Pane](/es/components/split-pane)                                                                                                 |

Por debajo, tres primitivas se encargan de las capas y del foco:

- **`useFocusTrap`:** foco inicial, Tab cíclico dentro de la capa y devolución del foco al cerrar.
- **`useDismissableLayer`:** pila de capas para Escape y clic fuera. Solo se cierra la capa superior.
- **`useScrollLock`:** bloquea el desplazamiento de la página con conteo de referencias, para overlays anidados.

Menús, árboles, pestañas y el calendario usan tabindex itinerante (roving tabindex): una sola parada de tabulación por grupo, con flechas y Home/End dentro de él (y búsqueda al escribir en los menús). Las tres primitivas de arriba se exportan para que las uses en tus propios componentes.

## Formularios

- `MsField` conecta la etiqueta, la descripción y el error con el control mediante `for`, `aria-describedby` y `aria-invalid`. El mensaje de error vive en una región `aria-live="polite"`.
- Cada control recibe un id único, incluso con varios controles en el mismo campo.
- Atributos como `required`, `autocomplete` y `aria-*` llegan al elemento nativo, no al wrapper.

## Movimiento reducido

Las duraciones de animación se multiplican por `--ms-motion-scale`. Vale `0` cuando:

- el sistema pide `prefers-reduced-motion: reduce`; o
- la página (o una parte) tiene `data-ms-motion="reduced"`, para un ajuste propio de la aplicación.

```html
<html data-ms-motion="reduced"></html>
```

Los indicadores de carga (spinner, progress radial, progress indeterminado) siguen animándose, porque el movimiento es esencial para comunicar el estado. El carrusel pausa la rotación automática con foco, hover o movimiento reducido, y tiene un botón de pausa (WCAG 2.2.2).

## Cómo se prueba

- **axe-core:** `packages/vue/tests/axe.test.ts` audita componentes en estados interactivos (menús abiertos, diálogos, formularios con errores, pestañas, árbol…). Las reglas que necesitan un layout real, como el contraste, quedan cubiertas por las pruebas de contraste de los temas.
- **Contraste:** los pares de texto, el anillo de foco y los bordes de campo se miden en todos los temas y modos en el health gate del repositorio (`pnpm validate`).
- **Comportamiento:** pruebas de teclado y ARIA por componente.

::: warning
Las pruebas automáticas solo detectan una parte de los problemas. Prueba tus pantallas con teclado y con un lector de pantalla (NVDA, VoiceOver) antes de publicar.
:::
