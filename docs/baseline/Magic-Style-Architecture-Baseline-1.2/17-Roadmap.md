# Magic-Style — Roadmap

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Planejamento  

## 1. Tracks

Platform, Design System, Runtime, Components, CLI/Registry, Docs/Web, AI/Security/Quality, Standalone Subsystems.

## 2. Critical path

Repository → Tokens → Themes → CSS → Vue → Button → foundation batch → overlay/Dialog → forms → collection → Advanced Select → AppShell/DataTable/Notifications → Calendar/Charts → Alpha.

## 3. Architecture reviews

Button, primeiros 5 components, Dialog, Select, AppShell responsive, DataTable integration, Alpha e Beta.

## 4. Alpha

Foundation sólida, catálogo útil, Advanced Select funcional, CLI/Registry/Docs públicos.

## 5. Beta

Broad application coverage, APIs candidate-stable, DataTable/Notifications maduros; Calendar/Charts desejáveis.

## 6. v1 must

Vue/CSS/Tailwind/tokens/themes/dark/layout/forms/overlays/selection/data display/DataTable/Notifications/CLI/Registry/Open Code/Docs/Landing/Blocks/Templates/SSR/a11y.

## 7. v1 desirable

Calendar e Charts.

## 8. Post-core

DataGrid, full Scheduler, Editors, AI suite, React/Svelte, Marketplace.

## 9. Rule

Quality over count; não escalar agentes antes de generator/validator/family specs.


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
