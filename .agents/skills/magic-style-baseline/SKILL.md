---
name: magic-style-baseline
description: Essential guide for working on Magic-Style according to Architecture Baseline 1.2. Activates context packs, maps tasks to canonical architecture documents (01-28), enforces context minimization, and provides the normative 9-step workflow.
---

# Magic-Style Baseline 1.2 — Development Skill

Esta skill orienta o desenvolvimento no ecossistema **Magic-Style** garantindo aderência irrestrita à **Architecture Baseline 1.2** consolidada em `docs/baseline/Magic-Style-Architecture-Baseline-1.2/`.

---

## 1. Fluxo Normativo de 9 Passos (Doc 14 §2)

Toda tarefa complexa ou estrutural deve seguir rigorosamente:

```
Request → Context → Spec → Plan → Implementation → Validation → Review → Docs → Done
```

1. **Request:** Compreensão da intenção e escopo exato do usuário.
2. **Context:** Carregamento seletivo apenas dos documentos necessários (Context Minimization).
3. **Spec:** Verificação ou elaboração de especificação técnica (seguindo Doc 19 para componentes).
4. **Plan:** Criação ou atualização do plano de implementação antes de tocar no código.
5. **Implementation:** Codificação alinhada a tokens, convenções de camadas e tipagem estrita.
6. **Validation:** Execução dos health gates (`pnpm.cmd validate`).
7. **Review:** Verificação de acessibilidade (WCAG 2.2 AA), responsividade e fidelidade visual.
8. **Docs:** Atualização de documentação, examples e preview fixtures.
9. **Done:** Relatório objetivo de conclusão detalhando o que foi implementado e validado.

---

## 2. Context Packs (Minimização de Contexto)

Não carregue todos os documentos da baseline em uma única sessão. Use a tabela abaixo para consultar apenas os arquivos relevantes:

| Domínio da Tarefa                  | Documentos Canônicos a Consultar                                                                                                              |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Componentes de UI (Vue + CSS)**  | `04-Component-Architecture.md`<br>`08-Vue-API-Guidelines.md`<br>`09-CSS-Tailwind-Architecture.md`<br>`19-Component-Specification-Template.md` |
| **Design Tokens & Escalas**        | `06-Design-Tokens.md`<br>`manifest.json`                                                                                                      |
| **Temas, Cores & Variáveis**       | `07-Theming-System.md`<br>`06-Design-Tokens.md`                                                                                               |
| **Formulários & Família MsSelect** | `04-Component-Architecture.md` (§6)<br>`08-Vue-API-Guidelines.md`<br>`27-Architecture-Decisions-and-Final-Contracts.md` (§6)                  |
| **Application Layout System**      | `03-Design-System-Specification.md`<br>`04-Component-Architecture.md`<br>`27-Architecture-Decisions-and-Final-Contracts.md` (§4)              |
| **Acessibilidade (A11y)**          | `11-Accessibility-Specification.md` (WCAG 2.2 AA)                                                                                             |
| **Testes & Estratégia de QA**      | `12-Testing-Strategy.md`<br>`25-Repository-Bootstrap-Specification.md`                                                                        |
| **Subsistemas Standalone**         | `18-Package-Contracts.md` (§3)<br>`27-Architecture-Decisions-and-Final-Contracts.md` (§8)                                                     |
| **CLI, Schemas & Registry**        | `10-CLI-Registry-Specification.md`<br>`20-Registry-and-Metadata-Schemas.md`<br>`21-CLI-and-Registry-Implementation-Design.md`                 |
| **Roadmap, Milestones & Release**  | `17-Roadmap.md`<br>`22-CI-CD-Release-Architecture.md`<br>`24-Development-Execution-Plan.md`                                                   |

---

## 3. Contratos Inegociáveis da Baseline 1.2

- **Convenção de Nomenclatura:**
  - Pacotes npm: `@magic-style/<package>` e `@magic-style-internal/<package>`
  - Componentes Vue: Prefixo `Ms` (ex: `MsButton`, `MsField`, `MsSelect`)
  - Classes CSS: Prefixo `ms-` (ex: `.ms-btn`, `.ms-input`, `.ms-field`)
  - CSS Custom Properties: `--ms-*` (ex: `--ms-color-primary`, `--ms-space-4`)
  - Data Attributes: `data-ms-*` (ex: `data-ms-variant`, `data-ms-size`)
- **Qualidade Visual Premium:** O design não pode parecer improvisado ou cópia de outras bibliotecas. Toda cor, espaçamento, sombra e raio deve derivar do sistema de tokens.
- **Responsive by Design:** Componentes devem ser projetados para desktop, notebook, tablets e mobile narrow containers, usando container queries e adaptações de interação quando pertinente.
- **Engine MsSelect Unificada:** Não crie componentes paralelos desconectados para busca, seleção múltipla ou assíncrona; são capacidades do `MsSelect`. `MsNativeSelect` é o fallback nativo HTML.
- **Isolamento de Subsistemas:** `datatable`, `calendar`, `charts` e `notifications` são projetados como pacotes standalone independentes do core, embora compartilhem o mesmo design language e tokens.
- **No Fake Green:** Nunca declare testes ou gates que não foram efetivamente executados e verificados no terminal.
