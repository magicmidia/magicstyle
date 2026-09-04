# Magic-Style — Testing Strategy

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Qualidade  

## 1. Camadas

Static/schema/type → unit → browser → a11y/visual/SSR → E2E → fixtures → cross-browser/perf/security → release.

## 2. Test tiers

T-A simple; T-B interactive; T-C complex; T-D subsystem/critical.

## 3. Browser

Behavior interativo relevante deve ser testado em browser real.

## 4. SSR

Render/hydration tests para Vue runtime.

## 5. Visual

Matriz estratégica e Reference Application; comparar componentes relacionados, não somente isolados.

## 6. Responsive

Desktop/tablet/mobile/narrow container/touch e orientation quando necessário.

## 7. Select

Modes, keyboard, async, creatable, virtualization, mobile presentation, forms e a11y.

## 8. DataTable

sort/filter/pagination/server state/selection/bulk/visibility/density/sticky/mobile/large data.

## 9. Calendar/Charts/Notifications

Views/locales/timezones; chart semantics/themes; queue/update/progress/actions/read-unread/aria-live.

## 10. Fixtures

Vue/Vite, Vue+Tailwind, Nuxt, Laravel/Inertia, CSS-only, monorepo.

## 11. Flakiness

Flaky test é bug; quarantine rara e rastreada.

## 12. No fake green

Agente só declara gates realmente executados.


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
