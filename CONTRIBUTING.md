# CONTRIBUTING

Baseado em `23-Contribution-and-Governance.md` do Architecture Baseline 1.2.

## Fluxo de trabalho

Request → Context → Spec → Plan → Implementation → Validation → Review → Docs → Done (doc 14 §2).

## Checklist de PR

1. Branch a partir de `main`; commits convencionais.
2. Changeset adicionado para qualquer mudança em package público.
3. Health gate local verde: `pnpm validate` (format/lint/type/unit/architecture/build).
4. Frozen install respeitado — nunca commite alterações manuais no `pnpm-lock.yaml`.
5. Clean tree: validação não pode reescrever source canônico.
6. Componentes novos exigem component spec (doc 19) e cobertura responsive/a11y antes de merge.

## Human gates (doc 24 §6)

Button, Dialog, Select, AppShell responsive, DataTable visual/performance, Beta freeze e stable release exigem aprovação humana explícita.

## Qualidade sobre quantidade

Não escalar superfície antes de generator/validator/family specs maduros (doc 17 §9).
