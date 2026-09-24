<div align="center">

# Magic-Style

**O Design System Definitivo para Vue 3 — Premium por Padrão, Aberto por Natureza.**

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?style=flat-square)](https://github.com/magicmidia/magicstyle)
[![Architecture Baseline](https://img.shields.io/badge/baseline-1.2%20normativa-purple.svg?style=flat-square)](docs/baseline/Magic-Style-Architecture-Baseline-1.2/)
[![Components](https://img.shields.io/badge/components-82%20prontos-emerald.svg?style=flat-square)](apps/preview/components.html)
[![Themes](https://img.shields.io/badge/themes-10%20autênticos-indigo.svg?style=flat-square)](#-10-temas-autênticos-além-da-cor)
[![Design Tokens](https://img.shields.io/badge/tokens-277%20DTCG-cyan.svg?style=flat-square)](packages/internal/tokens/)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%202.2%20AA-green.svg?style=flat-square)](docs/baseline/Magic-Style-Architecture-Baseline-1.2/11-Accessibility-Specification.md)
[![TypeScript](https://img.shields.io/badge/typescript-strict%205.9-blue.svg?style=flat-square)](tsconfig.base.json)
[![Node](https://img.shields.io/badge/node-%3E%3D24-brightgreen.svg?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](LICENSE)

<br />

[**Landing Page Oficial**](http://localhost:4173/) • [**Enterprise Component Studio**](http://localhost:4173/components.html) • [**Changelog & Releases**](CHANGELOG.md) • [**Guia de Theming & Dials**](http://localhost:4173/components.html#theming) • [**Architecture Baseline 1.2**](docs/baseline/Magic-Style-Architecture-Baseline-1.2/)

</div>

---

## 🌟 Visão Geral

**Magic-Style** é uma plataforma corporativa completa de UI para aplicações web modernas construída sobre **Vue 3** e **CSS Puro**, orientada pela **Architecture Baseline 1.2**.

Diferente de bibliotecas convencionais que limitam temas a simples substituições de código hexadecimal, o Magic-Style reproduz **a assinatura física, geométrica e espacial de cada ecossistema**: formatos de botão (pílula total, chanfros ou flat), escalas de raio, sombras de elevação ambiente e de tecla, halos de foco e tipografia canônica.

### Por que Magic-Style?

- 🧩 **82 Componentes Enterprise:** Do atômico (`MsButton`, `MsBadge`) a subsistemas complexos (`MsSelect` unificado, `MsAppShell`, `MsTable`, `MsSplitPane`, `MsFormWizard`, `MsCommandPalette`).
- 🎨 **10 Temas Autênticos Curados:** _Shadcn_, _Bootstrap 5_, _MaterialUI (M3)_, _GitHub Primer_, _Linear_, _Vercel Geist_, _Supabase Studio_, _Nord Arctic_, _Graphite_ e _Magic_.
- 📐 **277 Design Tokens DTCG:** Conforme a especificação W3C Design Tokens Community Group, calculados no modelo perceptual **OKLCH**.
- ♿ **Acessibilidade Inegociável:** Totalmente navegável por teclado, foco visível de alto contraste, semântica ARIA e suporte nativo bidirecional LTR / RTL (WCAG 2.2 AA).
- ⚡ **Zero Bloat de Runtime:** Camada visual pura em `@magic-style/css` que funciona com ou sem Vue; componentes Vue SFC com tipagem integral em TypeScript strict.
- 🛡️ **Governança Estrita ("No Fake Green"):** Verificação arquitetural automatizada de arestas proibidas, testes unitários rigorosos e versionamento coordenado via Changesets.

---

## 🎨 10 Temas Autênticos (Além da Cor)

| Tema           | ID (`data-ms-theme`) | Inspiração / Referência  | Assinatura de Formato & Raio                                | Elevação & Sombras                            | Halos de Foco & Bevels                                              |
| :------------- | :------------------- | :----------------------- | :---------------------------------------------------------- | :-------------------------------------------- | :------------------------------------------------------------------ |
| **MaterialUI** | `material`           | Material Design 3 (M3)   | **Pílula total 9999px** em botões e badges; 16px em cartões | Sombra dual-layer M3 (ambiente + chave)       | Roxo real `#6750a4` (light) / Lilás pastel `#d0bcff` (dark)         |
| **Bootstrap**  | `bootstrap`          | Bootstrap 5 Classic      | Raio clássico de **0.375rem (6px)**                         | Sombra difusa suave em cartões                | **Chanfro superior inset** nos botões; halo azul de 0.25rem         |
| **Shadcn**     | `shadcn`             | shadcn/ui (Radix + Zinc) | Raio sutil de **6px / 8px** com cantos nítidos              | **Flat radical** (elevação zero ou micro 1px) | Bordas zinc de 1px; botão sólido preto no claro e branco no escuro  |
| **Linear**     | `linear`             | Linear App Workspace     | Raio de **8px / 12px** moderno                              | Sombras profundas obsidian para SaaS          | **Realce especular superior** no botão; halo radiante violeta       |
| **GitHub**     | `github`             | GitHub Primer            | Raio de **6px** com borda Primer                            | Sombra sutil de 1px na base do botão          | **Chanfro superior clássico do Primer**; verde oficial `#238636`    |
| **Vercel**     | `vercel`             | Vercel Geist             | Geometria **razor-sharp (6px)**                             | **Zero sombras** (completamente plano)        | Alto contraste monocromático puro (`#000000`/`#ffffff`); anel duplo |
| **Supabase**   | `supabase`           | Supabase Studio          | Raio de **6px / 8px**                                       | Superfícies escuras de estúdio em carvão      | Destaques em **esmeralda neon `#3ecf8e`** e chanfros escuros        |
| **Nord**       | `nord`               | Nord Arctic Palette      | Contornos suaves de **8px a 10px**                          | Sombras frias ambientais polares              | Noite polar `#2e3440` e ciano glacial `#88c0d0`                     |
| **Graphite**   | `graphite`           | Editorial Minimalist     | Raio médio de **6px a 8px**                                 | Elevação neutra balanceada                    | Tons grafite e carvão monocromático suave                           |
| **Magic**      | `magic`              | Identidade Canônica      | Curvas suaves de **8px / 12px**                             | Elevação adaptativa em 3 níveis               | Electric Indigo, Cyan brilhante e gradiente exclusivo               |

---

## 📦 Instalação

Escolha o gerenciador de pacotes da sua preferência:

```bash
# pnpm (Recomendado)
pnpm add @magic-style/vue @magic-style/css

# npm
npm install @magic-style/vue @magic-style/css

# yarn
yarn add @magic-style/vue @magic-style/css

# bun
bun add @magic-style/vue @magic-style/css
```

---

## 🚀 Início Rápido

### 1. Importação Global no Entrypoint (`main.ts`)

```typescript
import { createApp } from "vue";
import App from "./App.vue";

// Importa tokens, temas, reset opcional e componentes semânticos
import "@magic-style/css";

createApp(App).mount("#app");
```

### 2. Uso de Componentes no Vue SFC

```vue
<script setup lang="ts">
import { MsThemeScope, MsButton, MsInput, MsCard, MsBadge, MsSelect } from "@magic-style/vue";
</script>

<template>
  <!-- Aplicação de tema isolado em nível de componente ou seção -->
  <MsThemeScope theme="material" color-mode="light" radius="rounded">
    <MsCard>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3>Ambiente Material Design 3</h3>
        <MsBadge tone="success" pill>Ativo</MsBadge>
      </div>

      <!-- Botão herdando formato de pílula (9999px) e elevação M3 automaticamente -->
      <MsButton variant="solid" tone="primary"> Ação com Formato Pílula M3 </MsButton>
    </MsCard>
  </MsThemeScope>

  <!-- Escopo paralelo renderizando com identidade Shadcn Dark -->
  <MsThemeScope theme="shadcn" color-mode="dark">
    <MsCard>
      <MsInput placeholder="Filtrar registros..." />
      <MsButton variant="solid" tone="primary"> Botão Flat Zinc Invertido </MsButton>
    </MsCard>
  </MsThemeScope>
</template>
```

### 3. Uso Apenas com CSS Puro (Framework-Free)

O pacote `@magic-style/css` é 100% utilizável sem Vue:

```html
<div class="ms-theme-scope" data-ms-theme="bootstrap" data-ms-color-mode="light">
  <div class="ms-card">
    <div class="ms-input">
      <input class="ms-input-native" type="text" placeholder="Nome completo" />
    </div>
    <!-- Herda raio de 0.375rem e chanfro superior Bootstrap -->
    <button class="ms-button" data-variant="solid" data-tone="primary">Salvar Cadastro</button>
  </div>
</div>
```

---

## 🧩 Catálogo dos 82 Componentes

Os 82 componentes cobrem todo o ciclo de vida de aplicações corporativas de grande porte:

```
├── Controles de Formulário (14)
│   ├── MsInput · MsSelect (Unified Engine) · MsNativeSelect · MsCheckbox · MsRadio · MsRadioGroup
│   ├── MsSwitch · MsTextarea · MsSearchField · MsPinInput · MsPasswordInput · MsMaskedInput
│   └── MsFileInput · MsColorPicker · MsDatePicker
├── Ações & Gatilhos (8)
│   ├── MsButton · MsButtonGroup · MsIconButton · MsDropdownButton · MsMenu
│   └── MsFab · MsSegmentedControl · MsToggleGroup
├── Layout, Shell & Navegação (12)
│   ├── MsAppShell · MsPage · MsContainer · MsNavbar · MsSidebar · MsSidebarMenu
│   └── MsFooter · MsBreadcrumbs · MsPagination · MsTabs · MsStepper · MsDock · MsScrollSpy
├── Feedback, Diálogos & Overlays (10)
│   ├── MsAlert · MsBanner · MsToast · MsDialog · MsConfirmDialog
│   └── MsDrawer · MsPopover · MsTooltip · MsStatus · MsContextMenu
├── Apresentação de Dados & Conteúdo (14)
│   ├── MsCard · MsTable · MsBadge · MsTag · MsAvatar · MsTimeline · MsTree
│   └── MsList · MsProgress · MsProgressRadial · MsSkeleton · MsSpinner · MsAnimatedNumber · MsEmptyState
└── Avançados & Mídia Especializada (12)
    ├── MsCommandPalette · MsSplitPane · MsFormWizard · MsCode · MsCodeBlock
    └── MsDropzone · MsLightbox · MsCarousel · MsChatBubble · MsChoicebox · MsGlimpse · MsMarquee · MsRating
```

---

## 🏛️ Arquitetura do Monorepo

O repositório é organizado em camadas estritas e unidirecionais para impedir acoplamentos indevidos (verificado via `scripts/check-architecture.mjs` conforme Doc 18 §5):

```
apps/
  └── preview/                  # Studio interativo, documentação e Landing Page
packages/
  ├── css/                      # @magic-style/css — Camada de estilo framework-free
  ├── vue/                      # @magic-style/vue — Componentes Vue 3 SFC
  └── internal/
      ├── tokens/               # @magic-style-internal/tokens — DTCG tokens canônicos
      └── themes/               # @magic-style-internal/themes — 10 temas + dials visuais
docs/
  └── baseline/                 # Architecture Baseline 1.2 canônica (Docs 01 a 28)
scripts/
  └── check-architecture.mjs    # Auditor de arestas proibidas entre pacotes
```

### Contrato de Dependências Inegociáveis

- Pacotes de browser (`@magic-style/vue`, `@magic-style/css`) **nunca** importam tooling de Node.
- Pacotes internos de fundação (`tokens`, `themes`) **nunca** dependem de pacotes públicos de nível superior.
- Toda modificação em pacote público exige changeset via `pnpm changeset`.

---

## 🛠️ Comandos de Desenvolvimento

| Comando             | Descrição                                                                       |
| :------------------ | :------------------------------------------------------------------------------ |
| `pnpm install`      | Instalação com frozen lockfile e engine-strict (Node ≥24).                      |
| `pnpm validate`     | **Health gate completo:** Prettier, ESLint, arquitetura, types, testes e build. |
| `pnpm dev:preview`  | Inicia o servidor local de Landing Page e Studio em `http://localhost:4173`.    |
| `pnpm test`         | Executa todos os testes unitários via Vitest nos 4 pacotes.                     |
| `pnpm typecheck`    | Checagem de tipagem estrita via TypeScript em todo o monorepo.                  |
| `pnpm lint`         | Checagem de formatação e regras via ESLint 10.                                  |
| `pnpm architecture` | Valida se há importações proibidas entre as camadas do monorepo.                |
| `pnpm changeset`    | Cria declaração semver para mudanças em pacotes públicos.                       |

---

## 📜 Governança e Decisões

- **Autoridade:** `Segurança → ADR/Baseline → Contrato de Pacote → Especificação de Componente → Implementação → Docs`.
- Toda decisão arquitetural global requer aprovação formal via RFC/ADR (Docs 27 e 28).
- **Padrão "No Fake Green":** Nenhuma tarefa ou PR é considerado concluído sem a execução real e relatório de aprovação de `pnpm validate`.

---

<div align="center">
  <sub>Construído com precisão pela equipe Magic Midia sob a Architecture Baseline 1.2.</sub>
</div>
