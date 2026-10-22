---
name: magic-style-component
description: Step-by-step workflow to scaffold, implement, test, and register new components in @magic-style/vue and @magic-style/css according to Doc 19 Component Specification Template and Baseline 1.2 rules.
---

# Magic-Style Component Development Runbook

This runbook defines the standard steps to create or evolve components in **Magic-Style**, keeping styles (`@magic-style/css`) strictly separate from logic and accessibility (`@magic-style/vue`).

---

## 1. Specification First (Doc 19)

Before implementing, define in your plan:

- **Component name:** `Ms` prefix (e.g. `MsDialog`, `MsBadge`).
- **DOM anatomy:** root element, subparts and slots.
- **Props and variations:** visual variants (`variant`), tones (`tone`), sizes (`size`), states (`disabled`, `loading`, `invalid`).
- **Accessibility:** matching WAI-ARIA pattern (APG), focus management and keyboard navigation (WCAG 2.2 AA).
- **Built-in strings:** any text the component generates (accessible names, placeholders, empty states) goes through the `MsMessages` dictionary, in English, Portuguese and Spanish.
- **Responsiveness:** behavior on small screens or narrow containers.
- **SSR:** no `window`/`document` access outside `onMounted`.

---

## 2. CSS Layer (`packages/css`)

1. Create the stylesheet at `packages/css/src/components/<component-name>.css`:
   - Use an `ms-` class for the root and parts (e.g. `.ms-badge`, `.ms-badge__dot`) and `data-*` attributes for variants and states (e.g. `.ms-badge[data-size="sm"]`, `[data-tone="success"]`, `[data-pill]`).
   - Use only token variables (`var(--ms-color-...)`, `var(--ms-space-...)`, `var(--ms-radius-...)`) and the tone engine (`--ms-tone`, `--ms-tone-text`, …) for tones.
   - Use logical properties (`margin-inline-start`, `inset-inline-end`) so RTL works, and multiply durations by `--ms-motion-scale`.
   - Avoid magic pixel values without a matching token, and never use `!important`.
2. The build (`packages/css/scripts/build.mjs`) picks up every file in `src/components/` and wraps it in the `ms.components` layer. Add a `"./components/<component-name>.css"` entry to `exports` in `packages/css/package.json`; `packages/css/scripts/check-package.mjs` fails when a built stylesheet has no export.

---

## 3. Vue Layer (`packages/vue`)

1. Create the component directory: `packages/vue/src/components/Ms<Name>/`
2. Create `types.ts`, with English JSDoc on every prop and event (it feeds the editor autocomplete and the generated API tables):

   ```typescript
   export type Ms<Name>Variant = "solid" | "outline" | "ghost";
   export type Ms<Name>Size = "sm" | "md" | "lg";

   export interface Ms<Name>Props {
     /** Visual style. */
     variant?: Ms<Name>Variant;
     /** Control size. */
     size?: Ms<Name>Size;
     /** Disables interaction. */
     disabled?: boolean;
     // ...
   }
   ```

3. Create `Ms<Name>.vue`:
   - Use `<script setup lang="ts">` and `defineOptions({ name: "Ms<Name>" })`.
   - Use `withDefaults(defineProps<Ms<Name>Props>(), { ... })`.
   - Render the `ms-*` class and bind variants and states as `data-*` attributes.
   - Handle attributes and accessibility (`aria-*`, `role`); form controls use `inheritAttrs: false` so `aria-*`, `required` and `autocomplete` reach the native element.
4. Export the component and its public types from `packages/vue/src/index.ts`:
   ```typescript
   export { default as Ms<Name> } from "./components/Ms<Name>/Ms<Name>.vue";
   export type { Ms<Name>Props, Ms<Name>Variant, Ms<Name>Size } from "./components/Ms<Name>/types.ts";
   ```

---

## 4. Tests with Vitest (`packages/vue/tests`)

1. Create the unit test at `packages/vue/tests/ms-<name>.test.ts`:
   - Basic rendering and default classes.
   - Variants and sizes applied correctly.
   - Accessibility attributes (`role`, `aria-disabled`, etc.) and keyboard behavior.
   - Emitted events and `v-model` bindings.
   - Default and named slots.
2. Shared suites: `ssr.test.ts` renders every exported component on the server; add interactive states to `axe.test.ts` where relevant. The CSS checks in `packages/css/tests` (custom properties, logical properties, motion) run over the new stylesheet.
3. Run the package tests:
   ```powershell
   pnpm.cmd --filter @magic-style/vue test
   ```

---

## 5. Documentation and Visual Review (`apps/docs`)

1. Register the component in `apps/docs/catalog/components.ts` (slug, category, title and description in the 3 languages).
2. Create the demos in `apps/docs/demos/<slug>/`: one SFC per example, `strings.json` (en-US, pt-BR, es-ES) and `meta.json` (titles, descriptions and accessibility notes). Follow the `demos/button/` model.
3. Validate and preview:
   ```powershell
   pnpm.cmd --filter magic-style-docs check:demos
   pnpm.cmd docs:dev
   ```
   Use the **Customize** panel to check themes, density, radius and contrast.

---

## 6. Completion Gate

Run the full health gate:

```powershell
pnpm.cmd validate
```

If the component changes the public API, create a changeset (in English):

```powershell
pnpm.cmd changeset
```
