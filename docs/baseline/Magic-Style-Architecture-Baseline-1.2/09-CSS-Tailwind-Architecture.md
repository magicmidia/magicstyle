# Magic-Style — CSS & Tailwind Architecture

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — CSS  

## 1. Ownership

Magic CSS é dono do visual interno; Vue não usa long utility strings Tailwind para identidade oficial.

## 2. Layers

`ms.tokens`, `ms.reset`, `ms.base`, `ms.components`, `ms.utilities`, seguidos de application utilities conforme integração.

## 3. Reset

Opt-in/granular; deve existir caminho sem reset global.

## 4. Selectors

Baixa especificidade, classes semânticas e data states; no `!important` arquitetural.

## 5. Tailwind bridge

Semantic mapping via `@magic-style/tailwind`; consumer controla layout externo.

## 6. Modern CSS

Logical properties, container queries, Grid/Flex, OKLCH, color-mix, focus-visible, pointer coarse, reduced-motion, forced-colors.

## 7. Responsive

Sidebar/Select/Toolbar/DataTable/Calendar adaptam layout/interaction sem JS de resize por instância quando CSS resolve.

## 8. Stable hooks

Root class, part classes documentadas, `data-ms-slot`, documented states e tokens.

## 9. CSS-only

Visuais simples funcionam sem Vue; behavior complexo exige runtime.

## 10. Distribution

Full e granular CSS imports.


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
