# Magic-Style — Vue API Guidelines

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Vue  

## 1. Naming

Prefixo `Ms`; props camelCase em TS; template naturalmente kebab.

## 2. Models

`update:modelValue`, `update:open`, `update:checked`.

## 3. Events

Eventos semânticos literais kebab-case; não duplicar `update:*` sem semântica adicional.

## 4. Slots

Canônicos, typed quando possível; composição > configuração enorme.

## 5. as/asChild

Somente quando útil; merge de attrs/events documentado.

## 6. Expose

Imperative API mínima.

## 7. Provider

MsProvider e MsThemeScope; componentes simples funcionam sem provider.

## 8. Responsive API

CSS/container first; props responsivas apenas como policies semânticas (ex.: mobile presentation, overflow, collapse mode).

## 9. AppShell

Slots/subcomponents e state controlável, permitindo rearranjo responsivo.

## 10. MsSelect

Uma API canônica, capabilities habilitadas por props/slots/adapters e typing forte.

## 11. Forms

Native-first; adapters opcionais; sem VeeValidate/Zod hard dependency.

## 12. SSR

IDs determinísticos, hydration estável, sem browser globals no top-level.

## 13. Router

Core navigation router-independent.

## 14. Unstyled

Quando existir, preserva comportamento e acessibilidade.


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
