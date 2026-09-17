---
name: magic-style-qa
description: Runbook for executing health gates, validating architecture boundaries, managing changesets, and enforcing the No Fake Green standard across the Magic-Style monorepo.
---

# Magic-Style QA & Validation Runbook

Este runbook orienta a validação rigorosa de qualidade em tarefas no monorepo **Magic-Style**, cobrindo o health gate automatizado, checagens arquiteturais e gestão de releases.

---

## 1. O Princípio "No Fake Green"

- **Regra:** Nunca assuma ou declare que um teste, build ou lint passou sem antes executar o comando no terminal e verificar a saída de saída (código 0).
- Em relatórios de conclusão de tarefa, liste claramente:
  - Comandos executados e status.
  - Testes que passaram (quantidade e suítes).
  - Limitações ou testes pendentes (se houver).

---

## 2. Health Gate Completo (`pnpm.cmd validate`)

O comando canônico de validação de saúde executa todas as verificações do repositório em cadeia:

```powershell
pnpm.cmd validate
```

O gate cobre sequencialmente:

1. **Prettier (`prettier --check .`)**: Validação de estilo e formato (LF).
2. **ESLint (`eslint .`)**: Análise estática de código TypeScript/Vue.
3. **Architecture Checker (`node scripts/check-architecture.mjs`)**:
   - Impede dependências circulares.
   - Garante que pacotes de browser não importem tooling de Node.
   - Valida que pacotes internos de fundação não dependam de pacotes superiores.
4. **Turbo Pipeline (`turbo run lint typecheck test build`)**:
   - `lint` em todos os pacotes.
   - `typecheck` com TypeScript estrito (`vue-tsc` e `tsc --noEmit`).
   - `test` executando todas as suítes Vitest.
   - `build` gerando tokens compilados, temas, CSS e bundles de distribuição.

---

## 3. Comandos de Validação Isolada

Caso precise diagnosticar falhas específicas durante o desenvolvimento:

| Alvo                  | Comando                                                     |
| :-------------------- | :---------------------------------------------------------- |
| **Arquitetura**       | `pnpm.cmd architecture`                                     |
| **Formatação**        | `pnpm.cmd format:check` (ou `pnpm.cmd format` para autofix) |
| **Lint**              | `pnpm.cmd lint`                                             |
| **Tipagem**           | `pnpm.cmd typecheck`                                        |
| **Testes**            | `pnpm.cmd test`                                             |
| **Build**             | `pnpm.cmd build`                                            |
| **Pacote Específico** | `pnpm.cmd --filter @magic-style/vue test`                   |

---

## 4. Gestão de Versões e Changesets

Toda alteração que afeta pacotes públicos (`@magic-style/vue`, `@magic-style/css`) exige um changeset:

```powershell
pnpm.cmd changeset
```

- Siga o assistente interativo selecionando os pacotes afetados e o nível de bump (`patch`, `minor`, `major`).
- Lembre-se: `@magic-style/vue`, `css` e futuro `tailwind` possuem versionamento coordenado (`fixed`).
