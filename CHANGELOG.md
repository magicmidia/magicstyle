# Changelog

All notable changes to the **Magic-Style Design System** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-09-17

### Enterprise Baseline 1.2 Initial Release

This landmark release establishes the complete foundation and component platform for Magic-Style, compliant with Architecture Baseline 1.2 across `@magic-style/vue`, `@magic-style/css`, `@magic-style/tokens`, and `@magic-style/themes`.

#### ✨ Key Highlights

- **82 Accessible Vue 3 Components:** Fully typed, tested, and compliant with WAI-ARIA 1.2 & WCAG 2.2 AA.
- **10 Physical Authentic Design Themes:** Curated with distinct light and dark modes across OKLCH perceptual palettes.
- **277 DTCG Design Tokens:** Design Tokens Community Group (DTCG) standard format tokens covering spacing, typography, colors, shadows, borders, transitions, and z-indices.
- **Interactive Component Workbench:** Flyon UI signature interactive playground allowing live parameter mutation (variants, tones, sizes) and immediate SFC code generation.
- **Floating Living Component Cluster:** Authentic UI elements showcase (Podcast Player, Team Permissions Card, Mini-Calendar grid, Quality sparkline curve, Command search).
- **Enterprise Monorepo Architecture:** Powered by pnpm workspaces, Turborepo pipeline caching, strict TypeScript extends, Vitest unit testing, and Changesets automation.

---

### 🧩 Component Surface (82 Components)

#### Actions & Buttons

- `MsButton` — Primary action with variants (`solid`, `outline`, `ghost`, `soft`), tones, loading spinners, and icon slots.
- `MsIconButton` — Accessible icon-only button with built-in tooltip binding and aria-label enforcement.
- `MsButtonGroup` — Semantic grouping of buttons with connected borders and coordinated active states.
- `MsDropdownButton` — Action button with integrated trigger menu and keyboard arrow traversal.
- `MsFab` — Floating Action Button with fixed positioning, elevation shadows, and expand/collapse triggers.

#### Form Controls & Inputs

- `MsInput` — Text input with clear button, prefix/suffix icons, helper text, and state validation.
- `MsPasswordInput` — Secure password field with reveal/hide toggle and keyboard shortcut support.
- `MsMaskedInput` — Masked input for phone numbers, dates, currency, and custom patterns.
- `MsSearchField` — Instant search input with keyboard shortcut `/` trigger and quick clear.
- `MsPinInput` — Multi-slot PIN/OTP verification code input with auto-advance and clipboard paste.
- `MsRange` — Dual and single slider control with track marks, tooltips, and touch handling.
- `MsSelect` — Unified advanced select engine (single, multi, searchable, async, virtualized, grouped).
- `MsNativeSelect` — High-performance HTML-native select wrapper with custom styling.
- `MsChoicebox` — Radio/Checkbox card selection group with rich subtitle and icon layout.
- `MsDatePicker` — Accessible date and calendar range picker with presets and keyboard nav.
- `MsColorPicker` — OKLCH and HEX color picker with eyedropper and preset swatches.
- `MsEmojiPicker` — Searchable emoji palette with recent emojis and skin tone support.
- `MsIconPicker` — Vector icon selection modal with search, tags, and category filtering.
- `MsFileInput` & `MsDropzone` — Drag-and-drop file uploaders with file type filters and progress bars.
- `MsLabel` — Accessible form field label with required indicator and tooltip anchor.

#### Navigation & Wayfinding

- `MsNavbar` — Responsive sticky top navigation bar with brand logo, nav links, and actions.
- `MsBreadcrumbs` — Hierarchical path navigation with customizable separators and ARIA current page.
- `MsPagination` — Accessible page switcher with jump-to-page, boundary count, and page size dropdown.
- `MsStepper` — Multi-step workflow indicator with horizontal/vertical orientations and completed badges.
- `MsTabs` — Keyboard-navigable tabbed interface (`solid`, `outline`, `pills`) with arrow key navigation.
- `MsSegmentedControl` — Compact pill switcher with animated sliding active indicator.
- `MsSidebar` & `MsSidebarMenu` — Collapsible multi-tier application sidebar navigation.
- `MsDock` — macOS-style floating application dock with magnification bounce effects.
- `MsScrollSpy` — Dynamic navigation tracker that updates based on scroll position in document sections.

#### Feedback & Status

