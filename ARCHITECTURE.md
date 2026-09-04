# ARCHITECTURE

Fonte normativa única: **Magic-Style Architecture Baseline 1.2** (`docs/baseline/Magic-Style-Architecture-Baseline-1.2/`). Este arquivo resume o que governa ESTE repositório; não duplica o baseline.

## Camadas (doc 18 §1)

L0 Schema/Metadata · L1 Core/Tokens/Variants · L2 Themes/Primitives · L3 CSS/Vue · L4 Standalone Subsystems · L5 Registry/Project · L6 CLI/MCP · L7 Apps.

## Packages deste repo

- Core público: `@magic-style/vue`, `css`, `tailwind`, `cli`, `schema`
- Standalone (bundle-isolated): `datatable`, `calendar`, `charts`, `notifications`
- Internos: `@magic-style-internal/*` (tokens, themes, variants, primitives)

## Edges proibidos (doc 18 §5)

- Browser packages não dependem de tooling Node-only
- Core não depende de subsistemas standalone
- Subsystem → foundation only

Verificação automatizada: `pnpm architecture`.

## Decisão global nova

Exige RFC/ADR (stop condition, doc 14). Nada de improvisação local.
