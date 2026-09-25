# SECURITY

Resumo operacional de `15-Security-Architecture.md` e `22-CI-CD-Release-Architecture.md` (Baseline 1.2).

## Reportar vulnerabilidade

Abra uma advisory privada via GitHub Security Advisories deste repositório. Não abra issue pública.

## Supply-chain

- Installs com frozen lockfile (`pnpm-lock.yaml`); ranges `^` nos manifests, atualizados via Dependabot
- GitHub Actions pinneadas por SHA de commit; `permissions` mínimas por workflow/job
- Release roda o health gate completo (`pnpm validate`) antes de publicar, no environment protegido `npm`
- Publicação npm com provenance (`id-token: write`); `NPM_TOKEN` apenas para o bootstrap até habilitar Trusted Publishing (OIDC) nos dois pacotes
- Pacotes publicáveis não dependem em runtime de pacotes privados (`scripts/check-architecture.mjs`)
- Registry: integrity SHA-256 desde Preview; Official signing até v1; **no remote execution**

## Site de documentação

`apps/docs` é um site estático (VitePress). `pnpm docs:dev` e `pnpm docs:preview` escutam apenas em `localhost` por padrão; use `--host` só em redes confiáveis. As demos não fazem requisições a terceiros, exceto o mapa embutido no exemplo de `MsAspectRatio`.

## Conteúdo não confiável

- SVG customizado (`MsIconPicker`) passa por sanitizer allowlist (`packages/vue/src/composables/sanitize-svg.ts`)
- `href` de dados (Link, Breadcrumbs, SidebarMenu, Footer, Glimpse) passa por `safeHref`; `target="_blank"` sempre recebe `noopener noreferrer`

## Privilege gates

- Agents/automations não publicam releases stable nem enfraquecem security policy sozinhos (doc 14 §11)
- Canais: canary/next/latest; rollback por repoint de channel, nunca rewrite de artifact (doc 22 §10)
