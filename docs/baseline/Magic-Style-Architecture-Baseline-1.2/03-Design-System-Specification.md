# Magic-Style — Design System Specification

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Design  

## 1. DNA visual

Precisão, sofisticação, clareza, leveza, tecnologia e confiança. Princípio: **Quiet Surface, Strong Interaction**. Todo componente deve parecer intencionalmente desenhado, não apenas estilizado.

## 2. Visual release gate

Stable = qualidade técnica + acessibilidade + performance + API + qualidade visual + consistência sistêmica.

## 3. Anti-padrões

Evitar aparência genérica de Bootstrap/Tailwind kit/shadcn clone, pill-everything, glass/gradients/shadows/radius aleatórios e dashboards genéricos de IA.

## 4. Cores

OKLCH preferencial; primitives → semantic colors → component tokens → instance overrides.

## 5. Tipografia

Papéis semânticos display/heading/title/body/label/caption/code/numeric; legibilidade em dados densos, zoom e mobile.

## 6. Density e Radius

Density: compact/comfortable/spacious. Radius: sharp/subtle/medium/rounded. Density não é size.

## 7. Elevation e Motion

Escalas compartilhadas por dialogs, selects, notifications, topbars e popovers; motion tokenizado e reduced-motion aware.

## 8. Dark mode

Design independente, não inversão; preservar hierarquia de surfaces/borders/text/interactive accents.

## 9. Responsive design

Pode mudar composição e interação: Sidebar→Rail/Drawer, Select→Sheet, Toolbar→Overflow, DataTable→adaptive view, Calendar→agenda/day.

## 10. Visual Integration Gate

Subsystems só estabilizam depois de teste conjunto com core em Reference Application.

## 11. Themes

Magic e Graphite obrigatórios; Ocean/Emerald/Violet candidatos conforme maturidade.


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
