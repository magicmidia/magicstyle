# SECURITY

Resumo operacional de `15-Security-Architecture.md` e `22-CI-CD-Release-Architecture.md` (Baseline 1.2).

## Reportar vulnerabilidade

Abra uma advisory privada via GitHub Security Advisories deste repositório. Não abra issue pública.

## Supply-chain

- Dependências pinneadas; installs com frozen lockfile
- GitHub Actions com SHAs pinneados e least permissions
- Publicação npm via OIDC/Trusted Publishing com provenance quando disponível
- Registry: integrity SHA-256 desde Preview; Official signing até v1; **no remote execution**

## Privilege gates

- Agents/automations não publicam releases stable nem enfraquecem security policy sozinhos (doc 14 §11)
- Canais: canary/next/latest; rollback por repoint de channel, nunca rewrite de artifact (doc 22 §10)
