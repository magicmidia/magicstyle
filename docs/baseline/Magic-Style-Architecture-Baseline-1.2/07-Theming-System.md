# Magic-Style — Theming System

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Themes  

## 1. Modelo

Theme ≠ Color Mode. Magic/Graphite podem combinar com light/dark.

## 2. DOM contract

`data-ms-theme`, `data-ms-color-mode`, `data-ms-density`, `data-ms-contrast`, `data-ms-radius`.

## 3. Preference

Color mode preference light/dark/system; DOM resolved apenas light/dark.

## 4. Providers

`MsProvider` para app config; `MsThemeScope` para nested visual config; sem `MsConfigProvider` no v1.

## 5. Nested themes

Overrides locais de theme/density/radius/contrast.

## 6. Portal propagation

Overlay teleported herda resolved theme/color/density/contrast/radius/direction; teste obrigatório.

## 7. Dark

Sem branches Vue para styling; dark é resolvido por token/theme system.

## 8. Theme Builder

Consumidor do token contract, não source-of-truth.

## 9. Segurança

Theme artifact não executa scripts/fonts remotos arbitrários.


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
