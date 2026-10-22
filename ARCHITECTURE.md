# ARCHITECTURE

Single normative source: **Magic-Style Architecture Baseline 1.2** (`docs/baseline/Magic-Style-Architecture-Baseline-1.2/`, written in Portuguese). This file summarizes what governs THIS repository; it does not duplicate the baseline.

## Layers (doc 18 §1)

L0 Schema/Metadata · L1 Core/Tokens/Variants · L2 Themes/Primitives · L3 CSS/Vue · L4 Standalone Subsystems · L5 Registry/Project · L6 CLI/MCP · L7 Apps.

## Packages in this repository

- Public core: `@magic-style/vue`, `css`, `tailwind`, `cli`, `schema`
- Standalone (bundle-isolated): `datatable`, `calendar`, `charts`, `notifications`
- Internal: `@magic-style-internal/*` (tokens, themes, variants, primitives)
- Apps: `apps/docs` (documentation site, private)

## Forbidden edges (doc 18 §5)

- Browser packages do not depend on Node-only tooling
- Core does not depend on standalone subsystems
- Subsystem → foundation only

Automated check: `pnpm architecture`.

## New global decisions

They require an RFC/ADR (stop condition, doc 14); see `docs/adr/`. No local improvisation.
