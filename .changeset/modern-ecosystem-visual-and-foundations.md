---
"@magic-style/vue": minor
"@magic-style/css": minor
---

Comprehensive visual modernization, modern design system harmonization (FlyonUI / Shadcn UI), and foundational Studio overhaul:

- **New Components:**
  - `MsKbd`: Keyboard shortcut indicator with 3D raised (`raised`), outline (`outline`), and flat (`flat`) variants, 4 heights (xs 18px, sm 22px, md 26px, lg 32px), and 8 semantic brand tones.
  - `MsAspectRatio`: Responsive container preserving fixed aspect ratios (16:9, 4:3, 1:1, 21:9, 9:16, or custom ratios) with zero layout shift / reflow.
  - `MsRow` & `MsCol` (`MsGrid`): 12-column responsive flex grid system with semantic gutter control (`none`, `xs`, `sm`, `md`, `lg`, `xl`), column spans (`1`-`12`), offsets (`1`-`11`), and flex alignment props.
  - `MsHoverCard`: Interactive floating card overlay activated on hover with cubic easing micro-animations and configurable open/close delays.
- **Visual Harmonization & CSS Refinements:**
  - `card.css`: Layered micro-shadows fallback (`0 1px 3px 0 rgb(0 0 0 / 0.04)`) and soft variant (`data-variant="soft"`) across all 8 brand tones.
  - `input.css`: Added compact `xs` (28px) size and shape geometry modifiers matching modern FlyonUI and Shadcn scales.
  - `grid.css`: Full 12-column CSS grid and gutter utility classes.
- **Studio Documentation & Foundations Overhaul:**
  - **Tipografia:** 13-level harmonic scale (`display-2xl` to `caption-2xs`), 3 canonical font families, interactive live type tester, and live CSS code generator.
  - **Cores & WCAG 2.2:** 8 brand tone palettes (50-950 stops in OKLCH + HEX), 1-click token copy, semantic surface swatches, and real-time interactive WCAG 2.2 contrast validator.
  - **Grid (12-Col):** Interactive 12-column visualizer with presets (`1x 12`, `2x 6+6`, `3x 4+4+4`, `Dashboard 8+4`), gutter scale, and 12-column guide overlay.
  - All Studio code snippets and galleries strictly updated to use official `<MsCodeBlock>` and `<MsCode>` components.
