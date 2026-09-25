---
title: Galería de temas
description: Los 10 temas oficiales de Magic-Style lado a lado, en modo claro y oscuro, y un generador de temas con verificación de contraste AA.
aside: false
pageClass: docs-wide
---

# Galería de temas

Todos los temas comparten la misma estructura visual, al estilo de shadcn/ui. Cada uno define solo el [contrato de variables](/es/tokens): colores, radios, profundidad y fuentes. Cambia el modo para comparar o aplica un tema a todo el sitio.

<ThemeGallery />

## Generador de temas

Elige un tema base, el color primario de cada modo, el matiz de los neutros, el radio y las sombras. La vista previa usa los componentes reales, el contraste se verifica con `checkMsThemeContrast` y el código queda listo para copiar.

<ThemeBuilder />

## Usar el tema generado

1. Guarda la definición en tu proyecto (por ejemplo `src/themes/acme.ts`).
2. Genera el CSS con `msThemeToCss` en el build, o copia la pestaña **CSS generado**, y cárgalo después de `@magic-style/css`.
3. Actívalo con `data-ms-theme="acme"` en `<html>` o con `<MsProvider theme="acme">`.

El contrato, las derivaciones y los diales de densidad, radio y contraste se explican en la guía de [temas](/es/guide/theming).
