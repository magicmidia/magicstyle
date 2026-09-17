import { ref } from "vue";
import { useToast } from "@magic-style/vue";

export function useBatchComponents() {
  const toastManager = useToast();

  // --- BATCH 5 STATE ---
  const containerMaxWidth = ref("lg");
  const containerPadded = ref(true);

  const bannerVisible = ref(true);
  const bannerTone = ref("primary");
  const bannerVariant = ref("soft");
  const bannerDismissible = ref(true);
  const bannerTitle = ref("Atualização do Sistema");
  const bannerAction = ref("Ver Notas");

  const drawerOpen = ref(false);
  const drawerPlacement = ref("right");
  const drawerSize = ref("md");
  const drawerTitle = ref("Filtros & Configurações");
  const drawerDescription = ref("Ajuste os parâmetros de exibição");

  const accordionValue = ref("item-1");
  const accordionVariant = ref("bordered");
  const accordionSize = ref("md");
  const accordionMultiple = ref(false);

  const popoverOpen = ref(false);
  const popoverPlacement = ref("bottom");
  const popoverWidth = ref("md");
  const popoverTrigger = ref("click");
  const popoverTitle = ref("Cartão do Usuário");

  const confirmOpen = ref(false);
  const confirmTone = ref("danger");
  const confirmTitle = ref("Excluir Espaço de Trabalho?");
  const confirmMessage = ref(
    "Esta ação é permanente e resultará na deleção definitiva de todos os 28 projetos e bancos de dados vinculados.",
  );
  const confirmButtonLabel = ref("Sim, Excluir Definitivamente");
  const confirmCancelLabel = ref("Cancelar Operação");
  const confirmLoading = ref(false);

  // --- BATCH 6 STATE ---
  const timelineDirection = ref("vertical");
  const timelineTone = ref("primary");

  const radialValue = ref(68);
  const radialTone = ref("primary");
  const radialSize = ref("lg");
  const radialStrokeWidth = ref(6);
  const radialIndeterminate = ref(false);

  const statusTone = ref("success");
  const statusSize = ref("md");
  const statusPulse = ref(true);
  const statusLabel = ref("Cluster Kubernetes Online");

  const ratingValue = ref(4);
  const ratingMax = ref(5);
  const ratingSize = ref("lg");
  const ratingReadonly = ref(false);
  const ratingDisabled = ref(false);

  const tickerValue = ref(12450);
  const tickerDuration = ref(1000);
  const tickerDecimals = ref(0);
  const tickerPrefix = ref("R$ ");
  const tickerSuffix = ref(",00");
  const randomizeTicker = () => {
    tickerValue.value = Math.floor(Math.random() * 50000) + 1000;
  };

  const toastTone = ref("success");
  const toastTitle = ref("Alerta do Sistema");
  const toastMessage = ref("Operação corporativa concluída com sucesso no cluster.");
  const toastDuration = ref(4000);
  const triggerToast = (tone, title, message, duration) => {
    const t = tone || toastTone.value;
    const tit = title || toastTitle.value;
    const msg = message || `Notificação corporativa com tom ${t}!`;
    const dur = duration || toastDuration.value;
    if (typeof toastManager[t] === "function") {
      toastManager[t](msg, { title: tit, duration: dur });
    } else {
      toastManager.info(msg, { title: tit, duration: dur });
    }
  };

  // --- BATCH 7 STATE ---
  const listVariant = ref("bordered");
  const listSize = ref("md");
  const listInteractive = ref(true);

  const rangeValue = ref(50);
  const rangeTone = ref("primary");
  const rangeSize = ref("lg");
  const rangeMin = ref(0);
  const rangeMax = ref(100);
  const rangeStep = ref(1);
  const rangeShowValue = ref(true);
  const rangeDisabled = ref(false);

  const stepperActive = ref(1);
  const stepperDirection = ref("horizontal");
  const stepperClickable = ref(true);

  const fileMultiple = ref(true);
  const fileShowList = ref(true);
  const fileDisabled = ref(false);
  const fileLabel = ref("Arraste e solte relatórios financeiros aqui, ou clique para enviar");
  const fileHint = ref("Formatos suportados: PDF, XLSX, CSV (máx. 10MB)");

  const treeSelected = ref("components");
  const treeExpanded = ref(["src", "components"]);
  const sampleTree = [
    {
      key: "src",
      label: "src",
      children: [
        {
          key: "components",
          label: "components",
          children: [
            { key: "MsButton.vue", label: "MsButton.vue" },
            { key: "MsSelect.vue", label: "MsSelect.vue" },
            { key: "MsDrawer.vue", label: "MsDrawer.vue" },
            { key: "MsBanner.vue", label: "MsBanner.vue" },
            { key: "MsRating.vue", label: "MsRating.vue" },
          ],
        },
        { key: "styles", label: "styles" },
      ],
    },
    { key: "package.json", label: "package.json" },
  ];
  const expandAllTrees = () => {
    treeExpanded.value = ["src", "components", "styles"];
  };
  const collapseAllTrees = () => {
    treeExpanded.value = [];
  };

  const contextMenuItems = [
    { id: "copy", label: "Copiar Código", icon: "📋", shortcut: "Ctrl+C" },
    { id: "edit", label: "Editar Propriedades", icon: "✏️" },
    { divider: true },
    { id: "delete", label: "Remover Item", icon: "🗑️", danger: true },
  ];

  // --- BATCH 8 STATE ---
  const chatVariant = ref("soft");
  const chatTone = ref("primary");
  const chatMessages = ref([
    {
      id: 1,
      placement: "start",
      name: "Assistente IA",
      text: "Olá! Como posso ajudar na sua aplicação corporativa hoje?",
      time: "10:14",
      status: "read",
    },
    {
      id: 2,
      placement: "end",
      name: "Você",
      text: "Preciso de um componente para seleção avançada e modais de confirmação.",
      time: "10:15",
      status: "read",
    },
    {
      id: 3,
      placement: "start",
      name: "Assistente IA",
      text: "Perfeito! O Magic-Style possui MsSelect, MsDrawer e MsConfirmDialog prontos para uso.",
      time: "10:15",
      status: "sent",
    },
  ]);

  const carouselActive = ref(0);
  const carouselAutoplay = ref(false);
  const carouselInterval = ref(4000);
  const carouselLoop = ref(true);
  const carouselShowArrows = ref(true);
  const carouselShowIndicators = ref(true);

  const dockPosition = ref("bottom");
  const dockSize = ref("md");
  const dockActive = ref("home");

  const pickedColor = ref("#2e86de");

  const scrollSpyItems = [
    { id: "sec-visao-geral", label: "1. Visão Geral" },
    { id: "sec-arquitetura", label: "2. Arquitetura" },
    { id: "sec-acessibilidade", label: "3. Acessibilidade" },
    { id: "sec-conformidade", label: "4. Conformidade WCAG" },
  ];

  return {
    containerMaxWidth,
    containerPadded,
    bannerVisible,
    bannerTone,
    bannerVariant,
    bannerDismissible,
    bannerTitle,
    bannerAction,
    drawerOpen,
    drawerPlacement,
    drawerSize,
    drawerTitle,
    drawerDescription,
    accordionValue,
    accordionVariant,
    accordionSize,
    accordionMultiple,
    popoverOpen,
    popoverPlacement,
    popoverWidth,
    popoverTrigger,
    popoverTitle,
    confirmOpen,
    confirmTone,
    confirmTitle,
    confirmMessage,
    confirmButtonLabel,
    confirmCancelLabel,
    confirmLoading,
    timelineDirection,
    timelineTone,
    radialValue,
    radialTone,
    radialSize,
    radialStrokeWidth,
    radialIndeterminate,
    statusTone,
    statusSize,
    statusPulse,
    statusLabel,
    ratingValue,
    ratingMax,
    ratingSize,
    ratingReadonly,
    ratingDisabled,
    tickerValue,
    tickerDuration,
    tickerDecimals,
    tickerPrefix,
    tickerSuffix,
    randomizeTicker,
    toastTone,
    toastTitle,
    toastMessage,
    toastDuration,
    triggerToast,
    listVariant,
    listSize,
    listInteractive,
    rangeValue,
    rangeTone,
    rangeSize,
    rangeMin,
    rangeMax,
    rangeStep,
    rangeShowValue,
    rangeDisabled,
    stepperActive,
    stepperDirection,
    stepperClickable,
    fileMultiple,
    fileShowList,
    fileDisabled,
    fileLabel,
    fileHint,
    treeSelected,
    treeExpanded,
    sampleTree,
    expandAllTrees,
    collapseAllTrees,
    contextMenuItems,
    chatVariant,
    chatTone,
    chatMessages,
    carouselActive,
    carouselAutoplay,
    carouselInterval,
    carouselLoop,
    carouselShowArrows,
    carouselShowIndicators,
    dockPosition,
    dockSize,
    dockActive,
    pickedColor,
    scrollSpyItems,
  };
}

