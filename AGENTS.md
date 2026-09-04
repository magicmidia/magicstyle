# Magic-Style — AGENTS.md (repo `magic-style`)

Configuração de IA compartilhada vive na raiz do workspace (`C:\Repositórios\MagicStyle\AGENTS.md` + `.opencode/`). Este arquivo cobre apenas o repo fonte.

## Baseline

Normativo: **Architecture Baseline 1.2** em `../../temp/Magic-Style-Architecture-Baseline-1.2/` (workspace root). Startup flow: doc 28 §8. Context packs: skill `magic-style-baseline`.

## Comandos

- `pnpm install` — frozen lockfile, engine-strict Node 24
- `pnpm validate` — health gate completo: format/lint/architecture/type/unit/build (doc 25 §4)
- `pnpm build`, `pnpm test`, `pnpm lint`, `pnpm typecheck`, `pnpm architecture`
- `pnpm changeset` — toda mudança em package público exige changeset

## Regras do monorepo

- Topologia: `apps/ packages/ scripts/ tests/ tooling/` — sem packages públicos vazios (doc 25 §3)
- ESM everywhere; strict TypeScript estendendo `tsconfig.base.json`
- Edges proibidos (doc 18 §5) são verificados por `scripts/check-architecture.mjs`
- vue/css/tailwind versionam coordenados via changesets `fixed` (doc 27 §13)
- No fake green: só declare gates que executou
