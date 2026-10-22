# ADR 0001: VitePress documentation site

- **Status:** Accepted, implemented
- **Scope:** `apps/docs`

The site lives in `apps/docs` (VitePress 2) and replaced the old hand-written preview. It is published in English at the root, with Portuguese under `/pt/` and Spanish under `/es/`. This record keeps the context of the decision.

## Context

The old preview had about 26k lines of hand-written JavaScript across 5 HTML pages. Templates were compiled in the browser, and the API documentation was duplicated by hand (`studio-api-docs.js`). That caused three problems:

- **The documented API drifted from the code.** Props, events and slots were rewritten by hand, and nothing flagged when they changed.
- **No search, no stable URLs and no SEO.** Routing was hash-based inside a single page.
- **Contributing was hard.** A new example meant editing files with thousands of lines, without types or template linting.

## Decision

Create `apps/docs` with **VitePress** (Vue 3 + Vite, the same stack as the library) and migrate the content incrementally:

1. **One Markdown page per component** (`components/button.md`), with demos as real imported SFCs (`<<< @/demos/button/Basic.vue` for the code, and the rendered component next to it). The demos go through the monorepo's `vue-tsc` and ESLint.
2. **Generated API tables** with `vue-component-meta`, reading props, events, slots and JSDoc straight from the `.vue` and `types.ts` files. A build script generates `api/<component>.json`, and an `<ApiTable>` component renders it. This removes `studio-api-docs.js`.
3. **Theme, color mode, density and language pickers** in the VitePress theme, using `MsProvider` (`theme`, `color-mode`, `density`, `locale`). The same pages double as a visual check of the 10 themes.
4. **Local search** (VitePress's built-in search) and stable URLs (`/components/select#async`).
5. **CI gate:** `vitepress build` joins `pnpm validate` once the migration is complete. With real pages per component, an in-browser axe audit of the built site can complement the Vitest axe test (which uses happy-dom).

## Migration

| Step | Scope                                                                                   | Done when                                                |
| :--- | :-------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| 1    | `apps/docs` skeleton, theme with `MsProvider`, API generation with `vue-component-meta` | Green build; 3 pilot components (Button, Select, Dialog) |
| 2    | Foundations: tokens, themes, i18n, RTL guides                                           | Existing guides rendered on the site                     |
| 3    | Remaining components, in batches by category (forms, overlays, layout, data)            | No component documented only in the preview              |
| 4    | Removal of the old preview                                                              | `pnpm validate` includes the docs build                  |

All four steps are done. The site build runs in `pnpm validate`, and `pnpm docs:e2e` smoke-tests every route with an axe audit in CI.

## Consequences

- **Effort:** most of the work was moving examples. API generation is what reduces work in the long run.
- **Two sources during the migration:** the preview kept working until step 4; no example was deleted before it existed in VitePress.
- **New dependencies** (`vitepress`, `vue-component-meta`) live only in `apps/docs`, which is private. The published packages did not change.

## Alternatives considered

- **Storybook:** good for isolating states, but heavy and built on a different mental model (stories instead of pages). Narrative documentation (theming, i18n, the theme contract) fits Markdown better.
- **Histoire:** built for Vue, but less actively maintained than VitePress.
- **Keep the preview and only generate the API:** fixes prop drift, but not search, URLs or the difficulty of contributing.
