---
title: Introducción
description: Qué es Magic-Style, qué paquetes publica y por dónde empezar.
---

# Introducción

Magic-Style es un design system para Vue 3: componentes accesibles, temas definidos por un contrato de 27 variables CSS y SSR sin parpadeo. Está pensado para apps Laravel + Inertia, pero funciona en cualquier app Vue 3.5+.

```vue
<script setup lang="ts">
import { MsButton, MsField, MsInput } from "@magic-style/vue";
</script>

<template>
  <MsField label="Correo electrónico" description="Se usa para iniciar sesión">
    <MsInput type="email" name="email" autocomplete="email" />
  </MsField>
  <MsButton>Guardar</MsButton>
</template>
```

## Paquetes

| Paquete            | Qué incluye                                                                               |
| :----------------- | :---------------------------------------------------------------------------------------- |
| `@magic-style/vue` | 95 componentes Vue 3 en TypeScript estricto, composables y utilidades de temas e idiomas. |
| `@magic-style/css` | CSS sin framework: tokens, 10 temas con modo claro y oscuro, y clases semánticas `.ms-*`. |

Los componentes Vue no traen estilos propios. Todo el aspecto visual viene de `@magic-style/css`, que también funciona por sí solo en HTML plano o Blade.

## Principios

- **Temas por contrato.** Un tema define 27 variables. Hover, foco, bordes, textos y sombras se derivan de ellas en el propio CSS. Consulta [Temas](/es/guide/theming).
- **Accesible por defecto.** Los componentes siguen los patrones WAI-ARIA APG y apuntan a WCAG 2.2 AA, con auditorías de axe-core y pruebas de contraste en todos los temas. Consulta [Accesibilidad](/es/guide/accessibility).
- **SSR desde el inicio.** Todos los componentes se renderizan en el servidor, y el modo de color `system` se resuelve en CSS, sin parpadeo ni hydration mismatch. Consulta [SSR](/es/guide/ssr).
- **Tres idiomas incluidos.** Los textos que generan los componentes salen en portugués por defecto, con inglés y español incluidos. Consulta [Idiomas](/es/guide/i18n).
- **RTL real.** El CSS usa propiedades lógicas. Consulta [RTL](/es/guide/rtl).
- **Fácil de sobrescribir.** Todo el CSS vive en la cascade layer `ms`, así que el CSS de tu aplicación siempre gana.

## Próximos pasos

- [Instalación](/es/guide/installation): agrega los paquetes y el CSS.
- [Laravel + Inertia](/es/guide/laravel-inertia): configuración completa con SSR, formularios e idioma desde el backend.
- [Temas](/es/guide/theming) y [Modo oscuro](/es/guide/dark-mode): adapta el aspecto a tu marca.
- [Componentes](/es/components/button): ejemplos y API de cada componente.