export const batchNavHtml = `
  <div>
    <div class="sidebar-section-title">Layout & Overlays</div>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'containers' }" @click="activeTab = 'containers'">
      <span>📦</span> MsContainer (Layout)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'banners' }" @click="activeTab = 'banners'">
      <span>📢</span> MsBanner (Avisos)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'drawers' }" @click="activeTab = 'drawers'">
      <span>🗄️</span> MsDrawer (Gavetas)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'accordions' }" @click="activeTab = 'accordions'">
      <span>🪗</span> MsAccordion (Sanfona)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'popovers' }" @click="activeTab = 'popovers'">
      <span>💬</span> MsPopover (Flutuante)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'confirm-dialog' }" @click="activeTab = 'confirm-dialog'">
      <span>🛑</span> MsConfirmDialog (Ação Crítica)
    </button>
  </div>

  <div>
    <div class="sidebar-section-title">Feedback & Métricas</div>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'timeline' }" @click="activeTab = 'timeline'">
      <span>⏳</span> MsTimeline (Marcos)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'progress-radial' || activeTab === 'radial-progress' }" @click="activeTab = 'radial-progress'">
      <span>⭕</span> MsProgressRadial (Radial)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'status-indicator' || activeTab === 'status' }" @click="activeTab = 'status'">
      <span>🟢</span> MsStatus (Status Live)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'ratings' }" @click="activeTab = 'ratings'">
      <span>⭐</span> MsRating (Avaliação)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'toasts' }" @click="activeTab = 'toasts'">
      <span>🍞</span> MsToast (Notificações)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'animated-number' || activeTab === 'animated-numbers' }" @click="activeTab = 'animated-numbers'">
      <span>🔢</span> MsAnimatedNumber (Ticker)
    </button>
  </div>

  <div>
    <div class="sidebar-section-title">Formulários & Estruturas</div>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'lists' }" @click="activeTab = 'lists'">
      <span>📋</span> MsList & MsListGroup
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'ranges' }" @click="activeTab = 'ranges'">
      <span>🎚️</span> MsRange (Slider)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'steppers' }" @click="activeTab = 'steppers'">
      <span>👣</span> MsStepper (Passos / Wizard)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'file-inputs' }" @click="activeTab = 'file-inputs'">
      <span>📂</span> MsFileInput (Upload)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'tree-views' || activeTab === 'trees' }" @click="activeTab = 'trees'">
      <span>🌳</span> MsTree (Árvore)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'context-menus' }" @click="activeTab = 'context-menus'">
      <span>🖱️</span> MsContextMenu (Botão Direito)
    </button>
  </div>

  <div>
    <div class="sidebar-section-title">Especializados & App</div>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'chat-bubbles' }" @click="activeTab = 'chat-bubbles'">
      <span>💭</span> MsChatBubble (Mensagens)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'carousels' }" @click="activeTab = 'carousels'">
      <span>🎠</span> MsCarousel (Carrossel)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'docks' }" @click="activeTab = 'docks'">
      <span>💻</span> MsDock (Barra Flutuante)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'color-pickers' }" @click="activeTab = 'color-pickers'">
      <span>🎨</span> MsColorPicker (Cores)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'scroll-spies' }" @click="activeTab = 'scroll-spies'">
      <span>📜</span> MsScrollSpy (Sumário)
    </button>
  </div>
`;

