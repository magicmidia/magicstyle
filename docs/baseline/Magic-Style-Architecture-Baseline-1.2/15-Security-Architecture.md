# Magic-Style — Security Architecture

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Segurança  

## 1. Trust boundaries

npm supply chain, Official/third-party Registry, CLI filesystem mutation, Docs/Playground, untrusted content, AI/MCP e release pipelines.

## 2. Packages

OIDC/Trusted Publishing/provenance preferidos; sem routine long-lived tokens.

## 3. Registry

Strict schemas, SHA-256, immutable artifacts, signatures/provenance por lifecycle, sem arbitrary execution.

## 4. Filesystem

Safe relative paths, traversal/symlink/TOCTOU defenses, transaction/rollback, plan-before-apply.

## 5. Browser

No unsafe raw HTML por default; sanitization/URL validation/CSP; no eval/new Function.

## 6. Playground

Arbitrary code exige sandbox e origin isolation.

## 7. Select

Remote option data é texto por default; rich slots são explicit responsibility.

## 8. Data/Notifications

Renderers e notifications não executam markup/callback remoto arbitrário.

## 9. SSR

Sem mutable globals cruzando requests.

## 10. AI/MCP

Read/plan/apply separados e capabilities restritas.

## 11. Release

Clean checkout → tests/security → build/inspect → provenance/sign → publish/verify.

## 12. Incidents

Advisory/yank/deprecate/rollback/patch, com audit trail.


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
