# Competitive analysis

**Scope:** how Magic-Style compares with the reference libraries in the Vue ecosystem and with shadcn/ui, which currently sets the standard for look and documentation. The document records what has already been addressed, what is planned for this release and what stays in the backlog.

**Libraries analyzed:** shadcn/ui (React) and shadcn-vue, Nuxt UI v3, PrimeVue 4, Vuetify 3 and Reka UI (formerly Radix Vue).

Statements about other libraries describe public, stable characteristics of those projects, not version numbers or metrics that change often.

## Summary

| Axis          | Reference                                                               | Magic-Style before                             | Magic-Style now                                                                                              | Next                                                            |
| :------------ | :---------------------------------------------------------------------- | :--------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| Default look  | shadcn/ui (new-york)                                                    | Custom look, 5 focus styles, bluish shadows    | shadcn structure in every theme; a single focus style with a halo; shadows on the Tailwind scale             | Review niche components (FAB, speed dial, lightbox)             |
| Themes        | Nuxt UI (app.config + CSS vars), PrimeVue (presets), daisyUI (contract) | 27-variable contract with validated contrast   | Gallery of the 10 themes and a theme generator with AA checks on the site                                    | Planned for this release: export to DTCG / Tokens Studio        |
| Documentation | shadcn/ui, Nuxt UI                                                      | 34k-line hand-written preview, Portuguese only | VitePress site in English, Portuguese and Spanish, 95 pages per language with demos, code and generated API  | Planned for this release: Blocks page and StackBlitz playground |
| Generated API | Nuxt UI, PrimeVue                                                       | Duplicated by hand                             | `vue-component-meta` generates props, events and slots from the code; JSDoc on every public prop             | Turn on `gen-api --strict` in the build                         |
| Accessibility | Reka UI (WAI-ARIA primitives)                                           | APG patterns, 3:1 focus ring                   | Same foundation, plus keyboard notes per component, a11y bugs fixed and an axe audit of the built site in CI | Planned for this release: the remaining a11y findings below     |
| i18n          | Vuetify (locale adapter), PrimeVue (locale)                             | pt-BR and en                                   | English (default), Portuguese and Spanish in the components and on the site                                  | More languages through contributions                            |
| Distribution  | shadcn (CLI copies the code), Nuxt UI (module)                          | npm package                                    | npm packages; the CSS works without Vue                                                                      | Backlog: shadcn-vue-compatible registry                         |
| SSR           | Nuxt UI (native Nuxt)                                                   | SSR without mismatch                           | Laravel + Inertia guide with SSR in all 3 languages                                                          | Nuxt module                                                     |

## By axis

### Look

shadcn/ui became the reference because it makes few decisions and all of them are consistent: 36px controls, 14px text, `shadow-xs` on fields, a 3px translucent focus ring, `rounded-xl` cards, overlays without blur and dense menus. shadcn-vue and Nuxt UI v3 follow the same language.

**What changed:** the structure is now the same in every theme, and each theme only swaps colors, radii, depth and fonts. There were also three cross-cutting fixes:

- the non-existent variable `--ms-font-size-body-*` was removed;
- the fixed heights of the Select were replaced by tokens;
- the `scale()` on button press was removed.

**Kept as a differentiator:** field borders stay at 3:1 (WCAG 1.4.11). shadcn uses lighter borders that don't reach that contrast.

### Themes

- **PrimeVue 4:** presets (Aura, Lara, Nora) with design tokens in three layers (primitive, semantic, component).
- **Nuxt UI v3:** colors configurable in `app.config` and CSS variables.
- **Magic-Style:** uses the daisyUI and FlyonUI contract model. It is smaller for theme authors and has an advantage the others don't offer out of the box: `checkMsThemeContrast` reports WCAG AA failures before you ship.

The theme generator on the site makes this visual, with a preview on the real components and ready-to-copy `defineMsTheme` and CSS code. It is the equivalent of the shadcn/ui theme generator, with contrast checks.

**Planned for this release:** export the generated theme as DTCG or Tokens Studio JSON.

**Next:** allow editing every contract color in the generator, not only the primary color and the neutral hue.

### Documentation

shadcn/ui and Nuxt UI set today's expectations:

- one page per component, with a live example and the code next to it;
- an API table generated from the code;
- search;
- stable URLs;
- dark mode;
- a theme picker.

