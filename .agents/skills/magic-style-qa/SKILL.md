---
name: magic-style-qa
description: Runbook for executing health gates, validating architecture boundaries, managing changesets, and enforcing the No Fake Green standard across the Magic-Style monorepo.
---

# Magic-Style QA & Validation Runbook

This runbook guides rigorous quality validation for tasks in the **Magic-Style** monorepo, covering the automated health gate, architecture checks and release management.

---

## 1. The "No Fake Green" Principle

- **Rule:** never assume or report that a test, build or lint passed without running the command in the terminal and checking its output (exit code 0).
- In task completion reports, list clearly:
  - Commands run and their status.
  - Tests that passed (count and suites).
  - Limitations or pending tests, if any.

---

## 2. Full Health Gate (`pnpm.cmd validate`)

The canonical health command runs every repository check in sequence:

```powershell
pnpm.cmd validate
```

The gate covers, in order:

1. **Prettier (`prettier --check .`)**: formatting (LF).
2. **ESLint (`eslint .`)**: static analysis of TypeScript, JavaScript and `.vue` files.
3. **Stylelint**: correctness rules for `packages/**/src/**/*.css` and `apps/**/*.css`.
4. **Architecture checker (`node scripts/check-architecture.mjs`)**:
   - Prevents circular dependencies.
   - Ensures browser packages do not import Node tooling.
   - Ensures internal foundation packages do not depend on higher-level packages.
5. **Stats check (`node scripts/stats.mjs --check`)**: the component, theme and token counts quoted in `README.md` and `package.json` match the code.
6. **Turbo pipeline (`turbo run typecheck test build`)**:
   - `typecheck` with strict TypeScript (`vue-tsc` and `tsc --noEmit`).
   - `test` runs every Vitest suite.
   - `build` produces compiled tokens, themes, CSS, distribution bundles and the docs site.

The docs site end-to-end check (every route plus an axe audit, with Playwright) runs separately: `pnpm.cmd docs:e2e`.

---

## 3. Targeted Validation Commands

To diagnose specific failures during development:

| Target             | Command                                                   |
| :----------------- | :-------------------------------------------------------- |
| **Architecture**   | `pnpm.cmd architecture`                                   |
| **Formatting**     | `pnpm.cmd format:check` (or `pnpm.cmd format` to autofix) |
| **Lint**           | `pnpm.cmd lint`                                           |
| **CSS lint**       | `pnpm.cmd lint:css`                                       |
| **Types**          | `pnpm.cmd typecheck`                                      |
| **Tests**          | `pnpm.cmd test`                                           |
| **Build**          | `pnpm.cmd build`                                          |
| **Single package** | `pnpm.cmd --filter @magic-style/vue test`                 |
| **Docs demos**     | `pnpm.cmd --filter magic-style-docs check:demos`          |
| **Docs e2e**       | `pnpm.cmd docs:e2e`                                       |

---

## 4. Versioning and Changesets

Every change affecting public packages (`@magic-style/vue`, `@magic-style/css`) requires a changeset, written in English:

```powershell
pnpm.cmd changeset
```

- Follow the interactive prompt, selecting the affected packages and the bump level (`patch`, `minor`, `major`).
- Remember: `@magic-style/vue`, `css` and the future `tailwind` are versioned together (`fixed`).
