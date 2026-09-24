---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Segurança e publicação:

- `MsIconPicker`: sanitizer de SVG por allowlist (bloqueia `javascript:` sem aspas/com entidades, `foreignObject`, `animate`/`set`, `use`, `style`, `url()` e `id`).
- `MsLink`, `MsBreadcrumbs`, `MsSidebarMenu`, `MsFooter`, `MsGlimpse`: `href` passa por `safeHref` (bloqueia `javascript:`/`data:`/`vbscript:`); `target="_blank"` sempre mantém `noopener noreferrer`, mesmo com `rel` customizado.
- `@magic-style/css`: pacotes internos privados movidos para `devDependencies` (a instalação a partir do npm falhava); exports de `kbd.css`, `aspect-ratio.css`, `hover-card.css` e `./package.json`; build limpa `dist/`.
- Licença MIT nos dois pacotes, com metadados de repositório e provenance.
