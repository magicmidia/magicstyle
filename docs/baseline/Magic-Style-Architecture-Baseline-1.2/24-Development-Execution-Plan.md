# Magic-Style — Development Execution Plan

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Planejamento Operacional  

## 1. Filosofia

Vertical slices antes de expansão horizontal.

## 2. Milestones

M0 Repo; M1 Tokens; M2 Themes; M3 CSS; M4 Vue; M5 Button; M6 Foundation; M7 Docs/Landing; M8 Primitives; M9 Dialog; M10 Forms; M11 Collections; M12 Advanced Select; M13 CLI; M14 Registry; M15 Blocks; M16 Templates; M17 Examples; M18 Reference App/Playground; M19 DataTable+Notifications; M20 Calendar+Charts; M21 Alpha; M22 Beta; M23 v1 readiness; M24 v1.

## 3. Baseline 1.2 impact

Application Layout System cedo; MsSelect unificado; standalone systems e visual integration gate explícitos.

## 4. Vertical slices

Button prova foundations; Dialog overlays/Open Code; Field/Input forms; AppShell responsive structure; Select collection; DataTable subsystem; Notifications dynamic state.

## 5. Parallelization

Só após contracts/generator/validator maduros.

## 6. Human gates

Button, Dialog, Select, AppShell responsive, DataTable visual/performance, Beta freeze e stable release.

## 7. AI suitability

Alta para scaffolding/tests/docs/simple; média para implementation; baixa para global API/security/visual tuning/complex a11y.

## 8. DoD

Código compilando não é conclusão sem gates.


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
