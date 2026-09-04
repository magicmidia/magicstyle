# Magic-Style — Package Contracts

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Packages  

## 1. Layers

L0 Schema/Metadata; L1 Core/Tokens/Variants; L2 Themes/Primitives; L3 CSS/Vue; L4 Standalone Subsystems; L5 Registry/Project; L6 CLI/MCP; L7 Apps.

## 2. Public core

`@magic-style/vue`, `css`, `tailwind`, `cli`, `schema`.

## 3. Public subsystems

`datatable`, `calendar`, `charts`, `notifications`; avançados candidatos `datagrid`, `editors`, `ai`.

## 4. Internal

`@magic-style-internal/core`, tokens, themes, variants, primitives, project, registry.

## 5. Edges

Browser packages não dependem de Node tooling; core não depende de heavy subsystems; subsystem→foundation only.

## 6. CSS contract

SFC sem full design CSS; recipes usam classes `ms-*`, não Tailwind strings.

## 7. Versioning

vue/css/tailwind coordenados; CLI/schema/subsystems podem versionar independentemente.

## 8. Open Code

Private deps não viram requirements irresolvíveis; complex components declaram runtime foundation.

## 9. Subsystem admission

Mesmo tokens/themes, isolation, peer deps, bundle/perf gates, Reference App integration e sem duplicar foundations.

## 10. Public admission

Novo public package exige RFC/ADR, consumer use case, docs, release e fixture.


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
