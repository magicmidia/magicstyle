# Magic-Style — Contribution & Governance

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Governança  

## 1. Princípio

Autonomia dentro de contratos claros; rigor proporcional ao impacto.

## 2. Impact

L0 mechanical, L1 local, L2 public API/product, L3 architecture, L4 ecosystem/security.

## 3. Roles

Maintainer, Architecture, Design-System, Accessibility, Security, Release, Documentation, Community.

## 4. Lifecycle

Idea → Admission → Catalog → Spec → API/Design/A11y Review → Implementation → Experimental/Beta/Stable.

## 5. Visual governance

Visual quality e responsive behavior podem bloquear stable; standalone systems passam por integration gate.

## 6. Admission

Perguntar se é distinct component, composition, variant, Block, capability do MsSelect ou subsystem.

## 7. RFC/ADR

RFC discute; ADR registra decisão.

## 8. AI contributions

Permitidas/esperadas, com a mesma barra de qualidade.

## 9. Blocks/Themes

Governança mais aberta; Official ainda exige visual/a11y/responsive/Registry conformance.

## 10. Package admission

Novo standalone/public package é L3 e exige Package Contract.

## 11. Rule

Quantidade/popularidade não substituem architecture quality.


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
