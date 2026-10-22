# @magic-style/css

## 0.2.0

### Minor Changes

- b64e926: Accessibility backlog, new props and API documentation:

  - `MsEmojiPicker`/`MsIconPicker`: triggers expose `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`; the panel is a labelled `role="dialog"`; Escape and outside clicks close it and return focus to the trigger; the search input is labelled (new messages `emojiPicker.label/searchLabel`, `iconPicker.label/searchLabel`). The icon picker trigger shows the icon name instead of its id.
  - `MsDatePicker`: the input is connected to `MsField` (id, `aria-describedby`, `aria-invalid`); Today/Tomorrow/Next N days presets are disabled outside `minDate`/`maxDate`; in `datetime` mode a time chosen before the date is kept and picking a day no longer closes the panel.
  - `MsFab`: Escape and outside clicks close the speed dial; attributes such as `aria-label` go to the main button (`inheritAttrs: false`, class/style stay on the container); `aria-controls` on the toggle.
  - `MsMenu`: Escape and selection return focus to the element focused before the menu opened (or the `anchor`) when focus was in the menu.
  - `MsBanner`: the `region` is named by its title, or by the new `banner.label` message.
  - `MsFileInput`: dropped files are validated against `accept` (`reject` with reason `"accept"`); setting `v-model` to `null`/`[]` clears the list.
  - `MsChoicebox`: radio mode is an APG radio group (one tab stop, arrow keys/Home/End move focus and selection); the `name` prop now submits the value(s) through hidden inputs.
  - `MsList`: `MsListGroup` renders `<li role="none">` with a labelled nested `<ul role="group">`; `active` maps to `aria-current` unless the new `selectable` prop turns the list into a `role="listbox"` (options with `aria-selected`, arrow-key navigation); `interactive` items are focusable and activate with Enter/Space.
  - `MsCollapse`, `MsAccordionItem` and `MsStep`: no `<div>` inside header buttons. `MsStep` renders its default slot below the trigger.
  - `MsGlimpse`: `aria-expanded`/`aria-controls` move from the wrapper span to the focusable link (or the first focusable element of a custom trigger).
  - `MsTruncate`: the toggle has `aria-expanded`/`aria-controls` and only renders when the text actually overflows (measured after mount; SSR renders no toggle).
  - New `usePrefersReducedMotion()` composable (SSR-safe). `MsMarquee` gets a pause/play button (`controls`, default on; messages `marquee.pause/play`, WCAG 2.2.2) and starts paused with reduced motion; `MsParallax` stops moving and `MsPointer` hides and removes its global listener with reduced motion or when disabled.
  - `MsBlockquote`: new `citeUrl` for the native `cite` attribute; `cite` is only the visible source title.
  - `MsTimelineItem`: new `titleTag` (default `"h4"`), `solid` and `active` (`aria-current="step"`) props.
  - `MsCarousel`: `totalSlides` is optional and derived from the registered slides.
  - `MsTag`: clickable + closable tags render the clickable part and the close button as siblings (no nested controls).
  - `MsPagination`: removed the never-emitted `update:pageSize` event (there is no page-size control).
  - `MsMasonryGrid`: the slot `index` is the item's global index.
  - `MsScrollSpy`: new `container` prop (element, ref or selector) and the default slot is rendered.
  - `MsProvider`: `colorMode="inherit"` leaves out `data-ms-color-mode` (and `data-ms-theme` while it matches the inherited theme) so a wrapper follows its ancestor's mode.
  - `MsChatBubble`: new `typing` prop (three-dot indicator with a localized `role="status"` label, message `chatBubble.typing`) and `secondary`/`accent` tones. `MsEmptyState`: `secondary`/`accent`/`info` icon tones and a `ring` prop.
  - Props that were documented as not applied now work: `MsAppShellFooter` `bordered` (default true; `false` removes the top border), `MsTextarea` `maxRows` (caps `autoGrow`), `MsWizardStep.icon` (shown in the step badge).
  - `MsAvatar` `src`/`name` and `MsBadge` `tone`/`count` accept an explicit `undefined`.
  - CSS: `.ms-field-description`/`.ms-field-error` have no UA margins; the neutral avatar fallback has an inset hairline; slotted SVGs in `.ms-icon-button` follow the button size (16/16/20px for sm/md/lg); disabled date presets; nested list groups; marquee viewport/control; stepper content; typing indicator label and reduced motion; pointer hidden with reduced motion.
  - Every public prop now has a JSDoc description (API tables), plus descriptions for the events and slots touched here.
  - `MsButton`: no longer renders `aria-expanded="false"` on every button; the attribute is only set when `open` is passed.

- 3dc2963: - **themes & css**: Added 8 new curated design system themes (`shadcn`, `bootstrap`, `material`, `github`, `linear`, `vercel`, `supabase`, `nord`) alongside `magic` and `graphite`, reaching a total of 10 distinct, production-grade themes with authentic visual identities beyond simple color swaps.
  - **tokens**: Extended semantic tokens with `elevation.button`, `elevation.card`, `elevation.dropdown`, `elevation.modal`, `elevation.input`, and added `elevation.none` to primitive shadows.
  - **themes**: Added `darkOverrides` support to `ThemeDefinition` and DTCG token compilation in `@magic-style-internal/themes`, enabling themes to feature distinct light and dark mode palettes (e.g. Shadcn zinc monochrome with black/white buttons, Material 3 royal purple/lavender pastel, GitHub primer green, Linear radiant electric indigo, Supabase emerald neon, Vercel pure contrast, Nord arctic frost).
  - **css**: Introduced `packages/css/src/components/theme-enhancements.css` and token bindings:
    - **MaterialUI (M3)**: Full pill buttons (`border-radius: 9999px`), M3 dual-layer ambient + key elevation shadows (`0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3)`), 16px rounded cards, and pill badges.
    - **Bootstrap 5**: Signature 0.375rem (6px) rounded geometry, top highlight inset bevels on solid buttons (`inset 0 1px 0 rgba(255,255,255,0.15)`), diffuse card drop-shadows, and iconic 0.25rem royal blue focus halo (`0 0 0 0.25rem rgba(13,110,253,0.25)`).
    - **Shadcn UI**: Radical flat minimalism, crisp 1px zinc borders (`#e4e4e7` / `#27272a`), 6px/8px radius, flat solid buttons (black in light, white in dark), and micro-shadows.
    - **GitHub Primer**: Iconic Primer button top highlight bevel & bottom shadow (`0 1px 0 rgba(27,31,36,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`), 6px radius, and Primer borders.
    - **Linear**: Dark-first obsidian SaaS surfaces, specular edge highlights on buttons, radiant violet focus halo, and deep elevated card shadows.
    - **Vercel Geist**: Hyper-minimal high-contrast monochrome, razor-sharp 6px geometry, dual-ring focus outline, and flat zero-shadow surfaces.
    - **Supabase**: Dark studio charcoal with emerald neon accents (`#3ecf8e`), dark specular bevels, and emerald focus rings.
    - **Nord Arctic**: Scandinavian polar night palette, soft 8-10px rounded contours, and cold ambient shadows.
  - **preview**: Integrated all 10 themes in the Preview Studio theme switcher and added a full interactive Design Dials & Themes Catalog showcase in the documentation.
