import { ref } from "vue";

export function useBatch9To14() {
  // --- BATCH 1: TIPOGRAFIA & CONTEÚDO ---
  const codeTone = ref("primary");
  const codeVariant = ref("subtle");
  const codeSize = ref("md");
  const codeCopyable = ref(true);

  const codeBlockSnippet = ref(
    'import { MsButton, MsCard } from "@magic-style/vue";\nimport "@magic-style/css/components/button.css";\n\nexport default function App() {\n  const count = ref(42);\n  return <MsButton tone="primary">Olá MagicStyle ({count.value})</MsButton>;\n}',
  );
  const codeBlockLang = ref("typescript");
  const codeBlockFile = ref("App.vue");
  const codeBlockLines = ref(true);
  const codeBlockCollapsible = ref(true);

  const linkVariant = ref("primary");
  const linkUnderline = ref("hover");
  const linkExternal = ref(true);
  const linkDisabled = ref(false);

  const blockquoteVariant = ref("card");
  const blockquoteTone = ref("primary");
  const blockquoteAuthor = ref("Ada Lovelace");
  const blockquoteRole = ref("Pioneira da Computação");

  const labelRequired = ref(true);
  const labelOptional = ref(false);
  const labelTooltip = ref("Informe seu e-mail corporativo válido.");
  const labelSize = ref("md");

  const truncateLines = ref(2);
  const truncatePosition = ref("end");
  const truncateExpandable = ref(true);
  const truncateExpanded = ref(false);
  const truncateText = ref(
    "Magic-Style é um Design System de nível corporativo desenvolvido com foco em acessibilidade extrema (WCAG 2.2 AAA), desempenho nativo em CSS com tokens semânticos e integração fluida com Vue 3.",
  );

  // --- BATCH 2: FORMULÁRIOS AVANÇADOS ---
  const passwordValue = ref("Magic@2026!");
  const passwordStrength = ref(true);
  const passwordCriteria = ref(true);

  const maskPreset = ref("cpf");
  const maskedValue = ref("");
  const unmaskedValue = ref("");

  const pinValue = ref("1234");
  const pinLength = ref(4);
  const pinMask = ref(false);
  const pinSeparator = ref("-");

  const wizardSteps = [
    { id: "step1", title: "Conta", description: "Credenciais de acesso" },
    { id: "step2", title: "Perfil", description: "Dados corporativos" },
    { id: "step3", title: "Confirmação", description: "Revisão e ativação" },
  ];
  const wizardActive = ref(0);

  // --- BATCH 3: NAVEGAÇÃO & SELEÇÃO ---
  const paginationCurrent = ref(1);
  const paginationTotal = ref(120);
  const paginationSize = ref(10);
  const paginationJumper = ref(true);

  const toggleGroupValue = ref("center");
  const toggleGroupMulti = ref(["bold"]);
  const toggleGroupVariant = ref("solid");

  const collapseOpen = ref(false);
  const collapseVariant = ref("bordered");

  // --- BATCH 4: SELETORES & COMANDOS ---
  const iconSelected = ref("heart");
  const iconDisabled = ref(false);
  const emojiSelected = ref("🚀");
  const emojiDisabled = ref(false);
  const dateSelected = ref("2026-09-14");
  const datePickerMode = ref("date");
  const dateRangeSelected = ref({ start: "2026-09-14", end: "2026-09-21" });
  const timeSelected = ref("14:30");
  const datetimeSelected = ref("2026-09-14 14:30");
  const dateClearable = ref(true);
  const dateMinuteStep = ref(5);
  const commandPaletteOpen = ref(false);
  const commandPaletteItems = [
    { id: "docs", label: "Ir para Documentação", group: "Navegação", shortcut: "G D" },
    { id: "components", label: "Explorar Componentes", group: "Navegação", shortcut: "G C" },
    { id: "tokens", label: "Inspecionar Design Tokens", group: "Navegação", shortcut: "G T" },
    { id: "theme", label: "Alternar Tema Claro / Escuro", group: "Ações Rápidas", shortcut: "⌘ T" },
    { id: "copy-cdn", label: "Copiar link do CDN CSS", group: "Ações Rápidas", shortcut: "⌘ C" },
    { id: "feedback", label: "Enviar Feedback", group: "Geral", shortcut: "⌘ F" },
  ];

  // --- BATCH 5: SUPERFÍCIES & MÍDIA ---
  const canvasPattern = ref("dots");
  const canvasSize = ref(24);
  const canvasInteractive = ref(false);

  const bentoCols = ref(3);
  const bentoGap = ref("md");
  const bentoDense = ref(false);
  const bentoItemVariant = ref("default");
  const bentoInteractive = ref(true);

  const masonryCols = ref(3);
  const masonryGap = ref("md");

  const splitValue = ref(50);
  const splitDirection = ref("horizontal");

  const lightboxOpen = ref(false);
  const lightboxIndex = ref(0);
  const lightboxItems = [
    {
      src: "https://picsum.photos/id/1018/1000/600",
      title: "Montanhas Nevadas",
      caption: "Paisagem alpina no inverno",
    },
    {
      src: "https://picsum.photos/id/1015/1000/600",
      title: "Vale do Rio",
      caption: "Cânion verdejante com águas cristalinas",
    },
    {
      src: "https://picsum.photos/id/1019/1000/600",
      title: "Oceano Profundo",
      caption: "Ondas ao entardecer no Pacífico",
    },
  ];

  const droppedFilesCount = ref(0);
  const onFilesDropped = (files) => {
    droppedFilesCount.value += files.length;
  };

  // --- BATCH 6: MOVIMENTO & EXPERIÊNCIA ---
  const marqueeSpeed = ref(20);
  const marqueeReverse = ref(false);
  const marqueePause = ref(true);

  const pointerVariant = ref("ring");
  const pointerActive = ref(false);

  const fabPosition = ref("bottom-right");
  const fabActions = [
    { icon: "📝", label: "Novo Registro", onClick: () => window.alert("Ação: Novo Registro") },
    { icon: "📤", label: "Exportar Dados", onClick: () => window.alert("Ação: Exportar Dados") },
    { icon: "⚙️", label: "Configurações", onClick: () => window.alert("Ação: Configurações") },
  ];

  return {
    codeTone,
    codeVariant,
    codeSize,
    codeCopyable,
    codeBlockSnippet,
    codeBlockLang,
    codeBlockFile,
    codeBlockLines,
    codeBlockCollapsible,
    linkVariant,
    linkUnderline,
    linkExternal,
    linkDisabled,
    blockquoteVariant,
    blockquoteTone,
    blockquoteAuthor,
    blockquoteRole,
    labelRequired,
    labelOptional,
    labelTooltip,
    labelSize,
    truncateLines,
    truncatePosition,
    truncateExpandable,
    truncateExpanded,
    truncateText,
    passwordValue,
    passwordStrength,
    passwordCriteria,
    maskPreset,
    maskedValue,
    unmaskedValue,
    pinValue,
    pinLength,
    pinMask,
    pinSeparator,
    wizardSteps,
    wizardActive,
    paginationCurrent,
    paginationTotal,
    paginationSize,
    paginationJumper,
    toggleGroupValue,
    toggleGroupMulti,
    toggleGroupVariant,
    collapseOpen,
    collapseVariant,
    iconSelected,
    iconDisabled,
    emojiSelected,
    emojiDisabled,
    dateSelected,
    datePickerMode,
    dateRangeSelected,
    timeSelected,
    datetimeSelected,
    dateClearable,
    dateMinuteStep,
    commandPaletteOpen,
    commandPaletteItems,
    canvasPattern,
    canvasSize,
    canvasInteractive,
    bentoCols,
    bentoGap,
    bentoDense,
    bentoItemVariant,
    bentoInteractive,
    masonryCols,
    masonryGap,
    splitValue,
    splitDirection,
    lightboxOpen,
    lightboxIndex,
    lightboxItems,
    droppedFilesCount,
    onFilesDropped,
    marqueeSpeed,
    marqueeReverse,
    marqueePause,
    pointerVariant,
    pointerActive,
    fabPosition,
    fabActions,
  };
}

