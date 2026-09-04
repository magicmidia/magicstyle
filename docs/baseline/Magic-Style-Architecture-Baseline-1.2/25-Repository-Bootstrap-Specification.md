# Magic-Style — Repository Bootstrap Specification

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Execução Preparatória  

## 1. Objetivo

Clean clone instala/valida sem global tools ou configuração oculta.

## 2. Topologia

`.changeset`, `.github`, apps, docs, packages, scripts, tests, tooling, AGENTS/ARCHITECTURE/CONTRIBUTING/SECURITY, workspace manifests.

## 3. Princípios

Node LTS baseline, pnpm pinned, ESM, frozen lock, strict TS, Turbo, Vitest/Playwright, no heavy postinstall, no empty public packages.

## 4. Health gate

`pnpm validate` cobre format/lint/type/unit/architecture/build.

## 5. Clean tree

Validate não reescreve canonical source.

## 6. Architecture checker

Impede forbidden package edges e browser→Node leakage.

## 7. apps/

Storybook/visual-tests/Reference Application interna; landing/docs públicas permanecem repos próprios.

## 8. Baseline 1.2

Reservar arquitetura para standalone packages, responsive browser fixtures e visual integration tests, sem criar packages vazios.

## 9. Multi-repo

Extrair progressivamente após vertical slices reais.

## 10. Security

Pinned Actions, least permissions, frozen install, security policy, no secrets.


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