- `MsAlert` — Informational, warning, error, and success banners with dismiss actions.
- `MsToast` — Floating toast notification stack with promise states and auto-dismiss timeouts.
- `MsBadge` — Status badges with soft backgrounds, pill shapes, and ping status dots.
- `MsStatus` — Minimal status dot and badge indicator with pulsating live ping.
- `MsProgress` & `MsProgressRadial` — Determinate and indeterminate linear/circular progress indicators.
- `MsSpinner` — GPU-accelerated loading indicator in multiple sizes and tones.
- `MsSkeleton` — Content loading placeholder with wave shimmer animation.
- `MsEmptyState` — Empty view with customizable illustration, title, description, and action CTA.

#### Overlays & Modals

- `MsDialog` — Modal dialog with focus trap, backdrop blur, and ESC dismiss.
- `MsConfirmDialog` — Preset confirmation modal with destructive or affirmative primary actions.
- `MsDrawer` — Slide-out sheet from left, right, top, or bottom with swipe-to-close gestures.
- `MsPopover` — Contextual popover card with collision detection and arrow pointers.
- `MsTooltip` — Lightweight informative tooltip with delay triggers and accessibility roles.
- `MsContextMenu` — Custom right-click contextual menu with nested submenu support.
- `MsCommandPalette` — Keyboard-first Spotlight / Raycast command launcher (`Cmd+K` / `Ctrl+K`).
- `MsLightbox` — Fullscreen media and gallery previewer with zoom, pan, and keyboard navigation.

#### Data Display & Layout

- `MsTable` — Feature-rich data table with sorting, sticky headers, striped rows, and selection.
- `MsCard` — Versatile container with header, body, footer, interactive hover, and image media slots.
- `MsAccordion` & `MsCollapse` — Expandable accordion panels with single or multiple active states.
- `MsAvatar` — User profile avatar with image fallbacks, initials, and presence indicator.
- `MsTag` — Interactive filter tags with removable close button and selectable states.
- `MsTimeline` — Chronological event feed with icon checkpoints, timestamps, and connecting lines.
- `MsTree` — Hierarchical tree view with folder expand/collapse and file item selection.
- `MsList` — Semantic list with avatar, action triggers, dividers, and secondary text.
- `MsCode` & `MsCodeBlock` — Monospace inline code and syntax-highlighted code block with copy button.
- `MsSnippet` — Terminal command snippet card with one-click copy and shell icon.
- `MsCarousel` — Touch-friendly media slider with indicators, autoplay, and swipe gestures.
- `MsAppShell`, `MsPage`, `MsContainer`, `MsGrid`, `MsSplitPane` — Structural enterprise layouts.

---

### 🎨 Themes & Design Tokens

- **10 Authentic Themes:**
  1. `magic` — Modern luminous violet-blue primary with refined slate contrast.
  2. `shadcn` — Minimalist slate and zinc precision with high neutral contrast.
  3. `bootstrap` — Familiar enterprise palette with classic cobalt blue and crimson danger.
  4. `material` — Expressive Google Material Design 3 elevation and tonal accents.
  5. `linear` — Dark futuristic purple with high-saturation neon highlights and subtle borders.
  6. `supabase` — Emerald dark mode with emerald green accents and deep obsidian cards.
  7. `nord` — Arctic icy blue and muted pastels inspired by northern Scandinavian palettes.
  8. `vercel` — Monochrome black and white pure minimalism with high contrast typography.
  9. `cyberpunk` — High-voltage neon cyan, magenta, and electric yellow contrast.
  10. `cupcake` — Playful pastel candy palette with soft rounded contours.

- **Theme Engine Architecture:**
  - Dynamic `data-ms-theme` and `data-ms-color-mode` attributes.
  - Perceptually uniform OKLCH color palettes for perfect color contrast across light and dark modes.
  - `MsProvider` and `MsThemeScope` components for nested theme overrides in isolated UI subtrees.

---

### 🛠️ Architecture & Tooling

- **Strict Architecture Boundaries:** Verified via `scripts/check-architecture.mjs` preventing cyclic or illegal Node/browser imports.
- **Zero Fake Green Policy:** Strict quality gates requiring Prettier format, ESLint 9 flat config, TypeScript strict typecheck, Vitest unit test suite (100% passing), and Turbo build.
- **CI/CD Automation:**
  - `.github/workflows/ci.yml`: Full automated matrix health gate on pull requests and pushes to `main`.
  - `.github/workflows/release.yml`: Automated Changeset versioning and package publishing workflow.