**New site (`apps/docs`):**

- VitePress 2, with pages generated from a typed catalog;
- demos written as real SFCs that go through `vue-tsc` and ESLint;
- code shown with the strings already translated into the page's language;
- API tables from `vue-component-meta`, with outdated description translations flagged;
- local search per language, `hreflang` and a sitemap;
- keyboard and ARIA notes checked against the source code;
- a Playwright smoke test of every route with an axe audit, in CI.

**Planned for this release:**

- a "Blocks" page with complete screens (login, dashboard, settings), like shadcn's blocks;
- a playground (StackBlitz) opened from each demo.

### Distribution

The shadcn CLI copies the component code into the project, which gives users full control. Nuxt UI and PrimeVue ship packages.

Magic-Style ships two packages: `@magic-style/vue` and `@magic-style/css`. The CSS package works without Vue (plain HTML and Blade), which none of the Vue competitors offer.

**Backlog:** a registry compatible with the shadcn-vue CLI (one JSON file per component) would enable the "copy into your project" flow without maintaining our own CLI.

### Accessibility

Reka UI is the reference for accessible primitives; shadcn-vue and Nuxt UI v3 are built on it. Magic-Style implements the APG patterns itself.

The agents that wrote the demos audited the source of every component and found real gaps. The following were fixed in the `a11y-i18n-fixes` changeset:

- `MsSegmentedControl` did not move focus with the arrow keys.
- `MsProgressRadial` had an inconsistent `aria-valuenow`.
- `MsRadioGroup` had no target for `<label for>`.
- `MsField` and `MsRating` had hardcoded Portuguese strings.
- The `MsCommandPalette` item icon was ignored.

**Planned for this release (found, not yet fixed):**

- `MsEmojiPicker` and `MsIconPicker`: no `aria-expanded`, no Escape to close, and names only in Portuguese.
- `MsDatePicker`: the input doesn't get the `MsField` id, and the shortcuts ignore `minDate`/`maxDate`.
- `MsFab`: the speed dial doesn't close with Escape.
- `MsMenu`: doesn't return focus to the trigger.
- `MsBanner`: `role="region"` without an accessible name.
- `MsFileInput`: doesn't validate `accept` for dropped files.
- `MsChoicebox`: no arrow-key navigation.
- `MsListGroup` / `MsListItem`: `role="group"` inside a `<ul>` and `aria-selected` on a plain list's `<li>`; `interactive` without keyboard support.
- `MsCollapse` / `MsAccordionItem`: a `<div>` inside the header `<button>` (invalid content model).
- `MsGlimpse`: `aria-expanded` on a non-interactive element. `MsTruncate`: the button has no `aria-expanded` and shows up even when nothing is truncated.
- `MsMarquee`, `MsParallax`, `MsPointer`: ignore `prefers-reduced-motion`; the marquee has no pause control (WCAG 2.2.2).
- `MsBlockquote`: `cite` goes to the native attribute, which expects a URL. `MsTimelineItem`: the title is always an `<h4>`.
- `MsCarousel`: `totalSlides` is passed by hand, even though slides register themselves.

Later changesets (for example `a11y-overlays-keyboard-phase-3`, which makes Escape return focus from `MsMenu`) touched some of these components, so check the current source before picking an item up.

### API

- **Reka UI and shadcn-vue:** `as` and `asChild` swap the root element.
- **Nuxt UI v3:** a `ui` prop to override classes per slot.
- **PrimeVue:** `pt` (pass-through).

Magic-Style has none of these mechanisms, and the most visible gap is a button rendered as a link (the landing page uses an anchor with the button classes). shadcn solves this with `asChild`.

**Planned for this release:** `as`/`href` on `MsButton`, `MsBadge` and `MsCard`.

**Backlog:** a simple per-slot `pt` (pass-through).

## Priorities

Planned for this release:

1. `as`/`href` on `MsButton`, `MsBadge` and `MsCard` (the most requested item, by the demo agents and by the landing page).
2. The accessibility findings above.
3. The Blocks page (complete screens) on the site.
4. A StackBlitz playground from each demo.
5. Theme export (DTCG / Tokens Studio) from the theme generator.

Backlog:

1. A registry compatible with shadcn-vue.
2. A per-slot `pt` pass-through.
