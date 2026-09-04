# Magic-Style — Product Requirements Document

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Produto  

## 1. Visão

Magic-Style é uma plataforma moderna de UI para aplicações WEB, combinando Design System, biblioteca de componentes, Open Code, Registry, CLI, Blocks, Templates, documentação e metadata legível por IA. O objetivo é permitir construção rápida de interfaces premium sem sacrificar acessibilidade, performance, responsividade ou customização.

## 2. Proposta de valor

Beautiful by Default; Progressive Customization; Vue-first sem lock-in; CSS/Tailwind Tier 1; dark/themes nativos; Open Code + Package; cobertura de controles, layouts e subsistemas ricos.

## 3. Consumidores

SaaS, dashboards, ERP/CRM, portais, analytics, ferramentas internas, produtos de IA, Laravel+Inertia+Vue, Nuxt/Vue, Vue/Vite e aplicações CSS-first.

## 4. Modos de consumo

1) packages npm; 2) `magic-style add <item>` via Open Code/Registry; 3) semantic CSS; 4) Blocks; 5) Templates.

## 5. Escopo

Foundations; core controls; Application Layout System; Advanced Select; overlays/forms/navigation; DataTable; Calendar; Charts; Notifications; enterprise/productivity; AI UI; Blocks/Templates.

## 6. Requisitos de UX

API previsível, zero-provider para casos simples, slots/composição, controlled/uncontrolled, estados completos, touch/keyboard, responsividade real, dark de alta qualidade e ausência de AI-slop visual.

## 7. Não funcionais

WCAG 2.2 AA; SSR; ESM; tree-shaking; CSP-friendly; package isolation; supply-chain hardening; Registry declarativo; bundle/performance budgets; CI/CD reproduzível.

## 8. Critério de sucesso

Uma aplicação completa deve poder ser construída do AppShell ao DataTable/Calendar/Charts/Notifications com linguagem visual única e baixa fricção de adoção.

## 9. Fora do escopo inicial

React/Svelte Tier 1 no v1, marketplace completo, page builder visual, runtime LLM, provider SDK de IA e IE.


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