export const batch9To14TemplatesHtml = `
  <!-- TAB: CODE (INLINE) -->
  <div v-if="activeTab === 'code'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 20px; align-items: flex-start; justify-content: center;">
          <div style="font-size: 15px; line-height: 1.8;">
            Instale o pacote com
            <MsCode :tone="b9.codeTone" :variant="b9.codeVariant" :size="b9.codeSize" :copyable="b9.codeCopyable">
              pnpm add @magic-style/vue
            </MsCode>
            em sua aplicação.
          </div>
          <div style="font-size: 14px; line-height: 1.8; color: var(--ms-color-text-secondary);">
            Importe o componente: <MsCode tone="primary" variant="subtle">import { MsButton } from '@magic-style/vue'</MsCode>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <MsCode tone="success" variant="solid">SUCESSO</MsCode>
            <MsCode tone="warning" variant="outline">AVISO</MsCode>
            <MsCode tone="danger" variant="subtle">ERRO CRÍTICO</MsCode>
            <MsCode tone="info" variant="subtle">INFO</MsCode>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsCode tone="{{ b9.codeTone }}" variant="{{ b9.codeVariant }}" size="{{ b9.codeSize }}" :copyable="{{ b9.codeCopyable }}"&gt;pnpm add @magic-style/vue&lt;/MsCode&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsCode</div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone)</label>
          <select class="prop-select" v-model="b9.codeTone">
            <option value="default">default</option>
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
            <option value="danger">danger</option>
            <option value="info">info</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Variante (variant)</label>
          <select class="prop-select" v-model="b9.codeVariant">
            <option value="subtle">subtle</option>
            <option value="outline">outline</option>
            <option value="solid">solid</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tamanho (size)</label>
          <select class="prop-select" v-model="b9.codeSize">
            <option value="sm">sm (Pequeno)</option>
            <option value="md">md (Médio)</option>
            <option value="lg">lg (Grande)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.codeCopyable" />
            <span>Exibir Botão Copiar (copyable)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CODE BLOCK -->
  <div v-if="activeTab === 'code-block'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div style="width: 100%; margin-bottom: var(--ms-space-2);">
          <MsCodeBlock
            :code="b9.codeBlockSnippet"
            :language="b9.codeBlockLang"
            :filename="b9.codeBlockFile"
            :show-line-numbers="b9.codeBlockLines"
            :collapsible="b9.codeBlockCollapsible"
          />
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsCodeBlock :code="code" language="{{ b9.codeBlockLang }}" filename="{{ b9.codeBlockFile }}" :show-line-numbers="{{ b9.codeBlockLines }}" :collapsible="{{ b9.codeBlockCollapsible }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsCodeBlock</div>

        <div class="prop-row">
          <label class="prop-label">Nome do Arquivo (filename)</label>
          <input class="prop-input" type="text" v-model="b9.codeBlockFile" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Linguagem de Sintaxe (language)</label>
          <select class="prop-select" v-model="b9.codeBlockLang">
            <option value="typescript">typescript</option>
            <option value="javascript">javascript</option>
            <option value="html">html / vue</option>
            <option value="css">css</option>
            <option value="json">json</option>
            <option value="bash">bash</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.codeBlockLines" />
            <span>Exibir Números de Linha (showLineNumbers)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.codeBlockCollapsible" />
            <span>Expansão Retrátil (collapsible)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: LINK -->
  <div v-if="activeTab === 'link'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <MsLink
            href="https://magicstyle.design"
            :variant="b9.linkVariant"
            :underline="b9.linkUnderline"
            :external="b9.linkExternal"
            :disabled="b9.linkDisabled"
            style="font-size: 16px; font-weight: 500;"
          >
            Visitar Documentação MagicStyle
          </MsLink>
          <p style="color: var(--ms-color-text-secondary); font-size: 13px; margin: 0;">
            Links semânticos e acessíveis com suporte a foco tonal e detecção de destino externo.
          </p>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsLink href="https://magicstyle.design" variant="{{ b9.linkVariant }}" underline="{{ b9.linkUnderline }}" :external="{{ b9.linkExternal }}" :disabled="{{ b9.linkDisabled }}"&gt;Visitar Documentação&lt;/MsLink&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsLink</div>

        <div class="prop-row">
          <label class="prop-label">Variante (variant)</label>
          <select class="prop-select" v-model="b9.linkVariant">
            <option value="default">default</option>
            <option value="primary">primary</option>
            <option value="muted">muted</option>
            <option value="subtle">subtle</option>
            <option value="danger">danger</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Sublinhado (underline)</label>
          <select class="prop-select" v-model="b9.linkUnderline">
            <option value="always">always (Sempre visível)</option>
            <option value="hover">hover (Apenas ao passar mouse)</option>
            <option value="none">none (Sem sublinhado)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.linkExternal" />
            <span>Link Externo com Ícone (external)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.linkDisabled" />
            <span>Desabilitado (disabled)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: BLOCKQUOTE -->
  <div v-if="activeTab === 'blockquote'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="max-width: 560px; width: 100%;">
            <MsBlockquote
              :variant="b9.blockquoteVariant"
              :tone="b9.blockquoteTone"
              :author="b9.blockquoteAuthor"
              :author-role="b9.blockquoteRole"
              cite="https://wikipedia.org/wiki/Ada_Lovelace"
              icon
            >
              O mecanismo analítico tece padrões algébricos assim como o tear de Jacquard tece flores e folhas.
            </MsBlockquote>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsBlockquote variant="{{ b9.blockquoteVariant }}" tone="{{ b9.blockquoteTone }}" author="{{ b9.blockquoteAuthor }}" author-role="{{ b9.blockquoteRole }}" icon&gt;...&lt;/MsBlockquote&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsBlockquote</div>

        <div class="prop-row">
          <label class="prop-label">Variante (variant)</label>
          <select class="prop-select" v-model="b9.blockquoteVariant">
            <option value="bordered">bordered</option>
            <option value="card">card</option>
            <option value="minimal">minimal</option>
            <option value="filled">filled</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Tom Semântico (tone)</label>
          <select class="prop-select" v-model="b9.blockquoteTone">
            <option value="default">default</option>
            <option value="primary">primary</option>
            <option value="accent">accent</option>
            <option value="warning">warning</option>
            <option value="info">info</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Autor (author)</label>
          <input class="prop-input" type="text" v-model="b9.blockquoteAuthor" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Cargo / Função (authorRole)</label>
          <input class="prop-input" type="text" v-model="b9.blockquoteRole" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: LABEL -->
  <div v-if="activeTab === 'label'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="display: flex; flex-direction: column; gap: 8px; width: 340px;">
            <MsLabel
              for="demo-email"
              :required="b9.labelRequired"
              :optional="b9.labelOptional"
              :tooltip="b9.labelTooltip"
              :size="b9.labelSize"
            >
              Endereço de E-mail
            </MsLabel>
            <input id="demo-email" type="email" placeholder="usuario@empresa.com" class="prop-input" />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsLabel for="demo-email" :required="{{ b9.labelRequired }}" :optional="{{ b9.labelOptional }}" tooltip="{{ b9.labelTooltip }}" size="{{ b9.labelSize }}"&gt;Endereço de E-mail&lt;/MsLabel&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsLabel</div>

        <div class="prop-row">
          <label class="prop-label">Tamanho (size)</label>
          <select class="prop-select" v-model="b9.labelSize">
            <option value="sm">sm (Pequeno)</option>
            <option value="md">md (Médio)</option>
            <option value="lg">lg (Grande)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Texto do Tooltip</label>
          <input class="prop-input" type="text" v-model="b9.labelTooltip" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.labelRequired" />
            <span>Indicador Obrigatório (*) (required)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.labelOptional" />
            <span>Indicador Opcional (optional)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: TRUNCATE -->
  <div v-if="activeTab === 'truncate'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="max-width: 440px; border: 1px dashed var(--ms-color-border-subtle); padding: 16px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised);">
            <MsTruncate
              :text="b9.truncateText"
              :lines="b9.truncateLines"
              :position="b9.truncatePosition"
              :expandable="b9.truncateExpandable"
              v-model:expanded="b9.truncateExpanded"
            />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsTruncate :text="text" :lines="{{ b9.truncateLines }}" position="{{ b9.truncatePosition }}" :expandable="{{ b9.truncateExpandable }}" v-model:expanded="isExpanded" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsTruncate</div>

        <div class="prop-row">
          <label class="prop-label">Linhas Visíveis (lines): {{ b9.truncateLines }}</label>
          <input type="range" min="1" max="5" v-model.number="b9.truncateLines" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Posição do Truncamento</label>
          <select class="prop-select" v-model="b9.truncatePosition">
            <option value="end">end (No final)</option>
            <option value="middle">middle (No meio)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.truncateExpandable" />
            <span>Botão Expandir / Recolher (expandable)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: PASSWORD INPUT -->
  <div v-if="activeTab === 'password-input'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="width: 340px;">
            <MsPasswordInput
              v-model="b9.passwordValue"
              :show-strength-meter="b9.passwordStrength"
              :show-criteria="b9.passwordCriteria"
            />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsPasswordInput v-model="password" :show-strength-meter="{{ b9.passwordStrength }}" :show-criteria="{{ b9.passwordCriteria }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsPasswordInput</div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.passwordStrength" />
            <span>Barra de Força (showStrengthMeter)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.passwordCriteria" />
            <span>Checklist de Critérios (showCriteria)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: MASKED INPUT -->
  <div v-if="activeTab === 'masked-input'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <div style="width: 340px; display: flex; flex-direction: column; gap: 12px;">
            <MsMaskedInput
              v-model="b9.maskedValue"
              v-model:unmasked="b9.unmaskedValue"
              :mask="b9.maskPreset"
              clearable
            />
            <div style="font-size: 12px; color: var(--ms-color-text-secondary); background: var(--ms-color-surface-raised); padding: 8px 12px; border-radius: var(--ms-radius-sm); border: 1px solid var(--ms-color-border-subtle);">
              <div><strong>Formatado (v-model):</strong> {{ b9.maskedValue || '(vazio)' }}</div>
              <div><strong>Sem Máscara (unmasked):</strong> {{ b9.unmaskedValue || '(vazio)' }}</div>
            </div>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsMaskedInput v-model="val" v-model:unmasked="raw" mask="{{ b9.maskPreset }}" clearable /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsMaskedInput</div>

        <div class="prop-row">
          <label class="prop-label">Preset de Máscara (mask)</label>
          <select class="prop-select" v-model="b9.maskPreset">
            <option value="cpf">CPF (999.999.999-99)</option>
            <option value="cnpj">CNPJ (99.999.999/9999-99)</option>
            <option value="phone">Telefone (99) 99999-9999</option>
            <option value="cep">CEP (99999-999)</option>
            <option value="date">Data (99/99/9999)</option>
            <option value="credit-card">Cartão de Crédito</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: PIN INPUT -->
  <div v-if="activeTab === 'pin-input'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <MsPinInput
            v-model="b9.pinValue"
            :length="b9.pinLength"
            :mask="b9.pinMask"
            :separator="b9.pinSeparator"
          />
          <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Código Digitado: <strong>{{ b9.pinValue || '(vazio)' }}</strong></span>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsPinInput v-model="pin" :length="{{ b9.pinLength }}" :mask="{{ b9.pinMask }}" separator="{{ b9.pinSeparator }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsPinInput</div>

        <div class="prop-row">
          <label class="prop-label">Quantidade de Dígitos (length)</label>
          <select class="prop-select" v-model.number="b9.pinLength">
            <option :value="4">4 dígitos</option>
            <option :value="6">6 dígitos</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Separador (separator)</label>
          <input class="prop-input" type="text" v-model="b9.pinSeparator" maxlength="2" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.pinMask" />
            <span>Ocultar Dígitos (Password / PinMask)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: FORM WIZARD -->
  <div v-if="activeTab === 'form-wizard'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 320px; padding: 24px; align-items: stretch;">
          <div style="width: 100%;">
            <MsFormWizard
              :steps="b9.wizardSteps"
              v-model="b9.wizardActive"
            >
              <template #step1>
                <div style="padding: 16px 0;">
                  <h3 style="margin: 0 0 8px 0;">Passo 1: Criar Conta</h3>
                  <p style="margin: 0; color: var(--ms-color-text-secondary);">Insira seus dados para iniciar a configuração da sua conta empresarial no Magic-Style.</p>
                </div>
              </template>
              <template #step2>
                <div style="padding: 16px 0;">
                  <h3 style="margin: 0 0 8px 0;">Passo 2: Dados Corporativos</h3>
                  <p style="margin: 0; color: var(--ms-color-text-secondary);">Defina o nome da sua organização e adicione os membros iniciais da equipe técnica.</p>
                </div>
              </template>
              <template #step3>
                <div style="padding: 16px 0;">
                  <h3 style="margin: 0 0 8px 0;">Passo 3: Ativação Concluída!</h3>
                  <p style="margin: 0; color: var(--ms-color-text-secondary);">Seu espaço de trabalho está configurado e pronto para deploy em produção.</p>
                </div>
              </template>
            </MsFormWizard>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsFormWizard :steps="steps" v-model="currentStep" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsFormWizard</div>

        <div class="prop-row">
          <label class="prop-label">Passo Atual</label>
          <div style="font-size: 14px; font-weight: 600; color: var(--ms-color-text-primary);">
            {{ b9.wizardActive + 1 }} de {{ b9.wizardSteps.length }}
          </div>
        </div>

        <div class="prop-row" style="display: flex; gap: 8px; flex-direction: row;">
          <button
            type="button"
            class="prop-input"
            style="cursor: pointer; text-align: center; font-weight: 600;"
            :disabled="b9.wizardActive === 0"
            @click="b9.wizardActive = Math.max(0, b9.wizardActive - 1)"
          >
            ← Anterior
          </button>
          <button
            type="button"
            class="prop-input"
            style="cursor: pointer; text-align: center; font-weight: 600; background: var(--ms-color-interactive-primary); color: var(--ms-color-text-on-accent);"
            :disabled="b9.wizardActive === b9.wizardSteps.length - 1"
            @click="b9.wizardActive = Math.min(b9.wizardSteps.length - 1, b9.wizardActive + 1)"
          >
            Próximo →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: PAGINATION -->
  <div v-if="activeTab === 'pagination'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <MsPagination
            :total="b9.paginationTotal"
            :page-size="b9.paginationSize"
            v-model:current-page="b9.paginationCurrent"
            :show-jumper="b9.paginationJumper"
          />
          <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Página Atual: <strong>{{ b9.paginationCurrent }}</strong></span>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsPagination :total="{{ b9.paginationTotal }}" :page-size="{{ b9.paginationSize }}" v-model:current-page="page" :show-jumper="{{ b9.paginationJumper }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsPagination</div>

        <div class="prop-row">
          <label class="prop-label">Total de Itens: {{ b9.paginationTotal }}</label>
          <input type="range" min="20" max="300" step="10" v-model.number="b9.paginationTotal" />
        </div>

        <div class="prop-row">
          <label class="prop-label">Itens por Página (pageSize)</label>
          <select class="prop-select" v-model.number="b9.paginationSize">
            <option :value="10">10 por página</option>
            <option :value="20">20 por página</option>
            <option :value="50">50 por página</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.paginationJumper" />
            <span>Exibir Caixa de Salto (showJumper)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: TOGGLE GROUP -->
  <div v-if="activeTab === 'toggle-group'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 24px; align-items: center; justify-content: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Seleção Única (Alinhamento):</span>
            <MsToggleGroup
              v-model="b9.toggleGroupValue"
              :variant="b9.toggleGroupVariant"
              :items="[
                { value: 'left', label: 'Esquerda' },
                { value: 'center', label: 'Centro' },
                { value: 'right', label: 'Direita' },
                { value: 'justify', label: 'Justificado' }
              ]"
            />
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Múltipla Seleção (Estilos):</span>
            <MsToggleGroup
              v-model="b9.toggleGroupMulti"
              multiple
              :variant="b9.toggleGroupVariant"
              :items="[
                { value: 'bold', label: 'Negrito' },
                { value: 'italic', label: 'Itálico' },
                { value: 'underline', label: 'Sublinhado' }
              ]"
            />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsToggleGroup v-model="alignment" variant="{{ b9.toggleGroupVariant }}" :items="items" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsToggleGroup</div>

        <div class="prop-row">
          <label class="prop-label">Variante (variant)</label>
          <select class="prop-select" v-model="b9.toggleGroupVariant">
            <option value="solid">solid</option>
            <option value="outline">outline</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: COLLAPSE -->
  <div v-if="activeTab === 'collapse'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="width: 100%; max-width: 520px;">
            <MsCollapse
              v-model="b9.collapseOpen"
              title="Como funciona a arquitetura agnóstica do Magic-Style?"
              :variant="b9.collapseVariant"
            >
              A camada CSS (@magic-style/css) provê classes puras e semânticas baseadas na DTCG. A camada Vue (@magic-style/vue) encapsula conformidade WCAG 2.2 AAA, gerenciamento de foco, v-model reativo e navegação por teclado sem acoplamento de estilo embutido.
            </MsCollapse>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsCollapse v-model="isOpen" title="..." variant="{{ b9.collapseVariant }}"&gt;...&lt;/MsCollapse&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsCollapse</div>

        <div class="prop-row">
          <label class="prop-label">Variante (variant)</label>
          <select class="prop-select" v-model="b9.collapseVariant">
            <option value="bordered">bordered</option>
            <option value="card">card</option>
            <option value="ghost">ghost</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.collapseOpen" />
            <span>Aberto (v-model)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: ICON PICKER -->
  <div v-if="activeTab === 'icon-picker'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <MsIconPicker v-model="b9.iconSelected" :disabled="b9.iconDisabled" />
          <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Ícone Selecionado: <strong>{{ b9.iconSelected }}</strong></span>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsIconPicker v-model="icon" :disabled="{{ b9.iconDisabled }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsIconPicker</div>
        <div class="prop-row">
          <label class="prop-label">Ícone Atual (ID)</label>
          <input class="prop-input" type="text" v-model="b9.iconSelected" />
        </div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.iconDisabled" />
            <span>Desabilitado (disabled)</span>
          </label>
        </div>
        <div class="prop-row">
          <label class="prop-label">Atalhos de Ícones:</label>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button
              v-for="ic in ['home', 'calendar', 'clock', 'settings', 'bell', 'star', 'copy', 'shield']"
              :key="ic"
              type="button"
              class="prop-input"
              style="cursor: pointer; width: auto; padding: 4px 8px; font-size: 11px;"
              @click="b9.iconSelected = ic"
            >
              {{ ic }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: EMOJI PICKER -->
  <div v-if="activeTab === 'emoji-picker'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <MsEmojiPicker v-model="b9.emojiSelected" :disabled="b9.emojiDisabled" />
          <span style="font-size: 40px; margin-top: 8px;">{{ b9.emojiSelected }}</span>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsEmojiPicker v-model="emoji" :disabled="{{ b9.emojiDisabled }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsEmojiPicker</div>
        <div class="prop-row">
          <label class="prop-label">Emoji Selecionado</label>
          <input class="prop-input" type="text" v-model="b9.emojiSelected" />
        </div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.emojiDisabled" />
            <span>Desabilitado (disabled)</span>
          </label>
        </div>
        <div class="prop-row">
          <label class="prop-label">Atalhos Rápidos:</label>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button
              v-for="em in ['🚀', '🔥', '✨', '💡', '❤️', '🎉', '🐶', '🍔']"
              :key="em"
              type="button"
              class="prop-input"
              style="cursor: pointer; width: auto; padding: 4px 8px; font-size: 16px;"
              @click="b9.emojiSelected = em"
            >
              {{ em }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: DATE PICKER -->
  <div v-if="activeTab === 'date-picker'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 280px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <div style="width: 320px;">
            <MsDatePicker
              v-if="b9.datePickerMode === 'date'"
              v-model="b9.dateSelected"
              mode="date"
              :clearable="b9.dateClearable"
            />
            <MsDatePicker
              v-else-if="b9.datePickerMode === 'range'"
              v-model="b9.dateRangeSelected"
              mode="range"
              :clearable="b9.dateClearable"
            />
            <MsDatePicker
              v-else-if="b9.datePickerMode === 'time'"
              v-model="b9.timeSelected"
              mode="time"
              :minute-step="b9.dateMinuteStep"
              :clearable="b9.dateClearable"
            />
            <MsDatePicker
              v-else-if="b9.datePickerMode === 'datetime'"
              v-model="b9.datetimeSelected"
              mode="datetime"
              :minute-step="b9.dateMinuteStep"
              :clearable="b9.dateClearable"
            />
          </div>
          <div style="font-size: 13px; color: var(--ms-color-text-secondary); text-align: center;">
            <span v-if="b9.datePickerMode === 'date'">Data Selecionada: <strong>{{ b9.dateSelected }}</strong></span>
            <span v-else-if="b9.datePickerMode === 'range'">Intervalo: <strong>{{ b9.dateRangeSelected.start }} &rarr; {{ b9.dateRangeSelected.end }}</strong></span>
            <span v-else-if="b9.datePickerMode === 'time'">Horário: <strong>{{ b9.timeSelected }}</strong></span>
            <span v-else-if="b9.datePickerMode === 'datetime'">Data e Horário: <strong>{{ b9.datetimeSelected }}</strong></span>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsDatePicker v-model="value" mode="{{ b9.datePickerMode }}" :clearable="{{ b9.dateClearable }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsDatePicker</div>
        <div class="prop-row">
          <label class="prop-label">Modo do Seletor (mode)</label>
          <select class="prop-select" v-model="b9.datePickerMode">
            <option value="date">Data Única (date)</option>
            <option value="range">Intervalo de Datas (range)</option>
            <option value="time">Apenas Horário (time)</option>
            <option value="datetime">Misto: Data + Horário (datetime)</option>
          </select>
        </div>
        <div class="prop-row" v-if="b9.datePickerMode === 'time' || b9.datePickerMode === 'datetime'">
          <label class="prop-label">Passo dos Minutos (minuteStep)</label>
          <select class="prop-select" v-model.number="b9.dateMinuteStep">
            <option :value="1">1 minuto</option>
            <option :value="5">5 minutos</option>
            <option :value="10">10 minutos</option>
            <option :value="15">15 minutos</option>
            <option :value="30">30 minutos</option>
          </select>
        </div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.dateClearable" />
            <span>Botão Limpar (clearable)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: COMMAND PALETTE -->
  <div v-if="activeTab === 'command-palette'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <p style="color: var(--ms-color-text-secondary); margin: 0; font-size: 14px;">
            Pressione <strong>Ctrl + K</strong> (ou <strong>Cmd + K</strong>) ou use o acionador abaixo:
          </p>
          <button
            type="button"
            class="prop-input"
            style="cursor: pointer; width: auto; padding: 10px 20px; font-weight: 600; background: var(--ms-color-interactive-primary); color: var(--ms-color-text-on-accent);"
            @click="b9.commandPaletteOpen = true"
          >
            Abrir Command Palette
          </button>
          <MsCommandPalette v-model="b9.commandPaletteOpen" :items="b9.commandPaletteItems" />
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsCommandPalette v-model="isOpen" :items="commands" @select="run" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsCommandPalette</div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.commandPaletteOpen" />
            <span>Paleta Ativa (v-model)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CANVAS -->
  <div v-if="activeTab === 'canvas'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 320px; padding: 24px; align-items: stretch;">
          <div style="width: 100%;">
            <MsCanvas :pattern="b9.canvasPattern" :size="b9.canvasSize" :interactive="b9.canvasInteractive">
              <div style="background: var(--ms-color-surface-raised); padding: 24px; border-radius: var(--ms-radius-lg); box-shadow: var(--ms-shadow-md); text-align: center; border: 1px solid var(--ms-color-border-subtle); margin: 24px auto; max-width: 440px;">
                <h4 style="margin: 0 0 8px 0;">Superfície de Workspace</h4>
                <p style="margin: 0; font-size: 13px; color: var(--ms-color-text-secondary);">Padrão ativo: <strong>{{ b9.canvasPattern }}</strong> ({{ b9.canvasSize }}px)</p>
              </div>
            </MsCanvas>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsCanvas pattern="{{ b9.canvasPattern }}" :size="{{ b9.canvasSize }}" :interactive="{{ b9.canvasInteractive }}"&gt;...&lt;/MsCanvas&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsCanvas</div>

        <div class="prop-row">
          <label class="prop-label">Padrão Geométrico (pattern)</label>
          <select class="prop-select" v-model="b9.canvasPattern">
            <option value="dots">Pontos (dots)</option>
            <option value="grid">Grade Cartesiana (grid)</option>
            <option value="cross">Cruzes (cross)</option>
            <option value="lines">Linhas Diagonais (lines)</option>
            <option value="isometric">Isométrica (isometric)</option>
            <option value="diagonal-stripes">Faixas Diagonais (diagonal-stripes)</option>
            <option value="honeycomb">Favo de Mel / Hexagonal (honeycomb)</option>
            <option value="waves">Ondas Decorativas (waves)</option>
            <option value="checkerboard">Tabuleiro de Xadrez (checkerboard)</option>
            <option value="plus">Sinais de Mais (plus)</option>
            <option value="blueprint">Papel Milimetrado Azul (blueprint)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Espaçamento da Grade: {{ b9.canvasSize }}px</label>
          <input type="range" min="12" max="64" step="4" v-model.number="b9.canvasSize" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.canvasInteractive" />
            <span>Cursor Interativo Grab/Grabbing</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: BENTO GRID -->
  <div v-if="activeTab === 'bento-grid'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 320px; padding: 24px; align-items: stretch;">
          <div style="width: 100%;">
            <MsBentoGrid :cols="b9.bentoCols" :gap="b9.bentoGap" :dense="b9.bentoDense">
              <MsBentoItem :col-span="b9.bentoCols > 1 ? 2 : 1" :row-span="2" :variant="b9.bentoItemVariant" :interactive="b9.bentoInteractive">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <span class="ms-badge" data-tone="primary" data-variant="soft">Destaque</span>
                  <span style="font-size: 12px; color: var(--ms-color-text-muted);">Span 2x2</span>
                </div>
                <h3 style="margin: 0 0 8px 0;">Painel de Inteligência Central</h3>
                <p style="margin: 0 0 16px 0; color: var(--ms-color-text-secondary); font-size: 13px;">Visão executiva unificada de indicadores de desempenho e infraestrutura corporativa.</p>
                <div style="margin-top: auto; display: flex; gap: 8px;">
                  <span class="ms-badge" data-tone="success">99.98% SLA</span>
                  <span class="ms-badge" data-tone="info">v2.4 Ativa</span>
                </div>
              </MsBentoItem>
              <MsBentoItem :col-span="1" :row-span="1" :variant="b9.bentoItemVariant" :interactive="b9.bentoInteractive">
                <span style="font-size: 12px; color: var(--ms-color-text-muted);">Usuários Ativos</span>
                <p style="margin: 6px 0 0 0; font-size: 24px; font-weight: 700; color: var(--ms-color-brand-primary);">12.450</p>
                <span style="font-size: 11px; color: var(--ms-color-status-success); margin-top: 4px;">&uarr; +14% este mês</span>
              </MsBentoItem>
              <MsBentoItem :col-span="1" :row-span="1" :variant="b9.bentoItemVariant" :interactive="b9.bentoInteractive">
                <span style="font-size: 12px; color: var(--ms-color-text-muted);">Tempo de Resposta</span>
                <p style="margin: 6px 0 0 0; font-size: 24px; font-weight: 700; color: var(--ms-color-status-success);">38ms</p>
                <span style="font-size: 11px; color: var(--ms-color-text-muted); margin-top: 4px;">Média p95 global</span>
              </MsBentoItem>
              <MsBentoItem :col-span="b9.bentoCols > 2 ? 3 : (b9.bentoCols > 1 ? 2 : 1)" :row-span="1" :variant="b9.bentoItemVariant" :interactive="b9.bentoInteractive">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <h4 style="margin: 0 0 4px 0;">Registro de Auditoria Consolidado</h4>
                    <p style="margin: 0; font-size: 12px; color: var(--ms-color-text-secondary);">4.892 eventos de segurança validados sem anomalias nas últimas 24h.</p>
                  </div>
                  <span class="ms-badge" data-tone="neutral" data-variant="outline">Auditoria OK</span>
                </div>
              </MsBentoItem>
            </MsBentoGrid>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsBentoGrid :cols="{{ b9.bentoCols }}" gap="{{ b9.bentoGap }}" :dense="{{ b9.bentoDense }}"&gt;
  &lt;MsBentoItem :col-span="2" :row-span="2" variant="{{ b9.bentoItemVariant }}" :interactive="{{ b9.bentoInteractive }}"&gt;...&lt;/MsBentoItem&gt;
&lt;/MsBentoGrid&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsBentoGrid</div>
        <div class="prop-row">
          <label class="prop-label">Colunas da Grade (cols)</label>
          <select class="prop-select" v-model.number="b9.bentoCols">
            <option :value="1">1 Coluna</option>
            <option :value="2">2 Colunas</option>
            <option :value="3">3 Colunas</option>
            <option :value="4">4 Colunas</option>
            <option :value="5">5 Colunas</option>
            <option :value="6">6 Colunas</option>
          </select>
        </div>
        <div class="prop-row">
          <label class="prop-label">Espaçamento (gap)</label>
          <select class="prop-select" v-model="b9.bentoGap">
            <option value="xs">Extra Pequeno (8px)</option>
            <option value="sm">Pequeno (12px)</option>
            <option value="md">Médio (16px)</option>
            <option value="lg">Grande (24px)</option>
            <option value="xl">Extra Grande (32px)</option>
          </select>
        </div>
        <div class="prop-row">
          <label class="prop-label">Variante dos Itens (variant)</label>
          <select class="prop-select" v-model="b9.bentoItemVariant">
            <option value="default">Padrão (default)</option>
            <option value="elevated">Elevado com Sombra (elevated)</option>
            <option value="accent">Tom de Destaque (accent)</option>
            <option value="ghost">Fantasma / Tracejado (ghost)</option>
          </select>
        </div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.bentoDense" />
            <span>Preenchimento Denso (dense)</span>
          </label>
        </div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.bentoInteractive" />
            <span>Hover com Elevação (interactive)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: MASONRY GRID -->
  <div v-if="activeTab === 'masonry-grid'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 320px; padding: 24px; align-items: stretch;">
          <div style="width: 100%;">
            <MsMasonryGrid
              :cols="b9.masonryCols"
              :gap="b9.masonryGap"
              :items="[
                { title: 'Design System Resiliente', desc: 'Estrutura arquitetural de ponta com tokens de cor e layout unificados.' },
                { title: 'Balanceamento Automático Pinterest-Style', desc: 'As colunas calculam automaticamente o equilíbrio de altura vertical para eliminar lacunas horizontais desnecessárias e manter um fluxo visual fluido e estético.' },
                { title: 'Métricas de Engenharia', desc: 'SLA 99.98% garantido em alta disponibilidade.' },
                { title: 'Acessibilidade WCAG AAA', desc: 'Contraste estrito e navegação assistiva nativa.' },
                { title: 'Tokens Dinâmicos OKLCH', desc: 'Paleta perceptualmente uniforme em qualquer luminosidade ou tema.' },
                { title: 'Performance Extrema', desc: 'Zero dependências desnecessárias, runtime ultraleve e CSS nativo.' }
              ]"
            >
              <template #default="{ item }">
                <div class="ms-bento-item" style="cursor: default;">
                  <h4 style="margin: 0 0 8px 0;">{{ item.title }}</h4>
                  <p style="margin: 0; font-size: 13px; color: var(--ms-color-text-secondary);">{{ item.desc }}</p>
                </div>
              </template>
            </MsMasonryGrid>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsMasonryGrid :cols="{{ b9.masonryCols }}" gap="{{ b9.masonryGap }}" :items="items"&gt;
  &lt;template #default="{ item }"&gt;
    &lt;div class="ms-bento-item"&gt;...&lt;/div&gt;
  &lt;/template&gt;
&lt;/MsMasonryGrid&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsMasonryGrid</div>
        <div class="prop-row">
          <label class="prop-label">Colunas Pinterest (cols)</label>
          <select class="prop-select" v-model.number="b9.masonryCols">
            <option :value="2">2 Colunas</option>
            <option :value="3">3 Colunas</option>
            <option :value="4">4 Colunas</option>
            <option :value="5">5 Colunas</option>
          </select>
        </div>
        <div class="prop-row">
          <label class="prop-label">Espaçamento Entre Itens (gap)</label>
          <select class="prop-select" v-model="b9.masonryGap">
            <option value="xs">Extra Pequeno (8px)</option>
            <option value="sm">Pequeno (12px)</option>
            <option value="md">Médio (16px)</option>
            <option value="lg">Grande (24px)</option>
            <option value="xl">Extra Grande (32px)</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: SPLIT PANE -->
  <div v-if="activeTab === 'split-pane'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 280px; padding: 24px; align-items: stretch;">
          <div style="width: 100%; height: 260px;">
            <MsSplitPane :direction="b9.splitDirection" v-model:split="b9.splitValue">
              <template #first>
                <div style="padding: 24px; background: var(--ms-color-surface-sunken); height: 100%; box-sizing: border-box; border-radius: var(--ms-radius-sm);">
                  <h4 style="margin: 0 0 8px 0;">Painel Esquerdo ({{ b9.splitValue }}%)</h4>
                  <p style="margin: 0; color: var(--ms-color-text-secondary);">Arraste a calha para redimensionar.</p>
                </div>
              </template>
              <template #second>
                <div style="padding: 24px; background: var(--ms-color-surface-raised); height: 100%; box-sizing: border-box; border-radius: var(--ms-radius-sm);">
                  <h4 style="margin: 0 0 8px 0;">Painel Direito ({{ 100 - b9.splitValue }}%)</h4>
                  <p style="margin: 0; color: var(--ms-color-text-secondary);">Conteúdo flexível adaptativo.</p>
                </div>
              </template>
            </MsSplitPane>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsSplitPane direction="{{ b9.splitDirection }}" v-model:split="split" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsSplitPane</div>

        <div class="prop-row">
          <label class="prop-label">Direção da Divisão (direction)</label>
          <select class="prop-select" v-model="b9.splitDirection">
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-label">Posição da Divisão: {{ b9.splitValue }}%</label>
          <input type="range" min="15" max="85" v-model.number="b9.splitValue" />
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: LIGHTBOX -->
  <div v-if="activeTab === 'lightbox'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;">
            <img
              v-for="(item, idx) in b9.lightboxItems"
              :key="idx"
              :src="item.src"
              style="width: 140px; height: 90px; object-fit: cover; border-radius: var(--ms-radius-md); cursor: pointer; border: 2px solid var(--ms-color-border-subtle); transition: transform 0.2s ease;"
              @click="b9.lightboxIndex = idx; b9.lightboxOpen = true;"
            />
          </div>
          <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Clique em uma imagem para abrir o Lightbox em tela cheia.</span>
          <MsLightbox
            v-model="b9.lightboxOpen"
            :items="b9.lightboxItems"
            v-model:index="b9.lightboxIndex"
          />
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsLightbox v-model="isOpen" :items="items" v-model:index="currentIndex" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsLightbox</div>
        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.lightboxOpen" />
            <span>Lightbox Aberto (v-model)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: DROPZONE -->
  <div v-if="activeTab === 'dropzone'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 280px; padding: 24px; align-items: stretch;">
          <div style="width: 100%; max-width: 520px; margin: 0 auto;">
            <MsDropzone @files-dropped="b9.onFilesDropped" />
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsDropzone @files-dropped="onFilesDropped" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsDropzone</div>
        <div class="prop-row">
          <span class="prop-label">Arquivos Enviados</span>
          <div style="font-size: 14px; font-weight: 600;">{{ b9.droppedFilesCount }} arquivo(s)</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: MARQUEE -->
  <div v-if="activeTab === 'marquee'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 24px; align-items: stretch;">
          <div style="width: 100%;">
            <MsMarquee
              :speed="b9.marqueeSpeed"
              :reverse="b9.marqueeReverse"
              :pause-on-hover="b9.marqueePause"
              fade
            >
              <span class="ms-badge ms-badge--primary" style="padding: 8px 16px;">⚡ Design Tokens</span>
              <span class="ms-badge ms-badge--secondary" style="padding: 8px 16px;">🎨 Temas Escuro & Claro</span>
              <span class="ms-badge ms-badge--success" style="padding: 8px 16px;">♿ WCAG 2.2 AAA</span>
              <span class="ms-badge ms-badge--warning" style="padding: 8px 16px;">🚀 100% Vue 3 SFC</span>
              <span class="ms-badge ms-badge--info" style="padding: 8px 16px;">💎 Enterprise High-Density</span>
            </MsMarquee>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsMarquee :speed="{{ b9.marqueeSpeed }}" :reverse="{{ b9.marqueeReverse }}" :pause-on-hover="{{ b9.marqueePause }}" fade&gt;...&lt;/MsMarquee&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsMarquee</div>

        <div class="prop-row">
          <label class="prop-label">Velocidade (Duração): {{ b9.marqueeSpeed }}s</label>
          <input type="range" min="5" max="40" v-model.number="b9.marqueeSpeed" />
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.marqueeReverse" />
            <span>Inverter Direção (reverse)</span>
          </label>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.marqueePause" />
            <span>Pausar ao Passar o Mouse (pauseOnHover)</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: PARALLAX -->
  <div v-if="activeTab === 'parallax'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 280px; padding: 24px; align-items: stretch;">
          <div style="width: 100%;">
            <MsParallax height="260px" :speed="0.4">
              <template #background>
                <div style="background: linear-gradient(135deg, var(--ms-color-interactive-primary), var(--ms-color-interactive-secondary)); width: 100%; height: 360px; opacity: 0.2;" />
              </template>
              <div style="text-align: center; padding: 48px 16px;">
                <h3 style="margin: 0 0 8px 0;">Efeito Paralaxe Profissional</h3>
                <p style="margin: 0; color: var(--ms-color-text-secondary);">Profundidade suave sincronizada com o scroll do viewport.</p>
              </div>
            </MsParallax>
          </div>
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsParallax height="260px" :speed="0.4"&gt;...&lt;/MsParallax&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsParallax</div>
        <div class="prop-row">
          <span class="prop-label">Velocidade do Scroll</span>
          <span style="font-weight: 600;">0.4x (Suave)</span>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: POINTER -->
  <div v-if="activeTab === 'pointer'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center;">
          <p style="margin: 0; color: var(--ms-color-text-secondary);">Ative o cursor interativo para acompanhar o movimento do mouse:</p>
          <button
            type="button"
            class="prop-input"
            style="cursor: pointer; width: auto; padding: 10px 20px; font-weight: 600; text-align: center;"
            :style="b9.pointerActive ? 'background: var(--ms-color-interactive-primary); color: var(--ms-color-text-on-accent);' : ''"
            @click="b9.pointerActive = !b9.pointerActive"
          >
            {{ b9.pointerActive ? '✓ Desativar Cursor Especial' : 'Ativar Cursor Especial' }}
          </button>
          <MsPointer :variant="b9.pointerVariant" :disabled="!b9.pointerActive" />
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsPointer variant="{{ b9.pointerVariant }}" :disabled="{{ !b9.pointerActive }}" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsPointer</div>

        <div class="prop-row">
          <label class="prop-label">Variante do Cursor (variant)</label>
          <select class="prop-select" v-model="b9.pointerVariant">
            <option value="ring">Anel Magnético (ring)</option>
            <option value="dot">Ponto (dot)</option>
            <option value="spotlight">Holofote (spotlight)</option>
          </select>
        </div>

        <div class="prop-row">
          <label class="prop-checkbox">
            <input type="checkbox" v-model="b9.pointerActive" />
            <span>Cursor Ativo</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: FAB -->
  <div v-if="activeTab === 'fab'">
    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" style="min-height: 240px; padding: 32px; display: flex; flex-direction: column; gap: 16px; align-items: center; justify-content: center; position: relative;">
          <p style="color: var(--ms-color-text-secondary); margin: 0;">O Floating Action Button flutua no canto selecionado com suporte a Speed-Dial:</p>
          <MsFab
            :position="b9.fabPosition"
            :actions="b9.fabActions"
            label="Ações Rápidas"
          />
        </div>

        <div class="code-card">
          <button class="code-copy-btn" @click="copyCode">
            {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
          </button>
          <pre class="code-content"><code>&lt;MsFab position="{{ b9.fabPosition }}" :actions="actions" label="Ações Rápidas" /&gt;</code></pre>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Propriedades do MsFab</div>

        <div class="prop-row">
          <label class="prop-label">Posicionamento na Tela (position)</label>
          <select class="prop-select" v-model="b9.fabPosition">
            <option value="bottom-right">Inferior Direito (bottom-right)</option>
            <option value="bottom-left">Inferior Esquerdo (bottom-left)</option>
            <option value="top-right">Superior Direito (top-right)</option>
            <option value="top-left">Superior Esquerdo (top-left)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
`;
