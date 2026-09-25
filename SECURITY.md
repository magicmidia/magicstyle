# Security

Operational summary of `15-Security-Architecture.md` and `22-CI-CD-Release-Architecture.md` (Architecture Baseline 1.2).

## Reporting a vulnerability

Open a private advisory through this repository's GitHub Security Advisories. Do not open a public issue.

## Supply chain

- Installs use a frozen lockfile (`pnpm-lock.yaml`); manifests use `^` ranges, updated by Dependabot.
- GitHub Actions are pinned by commit SHA, with minimal `permissions` per workflow and job.
- The release workflow runs the full health gate (`pnpm validate`) before publishing, in the protected `npm` environment.
- npm packages are published with provenance (`id-token: write`); `NPM_TOKEN` is only used for the bootstrap until Trusted Publishing (OIDC) is enabled for both packages.
- Published packages do not depend at runtime on private packages (`scripts/check-architecture.mjs`).
- Registry: SHA-256 integrity from Preview; official signing by v1; **no remote execution**.

## Documentation site

`apps/docs` is a static site (VitePress). `pnpm docs:dev` and `pnpm docs:preview` listen only on `localhost` by default; use `--host` only on trusted networks. The demos make no third-party requests, except the map embedded in the `MsAspectRatio` example.

## Untrusted content

- Custom SVG (`MsIconPicker`) goes through an allowlist sanitizer (`packages/vue/src/composables/sanitize-svg.ts`).
- Data-driven `href` values (Link, Breadcrumbs, SidebarMenu, Footer, Glimpse) go through `safeHref`; `target="_blank"` always gets `noopener noreferrer`.

## Privilege gates

- Agents and automations do not publish stable releases or weaken the security policy on their own (doc 14 §11).
- Channels: canary/next/latest; rollback by repointing a channel, never by rewriting an artifact (doc 22 §10).
