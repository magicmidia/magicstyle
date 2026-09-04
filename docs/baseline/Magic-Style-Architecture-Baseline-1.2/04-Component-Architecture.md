# Magic-Style — Component Architecture

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Componentes  

## 1. Tipos

Primitive, Component, Compound, Pattern, Block, Template, Utility, Composable, Adapter e Subsystem.

## 2. Contrato mínimo

Propósito, anatomia, semântica, API, state, events, slots, tokens, CSS hooks, a11y, responsive behavior, SSR, tests e Registry metadata.

## 3. Props

Comportamento/semântica/conceitos visuais (`variant`, `intent`, `size`, `disabled`, `loading`). Evitar props equivalentes a CSS arbitrário.

## 4. Composição

Slots/subcomponentes/context/tokens têm prioridade sobre mega-configs e dezenas de props.

## 5. Controlled/uncontrolled

`modelValue`/`update:modelValue`, `open`/`update:open`; `default*` apenas inicializa.

## 6. Eventos

Models usam `update:*`; eventos semânticos Magic usam kebab-case como `open-change`, `selection-change` e `highlight-change`.

## 7. Customização

Semantic tokens → Theme → Component tokens → semantic props → slots/subcomponents → CSS variables → Open Code.

## 8. Application Layout

AppShell é foundation; Admin/CRM/Analytics Shell são Blocks.

## 9. MsSelect

Um componente público unificado, com capabilities single/multi/search/async/creatable/grouped/virtualized/rich/mobile-sheet.

## 10. DataTable

Standalone subsystem com sort/filter/search/pagination/selection/bulk/visibility/order/resize/sticky/density/saved views/remote/adaptive.

## 11. Calendar

Date foundation + application calendar; month/week/day/agenda; scheduler completo pode evoluir.

## 12. Charts

Tokens/themes, tooltips/legends coerentes e acessibilidade; engine interna isolada.

## 13. Notifications

Toast → progress notification → persistent center/inbox, com handles atualizáveis e actions.

## 14. Responsive contract

Toda spec responde a mobile/tablet/narrow container/touch/overflow/adaptive interaction/content stress.

## 15. DoD

Stable exige behavior + API + a11y + visual + responsive + SSR + tests + docs + manifest + Registry.


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
