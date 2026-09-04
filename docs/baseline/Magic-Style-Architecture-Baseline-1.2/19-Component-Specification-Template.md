# Magic-Style — Component Specification Template

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Template  

## 1. Uso

Obrigatório antes de public components relevantes; specs reduzidas para simples e completas para T-C/T-D.

## 2. Metadata

specVersion, name/publicName/slug/status/category/priority/complexity/package/testTier/securityTier/ssr/aliases/family.

## 3. Corpo obrigatório

Identity; Problem/Goals/Non-goals; Use/Not Use; Anatomy/Semantics/DOM; Vue API; Models/State/Events/Slots; tokens/CSS/Tailwind/themes; RTL/responsive/content stress; a11y/keyboard/focus/touch; forms/i18n/SSR/portal; positioning/virtualization/perf/security; states; Open Code/Registry/package; examples/tests/docs/DoD.

## 4. Responsive section

Desktop/tablet/mobile/narrow container/priority/overflow/touch/adaptive interaction/layout fallback/text expansion.

## 5. Visual

Definir relação com family e Reference Application.

## 6. Select family

Não criar specs independentes para capabilities sem justificar API pública distinta.

## 7. Subsystems

DataTable/Calendar/Charts/Notifications incluem package boundary, perf, integration e visual gates.


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
