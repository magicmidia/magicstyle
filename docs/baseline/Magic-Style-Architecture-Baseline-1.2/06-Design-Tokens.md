# Magic-Style — Design Tokens

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Tokens  

## 1. Fonte canônica

DTCG-compatible token sources; CSS/Vue/Tailwind/Figma não são source-of-truth.

## 2. Camadas

Primitive → Semantic → Component → Instance override.

## 3. Naming

Ex.: `color.surface.default` → `--ms-color-surface-default`; spacing usa IDs inteiros (`space.0`, `space.2`, `space.4`...).

## 4. Categorias

Colors, spacing, radius, typography, borders, structured shadows, motion, z-index, breakpoints/layout capabilities.

## 5. Layout tokens

Incluir sidebar width/collapsed width, topbar height, page gutter, toolbar gap, touch target min e afins.

## 6. Responsive tokens

Viewport breakpoints podem coexistir com container range/capabilities; componentes não inventam thresholds locais sem contrato.

## 7. Subsystem namespaces

DataTable/Calendar/Charts/Notifications podem ter tokens próprios, sempre ligados à semântica global.

## 8. Compiler outputs

CSS vars, TypeScript metadata, JSON, themes, Tailwind bridge e docs metadata.

## 9. Aliases

Graph acíclico, type-safe, diagnostics claros, depth controlado.

## 10. Governança

Token stable é API visual; mudança requer review proporcional.


## Atualizações normativas — Architecture Baseline 1.2

Esta edição incorpora como contratos globais:

- **qualidade visual premium** como requisito de release: moderno, refinado, bonito e coerente entre todos os elementos;
- **responsive by design** para desktop, notebook, tablets, mobile e containers estreitos, com container queries/intrinsic layout quando apropriado;
- **Application Layout System first-class**, incluindo AppShell, Topbar, Sidebar, Navigation Rail, Toolbar/Toolset, Content/Main, Aside, Footer, StatusBar, Split View e Resizable Panels;
- **`MsSelect` como engine avançado unificado**, com single/multiple/searchable/async/creatable/grouped/virtualized/command-style/rich options; `MsNativeSelect` permanece separado;
- **DataTable, Calendar, Charts e Notifications como subsistemas standalone**, isoláveis do core e ainda assim submetidos aos mesmos tokens, themes, accessibility, density, motion e linguagem visual;
- **alta customização sem hacks**, priorizando tokens, themes, props semânticas, slots, subcomponentes, CSS variables, controlled/uncontrolled state e Open Code;
- **adaptação comportamental responsiva**, permitindo, por exemplo, Select→Sheet no mobile, Sidebar→Rail/Drawer, Toolbar→Overflow e DataTable→layout adaptativo;
- **Reference Application / Visual Integration Gate** para validar que componentes e plugins parecem partes do mesmo design system, e não bibliotecas coladas.
