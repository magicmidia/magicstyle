# Magic-Style — Accessibility Specification

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Acessibilidade  

## 1. Baseline

WCAG 2.2 AA, native-first e accessible by default.

## 2. Focus

focus-visible, ordem lógica, restore em overlays, trap somente quando padrão exige; responsive re-layout não pode perder foco.

## 3. Keyboard

Contrato explícito para Menu, Select, Dialog, Calendar, Toolbar, Tree/DataGrid e composite widgets.

## 4. Touch

Hit targets e behavior não dependem exclusivamente de hover.

## 5. Select

Naming, keyboard, typeahead/search, async announcements quando relevantes, multi-selection semantics e mobile sheet sem regressão.

## 6. DataTable

Semântica tabular, sort/filter/bulk actions com labels/focus order.

## 7. Calendar

today/selected/disabled/range e keyboard grid behavior.

## 8. Charts

Text summary, accessible name/description, fallback/list/table quando adequado; nunca apenas cor.

## 9. Notifications

aria-live politeness, dedupe announcements, timing, dismissal, actions, progress, read/unread, reduced motion.

## 10. Layout

Sidebar/rail/drawer preservam landmarks, order e labels.

## 11. Visual

Contrast, forced-colors, zoom/reflow, text expansion, RTL, reduced motion.

## 12. Testing

Automação + browser + manual para T-C/T-D.


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
