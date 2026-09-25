# Magic-Style — Antigravity Workspace Rules (`GEMINI.md`)

Este arquivo define as diretrizes normativas para o assistente de IA (Antigravity) ao operar no repositório **Magic-Style**.

---

## 1. Baseline e Governança

- **Normativo:** Toda a arquitetura do projeto é regida pela **Architecture Baseline 1.2** em `docs/baseline/Magic-Style-Architecture-Baseline-1.2/`.
- **Decisões:** Nenhuma decisão global arquitetural deve ser improvisada localmente. Qualquer desvio requer RFC/ADR formal (Doc 27 e Doc 28).
- **Context Minimization:** Nunca carregue todos os 28 documentos da baseline em uma única tarefa. Use a skill `magic-style-baseline` para carregar apenas os context packs pertinentes ao domínio da tarefa.

---

## 2. Ambiente de Execução no Windows

- **Shell:** PowerShell no Windows.
- **Comandos pnpm:** Sempre use `pnpm.cmd` em comandos de terminal (ex: `pnpm.cmd validate`, `pnpm.cmd test`, `pnpm.cmd build`), pois a execução de scripts `.ps1` pode estar bloqueada pela Execution Policy do sistema operacional.
- **Node.js:** Versão estrita `>=24 <25` (Node 24 LTS).
- **Line Endings:** O repositório utiliza terminação de linha `LF` com Prettier rigoroso (`.prettierrc.json`). O arquivo `.gitattributes` assegura a normalização.

---

## 3. Contratos de Arquitetura e Monorepo

- **Topologia:**
  - `apps/` — Aplicações internas (ex: `apps/docs/`, o site VitePress com demos e validação visual).
  - `packages/` — Pacotes públicos (`vue`, `css`, futuros `tailwind`, `cli`, `schema`).
  - `packages/internal/` — Pacotes internos de fundação (`tokens`, `themes`, futuros `primitives`, `core`).
  - `scripts/` — Scripts de verificação de arquitetura (`scripts/check-architecture.mjs`).
  - `tooling/` & `tests/`.
- **Arestas Proibidas (Doc 18 §5):**
  - Pacotes de browser (`@magic-style/vue`, `@magic-style/css`) **não** podem importar tooling de Node.
  - Pacotes de fundação interna não dependem de pacotes públicos de nível superior.
  - Verificação obrigatória via `pnpm.cmd architecture`.
- **Contrato de Estilização CSS:**
  - Estilos de componentes residem em `@magic-style/css/src/components/*.css`.
  - Componentes Vue (`@magic-style/vue`) usam classes canônicas com prefixo `ms-*` e variáveis CSS `--ms-*`.
  - Não injete Tailwind utility strings arbitrárias ou estilos isolados sem tokens.
- **Subsistemas Standalone (Doc 18 §3 e Doc 27 §8):**
  - `datatable`, `calendar`, `charts` e `notifications` são projetados como pacotes standalone independentes do core, embora compartilhem os mesmos tokens, temas e linguagem visual.
- **Regra do MsSelect:**
  - `MsSelect` é a engine avançada unificada (single, multiple, searchable, async, creatable, grouped, virtualized). Não crie componentes paralelos desconectados como `MultiSelect` ou `AsyncSelect`. `MsNativeSelect` permanece a alternativa HTML-nativa.

---

## 4. Gates de Qualidade e Conclusão ("No Fake Green")

Antes de considerar qualquer tarefa de código concluída:

1. Execute `pnpm.cmd validate` (cobre Prettier, ESLint, verificação arquitetural, compilação de tokens/temas, build Turbo e testes Vitest).
2. Se houver modificações em pacotes públicos (`@magic-style/vue`, `@magic-style/css`), exija ou gere um changeset com `pnpm.cmd changeset`.
3. Relate explicitamente o que foi implementado, o que foi validado com comando executado e quaisquer limitações identificadas.
