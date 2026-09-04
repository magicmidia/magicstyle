# Magic-Style — Documentation Specification

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Documentação  

## 1. Docs como produto

Manual, API, component explorer, design reference, Registry browser, learning system e machine-readable knowledge.

## 2. Repository

Public docs em `magic-style/docs`.

## 3. Component page

Overview, when/avoid, anatomy, examples, API, variants/states, responsive behavior, a11y, tokens, theming, Open Code, Registry, related.

## 4. Select docs

Uma página principal de Select demonstra capabilities; evitar discovery fragmentado.

## 5. Subsystem docs

DataTable/Calendar/Charts/Notifications têm seções próprias com architecture/perf/a11y.

## 6. Layout docs

AppShell e family mostram desktop/tablet/mobile, sidebar transforms, toolbar overflow e nested content.

## 7. Generated API

Props/events/slots/tokens/status vêm de source metadata, não cópia manual.

## 8. Search/AI

Aliases, keywords, useWhen/avoidWhen, llms.txt/llms-full, machine JSON e MCP retrieval futuro.

## 9. Interactive

Examples buildáveis, source único, Theme/Token explorers e responsive preview.


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
