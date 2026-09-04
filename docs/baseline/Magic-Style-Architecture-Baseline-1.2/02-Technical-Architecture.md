# Magic-Style — Technical Architecture

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Arquitetura  

## 1. Arquitetura em camadas

Applications/Templates → Blocks → Application Layout + Styled Components → Behavioral Primitives → Core Logic → Tokens/Themes/CSS → Registry/CLI/Docs Tooling.

## 2. Styling ownership

Vue renderiza classes semânticas `ms-*` e data states; o visual oficial vive em Magic CSS e Design Tokens. Tailwind é integração de primeira classe, não runtime obrigatório.

## 3. Public packages

Core: `@magic-style/vue`, `@magic-style/css`, `@magic-style/tailwind`, `@magic-style/cli`, `@magic-style/schema`. Standalone: `datatable`, `calendar`, `charts`, `notifications`; avançados depois: `datagrid`, `editors`, `ai`.

## 4. Application Layout System

AppShell orquestra Topbar/Sidebar/Toolbar/Main/Aside/Footer/StatusBar e pode reorganizar regiões responsivamente sem duplicar a árvore da aplicação.

## 5. Responsividade

Combinar viewport, container queries, intrinsic sizing, CSS Grid/Flexbox, logical properties e input modality. Componente pode alterar padrão de interação conforme espaço disponível.

## 6. Advanced Select

Uma fachada pública `MsSelect` sobre módulos internos de collection, selection, search/typeahead, async/remote, creatable, positioning, virtualization adapter, forms e rendering slots.

## 7. Standalone subsystems

DataTable, Calendar, Charts e Notifications são isoláveis e lazy-loadable quando adequado; nenhum deles infla Button/Input.

## 8. SSR

IDs determinísticos, sem browser globals no module top-level e classificação SSR-safe/client-enhanced/client-only.

## 9. Overlays

Presence, Portal, FocusScope, DismissableLayer, OverlayStack e Positioner compartilhados; portals propagam theme/density/direction.

## 10. External engines

Reka e outras engines podem ser usadas internamente, sem vazar types/APIs públicas.

## 11. Tier 1 integrations

Vue/Vite, Nuxt, Laravel+Inertia+Vue, semantic CSS e Tailwind.

## 12. Reference Application

App interna de QA combina AppShell, Forms, Select, DataTable, Charts, Calendar, Notifications e overlays para detectar inconsistências sistêmicas.


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
