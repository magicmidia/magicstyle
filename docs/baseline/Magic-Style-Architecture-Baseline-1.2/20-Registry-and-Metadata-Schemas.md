# Magic-Style — Registry & Metadata Schemas

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Normativo — Protocolos  

## 1. Princípios

JSON interchange, JSON Schema público, strict validation, root unknown fields restritos, extensions namespaced, schemaVersion independente, zero executable fields.

## 2. Schemas

project-config, registry, registry-item, component/theme/block/template manifests, lockfile, policy, compatibility, diagnostics.

## 3. Common defs

slug, package, semver/range, safe relative path, SHA-256, item type, status, security/test tier, runtime.

## 4. Config

magic-style.json persiste decisões do projeto, não environmental detection desnecessário.

## 5. Registry item

Identity/version/type/dependencies/compatibility/files/style deps/integrity/provenance/search metadata; sem shell hooks.

## 6. Manifest

API summary gerado + anatomy/slots/events/tokens/SSR/a11y/responsive.

## 7. Subsystem metadata

Package/capabilities/CSS/adapters/performance class/responsive modes.

## 8. Lock

Exact resolution, origin, digests e file base/current hashes.

## 9. Policy

Registry allowlist, domains, signatures, paths, frozen lock/offline/package/license rules.

## 10. Validation

Parse → schema → semantic → paths → compatibility → DAG → integrity → signature/policy → plan.

## 11. AI metadata

Descritivo; nunca prompt executável.


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
