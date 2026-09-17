import { ref } from "vue";

export function useBatch15() {
  // --- SNIPPET STATE ---
  const snippetVariant = ref("default");
  const snippetSize = ref("md");
  const snippetTone = ref("neutral");
  const snippetPrompt = ref("$ ");
  const snippetCopyPrompt = ref(false);
  const snippetWrap = ref(false);
  const snippetActiveTab = ref("pnpm");
  const snippetTabs = ref([
    {
      id: "pnpm",
      label: "pnpm",
      code: "pnpm add @magic-style/vue @magic-style/css",
      prompt: "$ ",
    },
    {
      id: "npm",
      label: "npm",
      code: "npm install @magic-style/vue @magic-style/css",
      prompt: "$ ",
    },
    {
      id: "yarn",
      label: "yarn",
      code: "yarn add @magic-style/vue @magic-style/css",
      prompt: "$ ",
    },
    {
      id: "bun",
      label: "bun",
      code: "bun add @magic-style/vue @magic-style/css",
      prompt: "$ ",
    },
  ]);

  // --- CHOICEBOX STATE ---
  const choiceboxType = ref("radio");
  const choiceboxLayout = ref("grid");
  const choiceboxColumns = ref(2);
  const choiceboxSize = ref("md");
  const choiceboxTone = ref("primary");
  const choiceboxIndicator = ref("left");
  const choiceboxValue = ref("pro");
  const choiceboxCheckboxValue = ref(["pro", "enterprise"]);

  const choiceboxPlans = ref([
    {
      value: "starter",
      title: "Starter",
      description: "Ideal para projetos individuais e protótipos rápidos.",
      price: "Grátis",
      badge: "Iniciante",
      icon: "🌱",
    },
    {
      value: "pro",
      title: "Profissional",
      description: "Equipes em expansão com pipelines CI/CD e colaboração ágil.",
      price: "R$ 49/mês",
      badge: "Popular",
      icon: "🚀",
      tone: "primary",
    },
    {
      value: "enterprise",
      title: "Enterprise",
      description: "Infraestrutura dedicada com 99.99% de SLA e suporte 24/7.",
      price: "R$ 199/mês",
      badge: "Corporativo",
      icon: "👑",
      tone: "accent",
    },
    {
      value: "custom",
      title: "Personalizado",
      description: "Instalação on-premise com conformidade e segurança auditadas.",
      price: "Sob consulta",
      badge: "Auditado",
      icon: "⚙️",
    },
  ]);

  // --- GLIMPSE STATE ---
  const glimpsePlacement = ref("top");
  const glimpseLoading = ref(false);
  const glimpseShowDelay = ref(180);
  const glimpseHideDelay = ref(150);

  return {
    snippetVariant,
    snippetSize,
    snippetTone,
    snippetPrompt,
    snippetCopyPrompt,
    snippetWrap,
    snippetActiveTab,
    snippetTabs,
    choiceboxType,
    choiceboxLayout,
    choiceboxColumns,
    choiceboxSize,
    choiceboxTone,
    choiceboxIndicator,
    choiceboxValue,
    choiceboxCheckboxValue,
    choiceboxPlans,
    glimpsePlacement,
    glimpseLoading,
    glimpseShowDelay,
    glimpseHideDelay,
  };
}

