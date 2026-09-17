/**
 * Magic-Style Official Documentation Module
 * Interactive documentation views for Overview, Installation, and Theming Architecture.
 */

export const docTemplatesHtml = `
  <!-- DOC SECTION: OVERVIEW -->
  <div v-if="activeTab === 'overview'" class="doc-article">
    <div class="doc-breadcrumbs">
      <span style="color: var(--ms-color-primary, #2e86de); font-weight: 700;">Documentação</span>
      <span class="doc-breadcrumbs-sep">/</span>
      <span>Primeiros Passos</span>
      <span class="doc-breadcrumbs-sep">/</span>
      <span style="color: var(--ms-color-text-primary); font-weight: 600;">Visão Geral da Biblioteca</span>
    </div>

    <div class="doc-hero">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="ms-badge" data-tone="primary" data-variant="solid" data-pill>Baseline 1.2</span>
        <span class="version-tag">v0.1.0 Oficial</span>
        <span class="ms-badge" data-tone="success" data-variant="soft" data-pill>WCAG 2.2 AAA</span>
      </div>
      <h1 class="doc-hero-title">Magic-Style: Enterprise Design System</h1>
      <p class="doc-hero-lead">
        Sistema de design de alta precisão técnica construído para aplicações corporativas modernas em Vue 3 e CSS Puro. 
        Fundamentado no modelo perceptual <strong>OKLCH</strong>, governança arquitetural estrita (Architecture Baseline 1.2), 
        temas dinâmicos via <strong>Dials Visuais</strong> e Dark Mode profissional obsidian em 3 camadas de elevação.
      </p>
    </div>

    <!-- METRICS GRID -->
    <div class="doc-grid-cards">
      <div class="doc-card">
        <div class="doc-card-title">
          <span style="font-size: 20px;">⚡</span> 82 Componentes Prontos
        </div>
        <p class="doc-card-desc">
          Do atômico (MsButton, MsBadge) a subsistemas avançados (MsNavbar, MsSidebarMenu, MsSelect unificado, MsTable, MsFormWizard e MsAppShell).
        </p>
      </div>

      <div class="doc-card">
        <div class="doc-card-title">
          <span style="font-size: 20px;">🎨</span> 8 Tons Corporativos
        </div>
        <p class="doc-card-desc">
          Primary, Secondary, Accent, Neutral, Success, Info, Warning e Danger calibrados em OKLCH com contraste balanceado.
        </p>
      </div>

      <div class="doc-card">
        <div class="doc-card-title">
          <span style="font-size: 20px;">🌓</span> Dark Mode Obsidian
        </div>
        <p class="doc-card-desc">
          Hierarquia tridimensional de superfícies (Canvas, Raised, Sunken) e bordas luminosas inspiradas em Linear, Vercel e GitHub.
        </p>
      </div>

      <div class="doc-card">
        <div class="doc-card-title">
          <span style="font-size: 20px;">♿</span> Acessibilidade Nativa
        </div>
        <p class="doc-card-desc">
          Foco visível por teclado, papéis ARIA nativos, contraste WCAG AAA automático e suporte bidirecional completo LTR / RTL.
        </p>
      </div>
    </div>

    <!-- ARCHITECTURE SUMMARY -->
    <div style="margin-top: var(--ms-space-4);">
      <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: var(--ms-color-text-primary);">
        🏛️ Arquitetura em Camadas Rigorosas
      </h2>
      <p style="color: var(--ms-color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
        O Magic-Style segue uma separação unidirecional inviolável verificada por gates automatizados:
      </p>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="padding: 14px 18px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-left: 4px solid var(--ms-color-interactive-primary, #2e86de);">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">1. Design Tokens (@magic-style-internal/tokens)</div>
          <div style="color: var(--ms-color-text-secondary); font-size: 13px;">Definição canônica DTCG em OKLCH: cores primitivas, semânticas, tipografia, espaçamento, elevação e transições.</div>
        </div>

        <div style="padding: 14px 18px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-left: 4px solid var(--ms-color-accent, #341f97);">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">2. Theming & Dials (@magic-style-internal/themes)</div>
          <div style="color: var(--ms-color-text-secondary); font-size: 13px;">Resolução em CSS custom properties dinâmicas para modos claro/escuro, alto contraste, densidade e raio de contorno.</div>
        </div>

        <div style="padding: 14px 18px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-left: 4px solid #10ac84;">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">3. Camada CSS Independente (@magic-style/css)</div>
          <div style="color: var(--ms-color-text-secondary); font-size: 13px;">Estilização modular pura via classes canônicas <code>.ms-*</code>. Zero dependência de framework JS.</div>
        </div>

        <div style="padding: 14px 18px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-left: 4px solid #ff9f43;">
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">4. Componentes Vue 3 (@magic-style/vue)</div>
          <div style="color: var(--ms-color-text-secondary); font-size: 13px;">Componentes SFC Script Setup tipados estritamente com TypeScript, composição limpa e slots flexíveis.</div>
        </div>
      </div>
    </div>

    <!-- QUICK ACTIONS -->
    <div style="display: flex; gap: 12px; margin-top: var(--ms-space-4);">
      <button class="ms-button" data-variant="solid" data-tone="primary" @click="activeTab = 'installation'">
        🚀 Ir para Instalação & Setup
      </button>
      <button class="ms-button" data-variant="outline" data-tone="neutral" @click="activeTab = 'theming-guide'">
        🎨 Ver Guia de Theming
      </button>
    </div>
  </div>

  <!-- DOC SECTION: INSTALLATION -->
  <div v-if="activeTab === 'installation'" class="doc-article">
    <div class="doc-breadcrumbs">
      <a href="#" @click.prevent="activeTab = 'overview'">Documentação</a>
      <span class="doc-breadcrumbs-sep">/</span>
      <span>Primeiros Passos</span>
      <span class="doc-breadcrumbs-sep">/</span>
      <span style="color: var(--ms-color-text-primary); font-weight: 600;">Instalação & Setup</span>
    </div>

    <div class="doc-hero">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="ms-badge" data-tone="success" data-variant="soft" data-pill>Guia Rápido</span>
        <span class="version-tag">Node &ge; 24 LTS</span>
      </div>
      <h1 class="doc-hero-title">Instalação & Configuração</h1>
      <p class="doc-hero-lead">
        Configure a biblioteca Magic-Style em seu projeto Vue 3 em menos de 2 minutos.
      </p>
    </div>

    <!-- STEP 1 -->
    <div style="margin-top: var(--ms-space-3);">
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--ms-color-text-primary);">
        1. Instale os Pacotes Oficiais
      </h3>
      <p style="color: var(--ms-color-text-secondary); font-size: 14px; margin-bottom: 12px;">
        Instale a camada de componentes Vue e o motor CSS de tokens e temas:
      </p>
      <div style="margin-top: var(--ms-space-2);">
        <MsSnippet :tabs="docsSnippetInstall" />
      </div>
    </div>

    <!-- STEP 2 -->
    <div style="margin-top: var(--ms-space-4);">
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--ms-color-text-primary);">
        2. Importe a Fundação de Estilos no seu <code>main.ts</code>
      </h3>
      <p style="color: var(--ms-color-text-secondary); font-size: 14px; margin-bottom: 12px;">
        No ponto de entrada da sua aplicação (geralmente <code>src/main.ts</code>), importe os tokens, temas e a camada de componentes:
      </p>
      <div style="margin-top: var(--ms-space-2);">
        <MsCodeBlock :code="docsMainTsCode" language="typescript" filename="src/main.ts" :show-line-numbers="true" />
      </div>
    </div>

    <!-- STEP 3 -->
    <div style="margin-top: var(--ms-space-4);">
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--ms-color-text-primary);">
        3. Use os Componentes no seu Vue SFC
      </h3>
      <p style="color: var(--ms-color-text-secondary); font-size: 14px; margin-bottom: 12px;">
        Todos os 55 componentes são exportados como Single File Components modernos e tipados:
      </p>
      <div style="margin-top: var(--ms-space-2);">
        <MsCodeBlock :code="docsAppVueCode" language="vue" filename="src/App.vue" :show-line-numbers="true" />
      </div>
    </div>
  </div>

  <!-- DOC SECTION: THEMING GUIDE -->
  <div v-if="activeTab === 'theming-guide'" class="doc-article">
    <div class="doc-breadcrumbs">
      <a href="#" @click.prevent="activeTab = 'overview'">Documentação</a>
      <span class="doc-breadcrumbs-sep">/</span>
      <span>Primeiros Passos</span>
      <span class="doc-breadcrumbs-sep">/</span>
      <span style="color: var(--ms-color-text-primary); font-weight: 600;">Guia de Theming & Dials</span>
    </div>

    <div class="doc-hero">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="ms-badge" data-tone="accent" data-variant="soft" data-pill>Arquitetura</span>
        <span class="version-tag">5 Dials Visuais</span>
      </div>
      <h1 class="doc-hero-title">Theming & Dials Visuais</h1>
      <p class="doc-hero-lead">
        O sistema de temas do Magic-Style não se limita a alternar entre claro e escuro. Ele oferece <strong>5 Dials Visuais</strong> ortogonais 
        que podem ser configurados globalmente no documento ou isolados em escopos locais com <code>&lt;MsThemeScope&gt;</code>.
      </p>
    </div>

    <!-- 5 DIALS TABLE -->
    <div class="api-table-wrapper" style="margin-top: var(--ms-space-4);">
      <table class="api-table">
        <thead>
          <tr>
            <th>Dial Visual</th>
            <th>Atributo HTML</th>
            <th>Valores Suportados</th>
            <th>Impacto nos Componentes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="api-prop-name">🌓 Color Mode</td>
            <td><code>data-ms-color-mode</code></td>
            <td><code>light | dark</code></td>
            <td>Alterna entre a paleta institucional clara e o Dark Slate / Obsidian profissional.</td>
          </tr>
          <tr>
            <td class="api-prop-name">🎨 Theme Preset</td>
            <td><code>data-ms-theme</code></td>
            <td><code>magic | shadcn | bootstrap | material | github | linear | vercel | supabase | nord | graphite</code></td>
            <td>Define a identidade cromática e visual do design system (10 temas conceituados suportados).</td>
          </tr>
          <tr>
            <td class="api-prop-name">👁️ Contrast Dial</td>
            <td><code>data-ms-contrast</code></td>
            <td><code>default | high</code></td>
            <td>Acessibilidade visual: calibra bordas e texto para conformidade WCAG 2.2 AAA estrita.</td>
          </tr>
          <tr>
            <td class="api-prop-name">📏 Density Dial</td>
            <td><code>data-ms-density</code></td>
            <td><code>compact | comfortable | spacious</code></td>
            <td>Ajusta a escala de padding, espaçamento e altura em tabelas, menus e formulários.</td>
          </tr>
          <tr>
            <td class="api-prop-name">🔘 Radius Dial</td>
            <td><code>data-ms-radius</code></td>
            <td><code>sharp | subtle | medium | rounded</code></td>
            <td>Controla o arredondamento global de botões, inputs, cards e janelas (0px a 16px).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 10 THEMES CATALOG TABLE -->
    <div style="margin-top: var(--ms-space-4);">
      <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--ms-color-text-primary);">
        🏛️ Catálogo dos 10 Temas Oficiais (Baseados nos Melhores Design Systems)
      </h3>
      <p style="color: var(--ms-color-text-secondary); font-size: 14px; margin-bottom: 12px;">
        Todos os 10 temas são 100% integrados com os 82 componentes, suportam Light Mode, Dark Mode, responsividade e internacionalização (i18n):
      </p>
      <div class="api-table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>Tema (data-ms-theme)</th>
              <th>Inspiração / Design System</th>
              <th>Paleta & Destaques</th>
              <th>Light Mode</th>
              <th>Dark Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="api-prop-name"><code>magic</code> (Padrão)</td>
              <td>Magic-Style Oficial</td>
              <td>Azul corporativo (#2e86de), acento índigo (#341f97), coral (#e15f41)</td>
              <td>Superfície límpida neutra</td>
              <td>Obsidian em 3 camadas</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>shadcn</code></td>
              <td>shadcn/ui & Radix Zinc</td>
              <td>Monocromático de alto contraste, bordas sutis zinc, foco com anel nítido</td>
              <td>Botão preto sólido (#18181b)</td>
              <td>Pitch Zinc (#09090b) com botão branco (#fafafa)</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>bootstrap</code></td>
              <td>Twitter Bootstrap 5.3</td>
              <td>Azul Royal (#0d6efd), sucesso (#198754), perigo (#dc3545), raio de 6px</td>
              <td>Superfície #f8f9fa clássica</td>
              <td>Dark Slate (#212529) com cartões #2b3035</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>material</code></td>
              <td>Material Design 3 (M3 / MUI)</td>
              <td>Roxo M3 (#6750a4), superfícies tonais suaves, cantos arredondados pill (16px)</td>
              <td>Superfície tonal #fef7ff</td>
              <td>Lavanda pastel (#d0bcff) em fundo #141218</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>github</code></td>
              <td>GitHub Primer Design</td>
              <td>Botão verde de ação (#1f883d), links azul (#0969da), bordas precisas</td>
              <td>Canvas branco límpido</td>
              <td>Dark icônico do GitHub (#0d1117 / #161b22)</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>linear</code></td>
              <td>Linear App & Raycast</td>
              <td>Índigo elétrico (#5e6ad2), bordas ultrafinas néon, precisão moderna</td>
              <td>Prata frio moderno</td>
              <td>Obsidian profundo (#08090a) com glow índigo</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>vercel</code></td>
              <td>Vercel Geist</td>
              <td>Brutalismo monocromático puro preto e branco, ângulos retos e precisos</td>
              <td>Branco absoluto com botão preto</td>
              <td>Pitch Black (#000000) com botão branco</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>supabase</code></td>
              <td>Supabase & Tailwind Emerald</td>
              <td>Esmeralda neon (#3ecf8e / #24b47e), superfícies dark studio</td>
              <td>Studio branco límpido</td>
              <td>Slate escuro (#121212) com acento esmeralda</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>nord</code></td>
              <td>Nord Arctic Palette</td>
              <td>Azul glacial (#5e81ac / #88c0d0), snow storm ártico, calmaria nórdica</td>
              <td>Snow storm (#eceff4)</td>
              <td>Polar Night (#2e3440) com ciano glacial</td>
            </tr>
            <tr>
              <td class="api-prop-name"><code>graphite</code></td>
              <td>Graphite Baseline</td>
              <td>Cinza aço monocromático corporativo com acento neutro</td>
              <td>Superfícies aço neutras</td>
              <td>Grafite escuro denso</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- CODE SNIPPET FOR DIALS -->
    <div style="margin-top: var(--ms-space-4);">
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--ms-color-text-primary);">
        Aplicação Global no HTML
      </h3>
      <div style="margin-top: var(--ms-space-2);">
        <MsCodeBlock :code="docsIndexHtmlCode" language="html" filename="index.html" :show-line-numbers="true" />
      </div>
    </div>

    <!-- LOCAL THEMING WITH MSTHEMESCOPE -->
    <div style="margin-top: var(--ms-space-4);">
      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--ms-color-text-primary);">
        Theming Local com <code>&lt;MsThemeScope&gt;</code>
      </h3>
      <p style="color: var(--ms-color-text-secondary); font-size: 14px; margin-bottom: 12px;">
        Isole seções da interface com configurações independentes (ex: uma barra lateral escura dentro de um app claro):
      </p>
      <div style="margin-top: var(--ms-space-2);">
        <MsCodeBlock :code="docsThemeScopeCode" language="vue" filename="src/components/ScopedSection.vue" :show-line-numbers="true" />
      </div>
    </div>
  </div>
`;
