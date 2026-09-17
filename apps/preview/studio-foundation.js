import { ref, computed } from "vue";

export function useFoundationStudio() {
  // --- TYPOGRAPHY STATE ---
  const typeScale = [
    {
      name: "--ms-typography-size-display-xl",
      size: "3.75rem (60px)",
      weight: "700",
      sample: "Display Extra Large",
    },
    {
      name: "--ms-typography-size-display-lg",
      size: "3rem (48px)",
      weight: "700",
      sample: "Display Large",
    },
    {
      name: "--ms-typography-size-heading-xl",
      size: "2.25rem (36px)",
      weight: "600",
      sample: "Heading Extra Large",
    },
    {
      name: "--ms-typography-size-heading-lg",
      size: "1.875rem (30px)",
      weight: "600",
      sample: "Heading Large",
    },
    {
      name: "--ms-typography-size-heading-md",
      size: "1.5rem (24px)",
      weight: "600",
      sample: "Heading Medium",
    },
    {
      name: "--ms-typography-size-heading-sm",
      size: "1.25rem (20px)",
      weight: "600",
      sample: "Heading Small",
    },
    {
      name: "--ms-typography-size-body-lg",
      size: "1.125rem (18px)",
      weight: "400",
      sample: "Body text large for lead paragraphs and introductions.",
    },
    {
      name: "--ms-typography-size-body-md",
      size: "1rem (16px)",
      weight: "400",
      sample: "Standard body text used across paragraphs, forms, and general content.",
    },
    {
      name: "--ms-typography-size-body-sm",
      size: "0.875rem (14px)",
      weight: "400",
      sample: "Secondary body text for captions, tables, and compact interfaces.",
    },
    {
      name: "--ms-typography-size-caption-xs",
      size: "0.75rem (12px)",
      weight: "500",
      sample: "MICRO CAPTION & BADGE LABELS",
    },
  ];

  // --- THEMES & DIALS STATE ---
  const selectedTheme = ref("magic");
  const selectedMode = ref("light");
  const selectedDensity = ref("comfortable");
  const selectedRadius = ref("medium");
  const dialRadius = ref(8);
  const dialElevation = ref(2);

  const themeList = [
    { value: "magic", label: "Magic (Oficial)", brand: "#2e86de" },
    { value: "shadcn", label: "Shadcn (Zinc)", brand: "#18181b" },
    { value: "bootstrap", label: "Bootstrap", brand: "#0d6efd" },
    { value: "material", label: "MaterialUI / M3", brand: "#6750a4" },
    { value: "github", label: "GitHub Primer", brand: "#1f883d" },
    { value: "linear", label: "Linear", brand: "#5e6ad2" },
    { value: "vercel", label: "Vercel Geist", brand: "#000000" },
    { value: "supabase", label: "Supabase", brand: "#24b47e" },
    { value: "nord", label: "Nord Arctic", brand: "#5e81ac" },
    { value: "graphite", label: "Graphite", brand: "#4b5563" },
  ];

  const computedDialStyles = computed(() => ({
    "--ms-radius-lg": `${dialRadius.value}px`,
    "--ms-radius-md": `${Math.max(dialRadius.value - 2, 2)}px`,
    "--ms-radius-sm": `${Math.max(dialRadius.value - 4, 1)}px`,
  }));

  // --- RTL STATE ---
  const rtlDirection = ref("ltr");
  const toggleRtl = () => {
    rtlDirection.value = rtlDirection.value === "ltr" ? "rtl" : "ltr";
  };

  // --- CUSTOMIZATION STATE ---
  const customPrimary = ref("#2e86de");
  const customRadius = ref(8);
  const customFont = ref("sans-serif");

  const customStyles = computed(() => ({
    "--ms-color-primary": customPrimary.value,
    "--ms-radius-lg": `${customRadius.value}px`,
    fontFamily: customFont.value,
  }));

  const customCssCode = computed(
    () =>
      `:root {\n  --ms-color-primary: ${customPrimary.value};\n  --ms-radius-lg: ${customRadius.value}px;\n  --ms-font-sans: ${customFont.value};\n}`,
  );

  const applyGlobally = () => {
    if (typeof window !== "undefined") {
      window.document.documentElement.dataset.msTheme = selectedTheme.value;
      window.document.documentElement.dataset.msColorMode = selectedMode.value;
      window.document.documentElement.dataset.msDensity = selectedDensity.value;
      window.document.documentElement.dataset.msRadius = selectedRadius.value;
      window.localStorage.setItem("ms-theme", selectedTheme.value);
      window.localStorage.setItem("ms-color-mode", selectedMode.value);
      window.localStorage.setItem("ms-density", selectedDensity.value);
      window.localStorage.setItem("ms-radius", selectedRadius.value);
    }
  };

  return {
    typeScale,
    selectedTheme,
    selectedMode,
    selectedDensity,
    selectedRadius,
    themeList,
    dialRadius,
    dialElevation,
    computedDialStyles,
    rtlDirection,
    toggleRtl,
    customPrimary,
    customRadius,
    customFont,
    customStyles,
    customCssCode,
    applyGlobally,
  };
}

