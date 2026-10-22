# Magic-Style — AGENTS.md (repo `magic-style`)

Shared AI configuration may live in the parent directory of the local workspace (`AGENTS.md` + `.opencode/`, outside this repository). This file covers only the source repo.

English is the project language. The Architecture Baseline 1.2 in `docs/baseline/` is normative and written in Portuguese.

## Baseline

Normative: **Architecture Baseline 1.2** in `docs/baseline/Magic-Style-Architecture-Baseline-1.2/` (this repository). Startup flow: doc 28 §8. Context packs: skill `magic-style-baseline`.

## Commands

- `pnpm install` — frozen lockfile, engine-strict Node ≥24
- `pnpm validate` — full health gate: format/lint (ESLint + Stylelint)/architecture/docs stats/type/unit/build (doc 25 §4)
- `pnpm build`, `pnpm test`, `pnpm lint`, `pnpm typecheck`, `pnpm architecture`
- `pnpm docs:dev`, `pnpm docs:build`, `pnpm docs:e2e` — documentation site (`apps/docs`)
- `pnpm changeset` — every change to a public package requires a changeset

## Monorepo rules

- Topology: `apps/ packages/ scripts/ tests/ tooling/` — no empty public packages (doc 25 §3)
- ESM everywhere; strict TypeScript extending `tsconfig.base.json`
- Forbidden edges (doc 18 §5) are checked by `scripts/check-architecture.mjs`
- vue/css/tailwind are versioned together via changesets `fixed` (doc 27 §13)
- No fake green: only report gates you actually ran
