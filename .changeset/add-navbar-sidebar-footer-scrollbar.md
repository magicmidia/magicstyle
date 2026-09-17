---
"@magic-style/vue": minor
"@magic-style/css": minor
---

- **vue**: Add and enhance `MsNavbar` responsive header component with brand tones, positions (static, sticky, fixed, fixed-bottom, floating), shadow levels (none, sm, md, lg, xl), responsive container modes (sm, md, lg, xl, fluid), variants (elevated, bordered, glass), sizes (sm, md, lg), and semantic slots (#brand, #default, #actions, #mobile-toggle, #mobile-menu).
- **vue**: Add `MsSidebar` collapsible layout panel with mini rail mode (68px), sides (left, right), width scales (compact, normal, wide), tones, variants, and header/body/footer slots, integrating seamlessly both standalone and inside `MsAppShell`.
- **vue**: Add and enhance `MsFooter` semantic footer component supporting multi-column grid, compact, simple, and centered layouts, shadow levels (sm, md, lg), positions (static, sticky, fixed), responsive container modes (sm, md, lg, xl, fluid), with sunken and inverse surface variants.
- **vue**: Add and enhance `MsScrollbar` high-performance custom scroll container supporting auto-hide visibility (thumb hides when idle and smoothly reveals on scroll and hover), optional navigation arrows (hidden by default, toggled via `arrows`), custom track background color (`trackColor`), custom thumb color (`thumbColor`), and custom corner radius (`thumbRadius`/`radius`).
- **css**: Add and enhance `navbar.css`, `sidebar.css`, `footer.css`, and `scrollbar.css` with zero `!important`, full design token variables (`--ms-scrollbar-*`, `--ms-navbar-*`, `--ms-footer-*`), auto-hide transitions, and individual CSS bundles.
- **preview**: Modernize top navbar and sidebar, remove cluttered toolbar selects, add floating Cog button (⚙️) on top left below navbar opening right-sliding offcanvas drawer with all system customization options (Theme, Contrast, Density, Radius Dial, Viewport, RTL, Dark mode).
