---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Security and publishing:

- `MsIconPicker`: allowlist SVG sanitizer (blocks `javascript:` without quotes or with entities, `foreignObject`, `animate`/`set`, `use`, `style`, `url()` and `id`).
- `MsLink`, `MsBreadcrumbs`, `MsSidebarMenu`, `MsFooter`, `MsGlimpse`: `href` goes through `safeHref` (blocks `javascript:`/`data:`/`vbscript:`); `target="_blank"` always keeps `noopener noreferrer`, even with a custom `rel`.
- `@magic-style/css`: private internal packages moved to `devDependencies` (installing from npm failed); exports for `kbd.css`, `aspect-ratio.css`, `hover-card.css` and `./package.json`; the build cleans `dist/`.
- MIT license in both packages, with repository metadata and provenance.
