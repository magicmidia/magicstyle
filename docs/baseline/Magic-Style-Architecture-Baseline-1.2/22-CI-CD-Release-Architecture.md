# Magic-Style — CI/CD & Release Architecture

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Release  

## 1. CI

Quality/type/unit/browser/SSR/consumer/visual/a11y/security/bundle/release validation.

## 2. PR baseline

Frozen install → lint/type/tests/architecture check → build.

## 3. Visual lane

Reference Application exercita AppShell+Select+DataTable+Calendar+Charts+Notifications conforme maturidade.

## 4. Channels

canary/next/latest.

## 5. Versioning

Core visual coordenado; standalone systems podem publicar independentemente com compatibility ranges.

## 6. Registry

Immutable release + mutable channel pointer.

## 7. Signing

Preview SHA-256; Alpha signatures experimental; Beta Official signed; v1 Official verification.

## 8. Publishing

OIDC/Trusted Publishing/provenance quando disponível.

## 9. Cross-repo

Source repo → artifact → Registry orchestrator → immutable index → promotion.

## 10. Rollback

Repoint channel, não rewrite artifact.

## 11. Docs/Landing

Consomem public artifacts, não internals.

## 12. Playground

Pipeline mais restritivo por sandbox.


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
