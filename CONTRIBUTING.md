# Contributing to Magic-Style

First off, thank you for considering contributing to **Magic-Style**! 🎉

This repository is governed by the **Architecture Baseline 1.2** located in `docs/baseline/Magic-Style-Architecture-Baseline-1.2/`. Before making any significant architectural changes, please review the relevant documents or consult with core maintainers.

---

## 🛠️ Development Setup

### Prerequisites

- **Node.js**: Strictly `>=24 <25` (Node 24 LTS)
- **pnpm**: `pnpm@10.34.5` (enforced via `packageManager`)

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/magicmidia/magicstyle.git
   cd magicstyle
   ```

2. **Install dependencies:**

   ```bash
   pnpm install --frozen-lockfile
   ```

3. **Start the documentation site (VitePress, pt-BR/en/es):**
   ```bash
   pnpm docs:dev
   ```
   Component pages are generated from `apps/docs/catalog/components.ts`. Examples live in
   `apps/docs/demos/<slug>/` (one SFC per example, `strings.json` for the 3 languages and
   `meta.json` for titles and accessibility notes); `pnpm --filter magic-style-docs check:demos`
   validates them. API tables are generated from the component types and JSDoc.

---

## 🏗️ Monorepo Structure

```
magic-style/
├── apps/
│   └── docs/              # VitePress site: landing, guides, component pages (pt-BR, en, es)
├── packages/
│   ├── vue/               # @magic-style/vue (95 accessible Vue 3 components)
│   ├── css/               # @magic-style/css (Modular CSS, reset, utility tokens)
│   └── internal/
│       ├── tokens/        # @magic-style-internal/tokens (private: DTCG design tokens)
│       └── themes/        # @magic-style-internal/themes (private: 10 curated themes)
├── docs/
│   └── baseline/          # Architecture Baseline 1.2 canonical specs
├── scripts/
│   └── check-architecture.mjs # Architectural boundary & forbidden edges verifier
└── .github/
    └── workflows/         # CI/CD validation and release pipelines
```

---

## 📜 Development Workflow

We follow the normative 9-step flow defined in Architecture Baseline 1.2 (Doc 14 §2):

$$\text{Request} \rightarrow \text{Context} \rightarrow \text{Spec} \rightarrow \text{Plan} \rightarrow \text{Implementation} \rightarrow \text{Validation} \rightarrow \text{Review} \rightarrow \text{Docs} \rightarrow \text{Done}$$

### Useful Commands

| Command             | Description                                                                                                 |
| :------------------ | :---------------------------------------------------------------------------------------------------------- |
| `pnpm validate`     | Full health gate: format, lint, architecture check, types, unit tests, and build                            |
| `pnpm test`         | Run Vitest unit test suite                                                                                  |
| `pnpm lint`         | Run ESLint across all workspaces                                                                            |
| `pnpm typecheck`    | Run TypeScript strict type-checking via Turborepo                                                           |
| `pnpm architecture` | Verify architectural boundary rules (no cyclic dependencies, no forbidden Node imports in browser packages) |
| `pnpm format`       | Auto-format codebase using Prettier                                                                         |
| `pnpm changeset`    | Generate a changeset for package release notes                                                              |

---

## 🧩 Component Authoring Rules (Doc 19 & Doc 25)

When adding or updating a component in `@magic-style/vue`:

1. **Canonical Class Prefix:** Component classes must use the `ms-*` prefix (e.g., `ms-button`, `ms-select`).
2. **Tokens & Theming:** Styles must reside in `@magic-style/css/src/components/*.css` using CSS custom properties (`--ms-*`). Do not hardcode raw hex values; always map to semantic tokens.
3. **Accessibility (WCAG 2.2 AA):** All interactive components must support full keyboard navigation, proper WAI-ARIA roles, states, and focus rings.
4. **Unit Tests:** Every component requires unit tests in `packages/vue/tests/` covering props, slots, events, and a11y attributes.
5. **No Parallel Engines:** Advanced components follow unified engines (e.g., `MsSelect` handles single, multi, searchable, and async).

---

## 📋 Pull Request Checklist

Before submitting a Pull Request:

1. Create a branch from `main` with conventional commits:
   - `feat(vue): add MsNewComponent`
   - `fix(css): adjust focus ring contrast in dark mode`
2. Run the complete local health gate:
   ```bash
   pnpm validate
   ```
   _No Fake Green:_ All format, lint, architecture, typecheck, test, and build steps must succeed cleanly.
3. If changing public packages (`@magic-style/vue`, `@magic-style/css`), run:
   ```bash
   pnpm changeset
   ```
   and select the appropriate bump (`patch`, `minor`, `major`) with a concise summary.
4. Ensure PR description follows `.github/pull_request_template.md`.

---

## 🛡️ Governance & Human Gates (Doc 24 §6)

Core foundation changes (`MsButton`, `MsDialog`, `MsSelect`, `MsAppShell`, tokens schema, and release freezes) require human review and approval.
