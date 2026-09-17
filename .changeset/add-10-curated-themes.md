---
"@magic-style/vue": minor
"@magic-style/css": minor
---

- **themes & css**: Added 8 new curated design system themes (`shadcn`, `bootstrap`, `material`, `github`, `linear`, `vercel`, `supabase`, `nord`) alongside `magic` and `graphite`, reaching a total of 10 distinct, production-grade themes with authentic visual identities beyond simple color swaps.
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