- 3dc2963: - **vue**: Add 26 new enterprise components with comprehensive props, slots, emits, accessibility (WCAG 2.2), and full TypeScript type definitions:
  - `MsPagination`: Multi-page navigation engine with jumper input, page size selector, ellipsis logic, and full keyboard navigation.
  - `MsCodeBlock`: Code syntax presentation block with line numbers, copy button, collapsible view, badge, and file headers.
  - `MsCollapse`: Smooth collapsible accordion/disclosure surface with CSS grid row animations and customizable header triggers.
  - `MsLink`: Semantic anchor link with 5 tone variants, underline behaviors (always, hover, none), automatic external link detection, and icon.
  - `MsBlockquote`: Expressive quotes with quote mark decoration, 8 semantic tone accents, cite author, and role attribution.
  - `MsMaskedInput`: Form input with real-time formatting masks (CPF, CNPJ, phone, CEP, date, currency) and unmasked value binding.
  - `MsIconPicker`: Interactive icon gallery selector with live fuzzy search, categories, and direct glyph selection.
  - `MsFormWizard`: Multi-step form orchestrator with step progression, linear navigation validation, and custom step actions.
  - `MsPinInput`: Security PIN / OTP split digit input with automatic focus advance, backspace navigation, paste handling, and mask mode.
  - `MsPasswordInput`: Advanced security password field with show/hide toggle, real-time strength meter, policy criteria checklist, and strength tips.
  - `MsDropzone`: Drag-and-drop file upload zone with visual dragover feedback, multi-file acceptance, and file item preview/remove list.
  - `MsMarquee`: Infinite marquee ticker powered by GPU-accelerated CSS animations with speed control, pause-on-hover, reverse direction, and gradient edge masks.
  - `MsPointer`: Custom magnetic and responsive cursor indicator overlay with dot, ring, and spotlight variants.
  - `MsEmojiPicker`: Categorized emoji picker with quick search, category tabs (smileys, gestures, objects, symbols), and selection events.
  - `MsSplitPane`: Resizable split panel layout engine supporting horizontal and vertical splitting with gutter drag interactions.
  - `MsDatePicker`: Calendar date selection component with month/year navigation, quick presets (Today, Tomorrow, +7 days), and formatted output.
  - `MsParallax`: Smooth parallax scrolling viewport with variable speed displacement and 3D depth impression.
  - `MsBentoGrid` & `MsBentoItem`: Modern Bento-box style grid layout system with colSpan (1-4) and rowSpan (1-3) controls.
  - `MsMasonryGrid`: Multi-column cascading masonry waterfall layout with dynamic column count.
  - `MsLightbox`: Full-screen modal media lightbox gallery with previous/next navigation, counter, image caption, and ESC shortcut.
  - `MsTruncate`: Multi-line text truncation utility with customizable clamp lines, middle/end positions, and inline expandable button.
  - `MsCommandPalette`: Spotlight-style global command palette dialog (Cmd+K / Ctrl+K) with instant item search and grouped actions.
  - `MsToggleGroup` & `MsToggleGroupItem`: Accessible segmented button toggle group supporting single and multiple selection modes.
  - `MsFab`: Floating Action Button with expandable speed-dial secondary action items and 4 screen corner anchor positions.
  - `MsLabel`: Semantic form label component with required badge, optional marker, and informational helper tooltip.
  - `MsCode`: Inline typography code snippet component with semantic tones (8 tones), subtle/outline/solid variants, and one-click copy button.
  - `MsCanvas`: Decorative textured background surface supporting dots, grid, and lines SVG patterns with customizable density and pattern colors.
  - **css**: Add 26 component CSS stylesheets under `@magic-style/css/components/` and register them in the master stylesheet and package exports.
  - **preview**: Register all 26 components in the interactive Documentation Studio with complete API tables (Props, Slots, Emits, Tokens) and interactive playgrounds.
- 3dc2963: - **vue**: Add `MsAlert` feedback banner component with semantic tones, title/description slots, and dismissible state.
  - **vue**: Add `MsCard` container component with raised, flat, outline, and sunken variants, header, footer, and interactive state.
  - **vue**: Add `MsAvatar` user identity component with image support, initials fallback, size presets, and status indicators.
  - **css**: Add `alert.css` with semantic color roles and soft, solid, and outline variants.
  - **css**: Add `card.css` with elevation tokens, padding scales, and interactive hover transitions.
  - **css**: Add `avatar.css` with size scales, circular/rounded geometry, and status indicator dots.
- 3dc2963: - **vue**: Add `MsAppShell` family (`MsAppShell`, `MsTopbar`, `MsSidebar`, `MsNavigationRail`, `MsContent`, `MsAside`, `MsFooter`, `MsStatusBar`) establishing the normative first-class Application Layout System with collapsible context and responsive area coordination.
  - **vue**: Add `MsPage` family (`MsPage`, `MsPageHeader`, `MsPageActions`) providing standardized page container constraints, headers with breadcrumbs and action slots.
  - **css**: Add `app-shell.css` defining the application layout grid, token-bound dimensions (`--ms-topbar-height`, `--ms-sidebar-width`, `--ms-rail-width`, `--ms-statusbar-height`), and collapsible transitions.
  - **css**: Add `page.css` with fluid and compact constraints, balanced gutter tokens, and structured header layouts.
- 3dc2963: - **vue**: Add `MsBreadcrumbs`, `MsBreadcrumbItem`, and `MsBreadcrumbSeparator` suite with WAI-ARIA breadcrumb navigation compliance, item list shorthand, and customizable separators.
  - **vue**: Add `MsTag` component for categorization and metadata tagging with soft, solid, and outline variants, 7 semantic tones, sizes sm/md/lg, and closable dismiss action.
  - **vue**: Add `MsEmptyState` component for feedback and placeholder UI with icon, title, description, and action slots across sm/md/lg container sizes.
  - **css**: Add `breadcrumbs.css` with structured flex layout, token-based link typography, and subtle separator spacing.
  - **css**: Add `tag.css` with pill geometry, tone border/background variants, and integrated focus-visible close button.
  - **css**: Add `empty-state.css` with centered layout, dashed surface borders, and balanced spacing tokens.
- 3dc2963: - **vue**: Add `MsNativeSelect` HTML-native dropdown component wired into `MsField`.
  - **vue**: Add `MsBadge` semantic tag and counter component with soft, solid, and outline variants.
  - **vue**: Add `MsDialog` modal overlay component (Milestone M9 vertical slice) with WAI-ARIA compliance, focus management, backdrop, and Escape handling.
  - **css**: Add `native-select.css` with tokenized field heights, border styling, and chevron SVG overlay.
  - **css**: Add `badge.css` with semantic color tones, size presets, and pill/dot modifiers.
  - **css**: Add `dialog.css` with elevation overlay, backdrop blur, and motion tokens.
