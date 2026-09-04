# Magic-Style

**Design System e biblioteca de componentes para Vue — premium por padrão, aberto por natureza.**

Magic-Style é uma plataforma de UI para aplicações web: design system, biblioteca de componentes Vue, Open Code, Registry, CLI, Blocks e Templates. Permite construir interfaces premium rapidamente sem sacrificar acessibilidade, performance, responsividade ou customização.

> **Status:** Architecture Baseline 1.2 implementado até M6 (tokens, themes, CSS, Vue foundation, Button, Forms). Pré-alpha.

---

## Identidade

| Layer            | Convenção                                    |
| ---------------- | -------------------------------------------- |
| Componentes Vue  | `Ms*` (`MsButton`, `MsInput`, …)             |
| Classes CSS      | `ms-*` semânticas                            |
| Variáveis/tokens | `--ms-*`                                     |
| Metadata DOM     | `data-ms-*`                                  |
| CLI              | `magic-style`                                |
| npm              | `@magic-style/*` · Registry oficial `@magic` |

## Paleta de marca

`Accent #341f97` · `Neutral #222f3e` · `Primary #2e86de` · `Secondary #e15f41` · `Success #10ac84` · `Info #0abde3` · `Warning #ff9f43` · `Danger #ee5253`

Todas as cores vivem como rampas OKLCH 50–950 com variantes sutis e derivadas (bg/text/border/solid). Regra de tons: fills claros pareiam com texto ink; escuros com branco — WCAG 2.2 AA em light e dark.

## Estrutura

```
apps/preview/              Páginas de teste por família (buttons/forms) + toggle light/dark
packages/internal/tokens   Fontes canônicas DTCG + compilador (CSS/JSON/TS)
packages/internal/themes   Magic/Graphite × light/dark + density/radius/contrast dials
packages/css               @magic-style/css — layers: tokens → themes → base → components → utilities
packages/vue               @magic-style/vue — componentes acessíveis e responsive
docs/baseline/             Architecture Baseline 1.2 (normativo, docs 01–28 + imagens de referência)
scripts/                   Architecture checker (edges proibidos, doc 18 §5)
```

## Componentes

| Família    | Peças                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Button** | `MsButton` (8 tones × 6 variantes, `pill`/`squared`, circular icon-only, prefixo/sufixo, caret, loading), `MsButtonGroup`, `MsDropdownButton`, `MsMenu` |
| **Forms**  | `MsField`, `MsInput` (addons, floating label, tones, processing, pill, kbd), `MsTextarea`, `MsCheckbox`, `MsRadioGroup`/`MsRadio`, `MsSwitch`           |

## Começando

```bash
pnpm install            # frozen lockfile, Node ≥24
pnpm validate           # health gate: format/lint/architecture/type/unit/build
pnpm dev:preview        # node apps/preview/serve.mjs → http://localhost:4173
```

Test pages: `/` (overview) · `/buttons.html` · `/forms.html` — com toggle light/dark persistente.

## Governança

- **Autoridade:** Security → ADR/Baseline → Package Contract → Family Spec → Component Spec → Types → Implementation → Docs
- Decisão global nova exige RFC/ADR (sem improvisação local)
- Edges proibidos entre packages verificados por `pnpm architecture`
- Vue/CSS/Tailwind versionam coordenados (changesets `fixed`)
- No fake green: só declare gates que executou

## Documentação normativa

Leia `docs/baseline/Magic-Style-Architecture-Baseline-1.2/28-Final-Architecture-Index-and-AI-Handoff.md` primeiro — ela indexa os 28 documentos por domínio (produto, arquitetura, plataforma, qualidade, planejamento).
