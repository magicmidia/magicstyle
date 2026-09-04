# Magic-Style — AI Development Guidelines

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — AI Development  

## 1. Princípio

Human Designed + AI Assisted + Machine Verifiable.

## 2. Workflow

Request → Context → Spec → Plan → Implementation → Validation → Review → Docs → Done.

## 3. Authority

Security → ADR/Baseline → Package Contract → Family Spec → Component Spec → public types → implementation → generated docs.

## 4. Context

Carregar apenas docs relevantes; nearest scoped AGENTS.md aplica.

## 5. Search before create

Sem novos helpers/tokens/primitives/components/packages sem verificar soluções existentes.

## 6. Visual

Sem valores arbitrários, AI-slop ou cópia casual de outra library; usar tokens e references.

## 7. Responsive

Toda task considera narrow container, tablet/mobile, touch, overflow e adaptive behavior.

## 8. Select rule

Não criar MultiSelect/AsyncSelect/SearchSelect independentes sem family decision; são capabilities do MsSelect.

## 9. Subsystem rule

Standalone packages preservam isolation e design language.

## 10. Multi-agent

Planner/Implementer/A11y reviewer/Visual reviewer/Verifier conforme complexidade.

## 11. Least privilege

Agents não publicam stable ou enfraquecem security policy sozinhos.

## 12. Completion report

Implemented/Validated/Not run/Known deviations/Architecture changes.


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
