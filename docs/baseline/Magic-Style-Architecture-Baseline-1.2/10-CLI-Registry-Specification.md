# Magic-Style — CLI & Registry Specification

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Plataforma  

## 1. Comandos

Candidate stable: init/add/remove/update/diff/status/doctor/validate/search/list/view; avançados: upgrade/migrate/generate/theme/tokens/registry/cache/mcp.

## 2. Item types

component, primitive, utility, composable, theme, block, template, adapter, pattern.

## 3. Pipeline

Discover → fetch → schema → DAG → integrity/trust → InstallationPlan → conflicts → transaction → validate → lock.

## 4. Open Code

Source pertence ao consumer; nunca sobrescrever local changes silenciosamente.

## 5. Security

Sem remote shell/hooks/scripts arbitrários; path confinement, integrity e policy.

## 6. Sources

Official/private HTTP Registry, local/workspace e Git apenas em modo explicitamente confiável.

## 7. Lock

Exact version/origin/integrity/files/base-current hashes/dependencies/install mode/compatibility.

## 8. Automation

Dry-run/plan e JSON output first-class.

## 9. Discovery

Docs/Registry tratam MsSelect como um único advanced component e DataTable/Calendar/Charts/Notifications como systems first-class.


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