export const batch15TemplatesHtml = `
  <!-- SNIPPET -->
  <div v-if="activeTab === 'snippet'" class="playground-grid">
    <div class="canvas-area">
      <div class="canvas-preview" style="padding: 32px; flex-direction: column; gap: 24px; align-items: stretch;">
        <MsSnippet
          v-model:active-tab="b15.snippetActiveTab"
          :tabs="b15.snippetTabs"
          :variant="b15.snippetVariant"
          :size="b15.snippetSize"
          :tone="b15.snippetTone"
          :wrap-lines="b15.snippetWrap"
          :prompt="b15.snippetPrompt"
          :copy-prompt="b15.snippetCopyPrompt"
        />

        <div style="margin-top: 12px;">
          <p class="ms-u-text-muted" style="margin-bottom: 8px; font-size: 13px;">Exemplo simples de comando único sem abas:</p>
          <MsSnippet
            code="git clone https://github.com/magicmidia/magicstyle.git"
            prompt="$ "
            :variant="b15.snippetVariant"
            :size="b15.snippetSize"
            :tone="b15.snippetTone"
          />
        </div>
      </div>

      <div class="code-card">
        <div class="code-card-header">
          <span>Código Vue SFC</span>
          <button class="copy-button" @click="copyCode">Copiar Código</button>
        </div>
        <pre class="code-content"><code>&lt;MsSnippet
  :tabs="tabs"
  variant="${"{{ b15.snippetVariant }}"}"
  size="${"{{ b15.snippetSize }}"}"
  tone="${"{{ b15.snippetTone }}"}"
  :copy-prompt="${"{{ b15.snippetCopyPrompt }}"}"
/&gt;</code></pre>
      </div>
    </div>

    <div class="controls-card">
      <div class="controls-header">Propriedades & Dials</div>

      <div class="prop-row">
        <label class="prop-label">Variante (variant)</label>
        <select v-model="b15.snippetVariant" class="prop-select">
          <option value="default">Padrão (default)</option>
          <option value="bordered">Contornado (bordered)</option>
          <option value="flat">Plano (flat)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Tamanho (size)</label>
        <select v-model="b15.snippetSize" class="prop-select">
          <option value="sm">Pequeno (sm)</option>
          <option value="md">Médio (md)</option>
          <option value="lg">Grande (lg)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Tom Semântico (tone)</label>
        <select v-model="b15.snippetTone" class="prop-select">
          <option value="neutral">Neutro (neutral)</option>
          <option value="primary">Primário (primary)</option>
          <option value="success">Sucesso (success)</option>
          <option value="warning">Aviso (warning)</option>
          <option value="danger">Perigo (danger)</option>
          <option value="info">Informação (info)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Símbolo do Prompt</label>
        <input v-model="b15.snippetPrompt" type="text" class="prop-input" />
      </div>

      <div class="prop-row">
        <label class="prop-checkbox">
          <input v-model="b15.snippetCopyPrompt" type="checkbox" />
          <span>Copiar símbolo de prompt junto</span>
        </label>
      </div>

      <div class="prop-row">
        <label class="prop-checkbox">
          <input v-model="b15.snippetWrap" type="checkbox" />
          <span>Quebrar linhas compridas</span>
        </label>
      </div>
    </div>
  </div>

  <!-- CHOICEBOX -->
  <div v-if="activeTab === 'choicebox'" class="playground-grid">
    <div class="canvas-area">
      <div class="canvas-preview" style="padding: 32px; flex-direction: column; gap: 20px; align-items: stretch;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <p class="ms-u-text-muted" style="margin: 0; font-size: 13px;">
            Modo: <strong>{{ b15.choiceboxType }}</strong> | Seleção Atual:
            <code style="background: var(--ms-color-surface-sunken); padding: 2px 6px; border-radius: 4px;">
              {{ b15.choiceboxType === 'radio' ? b15.choiceboxValue : b15.choiceboxCheckboxValue }}
            </code>
          </p>
        </div>

        <MsChoicebox
          v-if="b15.choiceboxType === 'radio'"
          v-model="b15.choiceboxValue"
          :items="b15.choiceboxPlans"
          :type="'radio'"
          :layout="b15.choiceboxLayout"
          :columns="b15.choiceboxColumns"
          :size="b15.choiceboxSize"
          :tone="b15.choiceboxTone"
          :indicator-placement="b15.choiceboxIndicator"
        />

        <MsChoicebox
          v-else
          v-model="b15.choiceboxCheckboxValue"
          :items="b15.choiceboxPlans"
          :type="'checkbox'"
          :layout="b15.choiceboxLayout"
          :columns="b15.choiceboxColumns"
          :size="b15.choiceboxSize"
          :tone="b15.choiceboxTone"
          :indicator-placement="b15.choiceboxIndicator"
        />
      </div>

      <div class="code-card">
        <div class="code-card-header">
          <span>Código Vue SFC</span>
          <button class="copy-button" @click="copyCode">Copiar Código</button>
        </div>
        <pre class="code-content"><code>&lt;MsChoicebox
  v-model="selectedPlan"
  :items="plans"
  type="${"{{ b15.choiceboxType }}"}"
  layout="${"{{ b15.choiceboxLayout }}"}"
  :columns="${"{{ b15.choiceboxColumns }}"}"
  size="${"{{ b15.choiceboxSize }}"}"
  tone="${"{{ b15.choiceboxTone }}"}"
  indicator-placement="${"{{ b15.choiceboxIndicator }}"}"
/&gt;</code></pre>
      </div>
    </div>

    <div class="controls-card">
      <div class="controls-header">Propriedades & Dials</div>

      <div class="prop-row">
        <label class="prop-label">Tipo de Seleção (type)</label>
        <select v-model="b15.choiceboxType" class="prop-select">
          <option value="radio">Rádio (Único)</option>
          <option value="checkbox">Checkbox (Múltiplo)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Layout</label>
        <select v-model="b15.choiceboxLayout" class="prop-select">
          <option value="grid">Grid Responsivo</option>
          <option value="vertical">Coluna Vertical</option>
          <option value="horizontal">Linha Horizontal</option>
        </select>
      </div>

      <div v-if="b15.choiceboxLayout === 'grid'" class="prop-row">
        <label class="prop-label">Colunas no Grid</label>
        <select v-model.number="b15.choiceboxColumns" class="prop-select">
          <option :value="1">1 Coluna</option>
          <option :value="2">2 Colunas</option>
          <option :value="3">3 Colunas</option>
          <option :value="4">4 Colunas</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Tamanho (size)</label>
        <select v-model="b15.choiceboxSize" class="prop-select">
          <option value="sm">Pequeno (sm)</option>
          <option value="md">Médio (md)</option>
          <option value="lg">Grande (lg)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Tom Semântico (tone)</label>
        <select v-model="b15.choiceboxTone" class="prop-select">
          <option value="primary">Primário (primary)</option>
          <option value="success">Sucesso (success)</option>
          <option value="warning">Aviso (warning)</option>
          <option value="danger">Perigo (danger)</option>
          <option value="info">Informação (info)</option>
          <option value="neutral">Neutro (neutral)</option>
          <option value="accent">Destaque (accent)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-label">Posição do Indicador</label>
        <select v-model="b15.choiceboxIndicator" class="prop-select">
          <option value="left">Esquerda (left)</option>
          <option value="right">Direita (right)</option>
        </select>
      </div>
    </div>
  </div>

  <!-- GLIMPSE -->
  <div v-if="activeTab === 'glimpse'" class="playground-grid">
    <div class="canvas-area">
      <div class="canvas-preview" style="padding: 48px 32px; flex-direction: column; gap: 24px; align-items: center; justify-content: center; text-align: center;">
        <p style="font-size: 16px; line-height: 2; max-width: 600px; margin: 0;">
          Passe o mouse ou navegue com Tab sobre os links para ver a pré-visualização flutuante com imagem e metadados:
        </p>

        <div style="display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; align-items: center; padding: 24px; background-color: var(--ms-color-surface-raised); border: 1px dashed var(--ms-color-border-subtle); border-radius: 8px;">
          <MsGlimpse
            href="https://magic-style.dev"
            label="MagicStyle Docs 🌐"
            title="MagicStyle — Design System Corporativo"
            description="Biblioteca enterprise de componentes e design tokens para Vue 3 e CSS nativo com total conformidade WCAG 2.2 AAA."
            domain="magic-style.dev"
            badge="v1.2.0"
            :placement="b15.glimpsePlacement"
            :loading="b15.glimpseLoading"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
          />

          <MsGlimpse
            href="https://github.com/magicmidia/magicstyle"
            label="GitHub Repository 🐙"
            title="magicmidia/magicstyle"
            description="Monorepo oficial com mais de 83 componentes acessíveis, zero dependências pesadas e build Turbo."
            domain="github.com"
            badge="Open Source"
            :placement="b15.glimpsePlacement"
            :loading="b15.glimpseLoading"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
          />
        </div>
      </div>

      <div class="code-card">
        <div class="code-card-header">
          <span>Código Vue SFC</span>
          <button class="copy-button" @click="copyCode">Copiar Código</button>
        </div>
        <pre class="code-content"><code>&lt;MsGlimpse
  href="https://magic-style.dev"
  label="MagicStyle Docs"
  title="MagicStyle — Design System Corporativo"
  description="Biblioteca enterprise de componentes para Vue 3..."
  domain="magic-style.dev"
  image="/assets/preview.png"
  placement="${"{{ b15.glimpsePlacement }}"}"
  :loading="${"{{ b15.glimpseLoading }}"}"
/&gt;</code></pre>
      </div>
    </div>

    <div class="controls-card">
      <div class="controls-header">Propriedades & Dials</div>

      <div class="prop-row">
        <label class="prop-label">Posicionamento (placement)</label>
        <select v-model="b15.glimpsePlacement" class="prop-select">
          <option value="top">Superior (top)</option>
          <option value="bottom">Inferior (bottom)</option>
          <option value="left">Esquerda (left)</option>
          <option value="right">Direita (right)</option>
        </select>
      </div>

      <div class="prop-row">
        <label class="prop-checkbox">
          <input v-model="b15.glimpseLoading" type="checkbox" />
          <span>Simular Estado de Carregamento (Skeleton)</span>
        </label>
      </div>
    </div>
  </div>
`;
