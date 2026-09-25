---
name: magic-style-baseline
description: Essential guide for working on Magic-Style according to Architecture Baseline 1.2. Activates context packs, maps tasks to canonical architecture documents (01-28), enforces context minimization, and provides the normative 9-step workflow.
---

# Magic-Style Baseline 1.2 — Development Skill

This skill guides development in the **Magic-Style** ecosystem, ensuring full adherence to the **Architecture Baseline 1.2** consolidated in `docs/baseline/Magic-Style-Architecture-Baseline-1.2/`.

English is the project language. The baseline documents themselves are normative and written in Portuguese; quote them as they are, but write code, comments, docs and reports in English.

---

## 1. Normative 9-Step Flow (Doc 14 §2)

Every complex or structural task must follow:

```
Request → Context → Spec → Plan → Implementation → Validation → Review → Docs → Done
```

1. **Request:** understand the user's intent and the exact scope.
2. **Context:** selectively load only the documents you need (context minimization).
3. **Spec:** check or write the technical specification (Doc 19 for components).
4. **Plan:** create or update the implementation plan before touching code.
5. **Implementation:** code aligned with tokens, layer conventions and strict typing.
6. **Validation:** run the health gates (`pnpm.cmd validate`).
7. **Review:** check accessibility (WCAG 2.2 AA), responsiveness and visual fidelity.
8. **Docs:** update documentation, demos and API JSDoc on the docs site (`apps/docs`).
9. **Done:** an objective completion report stating what was implemented and validated.

---

## 2. Context Packs (Context Minimization)

Do not load every baseline document in a single session. Use the table below to consult only the relevant files:

| Task Domain                       | Canonical Documents to Consult                                                                                                                |
| :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI Components (Vue + CSS)**     | `04-Component-Architecture.md`<br>`08-Vue-API-Guidelines.md`<br>`09-CSS-Tailwind-Architecture.md`<br>`19-Component-Specification-Template.md` |
| **Design Tokens & Scales**        | `06-Design-Tokens.md`<br>`manifest.json`                                                                                                      |
| **Themes, Colors & Variables**    | `07-Theming-System.md`<br>`06-Design-Tokens.md`                                                                                               |
| **Forms & the MsSelect Family**   | `04-Component-Architecture.md` (§6)<br>`08-Vue-API-Guidelines.md`<br>`27-Architecture-Decisions-and-Final-Contracts.md` (§6)                  |
| **Application Layout System**     | `03-Design-System-Specification.md`<br>`04-Component-Architecture.md`<br>`27-Architecture-Decisions-and-Final-Contracts.md` (§4)              |
| **Accessibility (A11y)**          | `11-Accessibility-Specification.md` (WCAG 2.2 AA)                                                                                             |
| **Testing & QA Strategy**         | `12-Testing-Strategy.md`<br>`25-Repository-Bootstrap-Specification.md`                                                                        |
| **Standalone Subsystems**         | `18-Package-Contracts.md` (§3)<br>`27-Architecture-Decisions-and-Final-Contracts.md` (§8)                                                     |
| **CLI, Schemas & Registry**       | `10-CLI-Registry-Specification.md`<br>`20-Registry-and-Metadata-Schemas.md`<br>`21-CLI-and-Registry-Implementation-Design.md`                 |
| **Roadmap, Milestones & Release** | `17-Roadmap.md`<br>`22-CI-CD-Release-Architecture.md`<br>`24-Development-Execution-Plan.md`                                                   |

---

## 3. Non-Negotiable Baseline 1.2 Contracts

- **Naming conventions:**
  - npm packages: `@magic-style/<package>` and `@magic-style-internal/<package>`
  - Vue components: `Ms` prefix (e.g. `MsButton`, `MsField`, `MsSelect`)
  - CSS classes: `ms-` prefix (e.g. `.ms-button`, `.ms-input`, `.ms-field`)
  - CSS custom properties: `--ms-*` (e.g. `--ms-color-primary`, `--ms-space-4`)
  - Data attributes: `data-ms-*` for global dials (e.g. `data-ms-theme`, `data-ms-color-mode`, `data-ms-density`) and `data-*` for component variants and states (e.g. `data-variant`, `data-tone`, `data-size`)
- **Premium visual quality:** the design must not look improvised or copied from other libraries. Every color, spacing, shadow and radius must derive from the token system.
- **Responsive by design:** components must be designed for desktop, laptop, tablet and narrow mobile containers, using container queries and interaction adaptations where relevant.
- **Unified MsSelect engine:** do not create disconnected parallel components for search, multiple or async selection; those are `MsSelect` capabilities. `MsNativeSelect` is the native HTML fallback.
- **Subsystem isolation:** `datatable`, `calendar`, `charts` and `notifications` are designed as standalone packages independent of the core, while sharing the same design language and tokens.
- **No Fake Green:** never report tests or gates that were not actually run and verified in the terminal.