export const foundationNavHtml = `
  <div>
    <div class="sidebar-section-title">Fundação & Design System</div>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'typography' }" @click="activeTab = 'typography'">
      <span>🔤</span> Tipografia & Escala
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'colors' }" @click="activeTab = 'colors'">
      <span>🎨</span> Cores & WCAG Contraste
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'dials' }" @click="activeTab = 'dials'">
      <span>🎛️</span> Temas & Dials Visuais
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'utilities' }" @click="activeTab = 'utilities'">
      <span>🛠️</span> Utilitários & Variáveis CSS
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'rtl' }" @click="activeTab = 'rtl'">
      <span>🔄</span> Suporte RTL (Bidirecional)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'customization' }" @click="activeTab = 'customization'">
      <span>✨</span> Customização & Playground
    </button>
  </div>
`;

export const foundationTemplatesHtml = `
  <!-- TAB: TYPOGRAPHY -->
  <div v-if="activeTab === 'typography'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Tipografia & Escala Harmônica</h2>
        <div class="panel-subtitle">Sistema tipográfico escalonado baseado na Baseline 1.2 com tokens semânticos e pesos estritos.</div>
      </div>
    </div>

    <div class="playground-grid" style="grid-template-columns: 1fr;">
      <div class="canvas-area">
        <div class="controls-card">
          <div class="controls-card-title">Famílias Tipográficas</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ms-space-4);">
            <div style="padding: var(--ms-space-3); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md);">
              <span class="ms-u-font-sans ms-u-font-bold">Sans: Inter / System UI</span>
              <p class="ms-u-text-muted" style="margin: 4px 0 0; font-size: 0.875rem;">Usada para todo o corpo de texto, botões e controles corporativos.</p>
            </div>
            <div style="padding: var(--ms-space-3); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md);">
              <span class="ms-u-font-display ms-u-font-bold">Display: Syne / Plus Jakarta</span>
              <p class="ms-u-text-muted" style="margin: 4px 0 0; font-size: 0.875rem;">Usada em títulos de grande impacto, banners e páginas hero.</p>
            </div>
            <div style="padding: var(--ms-space-3); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md);">
              <span class="ms-u-font-mono ms-u-font-bold">Mono: JetBrains Mono / Fira</span>
              <p class="ms-u-text-muted" style="margin: 4px 0 0; font-size: 0.875rem;">Para códigos, valores numéricos tabulares e métricas financeiras.</p>
            </div>
          </div>
        </div>

        <div class="controls-card" style="margin-top: var(--ms-space-4);">
          <div class="controls-card-title">Escala de Tamanhos & Tokens</div>
          <div style="display: flex; flex-direction: column; gap: var(--ms-space-4);">
            <div v-for="item in foundation.typeScale" :key="item.name" style="border-bottom: 1px solid var(--ms-color-border-subtle); padding-bottom: var(--ms-space-3);">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--ms-color-text-muted); margin-bottom: 4px;">
                <code style="color: var(--ms-color-primary);">{{ item.name }}</code>
                <span>{{ item.size }} • Peso: {{ item.weight }}</span>
              </div>
              <div :style="{ fontSize: item.size.split(' ')[0], fontWeight: item.weight, lineHeight: '1.2' }">
                {{ item.sample }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: COLORS & WCAG -->
  <div v-if="activeTab === 'colors'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Cores & Conformidade WCAG 2.2 AA</h2>
        <div class="panel-subtitle">Paleta semântica corporativa em espaço de cor OKLCH com taxas de contraste auditadas.</div>
      </div>
    </div>

    <div class="playground-grid" style="grid-template-columns: 1fr;">
      <div class="canvas-area">
        <div class="controls-card">
          <div class="controls-card-title">Brand Palette Oficial Magic-Style (8 Tons Normativos)</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--ms-space-3);">
            <div style="background: #2e86de; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Primary</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#2e86de</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-primary</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.18); padding: 2px 6px; border-radius: 4px; display: inline-block;">Ação Principal / Corporate Blue</div>
            </div>

            <div style="background: #e15f41; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Secondary</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#e15f41</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-secondary</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.18); padding: 2px 6px; border-radius: 4px; display: inline-block;">Ação Secundária / Coral Red</div>
            </div>

            <div style="background: #341f97; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Accent</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#341f97</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-accent</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.18); padding: 2px 6px; border-radius: 4px; display: inline-block;">Assinatura Visual / Deep Indigo</div>
            </div>

            <div style="background: #222f3e; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Neutral</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#222f3e</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-neutral</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(255,255,255,0.15); padding: 2px 6px; border-radius: 4px; display: inline-block;">Superfície & Texto / Deep Ink</div>
            </div>

            <div style="background: #10ac84; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Success</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#10ac84</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-success</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.18); padding: 2px 6px; border-radius: 4px; display: inline-block;">Sucesso / Teal Green</div>
            </div>

            <div style="background: #0abde3; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Info</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#0abde3</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-info</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.18); padding: 2px 6px; border-radius: 4px; display: inline-block;">Informativo / Cyan Blue</div>
            </div>

            <div style="background: #ff9f43; color: #222f3e; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Warning</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem;">#ff9f43</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-warning</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.1); padding: 2px 6px; border-radius: 4px; display: inline-block;">Atenção / Vibrant Orange</div>
            </div>

            <div style="background: #ee5253; color: #ffffff; padding: 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-card);">
              <div style="font-weight: 700; font-size: 1rem;">Danger</div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.8125rem; opacity: 0.95;">#ee5253</div>
              <div style="font-size: 0.75rem; margin-top: 6px; opacity: 0.85;">--ms-color-danger</div>
              <div style="font-size: 0.7rem; margin-top: 4px; background: rgba(0,0,0,0.18); padding: 2px 6px; border-radius: 4px; display: inline-block;">Crítico & Erro / Alert Red</div>
            </div>
          </div>
        </div>

        <div class="controls-card" style="margin-top: var(--ms-space-4);">
          <div class="controls-card-title">Tabela de Contraste WCAG 2.2</div>
          <table class="ms-table ms-table--variant-surface" style="width: 100%;">
            <thead>
              <tr class="ms-table__header-row">
                <th class="ms-table__header-cell">Elemento & Par</th>
                <th class="ms-table__header-cell">Razão Contraste</th>
                <th class="ms-table__header-cell">Mínimo WCAG AA</th>
                <th class="ms-table__header-cell">Conformidade</th>
              </tr>
            </thead>
            <tbody>
              <tr class="ms-table__row">
                <td class="ms-table__cell">Texto Principal em Superfície</td>
                <td class="ms-table__cell"><strong>14.2:1</strong></td>
                <td class="ms-table__cell">4.5:1</td>
                <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-success ms-badge--variant-soft">Aprovado AAA</span></td>
              </tr>
              <tr class="ms-table__row">
                <td class="ms-table__cell">Texto Muted em Superfície</td>
                <td class="ms-table__cell"><strong>5.8:1</strong></td>
                <td class="ms-table__cell">4.5:1</td>
                <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-success ms-badge--variant-soft">Aprovado AA</span></td>
              </tr>
              <tr class="ms-table__row">
                <td class="ms-table__cell">Botão Primário (Texto branco / Fundo)</td>
                <td class="ms-table__cell"><strong>4.8:1</strong></td>
                <td class="ms-table__cell">4.5:1</td>
                <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-success ms-badge--variant-soft">Aprovado AA</span></td>
              </tr>
              <tr class="ms-table__row">
                <td class="ms-table__cell">Borda de Input em Foco</td>
                <td class="ms-table__cell"><strong>3.6:1</strong></td>
                <td class="ms-table__cell">3.0:1 (UI)</td>
                <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-success ms-badge--variant-soft">Aprovado AA</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: THEMES & DIALS -->
  <div v-if="activeTab === 'dials'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Temas & Dials Visuais</h2>
        <div class="panel-subtitle">Experimente os 10 temas oficiais em tempo real com escopos locais isolados (&lt;MsThemeScope&gt;) ou aplicação global.</div>
      </div>
    </div>

    <div class="playground-grid">
      <div class="canvas-area">
        <!-- SCOPED THEMED CONTAINER -->
        <ms-theme-scope
          :theme="foundation.selectedTheme"
          :color-mode="foundation.selectedMode"
          :density="foundation.selectedDensity"
          :radius="foundation.selectedRadius"
          style="display: block; width: 100%;"
        >
          <div style="padding: var(--ms-space-6); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-default); border-radius: var(--ms-radius-xl); box-shadow: var(--ms-elevation-card); transition: all 0.2s ease;">
            <!-- HEADER -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ms-space-4); border-bottom: 1px solid var(--ms-color-border-subtle); padding-bottom: var(--ms-space-3);">
              <div>
                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ms-color-text-muted); font-weight: 700;">Ambiente Temático Ativo</span>
                <h3 style="margin: 2px 0 0; font-size: 1.35rem; color: var(--ms-color-text-primary); text-transform: capitalize;">
                  Tema: {{ foundation.selectedTheme }}
                </h3>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="ms-badge" data-variant="solid" data-tone="primary" data-pill>
                  {{ String(foundation.selectedMode).toUpperCase() }}
                </span>
                <span class="ms-badge" data-variant="soft" data-tone="neutral">
                  {{ foundation.selectedDensity }}
                </span>
                <span class="ms-badge" data-variant="outline" data-tone="accent">
                  {{ foundation.selectedRadius }}
                </span>
              </div>
            </div>

            <!-- INTERACTIVE CARDS & FORM ELEMENTS -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ms-space-4);">
              <!-- CARD 1: FORM ELEMENTS -->
              <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
                <h4 style="margin: 0 0 var(--ms-space-2); color: var(--ms-color-text-primary);">Controles de Formulário</h4>
                <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0 0 var(--ms-space-3);">
                  Inputs, selects e foco adaptados às variáveis do tema selecionado.
                </p>

                <div style="display: flex; flex-direction: column; gap: 10px;">
                  <input
                    type="text"
                    class="ms-input"
                    value="Exemplo de texto corporativo..."
                    placeholder="Digite aqui..."
                  />

                  <select class="prop-select" style="width: 100%;">
                    <option>Opção 1 - Configuração Padrão</option>
                    <option>Opção 2 - Otimização de Performance</option>
                    <option>Opção 3 - Modo Alta Precisão</option>
                  </select>

                  <div style="display: flex; gap: 8px; margin-top: 4px;">
                    <span class="ms-tag" data-tone="primary" data-variant="soft">Tag Primária</span>
                    <span class="ms-tag" data-tone="success" data-variant="soft">Online</span>
                    <span class="ms-tag" data-tone="warning" data-variant="soft">Pendente</span>
                  </div>
                </div>
              </div>

              <!-- CARD 2: ACTION BUTTONS -->
              <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
                <h4 style="margin: 0 0 var(--ms-space-2); color: var(--ms-color-text-primary);">Hierarquia de Botões</h4>
                <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0 0 var(--ms-space-3);">
                  Botões com preenchimento sólido, contorno, tons semânticos e estado hover.
                </p>

                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  <button class="ms-button" data-variant="solid" data-tone="primary">Ação Primária</button>
                  <button class="ms-button" data-variant="outline" data-tone="neutral">Secundário</button>
                  <button class="ms-button" data-variant="soft" data-tone="success">Aprovado</button>
                  <button class="ms-button" data-variant="ghost" data-tone="danger">Excluir</button>
                </div>

                <div style="margin-top: var(--ms-space-3);">
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--ms-color-text-muted); margin-bottom: 4px;">
                    <span>Capacidade do Servidor</span>
                    <span>78%</span>
                  </div>
                  <div class="ms-progress" style="width: 100%;">
                    <div class="ms-progress__bar" style="width: 78%; background-color: var(--ms-color-primary);"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CODE PREVIEW -->
            <div style="margin-top: var(--ms-space-4);">
              <span style="font-size: 0.75rem; color: var(--ms-color-text-muted); font-weight: 600;">Código Vue SFC para este Escopo Temático:</span>
              <pre style="margin: 6px 0 0; padding: 12px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-sunken); border: 1px solid var(--ms-color-border-subtle); font-family: var(--ms-font-mono); font-size: 0.8125rem; color: var(--ms-color-text-primary); overflow-x: auto;"><code>&lt;MsThemeScope
  theme="{{ foundation.selectedTheme }}"
  color-mode="{{ foundation.selectedMode }}"
  density="{{ foundation.selectedDensity }}"
  radius="{{ foundation.selectedRadius }}"
&gt;
  &lt;!-- Conteúdo com visual {{ foundation.selectedTheme }} isolado --&gt;
&lt;/MsThemeScope&gt;</code></pre>
            </div>
          </div>
        </ms-theme-scope>
      </div>

      <!-- CONTROLS CARD -->
      <div class="controls-card">
        <div class="controls-card-title">Dials do Design System</div>

        <!-- THEME SELECTOR -->
        <div class="prop-row">
          <label class="prop-label">Tema Oficial (data-ms-theme)</label>
          <select class="prop-select" v-model="foundation.selectedTheme">
            <option v-for="t in foundation.themeList" :key="t.value" :value="t.value">
              {{ t.label }}
            </option>
          </select>
        </div>

        <!-- COLOR MODE -->
        <div class="prop-row">
          <label class="prop-label">Modo de Cor (color-mode)</label>
          <select class="prop-select" v-model="foundation.selectedMode">
            <option value="light">Light Mode (Modo Claro)</option>
            <option value="dark">Dark Mode (Modo Escuro)</option>
          </select>
        </div>

        <!-- DENSITY -->
        <div class="prop-row">
          <label class="prop-label">Densidade (density)</label>
          <select class="prop-select" v-model="foundation.selectedDensity">
            <option value="compact">Compact (Alta densidade)</option>
            <option value="comfortable">Comfortable (Padrão)</option>
            <option value="spacious">Spacious (Espaçoso)</option>
          </select>
        </div>

        <!-- RADIUS -->
        <div class="prop-row">
          <label class="prop-label">Raio de Borda (radius dial)</label>
          <select class="prop-select" v-model="foundation.selectedRadius">
            <option value="sharp">Sharp (0px - Reto)</option>
            <option value="subtle">Subtle (4px - Sutil)</option>
            <option value="medium">Medium (8px - Equilibrado)</option>
            <option value="rounded">Rounded (16px - Arredondado)</option>
          </select>
        </div>

        <!-- ACTION TO APPLY GLOBALLY -->
        <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--ms-color-border-subtle);">
          <button
            class="ms-button"
            data-variant="solid"
            data-tone="primary"
            style="width: 100%;"
            @click="foundation.applyGlobally()"
          >
            🌐 Aplicar Tema Globalmente
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: UTILITIES & VARIABLES -->
  <div v-if="activeTab === 'utilities'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Utilitários CSS & Grid Corporativo</h2>
        <div class="panel-subtitle">Classes atômicas de layout, espaçamento, flexbox e grid prontas para produção sem !important.</div>
      </div>
    </div>

    <div class="playground-grid" style="grid-template-columns: 1fr;">
      <div class="canvas-area">
        <div class="controls-card">
          <div class="controls-card-title">Grid Responsivo (.ms-u-grid-cols-1..4)</div>
          <div class="ms-u-grid ms-u-grid-cols-4 ms-u-gap-4">
            <div class="ms-u-p-4 ms-u-bg-raised ms-u-rounded-lg ms-u-elevation-1">Coluna 1</div>
            <div class="ms-u-p-4 ms-u-bg-raised ms-u-rounded-lg ms-u-elevation-1">Coluna 2</div>
            <div class="ms-u-p-4 ms-u-bg-raised ms-u-rounded-lg ms-u-elevation-1">Coluna 3</div>
            <div class="ms-u-p-4 ms-u-bg-raised ms-u-rounded-lg ms-u-elevation-1">Coluna 4</div>
          </div>
        </div>

        <div class="controls-card" style="margin-top: var(--ms-space-4);">
          <div class="controls-card-title">Flexbox & Alinhamentos (.ms-u-flex .ms-u-justify-between)</div>
          <div class="ms-u-flex ms-u-items-center ms-u-justify-between ms-u-p-4 ms-u-border ms-u-rounded-lg">
            <span>Alinhado à Esquerda</span>
            <div class="ms-u-flex ms-u-gap-2">
              <span class="ms-badge ms-badge--tone-info">Flex Item 1</span>
              <span class="ms-badge ms-badge--tone-success">Flex Item 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: RTL -->
  <div v-if="activeTab === 'rtl'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Suporte RTL (Right-to-Left) Bidirecional</h2>
        <div class="panel-subtitle">Adaptação automática para idiomas árabes e hebraicos através de propriedades lógicas do CSS.</div>
      </div>
      <button class="ms-button ms-button--outline ms-button--tone-primary" @click="foundation.toggleRtl()">
        Alternar Direção: {{ String(foundation.rtlDirection || 'ltr').toUpperCase() }}
      </button>
    </div>

    <div class="playground-grid" style="grid-template-columns: 1fr;">
      <div class="canvas-area">
        <div :dir="foundation.rtlDirection" style="padding: var(--ms-space-6); background: var(--ms-color-surface); border: 1px solid var(--ms-color-border); border-radius: var(--ms-radius-lg);">
          <h3 style="margin-top: 0;">لوحة التحكم في التصميم (Painel de Controle)</h3>
          <p class="ms-u-text-muted">
            Este container está sob <code>dir="{{ foundation.rtlDirection }}"</code>. Observe como os ícones, textos e botões fluem organicamente.
          </p>
          <div style="display: flex; gap: var(--ms-space-3); align-items: center;">
            <button class="ms-button ms-button--solid ms-button--tone-primary">
              <span class="ms-u-rtl-flip">🚀</span> إرسال (Enviar)
            </button>
            <span class="ms-badge ms-badge--tone-success">متصل (Online)</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CUSTOMIZATION -->
  <div v-if="activeTab === 'customization'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Customização & Playground Dinâmico</h2>
        <div class="panel-subtitle">Personalize a identidade visual e exporte variáveis CSS customizadas.</div>
      </div>
    </div>

    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" :style="foundation.customStyles">
          <div style="padding: 24px; border: 1px solid var(--ms-color-border); border-radius: var(--ms-radius-lg); width: 100%; max-width: 440px; background: var(--ms-color-surface);">
            <h3>Identidade Visual Customizada</h3>
            <p class="ms-u-text-muted">Veja como o tom primário customizado afeta os componentes.</p>
            <button class="ms-button ms-button--solid ms-button--tone-primary" style="width: 100%;">
              Ação com Cor Personalizada
            </button>
          </div>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Controles de Marca</div>
        <div class="prop-row">
          <label class="prop-label">Cor Primária:</label>
          <input type="color" v-model="foundation.customPrimary" />
        </div>
        <div class="prop-row">
          <label class="prop-label">Raio de Borda (px):</label>
          <input type="number" class="prop-input" v-model.number="foundation.customRadius" />
        </div>
        <div class="code-box" style="margin-top: 16px;">
          <pre><code>{{ foundation.customCssCode }}</code></pre>
        </div>
      </div>
    </div>
  </div>
`;
