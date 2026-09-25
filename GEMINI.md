# Magic-Style — Antigravity Workspace Rules (`GEMINI.md`)

This file sets the normative guidelines for the AI assistant (Antigravity) when working in the **Magic-Style** repository.

English is the project language. The Architecture Baseline 1.2 in `docs/baseline/` is normative and written in Portuguese.

---

## 1. Baseline and governance

- **Normative:** the whole project architecture is governed by the **Architecture Baseline 1.2** in `docs/baseline/Magic-Style-Architecture-Baseline-1.2/`.
- **Decisions:** no global architectural decision may be improvised locally. Any deviation requires a formal RFC/ADR (Doc 27 and Doc 28). Repository-level ADRs live in `docs/adr/`.
- **Context minimization:** never load all 28 baseline documents in a single task. Use the `magic-style-baseline` skill to load only the context packs relevant to the task's domain.

---

## 2. Running on Windows

- **Shell:** PowerShell on Windows.
- **pnpm commands:** always use `pnpm.cmd` in terminal commands (e.g. `pnpm.cmd validate`, `pnpm.cmd test`, `pnpm.cmd build`), because running `.ps1` scripts may be blocked by the OS Execution Policy. `validate.cmd` at the repository root is a shortcut for the health gate.
- **Node.js:** `>=24` (Node 24 LTS).
- **Line endings:** the repository uses `LF` with strict Prettier (`.prettierrc.json`). `.gitattributes` enforces normalization.

---

## 3. Architecture and monorepo contracts

- **Topology:**
  - `apps/` — internal apps (e.g. `apps/docs/`, the VitePress documentation site with demos and generated API tables).
  - `packages/` — public packages (`vue`, `css`, future `tailwind`, `cli`, `schema`).
  - `packages/internal/` — internal foundation packages (`tokens`, `themes`, future `primitives`, `core`).
  - `scripts/` — verification scripts (`scripts/check-architecture.mjs`, `scripts/stats.mjs`).
  - `tooling/` & `tests/`.
- **Forbidden edges (Doc 18 §5):**
  - Browser packages (`@magic-style/vue`, `@magic-style/css`) **must not** import Node tooling.
  - Internal foundation packages do not depend on higher-level public packages.
  - Mandatory check via `pnpm.cmd architecture`.
- **CSS styling contract:**
  - Component styles live in `packages/css/src/components/*.css`.
  - Vue components (`@magic-style/vue`) use canonical `ms-*` classes, `data-*` attributes for variants and states, and `--ms-*` CSS variables.
  - Do not inject arbitrary Tailwind utility strings or isolated styles without tokens.
- **Standalone subsystems (Doc 18 §3 and Doc 27 §8):**
  - `datatable`, `calendar`, `charts` and `notifications` are designed as standalone packages independent of the core, while sharing the same tokens, themes and visual language.
- **MsSelect rule:**
  - `MsSelect` is the unified advanced engine (single, multiple, searchable, async, creatable, grouped, virtualized). Do not create disconnected parallel components such as `MultiSelect` or `AsyncSelect`. `MsNativeSelect` remains the native HTML alternative.

---

## 4. Quality gates and completion ("No Fake Green")

Before considering any code task done:

1. Run `pnpm.cmd validate` (covers Prettier, ESLint, Stylelint, the architecture check, the docs stats check, typecheck, Vitest tests and the Turbo build).
2. If public packages changed (`@magic-style/vue`, `@magic-style/css`), require or create a changeset with `pnpm.cmd changeset`.
3. Report explicitly what was implemented, what was validated with which command, and any limitations found.
