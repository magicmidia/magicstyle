# Magic-Style — Architecture Decisions & Final Contracts

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Architecture Baseline 1.2  

## 1. Identidade

Produto Magic-Style; CLI `magic-style`; npm `@magic-style/*`; Vue `Ms`; CSS `ms-`; vars `--ms-*`; metadata `data-ms-*`; Official Registry `@magic`.

## 2. Packages

Core público vue/css/tailwind/cli/schema; standalone datatable/calendar/charts/notifications; avançados datagrid/editors/ai.

## 3. Visual contract

Premium e consistente é requisito stable.

## 4. Layout contract

Application Layout System first-class; AppShell foundation, product shells Blocks.

## 5. Responsive contract

Todo component adapta-se a viewport/container/input modality e pode mudar interaction pattern.

## 6. Select contract

MsSelect = advanced engine canônico; MsNativeSelect = HTML-native alternative.

## 7. Data contract

MsTable semantic; DataTable rich app table; DataGrid enterprise/editable/virtualized.

## 8. Calendar/Charts/Notifications

Standalone, theme/token/a11y integrated e bundle-isolated.

## 9. Vue events

Models `update:*`; semantic events kebab-case.

## 10. Providers

MsProvider + MsThemeScope; no MsConfigProvider v1.

## 11. Styling

Magic CSS interno; Tailwind externo; reset opt-in.

## 12. Accessibility

WCAG 2.2 AA.

## 13. Versioning

vue/css/tailwind coordenados; standalone podem independente.

## 14. Registry security

Integrity desde Preview; Official signing até v1; no remote execution.

## 15. Repositories

magic-style, magic-style.dev, docs, blocks, templates, registry, examples, playground, themes, ecosystem, .github.

## 16. Decision Gate

Public primitives packaging depende do Dialog; external primitive engines internas sem API leakage.

## 17. Authority

Security → ADR/Baseline → Package Contract → Family Spec → Component Spec → Types → Implementation → Generated Docs.


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