- 3dc2963: - **vue**: Add and enhance `MsNavbar` responsive header component with brand tones, positions (static, sticky, fixed, fixed-bottom, floating), shadow levels (none, sm, md, lg, xl), responsive container modes (sm, md, lg, xl, fluid), variants (elevated, bordered, glass), sizes (sm, md, lg), and semantic slots (#brand, #default, #actions, #mobile-toggle, #mobile-menu).
  - **vue**: Add `MsSidebar` collapsible layout panel with mini rail mode (68px), sides (left, right), width scales (compact, normal, wide), tones, variants, and header/body/footer slots, integrating seamlessly both standalone and inside `MsAppShell`.
  - **vue**: Add and enhance `MsFooter` semantic footer component supporting multi-column grid, compact, simple, and centered layouts, shadow levels (sm, md, lg), positions (static, sticky, fixed), responsive container modes (sm, md, lg, xl, fluid), with sunken and inverse surface variants.
  - **vue**: Add and enhance `MsScrollbar` high-performance custom scroll container supporting auto-hide visibility (thumb hides when idle and smoothly reveals on scroll and hover), optional navigation arrows (hidden by default, toggled via `arrows`), custom track background color (`trackColor`), custom thumb color (`thumbColor`), and custom corner radius (`thumbRadius`/`radius`).
  - **css**: Add and enhance `navbar.css`, `sidebar.css`, `footer.css`, and `scrollbar.css` with zero `!important`, full design token variables (`--ms-scrollbar-*`, `--ms-navbar-*`, `--ms-footer-*`), auto-hide transitions, and individual CSS bundles.
  - **preview**: Modernize top navbar and sidebar, remove cluttered toolbar selects, add floating Cog button (⚙️) on top left below navbar opening right-sliding offcanvas drawer with all system customization options (Theme, Contrast, Density, Radius Dial, Viewport, RTL, Dark mode).
- 3dc2963: - **vue**: Add `MsProgress` component with determinate and indeterminate modes, custom labels, percentages, semantic tones, and striped/animated variations.
  - **vue**: Add `MsSkeleton` component for accessible loading state placeholders with text, circle, and rect shapes, multi-line count, and shimmer/pulse animations.
  - **vue**: Add `MsTooltip` component for accessible contextual overlays with directional placements (top, bottom, left, right), hover/focus triggers, configurable delays, and Escape dismissal.
  - **css**: Add `progress.css` with token-based sizing scales, semantic tone backgrounds, and keyframe animations for indeterminate states and moving stripes.
  - **css**: Add `skeleton.css` with shape geometries and motion-token shimmer and pulse animations.
  - **css**: Add `tooltip.css` with token-based dark container, pointer arrow, directional offsets, and entrance animations.
- 3dc2963: Adds the canonical `MsSelect` (Unified Advanced Select Engine) and the `MsTable` suite (Semantic Data Display Table):

  - **`MsSelect`**: the Baseline 1.2 unified advanced engine, with single selection, multiple selection with tags, built-in filterable search, optgroups, a clear action, loading, creatable options and WAI-ARIA 1.2 Combobox/Listbox accessibility with full keyboard navigation.
  - **`MsTable` suite**: `MsTable`, `MsTableHead`, `MsTableBody`, `MsTableRow`, `MsTableHeaderCell`, `MsTableCell`, `MsTableFooter` with striped rows, full borders (bordered), hover and selected rows, column sorting with `aria-sort` and 3 tokenized densities (sm, md, lg).
  - **CSS distribution**: granular exports added for `components/select.css` and `components/table.css`, for a total of 39 verified public exports.

- 3dc2963: - **vue**: Add `MsSeparator` component for accessible visual or semantic horizontal and vertical separation with decorative toggle.
  - **vue**: Add `MsIconButton` component for accessible, square or circular icon action buttons with required aria-label, loading spinner, and semantic tones.
  - **vue**: Add `MsSegmentedControl` component for multi-option linear selection with WAI-ARIA radiogroup semantics, keyboard arrow navigation, and elevated active indicator.
  - **vue**: Add `MsSearchField` component for dedicated search experiences with integrated search icon, clear button, and loading spinner.
  - **css**: Add `separator.css` with token-based borders, horizontal/vertical orientations, and subtle/strong/dashed styles.
  - **css**: Add `icon-button.css` with square and circle shapes, 5 size steps, and full tone variants.
  - **css**: Add `segmented-control.css` with sunken track surface, elevated active segment pill, and hover/active states.
  - **css**: Add `search-field.css` with prefix icon positioning, suffix clear/spinner actions, and focus ring tokens.
- 3dc2963: - **vue**: Add `MsSnippet` component supporting single and multi-tab command runners (npm, pnpm, yarn, bun), customizable prompt indicators, one-click copy to clipboard with feedback timeout and callback, line wrapping, and WAI-ARIA tab navigation.
  - **css**: Add `.ms-snippet` layer in `@magic-style/css/components/snippet.css` with surface-sunken terminal container, tab triggers, responsive prompt styling, and semantic brand tones.
  - **vue**: Add `MsChoicebox` and `MsChoiceboxItem` components for card-style interactive form options, supporting both radio (single) and checkbox (multiple) modes, keyboard arrow and space navigation, customizable headers, titles, descriptions, badges, prices, icons, and flexible grid/vertical/horizontal layouts.
  - **css**: Add `.ms-choicebox` and `.ms-choicebox-item` layer in `@magic-style/css/components/choicebox.css` with elevated card styling, active border rings, animated radio and checkbox indicators, and responsive grid columns.
  - **vue**: Add `MsGlimpse` component for rich URL hovercard previews, featuring open graph thumbnails, clean domain displays with favicons, badges, titles, descriptions, loading skeletons, smooth positioning (`top`, `bottom`, `left`, `right`), keyboard accessibility, and mobile touch support.
  - **css**: Add `.ms-glimpse` layer in `@magic-style/css/components/glimpse.css` with floating popover cards, image wrappers, metadata layouts, shimmer skeletons, and `prefers-reduced-motion` compliance.
- 3dc2963: - **vue**: Add `MsProvider` root theming and configuration provider with system preference resolution and document/wrapper attribute binding.
  - **vue**: Add `MsThemeScope` component for nested visual configuration with dial inheritance and local overrides (Doc 07 §4, §5).
  - **vue**: Add `useThemeContext`, `useMagicStyle`, and `useSystemColorMode` composables for full reactivity of themes, color modes, and design dials.
  - **vue**: Add `MsTabs`, `MsTabList`, `MsTab`, `MsTabPanels`, `MsTabPanel` components with complete WAI-ARIA tablist accessibility, keyboard navigation, and line, pill, and enclosed variants.
  - **vue**: Add `MsSpinner` loading indicator with accessible `aria-live` status announcements, SVG vector circles, and thickness/tone variants.
  - **css**: Add `theme-scope.css` with surface and text color transitions for nested theme scopes.
  - **css**: Add `tabs.css` with line, pill, and enclosed variants, horizontal and vertical layouts, and focus rings.
  - **css**: Add `spinner.css` with motion token keyframe spin animations, size scales, and semantic tone palette.
- feb5e06: Comprehensive revamp of MsButton and Buttons Documentation in Studio:

  - Added new button variants: `text` and `glass` (frosted glassmorphism with backdrop blur).
  - Added geometry modifiers: `shape` (`square`, `rounded`, `rounded-sm`, `rounded-lg`, `pill`).
  - Added responsive and layout props: `wide`, `block`, `responsive` (fluid full-width on mobile viewports).
  - Added interactive feedback modifiers: `wave` (radial ripple wave animation on click) and `.ms-button--close` (dismissal button with 90-degree hover rotation).
  - Standardized documentation to display all code snippets using the library's official `<MsCodeBlock>` and `<MsCode>` components.
  - Expanded Studio buttons documentation to cover all 18 variations and live interactive playground with download triggers and loading simulations.

- eadc66b: Invert "soft" variant color pairs for optimal contrast and authentic tonal styling:

  - Swapped text color and background color across all "soft" component variants (`button`, `badge`, `alert`, `banner`, `icon-button`, `tag`, and `chat-bubble`).
  - Backgrounds now receive the luminous tonal tint while typography receives the deep, readable ink color.
  - Added canonical `--ms-color-*-soft-bg` and `--ms-color-*-soft-fg` pairs in `base.css` for all 8 tones.

- 3dc2963: - **textarea**: Added `autoGrow`, scale sizes (`sm`, `md`, `lg`, `xl`), resize classes (`none`, `vertical`, `horizontal`, `both`), and character counter slot/display.
  - **search-field**: Fixed icon overlap by adjusting native input padding; added variants (`outline`, `filled`, `flushed`), keyboard shortcut badge (`shortcut`), and clear action.
  - **select**: Added `tone` (8 semantic brand colors: `primary`, `secondary`, `accent`, `neutral`, `success`, `info`, `warning`, `danger`), `variant` (`outline`, `filled`, `flushed`), `pill` shape, size scale (`xs` 28px to `xl` 56px), and fixed SVG icons.
  - **button**: Added `xs` (28px) size, and `dashed` (dashed outline) and `link` (underlined text) variants.
  - **input**: Added all 8 semantic brand tones and `xs` (28px) size.
  - **card**: Added `tone` prop with accent top border in all 8 brand colors.
  - **alert**: Enlarged and vertically centered icons, added featured badge style (`featured`), and sizes (`sm`, `md`, `lg`).
  - **skeleton**: Fixed token fallback to ensure visibility; added presets (`circle`, `avatar`, `button`, `card`, `rect`, `text`), tones, and speeds (`fast`, `normal`, `slow`).
  - **tabs**: Added `solid` variant and responsive scrollable container with smooth navigation arrows for overflow/mobile views.
  - **breadcrumbs**: Added variants (`plain`, `pills`, `solid`), sizes (`sm`, `md`, `lg`), separator presets (`chevron`, `slash`, `arrow`, `dot`), item icons, and intelligent ellipsis collapse (`maxItems`).
  - **separator**: Added styles (`dashed`, `dotted`, `gradient`), semantic tones, thicknesses (1, 2, 4px), and labeled text dividers (`label="OR"`).
  - **badge**: Added `xs` and `xl` sizes, `count`, `maxCount` (e.g. `99+`), `dotOnly`, radar ping animation (`pulse`), ring border (`bordered`), wrapper mode, and corner positioning (`placement`).
  - **avatar**: Added `square` shape, extended sizes (`2xs`, `2xl`, `3xl`), `statusPlacement`, `bordered`, and created `MsAvatarGroup` with overlap spacing (`tight`, `normal`, `loose`), hover lift, and `+N` excess counter.
  - **card**: Added `glass` frosted blur variant, `xs` and `xl` padding, hover elevation (`hoverable`), `headerDivider`, `footerDivider`, cover image (`coverSrc`/`coverAlt`), and horizontal orientation (`orientation="horizontal"`).
  - **tag**: Added `pill` and `square` shapes, status indicator dot (`dot`), and prefix/suffix slots.
  - **switch**: Added sizes (`sm`, `md`, `lg`), semantic tones (`primary`, `success`, `warning`, `danger`, `accent`), label placement (`labelPlacement="left"|"right"`), and descriptive subtitle support.
  - **checkbox**: Added sizes (`sm`, `md`, `lg`), semantic tones, card option mode (`card`), and descriptive subtitle support.
  - **input**: Added `filled` and `flushed` variants, `pill` shape, clear action button (`clearable`), and interactive password visibility toggle (`passwordToggle`).
  - **progress**: Added micro (`2xs` - 2px) and ample (`2xl` - 24px) sizes, shapes (`square`, `rounded`, `pill`), gradient fills (`gradient`), and inline percentage text (`inlineValue`).
  - **radio**: Added sizes (`sm`, `md`, `lg`), semantic tones (`primary`, `success`, `warning`, `danger`), card option mode (`card`), subtitle descriptions, and group orientations (`horizontal`, `vertical`).
  - **button-group**: Added orientation layout (`horizontal`, `vertical`), attached mode (`attached`), and full-width block distribution (`fullWidth`).
  - **icon-button**: Added micro size (`2xs` - 20px), shapes (`square`, `rounded`, `circle`), and active pressed toggle state (`active`, `aria-pressed`).
  - **empty-state**: Added container variants (`dashed`, `plain`, `card`) and semantic icon tones (`primary`, `success`, `warning`, `danger`, `neutral`).
  - **native-select**: Added input variants (`filled`, `flushed`), rounded pill shape (`pill`), and validation tones (`success`, `warning`, `danger`).
  - **tooltip**: Added tones (`dark`, `light`, `primary`), sizes (`sm`, `md`, `lg`), directional arrow toggling (`arrow`), and max-width clamping with text wrap.
  - **dialog**: Added placement positions (`center`, `top`, `bottom` bottom-sheet), semantic tone indicators (`default`, `danger`, `warning`, `success`, `info`), and accessible role customization (`dialog`, `alertdialog`).
  - **segmented-control**: Added shapes (`rounded`, `pill`, `square`), tones (`neutral`, `primary`, `accent`), and extended size scale (`xs` 24px to `xl` 56px).
  - **menu / dropdown-button**: Added menu item prefixes (`prefix`), semantic danger tone (`tone="danger"`), divider separators (`divider`), and dropdown button alignment (`align="left"|"right"`) and full-width mode (`fullWidth`).
  - **table**: Added container variants (`default`, `surface`, `flush`), sticky header pinning (`stickyHeader`), and densities `xs` (11px micro) and `xl` (18px comfortable).
  - **spinner**: Added speeds (`fast` 0.4s, `normal` 0.8s, `slow` 1.4s) and micro (`2xs` 8px) / mega (`2xl` 64px) sizes.
  - **field**: Added layout orientations (`vertical`, `horizontal`), optional indicator text (`optional`), and font size scales (`sm`, `md`, `lg`).
  - **container**: Added `MsContainer` with fluid and fixed max-width breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`, `full`) and gutters.
  - **banner**: Added `MsBanner` with floating, sticky, and inline variants, status tones, and actions.
  - **drawer**: Added `MsDrawer` with placements (`left`, `right`, `top`, `bottom`), backdrop blur, keyboard traps, and sizes.
  - **accordion**: Added `MsAccordion` and `MsAccordionItem` with single and multiple expansion, icons, bordered and flush styles.
  - **popover**: Added `MsPopover` with click/hover triggers, custom placement, arrows, and auto-dismiss.
  - **confirm-dialog**: Added `MsConfirmDialog` for critical operations with confirm/cancel semantics, tones, and loading states.
  - **timeline**: Added `MsTimeline` and `MsTimelineItem` with vertical and horizontal directions, custom markers, and tones.
  - **progress-radial**: Added `MsProgressRadial` SVG gauge with smooth animations, custom thickness, and center label slots.
  - **status**: Added `MsStatus` badge and dot indicator with pulsing radar effect and semantic tones.
  - **rating**: Added `MsRating` with interactive star rating, half-stars, keyboard navigation, and readonly/disabled states.
  - **toast**: Added `MsToast`, `MsToastContainer`, and `useToast` reactive composable with positioning, automatic timeouts, and tone cards.
  - **animated-number**: Added `MsAnimatedNumber` for smooth numeric counting animations with configurable formatting and duration.
  - **list / list-group**: Added `MsList`, `MsListItem`, and `MsListGroup` with selection, avatars, prefixes, suffixes, and interactive states.
  - **range**: Added `MsRange` custom slider with tick marks, tooltips, semantic tones, and step snapping.
  - **stepper**: Added `MsStepper` and `MsStep` with horizontal/vertical layouts, completion tracking, clickable steps, and subtitle support.
  - **file-input**: Added `MsFileInput` with drag-and-drop zone, file type validation, size limits, and multi-file listing.
  - **tree**: Added `MsTree` and `MsTreeNode` with nested tree structures, expand/collapse, selection, and custom node icons.
  - **context-menu**: Added `MsContextMenu` triggered by right-click with boundary positioning, submenus, shortcuts, and items.
  - **chat-bubble**: Added `MsChatBubble` with sent/received alignments, timestamps, status ticks, and avatar integration.
  - **carousel**: Added `MsCarousel` and `MsCarouselSlide` with touch swiping, navigation arrows, pagination dots, and autoplay.
  - **dock**: Added `MsDock` and `MsDockItem` with macOS-style hover magnification, tooltips, and floating dock bars.
  - **color-picker**: Added `MsColorPicker` with interactive hex inputs, preset palettes, transparency slider, and popover picker.
  - **scroll-spy**: Added `MsScrollSpy` for automatic section highlighting based on viewport scroll position.
  - **sidebar-menu**: Added `MsSidebarMenu`, `MsSidebarMenuGroup`, and `MsSidebarMenuItem` for corporate and dashboard navigation with accordion submenus, sliding active indicators, mini/collapsed mode, badge indicators, and 8 semantic tones.
  - **brand-palette**: Standardized and strictly enforced official brand colors across internal tokens, CSS, and Vue: Accent (`#341f97`), Neutral (`#222f3e`), Primary (`#2e86de`), Secondary (`#e15f41`), Success (`#10ac84`), Info (`#0abde3`), Warning (`#ff9f43`), Danger (`#ee5253`).
  - **preview-studio**: Redesigned Preview Studio inspired by FlyonUI / Radix / DaisyUI with sliding `MsSidebarMenu` navigation across 6 categories, live search filter across 57 tabs, 4 FlyonUI-style synchronized tabs ([✨ Interactive Preview], [📋 Vue SFC Code], [📖 API Specification], [🎨 Gallery]), live reactive Vue SFC code generation matching playground state for all 51 components, enriched interactive controls across all components, responsive mobile drawer, and RTL toggle.
  - **studio-foundation**: Added interactive Typography scale, Colors WCAG AA contrast matrix, Themes & Dials visual playground, CSS Utilities live explorer, RTL switcher, and Customization playground.
- 3e9e469: Comprehensive visual modernization, modern design system harmonization (FlyonUI / Shadcn UI), and foundational Studio overhaul:

  - **New Components:**
    - `MsKbd`: Keyboard shortcut indicator with 3D raised (`raised`), outline (`outline`), and flat (`flat`) variants, 4 heights (xs 18px, sm 22px, md 26px, lg 32px), and 8 semantic brand tones.
    - `MsAspectRatio`: Responsive container preserving fixed aspect ratios (16:9, 4:3, 1:1, 21:9, 9:16, or custom ratios) with zero layout shift / reflow.
    - `MsRow` & `MsCol` (`MsGrid`): 12-column responsive flex grid system with semantic gutter control (`none`, `xs`, `sm`, `md`, `lg`, `xl`), column spans (`1`-`12`), offsets (`1`-`11`), and flex alignment props.
    - `MsHoverCard`: Interactive floating card overlay activated on hover with cubic easing micro-animations and configurable open/close delays.
  - **Visual Harmonization & CSS Refinements:**
    - `card.css`: Layered micro-shadows fallback (`0 1px 3px 0 rgb(0 0 0 / 0.04)`) and soft variant (`data-variant="soft"`) across all 8 brand tones.
    - `input.css`: Added compact `xs` (28px) size and shape geometry modifiers matching modern FlyonUI and Shadcn scales.
    - `grid.css`: Full 12-column CSS grid and gutter utility classes.
  - **Studio Documentation & Foundations Overhaul:**
    - **Tipografia:** 13-level harmonic scale (`display-2xl` to `caption-2xs`), 3 canonical font families, interactive live type tester, and live CSS code generator.
    - **Cores & WCAG 2.2:** 8 brand tone palettes (50-950 stops in OKLCH + HEX), 1-click token copy, semantic surface swatches, and real-time interactive WCAG 2.2 contrast validator.
    - **Grid (12-Col):** Interactive 12-column visualizer with presets (`1x 12`, `2x 6+6`, `3x 4+4+4`, `Dashboard 8+4`), gutter scale, and 12-column guide overlay.
    - All Studio code snippets and galleries strictly updated to use official `<MsCodeBlock>` and `<MsCode>` components.

- 556af52: Comprehensive modernization and visual unification of MsSelect and Studio Documentation:

  - Added shape geometry modifiers: `shape` ("square" | "rounded-sm" | "rounded" | "rounded-lg" | "pill").
  - Added dropdown positioning controls: `placement` ("top" | "bottom" | "auto") and teleport support via `<Teleport>` to body with dynamic bounding rect tracking.
  - Added advanced selection features: `counter` mode for compact badge display, `conditionalCounter` for progressive tag display (`+N mais`), `searchLimit`, and `minSearchLength`.
  - Added floating label support with inset label transitions (`floatingLabel`), prefix props/slots (`prefix`), and custom option template slots (`#option`, `#selectedOption`).
  - Rebuilt Studio Select documentation and gallery to cover all 32 usage patterns with live previews and official `<MsCodeBlock>` and `<MsCode>` syntax highlighting.

- b64e926: Polymorphic `as`/`href` rendering:

  - `MsButton`: new `href` (renders an `<a>`) and `as` (any element or component, e.g. `RouterLink` or Inertia `Link`; extra attributes such as `to` pass through). `type`/`disabled` only apply to a native `<button>`; a disabled or loading link/component drops its `href`, gets `aria-disabled="true"` and `tabindex="-1"`, and its clicks are prevented. The default `<button>` markup (and SSR output) is unchanged; data attributes and slots are kept in every mode.
  - `MsBadge`: new `as` prop for the standalone badge (default `span`).
  - `MsCard`: new `as` (default `div`) and `href` (renders an `<a>` link card with hover/focus styling and no `interactive` button semantics); new `"soft"` variant so `tone` renders as a tinted surface.
  - CSS: `.ms-button[aria-disabled="true"]` looks disabled; `.ms-card[data-link]` gets the interactive card styling.

- 3dc2963: Release v0.1.0 Enterprise Baseline 1.2:

  - Added official Changelog page (`/changelog` & `apps/preview/changelog.html`) tracking releases and GitHub changes.
  - Revamped Landing Page with the Flyon UI Interactive Workbench and Floating Living Component Cluster.
  - Configured GitHub Actions CI/CD workflows for automated validation and Changeset releases (`.github/workflows/ci.yml`, `.github/workflows/release.yml`).
  - Added standard open-source community templates (`CONTRIBUTING.md`, `CHANGELOG.md`, Issue forms, and PR template).

- d384fc8: Comprehensive security, microanimations, visual polish, and performance overhaul:

  - **Security & Memory Safety**:
    - `MsIconPicker`: Enforced strict SVG sanitization stripping `<script>`, `<style>`, inline event handlers (`on*`), and `javascript:` URIs.
    - `MsCodeBlock` & `MsCode`: Implemented full HTML entity escaping and guaranteed unmount cleanup for copy notification timers.
    - `MsSelect`, `MsMenu`, `MsPopover`, `MsContextMenu`: Refactored global listeners (`click`, `keydown`, `resize`, `scroll`) to dynamically bind only while open and automatically detach upon closing or component unmount.
    - `MsSplitPane`, `MsParallax`, `MsPointer`: Guarded mouse/scroll event listeners with `requestAnimationFrame` throttling and explicit lifecycle teardown to prevent memory leaks and layout thrashing.
    - `MsDialog`, `MsDrawer`, `MsConfirmDialog`: Integrated native Vue `<Transition>` wrappers for animated overlays and panels.

  - **Tokenized Microanimations & CSS Modernization**:
    - `base.css`: Introduced `--ms-motion-scale: 1` token and comprehensive zero-motion overrides for both `@media (prefers-reduced-motion: reduce)` and `[data-ms-motion="reduced"]` attribute selectors without `!important`.
    - `button.css`, `card.css`: Added active press micro-transforms (`scale(0.98)` / `scale(0.995)`).
    - `input.css`: Implemented multi-layered OKLCH ambient focus ring halos.
    - `switch.css`: Added spring-like thumb elongation feedback on active drag/press.
    - `toast.css`: Tokenized animation durations to `--ms-motion-duration-fast` with hardware-accelerated transforms.
    - `dialog.css`, `drawer.css`, `confirm-dialog.css`: Created enter/leave transition states matching Vue `<Transition>`.

  - **Documentation & Studio Synchronization**:
    - Synchronized all 82 catalog directory items on the landing page with deep-link Studio hashes.
    - Added bidirectional hash-routing in Studio with browser history synchronization and instant tab activation.
    - Added motion toggle control in the floating Theme Settings Drawer (`theme-toggle.js` & `components.html`).

- 6808eca: New default look in the shadcn/ui style, applied to every theme (each theme still only swaps colors):

  - **Global tokens:**
    - Shadows on the Tailwind scale (`--ms-elevation-xs|sm|md|lg|xl`), neutral and proportional to `depth`. The semantic ones (`button`, `input`, `card`, `dropdown`, `modal`) point to that scale.
    - A single focus style across the library. Fields use a border in the ring color plus a 3px halo (`--ms-focus-ring-shadow`); other elements use an offset outline. The ring color (`--ms-focus-ring-color`) reaches 3:1 on every surface of every theme.
    - `typography-size-xs` becomes 12px.
  - **Controls:** 36px default height and 14px text at every size. Transparent fields with an xs shadow. The button loses the press `scale` and the letter-spacing; the icon-only button is square. `outline` and `ghost` become neutral. `soft` is back to a light background with tinted text (in button, tag and banner). Checkbox, radio and switch follow shadcn's measurements.
  - **Surfaces:** cards with `radius-xl` and 24px padding. Dialog up to 512px, a 50% black overlay without blur and the `modal` shadow. Popover and menus with `radius-md`, the `dropdown` shadow and a neutral hover. The tooltip uses the primary color by default.
  - **Data and feedback:**
    - The badge is solid by default.
    - `MsTabs` uses the `pill` variant by default; `line` is still available.
    - `MsAlert` is neutral by default (`tone="neutral"`).
    - Table without a header background, toast without a colored side stripe, 32px avatar.
    - `MsSkeleton` uses `pulse` by default.
  - **Themes:**
    - Magic gets neutral surfaces (no bluish tint in dark mode) and keeps the blue primary.
    - The shadcn theme is complete: `base-raised`, zinc secondary, the official `destructive` and `font-display`. The shadcn-specific overrides were removed.
  - **Contrast:** across 10 themes × 2 modes, 102 text pairs moved above AA. The `danger` menu item, the status bar and trend text use feedback text tokens.

- 7a245aa: New theme model: a 27-variable contract + derived tokens (the daisyUI/FlyonUI model).

  - Each theme defines only the contract (`--ms-color-base-100/200/300/content`, 8 role colors + `-content`, `--ms-radius-selector/field/box`, `--ms-border-width`, `--ms-depth`, `--ms-font-sans/mono`, and 3 optional ones). The ~150 semantic tokens (surface, text, border, interactive, feedback, radius, elevation and legacy aliases) are derived at runtime with `color-mix()` and `oklch(from …)`; existing names remain valid.
  - Customization in one place: overriding `--ms-color-primary` (or any contract key) updates hover, active, subtle, text, focus and borders in every component and mode.
  - Official themes reduced from ~40–50 tokens per mode to 21 per mode + 8 shared, in JSON with `$schema` (editor autocomplete and validation). Every text/background pair passes WCAG AA (the test covers 10 themes × 2 modes).
  - `@magic-style/vue`: `defineMsTheme()`, `msThemeToCss()`, `checkMsThemeContrast()`, `MS_THEME_CONTRACT` and the `overrides` prop on `MsProvider`/`MsThemeScope` (runtime brand colors, e.g. multi-tenant).
  - Component CSS: 1,143 dead fallbacks and 529 hardcoded hex colors removed (sidebar-menu, progress, navbar and footer now follow the theme); button rewritten with 2 variables per tone.
  - Visible changes: more legible "muted" text and dark text on Nord's light `accent` (both previously failed contrast). Guide: `docs/theming.md`.

### Patch Changes

- c216d1a: Accessibility, i18n and SSR fixes:

  - i18n: `MsField` uses `label.optional` (no hardcoded "(optional)"); new messages `rating.star`, `tag.removeLabel`, `chatBubble.*`, `avatar.moreCount`, `codeBlock.label` and `table.label` (pt-BR, en, es).
  - `MsRating`: translated star labels, `aria-valuetext` and `MsField` integration (id, `aria-labelledby`, `aria-describedby`, `aria-invalid`).
  - `MsSegmentedControl`: roving tabindex (the selected item, or the first enabled one, is focusable); arrows/Home/End move focus together with the selection; the `name` prop now submits the value through an `<input type="hidden">`.
  - `MsProgressRadial`: `aria-valuenow` uses the raw value (consistent with `aria-valuemax`) and gains a percentage `aria-valuetext`.
  - `MsCommandPalette`: item `icon` is rendered (fallback ❖).
  - `MsMaskedInput`/`MsPasswordInput`: the invalid state also comes from the `MsField` `error`; `password-input.css` gains error styles.
  - `MsBanner`/`MsToast`: default icons for the `secondary` and `accent` tones.
  - `MsIconButton`: new `label` prop; `ariaLabel` becomes optional (deprecated) so that `aria-label="…"` in templates type-checks. Dev warning when there is no accessible name.
  - `MsColorPicker`: `aria-pressed` on the swatches. `MsRadioGroup`: the root receives the `MsField` control id.
  - `MsTag`: Enter/Space are only handled on the tag itself (the remove button works from the keyboard again), and the remove button includes the tag text.
  - `MsSnippet`: arrows/Home/End move focus to the tab. `MsTableHeaderCell`: sorting through a `<button>` (keyboard) with `aria-sort` on the `th`.
  - `MsChatBubble`: translated status with `role="img"`. `MsAvatarGroup`: "+N" counter with `role="img"` and a label with the count.
  - `MsTabs`: `aria-controls` only points to registered panels (after mount, SSR-stable).
  - `MsCodeBlock`: focusable scrollable body (`role="region"`, labeled with the file name or "Code"); syntax colors use text tokens with AA contrast. `MsTable`: a scrolling container (horizontal, or vertical with `stickyHeader` and a fixed height) becomes a focusable region labeled by the caption.
  - `MsSelect`: chip-remove and clear buttons with a 24px target size (WCAG 2.5.8).
  - `MsAppShellSidebar`/`MsAppShellFooter`: classes renamed to `ms-app-shell__sidebar*` / `ms-app-shell__footer` (no longer collide with `MsSidebar`/`MsFooter`); `MsAppShell` works without `v-model` (uncontrolled).
  - `MsCol`: `span="auto"`/`"flex-1"` are now styled. `MsNavbar`: `data-tone` only with an explicit tone. `MsDockItem` and `MsCard interactive`: activation with Enter/Space. `MsSidebar`: the button label follows the effective state.
  - `MsBreadcrumbs`: separators inside the `<li>` (valid HTML); `MsBreadcrumbSeparator` honors `as`; `MsBreadcrumbItem` gains the `separator` slot.
  - `MsSidebarMenu`: submenus inside a `<ul>` (no hydration error), closed with `inert` instead of `aria-hidden`; labels are visually hidden (not `display: none`) in collapsed mode.
  - `MsIconPicker`: custom SVGs render after mount (no hydration mismatch). `MsGlimpse`: phrasing elements only (`span`), valid inside a `<p>`.

- 3f4bcb4: Accessibility and behavior (WAI-ARIA APG):

  - New internal primitives: `useScrollLock` (reference-counted), `useDismissableLayer` (a stack for Escape/outside click — only the top layer closes) and `useFocusTrap` (initial focus, Tab cycling, focus restoration). Applied to Dialog, Drawer, ConfirmDialog (initial focus on "Cancel"), Lightbox, CommandPalette, Popover, ContextMenu and Menu; removed every `@click.stop` that broke outside clicks.
  - `MsMenu`/`MsDropdownButton`: real focus on items (roving tabindex), arrows/Home/End/typeahead, ArrowDown/ArrowUp on the trigger, Escape returns focus, clicking the trigger closes the menu. New `dismiss` event.
  - `MsSelect`: keyboard works without `searchable` (including Home/End/Space); the search input has combobox semantics; option ids no longer collide; control through `open` is reliable.
  - `MsPopover`: opens when the parent only listens to `update:open`; the slot's `toggle` no longer toggles twice; ARIA on the real button.
  - `MsCommandPalette`: Ctrl/⌘+K focuses the search; navigation follows the grouped order and skips disabled items; combobox/listbox with `aria-activedescendant`; new `hotkey` prop.
  - `MsContextMenu`: Shift+F10/Menu key, arrow navigation, never opens outside the viewport.
  - Inputs (`MsInput`, `MsTextarea`, `MsNativeSelect`, `MsPasswordInput`, `MsMaskedInput`, `MsRange`, `MsSearchField`, `MsCheckbox`, `MsSwitch`): `inheritAttrs: false` — `aria-*`, `required`, `autocomplete` and listeners go to the native element; `class`/`style` stay on the root.
  - `MsField`: unique ids per control; `aria-describedby`/`aria-invalid`/`aria-labelledby` also on PasswordInput, MaskedInput, Range, SearchField, PinInput, ColorPicker, FileInput, RadioGroup and Switch.
  - `MsCheckbox`: `indeterminate` applied on mount. `MsCodeBlock`: highlighting no longer corrupts code with quotes.
  - `MsTree`: arrows/Home/End navigation with a single tab stop. `MsSplitPane`: focusable separator with keyboard and pointer events (touch/pen), RTL. `MsDropzone`: keyboard-accessible input, `accept`/`multiple` validation for dropped files and a new `files-rejected` event.

- 0c036a6: Accessibility of Tooltip, HoverCard, Collapse and Carousel:

  - `MsTooltip`: the bubble always stays in the DOM (hidden with `v-show`), and `aria-describedby` goes to the first focusable element of the slot, not to the wrapper.
  - `MsHoverCard`: drops `role="tooltip"` (the content is interactive) and closes with Escape.
  - `MsCollapse`: `aria-controls` on the header points to the content, and closed content uses `inert` instead of `aria-hidden`, so focusable children leave the tab order.
  - `MsCarousel`: a pause/play button for auto-rotation (WCAG 2.2.2); rotation pauses on focus, hover or `prefers-reduced-motion`; `aria-live` is "off" while rotating; indicators become buttons with `aria-current`; each slide gets an "N of total" label and `inert` when inactive.

- 3dc2963: - **landing & preview**: Created a high-level, production-grade official Landing Page at `/` (`apps/preview/index.html` + `landing.css` + `landing.js`) with an atmospheric OKLCH mesh backdrop, live Multi-Theme interactive sandbox, 1-click install command tabs, metrics bar, 10 themes showcase, 6 architectural pillars, quickstart guide, component directory, and seamless GitHub & Studio integration.
  - **docs**: Refined the Studio documentation navigation bar with direct link to the Landing Page ("Home 🏠") and updated component counters from 55 to 82 production-ready components.
  - **readme**: Completely overhauled the root `README.md` with official shields/badges, 10 themes normative catalog, 82 components directory, multi-package-manager quickstart, and monorepo governance runbook.
  - **package.json**: Enriched monorepo metadata with description, keywords, repository, homepage, bug tracker, and preview scripts.
- 4cf8a6f: Correct CSS and tokens:

  - Fixes 25 non-existent CSS variables (e.g. `--ms-color-interactive-focus`, `--ms-shadow-*`, `--ms-font-size-*`, `--ms-motion-duration-normal`), which restores the focus ring on link, code, code-block, password-input and truncate. A new test prevents regressions.
  - `base.css` no longer overrides the themes' brand colors, and the aliases (`--ms-color-primary`, `*-subtle`, `*-soft-*`, `status-*`) are now resolved per scope, so nested `MsThemeScope` works.
  - The `--ms-elevation-card/button/dropdown/modal/input` tokens are now emitted.
  - New tokens `--ms-color-feedback-{info,success,danger}-solid-fg` and aliases `--ms-color-{info,warning}-contrast`. The solid states of badge, alert, button and tag, and the Nord, Supabase and Bootstrap themes, reach WCAG AA, validated by a contrast test across every theme and mode.
  - All CSS ships in cascade layers (`ms.*`), with `color-scheme` per mode and CSS support for `data-ms-color-mode="system"`.

- 3dc2963: - **themes/tokens**: Rework dark mode color palette from crushed pitch-black to refined modern dark slate/obsidian (Linear/Vercel/GitHub inspired) with distinct 3-layer surface elevations (sunken, default, raised), luminous borders, and WCAG AAA/AA text contrast.
  - **themes**: Introduce comprehensive semantic aliases and compatibility fallbacks for shorthand CSS custom properties (--ms-color-surface, --ms-color-text, --ms-color-border, --ms-color-primary, etc.).
  - **css**: Update accordion, confirm-dialog, context-menu, drawer, color-picker, popover, toast, list, file-input, chat-bubble, stepper, timeline, and range component styles to use canonical semantic tokens.
  - **preview**: Enhance Preview Studio topbar, canvas preview dot-grid background, and variation galleries to adapt seamlessly across Light and Dark color modes.
- d5f253a: `MsDatePicker` follows the APG date picker pattern:

  - The calendar is a labeled `role="dialog"`, and the input announces `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`.
  - Days form a `role="grid"` with one row per week and a roving tabindex. Each day has a full label ("January 31, 2026"), `aria-selected`, and `aria-current="date"` for today.
  - Keyboard: arrows move by day or week (in RTL, left and right are swapped); Home/End go to the start and end of the week; PageUp/PageDown change the month, and with Shift the year. The visible month follows focus.
  - Closes with Escape (focus returns to the input), with an outside click or when focus leaves the component. Previously, outside clicks did not close it.
  - Dates outside `minDate`/`maxDate` use `aria-disabled`: they stay navigable but not selectable. The focused day gets a visible focus ring.

- 0dfd3f2: Working density dial: `data-ms-density` (compact 0.875 · comfortable 1 · spacious 1.125) scales the height of every control through `--ms-control-height-*` (rounded to whole pixels). Default heights don't change. `data-ms-density` and `data-ms-radius` now work on any element, not only next to `data-ms-theme`. The Date/Emoji/Icon pickers and MaskedInput use the height tokens instead of fixed values.
- 6a67791: Documentation and DX:

  - `.d.ts` types now resolve with `moduleResolution` `bundler`, `node16` and `nodenext` (previously components became `any` under node16/nodenext); post-build check (`check-dts`).
  - Exports ~45 missing public types and building blocks for your own components: `useFieldControl`, `useFieldContext`, `FIELD_CONTEXT_KEY`, `THEME_CONTEXT_KEY`, `useFocusTrap`, `useDismissableLayer`, `useScrollLock`, `safeHref`, `safeRel`, `sanitizeSvg`, `msPasswordDefaultCriteria`.
  - `@magic-style/css` declared as an optional peer of `@magic-style/vue`; a README in each published package.
  - Counts corrected (95 components, 285 tokens) and verified by a script in the health gate; `engines.node` accepts Node ≥24.

- 9adbfbd: DTCG-compatible tokens (baseline doc 06 §1):

  - No more types outside the specification. Easing uses `cubicBezier` (an array of 4 numbers); typography roles use the `typography` composite with the official keys; letter-spacing in `em` is a `number` with the unit in `$extensions`, since `dimension` only accepts px/rem. `font-feature-settings`, which has no DTCG type, now lives in `base.css`. The generated CSS for easing, letter-spacing and features is identical to before.
  - Font sizes in `rem` (equal to 16px at the default root size), so they follow the font size chosen by the user.
  - 33 OKLCH primitives that were outside the sRGB gamut had their chroma reduced until they fit, keeping lightness and hue. The color is now the same on every screen; previously the browser clipped channel by channel on sRGB screens. Themes don't change, since they use the contract.
  - The description of `neutral.700` quoted a hex that didn't match the value.
  - The resolver reports unknown `$type`s, and new tests cover types, gamut and the hex values in descriptions.

- aa52212: Elevate visual aesthetics to FlyonUI & Shadcn UI benchmarks, expand component variations gallery across the design system, and standardize Studio code examples:

  - **CSS & Design System Modernization:**
    - `alert.css`: Fixed soft alert background & text color inversion; added FlyonUI-style 4px saturated left-accent strip (`[data-accent="left"]` / `.ms-alert--accent-left`).
    - `badge.css`: Added ghost variant (`data-variant="ghost"`), live pulsing dot indicator (`[data-pulse]` with keyframe pulse animation), and removable tag dismiss button (`.ms-badge__remove`).
    - `card.css`: Added glassmorphism variant (`data-variant="glass"` with 16px backdrop blur), enterprise SaaS KPI metric cards (`.ms-card-stat`), and cover image badge positioning (`.ms-card-cover-badge`).
    - `input.css`: Added soft tinted surface variant (`data-variant="soft"`), ghost variant (`data-variant="ghost"`), input prefix/suffix addons (`.ms-input-addon`), and attached action input groups (`.ms-input-group`).
    - `tabs.css`: Added Shadcn-style boxed segmented track (`.ms-tab-list--boxed`) with floating active pill and micro-shadow.
    - `avatar.css`: Extended brand tone coverage to all 8 semantic tones.
    - `chat-bubble.css`: Added all 8 brand semantic tones for soft and solid variants; fixed soft bubble color inversion; added live 3-dot typing indicator balloon (`.ms-chat-bubble--typing`).
    - `empty-state.css`: Added 8-tone icon palettes and subtle outer ring gap signature (`.ms-empty-state__icon--ring`).
    - `skeleton.css`: Added dark mode contrast adaptation (`:root[data-ms-color-mode="dark"]`) with subtle Linear/Vercel opacity shimmer eliminating stark white blocks.
    - `timeline.css`: Added `.ms-timeline-item--solid` node fill and `.ms-timeline-item--active` live pulsing ping ring.
    - `accordion.css`: Added active border highlight and micro-shadow for separated accordion items.
    - `rating.css` & `MsRating`: Added `tone` prop support in Vue and 8 semantic tone classes with soft drop-shadow in CSS.
    - `stepper.css`: Added active subtle ring (`box-shadow`), completed checks, and interactive hover feedback.
    - `list.css` & `MsList`: Added `separated` card variant (`variant="separated"`) and fixed leading/trailing slot rendering.
  - **Studio Variations Overhaul:**
    - Expanded enterprise variations across 15+ component categories: `empty-states` (5), `accordions` (5), `skeletons` (5), `timeline` (5), `chat-bubbles` (5), `ratings` (5), `steppers` (5), `lists` (5), `separators` (5), `file-inputs` (5), `drawers` (4), `color-pickers` (4), `tooltips` (3), `inputs` (10), `cards` (8), `tabs` (7), `alerts` (7), `badges` (6), `avatars` (6), `tables` (4).
    - Replaced all raw `<pre><code>` blocks across `studio-variations.js` with `<MsCodeBlock>` (featuring syntax highlighting, copy button, and theme tokens).

- e1da8a9: Field borders with 3:1 contrast (WCAG 1.4.11). The new derived tokens `--ms-color-border-field` and `--ms-color-border-field-hover` (50% and 30% of `base-300` over `base-content`) are now used in input, native-select, select, date-picker, masked-input, search-field, password-input, pin-input, color-picker, checkbox and radio.

  - Measured in the browser across 10 themes × 2 modes: field borders below 3:1 dropped from 170/200 to 0/200. The worst case went from 1.01:1 (in shadcn dark, the border was invisible) to 3.76:1.
  - The generator's contrast test now requires 3:1 for these borders on the default, raised and sunken surfaces.
  - For a softer look, override the two variables (example in `docs/theming.md`).

- 3dc2963: - **vue**: Fix reactivity in `MsRadioGroup` context so controlled state updates properly.
  - **vue**: Fix `MsMenu` active index alignment to always point to valid enabled items.
  - **vue**: Fix `MsField` error check to prevent empty string errors from rendering invalid state.
  - **css**: Add dedicated `textarea.css` component layer and package export.
  - **css**: Add `:focus:not(:focus-visible)` across base and button layers for cleaner pointer interaction.
- 3dc2963: - **css**: Fix dark mode color contrast across all 26 enterprise components (password-input, masked-input, pin-input, pagination, code, code-block, collapse, blockquote, icon-picker, emoji-picker, date-picker, canvas, form-wizard, dropzone, split-pane, grid, command-palette, toggle-group, fab) by migrating from non-existent surface-base / surface-elevated tokens to canonical semantic tokens (--ms-color-surface-raised, --ms-color-surface-sunken, --ms-color-surface-default, --ms-color-text-primary, and --ms-color-text-inverse).
  - **vue**: Add zero-dependency, high-performance syntax highlighting in MsCodeBlock for TypeScript, JavaScript, HTML, Vue, CSS, JSON, and Bash, tokenizing keywords, strings, comments, numbers, tags, attributes, and functions.
  - **css**: Add .ms-code-token--* syntax token styles mapped to brand design tokens with WCAG 2.2 AAA contrast in both light and dark mode.
  - **apps/preview**: Restructure Batch 9-14 templates to standard .canvas-preview, .controls-card, .prop-row, .prop-label, .prop-select, .prop-input, and .prop-checkbox controls with minmax(0, 1fr) bounding, eliminating horizontal scroll blowouts and overlapping options in MsLink, MsCode, and all other new components.
- 3dc2963: - **vue**: Add `@wheel` and `@touchmove` passive listeners alongside `@scroll` in `MsScrollbar` to immediately activate the `.is-scrolling` visibility state on mouse wheel and touch gestures, resetting smoothly after 1000ms of inactivity.
  - **css**: Remove container `:hover` lock from `visibility="auto"` scrollbars so the thumb only appears during active scroll/wheel interaction and properly disappears when the user stops, even if the cursor remains over the element. Direct hover on the thumb (`::-webkit-scrollbar-thumb:hover`) remains available for manual dragging.
  - **css**: Isolate standard `scrollbar-width` and `scrollbar-color` to non-WebKit browsers (Firefox) to prevent Chromium from disabling custom WebKit scrollbars, completely removing native Windows arrow buttons by default.
- e6258a7: The Graphite theme gets its own identity in light and dark modes. Previously it was Magic with a different `accent`.

  - Low-saturation graphite neutrals (in dark mode, graphite-gray surfaces instead of navy), a steel-blue primary and a subtle petrol secondary; the soft indigo `accent` is kept.
  - More compact radii (3/5/6px) and `depth` 0.6, for dense interfaces.
  - Every contract pair passes WCAG AA; the tightest is `danger`, at 5.57:1. In the components, 47 text pairs improved, with no regressions.

- 74695e7: A theme scope without its own color mode now follows the nearest ancestor's mode in any theme. Before, `<MsProvider theme="nord" color-mode="inherit">` inside a dark page rendered Nord's light palette.

  - `themes.css` adds `@scope ([data-ms-color-mode="light" | "dark" | "system"])` rules for `[data-ms-theme]:not([data-ms-color-mode])`. Scope proximity makes the closest ancestor win when providers are nested, and `system` follows `prefers-color-scheme`. User themes built with `msThemeToCss` get the same rules.
  - `MsProvider` with `colorMode="inherit"` always renders `data-ms-theme`; it no longer omits it when the theme matches the inherited one.

- ed3cc4a: `muted` text with AA contrast (4.5:1) on every surface:

  - The themes' contrast contract now requires 4.5:1 for `--ms-color-text-muted` on `surface-default`, `surface-raised` and `surface-sunken`; previously it required 3:1 on `surface-default` only. `checkMsThemeContrast` applies the same rule to custom themes.
  - **Nord:** light `base-content` becomes `#242933` and dark `base-raised` becomes `#353c4a`. Muted text ranged from 4.20 to 4.44:1 in light mode and sat at 4.33:1 on cards in dark mode.

- 2fe9d9b: Decorative and entrance animations honor reduced motion: accordion, badge (ping/pulse), button ripple, confirm-dialog, context-menu, glimpse, hover-card, popover, status (ping) and the progress stripes. Previously, these components' fixed durations ignored `prefers-reduced-motion` and `data-ms-motion="reduced"`; they now multiply the duration by `--ms-motion-scale`. Loading indicators (spinner, progress-radial, indeterminate progress and the select spinner) keep animating, since that motion is essential. A test prevents new fixed durations outside this list.
- 2970f2a: Removes the 20 `!important` declarations from `sidebar`, `grid` (bento) and `scrollbar`. Inside `@layer`, a library `!important` beats even the consumer's `!important`, so these rules could not be overridden.

  - `scrollbar`: states swap an internal variable (`--_ms-scrollbar-thumb-current`), and hover, `always` and `none` now work through specificity alone. Fixes the `arrows` buttons, which never showed because `height: 0 !important` beat the size set for them.
  - Collapsed `sidebar` and responsive bento: resolved through specificity and order.
  - Only the `prefers-reduced-motion` ones in `glimpse` remain, and they are intentional. A new test prevents new `!important` in components.

- 3dc2963: Transform preview studio into official library documentation portal:

  - Restructured navigation sidebar with Primeiros Passos (Overview, Installation, Theming Guide) and canonical documentation categories across all 55 components.
  - Added quick-import code card with one-click copy to component documentation headers.
  - Repositioned theme customization floating cog button strictly to the right below the navbar as an icon-only floating action button (FAB).
  - Added official geometric SVG crystal logo and typography mark for the topbar.
  - Fixed version tag contrast in light and dark modes with high-contrast sunken surface and active status indicator.
  - Updated all component documentation screens to use official standard MsTabs, MsTabList, and MsTab components.

- fb1615e: Real RTL: 134 physical declarations (`margin-left`, `padding-right`, `border-left`, `left`/`right`, `text-align: left`, corner radii) and 4 asymmetric `padding` shorthands became logical properties across 43 stylesheets. Nothing changes in LTR: the computed-style diff against the previous version was zero across 68k elements of the preview pages.

  - Intentionally still physical: placements named after a side (`placement="left"`, `top-right` corners, `data-align="right"`), panels positioned from JS (`MsSelect`), tooltip, glimpse, FAB, pointer and `code-block`. The latter now forces `direction: ltr`, because code reads left to right.
  - `MsCarousel` and `MsMarquee` reverse their motion under `:dir(rtl)`, and the carousel arrows sit on the logical edges. The marquee with `pause-hover` also pauses on focus (WCAG 2.2.2).
  - `th` inside `.ms-table` inherits the table's alignment: the browser would center the header when the parent uses `start`.
  - A new test prevents physical properties from coming back outside the documented exceptions.

- 943a6ea: Security and publishing:

  - `MsIconPicker`: allowlist SVG sanitizer (blocks `javascript:` without quotes or with entities, `foreignObject`, `animate`/`set`, `use`, `style`, `url()` and `id`).
  - `MsLink`, `MsBreadcrumbs`, `MsSidebarMenu`, `MsFooter`, `MsGlimpse`: `href` goes through `safeHref` (blocks `javascript:`/`data:`/`vbscript:`); `target="_blank"` always keeps `noopener noreferrer`, even with a custom `rel`.
  - `@magic-style/css`: private internal packages moved to `devDependencies` (installing from npm failed); exports for `kbd.css`, `aspect-ratio.css`, `hover-card.css` and `./package.json`; the build cleans `dist/`.
  - MIT license in both packages, with repository metadata and provenance.

- 639ee52: SSR and quality:

  - `MsProvider`/`MsThemeScope` with `color-mode="system"` render `data-ms-color-mode="system"` (resolved in CSS): the same markup on server and client, with no flash and no hydration mismatch. `useSystemColorMode` reads `matchMedia` only after mount and removes its listener; `MsProvider target="root"` restores the `<html>` attributes on unmount. Component rules specific to dark mode and high contrast also apply to `system`.
  - Toasts: a per-app store through `app.use(createMsToast())` (doesn't leak between SSR requests); `MsToastContainer` announces through persistent live regions (errors in an assertive region); the timer pauses on focus.
  - `MsDatePicker`: `YYYY-MM-DD`/`YYYY-MM-DD HH:mm` dates parsed in the local time zone (previously it opened on the previous month in UTC-3 and failed in Safari); 12-hour mode with AM/PM; "today" resolved on the client only.
  - `MsSelect`: the combobox gets its accessible name from `MsField` (`aria-labelledby`) and the consumer's attributes (`aria-label`, `id`).
  - New tests: SSR of every component, hydration, axe-core audit. ESLint now checks `.vue` files (`eslint-plugin-vue`, `vue/no-v-html`), Stylelint with correctness rules in the health gate, and the Turbo cache is invalidated by shared configs.

- 3dc2963: - **studio**: Modernize component header with MsSnippet and code tab with MsCodeBlock.
  - **studio**: Fix dark mode contrast for .api-type-tag in API specifications table.
  - **studio**: Custom styled .prop-select with tokenized borders and SVG chevron.
  - **vue/css**: Enable line numbers by default (`showLineNumbers: true`) in MsCodeBlock, fix newline handling, and ensure sticky aligned line gutter.
  - **studio**: Remove nested card wrapper around MsCodeBlock in showcase and documentation views.
  - **vue/css**: Add range, time, and datetime modes with minuteStep and clearable to MsDatePicker.
  - **vue/css**: Expand geometric patterns in MsCanvas (isometric, diagonal-stripes, honeycomb, waves, checkerboard, plus, blueprint).
  - **vue**: Render true vector SVG icons in MsIconPicker and expand default icon set.
  - **vue**: Expand MsEmojiPicker catalog to 200+ emojis across 7 categories.
  - **vue/css**: Add gap, dense, interactive, and variant options to MsBentoGrid and MsMasonryGrid.
  - **vue/css**: Add glassmorphic close button and high-contrast SVG chevrons to MsLightbox.
- beb64fe: Tone engine in `icon-button`, `chat-bubble`, `code` and `empty-state`, the last components with hand-written per-tone colors:

  - Tones that the types accepted but had no CSS now work: `secondary`, `accent`, `info` and `warning` in `MsIconButton` (the type now accepts all 8 tones), and `info`, `success`, `warning` and `danger` in `MsChatBubble`. The icon-button `outline` and `ghost` accept any tone, not only `primary`.
  - Text uses `--ms-tone-text` and `solid` uses `--ms-tone-content`. Pairs below WCAG AA in these 4 components: from 164 to 1, across 10 themes × 2 modes, with no regressions. The only one left is the `ghost` `neutral` icon-button, which uses the default muted text.
  - `empty-state` no longer uses the Magic theme's hardcoded `rgba()`, and `code` goes from 18 hand-written rules to 3.

- d43584b: Tone engine: `[data-tone]` (or the tone class) sets `--ms-tone`/`--ms-tone-content`, and the states (`--ms-tone-hover`, `-active`, `-subtle`, `-border`, `-text`) are derived once, with the same formulas as the theme tokens.

  - 20 components migrated (button, badge, alert, avatar, select, input, navbar, scrollbar, sidebar-menu, card, tag, toast, status, choicebox, timeline, range, progress-radial, banner, confirm-dialog, progress): blocks of 5–9 variables per tone become single mappings. This removes arbitrary inconsistencies between tones, such as 20% or 25% borders and text that was sometimes raw, sometimes safe.
  - Text always uses `--ms-tone-text`: 370 text/background pairs that were below WCAG AA now pass (measured across 10 themes × 2 modes). The `select` focus ring no longer uses the Magic theme's hardcoded blue.
  - Fixes `--ms-color-interactive-*-subtle`/`-text`, which lacked the documented chroma restoration.
