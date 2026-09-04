# Magic-Style — Performance & Bundle Budgets

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Performance  

## 1. Filosofia

Performance é feature; core simples deve ter custo incremental baixo.

## 2. Isolation

DataTable/Calendar/Charts/Notifications/DataGrid/Editors/AI não entram no bundle do core quando não usados.

## 3. Runtime

Evitar watchers/listeners/global state/layout thrash e eager catalogs sem necessidade.

## 4. Select

Virtualization opcional; async filtering/cancellation/debounce por adapter/consumer.

## 5. DataTable

Benchmark many rows/columns, sorting/filtering/selection/virtualization/responsive.

## 6. Calendar

Evitar rerender integral de grandes views/schedules.

## 7. Charts

Engine lazy/isolada e theme-driven.

## 8. Notifications

Queue/store com cleanup e custo previsível.

## 9. AppShell

Transformações preferencialmente CSS/container-driven, não resize handler por instância.

## 10. CSS

Granular imports e sem duplicação de themes.

## 11. Budgets

Valores exatos benchmark-driven; regressão precisa justificativa, nunca simplesmente aumentar budget.


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