export const batchTemplatesHtml = `
  <!-- TAB: CONTAINERS -->
  <div v-if="activeTab === 'containers' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <MsContainer :max-width="batch.containerMaxWidth" :padded="batch.containerPadded" style="background: var(--ms-color-surface-subtle); border: 2px dashed var(--ms-color-primary); padding: 24px; border-radius: var(--ms-radius-lg); width: 100%;">
            <h3 style="margin-top: 0;">MsContainer (max-width="{{ batch.containerMaxWidth }}")</h3>
            <p class="ms-u-text-muted">Limita a largura máxima para leitura confortável e alinha horizontalmente no centro da página com paddings responsivos.</p>
            <div style="margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
              <span class="ms-badge ms-badge--tone-primary">Max-Width: {{ batch.containerMaxWidth }}</span>
              <span class="ms-badge ms-badge--tone-info">Padded: {{ batch.containerPadded }}</span>
            </div>
          </MsContainer>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsContainer</div>

        <div class="prop-row">
          <label class="prop-label">Largura Máxima (maxWidth)</label>
          <select class="prop-select" v-model="batch.containerMaxWidth">
            <option value="sm">sm (Pequeno - 640px)</option>
            <option value="md">md (Médio - 768px)</option>
            <option value="lg">lg (Grande - 1024px)</option>
            <option value="xl">xl (Extra Grande - 1280px)</option>
            <option value="2xl">2xl (Full HD - 1536px)</option>
            <option value="fluid">fluid (100% Fluido)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.containerPadded" />
            <span>Aplicar Espaçamento Horizontal (padded)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: BANNERS -->
  <div v-if="activeTab === 'banners' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; flex-direction: column; gap: 16px; align-items: stretch;">
          <MsBanner
            v-if="batch.bannerVisible"
            :tone="batch.bannerTone"
            :variant="batch.bannerVariant"
            :title="batch.bannerTitle"
            :action-label="batch.bannerAction"
            :dismissible="batch.bannerDismissible"
            @dismiss="batch.bannerVisible = false"
            @action="batch.triggerToast(batch.bannerTone)"
          >
            Uma nova versão estável (v1.2.0) da biblioteca Magic-Style já está disponível com 8 tons corporativos e conformidade WCAG AA.
          </MsBanner>
          <div v-else style="text-align: center; padding: 20px;">
            <p class="ms-u-text-muted">O banner foi dispensado pelo usuário.</p>
            <button class="ms-button ms-button--solid ms-button--tone-primary ms-button--size-sm" @click="batch.bannerVisible = true">
              Restaurar Banner
            </button>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsBanner</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.bannerTone">
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Variante Visual (variant)</label>
          <select class="prop-select" v-model="batch.bannerVariant">
            <option value="soft">soft (Fundo sutil e elegante)</option>
            <option value="solid">solid (Preenchimento marcante)</option>
            <option value="outline">outline (Apenas borda com transparência)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Título do Banner (title)</label>
          <input class="prop-input" type="text" v-model="batch.bannerTitle" placeholder="Ex: Atualização do Sistema" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Rótulo do Botão de Ação (actionLabel)</label>
          <input class="prop-input" type="text" v-model="batch.bannerAction" placeholder="Ex: Ver Notas" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.bannerDismissible" />
            <span>Permitir Dispensar (dismissible)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: DRAWERS -->
  <div v-if="activeTab === 'drawers' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center;">
          <p class="ms-u-text-muted" style="text-align: center; max-width: 420px; margin-bottom: 16px;">
            Clique no botão abaixo para abrir o drawer com animação suave, foco restrito (focus-trap) e fechamento por tecla Escape.
          </p>
          <button class="ms-button ms-button--solid ms-button--tone-primary ms-button--size-lg" @click="batch.drawerOpen = true">
            🗄️ Abrir MsDrawer ({{ batch.drawerPlacement }})
          </button>

          <MsDrawer
            v-model:open="batch.drawerOpen"
            :placement="batch.drawerPlacement"
            :size="batch.drawerSize"
            :title="batch.drawerTitle"
            :description="batch.drawerDescription"
          >
            <p>Painel off-canvas com suporte a formulários, filtros e navegação corporativa.</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
              <label class="prop-checkbox"><input type="checkbox" checked /> <span>Notificações em tempo real</span></label>
              <label class="prop-checkbox"><input type="checkbox" /> <span>Modo compacto</span></label>
              <label class="prop-checkbox"><input type="checkbox" checked /> <span>Auditoria estrita ativada</span></label>
            </div>
            <template #footer>
              <div style="display: flex; gap: 8px; justify-content: flex-end; width: 100%;">
                <button class="ms-button ms-button--outline ms-button--tone-neutral" @click="batch.drawerOpen = false">Cancelar</button>
                <button class="ms-button ms-button--solid ms-button--tone-primary" @click="batch.drawerOpen = false">Salvar Filtros</button>
              </div>
            </template>
          </MsDrawer>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsDrawer</div>

        <div class="prop-row">
          <label class="prop-label">Posição / Lado (placement)</label>
          <select class="prop-select" v-model="batch.drawerPlacement">
            <option value="right">right (Direita - Padrão)</option>
            <option value="left">left (Esquerda)</option>
            <option value="top">top (Topo)</option>
            <option value="bottom">bottom (Inferior)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho (size)</label>
          <select class="prop-select" v-model="batch.drawerSize">
            <option value="sm">sm (Pequeno - 320px)</option>
            <option value="md">md (Médio - 420px)</option>
            <option value="lg">lg (Grande - 560px)</option>
            <option value="xl">xl (Extra Grande - 720px)</option>
            <option value="full">full (Tela Cheia)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Título do Drawer (title)</label>
          <input class="prop-input" type="text" v-model="batch.drawerTitle" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Descrição (description)</label>
          <input class="prop-input" type="text" v-model="batch.drawerDescription" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: ACCORDIONS -->
  <div v-if="activeTab === 'accordions' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%;">
            <MsAccordion v-model="batch.accordionValue" :variant="batch.accordionVariant" :size="batch.accordionSize" :multiple="batch.accordionMultiple">
              <MsAccordionItem value="item-1" title="O que é a Architecture Baseline 1.2?" subtitle="Fundação arquitetural">
                A Baseline 1.2 define as 28 regras canônicas do Magic-Style, incluindo isolamento em monorepo, zero dependências proibidas e padronização OKLCH.
              </MsAccordionItem>
              <MsAccordionItem value="item-2" title="Como funciona a governança de tokens?" subtitle="DTCG Semântico">
                Todos os componentes consomem tokens prefixados com --ms-* gerados a partir do schema normativo semântico da marca.
              </MsAccordionItem>
              <MsAccordionItem value="item-3" title="Posso utilizar com SSR e Nuxt 3?" subtitle="Universalidade ESM">
                Sim! Todos os 51 componentes são construídos com hidratação segura para SSR e testados em ambientes Node 24.
              </MsAccordionItem>
            </MsAccordion>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsAccordion</div>

        <div class="prop-row">
          <label class="prop-label">Variante Visual (variant)</label>
          <select class="prop-select" v-model="batch.accordionVariant">
            <option value="bordered">bordered (Borda contornada)</option>
            <option value="separated">separated (Cartões separados)</option>
            <option value="default">default (Clássico com divisores)</option>
            <option value="flush">flush (Sem bordas externas)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho / Densidade (size)</label>
          <select class="prop-select" v-model="batch.accordionSize">
            <option value="sm">sm (Compacto)</option>
            <option value="md">md (Médio - Padrão)</option>
            <option value="lg">lg (Amplo)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.accordionMultiple" />
            <span>Múltiplos Painéis Concorrentes (multiple)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: POPOVERS -->
  <div v-if="activeTab === 'popovers' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 48px; min-height: 280px; align-items: center; justify-content: center;">
          <MsPopover :placement="batch.popoverPlacement" :width="batch.popoverWidth" :trigger="batch.popoverTrigger" :title="batch.popoverTitle">
            <template #trigger>
              <button class="ms-button ms-button--outline ms-button--tone-primary">
                💬 Abrir Popover ({{ batch.popoverPlacement }})
              </button>
            </template>
            <div>
              <strong>Carlos Henrique</strong>
              <p class="ms-u-text-muted" style="margin: 4px 0 12px; font-size: 0.8125rem;">Engenheiro de Software Sênior</p>
              <span class="ms-badge ms-badge--tone-success">Status: Disponível</span>
            </div>
            <template #footer>
              <button class="ms-button ms-button--solid ms-button--tone-primary ms-button--size-sm" style="width: 100%;">
                Ver Perfil Completo
              </button>
            </template>
          </MsPopover>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsPopover</div>

        <div class="prop-row">
          <label class="prop-label">Posição Relativa (placement)</label>
          <select class="prop-select" v-model="batch.popoverPlacement">
            <option value="bottom">bottom (Inferior - Centro)</option>
            <option value="bottom-start">bottom-start (Inferior - Início)</option>
            <option value="bottom-end">bottom-end (Inferior - Fim)</option>
            <option value="top">top (Superior - Centro)</option>
            <option value="top-start">top-start (Superior - Início)</option>
            <option value="top-end">top-end (Superior - Fim)</option>
            <option value="left">left (Esquerda)</option>
            <option value="right">right (Direita)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Largura do Painel (width)</label>
          <select class="prop-select" v-model="batch.popoverWidth">
            <option value="auto">auto (Ajuste automático)</option>
            <option value="sm">sm (Pequeno - 240px)</option>
            <option value="md">md (Médio - 320px)</option>
            <option value="lg">lg (Grande - 400px)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Modo de Abertura (trigger)</label>
          <select class="prop-select" v-model="batch.popoverTrigger">
            <option value="click">click (Ao Clicar)</option>
            <option value="hover">hover (Ao Passar o Mouse)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Título do Painel (title)</label>
          <input class="prop-input" type="text" v-model="batch.popoverTitle" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CONFIRM DIALOG -->
  <div v-if="activeTab === 'confirm-dialog' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center;">
          <p class="ms-u-text-muted" style="text-align: center; max-width: 440px; margin-bottom: 16px;">
            Modal semântico para bloqueio de fluxos críticos (deleção, desativação de clusters, revogação de tokens).
          </p>
          <button class="ms-button ms-button--solid" :class="'ms-button--tone-' + batch.confirmTone" @click="batch.confirmOpen = true">
            🛑 Abrir Diálogo de Confirmação ({{ batch.confirmTone }})
          </button>

          <MsConfirmDialog
            v-model:open="batch.confirmOpen"
            :tone="batch.confirmTone"
            :title="batch.confirmTitle"
            :message="batch.confirmMessage"
            :confirm-label="batch.confirmButtonLabel"
            :cancel-label="batch.confirmCancelLabel"
            :loading="batch.confirmLoading"
            @confirm="batch.confirmOpen = false; batch.triggerToast(batch.confirmTone, 'Confirmado', 'Ação executada com sucesso!')"
            @cancel="batch.confirmOpen = false"
          />
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsConfirmDialog</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.confirmTone">
            <option value="danger">danger (#ee5253 - Alert Red)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Título do Diálogo (title)</label>
          <input class="prop-input" type="text" v-model="batch.confirmTitle" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Mensagem Explicativa (message)</label>
          <textarea class="prop-input" rows="2" v-model="batch.confirmMessage"></textarea>
        </div>

        <div class="prop-row">
          <label class="prop-label">Rótulo de Confirmação (confirmLabel)</label>
          <input class="prop-input" type="text" v-model="batch.confirmButtonLabel" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Rótulo de Cancelamento (cancelLabel)</label>
          <input class="prop-input" type="text" v-model="batch.confirmCancelLabel" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.confirmLoading" />
            <span>Estado de Carregamento (loading)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: TIMELINE -->
  <div v-if="activeTab === 'timeline' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <MsTimeline :direction="batch.timelineDirection">
            <MsTimelineItem title="Deploy Realizado em Produção" timestamp="Hoje às 18:45" :tone="batch.timelineTone">
              A pipeline de CI/CD finalizou a validação de 49 suites de teste e publicou o pacote estável.
            </MsTimelineItem>
            <MsTimelineItem title="Aprovação de Pull Request" timestamp="Hoje às 17:30" tone="primary">
              Revisão arquitetural aprovada conforme Baseline 1.2 sem arestas proibidas.
            </MsTimelineItem>
            <MsTimelineItem title="Início da Implementação" timestamp="Hoje às 14:00" tone="neutral">
              Desenvolvimento de componentes corporativos com suporte aos 8 tons da marca.
            </MsTimelineItem>
          </MsTimeline>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades da MsTimeline</div>

        <div class="prop-row">
          <label class="prop-label">Direção da Linha do Tempo (direction)</label>
          <select class="prop-select" v-model="batch.timelineDirection">
            <option value="vertical">vertical (Vertical - Padrão)</option>
            <option value="horizontal">horizontal (Horizontal)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tom do Marco Ativo (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.timelineTone">
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: PROGRESS RADIAL -->
  <div v-if="(activeTab === 'progress-radial' || activeTab === 'radial-progress') && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; gap: 32px; align-items: center; justify-content: center; flex-wrap: wrap;">
          <MsProgressRadial
            :value="batch.radialIndeterminate ? 0 : batch.radialValue"
            :size="batch.radialSize"
            :tone="batch.radialTone"
            :stroke-width="batch.radialStrokeWidth"
            :indeterminate="batch.radialIndeterminate"
          />
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <strong>Valor Atual: {{ batch.radialIndeterminate ? 'Indeterminado' : batch.radialValue + '%' }}</strong>
            <span class="ms-u-text-muted">Tom: {{ batch.radialTone }} • Tamanho: {{ batch.radialSize }}</span>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsProgressRadial</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.radialTone">
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho (size)</label>
          <select class="prop-select" v-model="batch.radialSize">
            <option value="sm">sm (Pequeno - 36px)</option>
            <option value="md">md (Médio - 56px)</option>
            <option value="lg">lg (Grande - 80px)</option>
            <option value="xl">xl (Extra Grande - 120px)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Progresso: {{ batch.radialValue }}%</label>
          <input type="range" class="prop-range" min="0" max="100" v-model.number="batch.radialValue" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Espessura do Traço: {{ batch.radialStrokeWidth }}px</label>
          <input type="range" class="prop-range" min="2" max="16" v-model.number="batch.radialStrokeWidth" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.radialIndeterminate" />
            <span>Modo Indeterminado / Spin (indeterminate)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: STATUS INDICATOR -->
  <div v-if="(activeTab === 'status-indicator' || activeTab === 'status') && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; align-items: center; justify-content: center;">
          <div style="background: var(--ms-color-surface-subtle); padding: 32px; border-radius: var(--ms-radius-xl); border: 1px solid var(--ms-color-border);">
            <MsStatus
              :tone="batch.statusTone"
              :size="batch.statusSize"
              :pulse="batch.statusPulse"
              :label="batch.statusLabel"
            />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsStatus</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.statusTone">
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho do Ponto (size)</label>
          <select class="prop-select" v-model="batch.statusSize">
            <option value="sm">sm (Pequeno)</option>
            <option value="md">md (Médio - Padrão)</option>
            <option value="lg">lg (Grande)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Rótulo Textual (label)</label>
          <input class="prop-input" type="text" v-model="batch.statusLabel" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.statusPulse" />
            <span>Animação de Radar Pulso (pulse)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: RATINGS -->
  <div v-if="activeTab === 'ratings' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; gap: 16px;">
          <MsRating
            v-model="batch.ratingValue"
            :max="batch.ratingMax"
            :size="batch.ratingSize"
            :readonly="batch.ratingReadonly"
            :disabled="batch.ratingDisabled"
          />
          <div style="font-size: 1.125rem; font-weight: 600;">
            Nota: {{ batch.ratingValue }} de {{ batch.ratingMax }} estrelas
          </div>
          <p class="ms-u-text-muted" style="margin: 0; font-size: 0.875rem;">
            Totalmente navegável via teclado (teclas seta, Home e End) conforme WAI-ARIA.
          </p>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsRating</div>

        <div class="prop-row">
          <label class="prop-label">Tamanho das Estrelas (size)</label>
          <select class="prop-select" v-model="batch.ratingSize">
            <option value="sm">sm (Pequeno)</option>
            <option value="md">md (Médio - Padrão)</option>
            <option value="lg">lg (Grande)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Avaliação Atual: {{ batch.ratingValue }}</label>
          <input type="range" class="prop-range" min="0" :max="batch.ratingMax" v-model.number="batch.ratingValue" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Máximo de Estrelas (max): {{ batch.ratingMax }}</label>
          <input type="range" class="prop-range" min="3" max="10" v-model.number="batch.ratingMax" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.ratingReadonly" />
            <span>Somente Leitura (readonly)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.ratingDisabled" />
            <span>Desabilitado (disabled)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: TOASTS -->
  <div v-if="activeTab === 'toasts' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; gap: 16px;">
          <p class="ms-u-text-muted" style="text-align: center; max-width: 440px;">
            Notificações flutuantes empilháveis com temporizador e auto-dismiss integrados ao gerenciador reativo global useToast().
          </p>

          <button class="ms-button ms-button--solid" :class="'ms-button--tone-' + batch.toastTone" @click="batch.triggerToast(batch.toastTone, batch.toastTitle, batch.toastMessage, batch.toastDuration)">
            🔔 Disparar Toast Customizado ({{ batch.toastTone }})
          </button>

          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 12px;">
            <button class="ms-button ms-button--soft ms-button--tone-success ms-button--size-sm" @click="batch.triggerToast('success', 'Sucesso', 'Arquivo exportado!')">Sucesso</button>
            <button class="ms-button ms-button--soft ms-button--tone-info ms-button--size-sm" @click="batch.triggerToast('info', 'Informação', 'Nova versão pronta!')">Informação</button>
            <button class="ms-button ms-button--soft ms-button--tone-warning ms-button--size-sm" @click="batch.triggerToast('warning', 'Aviso', 'Sessão expira em 5m!')">Aviso</button>
            <button class="ms-button ms-button--soft ms-button--tone-danger ms-button--size-sm" @click="batch.triggerToast('danger', 'Erro', 'Falha na conexão!')">Erro</button>
            <button class="ms-button ms-button--soft ms-button--tone-primary ms-button--size-sm" @click="batch.triggerToast('primary', 'Primário', 'Operação concluída!')">Primário</button>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades da Notificação Toast</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.toastTone">
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Título da Notificação (title)</label>
          <input class="prop-input" type="text" v-model="batch.toastTitle" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Mensagem (message)</label>
          <input class="prop-input" type="text" v-model="batch.toastMessage" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Duração em Milissegundos (duration): {{ batch.toastDuration }}ms</label>
          <input type="range" class="prop-range" min="1000" max="10000" step="500" v-model.number="batch.toastDuration" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: ANIMATED NUMBER -->
  <div v-if="(activeTab === 'animated-number' || activeTab === 'animated-numbers') && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; gap: 16px;">
          <div style="font-size: 3.5rem; font-weight: 800; color: var(--ms-color-primary); letter-spacing: -0.03em;">
            <MsAnimatedNumber
              :value="batch.tickerValue"
              :duration="batch.tickerDuration"
              :decimals="batch.tickerDecimals"
              :prefix="batch.tickerPrefix"
              :suffix="batch.tickerSuffix"
            />
          </div>
          <button class="ms-button ms-button--solid ms-button--tone-primary ms-button--size-md" @click="batch.randomizeTicker">
            🎲 Sortear Novo Valor Aleatório
          </button>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsAnimatedNumber</div>

        <div class="prop-row">
          <label class="prop-label">Valor Alvo (value)</label>
          <input class="prop-input" type="number" v-model.number="batch.tickerValue" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Duração da Animação (duration): {{ batch.tickerDuration }}ms</label>
          <input type="range" class="prop-range" min="200" max="3000" step="100" v-model.number="batch.tickerDuration" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Casas Decimais (decimals)</label>
          <select class="prop-select" v-model.number="batch.tickerDecimals">
            <option :value="0">0 casas (Inteiro)</option>
            <option :value="1">1 casa</option>
            <option :value="2">2 casas</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Prefixo Textual (prefix)</label>
          <input class="prop-input" type="text" v-model="batch.tickerPrefix" placeholder="Ex: R$ " />
        </div>

        <div class="prop-row">
          <label class="prop-label">Sufixo Textual (suffix)</label>
          <input class="prop-input" type="text" v-model="batch.tickerSuffix" placeholder="Ex: ,00" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: LISTS -->
  <div v-if="activeTab === 'lists' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%;">
            <MsList :variant="batch.listVariant" :size="batch.listSize">
              <MsListGroup title="Servidores de Infraestrutura">
                <MsListItem title="Cluster-Alpha-Primary" description="Região us-east-1 • 99.99% Uptime" :interactive="batch.listInteractive">
                  <template #leading>🖥️</template>
                  <template #trailing><span class="ms-badge ms-badge--tone-success">Ativo</span></template>
                </MsListItem>
                <MsListItem title="Staging-Environment-Beta" description="Região sa-east-1 • 98.2% Uptime" :interactive="batch.listInteractive">
                  <template #leading>⚙️</template>
                  <template #trailing><span class="ms-badge ms-badge--tone-warning">Reboot</span></template>
                </MsListItem>
                <MsListItem title="Backup-Storage-Cold" description="Região eu-west-1 • 100% Redundante" :interactive="batch.listInteractive">
                  <template #leading>💾</template>
                  <template #trailing><span class="ms-badge ms-badge--tone-neutral">Sync</span></template>
                </MsListItem>
              </MsListGroup>
            </MsList>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsList</div>

        <div class="prop-row">
          <label class="prop-label">Variante Visual (variant)</label>
          <select class="prop-select" v-model="batch.listVariant">
            <option value="bordered">bordered (Contorno arredondado)</option>
            <option value="divided">divided (Divisores internos)</option>
            <option value="default">default (Clássica simples)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho / Densidade (size)</label>
          <select class="prop-select" v-model="batch.listSize">
            <option value="sm">sm (Compacto)</option>
            <option value="md">md (Médio - Padrão)</option>
            <option value="lg">lg (Amplo)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.listInteractive" />
            <span>Efeito Hover Interativo (interactive)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: RANGES -->
  <div v-if="activeTab === 'ranges' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
          <div style="width: 100%; max-width: 440px;">
            <MsRange
              v-model="batch.rangeValue"
              :min="batch.rangeMin"
              :max="batch.rangeMax"
              :step="batch.rangeStep"
              :tone="batch.rangeTone"
              :size="batch.rangeSize"
              :show-value="batch.rangeShowValue"
              :disabled="batch.rangeDisabled"
            />
          </div>
          <div class="ms-u-text-muted">
            Valor Vinculado: <strong>{{ batch.rangeValue }}</strong> (Min: {{ batch.rangeMin }}, Max: {{ batch.rangeMax }})
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsRange</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
          <select class="prop-select" v-model="batch.rangeTone">
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho / Altura (size)</label>
          <select class="prop-select" v-model="batch.rangeSize">
            <option value="sm">sm (Fino)</option>
            <option value="md">md (Médio - Padrão)</option>
            <option value="lg">lg (Destacado)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Valor Mínimo (min)</label>
          <input class="prop-input" type="number" v-model.number="batch.rangeMin" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Valor Máximo (max)</label>
          <input class="prop-input" type="number" v-model.number="batch.rangeMax" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Passo / Incremento (step)</label>
          <input class="prop-input" type="number" v-model.number="batch.rangeStep" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.rangeShowValue" />
            <span>Exibir Indicador Numérico (showValue)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.rangeDisabled" />
            <span>Desabilitado (disabled)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: STEPPERS -->
  <div v-if="activeTab === 'steppers' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; flex-direction: column; align-items: stretch; justify-content: center;">
          <MsStepper v-model="batch.stepperActive" :direction="batch.stepperDirection" :clickable="batch.stepperClickable">
            <MsStep :index="0" title="Informações Pessoais" subtitle="Dados cadastrais" />
            <MsStep :index="1" title="Endereço de Cobrança" subtitle="CEP e localidade" />
            <MsStep :index="2" title="Forma de Pagamento" subtitle="Cartão ou Pix" />
            <MsStep :index="3" title="Confirmação Final" subtitle="Revisão dos dados" />
          </MsStepper>

          <div style="margin-top: 32px; display: flex; gap: 12px; justify-content: center;">
            <button class="ms-button ms-button--outline ms-button--tone-neutral" :disabled="batch.stepperActive <= 0" @click="batch.stepperActive--">
              ← Etapa Anterior
            </button>
            <button class="ms-button ms-button--solid ms-button--tone-primary" :disabled="batch.stepperActive >= 3" @click="batch.stepperActive++">
              Próxima Etapa →
            </button>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsStepper</div>

        <div class="prop-row">
          <label class="prop-label">Direção do Fluxo (direction)</label>
          <select class="prop-select" v-model="batch.stepperDirection">
            <option value="horizontal">horizontal (Horizontal - Wizard)</option>
            <option value="vertical">vertical (Vertical - Linha)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Etapa Ativa (0 a 3): {{ batch.stepperActive }}</label>
          <input type="range" class="prop-range" min="0" max="3" v-model.number="batch.stepperActive" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.stepperClickable" />
            <span>Navegação Direta por Clique (clickable)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: FILE INPUTS -->
  <div v-if="activeTab === 'file-inputs' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%;">
            <MsFileInput
              :label="batch.fileLabel"
              :hint="batch.fileHint"
              :multiple="batch.fileMultiple"
              :show-file-list="batch.fileShowList"
              :disabled="batch.fileDisabled"
              accept=".pdf,.xlsx,.csv"
            />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsFileInput</div>

        <div class="prop-row">
          <label class="prop-label">Rótulo da Área Dropzone (label)</label>
          <input class="prop-input" type="text" v-model="batch.fileLabel" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Texto de Dica / Formatos (hint)</label>
          <input class="prop-input" type="text" v-model="batch.fileHint" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.fileMultiple" />
            <span>Permitir Múltiplos Arquivos (multiple)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.fileShowList" />
            <span>Exibir Lista Prévia de Arquivos (showFileList)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.fileDisabled" />
            <span>Desabilitado (disabled)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: TREE VIEWS -->
  <div v-if="(activeTab === 'tree-views' || activeTab === 'trees') && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch; justify-content: center;">
          <div style="width: 100%; max-width: 400px; background: var(--ms-color-surface); border: 1px solid var(--ms-color-border); border-radius: var(--ms-radius-lg); padding: 16px;">
            <MsTree
              :items="batch.sampleTree"
              v-model:selected-key="batch.treeSelected"
              v-model:expanded-keys="batch.treeExpanded"
            />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades da MsTree</div>

        <div class="prop-row">
          <label class="prop-label">Nó Atualmente Selecionado</label>
          <div style="font-family: monospace; font-size: 1rem; padding: 6px 10px; background: var(--ms-color-surface-subtle); border-radius: var(--ms-radius-sm); border: 1px solid var(--ms-color-border);">
            {{ batch.treeSelected || '(nenhum)' }}
          </div>
        </div>

        <div class="prop-row" style="display: flex; gap: 8px;">
          <button class="ms-button ms-button--outline ms-button--size-sm" @click="batch.expandAllTrees">
            Expandir Tudo
          </button>
          <button class="ms-button ms-button--outline ms-button--size-sm" @click="batch.collapseAllTrees">
            Colapsar Tudo
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CONTEXT MENUS -->
  <div v-if="activeTab === 'context-menus' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%;">
            <MsContextMenu :items="batch.contextMenuItems">
              <div style="padding: 64px 24px; border: 2px dashed var(--ms-color-primary); border-radius: var(--ms-radius-xl); text-align: center; background: var(--ms-color-surface-subtle); cursor: context-menu;">
                <div style="font-size: 2rem; margin-bottom: 8px;">🖱️</div>
                <strong style="font-size: 1.125rem;">Clique com o botão direito nesta área delimitada</strong>
                <p class="ms-u-text-muted" style="margin: 8px 0 0;">
                  O menu de contexto corporativo do Magic-Style aparecerá nas coordenadas exatas do cursor.
                </p>
              </div>
            </MsContextMenu>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Itens do MsContextMenu</div>
        <p class="ms-u-text-muted">Ações registradas no gatilho de contexto:</p>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 0.875rem;">
          <div style="display: flex; justify-content: space-between;"><span>📋 Copiar Código</span><code>Ctrl+C</code></div>
          <div style="display: flex; justify-content: space-between;"><span>✏️ Editar Propriedades</span><code>—</code></div>
          <div style="display: flex; justify-content: space-between; color: var(--ms-color-danger);"><span>🗑️ Remover Item</span><code>Del</code></div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CHAT BUBBLES -->
  <div v-if="activeTab === 'chat-bubbles' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%; background: var(--ms-color-surface-subtle); padding: 24px; border-radius: var(--ms-radius-xl); border: 1px solid var(--ms-color-border);">
            <MsChatBubble
              v-for="msg in batch.chatMessages"
              :key="msg.id"
              :placement="msg.placement"
              :name="msg.name"
              :timestamp="msg.time"
              :status="msg.status"
              :tone="msg.placement === 'end' ? batch.chatTone : 'neutral'"
              :variant="batch.chatVariant"
            >
              <template #avatar>
                <span v-if="msg.placement === 'start'">🤖</span>
                <span v-else>👤</span>
              </template>
              {{ msg.text }}
            </MsChatBubble>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsChatBubble</div>

        <div class="prop-row">
          <label class="prop-label">Variante Visual (variant)</label>
          <select class="prop-select" v-model="batch.chatVariant">
            <option value="soft">soft (Suave com contraste otimizado)</option>
            <option value="solid">solid (Preenchimento sólido)</option>
            <option value="outline">outline (Apenas contorno)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tom das Respostas do Usuário (tone)</label>
          <select class="prop-select" v-model="batch.chatTone">
            <option value="primary">primary (#2e86de - Corporate Blue)</option>
            <option value="secondary">secondary (#e15f41 - Coral Red)</option>
            <option value="accent">accent (#341f97 - Deep Indigo)</option>
            <option value="neutral">neutral (#222f3e - Deep Ink)</option>
            <option value="success">success (#10ac84 - Teal Green)</option>
            <option value="info">info (#0abde3 - Cyan Blue)</option>
            <option value="warning">warning (#ff9f43 - Vibrant Orange)</option>
            <option value="danger">danger (#ee5253 - Alert Red)</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CAROUSELS -->
  <div v-if="activeTab === 'carousels' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%; max-width: 640px; margin: 0 auto;">
            <MsCarousel
              :total-slides="3"
              v-model="batch.carouselActive"
              :autoplay="batch.carouselAutoplay"
              :interval="batch.carouselInterval"
              :loop="batch.carouselLoop"
              :show-arrows="batch.carouselShowArrows"
              :show-indicators="batch.carouselShowIndicators"
            >
              <MsCarouselSlide style="background: linear-gradient(135deg, #2e86de, #0abde3); color: white; padding: 48px 24px; text-align: center; border-radius: var(--ms-radius-lg);">
                <h2 style="margin: 0 0 8px;">Slide 1: Inovação Corporativa</h2>
                <p style="margin: 0; opacity: 0.95;">Componentes de alta fidelidade com tokens semânticos.</p>
              </MsCarouselSlide>
              <MsCarouselSlide style="background: linear-gradient(135deg, #10ac84, #341f97); color: white; padding: 48px 24px; text-align: center; border-radius: var(--ms-radius-lg);">
                <h2 style="margin: 0 0 8px;">Slide 2: Arquitetura Enterprise</h2>
                <p style="margin: 0; opacity: 0.95;">Governança rigorosa e 100% de conformidade WCAG AA.</p>
              </MsCarouselSlide>
              <MsCarouselSlide style="background: linear-gradient(135deg, #ff9f43, #ee5253); color: white; padding: 48px 24px; text-align: center; border-radius: var(--ms-radius-lg);">
                <h2 style="margin: 0 0 8px;">Slide 3: Desempenho Imbatível</h2>
                <p style="margin: 0; opacity: 0.95;">Carregamento ultrarrápido sem dependências pesadas.</p>
              </MsCarouselSlide>
            </MsCarousel>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsCarousel</div>

        <div class="prop-row">
          <label class="prop-label">Slide Ativo (0 a 2): {{ batch.carouselActive }}</label>
          <input type="range" class="prop-range" min="0" max="2" v-model.number="batch.carouselActive" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.carouselAutoplay" />
            <span>Giro Automático (autoplay)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.carouselLoop" />
            <span>Loop Infinito (loop)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.carouselShowArrows" />
            <span>Exibir Setas de Navegação (showArrows)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="batch.carouselShowIndicators" />
            <span>Exibir Indicadores de Pontos (showIndicators)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: DOCKS -->
  <div v-if="activeTab === 'docks' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 48px; min-height: 280px; align-items: center; justify-content: center;">
          <MsDock :position="batch.dockPosition" :size="batch.dockSize">
            <MsDockItem label="Início" :active="batch.dockActive === 'home'" @click="batch.dockActive = 'home'">🏠</MsDockItem>
            <MsDockItem label="Pesquisa" :active="batch.dockActive === 'search'" @click="batch.dockActive = 'search'">🔍</MsDockItem>
            <MsDockItem label="Mensagens" :active="batch.dockActive === 'messages'" @click="batch.dockActive = 'messages'">💬</MsDockItem>
            <MsDockItem label="Configurações" :active="batch.dockActive === 'settings'" @click="batch.dockActive = 'settings'">⚙️</MsDockItem>
          </MsDock>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsDock</div>

        <div class="prop-row">
          <label class="prop-label">Posição de Ancoragem (position)</label>
          <select class="prop-select" v-model="batch.dockPosition">
            <option value="bottom">bottom (Inferior - macOS Style)</option>
            <option value="top">top (Superior)</option>
            <option value="left">left (Esquerda)</option>
            <option value="right">right (Direita)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Escala dos Ícones (size)</label>
          <select class="prop-select" v-model="batch.dockSize">
            <option value="sm">sm (Pequeno)</option>
            <option value="md">md (Médio - Padrão)</option>
            <option value="lg">lg (Grande)</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: COLOR PICKERS -->
  <div v-if="activeTab === 'color-pickers' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 32px; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
          <MsColorPicker v-model="batch.pickedColor" />

          <div style="display: flex; align-items: center; gap: 12px; background: var(--ms-color-surface-subtle); padding: 12px 20px; border-radius: var(--ms-radius-lg); border: 1px solid var(--ms-color-border);">
            <div :style="{ width: '36px', height: '36px', borderRadius: '8px', background: batch.pickedColor, border: '2px solid white', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }"></div>
            <div>
              <div style="font-size: 0.75rem; color: var(--ms-color-text-muted);">Cor Hexadecimal</div>
              <strong style="font-family: monospace; font-size: 1.125rem;">{{ batch.pickedColor }}</strong>
            </div>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsColorPicker</div>

        <div class="prop-row">
          <label class="prop-label">Paleta de Marca Rápida (8 Tons)</label>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #2e86de; color: white;" @click="batch.pickedColor = '#2e86de'">Primary</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #e15f41; color: white;" @click="batch.pickedColor = '#e15f41'">Secondary</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #341f97; color: white;" @click="batch.pickedColor = '#341f97'">Accent</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #222f3e; color: white;" @click="batch.pickedColor = '#222f3e'">Neutral</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #10ac84; color: white;" @click="batch.pickedColor = '#10ac84'">Success</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #0abde3; color: white;" @click="batch.pickedColor = '#0abde3'">Info</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #ff9f43; color: white;" @click="batch.pickedColor = '#ff9f43'">Warning</button>
            <button class="ms-button ms-button--solid ms-button--size-sm" style="background: #ee5253; color: white;" @click="batch.pickedColor = '#ee5253'">Danger</button>
          </div>
        </div>

        <div class="prop-row">
          <label class="prop-label">Entrada Manual Hex</label>
          <input class="prop-input" type="text" v-model="batch.pickedColor" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: SCROLL SPIES -->
  <div v-if="activeTab === 'scroll-spies' && subTab === 'preview'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="padding: 24px; min-height: 280px; align-items: stretch;">
          <div style="width: 100%; max-height: 320px; overflow-y: auto; padding: 24px; border: 1px solid var(--ms-color-border); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface);">
            <div id="sec-visao-geral" style="margin-bottom: 80px;">
              <h3>1. Visão Geral</h3>
              <p class="ms-u-text-muted">Apresentação geral da plataforma Magic-Style e seus princípios de design unificados com tokens semânticos.</p>
            </div>
            <div id="sec-arquitetura" style="margin-bottom: 80px;">
              <h3>2. Arquitetura</h3>
              <p class="ms-u-text-muted">Divisão estrita em monorepo com pacotes isolados, sem arestas proibidas e total conformidade com a Baseline 1.2.</p>
            </div>
            <div id="sec-acessibilidade" style="margin-bottom: 80px;">
              <h3>3. Acessibilidade</h3>
              <p class="ms-u-text-muted">Total conformidade com WAI-ARIA 1.2, navegação por teclado e suporte nativo a leitores de tela em todos os 51 componentes.</p>
            </div>
            <div id="sec-conformidade" style="margin-bottom: 80px;">
              <h3>4. Conformidade WCAG</h3>
              <p class="ms-u-text-muted">Garantia de contraste mínimo de 4.5:1 em todas as paletas de cores da marca, nos modos claro e escuro.</p>
            </div>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>{{ generatedCode }}</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Sumário Ativo (MsScrollSpy)</div>
        <p class="ms-u-text-muted">Role a caixa de conteúdo ao lado para verificar a navegação dinâmica:</p>
        <MsScrollSpy :items="batch.scrollSpyItems" />
      </div>
    </div>
  </div>
`;
