/**
 * Magic-Style Preview Studio: Component Variations Gallery
 * Comprehensive FlyonUI-style gallery for ALL 50 components.
 * Showcases the 8 brand tones, all variants, size scales, shapes, state matrices, and composite patterns.
 */

export const variationsTemplatesHtml = `

<div v-if="activeTab === 'buttons'">
    
    <!-- 1. BUTTONS: SOLID, SOFT, OUTLINE, TEXT, GRADIENT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Variantes Principais (Solid, Soft, Outline, Text, Gradient)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Core Variants</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary">Solid Primary</MsButton>
        <MsButton variant="soft" tone="primary">Soft Primary</MsButton>
        <MsButton variant="outline" tone="primary">Outline Primary</MsButton>
        <MsButton variant="text" tone="primary">Text Primary</MsButton>
        <MsButton variant="gradient" tone="primary">Gradient Primary</MsButton>
        <MsButton variant="solid" tone="accent">Solid Accent</MsButton>
        <MsButton variant="soft" tone="success">Soft Success</MsButton>
        <MsButton variant="outline" tone="danger">Outline Danger</MsButton>
        <MsButton variant="text" tone="neutral">Text Neutral</MsButton>
        <MsButton variant="gradient" tone="accent">Gradient Accent</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton variant="solid" tone="primary">Solid Primary</MsButton>
<MsButton variant="soft" tone="primary">Soft Primary</MsButton>
<MsButton variant="outline" tone="primary">Outline Primary</MsButton>
<MsButton variant="text" tone="primary">Text Primary</MsButton>
<MsButton variant="gradient" tone="primary">Gradient Primary</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. WAVE EFFECT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Efeito Onda Luminosa (Wave Effect)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Ripple Animation</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary" wave>Clique para Onda Primária</MsButton>
        <MsButton variant="solid" tone="accent" wave>Onda Accent</MsButton>
        <MsButton variant="solid" tone="success" wave>Onda Sucesso</MsButton>
        <MsButton variant="solid" tone="warning" wave>Onda Atenção</MsButton>
        <MsButton variant="solid" tone="danger" wave>Onda Perigo</MsButton>
        <MsButton variant="outline" tone="primary" wave>Onda em Outline</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Prop wave ativa a expansão luminosa radial em :active::after -->
<MsButton variant="solid" tone="primary" wave>Clique para Onda Primária</MsButton>
<MsButton variant="outline" tone="primary" wave>Onda em Outline</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. PILLED BUTTONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Botões Pílula (Pilled Buttons)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Pill Shape</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary" pill>Solid Pill</MsButton>
        <MsButton variant="soft" tone="accent" pill>Soft Pill</MsButton>
        <MsButton variant="outline" tone="neutral" pill>Outline Pill</MsButton>
        <MsButton variant="gradient" tone="primary" pill>Gradient Pill</MsButton>
        <MsButton variant="solid" tone="success" size="sm" pill>Sucesso SM</MsButton>
        <MsButton variant="solid" tone="danger" size="lg" pill>Perigo LG</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton variant="solid" tone="primary" pill>Solid Pill</MsButton>
<MsButton variant="soft" tone="accent" pill>Soft Pill</MsButton>
<MsButton variant="outline" tone="neutral" pill>Outline Pill</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. ROUNDED BUTTONS & SHAPES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Botões Arredondados & Geometria de Bordas (Rounded Buttons)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shape Tokens</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary" shape="square">Square (0px)</MsButton>
        <MsButton variant="solid" tone="primary" shape="rounded-sm">Rounded SM (4px)</MsButton>
        <MsButton variant="solid" tone="primary" shape="rounded">Rounded MD (8px)</MsButton>
        <MsButton variant="solid" tone="primary" shape="rounded-lg">Rounded LG (12px)</MsButton>
        <MsButton variant="solid" tone="primary" shape="pill">Pill (9999px)</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton shape="square">Square (0px)</MsButton>
<MsButton shape="rounded-sm">Rounded SM (4px)</MsButton>
<MsButton shape="rounded">Rounded MD (8px - Padrão)</MsButton>
<MsButton shape="rounded-lg">Rounded LG (12px)</MsButton>
<MsButton shape="pill">Pill (9999px)</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. STATES VARIANTS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Matriz de Estados Interativos (States Variants)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Interaction States</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary">Estado Normal</MsButton>
        <MsButton variant="solid" tone="primary" style="outline: var(--ms-focus-ring-width, 2px) solid var(--ms-focus-ring-color, #00d2d3); outline-offset: 2px;">Foco Simulado</MsButton>
        <MsButton variant="solid" tone="primary" loading>Carregando...</MsButton>
        <MsButton variant="outline" tone="accent" loading>Processando</MsButton>
        <MsButton variant="solid" tone="primary" disabled>Desabilitado</MsButton>
        <MsButton variant="outline" tone="neutral" disabled>Outline Inativo</MsButton>
        <MsButton variant="solid" tone="primary" caret :open="true">Menu Aberto</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton variant="solid" tone="primary">Normal</MsButton>
<MsButton variant="solid" tone="primary" loading>Carregando...</MsButton>
<MsButton variant="solid" tone="primary" disabled>Desabilitado</MsButton>
<MsButton variant="solid" tone="primary" caret :open="true">Dropdown Aberto</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. SIZE VARIANTS (XS, SM, DEFAULT, LG, XL) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Escala Completa de Tamanhos (xs, sm, default / md, lg, xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Scale Sizes</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary" size="xs">XS (28px)</MsButton>
        <MsButton variant="solid" tone="primary" size="sm">SM (32px)</MsButton>
        <MsButton variant="solid" tone="primary" size="md">MD / Padrão (40px)</MsButton>
        <MsButton variant="solid" tone="primary" size="lg">LG (48px)</MsButton>
        <MsButton variant="solid" tone="primary" size="xl">XL (56px)</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton size="xs">XS (28px)</MsButton>
<MsButton size="sm">SM (32px)</MsButton>
<MsButton size="md">MD / Default (40px)</MsButton>
<MsButton size="lg">LG (48px)</MsButton>
<MsButton size="xl">XL (56px)</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 7. WIDE BUTTON -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. Botão Largo para Ações em Destaque (Wide Button)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">CTA Affordance</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        <MsButton variant="solid" tone="primary" wide wave>Começar Agora</MsButton>
        <MsButton variant="outline" tone="primary" wide>Agendar Demonstração</MsButton>
        <MsButton variant="solid" tone="accent" wide pill wave>Criar Nova Conta</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Modificador wide aplica padding horizontal de 32px e largura mínima de 160px -->
<MsButton variant="solid" tone="primary" wide wave>Começar Agora</MsButton>
<MsButton variant="outline" tone="primary" wide>Agendar Demonstração</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 8. BLOCK BUTTON -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">8. Botão em Bloco / Largura Total (Block Button)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">100% Width</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 420px;">
        <MsButton variant="solid" tone="primary" block wave>Continuar para o Pagamento (100%)</MsButton>
        <MsButton variant="outline" tone="neutral" block>Voltar para o Catálogo</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Prop block preenche 100% da largura do elemento pai -->
<MsButton variant="solid" tone="primary" block>Continuar para o Pagamento</MsButton>
<MsButton variant="outline" tone="neutral" block>Voltar para o Catálogo</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 9. RESPONSIVE BUTTON -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">9. Botão Responsivo Adaptativo (Responsive Button)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Mobile Fluid</span>
      </div>
      <div class="variation-preview-box" style="width: 100%;">
        <div style="padding: 12px; border: 1px dashed var(--ms-color-border-default); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-sunken);">
          <div style="font-size: 12px; color: var(--ms-color-text-muted); margin-bottom: 8px;">Redimensione o viewport para &lt; 640px para observar a expansão para bloco automático:</div>
          <MsButton variant="solid" tone="primary" responsive wave>Ação Fluida Responsiva</MsButton>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Prop responsive: inline-flex no desktop, inline-size: 100% em telas < 640px -->
<MsButton variant="solid" tone="primary" responsive>Ação Fluida Responsiva</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 10. ICON BUTTONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">10. Botões com Ícones (Leading & Trailing Adornments)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Prefix & Suffix</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary">
          <template #prefix>⚡</template> Atualizar Sistema
        </MsButton>
        <MsButton variant="outline" tone="success">
          <template #prefix>✓</template> Aprovado
        </MsButton>
        <MsButton variant="solid" tone="accent">
          Continuar Fluxo <template #suffix>→</template>
        </MsButton>
        <MsButton variant="soft" tone="neutral">
          <template #prefix>🔍</template> Buscar <template #suffix><span style="font-family: monospace; opacity: 0.7;">⌘K</span></template>
        </MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton tone="primary">
  <template #prefix>⚡</template> Atualizar Sistema
</MsButton>
<MsButton tone="accent">
  Continuar <template #suffix>→</template>
</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 11. ICON ONLY -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">11. Botões Somente Ícone (Icon Only)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Aria-Label Bound</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary" aria-label="Adicionar item" pill>➕</MsButton>
        <MsButton variant="outline" tone="neutral" aria-label="Editar configuração" pill>⚙️</MsButton>
        <MsButton variant="soft" tone="accent" aria-label="Favoritar" pill>⭐</MsButton>
        <MsButton variant="ghost" tone="danger" aria-label="Excluir item" pill>🗑️</MsButton>
        <MsButton variant="solid" tone="primary" size="sm" aria-label="Buscar" pill>🔍</MsButton>
        <MsButton variant="solid" tone="primary" size="lg" aria-label="Reproduzir" pill>▶</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Sem texto no slot padrão, o botão ganha proporção quadrada 1:1 e formato circular com pill -->
<MsButton variant="solid" tone="primary" aria-label="Adicionar item" pill>➕</MsButton>
<MsButton variant="outline" tone="neutral" aria-label="Configurações" pill>⚙️</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 12. LOADING BUTTONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">12. Botões em Estado de Carregamento (Loading Buttons)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Spinner Motion</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsButton variant="solid" tone="primary" loading>Salvando Registro...</MsButton>
        <MsButton variant="outline" tone="accent" loading>Enviando Arquivo...</MsButton>
        <MsButton variant="soft" tone="success" loading>Processando Pagamento...</MsButton>
        <MsButton variant="solid" tone="danger" loading>Excluindo...</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Ativa spinner rotativo tokenizado com bloqueio de ponteiro e aria-busy="true" -->
<MsButton variant="solid" tone="primary" loading>Salvando Registro...</MsButton>
<MsButton variant="outline" tone="accent" loading>Enviando Arquivo...</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 13. GLASS BUTTON -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">13. Botões Efeito Vidro Fosco (Glass Button)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Backdrop Blur</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; border-radius: var(--ms-radius-lg); background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #2e86de 100%); display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
        <MsButton variant="glass" tone="primary" wave>Glass Primary</MsButton>
        <MsButton variant="glass" tone="accent" wave>Glass Accent</MsButton>
        <MsButton variant="glass" tone="neutral" pill wave>Glass Pill Rounded</MsButton>
        <MsButton variant="glass" size="sm" wave>Glass Compact</MsButton>
        <MsButton variant="glass" size="lg" wave>Glass Hero CTA</MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Variante glass aplica backdrop-filter: blur(12px) e borda translúcida -->
<MsButton variant="glass" tone="primary" wave>Glass Primary</MsButton>
<MsButton variant="glass" tone="neutral" pill wave>Glass Pill Rounded</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 14. BUTTON GROUP -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">14. Grupos de Botões Estruturados (Button Group)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Toolbar Composition</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <MsButtonGroup attached orientation="horizontal">
            <MsButton variant="outline" tone="neutral">Copiar</MsButton>
            <MsButton variant="outline" tone="neutral">Colar</MsButton>
            <MsButton variant="outline" tone="neutral">Recortar</MsButton>
          </MsButtonGroup>

          <MsButtonGroup attached orientation="horizontal">
            <MsButton variant="solid" tone="primary">Salvar Alterações</MsButton>
            <MsButton variant="solid" tone="primary" caret aria-label="Mais opções"></MsButton>
          </MsButtonGroup>
        </div>

        <div>
          <MsButtonGroup attached orientation="vertical">
            <MsButton variant="outline" tone="neutral">Mês</MsButton>
            <MsButton variant="outline" tone="neutral">Semana</MsButton>
            <MsButton variant="outline" tone="neutral">Dia</MsButton>
          </MsButtonGroup>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButtonGroup attached orientation="horizontal">
  <MsButton variant="outline" tone="neutral">Copiar</MsButton>
  <MsButton variant="outline" tone="neutral">Colar</MsButton>
</MsButtonGroup>

<!-- Split button com caret -->
<MsButtonGroup attached>
  <MsButton variant="solid" tone="primary">Salvar</MsButton>
  <MsButton variant="solid" tone="primary" caret aria-label="Opções" />
</MsButtonGroup>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 15. CLOSE BUTTON -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">15. Botão de Fechamento / Dismiss (Close Button)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Dismissal 90° Hover</span>
      </div>
      <div class="variation-preview-box" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 12px; padding: 10px 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised);">
          <span>Card com fechamento rápido:</span>
          <button class="ms-button ms-button--close" title="Fechar" aria-label="Fechar">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </button>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Botão compacto com rotação suave de 90 graus no hover -->
<button class="ms-button ms-button--close" aria-label="Fechar">
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
</button>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 16. DOWNLOAD TRIGGER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">16. Disparador de Download (Download Trigger)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">File Transfer</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
        <MsButton variant="solid" tone="primary" wave>
          <template #prefix>💾</template> Baixar Relatório Completo (PDF)
          <template #suffix><span style="font-size: 10px; opacity: 0.85; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.15);">3.2 MB</span></template>
        </MsButton>
        <MsButton variant="outline" tone="accent" wave>
          <template #prefix>📥</template> Exportar Dados (CSV)
        </MsButton>
        <MsButton variant="soft" tone="success" wave>
          <template #prefix>📦</template> Baixar Pacote de Ativos (.ZIP)
        </MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton variant="solid" tone="primary" wave>
  <template #prefix>💾</template> Baixar Relatório (PDF)
  <template #suffix><span class="badge">3.2 MB</span></template>
</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 17. TEMPLATE / CUSTOM CHILDREN CONTENT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">17. Template Customizado com Filhos Complexos (Children Slot)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Multi-line Rich Layout</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        <MsButton variant="outline" tone="neutral" style="height: auto; padding: 12px 18px;">
          <div style="display: flex; align-items: center; gap: 14px; text-align: start;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--ms-color-interactive-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">
              JD
            </div>
            <div>
              <div style="font-weight: 600; font-size: 13px; line-height: 1.3;">João Duarte da Silva</div>
              <div style="font-size: 11px; color: var(--ms-color-text-muted);">Administrador Global · TI</div>
            </div>
            <span style="font-size: 10px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-feedback-success-bg, rgba(16,185,129,0.15)); color: var(--ms-color-feedback-success-text, #10b981); font-weight: 600; margin-left: 8px;">ATIVO</span>
          </div>
        </MsButton>

        <MsButton variant="solid" tone="primary" wave style="height: auto; padding: 10px 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 20px; width: 100%;">
            <div style="text-align: start;">
              <div style="font-size: 11px; opacity: 0.85; text-transform: uppercase; letter-spacing: 0.05em;">Plano Enterprise</div>
              <div style="font-weight: 700; font-size: 15px;">Assinar Licença Anual</div>
            </div>
            <div style="font-weight: 800; font-size: 16px; padding-left: 12px; border-left: 1px solid rgba(255,255,255,0.25);">
              R$ 299<span style="font-size: 11px; font-weight: normal;">/mês</span>
            </div>
          </div>
        </MsButton>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- O conteúdo padrão de MsButton aceita qualquer estrutura rica em seu slot default -->
<MsButton variant="outline" tone="neutral" style="height: auto; padding: 12px 18px;">
  <div class="user-card-layout">
    <div class="avatar">JD</div>
    <div>
      <strong>João Duarte</strong>
      <p>Administrador TI</p>
    </div>
  </div>
</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 18. ACCESSIBILITY -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">18. Acessibilidade WAI-ARIA & Diretrizes WCAG 2.1 (Accessibility)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">A11y Compliant</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 14px; width: 100%;">
        <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
          <MsButton variant="solid" tone="primary" aria-label="Confirmar envio de formulário com teclado">Navegável via Tab (Enter / Space)</MsButton>
          <MsButton variant="outline" tone="neutral" aria-expanded="false" caret>Controle Expansível (aria-expanded)</MsButton>
          <MsButton variant="solid" tone="primary" loading aria-live="polite">Status Ocupado (aria-busy)</MsButton>
        </div>
        <div style="padding: 12px; border-radius: var(--ms-radius-md); background: var(--ms-color-surface-sunken); font-size: 12px; line-height: 1.6; color: var(--ms-color-text-secondary);">
          <div style="font-weight: 600; color: var(--ms-color-text-primary); margin-bottom: 4px;">Padrões de Acessibilidade Nativos:</div>
          <div>✓ Foco Visível: anel duplo de contraste com <MsCode tone="primary">--ms-focus-ring-color</MsCode> em navegação via teclado.</div>
          <div>✓ Leitor de Tela: botões com <MsCode>:loading="true"</MsCode> recebem <MsCode>aria-busy="true"</MsCode> automaticamente.</div>
          <div>✓ Estado de Menu: botões com <MsCode>caret</MsCode> sincronizam <MsCode>aria-expanded</MsCode> de acordo com a abertura do painel.</div>
          <div>✓ Alvo de Toque: ponteiros com <MsCode>(pointer: coarse)</MsCode> elevam a altura para o piso de 44px (WCAG 2.5.5).</div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Recursos nativos de acessibilidade inclusos automaticamente -->
<MsButton variant="solid" tone="primary" aria-label="Confirmar envio">Ação Acessível</MsButton>
<MsButton loading aria-live="polite">Carregando...</MsButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

  </div>

  <div v-if="activeTab === 'dropdown'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsDropdownButton nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <MsDropdownButton v-for="t in allTones" :key="t" :tone="t" variant="solid" :label="t.toUpperCase()" :items="menuItems"></MsDropdownButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsDropdownButton tone="primary" variant="solid" label="PRIMARY" :items="menuItems" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes de Estilo (Solid, Soft, Outline, Ghost)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Visual Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <MsDropdownButton variant="solid" tone="primary" label="Solid Action" :items="menuItems"></MsDropdownButton>
      <MsDropdownButton variant="soft" tone="primary" label="Soft Action" :items="menuItems"></MsDropdownButton>
      <MsDropdownButton variant="outline" tone="neutral" label="Outline Menu" :items="menuItems"></MsDropdownButton>
      <MsDropdownButton variant="ghost" tone="neutral" label="Ghost Minimal" :items="menuItems"></MsDropdownButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsDropdownButton variant="outline" tone="neutral" label="Menu" :items="menuItems" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala de Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box">
        
      <MsDropdownButton size="sm" variant="outline" tone="neutral" label="Pequeno (sm)" :items="menuItems"></MsDropdownButton>
      <MsDropdownButton size="md" variant="outline" tone="neutral" label="Padrão (md)" :items="menuItems"></MsDropdownButton>
      <MsDropdownButton size="lg" variant="solid" tone="primary" label="Grande (lg)" :items="menuItems"></MsDropdownButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsDropdownButton size="sm" label="Pequeno" :items="items" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'icon-buttons'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsIconButton nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <MsIconButton v-for="t in allTones" :key="t" :tone="t" variant="solid" aria-label="Ação">⚡</MsIconButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsIconButton tone="primary" variant="solid" aria-label="Raio">⚡</MsIconButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Formatos Geométricos (Circle, Rounded, Square)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes</span>
      </div>
      <div class="variation-preview-box">
        
      <MsIconButton variant="solid" tone="primary" shape="circle" aria-label="Circle">⭐</MsIconButton>
      <MsIconButton variant="solid" tone="accent" shape="rounded" aria-label="Rounded">⭐</MsIconButton>
      <MsIconButton variant="solid" tone="success" shape="square" aria-label="Square">⭐</MsIconButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsIconButton shape="circle" aria-label="Favorito">⭐</MsIconButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Variantes de Estilo (Solid, Soft, Outline, Ghost)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <MsIconButton variant="solid" tone="primary" aria-label="Solid">📁</MsIconButton>
      <MsIconButton variant="soft" tone="primary" aria-label="Soft">📁</MsIconButton>
      <MsIconButton variant="outline" tone="primary" aria-label="Outline">📁</MsIconButton>
      <MsIconButton variant="ghost" tone="neutral" aria-label="Ghost">📁</MsIconButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsIconButton variant="ghost" aria-label="Pasta">📁</MsIconButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Escala de Tamanhos (2xs a xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <MsIconButton size="2xs" variant="solid" tone="primary" aria-label="2XS">●</MsIconButton>
      <MsIconButton size="xs" variant="solid" tone="primary" aria-label="XS">●</MsIconButton>
      <MsIconButton size="sm" variant="solid" tone="primary" aria-label="SM">●</MsIconButton>
      <MsIconButton size="md" variant="solid" tone="primary" aria-label="MD">●</MsIconButton>
      <MsIconButton size="lg" variant="solid" tone="primary" aria-label="LG">●</MsIconButton>
      <MsIconButton size="xl" variant="solid" tone="primary" aria-label="XL">●</MsIconButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsIconButton size="xs" aria-label="Mini">●</MsIconButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Estados Especiais (Active, Loading, Disabled)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">States</span>
      </div>
      <div class="variation-preview-box">
        
      <MsIconButton variant="solid" tone="primary" active aria-label="Ativo">🔔</MsIconButton>
      <MsIconButton variant="solid" tone="accent" loading aria-label="Carregando">⏳</MsIconButton>
      <MsIconButton variant="solid" tone="neutral" disabled aria-label="Desabilitado">🔒</MsIconButton>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsIconButton active aria-label="Sino">🔔</MsIconButton>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'segmented-control'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSegmentedControl nos Tons Principais</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 500px;">
        <MsSegmentedControl tone="primary" :options="segmentedOptions" model-value="week"></MsSegmentedControl>
        <MsSegmentedControl tone="accent" :options="segmentedOptions" model-value="month"></MsSegmentedControl>
        <MsSegmentedControl tone="success" :options="segmentedOptions" model-value="day"></MsSegmentedControl>
        <MsSegmentedControl tone="neutral" :options="segmentedOptions" model-value="week"></MsSegmentedControl>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSegmentedControl tone="primary" :options="options" v-model="selected" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 500px;">
        <MsSegmentedControl size="sm" :options="segmentedOptions" model-value="month"></MsSegmentedControl>
        <MsSegmentedControl size="md" :options="segmentedOptions" model-value="week"></MsSegmentedControl>
        <MsSegmentedControl size="lg" :options="segmentedOptions" model-value="day"></MsSegmentedControl>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSegmentedControl size="sm" :options="options" v-model="selected" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Formato Pílula vs Rounded vs Full Width</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes & Width</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <MsSegmentedControl shape="pill" :options="segmentedOptions" model-value="week"></MsSegmentedControl>
        <MsSegmentedControl shape="square" :options="segmentedOptions" model-value="day"></MsSegmentedControl>
        <MsSegmentedControl full-width :options="segmentedOptions" model-value="week"></MsSegmentedControl>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSegmentedControl shape="pill" full-width :options="options" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'sidebar-menu'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSidebarMenu nos Tons Semânticos da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <div style="padding: 16px; background: var(--ms-color-surface-raised); border-radius: 12px; border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px; color: var(--ms-color-text-secondary);">PRIMARY TONE</div>
          <MsSidebarMenu tone="primary" :items="sampleMenuPreviewItems"></MsSidebarMenu>
        </div>
        <div style="padding: 16px; background: var(--ms-color-surface-raised); border-radius: 12px; border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px; color: var(--ms-color-text-secondary);">ACCENT TONE (#341f97)</div>
          <MsSidebarMenu tone="accent" :items="sampleMenuPreviewItems"></MsSidebarMenu>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSidebarMenu tone="primary" :items="menuItems" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Densidades & Formatos (Compact, Spacious, Pill)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Density & Shapes</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <div style="padding: 16px; background: var(--ms-color-surface-raised); border-radius: 12px; border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">DENSIDADE COMPACTA + PILL</div>
          <MsSidebarMenu density="compact" shape="pill" tone="primary" :items="sampleMenuPreviewItems"></MsSidebarMenu>
        </div>
        <div style="padding: 16px; background: var(--ms-color-surface-raised); border-radius: 12px; border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">DENSIDADE ESPAÇOSA + ROUNDED</div>
          <MsSidebarMenu density="spacious" shape="rounded" tone="accent" :items="sampleMenuPreviewItems"></MsSidebarMenu>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSidebarMenu density="compact" shape="pill" :items="items" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'breadcrumbs'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsBreadcrumbs com Separador Chevron (Padrão)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Chevron Separator</span>
      </div>
      <div class="variation-preview-box">
        
      <MsBreadcrumbs separator-type="chevron" :items="breadcrumbsItems"></MsBreadcrumbs>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBreadcrumbs separator-type="chevron" :items="items" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Separadores Customizados (Barra Slash, Ponto Dot, Flecha)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Custom Separators</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <MsBreadcrumbs separator="/" :items="breadcrumbsItems"></MsBreadcrumbs>
        <MsBreadcrumbs separator="•" :items="breadcrumbsItems"></MsBreadcrumbs>
        <MsBreadcrumbs separator="→" :items="breadcrumbsItems"></MsBreadcrumbs>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBreadcrumbs separator="/" :items="items" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala de Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <MsBreadcrumbs size="sm" :items="breadcrumbsItems"></MsBreadcrumbs>
        <MsBreadcrumbs size="md" :items="breadcrumbsItems"></MsBreadcrumbs>
        <MsBreadcrumbs size="lg" :items="breadcrumbsItems"></MsBreadcrumbs>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBreadcrumbs size="sm" :items="items" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'tabs'">
    <!-- 1. SHADCN BOXED / SEGMENTED PILLS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Abas Segmentadas / Boxed (Assinatura Shadcn UI)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shadcn Style</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div class="ms-tab-list--boxed" role="tablist">
            <button class="ms-tab--boxed ms-tab--selected" role="tab" aria-selected="true">Conta & Perfil</button>
            <button class="ms-tab--boxed" role="tab" aria-selected="false">Segurança</button>
            <button class="ms-tab--boxed" role="tab" aria-selected="false">Notificações</button>
            <button class="ms-tab--boxed" role="tab" aria-selected="false">Faturamento</button>
          </div>
        </div>
        <div style="padding: 16px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); font-size: 13px;">
          Painel ativo com superfície rebaixada sutil e pílula flutuante de alto contraste.
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Abas em container rebaixado com pílulas segmentadas -->
<div class="ms-tab-list--boxed" role="tablist">
  <button class="ms-tab--boxed ms-tab--selected">Conta & Perfil</button>
  <button class="ms-tab--boxed">Segurança</button>
  <button class="ms-tab--boxed">Notificações</button>
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. UNDERLINE / LINE TABS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Abas com Linha Inferior (Line / Underline Clássica)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Underline</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px;">
        <MsTabs variant="line" model-value="t1" style="width: 100%;">
          <MsTabList aria-label="Abas Line">
            <MsTab value="t1">Visão Geral do Projeto</MsTab>
            <MsTab value="t2">Métricas de Desempenho</MsTab>
            <MsTab value="t3">Logs & Auditoria</MsTab>
            <MsTab value="t4">Configurações Avançadas</MsTab>
          </MsTabList>
        </MsTabs>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTabs variant="line" v-model="tab">
  <MsTabList>
    <MsTab value="t1">Visão Geral do Projeto</MsTab>
    <MsTab value="t2">Métricas de Desempenho</MsTab>
    <MsTab value="t3">Logs & Auditoria</MsTab>
  </MsTabList>
</MsTabs>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. TABS COM ÍCONES & BADGES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Abas com Ícones & Badges de Notificação (FlyonUI Pattern)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Badges & Icons</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 20px;">
        <MsTabs variant="line" model-value="inbox" style="width: 100%;">
          <MsTabList>
            <MsTab value="inbox" style="display: inline-flex; align-items: center; gap: 8px;">
              <span>📬 Caixa de Entrada</span>
              <MsBadge tone="primary" variant="soft" pill size="xs">14</MsBadge>
            </MsTab>
            <MsTab value="starred" style="display: inline-flex; align-items: center; gap: 8px;">
              <span>⭐ Favoritos</span>
              <MsBadge tone="warning" variant="soft" pill size="xs">3</MsBadge>
            </MsTab>
            <MsTab value="updates" style="display: inline-flex; align-items: center; gap: 8px;">
              <span>🚀 Atualizações</span>
              <MsBadge tone="success" variant="soft" pill size="xs">Novo</MsBadge>
            </MsTab>
            <MsTab value="spam" style="display: inline-flex; align-items: center; gap: 8px;">
              <span>🗑️ Lixeira</span>
            </MsTab>
          </MsTabList>
        </MsTabs>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTab value="inbox">
  <span>📬 Caixa de Entrada</span>
  <MsBadge tone="primary" variant="soft" pill size="xs">14</MsBadge>
</MsTab>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. ENCLOSED FOLDER TABS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Abas Fechadas em Pasta (Enclosed / Folder Tabs)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Enclosed</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px;">
        <MsTabs variant="enclosed" model-value="f1" style="width: 100%;">
          <MsTabList>
            <MsTab value="f1">📄 Documento.vue</MsTab>
            <MsTab value="f2">🎨 Estilos.css</MsTab>
            <MsTab value="f3">⚙️ Config.json</MsTab>
            <MsTab value="f4">🧪 Testes.spec.ts</MsTab>
          </MsTabList>
        </MsTabs>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTabs variant="enclosed" v-model="activeFile">
  <MsTabList>
    <MsTab value="f1">📄 Documento.vue</MsTab>
    <MsTab value="f2">🎨 Estilos.css</MsTab>
  </MsTabList>
</MsTabs>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. VERTICAL SIDEBAR TABS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Abas Verticais de Navegação Lateral (Vertical Settings Layout)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Vertical Layout</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px;">
        <div style="display: flex; gap: 32px; width: 100%; min-height: 160px;">
          <div style="width: 200px; flex-shrink: 0;">
            <MsTabs orientation="vertical" variant="line" model-value="v1">
              <MsTabList>
                <MsTab value="v1">Geral</MsTab>
                <MsTab value="v2">Aparência & Tema</MsTab>
                <MsTab value="v3">Notificações</MsTab>
                <MsTab value="v4">Chaves de API</MsTab>
              </MsTabList>
            </MsTabs>
          </div>
          <div style="flex: 1; padding: 16px; background: var(--ms-color-surface-sunken); border-radius: var(--ms-radius-md); font-size: 13px;">
            <div style="font-weight: 700; margin-bottom: 8px;">Configurações Gerais da Aplicação</div>
            <p style="margin: 0; color: var(--ms-color-text-secondary);">
              Alterne entre as abas laterais para visualizar diferentes painéis de configuração corporativa.
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTabs orientation="vertical" variant="line" v-model="tab">
  <MsTabList>
    <MsTab value="v1">Geral</MsTab>
    <MsTab value="v2">Aparência & Tema</MsTab>
  </MsTabList>
</MsTabs>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. FITTED FULL-WIDTH TABS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Abas com Largura Total Distribuída (Fitted / 100% Width)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Fitted Width</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px;">
        <MsTabs variant="line" fitted model-value="fit1" style="width: 100%;">
          <MsTabList>
            <MsTab value="fit1">Mensal</MsTab>
            <MsTab value="fit2">Semestral (10% off)</MsTab>
            <MsTab value="fit3">Anual (25% off)</MsTab>
          </MsTabList>
        </MsTabs>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTabs variant="line" fitted v-model="period">
  <MsTabList>
    <MsTab value="monthly">Mensal</MsTab>
    <MsTab value="yearly">Anual (25% off)</MsTab>
  </MsTabList>
</MsTabs>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 7. SIZES SCALE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. Escala de Alturas & Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; flex-direction: column; gap: 20px;">
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 6px;">PEQUENO (sm - 32px)</span>
          <MsTabs size="sm" variant="pill" model-value="s1">
            <MsTabList><MsTab value="s1">Diário</MsTab><MsTab value="s2">Semanal</MsTab><MsTab value="s3">Mensal</MsTab></MsTabList>
          </MsTabs>
        </div>
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 6px;">MÉDIO (md - 40px - Padrão)</span>
          <MsTabs size="md" variant="pill" model-value="s1">
            <MsTabList><MsTab value="s1">Diário</MsTab><MsTab value="s2">Semanal</MsTab><MsTab value="s3">Mensal</MsTab></MsTabList>
          </MsTabs>
        </div>
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 6px;">GRANDE (lg - 48px)</span>
          <MsTabs size="lg" variant="pill" model-value="s1">
            <MsTabList><MsTab value="s1">Diário</MsTab><MsTab value="s2">Semanal</MsTab><MsTab value="s3">Mensal</MsTab></MsTabList>
          </MsTabs>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTabs size="sm" variant="pill">...</MsTabs>
<MsTabs size="md" variant="pill">...</MsTabs>
<MsTabs size="lg" variant="pill">...</MsTabs>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'inputs'">
    <!-- 1. 8 BRAND TONES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsInput nos 8 Tons Semânticos da Marca (Bordas & Focus Glow)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; width: 100%;">
          <div v-for="t in allTones" :key="t">
            <label style="display: block; font-size: 11px; font-weight: 700; margin-bottom: 4px; text-transform: uppercase; color: var(--ms-color-text-secondary);">
              {{ t }} ({{ toneHexMap[t] }})
            </label>
            <MsInput :tone="t" :model-value="'Tom: ' + t" size="md" />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsInput tone="primary" model-value="Tom: primary" />
<MsInput tone="accent" model-value="Tom: accent" />
<MsInput tone="success" model-value="Tom: success" />
<MsInput tone="danger" model-value="Tom: danger" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. SURFACE VARIANTS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes de Superfície (Outline, Soft FlyonUI, Filled, Flushed, Ghost Shadcn)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Surface Variants</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; width: 100%;">
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Outline (Padrão Hairline Corporativo):</label>
            <MsInput variant="outline" tone="primary" placeholder="Borda nítida e focus ring..." />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Soft (Fundo Pastel com Tint do Tom - FlyonUI):</label>
            <MsInput variant="soft" tone="primary" placeholder="Superfície sutilmente colorida..." />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Filled (Superfície Rebaixada Preenchida):</label>
            <MsInput variant="filled" tone="primary" placeholder="Fundo sunken integrado..." />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Flushed (Apenas Linha Inferior):</label>
            <MsInput variant="flushed" tone="primary" placeholder="Underline minimalista..." />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Ghost (Sem Borda até o Foco - Shadcn):</label>
            <MsInput variant="ghost" tone="primary" placeholder="Ghost inline editável..." />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Variantes de superfície autênticas FlyonUI / Shadcn -->
<MsInput variant="outline" placeholder="Outline hairline" />
<MsInput variant="soft" tone="primary" placeholder="Soft pastel tint" />
<MsInput variant="filled" placeholder="Filled background" />
<MsInput variant="flushed" placeholder="Flushed underline" />
<MsInput variant="ghost" placeholder="Ghost transparent" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. SIZES SCALE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala Completa de Tamanhos (xs 28px, sm 32px, md 40px, lg 48px)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 480px;">
          <MsInput size="xs" tone="primary" placeholder="XS — 28px de altura (Extra Compacto / Data Grids)" />
          <MsInput size="sm" tone="primary" placeholder="SM — 32px de altura (Compacto / Toolbars)" />
          <MsInput size="md" tone="primary" placeholder="MD — 40px de altura (Padrão Corporativo)" />
          <MsInput size="lg" tone="primary" placeholder="LG — 48px de altura (Hero / Formulários de Destaque)" />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsInput size="xs" placeholder="XS (28px)" />
<MsInput size="sm" placeholder="SM (32px)" />
<MsInput size="md" placeholder="MD (40px) Padrão" />
<MsInput size="lg" placeholder="LG (48px)" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. SHAPES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Geometria e Formatos (Default Rounded, Pill Shape)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes & Radii</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 480px;">
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Formato Arredondado Padrão (radius-md):</label>
            <MsInput tone="primary" placeholder="Campo com cantos ligeiramente arredondados..." />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Formato Pílula Completo (pill / radius-full):</label>
            <MsInput pill tone="primary" placeholder="Campo totalmente arredondado (ideal para busca)..." />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Padrão com radius do tema -->
<MsInput placeholder="Rounded Padrão" />

<!-- Prop pill para buscas e estética moderna FlyonUI -->
<MsInput pill placeholder="Busca em pílula..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. PREFIX & SUFFIX SLOTS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Ícones e Adornos (Leading & Trailing Prefix / Suffix)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Slots & Adornments</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 480px;">
          <MsInput tone="primary" placeholder="contato@magicstyle.dev">
            <template #prefix><span style="font-size: 14px;">✉️</span></template>
          </MsInput>
          <MsInput tone="accent" placeholder="Pesquisar componentes, tokens ou guias...">
            <template #prefix><span style="font-size: 14px;">🔍</span></template>
            <template #suffix><kbd style="background: var(--ms-color-surface-subtle); padding: 2px 6px; border-radius: 4px; font-size: 10px; font-family: monospace; border: 1px solid var(--ms-color-border-subtle);">⌘K</kbd></template>
          </MsInput>
          <MsInput tone="neutral" placeholder="Código de verificação de segurança">
            <template #prefix><span style="font-size: 14px;">🔒</span></template>
            <template #suffix><span style="font-size: 11px; color: var(--ms-color-text-muted); font-weight: 600;">6 DÍGITOS</span></template>
          </MsInput>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsInput placeholder="contato@magicstyle.dev">
  <template #prefix>✉️</template>
</MsInput>

<MsInput placeholder="Pesquisar...">
  <template #prefix>🔍</template>
  <template #suffix><kbd>⌘K</kbd></template>
</MsInput>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. INPUT ADDONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Addons Anexados de Texto e Moeda (.ms-input-addon)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Input Addons</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 480px;">
          <!-- URL Group -->
          <div class="ms-input-group">
            <span class="ms-input-addon ms-input-addon--prefix">https://</span>
            <MsInput placeholder="meusistema" tone="primary" />
            <span class="ms-input-addon ms-input-addon--suffix">.magicstyle.dev</span>
          </div>

          <!-- Currency Group -->
          <div class="ms-input-group">
            <span class="ms-input-addon ms-input-addon--prefix">R$</span>
            <MsInput placeholder="1.250,00" tone="success" />
            <span class="ms-input-addon ms-input-addon--suffix">/mês</span>
          </div>

          <!-- Username Group -->
          <div class="ms-input-group">
            <span class="ms-input-addon ms-input-addon--prefix">@</span>
            <MsInput placeholder="brunocavalcante" tone="accent" />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- URL com prefixo e sufixo anexados -->
<div class="ms-input-group">
  <span class="ms-input-addon ms-input-addon--prefix">https://</span>
  <MsInput placeholder="meusistema" />
  <span class="ms-input-addon ms-input-addon--suffix">.magicstyle.dev</span>
</div>

<!-- Moeda brasileira com R$ -->
<div class="ms-input-group">
  <span class="ms-input-addon ms-input-addon--prefix">R$</span>
  <MsInput placeholder="1.250,00" tone="success" />
  <span class="ms-input-addon ms-input-addon--suffix">/mês</span>
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 7. ATTACHED ACTION BUTTONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. Grupos com Botão de Ação Anexado (.ms-input-group)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Attached Buttons</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 480px;">
          <!-- Search button attached -->
          <div class="ms-input-group">
            <MsInput placeholder="Digite o termo para buscar..." tone="primary" />
            <MsButton variant="solid" tone="primary" wave>Buscar</MsButton>
          </div>

          <!-- Copy link attached -->
          <div class="ms-input-group">
            <MsInput model-value="https://magicstyle.dev/releases/v1.2" readonly tone="neutral" />
            <MsButton variant="outline" tone="neutral">Copiar</MsButton>
          </div>

          <!-- Newsletter subscribe -->
          <div class="ms-input-group">
            <MsInput placeholder="Insira seu melhor e-mail..." tone="accent" />
            <MsButton variant="solid" tone="accent" wave>Inscrever-se</MsButton>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Input com botão de pesquisa anexado (Shadcn pattern) -->
<div class="ms-input-group">
  <MsInput placeholder="Digite para buscar..." tone="primary" />
  <MsButton variant="solid" tone="primary">Buscar</MsButton>
</div>

<!-- Input de link compartilhável com botão copiar -->
<div class="ms-input-group">
  <MsInput model-value="https://..." readonly />
  <MsButton variant="outline">Copiar</MsButton>
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 8. VALIDATION & SEMANTIC FEEDBACK -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">8. Matriz de Validação & Feedback Semântico</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Validation & States</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
          <!-- Valid state -->
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--ms-color-success);">
              Válido / Disponível
            </label>
            <MsInput tone="success" model-value="brunocavalcante_dev">
              <template #suffix><span style="color: var(--ms-color-success); font-weight: bold;">✓</span></template>
            </MsInput>
            <div style="font-size: 11px; color: var(--ms-color-success); margin-top: 4px;">Nome de usuário aprovado e livre para registro.</div>
          </div>

          <!-- Invalid state -->
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--ms-color-danger);">
              Inválido / Erro de Validação
            </label>
            <MsInput tone="danger" invalid model-value="email-incorreto@">
              <template #suffix><span style="color: var(--ms-color-danger); font-weight: bold;">⚠</span></template>
            </MsInput>
            <div style="font-size: 11px; color: var(--ms-color-danger); margin-top: 4px;">Por favor, informe um endereço de e-mail corporativo válido.</div>
          </div>

          <!-- Processing / Loading state -->
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--ms-color-primary);">
              Verificação em Andamento
            </label>
            <MsInput tone="primary" processing model-value="Verificando no servidor..." />
            <div style="font-size: 11px; color: var(--ms-color-text-muted); margin-top: 4px;">Consultando disponibilidade na base de dados...</div>
          </div>

          <!-- Disabled state -->
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--ms-color-text-muted);">
              Campo Bloqueado
            </label>
            <MsInput disabled model-value="Plano Administrador (Bloqueado)" tone="neutral" />
            <div style="font-size: 11px; color: var(--ms-color-text-muted); margin-top: 4px;">Você não possui permissão para editar este parâmetro.</div>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Estado Válido com tom de sucesso -->
<MsInput tone="success" model-value="username_ok">
  <template #suffix>✓</template>
</MsInput>

<!-- Estado Inválido com prop invalid e tom danger -->
<MsInput invalid tone="danger" model-value="err@" />

<!-- Estado com Spinner embutido -->
<MsInput processing model-value="Consultando..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 9. CLEARABLE & PASSWORD TOGGLE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">9. Interatividade com Clearable e Revelação de Senha</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Interactive Features</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 480px;">
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Campo com botão de limpeza rápida (clearable):</label>
            <MsInput clearable model-value="Clique no 'X' para limpar este texto" tone="primary" />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Campo de Senha com Alternador Revelar/Ocultar (password-toggle):</label>
            <MsInput password-toggle type="password" model-value="MagicStyle#2026!" tone="accent" />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Prop clearable adiciona ícone de limpeza com 1 clique -->
<MsInput clearable model-value="Texto limpável" />

<!-- Prop password-toggle para alternar visibilidade de senhas -->
<MsInput type="password" password-toggle model-value="SecretPass123!" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 10. MSTEXTAREA -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">10. MsTextarea (Área de Texto com Contador de Caracteres e Redimensionamento)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">MsTextarea</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 520px;">
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Textarea com Contador de Caracteres Restantes:</label>
            <MsTextarea
              rows="3"
              placeholder="Digite o resumo ou justificativa..."
              show-count
              max-length="200"
              model-value="O Design System MagicStyle implementa a especificação DTCG e Baseline 1.2 com foco em acessibilidade e estética premium."
            />
          </div>
          <div>
            <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Textarea com Bloqueio de Redimensionamento (resize="none") e Tom Accent:</label>
            <MsTextarea rows="2" resize="none" tone="accent" placeholder="Comentários internos confidenciais..." />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- MsTextarea com limite e contador dinâmico -->
<MsTextarea
  rows="3"
  show-count
  :max-length="200"
  placeholder="Mensagem..."
/>

<!-- Textarea de tamanho fixo sem redimensionamento -->
<MsTextarea rows="2" resize="none" tone="accent" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'search-fields'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSearchField em Variantes de Estilo</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 440px;">
        <MsSearchField variant="outline" shortcut="⌘K" placeholder="Pesquisar componentes (Outline)..."></MsSearchField>
        <MsSearchField variant="filled" shortcut="Ctrl+K" placeholder="Pesquisar tokens (Filled)..."></MsSearchField>
        <MsSearchField variant="flushed" shortcut="/" placeholder="Pesquisa rápida (Flushed)..."></MsSearchField>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSearchField variant="outline" shortcut="⌘K" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos & Estados (Loading, Limpável)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes & Loading</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 440px;">
        <MsSearchField size="sm" placeholder="Tamanho Pequeno (sm)"></MsSearchField>
        <MsSearchField size="md" loading placeholder="Carregando resultados da API..."></MsSearchField>
        <MsSearchField size="lg" clearable model-value="Termo digitado" placeholder="Tamanho Grande (lg)"></MsSearchField>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSearchField size="sm" />
<MsSearchField loading />
<MsSearchField clearable />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'selections'">
    
    <!-- 1. SWITCHES IN 8 BRAND TONES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSwitch nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; width: 100%;">
          <div v-for="t in allTones" :key="t" style="display: flex; align-items: center; gap: 8px;">
            <MsSwitch :tone="t" :model-value="true" />
            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: var(--ms-color-text-secondary);">{{ t }}</span>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSwitch tone="primary" :model-value="true" label="PRIMARY" />
<MsSwitch tone="accent" :model-value="true" label="ACCENT" />
<MsSwitch tone="success" :model-value="true" label="SUCCESS" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <!-- 2. SWITCHES WITH LABELS AND DESCRIPTIONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. MsSwitch com Rótulo e Descrição (Settings Row — Shadcn Pattern)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Settings Toggles</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 520px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 8px;">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: var(--ms-color-text-primary);">Autenticação em Duas Etapas (2FA)</div>
              <div style="font-size: 12px; color: var(--ms-color-text-muted);">Exigir código OTP ao fazer login em novas máquinas.</div>
            </div>
            <MsSwitch :model-value="true" tone="primary" />
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 8px;">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: var(--ms-color-text-primary);">Aceleração de Renderização por GPU</div>
              <div style="font-size: 12px; color: var(--ms-color-text-muted);">Melhora a taxa de quadros e transições em gráficos complexos.</div>
            </div>
            <MsSwitch :model-value="true" tone="accent" />
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 8px;">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: var(--ms-color-text-primary);">Modo de Depuração (Bloqueado)</div>
              <div style="font-size: 12px; color: var(--ms-color-text-muted);">Disponível apenas em ambiente de desenvolvimento.</div>
            </div>
            <MsSwitch :model-value="false" disabled tone="neutral" />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Linha de configuração com switch integrado -->
<div class="settings-row">
  <div class="settings-text">
    <h4>Autenticação em Duas Etapas (2FA)</h4>
    <p>Exigir código OTP ao fazer login...</p>
  </div>
  <MsSwitch v-model="twoFactorEnabled" tone="primary" />
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. CHECKBOXES IN 8 BRAND TONES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. MsCheckbox nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; width: 100%;">
          <MsCheckbox v-for="t in allTones" :key="t" :tone="t" :model-value="true" :label="t.toUpperCase()" />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsCheckbox tone="primary" :model-value="true" label="PRIMARY" />
<MsCheckbox tone="accent" :model-value="true" label="ACCENT" />
<MsCheckbox tone="success" :model-value="true" label="SUCCESS" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <!-- 4. CHECKBOX STATES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. MsCheckbox com Estado Indeterminado & Desabilitado</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Checkbox States</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <MsCheckbox tone="primary" indeterminate label="Seleção Parcial (Indeterminate)" />
          <MsCheckbox tone="primary" disabled :model-value="true" label="Marcado Desabilitado" />
          <MsCheckbox tone="primary" disabled :model-value="false" label="Desmarcado Desabilitado" />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Estado indeterminado para árvores e tabelas com seleção parcial -->
<MsCheckbox tone="primary" indeterminate label="Seleção Parcial" />

<!-- Estados desabilitados imutáveis -->
<MsCheckbox tone="primary" disabled :model-value="true" label="Marcado Bloqueado" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. CHOICE TILES / PRICING CARDS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Cartões de Seleção de Planos (Choice Tiles — FlyonUI & Shadcn Pattern)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Choice Tiles</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; width: 100%;">
          <!-- Starter Plan -->
          <div style="padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: 10px; background: var(--ms-color-surface-raised); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <div style="font-size: 15px; font-weight: 700; color: var(--ms-color-text-primary);">Plano Starter</div>
                <div style="font-size: 20px; font-weight: 800; color: var(--ms-color-text-primary); margin-top: 4px;">R$ 49<span style="font-size: 12px; font-weight: 400; color: var(--ms-color-text-muted);">/mês</span></div>
              </div>
              <input type="radio" name="plan_demo" style="cursor: pointer; width: 18px; height: 18px;" />
            </div>
            <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Para desenvolvedores solo e pequenos projetos pessoais.</div>
          </div>

          <!-- Pro Plan (Selected) -->
          <div style="padding: 16px; border: 2px solid var(--ms-color-primary); border-radius: 10px; background: color-mix(in oklch, var(--ms-color-primary) 6%, var(--ms-color-surface-raised)); display: flex; flex-direction: column; gap: 8px; box-shadow: 0 4px 12px rgba(46, 134, 222, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 15px; font-weight: 700; color: var(--ms-color-primary);">Plano Profissional</span>
                  <MsBadge tone="primary" variant="solid" data-pill>Popular</MsBadge>
                </div>
                <div style="font-size: 20px; font-weight: 800; color: var(--ms-color-text-primary); margin-top: 4px;">R$ 149<span style="font-size: 12px; font-weight: 400; color: var(--ms-color-text-muted);">/mês</span></div>
              </div>
              <input type="radio" name="plan_demo" checked style="cursor: pointer; width: 18px; height: 18px;" />
            </div>
            <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Acesso completo aos 51 componentes, temas ilimitados e suporte.</div>
          </div>

          <!-- Enterprise Plan -->
          <div style="padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: 10px; background: var(--ms-color-surface-raised); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <div style="font-size: 15px; font-weight: 700; color: var(--ms-color-text-primary);">Plano Enterprise</div>
                <div style="font-size: 20px; font-weight: 800; color: var(--ms-color-text-primary); margin-top: 4px;">R$ 499<span style="font-size: 12px; font-weight: 400; color: var(--ms-color-text-muted);">/mês</span></div>
              </div>
              <input type="radio" name="plan_demo" style="cursor: pointer; width: 18px; height: 18px;" />
            </div>
            <div style="font-size: 12px; color: var(--ms-color-text-secondary);">SLA de 1h garantido, SSO SAML 2.0 e deploy on-premise.</div>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Cartões selecionáveis para precificação e opções exclusivas -->
<div class="plan-card active">
  <div class="plan-header">
    <div class="plan-name">Plano Profissional</div>
    <input type="radio" name="plan" checked />
  </div>
  <div class="plan-price">R$ 149/mês</div>
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'fields'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Layouts de Campo Acessíveis (Vertical vs Horizontal)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Form Layouts</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 500px;">
        <MsField label="Nome Completo" description="Conforme impresso no documento de identidade" required>
          <MsInput placeholder="Ex: Ada Lovelace" tone="primary"></MsInput>
        </MsField>
        <MsField label="E-mail Corporativo" error="Insira um e-mail corporativo válido." required>
          <MsInput placeholder="user@company.com" tone="danger" invalid></MsInput>
        </MsField>
        <MsField label="Telefone de Contato" optional>
          <MsInput placeholder="+55 (11) 99999-9999" tone="neutral"></MsInput>
        </MsField>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsField label="Nome" required description="...">
  <MsInput />
</MsField>
<MsField label="Email" error="Invalido">
  <MsInput invalid tone="danger" />
</MsField>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'native-select'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsNativeSelect nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t">
          <label style="display: block; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase;">{{ t }}</label>
          <MsNativeSelect :tone="t" :options="nativeSelectOptions" model-value="vue"></MsNativeSelect>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNativeSelect tone="primary" :options="options" v-model="val" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes (Outline, Filled, Flushed) & Formato Pill</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Variants & Pill</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 440px;">
        <MsNativeSelect variant="outline" tone="primary" :options="nativeSelectOptions" model-value="vue"></MsNativeSelect>
        <MsNativeSelect variant="filled" tone="primary" :options="nativeSelectOptions" model-value="tokens"></MsNativeSelect>
        <MsNativeSelect variant="flushed" tone="primary" :options="nativeSelectOptions" model-value="baseline"></MsNativeSelect>
        <MsNativeSelect pill tone="accent" :options="nativeSelectOptions" model-value="vue"></MsNativeSelect>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNativeSelect variant="filled" :options="options" />
<MsNativeSelect pill :options="options" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala de Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 440px;">
        <MsNativeSelect size="sm" :options="nativeSelectOptions" model-value="vue"></MsNativeSelect>
        <MsNativeSelect size="md" :options="nativeSelectOptions" model-value="vue"></MsNativeSelect>
        <MsNativeSelect size="lg" :options="nativeSelectOptions" model-value="vue"></MsNativeSelect>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNativeSelect size="sm" :options="options" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'select'">
    
    <!-- 1. DEFAULT SELECT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Seleção Única Padrão (Default Select)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Default Single</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <label style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary);">Framework Frontend:</label>
        <MsSelect
          v-model="singleSelectValue"
          :options="flatSelectOptions"
          placeholder="Selecione um framework..."
          clearable
        />
        <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Valor Selecionado: <MsCode>{{ singleSelectValue }}</MsCode></div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  v-model="val"
  :options="options"
  placeholder="Selecione um framework..."
  clearable
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. SIZING SCALE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala Completa de Tamanhos (Sizing: xs, sm, md, lg, xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Size Scale</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <MsSelect size="xs" :options="flatSelectOptions" model-value="vue" placeholder="XS (28px)" />
        <MsSelect size="sm" :options="flatSelectOptions" model-value="vue" placeholder="SM (32px)" />
        <MsSelect size="md" :options="flatSelectOptions" model-value="vue" placeholder="MD (40px) - Padrão" />
        <MsSelect size="lg" :options="flatSelectOptions" model-value="vue" placeholder="LG (48px)" />
        <MsSelect size="xl" :options="flatSelectOptions" model-value="vue" placeholder="XL (56px)" />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect size="xs" :options="options" placeholder="XS (28px)" />
<MsSelect size="sm" :options="options" placeholder="SM (32px)" />
<MsSelect size="md" :options="options" placeholder="MD (40px) - Padrão" />
<MsSelect size="lg" :options="options" placeholder="LG (48px)" />
<MsSelect size="xl" :options="options" placeholder="XL (56px)" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. MULTIPLE SELECTION WITH TAGS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Múltipla Seleção com Tags Removíveis (Multiple Selection)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Multiple Tags</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <MsSelect
          multiple
          clearable
          v-model="multiSelectValue"
          :options="flatSelectOptions"
          placeholder="Selecione múltiplas tecnologias..."
        />
        <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Array Selecionado: <MsCode>{{ multiSelectValue }}</MsCode></div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  clearable
  v-model="selectedList"
  :options="options"
  placeholder="Selecione múltiplas tecnologias..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. MULTIPLE WITH COUNTER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Múltipla com Contador Compacto (Multiple With Counter)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Counter Badge</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          A prop <MsCode>counter</MsCode> substitui tags extensas por um badge compacto indicando o total selecionado.
        </p>
        <MsSelect
          multiple
          counter
          :options="flatSelectOptions"
          :model-value="[&apos;vue&apos;, &apos;tokens&apos;, &apos;css&apos;]"
          placeholder="Selecione tecnologias..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  counter
  :options="options"
  :model-value="[&apos;vue&apos;, &apos;tokens&apos;, &apos;css&apos;]"
  placeholder="Selecione tecnologias..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. CONDITIONAL COUNTER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Contador Condicional (Conditional Counter: +N Mais)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">conditional-counter="2"</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          Exibe os primeiros <MsCode>N</MsCode> itens como tags completas e agrupa os excedentes no badge numérico <MsCode>+N mais</MsCode>.
        </p>
        <MsSelect
          multiple
          :conditional-counter="2"
          :options="flatSelectOptions"
          :model-value="[&apos;vue&apos;, &apos;tokens&apos;, &apos;css&apos;, &apos;baseline&apos;]"
          clearable
          placeholder="Selecione opções..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  :conditional-counter="2"
  :options="options"
  :model-value="[&apos;vue&apos;, &apos;tokens&apos;, &apos;css&apos;, &apos;baseline&apos;]"
  clearable
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. MULTIPLE WITH OPTION TEMPLATE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Múltipla com Template Customizado de Opção (Option Template)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Option Slot</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <MsSelect
          multiple
          clearable
          v-model="multiSelectValue"
          :options="flatSelectOptions"
          placeholder="Selecione com templates visuais..."
        >
          <template #option="{ option, selected }">
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <span style="font-weight: 500;">{{ option.label }}</span>
              <span v-if="selected" style="font-size: 11px; font-weight: 600; color: var(--ms-color-primary);">✓ Marcado</span>
            </div>
          </template>
        </MsSelect>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  clearable
  v-model="selectedItems"
  :options="options"
>
  <template #option="{ option, selected }">
    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
      <span>{{ option.label }}</span>
      <span v-if="selected" style="font-size: 11px; color: var(--ms-color-primary);">✓ Marcado</span>
    </div>
  </template>
</MsSelect>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 7. SEARCHABLE SELECT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. Busca Integrada em Tempo Real (Searchable Select)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Search Filter</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <MsSelect
          searchable
          clearable
          :options="flatSelectOptions"
          placeholder="Digite para pesquisar em tempo real..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  searchable
  clearable
  :options="options"
  placeholder="Digite para pesquisar em tempo real..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 8. SEARCH WITH LIMIT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">8. Busca com Limite de Resultados (Search With Limit)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">search-limit="3"</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          A prop <MsCode>:search-limit="3"</MsCode> restringe a lista renderizada a no máximo 3 correspondências para otimização de DOM.
        </p>
        <MsSelect
          searchable
          :search-limit="3"
          :options="flatSelectOptions"
          placeholder="Pesquise (máximo 3 itens visíveis)..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  searchable
  :search-limit="3"
  :options="options"
  placeholder="Pesquise (máximo 3 itens visíveis)..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 9. MINIMAL SEARCH LENGTH -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">9. Comprimento Mínimo para Busca (Minimal Search Length)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">min-search-length="3"</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          A prop <MsCode>:min-search-length="3"</MsCode> exige que o usuário digite pelo menos 3 caracteres antes de disparar o filtro.
        </p>
        <MsSelect
          searchable
          :min-search-length="3"
          :options="flatSelectOptions"
          placeholder="Digite ao menos 3 caracteres..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  searchable
  :min-search-length="3"
  :options="options"
  placeholder="Digite ao menos 3 caracteres..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 10. DIRECT MATCH SEARCHING OFF (FUZZY SUBSTRING) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">10. Busca Não-Estrita / Substring (Direct Match Searching Off)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Substring Matching</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          Busca por qualquer trecho do texto (ex: digite "dial" para encontrar "Design Tokens").
        </p>
        <MsSelect
          searchable
          clearable
          :options="flatSelectOptions"
          placeholder="Digite qualquer trecho (ex: 'dial' ou 'aa')..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Busca por qualquer fragmento interno do rótulo ou descrição -->
<MsSelect
  searchable
  clearable
  :options="options"
  placeholder="Busca por qualquer trecho..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 11. REMOVABLE TAGS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">11. Tags Removíveis e Tons de Marca (Removable Tags Showcase)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Tag Colors</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Tom Primário (Primary Blue):</label>
          <MsSelect multiple tone="primary" :options="flatSelectOptions" :model-value="[&apos;vue&apos;, &apos;tokens&apos;]" clearable />
        </div>
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Tom Roxo (Accent Purple):</label>
          <MsSelect multiple tone="accent" :options="flatSelectOptions" :model-value="[&apos;tokens&apos;, &apos;css&apos;]" clearable />
        </div>
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Tom Sucesso (Success Emerald):</label>
          <MsSelect multiple tone="success" :options="flatSelectOptions" :model-value="[&apos;baseline&apos;, &apos;tests&apos;]" clearable />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect multiple tone="primary" :options="options" :model-value="[&apos;vue&apos;, &apos;tokens&apos;]" clearable />
<MsSelect multiple tone="accent" :options="options" :model-value="[&apos;tokens&apos;, &apos;css&apos;]" clearable />
<MsSelect multiple tone="success" :options="options" :model-value="[&apos;baseline&apos;, &apos;tests&apos;]" clearable />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 12. DISABLED -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">12. Componente Totalmente Desabilitado (Disabled)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Disabled State</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <MsSelect disabled :options="flatSelectOptions" model-value="vue" />
        <MsSelect disabled multiple :options="flatSelectOptions" :model-value="[&apos;vue&apos;, &apos;tokens&apos;]" />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect disabled :options="options" model-value="vue" />
<MsSelect disabled multiple :options="options" :model-value="[&apos;vue&apos;, &apos;tokens&apos;]" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 13. FLOATING LABEL -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">13. Rótulo Flutuante (Floating Label)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Floating Label</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <MsSelect
          floating-label="Tecnologia Principal"
          :options="flatSelectOptions"
          v-model="singleSelectValue"
        />
        <MsSelect
          floating-label="Tecnologias Habilitadas"
          multiple
          :options="flatSelectOptions"
          v-model="multiSelectValue"
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  floating-label="Tecnologia Principal"
  :options="options"
  v-model="val"
/>
<MsSelect
  floating-label="Tecnologias Habilitadas"
  multiple
  :options="options"
  v-model="multiVal"
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 14. LEADING ICONS / PREFIX -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">14. Ícones e Prefixos Iniciais (Leading Icons & Prefix)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Leading Prefix</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Via Prop prefix:</label>
          <MsSelect prefix="⚡" :options="flatSelectOptions" v-model="singleSelectValue" />
        </div>
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Via Slot #prefix:</label>
          <MsSelect :options="flatSelectOptions" v-model="singleSelectValue">
            <template #prefix>
              <span style="font-size: 14px;">🎯</span>
            </template>
          </MsSelect>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Via prop prefix -->
<MsSelect prefix="⚡" :options="options" v-model="val" />

<!-- Via slot #prefix -->
<MsSelect :options="options" v-model="val">
  <template #prefix>
    <span>🎯</span>
  </template>
</MsSelect>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 15. STATES (SUCCESS, INFO, DANGER, WARNING, INVALID) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">15. Matriz de Estados Semânticos (Success, Info, Warning, Danger, Invalid)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">State Tokens</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; width: 100%;">
          <div>
            <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block; color: var(--ms-color-success);">SUCESSO (SUCCESS)</label>
            <MsSelect tone="success" :options="flatSelectOptions" model-value="vue" />
          </div>
          <div>
            <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block; color: var(--ms-color-info);">INFORMATIVO (INFO)</label>
            <MsSelect tone="info" :options="flatSelectOptions" model-value="tokens" />
          </div>
          <div>
            <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block; color: var(--ms-color-warning);">ATENÇÃO (WARNING)</label>
            <MsSelect tone="warning" :options="flatSelectOptions" model-value="css" />
          </div>
          <div>
            <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block; color: var(--ms-color-danger);">PERIGO / ERRO (DANGER)</label>
            <MsSelect tone="danger" :options="flatSelectOptions" model-value="baseline" />
          </div>
          <div style="grid-column: 1 / -1;">
            <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block; color: var(--ms-color-danger);">ESTADO INVÁLIDO FORMULÁRIO (INVALID PROP)</label>
            <MsSelect invalid tone="danger" :options="flatSelectOptions" placeholder="Seleção obrigatória inválida" />
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect tone="success" :options="options" model-value="vue" />
<MsSelect tone="info" :options="options" model-value="tokens" />
<MsSelect tone="warning" :options="options" model-value="css" />
<MsSelect tone="danger" :options="options" model-value="baseline" />
<MsSelect invalid tone="danger" :options="options" placeholder="Campo obrigatório inválido" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 16. ROUNDED SELECT (5 SHAPES) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">16. Formas e Arredondamento (Rounded Select & Shapes)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">5 Shapes</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <div>
          <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Square (0px):</label>
          <MsSelect shape="square" :options="flatSelectOptions" model-value="vue" />
        </div>
        <div>
          <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Rounded-SM (Suave):</label>
          <MsSelect shape="rounded-sm" :options="flatSelectOptions" model-value="vue" />
        </div>
        <div>
          <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Rounded (Padrão):</label>
          <MsSelect shape="rounded" :options="flatSelectOptions" model-value="vue" />
        </div>
        <div>
          <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Rounded-LG (Curvatura Ampla):</label>
          <MsSelect shape="rounded-lg" :options="flatSelectOptions" model-value="vue" />
        </div>
        <div>
          <label style="font-size: 11px; font-weight: 600; margin-bottom: 2px; display: block;">Pill (Pílula Total):</label>
          <MsSelect shape="pill" :options="flatSelectOptions" model-value="vue" />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect shape="square" :options="options" model-value="vue" />
<MsSelect shape="rounded-sm" :options="options" model-value="vue" />
<MsSelect shape="rounded" :options="options" model-value="vue" />
<MsSelect shape="rounded-lg" :options="options" model-value="vue" />
<MsSelect shape="pill" :options="options" model-value="vue" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 17. GROUPED ELEMENTS (OPTGROUP) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">17. Opções Agrupadas por Categoria (Grouped Elements / optgroup)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">optgroup</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <MsSelect
          :options="selectOptions"
          v-model="singleSelectValue"
          placeholder="Selecione em categorias agrupadas..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='const groupedOptions = [
  {
    group: "Frontend & UI",
    options: [
      { value: "vue", label: "Vue 3 Engine" },
      { value: "tokens", label: "Design Tokens (DTCG)" }
    ]
  },
  {
    group: "Arquitetura & Qualidade",
    options: [
      { value: "baseline", label: "Baseline 1.2" },
      { value: "tests", label: "Vitest Tests" }
    ]
  }
];

<MsSelect :options="groupedOptions" v-model="val" placeholder="Selecione em categorias..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 18. PLACEHOLDER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">18. Marcador de Posição Customizado (Placeholder)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Placeholder</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <MsSelect
          :options="flatSelectOptions"
          :model-value="null"
          placeholder="Escolha a arquitetura do seu novo projeto..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  :options="options"
  :model-value="null"
  placeholder="Escolha a arquitetura do seu novo projeto..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 19. FIXED POSITION (FIX DROPDOWN VERTICAL PLACEMENT) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">19. Posicionamento Vertical Fixo do Dropdown (Fixed Placement: Top & Bottom)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Placement Control</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Forçar Abertura Superior (Top):</label>
          <MsSelect placement="top" :options="flatSelectOptions" placeholder="Abre fixo para cima (Top)..." />
        </div>
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Forçar Abertura Inferior (Bottom):</label>
          <MsSelect placement="bottom" :options="flatSelectOptions" placeholder="Abre fixo para baixo (Bottom)..." />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Dropdown posicionado acima do gatilho -->
<MsSelect placement="top" :options="options" placeholder="Abre para cima" />

<!-- Dropdown posicionado abaixo do gatilho -->
<MsSelect placement="bottom" :options="options" placeholder="Abre para baixo" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 20. TRIGGER DISABLED -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">20. Gatilho Desabilitado vs Ativo (Trigger Disabled)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Trigger Disabled</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Gatilho Ativo (Interativo):</label>
          <MsSelect :options="flatSelectOptions" model-value="vue" />
        </div>
        <div>
          <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;">Gatilho Travado (Disabled):</label>
          <MsSelect disabled :options="flatSelectOptions" model-value="vue" />
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Gatilho travado com cursor not-allowed e aria-disabled="true" -->
<MsSelect disabled :options="options" model-value="vue" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 21. OPTION DISABLED -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">21. Opções Individuais Desabilitadas (Option Disabled)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">disabled: true</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          Itens marcados com <MsCode>disabled: true</MsCode> são esmaecidos e ignorados na navegação por teclado e cliques.
        </p>
        <MsSelect
          :options="disabledSelectOptions"
          placeholder="Abra para inspecionar opções desabilitadas..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='const options = [
  { value: "vue", label: "Vue 3 Engine (Ativo)" },
  { value: "legacy_jq", label: "jQuery 1.x (Desabilitado)", disabled: true },
  { value: "tokens", label: "Design Tokens (Ativo)" },
  { value: "flash", label: "Adobe Flash (Desabilitado)", disabled: true },
];

<MsSelect :options="options" placeholder="Abra para ver opções desabilitadas..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 22. CUSTOM OPTION WITH AVATAR AND METADATA -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">22. Opção Customizada com Avatar e Metadados (Custom Option Template)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Avatar & Subtitle</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <MsSelect
          :options="avatarSelectOptions"
          model-value="ana"
          placeholder="Selecione um líder..."
        >
          <template #selectedOption="{ option }">
            <div style="display: flex; align-items: center; gap: 8px;">
              <img :src="option.avatar" style="width: 22px; height: 22px; border-radius: 9999px; object-fit: cover;" />
              <span style="font-weight: 600;">{{ option.label }}</span>
              <span style="font-size: 11px; opacity: 0.7;">— {{ option.role }}</span>
            </div>
          </template>
          <template #option="{ option }">
            <div style="display: flex; align-items: center; gap: 10px; padding: 4px 0;">
              <img :src="option.avatar" style="width: 30px; height: 30px; border-radius: 9999px; object-fit: cover;" />
              <div>
                <div style="font-weight: 600; font-size: 13px;">{{ option.label }}</div>
                <div style="font-size: 11px; color: var(--ms-color-text-secondary);">{{ option.role }}</div>
              </div>
            </div>
          </template>
        </MsSelect>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect :options="avatarOptions" v-model="selectedUser">
  <template #selectedOption="{ option }">
    <div style="display: flex; align-items: center; gap: 8px;">
      <img :src="option.avatar" style="width: 22px; height: 22px; border-radius: 9999px;" />
      <span style="font-weight: 600;">{{ option.label }}</span>
      <span style="font-size: 11px; opacity: 0.7;">— {{ option.role }}</span>
    </div>
  </template>
  <template #option="{ option }">
    <div style="display: flex; align-items: center; gap: 10px; padding: 4px 0;">
      <img :src="option.avatar" style="width: 30px; height: 30px; border-radius: 9999px;" />
      <div>
        <div style="font-weight: 600; font-size: 13px;">{{ option.label }}</div>
        <div style="font-size: 11px; color: var(--ms-color-text-secondary);">{{ option.role }}</div>
      </div>
    </div>
  </template>
</MsSelect>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 23. ADD / REMOVE OPTIONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">23. Inserção e Remoção Dinâmica de Opções (Add / Remove Options)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Reactive Mutation</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <div style="display: flex; gap: 8px;">
          <MsButton size="sm" variant="soft" tone="primary" @click="addDynamicOption">+ Adicionar Opção</MsButton>
          <MsButton size="sm" variant="soft" tone="danger" @click="removeDynamicOption">- Remover Opção</MsButton>
        </div>
        <MsSelect :options="demoDynamicOptions" v-model="demoDynamicVal" />
        <div style="font-size: 12px; color: var(--ms-color-text-secondary);">
          Total de Opções no Array: <MsCode>{{ demoDynamicOptions.length }}</MsCode> | Valor Atual: <MsCode>{{ demoDynamicVal }}</MsCode>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<div style="display: flex; gap: 8px;">
  <MsButton size="sm" variant="soft" tone="primary" @click="addOption">+ Adicionar Opção</MsButton>
  <MsButton size="sm" variant="soft" tone="danger" @click="removeOption">- Remover Opção</MsButton>
</div>
<MsSelect :options="dynamicOptions" v-model="dynamicVal" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 24. DESTROY / REINITIALIZE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">24. Destruição e Reinicialização Reativa (Destroy / Reinitialize)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">v-if Teardown</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <div>
          <MsButton size="sm" variant="outline" :tone="demoSelectDestroyed ? &apos;success&apos; : &apos;danger&apos;" @click="toggleSelectDestroy">
            {{ demoSelectDestroyed ? "✓ Recriar Componente (Mount)" : "✕ Destruir Componente (Unmount)" }}
          </MsButton>
        </div>
        <div v-if="!demoSelectDestroyed">
          <MsSelect :options="flatSelectOptions" v-model="singleSelectValue" />
        </div>
        <div v-else style="padding: 16px; border: 1px dashed var(--ms-color-border); border-radius: 6px; text-align: center; color: var(--ms-color-text-secondary); font-size: 13px;">
          Componente desmontado do DOM. Event listeners de clique e atalhos limpos.
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsButton @click="destroyed = !destroyed">
  {{ destroyed ? "Recriar" : "Destruir" }}
</MsButton>

<MsSelect v-if="!destroyed" :options="options" v-model="val" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 25. SET A SINGLE VALUE WITH A SETTER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">25. Definição Programática de Valor Único (Set Single Value With Setter)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Single Setter</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <MsButton size="xs" variant="soft" tone="primary" @click="setSingleValue(&apos;vue&apos;)">Definir Vue 3</MsButton>
          <MsButton size="xs" variant="soft" tone="accent" @click="setSingleValue(&apos;tokens&apos;)">Definir Tokens</MsButton>
          <MsButton size="xs" variant="soft" tone="success" @click="setSingleValue(&apos;css&apos;)">Definir CSS</MsButton>
          <MsButton size="xs" variant="soft" tone="neutral" @click="setSingleValue(null)">Limpar (null)</MsButton>
        </div>
        <MsSelect :options="flatSelectOptions" v-model="setterSingleVal" clearable />
        <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Valor Atual no Model: <MsCode>{{ setterSingleVal }}</MsCode></div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<div style="display: flex; gap: 8px;">
  <MsButton size="xs" @click="setVal(&apos;vue&apos;)">Definir Vue 3</MsButton>
  <MsButton size="xs" @click="setVal(&apos;tokens&apos;)">Definir Tokens</MsButton>
  <MsButton size="xs" @click="setVal(null)">Limpar</MsButton>
</div>
<MsSelect :options="options" v-model="setterSingleVal" clearable />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 26. SET A MULTIPLE VALUE WITH A SETTER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">26. Definição Programática de Valores Múltiplos (Set Multiple Value With Setter)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Multi Setter</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <MsButton size="xs" variant="soft" tone="primary" @click="setMultiValue([&apos;vue&apos;, &apos;tokens&apos;])">[Vue, Tokens]</MsButton>
          <MsButton size="xs" variant="soft" tone="accent" @click="setMultiValue([&apos;tokens&apos;, &apos;css&apos;, &apos;baseline&apos;])">[Tokens, CSS, Baseline]</MsButton>
          <MsButton size="xs" variant="soft" tone="success" @click="setMultiValue([&apos;vue&apos;, &apos;tokens&apos;, &apos;css&apos;, &apos;baseline&apos;, &apos;a11y&apos;, &apos;tests&apos;])">Selecionar Todos</MsButton>
          <MsButton size="xs" variant="soft" tone="danger" @click="setMultiValue([])">Limpar Tudo</MsButton>
        </div>
        <MsSelect multiple :options="flatSelectOptions" v-model="setterMultiVal" clearable />
        <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Array no Model: <MsCode>{{ setterMultiVal }}</MsCode></div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<div style="display: flex; gap: 8px;">
  <MsButton size="xs" @click="setMulti([&apos;vue&apos;, &apos;tokens&apos;])">[Vue, Tokens]</MsButton>
  <MsButton size="xs" @click="setMulti([&apos;vue&apos;, &apos;tokens&apos;, &apos;css&apos;, &apos;baseline&apos;])">Selecionar Todos</MsButton>
  <MsButton size="xs" @click="setMulti([])">Limpar Tudo</MsButton>
</div>
<MsSelect multiple :options="options" v-model="setterMultiVal" clearable />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 27. REMOTE DATA SELECTION WITH MULTIPLE OPTIONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">27. Seleção Remota Assíncrona com Múltiplas Opções (Remote Data Selection)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Async Multi</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; color: var(--ms-color-text-secondary);">Simulação de carregamento da API:</span>
          <MsButton size="xs" variant="soft" tone="primary" @click="simulateRemoteSearch" :loading="remoteLoading">
            Simular Recarregamento
          </MsButton>
        </div>
        <MsSelect
          multiple
          searchable
          :loading="remoteLoading"
          :options="remoteOptions"
          v-model="remoteMultiVal"
          placeholder="Selecione desenvolvedores da API remota..."
          clearable
        />
        <div style="font-size: 12px; color: var(--ms-color-text-secondary);">Selecionados: <MsCode>{{ remoteMultiVal }}</MsCode></div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  searchable
  :loading="remoteLoading"
  :options="remoteOptions"
  v-model="selectedRemoteUsers"
  placeholder="Buscar membros da API..."
  clearable
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 28. REMOTE DATA WITH REMOVABLE TAGS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">28. Dados Remotos com Tags Removíveis (Remote Data Removable Tags)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Async Tags</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <MsSelect
          multiple
          clearable
          tone="accent"
          :options="remoteOptions"
          v-model="remoteMultiVal"
          placeholder="Gerenciar tags de usuários remotos..."
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  clearable
  tone="accent"
  :options="remoteOptions"
  v-model="remoteMultiVal"
  placeholder="Gerenciar tags de usuários remotos..."
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 29. MULTIPLE SELECTION WITH OPTION TEMPLATE (REMOTE DATA) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">29. Seleção Múltipla Remota com Template de Opção (Remote Option Template)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Remote Template</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <MsSelect
          multiple
          :options="remoteOptions"
          v-model="remoteMultiVal"
          placeholder="Selecione colaboradores remotos..."
        >
          <template #option="{ option, selected }">
            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <img :src="option.avatar" style="width: 22px; height: 22px; border-radius: 9999px; object-fit: cover;" />
                <span style="font-weight: 500;">{{ option.label }}</span>
              </div>
              <span style="font-size: 11px; color: var(--ms-color-text-secondary);">{{ option.role }}</span>
            </div>
          </template>
        </MsSelect>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  :options="remoteOptions"
  v-model="remoteMultiVal"
>
  <template #option="{ option, selected }">
    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <img :src="option.avatar" style="width: 22px; height: 22px; border-radius: 9999px;" />
        <span>{{ option.label }}</span>
      </div>
      <span style="font-size: 11px;">{{ option.role }}</span>
    </div>
  </template>
</MsSelect>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 30. MULTIPLE WITH CONDITIONAL COUNTER (REMOTE DATA) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">30. Múltipla Remota com Contador Condicional (Remote Conditional Counter)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Remote +N Mais</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <MsSelect
          multiple
          :conditional-counter="2"
          :options="remoteOptions"
          v-model="remoteMultiCounterVal"
          placeholder="Selecione colaboradores remotos..."
          clearable
        />
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  multiple
  :conditional-counter="2"
  :options="remoteOptions"
  v-model="remoteMultiCounterVal"
  clearable
/>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 31. CUSTOM TEMPLATE WITH AVATARS (REMOTE DATA) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">31. Template Remoto Completo com Avatares e Papéis (Remote Custom Avatars)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Remote Avatars</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 12px; max-width: 480px;">
        <MsSelect
          searchable
          :options="remoteOptions"
          v-model="remoteCustomVal"
          placeholder="Selecione um líder técnico..."
        >
          <template #selectedOption="{ option }">
            <div style="display: flex; align-items: center; gap: 8px;">
              <img :src="option.avatar" style="width: 22px; height: 22px; border-radius: 9999px; object-fit: cover;" />
              <span style="font-weight: 600;">{{ option.label }}</span>
              <span style="font-size: 11px; opacity: 0.7;">— {{ option.role }}</span>
            </div>
          </template>
          <template #option="{ option }">
            <div style="display: flex; align-items: center; gap: 10px; padding: 4px 0;">
              <img :src="option.avatar" style="width: 28px; height: 28px; border-radius: 9999px; object-fit: cover;" />
              <div>
                <div style="font-weight: 600;">{{ option.label }}</div>
                <div style="font-size: 11px; color: var(--ms-color-text-secondary);">{{ option.role }}</div>
              </div>
            </div>
          </template>
        </MsSelect>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSelect
  searchable
  :options="remoteOptions"
  v-model="remoteCustomVal"
  placeholder="Selecione um líder técnico..."
>
  <template #selectedOption="{ option }">
    <div style="display: flex; align-items: center; gap: 8px;">
      <img :src="option.avatar" style="width: 22px; height: 22px; border-radius: 9999px;" />
      <span style="font-weight: 600;">{{ option.label }}</span>
      <span style="font-size: 11px; opacity: 0.7;">— {{ option.role }}</span>
    </div>
  </template>
  <template #option="{ option }">
    <div style="display: flex; align-items: center; gap: 10px; padding: 4px 0;">
      <img :src="option.avatar" style="width: 28px; height: 28px; border-radius: 9999px;" />
      <div>
        <div style="font-weight: 600;">{{ option.label }}</div>
        <div style="font-size: 11px; color: var(--ms-color-text-secondary);">{{ option.role }}</div>
      </div>
    </div>
  </template>
</MsSelect>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 32. MODAL & OVERFLOW: HIDDEN (TELEPORT ESCAPE) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">32. Dropdown com Escape de Overflow & Modal (Teleport Escape)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">teleport="body"</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
        <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">
          A prop <MsCode>teleport="body"</MsCode> transfere o dropdown via <MsCode>&lt;Teleport&gt;</MsCode> para o topo da árvore DOM, calculando posição absoluta/fixed via <MsCode>getBoundingClientRect()</MsCode>. Isso impede o corte de conteúdo em contêineres com <MsCode>overflow: hidden</MsCode> ou janelas modais.
        </p>
        
        <!-- Box com overflow: hidden proposital -->
        <div style="padding: 16px; border: 1px dashed var(--ms-color-primary); border-radius: 8px; overflow: hidden; background: var(--ms-color-surface-subtle, #f8fafc);">
          <div style="font-size: 11px; font-weight: bold; margin-bottom: 8px; color: var(--ms-color-primary);">CONTÊINER COM OVERFLOW: HIDDEN</div>
          <MsSelect
            teleport="body"
            :options="flatSelectOptions"
            placeholder="Clique aqui: o menu escapa do overflow..."
          />
        </div>

        <div>
          <MsButton variant="solid" tone="primary" @click="showSelectModal = true">
            Abrir em Janela Modal (MsDialog)
          </MsButton>
        </div>

        <MsDialog :open="showSelectModal" @update:open="showSelectModal = $event" title="Seleção em Janela Modal" size="sm">
          <div style="display: flex; flex-direction: column; gap: 12px; padding: 8px 0;">
            <p style="font-size: 13px; color: var(--ms-color-text-secondary); margin: 0;">
              O dropdown dentro da modal utiliza <MsCode>teleport="body"</MsCode> para sobrepor a camada z-index sem clipping:
            </p>
            <MsSelect
              teleport="body"
              :options="flatSelectOptions"
              v-model="modalSelectVal"
              placeholder="Escolha dentro da modal..."
            />
          </div>
        </MsDialog>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- O dropdown escapa perfeitamente de contêineres com overflow: hidden via Teleport para body -->
<div style="overflow: hidden; border: 1px dashed var(--ms-color-border); padding: 16px; border-radius: 8px;">
  <MsSelect teleport="body" :options="options" placeholder="Dropdown escapa do overflow..." />
</div>

<!-- Em Janelas Modais (MsDialog): -->
<MsDialog :open="showModal" @update:open="showModal = $event" title="Configurações">
  <MsSelect teleport="body" :options="options" v-model="modalVal" />
</MsDialog>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

  </div>


  <div v-if="activeTab === 'ranges'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsRange nos 8 Tons da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t">
          <label style="display: block; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase;">{{ t }} ({{ toneHexMap[t] }})</label>
          <MsRange :tone="t" :model-value="65" :min="0" :max="100"></MsRange>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsRange tone="primary" :min="0" :max="100" v-model="val" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 440px;">
        <MsRange size="sm" tone="primary" :model-value="40"></MsRange>
        <MsRange size="md" tone="primary" :model-value="60"></MsRange>
        <MsRange size="lg" tone="primary" :model-value="80"></MsRange>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsRange size="sm" />
<MsRange size="lg" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'file-inputs'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsFileInput em Variantes (Padrão, Compacto, Dropzone)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 480px;">
        <MsFileInput label="Selecionar Arquivo Único" placeholder="Nenhum arquivo selecionado..."></MsFileInput>
        <MsFileInput multiple label="Múltiplos Documentos" placeholder="Arraste ou clique para anexar (PDF, PNG)..."></MsFileInput>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsFileInput label="Upload" placeholder="Escolher..." />
<MsFileInput multiple />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'color-pickers'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsColorPicker com Amostras da Paleta de Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Brand Palette Pickers</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <div v-for="t in allTones" :key="t" style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <MsColorPicker :model-value="toneHexMap[t]"></MsColorPicker>
          <span style="font-size: 11px; font-weight: bold; text-transform: uppercase;">{{ t }}</span>
          <code style="font-size: 10px; color: var(--ms-color-text-muted);">{{ toneHexMap[t] }}</code>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsColorPicker model-value="#2e86de" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'badges'">
    <!-- 1. SOLID 8 BRAND TONES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsBadge nos 8 Tons da Marca (Variantes Solid, Soft, Outline, Ghost)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Variants & Tones</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 8px;">SOLID (PREENCHIDO ALTO CONTRASTE)</span>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <MsBadge v-for="t in allTones" :key="'solid-' + t" :tone="t" variant="solid">{{ t }}</MsBadge>
          </div>
        </div>
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 8px;">SOFT (SUPERFÍCIE TONAL SUAVE - PADRÃO MODERNO)</span>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <MsBadge v-for="t in allTones" :key="'soft-' + t" :tone="t" variant="soft">{{ t }}</MsBadge>
          </div>
        </div>
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 8px;">OUTLINE (CONTORNO HAIRLINE ELEGANTE)</span>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <MsBadge v-for="t in allTones" :key="'out-' + t" :tone="t" variant="outline">{{ t }}</MsBadge>
          </div>
        </div>
        <div>
          <span style="font-size: 11px; color: var(--ms-color-text-muted); display: block; margin-bottom: 8px;">GHOST (SEM BORDA / DISCRETO)</span>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <MsBadge v-for="t in allTones" :key="'ghost-' + t" :tone="t" variant="ghost">{{ t }}</MsBadge>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBadge tone="primary" variant="solid">Primary Solid</MsBadge>
<MsBadge tone="success" variant="soft">Success Soft</MsBadge>
<MsBadge tone="danger" variant="outline">Danger Outline</MsBadge>
<MsBadge tone="accent" variant="ghost">Accent Ghost</MsBadge>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. STATUS DOT WITH LIVE PULSE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Ponto Indicador de Status com Pulso Animado (Live Status Dot)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Live Pulse</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <MsBadge tone="success" variant="soft" dot data-pulse pill>
          Sistema Operacional
        </MsBadge>
        <MsBadge tone="danger" variant="soft" dot data-pulse pill>
          Gravando ao Vivo
        </MsBadge>
        <MsBadge tone="warning" variant="soft" dot pill>
          Manutenção Agendada
        </MsBadge>
        <MsBadge tone="info" variant="soft" dot data-pulse pill>
          Sincronizando
        </MsBadge>
        <MsBadge tone="neutral" variant="outline" dot pill>
          Offline
        </MsBadge>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- data-pulse ativa a micro-animação de onda expansiva no indicador -->
<MsBadge tone="success" variant="soft" dot data-pulse pill>Sistema Operacional</MsBadge>
<MsBadge tone="danger" variant="soft" dot data-pulse pill>Gravando ao Vivo</MsBadge>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. WITH ICONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Badges com Ícones de Destaque (Feature Badges)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Icons</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <MsBadge tone="primary" variant="solid" pill>
          <span>⭐</span> Pro Member
        </MsBadge>
        <MsBadge tone="success" variant="soft" pill>
          <span>✓</span> Verificado
        </MsBadge>
        <MsBadge tone="accent" variant="soft" pill>
          <span>⚡</span> Ultrarrápido
        </MsBadge>
        <MsBadge tone="warning" variant="soft" pill>
          <span>🔒</span> Acesso Restrito
        </MsBadge>
        <MsBadge tone="danger" variant="soft" pill>
          <span>🔥</span> Promoção Relâmpago
        </MsBadge>
        <MsBadge tone="info" variant="outline" pill>
          <span>🚀</span> Versão v1.2
        </MsBadge>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBadge tone="primary" variant="solid" pill><span>⭐</span> Pro Member</MsBadge>
<MsBadge tone="success" variant="soft" pill><span>✓</span> Verificado</MsBadge>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. REMOVABLE FILTER TAGS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Tags de Filtro Removíveis (Removable / Dismissible Badges)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Dismissible</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <span class="ms-badge" data-tone="primary" data-variant="soft" data-pill>
          Filtro: Vue 3 <button class="ms-badge__remove" title="Remover filtro">×</button>
        </span>
        <span class="ms-badge" data-tone="accent" data-variant="soft" data-pill>
          Framework: Vite <button class="ms-badge__remove" title="Remover filtro">×</button>
        </span>
        <span class="ms-badge" data-tone="success" data-variant="soft" data-pill>
          Status: Aprovado <button class="ms-badge__remove" title="Remover filtro">×</button>
        </span>
        <span class="ms-badge" data-tone="neutral" data-variant="outline" data-pill>
          Categoria: UI <button class="ms-badge__remove" title="Remover filtro">×</button>
        </span>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<span class="ms-badge" data-tone="primary" data-variant="soft" data-pill>
  Filtro: Vue 3 <button class="ms-badge__remove">×</button>
</span>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. SIZES SCALE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Escala Completa de Tamanhos (xs a xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <MsBadge size="xs" tone="primary" variant="soft">xs (16px)</MsBadge>
        <MsBadge size="sm" tone="primary" variant="soft">sm (18px)</MsBadge>
        <MsBadge size="md" tone="primary" variant="soft">md (22px - Padrão)</MsBadge>
        <MsBadge size="lg" tone="primary" variant="soft">lg (26px)</MsBadge>
        <MsBadge size="xl" tone="primary" variant="soft">xl (32px)</MsBadge>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBadge size="xs">xs (16px)</MsBadge>
<MsBadge size="sm">sm (18px)</MsBadge>
<MsBadge size="md">md (22px - Padrão)</MsBadge>
<MsBadge size="lg">lg (26px)</MsBadge>
<MsBadge size="xl">xl (32px)</MsBadge>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. NOTIFICATION COUNTER ON BUTTONS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Contadores de Notificação Acoplados a Botões</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Counters</span>
      </div>
      <div class="variation-preview-box" style="padding: 24px; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        <button class="ms-button ms-button--outline ms-button--tone-neutral" style="position: relative;">
          <span>Notificações</span>
          <span class="ms-badge ms-badge--placement-top-right" data-tone="danger" data-variant="solid" data-pill style="font-size: 10px;">8</span>
        </button>

        <button class="ms-button ms-button--solid ms-button--tone-primary" style="position: relative;">
          <span>Mensagens</span>
          <span class="ms-badge ms-badge--placement-top-right" data-tone="warning" data-variant="solid" data-pill style="font-size: 10px;">99+</span>
        </button>

        <button class="ms-button ms-button--outline ms-button--tone-primary" style="position: relative;">
          <span>Carrinho</span>
          <span class="ms-badge ms-badge--placement-top-right" data-tone="success" data-variant="solid" data-pill style="font-size: 10px;">3</span>
        </button>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<button class="ms-button" style="position: relative;">
  <span>Mensagens</span>
  <span class="ms-badge ms-badge--placement-top-right" data-tone="danger" data-pill>99+</span>
</button>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'alerts'">
    <!-- 1. SOFT 8 BRAND TONES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsAlert nos 8 Tons Oficiais (Variante Soft com Ícone)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <MsAlert tone="primary" variant="soft" title="Informação Corporativa" description="Atualização agendada para 02:00 UTC sem interrupção de serviço."></MsAlert>
        <MsAlert tone="success" variant="soft" title="Operação Concluída com Sucesso" description="Todos os 335 testes unitários passaram com 100% de cobertura."></MsAlert>
        <MsAlert tone="warning" variant="soft" title="Atenção aos Limites de Armazenamento" description="Seu cluster atingiu 82% da cota mensal alocada."></MsAlert>
        <MsAlert tone="danger" variant="soft" title="Falha Crítica no Pipeline" description="O certificado TLS expirará em menos de 48 horas."></MsAlert>
        <MsAlert tone="accent" variant="soft" title="Novo Recurso Disponível" description="O editor visual agora suporta tokens nativos OKLCH."></MsAlert>
        <MsAlert tone="info" variant="soft" title="Documentação Atualizada" description="Consulte os novos guias de integração em /docs."></MsAlert>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAlert tone="success" variant="soft" title="Operação Concluída" description="Todos os testes passaram." />
<MsAlert tone="danger" variant="soft" title="Falha no Pipeline" description="Certificado expirando." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. LEFT ACCENT STRIP (FLYONUI SIGNATURE) -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Alertas com Faixa Lateral de Destaque (Left Accent Strip — FlyonUI Signature)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">FlyonUI Pattern</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <MsAlert tone="primary" variant="soft" data-accent="left" title="Destaque de Borda Esquerda (Primary)" description="Faixa saturada de 4px na extremidade esquerda com superfície tonal suave."></MsAlert>
        <MsAlert tone="success" variant="soft" data-accent="left" title="Ambiente de Produção Estável" description="Todos os serviços distribuídos operando em latência sub-10ms."></MsAlert>
        <MsAlert tone="warning" variant="soft" data-accent="left" title="Manutenção Preventiva Próxima" description="Verifique seus backups antes de iniciar a migração de banco de dados."></MsAlert>
        <MsAlert tone="danger" variant="soft" data-accent="left" title="Acesso Não Autorizado Detectado" description="Uma tentativa de login a partir de um IP desconhecido foi bloqueada."></MsAlert>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- data-accent="left" adiciona a faixa lateral saturada de 4px -->
<MsAlert tone="success" variant="soft" data-accent="left" title="Estável" description="..." />
<MsAlert tone="danger" variant="soft" data-accent="left" title="Acesso Bloqueado" description="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. SOLID VARIANT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Variante Solid (Alta Ênfase para Anúncios Críticos)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Solid</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <MsAlert tone="primary" variant="solid" title="Comunicado Oficial da Plataforma" description="Lançamento estável da versão 1.2 disponível para atualização imediata."></MsAlert>
        <MsAlert tone="danger" variant="solid" title="Parada de Emergência Solicitada" description="Tráfego desviado para clusters de contingência secundários."></MsAlert>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAlert tone="primary" variant="solid" title="Comunicado Oficial" description="..." />
<MsAlert tone="danger" variant="solid" title="Parada de Emergência" description="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. OUTLINE VARIANT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Variante Outline (Minimalista com Contorno Hairline)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Outline</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <MsAlert tone="neutral" variant="outline" title="Dica de Desenvolvimento" description="Você pode usar atalhos de teclado ⌘K para abrir a paleta de comandos."></MsAlert>
        <MsAlert tone="info" variant="outline" title="Versão Beta Disponível" description="Experimente as novas APIs experimentais ativando a flag no painel."></MsAlert>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAlert tone="neutral" variant="outline" title="Dica" description="..." />
<MsAlert tone="info" variant="outline" title="Versão Beta" description="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. COM BOTÕES DE AÇÃO -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Alertas com Ações Integradas (Action Buttons)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Actions</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 16px;">
        <MsAlert tone="primary" variant="soft" title="Atualização do Workspace Pendente">
          <p style="margin: 0 0 10px 0; font-size: 13px;">Uma nova versão está pronta para instalação. Salve seu trabalho antes de reiniciar.</p>
          <div style="display: flex; gap: 8px;">
            <MsButton size="xs" variant="solid" tone="primary">Instalar Agora</MsButton>
            <MsButton size="xs" variant="outline" tone="primary">Lembrar Mais Tarde</MsButton>
          </div>
        </MsAlert>
        <MsAlert tone="danger" variant="soft" title="Assinatura Prestes a Expirar">
          <p style="margin: 0 0 10px 0; font-size: 13px;">Seu plano corporativo expira em 3 dias. Atualize o método de pagamento para manter o serviço ativo.</p>
          <div style="display: flex; gap: 8px;">
            <MsButton size="xs" variant="solid" tone="danger">Renovar Assinatura</MsButton>
            <MsButton size="xs" variant="text" tone="danger">Ver Faturas</MsButton>
          </div>
        </MsAlert>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAlert tone="primary" variant="soft" title="Atualização Pendente">
  <p>Uma nova versão está pronta para instalação.</p>
  <div style="display: flex; gap: 8px;">
    <MsButton size="xs" variant="solid" tone="primary">Instalar Agora</MsButton>
    <MsButton size="xs" variant="outline" tone="primary">Mais Tarde</MsButton>
  </div>
</MsAlert>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. DISMISSIBLE ALERTS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Alertas Descartáveis com Botão Fechar (Dismissible)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Dismissible</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <MsAlert tone="success" variant="soft" title="Arquivo Exportado com Sucesso" description="O download do relatório consolidado começou automaticamente." dismissible></MsAlert>
        <MsAlert tone="info" variant="soft" title="Cookies & Privacidade" description="Utilizamos cookies estritamente necessários para a autenticação segura." dismissible></MsAlert>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAlert tone="success" variant="soft" title="Sucesso" description="..." dismissible />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 7. SHADCN MINIMALIST ALERT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. Alerta Minimalista (Padrão Shadcn UI)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shadcn Pattern</span>
      </div>
      <div class="variation-preview-box" style="padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; gap: 12px; padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-raised);">
          <span style="font-size: 16px; line-height: 1;">⚡</span>
          <div>
            <div style="font-weight: 700; font-size: 13px; color: var(--ms-color-text-primary); margin-bottom: 4px;">Instalação Rápida de Componentes</div>
            <div style="font-size: 12px; color: var(--ms-color-text-secondary); line-height: 1.5;">
              Você pode importar qualquer componente sob demanda diretamente de <MsCode>@magic-style/vue</MsCode> com zero bundle overhead.
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<div class="ms-alert ms-alert--outline">
  <span class="ms-alert-icon">⚡</span>
  <div class="ms-alert-content">
    <h5 class="ms-alert-title">Instalação Rápida</h5>
    <div class="ms-alert-description">Importe sob demanda diretamente do pacote.</div>
  </div>
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'banners'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsBanner em Tons Semânticos com Botão de Ação</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Banners</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <MsBanner tone="primary" variant="solid" title="Atualização MagicStyle 1.2 Disponível" description="Novas otimizações de performance e suporte total aos 8 tons corporativos.">
          <template #actions><MsButton size="sm" variant="solid" tone="neutral">Atualizar Agora</MsButton></template>
        </MsBanner>
        <MsBanner tone="warning" variant="soft" title="Período de Manutenção Programada" description="Os serviços de homologação passarão por manutenção domingo às 02:00 UTC."></MsBanner>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsBanner tone="primary" title="Novidades" description="...">
  <template #actions><MsButton>Ver</MsButton></template>
</MsBanner>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'toasts'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Galeria de Notificações Toast nos Tons da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Toast Notifications</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 440px;">
        <MsToast tone="success" title="Registro Salvo com Sucesso" message="Todas as alterações foram sincronizadas com o repositório."></MsToast>
        <MsToast tone="danger" title="Falha na Conexão" message="Não foi possível autenticar com o cluster de microsserviços."></MsToast>
        <MsToast tone="info" title="Compilação Finalizada" message="Build Turbo concluído em 1.42s com 0 erros."></MsToast>
        <MsToast tone="warning" title="Atenção aos Tokens" message="Token de sessão expira em 5 minutos."></MsToast>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsToast tone="success" title="Salvo!" message="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'confirm-dialog'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Tipos de Confirmação (Destrutiva, Sucesso, Alerta)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Confirm Dialog Types</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <MsButton variant="solid" tone="danger">Excluir Workspace (Danger Confirm)</MsButton>
        <MsButton variant="solid" tone="primary">Publicar Release (Primary Confirm)</MsButton>
        <MsButton variant="solid" tone="warning">Resetar Configurações (Warning Confirm)</MsButton>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsConfirmDialog tone="danger" title="Excluir?" description="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'spinners'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSpinner nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <div v-for="t in allTones" :key="t" style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <MsSpinner :tone="t" size="lg"></MsSpinner>
          <span style="font-size: 11px; font-weight: bold; text-transform: uppercase;">{{ t }}</span>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSpinner tone="primary" size="lg" />
<MsSpinner tone="accent" size="lg" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos (xs a xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        <MsSpinner size="xs" tone="primary"></MsSpinner>
        <MsSpinner size="sm" tone="primary"></MsSpinner>
        <MsSpinner size="md" tone="primary"></MsSpinner>
        <MsSpinner size="lg" tone="primary"></MsSpinner>
        <MsSpinner size="xl" tone="primary"></MsSpinner>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSpinner size="xs" />
<MsSpinner size="xl" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'skeletons'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Composição de Card Skeleton em Carregamento</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Card Skeleton Pattern</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 360px; padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; background: var(--ms-color-surface-raised); display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <MsSkeleton variant="circle" width="48px" height="48px" animation="shimmer"></MsSkeleton>
          <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
            <MsSkeleton variant="text" width="60%" height="16px" animation="shimmer"></MsSkeleton>
            <MsSkeleton variant="text" width="40%" height="12px" animation="shimmer"></MsSkeleton>
          </div>
        </div>
        <MsSkeleton variant="rect" width="100%" height="100px" animation="shimmer"></MsSkeleton>
        <div style="display: flex; gap: 8px;">
          <MsSkeleton variant="rect" width="80px" height="32px" animation="shimmer"></MsSkeleton>
          <MsSkeleton variant="rect" width="80px" height="32px" animation="shimmer"></MsSkeleton>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSkeleton variant="circle" width="48px" height="48px" />
<MsSkeleton variant="text" width="100%" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'progress'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsProgress nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t">
          <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase;">
            <span>{{ t }} ({{ toneHexMap[t] }})</span>
            <span>75%</span>
          </div>
          <MsProgress :tone="t" :model-value="75" size="md"></MsProgress>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsProgress tone="primary" :model-value="75" />
<MsProgress tone="accent" :model-value="75" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos & Modos (Listrado, Pílula, Indeterminado)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes & Modifiers</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <MsProgress size="xs" tone="primary" :model-value="40"></MsProgress>
        <MsProgress size="sm" tone="primary" :model-value="60"></MsProgress>
        <MsProgress size="md" tone="primary" :model-value="80" striped animated></MsProgress>
        <MsProgress size="lg" tone="accent" :model-value="90" shape="pill"></MsProgress>
        <MsProgress size="md" tone="success" indeterminate></MsProgress>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsProgress size="sm" :model-value="60" />
<MsProgress striped animated :model-value="80" />
<MsProgress indeterminate />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'radial-progress' || activeTab === 'progress-radial'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsProgressRadial nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <div v-for="t in allTones" :key="t" style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <MsProgressRadial :tone="t" :value="68" size="md"></MsProgressRadial>
          <span style="font-size: 11px; font-weight: bold; text-transform: uppercase;">{{ t }}</span>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsProgressRadial tone="primary" :value="68" size="md" />
<MsProgressRadial tone="accent" :value="68" size="md" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos (sm a xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <MsProgressRadial size="sm" tone="primary" :value="45"></MsProgressRadial>
        <MsProgressRadial size="md" tone="primary" :value="65"></MsProgressRadial>
        <MsProgressRadial size="lg" tone="accent" :value="85"></MsProgressRadial>
        <MsProgressRadial size="xl" tone="success" :value="95"></MsProgressRadial>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsProgressRadial size="sm" :value="45" />
<MsProgressRadial size="xl" :value="95" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'status' || activeTab === 'status-indicator'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsStatus nos 8 Tons Semânticos com Efeito Pulse</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones & Pulse</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t" style="display: flex; align-items: center; gap: 8px;">
          <MsStatus :tone="t" pulse :label="t.toUpperCase() + ' LIVE'"></MsStatus>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsStatus tone="success" pulse label="ONLINE" />
<MsStatus tone="danger" pulse label="DEGRADE" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'tooltips'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Direções de Posicionamento do Tooltip (Top, Right, Bottom, Left)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Placements</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap; padding: 20px;">
        <MsTooltip content="Dica posicionada acima" placement="top">
          <MsButton variant="outline" tone="primary">Top Tooltip</MsButton>
        </MsTooltip>
        <MsTooltip content="Dica posicionada à direita" placement="right">
          <MsButton variant="outline" tone="primary">Right Tooltip</MsButton>
        </MsTooltip>
        <MsTooltip content="Dica posicionada abaixo" placement="bottom">
          <MsButton variant="outline" tone="primary">Bottom Tooltip</MsButton>
        </MsTooltip>
        <MsTooltip content="Dica posicionada à esquerda" placement="left">
          <MsButton variant="outline" tone="primary">Left Tooltip</MsButton>
        </MsTooltip>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTooltip content="Dica no Topo" placement="top">
  <MsButton>Hover</MsButton>
</MsTooltip>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'popovers'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsPopover com Conteúdo Rico de Ação</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Rich Popover</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 16px; align-items: center;">
        <MsPopover>
          <template #trigger><MsButton variant="solid" tone="primary">Abrir Painel Rápido</MsButton></template>
          <div style="padding: 16px; width: 260px; display: flex; flex-direction: column; gap: 12px;">
            <div style="font-weight: bold; font-size: 14px;">Configurações Rápidas</div>
            <p style="font-size: 12px; color: var(--ms-color-text-secondary); margin: 0;">Ajuste notificações e permissões do projeto em tempo real.</p>
            <MsButton size="sm" variant="solid" tone="primary">Confirmar</MsButton>
          </div>
        </MsPopover>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsPopover>
  <template #trigger><MsButton>Abrir</MsButton></template>
  <div>Conteúdo rico</div>
</MsPopover>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'cards'">
    <!-- 1. 8 BRAND TONES BORDERS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsCard com Destaque de Borda Superior nos 8 Tons da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
          <div v-for="t in allTones" :key="t">
            <MsCard :tone="t" variant="raised" :title="t.toUpperCase() + ' ACCENT'" :description="'Faixa superior corporativa (' + toneHexMap[t] + ').'">
              <div style="font-size: 13px; color: var(--ms-color-text-secondary); line-height: 1.5;">
                Cartão com elevação sutil e faixa de destaque tonal no topo, integrando identidade visual de marca de alta fidelidade.
              </div>
              <template #footer>
                <MsButton size="xs" variant="outline" :tone="t">Ação {{ t }}</MsButton>
              </template>
            </MsCard>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Borda superior tonal automática via prop tone -->
<MsCard tone="primary" title="PRIMARY ACCENT" description="Faixa superior corporativa">
  <p>Conteúdo do cartão...</p>
  <template #footer><MsButton size="xs" variant="outline" tone="primary">Ação</MsButton></template>
</MsCard>

<MsCard tone="accent" title="ACCENT ACCENT" />
<MsCard tone="success" title="SUCCESS ACCENT" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. SURFACE VARIANTS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Hierarquia de Superfície (Raised, Flat, Outline, Sunken, Glass, Soft)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Surface Variants</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; width: 100%;">
          <MsCard variant="raised" title="Raised (Padrão Elevado)">
            <p style="font-size: 13px; margin: 0; color: var(--ms-color-text-secondary);">Superfície com micro-sombra refinada ideal para cards flutuantes sobre o fundo da página.</p>
          </MsCard>
          <MsCard variant="flat" title="Flat (Plano Sem Sombra)">
            <p style="font-size: 13px; margin: 0; color: var(--ms-color-text-secondary);">Fundo clean nivelado com a página para designs minimalistas de alta densidade.</p>
          </MsCard>
          <MsCard variant="outline" title="Outline (Apenas Contorno)">
            <p style="font-size: 13px; margin: 0; color: var(--ms-color-text-secondary);">Separação nítida por borda hairline sem peso visual de sombra (estética Shadcn pura).</p>
          </MsCard>
          <MsCard variant="sunken" title="Sunken (Rebaixado)">
            <p style="font-size: 13px; margin: 0; color: var(--ms-color-text-secondary);">Fundo rebaixado com contraste suave, excelente para blocos de código ou logs.</p>
          </MsCard>
          <MsCard variant="glass" title="Glass (Translúcido com Blur)">
            <p style="font-size: 13px; margin: 0; color: var(--ms-color-text-secondary);">Efeito moderno frosted glass com 16px de backdrop-filter e borda semi-transparente.</p>
          </MsCard>
          <MsCard variant="soft" tone="primary" title="Soft (Tint Pastel FlyonUI)">
            <p style="font-size: 13px; margin: 0; color: var(--ms-color-text-secondary);">Superfície suavemente tingida pela cor da marca com borda tonal delicada.</p>
          </MsCard>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsCard variant="raised" title="Raised Card" />
<MsCard variant="flat" title="Flat Card" />
<MsCard variant="outline" title="Outline Card" />
<MsCard variant="sunken" title="Sunken Card" />
<MsCard variant="glass" title="Glass Frosted Card" />
<MsCard variant="soft" tone="primary" title="Soft Tinted Card" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. SAAS METRIC / KPI STAT CARDS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Cartões de Métricas / KPI SaaS (FlyonUI & Shadcn Signature)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">KPI Stat Cards</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; width: 100%;">
          <!-- Stat Card 1 -->
          <MsCard variant="outline" padding="md">
            <div class="ms-card-stat">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="ms-card-stat__label">Faturamento Mensal</span>
                <span style="font-size: 18px;">💳</span>
              </div>
              <div class="ms-card-stat__value">R$ 142.850</div>
              <div class="ms-card-stat__footer">
                <span class="ms-card-stat__trend ms-card-stat__trend--up">↑ +18.4%</span>
                <span>vs. mês anterior</span>
              </div>
            </div>
          </MsCard>

          <!-- Stat Card 2 -->
          <MsCard variant="outline" padding="md">
            <div class="ms-card-stat">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="ms-card-stat__label">Assinaturas Ativas</span>
                <span style="font-size: 18px;">👥</span>
              </div>
              <div class="ms-card-stat__value">2.480</div>
              <div class="ms-card-stat__footer">
                <span class="ms-card-stat__trend ms-card-stat__trend--up">↑ +4.2%</span>
                <span>120 novas esta semana</span>
              </div>
            </div>
          </MsCard>

          <!-- Stat Card 3 -->
          <MsCard variant="outline" padding="md">
            <div class="ms-card-stat">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="ms-card-stat__label">Taxa de Rejeição</span>
                <span style="font-size: 18px;">📉</span>
              </div>
              <div class="ms-card-stat__value">12.3%</div>
              <div class="ms-card-stat__footer">
                <span class="ms-card-stat__trend ms-card-stat__trend--down">↓ -2.8%</span>
                <span>melhora no funil</span>
              </div>
            </div>
          </MsCard>

          <!-- Stat Card 4 -->
          <MsCard variant="outline" padding="md">
            <div class="ms-card-stat">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="ms-card-stat__label">Latência de API</span>
                <span style="font-size: 18px;">⚡</span>
              </div>
              <div class="ms-card-stat__value">18ms</div>
              <div class="ms-card-stat__footer">
                <MsBadge tone="success" variant="soft" data-pill data-pulse>Operacional</MsBadge>
                <span>99.98% SLA</span>
              </div>
            </div>
          </MsCard>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Cartão de KPI SaaS com classes utilitárias ms-card-stat -->
<MsCard variant="outline" padding="md">
  <div class="ms-card-stat">
    <div class="ms-card-stat__label">Faturamento Mensal</div>
    <div class="ms-card-stat__value">R$ 142.850</div>
    <div class="ms-card-stat__footer">
      <span class="ms-card-stat__trend ms-card-stat__trend--up">↑ +18.4%</span>
      <span>vs. mês anterior</span>
    </div>
  </div>
</MsCard>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. E-COMMERCE PRODUCT CARD -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Cartão de Produto / E-Commerce com Badge Flutuante</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">E-Commerce</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; justify-content: center; width: 100%;">
          <div style="max-width: 340px; width: 100%;">
            <MsCard variant="raised" padding="none" hoverable>
              <div class="ms-card__cover" style="height: 180px; background: linear-gradient(135deg, #1e293b, #0f172a); display: flex; align-items: center; justify-content: center; position: relative;">
                <span class="ms-card-cover-badge">
                  <MsBadge tone="danger" variant="solid" data-pill>-25% OFF</MsBadge>
                </span>
                <span style="font-size: 56px;">⌨️</span>
              </div>
              <div style="padding: 16px;">
                <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--ms-color-primary); letter-spacing: 0.05em; margin-bottom: 4px;">Hardware & Periféricos</div>
                <div style="font-size: 16px; font-weight: 700; color: var(--ms-color-text-primary); margin-bottom: 6px;">Magic Keyboard Pro — Dark Edition</div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
                  <span style="color: #f59e0b; font-size: 13px;">★★★★★</span>
                  <span style="font-size: 12px; color: var(--ms-color-text-muted); font-weight: 600;">4.9 (342 avaliações)</span>
                </div>
                <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;">
                  <span style="font-size: 24px; font-weight: 800; color: var(--ms-color-text-primary);">R$ 899,00</span>
                  <span style="font-size: 14px; text-decoration: line-through; color: var(--ms-color-text-muted);">R$ 1.199,00</span>
                </div>
                <MsButton variant="solid" tone="primary" block wave>Adicionar ao Carrinho</MsButton>
              </div>
            </MsCard>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Card de E-Commerce com capa, badge de desconto flutuante e CTA -->
<MsCard variant="raised" padding="none" hoverable>
  <div class="ms-card__cover">
    <span class="ms-card-cover-badge">
      <MsBadge tone="danger" variant="solid" data-pill>-25% OFF</MsBadge>
    </span>
    <img src="product.jpg" alt="Magic Keyboard" />
  </div>
  <div style="padding: 16px;">
    <h4>Magic Keyboard Pro</h4>
    <div class="price">R$ 899,00</div>
    <MsButton variant="solid" tone="primary" block>Adicionar ao Carrinho</MsButton>
  </div>
</MsCard>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. USER PROFILE CARD -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Cartão de Perfil de Usuário & Identidade Corporativa</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Profile Identity</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; justify-content: center; width: 100%;">
          <div style="max-width: 380px; width: 100%;">
            <MsCard variant="raised" padding="none">
              <div style="height: 72px; background: linear-gradient(90deg, #2e86de, #341f97);"></div>
              <div style="padding: 0 20px 20px; position: relative;">
                <div style="margin-top: -36px; display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px;">
                  <MsAvatar
                    name="Dra. Helena Carvalho"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop"
                    size="xl"
                    shape="circle"
                    status="online"
                    bordered
                  />
                  <MsBadge tone="primary" variant="soft" data-pill>STAFF ARCHITECT</MsBadge>
                </div>
                <div style="font-size: 18px; font-weight: 800; color: var(--ms-color-text-primary);">Dra. Helena Carvalho</div>
                <div style="font-size: 12px; color: var(--ms-color-text-secondary); margin-bottom: 12px;">Líder de Arquitetura de Design Systems & Engenharia Front-end.</div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; background: var(--ms-color-surface-sunken); padding: 10px; border-radius: 8px; text-align: center; margin-bottom: 16px;">
                  <div>
                    <div style="font-size: 16px; font-weight: 800; color: var(--ms-color-text-primary);">48</div>
                    <div style="font-size: 10px; color: var(--ms-color-text-muted); text-transform: uppercase;">Projetos</div>
                  </div>
                  <div>
                    <div style="font-size: 16px; font-weight: 800; color: var(--ms-color-text-primary);">1.4k</div>
                    <div style="font-size: 10px; color: var(--ms-color-text-muted); text-transform: uppercase;">Seguidores</div>
                  </div>
                  <div>
                    <div style="font-size: 16px; font-weight: 800; color: var(--ms-color-text-primary);">99%</div>
                    <div style="font-size: 10px; color: var(--ms-color-text-muted); text-transform: uppercase;">Score</div>
                  </div>
                </div>

                <div style="display: flex; gap: 8px;">
                  <MsButton variant="solid" tone="primary" style="flex: 1;" wave>Seguir</MsButton>
                  <MsButton variant="outline" tone="neutral" style="flex: 1;">Mensagem</MsButton>
                </div>
              </div>
            </MsCard>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Cartão de perfil com banner de fundo, avatar flutuante e botões de ação -->
<MsCard variant="raised" padding="none">
  <div class="profile-banner"></div>
  <div class="profile-content">
    <MsAvatar name="Helena Carvalho" size="xl" status="online" bordered />
    <h3>Dra. Helena Carvalho</h3>
    <MsButton variant="solid" tone="primary">Seguir</MsButton>
  </div>
</MsCard>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. HORIZONTAL CARD -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Cartão Horizontal com Mídia Lateral (orientation="horizontal")</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Horizontal Media</span>
      </div>
      <div class="variation-preview-box">
        <div style="width: 100%; max-width: 640px;">
          <MsCard variant="outline" orientation="horizontal" hoverable padding="none">
            <div class="ms-card__cover" style="background: linear-gradient(135deg, #0984e3, #6c5ce7); display: flex; align-items: center; justify-content: center; min-width: 160px;">
              <span style="font-size: 48px;">🚀</span>
            </div>
            <div class="ms-card__body-wrapper" style="padding: 20px;">
              <div style="font-size: 11px; font-weight: 700; color: var(--ms-color-primary); text-transform: uppercase; margin-bottom: 4px;">Atualização Arquitetural</div>
              <div style="font-size: 16px; font-weight: 700; color: var(--ms-color-text-primary); margin-bottom: 8px;">Baseline 1.2 & DTCG Tokens Lançados</div>
              <div style="font-size: 13px; color: var(--ms-color-text-secondary); line-height: 1.5; margin-bottom: 16px;">
                Conheça os novos contratos semânticos com suporte a multi-theming dinâmico e 51 componentes Vue 3 com acessibilidade WAI-ARIA 1.2.
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 12px; color: var(--ms-color-text-muted);">Publicado há 2 horas</span>
                <MsButton size="sm" variant="soft" tone="primary">Ler Artigo Completo →</MsButton>
              </div>
            </div>
          </MsCard>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Card horizontal com orientação split lateral -->
<MsCard variant="outline" orientation="horizontal" hoverable padding="none">
  <div class="ms-card__cover">
    <img src="article.jpg" alt="Cover" />
  </div>
  <div class="ms-card__body-wrapper" style="padding: 20px;">
    <h4>Baseline 1.2 Lançada</h4>
    <p>Conheça os novos contratos semânticos...</p>
    <MsButton size="sm" variant="soft" tone="primary">Ler Artigo</MsButton>
  </div>
</MsCard>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 7. INTERACTIVE HOVER LIFT -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. Cartões Interativos com Efeito Hover Lift (hoverable & interactive)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Interactive Cards</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
          <MsCard variant="raised" tone="primary" hoverable interactive title="Component Engine" description="Vue 3 + Composition API">
            <div style="font-size: 13px; color: var(--ms-color-text-secondary); line-height: 1.5;">
              51 componentes certificados sem Fake Green com tipagem estrita TypeScript. Passe o mouse para testar a elevação.
            </div>
          </MsCard>
          <MsCard variant="raised" tone="accent" hoverable interactive title="Token Dial System" description="DTCG Compliant Spec">
            <div style="font-size: 13px; color: var(--ms-color-text-secondary); line-height: 1.5;">
              Dial contínuo de raio, densidade de espaçamento e variáveis semânticas de cor com suporte a OKLCH.
            </div>
          </MsCard>
          <MsCard variant="raised" tone="success" hoverable interactive title="A11y Core AA" description="WAI-ARIA 1.2 Compliant">
            <div style="font-size: 13px; color: var(--ms-color-text-secondary); line-height: 1.5;">
              Navegação total por teclado com setas direcionais, Home/End, focus ring e leitores de tela W3C.
            </div>
          </MsCard>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Props hoverable e interactive aplicam cursor pointer e lift translateY(-3px) -->
<MsCard
  variant="raised"
  tone="primary"
  hoverable
  interactive
  title="Component Engine"
  description="Vue 3 + Composition API"
>
  <p>Passe o mouse para testar o efeito de elevação.</p>
</MsCard>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 8. SEGMENTED CARD WITH DIVIDERS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">8. Cartão Segmentado com Divisores de Cabeçalho e Rodapé</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Segmented Dividers</span>
      </div>
      <div class="variation-preview-box">
        <div style="width: 100%; max-width: 520px;">
          <MsCard variant="raised" header-divider footer-divider title="Preferências de Notificação" description="Configure os canais de recebimento de alertas do sistema.">
            <div style="display: flex; flex-direction: column; gap: 14px; font-size: 13px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 600; color: var(--ms-color-text-primary);">Alertas de Segurança Críticos</div>
                  <div style="font-size: 12px; color: var(--ms-color-text-muted);">Notificações imediatas por push e e-mail</div>
                </div>
                <MsSwitch :model-value="true" tone="primary" />
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 600; color: var(--ms-color-text-primary);">Relatórios Semanais de Desempenho</div>
                  <div style="font-size: 12px; color: var(--ms-color-text-muted);">Consolidado de acessos e métricas de build</div>
                </div>
                <MsSwitch :model-value="false" tone="primary" />
              </div>
            </div>
            <template #footer>
              <div style="display: flex; gap: 8px;">
                <MsButton variant="outline" tone="neutral" size="sm">Cancelar</MsButton>
                <MsButton variant="solid" tone="primary" size="sm" wave>Salvar Alterações</MsButton>
              </div>
            </template>
          </MsCard>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Props header-divider e footer-divider adicionam linhas de separação formais -->
<MsCard
  variant="raised"
  header-divider
  footer-divider
  title="Preferências"
  description="Configure os canais de notificação"
>
  <div class="settings-body">...</div>
  <template #footer>
    <MsButton variant="outline">Cancelar</MsButton>
    <MsButton variant="solid" tone="primary">Salvar</MsButton>
  </template>
</MsCard>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'avatars'">
    <!-- 1. 8 BRAND TONES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsAvatar nos 8 Tons Oficiais da Marca (Iniciais Automáticas)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <div v-for="t in allTones" :key="t" style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
            <MsAvatar :tone="t" :name="t.toUpperCase() + ' User'" size="md" />
            <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--ms-color-text-secondary);">{{ t }}</span>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Iniciais automáticas calculadas a partir da prop name com tom de marca -->
<MsAvatar tone="primary" name="Ada Lovelace" />
<MsAvatar tone="accent" name="Grace Hopper" />
<MsAvatar tone="success" name="Margaret Hamilton" />
<MsAvatar tone="danger" name="Alan Turing" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. SHAPES -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Formatos Geométricos (Circle, Rounded, Square)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar shape="circle" tone="primary" name="Circle Avatar" size="lg" />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary);">Circle (Padrão 100%)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar shape="rounded" tone="accent" name="Rounded Avatar" size="lg" />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary);">Rounded (radius-md)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar shape="square" tone="neutral" name="Square Avatar" size="lg" />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary);">Square (radius-none)</span>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAvatar shape="circle" name="Circle" />
<MsAvatar shape="rounded" name="Rounded" />
<MsAvatar shape="square" name="Square" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. SIZES SCALE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala Completa de Tamanhos (2xs 20px a 2xl 72px)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="2xs" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">2XS 20px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="xs" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">XS 24px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="sm" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">SM 32px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="md" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">MD 40px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="lg" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">LG 48px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="xl" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">XL 56px</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <MsAvatar size="2xl" name="Ada Lovelace" tone="primary" />
            <span style="font-size: 10px; color: var(--ms-color-text-muted);">2XL 72px</span>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAvatar size="2xs" name="User" />
<MsAvatar size="xs" name="User" />
<MsAvatar size="sm" name="User" />
<MsAvatar size="md" name="User" /> <!-- Padrão 40px -->
<MsAvatar size="lg" name="User" />
<MsAvatar size="xl" name="User" />
<MsAvatar size="2xl" name="User" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. STATUS INDICATORS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Indicadores de Presença & Status (FlyonUI & Shadcn Pattern)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Presence Status</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar
              size="lg"
              status="online"
              name="Online User"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&fit=crop"
              bordered
            />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-success);">Online (Disponível)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar
              size="lg"
              status="busy"
              name="Busy User"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&fit=crop"
              bordered
            />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-danger);">Busy (Em Reunião)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar
              size="lg"
              status="away"
              name="Away User"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&fit=crop"
              bordered
            />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-warning);">Away (Ausente)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <MsAvatar
              size="lg"
              status="offline"
              name="Offline User"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&fit=crop"
              bordered
            />
            <span style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-muted);">Offline (Desconectado)</span>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Status dot com anel de corte que previne choque com o fundo -->
<MsAvatar status="online" src="avatar1.jpg" bordered />
<MsAvatar status="busy" src="avatar2.jpg" bordered />
<MsAvatar status="away" src="avatar3.jpg" bordered />
<MsAvatar status="offline" src="avatar4.jpg" bordered />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 5. AVATAR GROUP STACK -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. MsAvatarGroup Empilhado com Contador +N (Stacked Avatars)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Avatar Groups</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <!-- Team Stack -->
          <div style="display: flex; align-items: center; gap: 16px;">
            <MsAvatarGroup size="md" :max="4" spacing="normal">
              <MsAvatar name="Ada Lovelace" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop" />
              <MsAvatar name="Carlos Souza" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop" />
              <MsAvatar name="Mariana Costa" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop" />
              <MsAvatar name="Lucas Pereira" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop" />
              <MsAvatar name="Beatriz Santos" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&fit=crop" />
              <MsAvatar name="Guilherme Ramos" tone="primary" />
              <MsAvatar name="Rodrigo Toledo" tone="accent" />
            </MsAvatarGroup>
            <span style="font-size: 13px; color: var(--ms-color-text-secondary); font-weight: 500;">
              Equipe de Design System (7 membros ativos)
            </span>
          </div>

          <!-- Compact Spacing Stack -->
          <div style="display: flex; align-items: center; gap: 16px;">
            <MsAvatarGroup size="sm" :max="3" spacing="tight">
              <MsAvatar name="Ana Silva" tone="primary" />
              <MsAvatar name="Carlos Silva" tone="accent" />
              <MsAvatar name="Diana Prince" tone="success" />
              <MsAvatar name="Bruce Wayne" tone="neutral" />
            </MsAvatarGroup>
            <span style="font-size: 12px; color: var(--ms-color-text-muted);">
              Espaçamento Compacto (spacing="tight")
            </span>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- MsAvatarGroup com max para colapso elegante em +N -->
<MsAvatarGroup size="md" :max="4" spacing="normal">
  <MsAvatar name="Ada Lovelace" src="user1.jpg" />
  <MsAvatar name="Carlos Souza" src="user2.jpg" />
  <MsAvatar name="Mariana Costa" src="user3.jpg" />
  <MsAvatar name="Lucas Pereira" src="user4.jpg" />
  <MsAvatar name="Beatriz Santos" src="user5.jpg" />
</MsAvatarGroup>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 6. USER IDENTITY ROWS -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Linhas de Identidade do Usuário (User Identity Row — Shadcn Pattern)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Identity Rows</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 480px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <MsAvatar name="Bruno Cavalcante" size="md" status="online" bordered />
              <div>
                <div style="font-size: 14px; font-weight: 700; color: var(--ms-color-text-primary);">Bruno Cavalcante</div>
                <div style="font-size: 12px; color: var(--ms-color-text-muted);">bruno.netadmin@gmail.com</div>
              </div>
            </div>
            <MsBadge tone="primary" variant="soft" data-pill>Admin</MsBadge>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <MsAvatar name="Carolina Mendes" size="md" status="busy" bordered />
              <div>
                <div style="font-size: 14px; font-weight: 700; color: var(--ms-color-text-primary);">Carolina Mendes</div>
                <div style="font-size: 12px; color: var(--ms-color-text-muted);">carolina.mendes@empresa.com</div>
              </div>
            </div>
            <MsBadge tone="neutral" variant="soft" data-pill>Editor</MsBadge>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Padrão Shadcn de linha de usuário com avatar e badge de permissão -->
<div class="user-row">
  <MsAvatar name="Bruno Cavalcante" size="md" status="online" bordered />
  <div class="user-info">
    <div class="name">Bruno Cavalcante</div>
    <div class="email">bruno.netadmin@gmail.com</div>
  </div>
  <MsBadge tone="primary" variant="soft" data-pill>Admin</MsBadge>
</div>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'dialogs'">
    <!-- 1. DESTRUCTIVE CONFIRMATION DIALOG -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Diálogo de Confirmação Crítica (Destructive Alert Dialog — Shadcn Signature)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Alert Dialog</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; justify-content: center; width: 100%;">
          <!-- Inline Modal Representation for Studio Demonstration -->
          <div style="max-width: 480px; width: 100%; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); overflow: hidden;">
            <div style="padding: 24px;">
              <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: color-mix(in oklch, var(--ms-color-danger) 15%, transparent); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; color: var(--ms-color-danger);">
                  ⚠️
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 700; color: var(--ms-color-text-primary); margin-bottom: 4px;">Excluir Repositório Permanentemente?</div>
                  <div style="font-size: 13px; color: var(--ms-color-text-secondary); line-height: 1.5;">
                    Esta ação não poderá ser desfeita. Todos os branches, pull requests, releases e métricas de qualidade associadas serão excluídos permanentemente.
                  </div>
                </div>
              </div>
            </div>
            <div style="background: var(--ms-color-surface-sunken); padding: 12px 24px; display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--ms-color-border-subtle);">
              <MsButton variant="outline" tone="neutral" size="sm">Cancelar</MsButton>
              <MsButton variant="solid" tone="danger" size="sm" wave>Sim, Excluir Repositório</MsButton>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- MsDialog para confirmações destrutivas com foco em a11y -->
<MsDialog
  :open="isConfirmOpen"
  title="Excluir Repositório Permanentemente?"
  role="alertdialog"
  tone="danger"
  size="sm"
>
  <p>Esta ação é irreversível e excluirá todos os dados do cluster.</p>
  <template #footer>
    <MsButton variant="outline" @click="isConfirmOpen = false">Cancelar</MsButton>
    <MsButton variant="solid" tone="danger" @click="handleDelete">Sim, Excluir</MsButton>
  </template>
</MsDialog>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. EDIT FORM MODAL -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Modal de Formulário Corporativo (Edit Profile Dialog)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Form Modal</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; justify-content: center; width: 100%;">
          <div style="max-width: 480px; width: 100%; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); overflow: hidden;">
            <div style="padding: 20px 24px; border-bottom: 1px solid var(--ms-color-border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 16px; font-weight: 700; color: var(--ms-color-text-primary);">Editar Informações de Acesso</div>
                <div style="font-size: 12px; color: var(--ms-color-text-muted);">Atualize seus dados de cadastro no sistema.</div>
              </div>
              <span style="cursor: pointer; font-size: 18px; color: var(--ms-color-text-muted);">✕</span>
            </div>
            <div style="padding: 20px 24px; display: flex; flex-direction: column; gap: 14px;">
              <div>
                <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Nome de Exibição</label>
                <MsInput model-value="Bruno Cavalcante" tone="primary" />
              </div>
              <div>
                <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">E-mail Corporativo</label>
                <MsInput model-value="bruno.netadmin@gmail.com" tone="primary" />
              </div>
              <div>
                <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Função / Cargo</label>
                <MsInput model-value="Lead Software Architect" tone="neutral" readonly />
              </div>
            </div>
            <div style="background: var(--ms-color-surface-sunken); padding: 14px 24px; display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--ms-color-border-subtle);">
              <MsButton variant="outline" tone="neutral" size="sm">Descartar</MsButton>
              <MsButton variant="solid" tone="primary" size="sm" wave>Salvar Modificações</MsButton>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Modal com formulário integrado e WAI-ARIA trap de foco -->
<MsDialog :open="isEditOpen" title="Editar Informações de Acesso" size="md">
  <form @submit.prevent="saveProfile">
    <MsField label="Nome"><MsInput v-model="name" /></MsField>
    <MsField label="E-mail"><MsInput v-model="email" /></MsField>
    <div class="actions">
      <MsButton variant="outline" @click="isEditOpen = false">Cancelar</MsButton>
      <MsButton variant="solid" tone="primary" type="submit">Salvar</MsButton>
    </div>
  </form>
</MsDialog>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'drawers'">
    <!-- 1. SLIDE-OVER DRAWER -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Slide-Over Direito: Filtros e Configurações (Right Slide Drawer)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Right Drawer</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; justify-content: flex-end; width: 100%;">
          <div style="max-width: 380px; width: 100%; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; box-shadow: -10px 0 25px -5px rgb(0 0 0 / 0.1); overflow: hidden;">
            <div style="padding: 18px 20px; border-bottom: 1px solid var(--ms-color-border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 15px; font-weight: 700; color: var(--ms-color-text-primary);">Filtros Avançados</div>
                <div style="font-size: 11px; color: var(--ms-color-text-muted);">Refine os resultados do catálogo.</div>
              </div>
              <span style="cursor: pointer; font-size: 16px; color: var(--ms-color-text-muted);">✕</span>
            </div>
            <div style="padding: 20px; display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Buscar por Palavra-Chave</label>
                <MsInput placeholder="Ex: button, select, badge..." tone="primary" size="sm" />
              </div>
              <div>
                <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Exibir Somente Estáveis</label>
                <MsSwitch :model-value="true" tone="primary" />
              </div>
              <div>
                <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px;">Incluir Componentes Legados</label>
                <MsSwitch :model-value="false" tone="neutral" />
              </div>
            </div>
            <div style="background: var(--ms-color-surface-sunken); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--ms-color-border-subtle);">
              <MsButton variant="ghost" tone="neutral" size="sm">Limpar Filtros</MsButton>
              <MsButton variant="solid" tone="primary" size="sm" wave>Aplicar Filtros</MsButton>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Gaveta lateral deslizante com posicionamento à direita -->
<MsDrawer :open="isFilterOpen" placement="right" title="Filtros Avançados">
  <div class="filters-content">
    <MsInput placeholder="Buscar..." />
    <MsSwitch label="Somente Estáveis" :model-value="true" />
  </div>
  <template #footer>
    <MsButton variant="ghost">Limpar</MsButton>
    <MsButton variant="solid" tone="primary">Aplicar</MsButton>
  </template>
</MsDrawer>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'accordions'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsAccordion em Modo Separado e Conectado</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Accordion Styles</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 560px;">
        <MsAccordion>
          <MsAccordionItem value="item-1" title="Como funciona o sistema de tokens?">
            O Magic-Style compila design tokens W3C DTCG em variáveis CSS (--ms-*) com suporte nativo a temas claro/escuro.
          </MsAccordionItem>
          <MsAccordionItem value="item-2" title="Quais são os 8 tons semânticos da marca?">
            Primary (#2e86de), Secondary (#e15f41), Accent (#341f97), Neutral (#222f3e), Success (#10ac84), Info (#0abde3), Warning (#ff9f43) e Danger (#ee5253).
          </MsAccordionItem>
          <MsAccordionItem value="item-3" title="Como funciona a governança da Baseline 1.2?">
            Documentos 01 a 28 normatizam topologia, limites arquiteturais, TypeScript estrito e gates no fake green.
          </MsAccordionItem>
        </MsAccordion>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAccordion>
  <MsAccordionItem title="Dúvida 1">Resposta...</MsAccordionItem>
</MsAccordion>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'empty-states'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsEmptyState em Variantes (Dashed, Solid, Minimal)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Empty States</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; width: 100%;">
        <MsEmptyState variant="dashed" icon-tone="primary" title="Nenhum Registro Encontrado" description="Tente ajustar os filtros de busca para visualizar componentes.">
          <template #actions><MsButton size="sm" variant="solid" tone="primary">Limpar Filtros</MsButton></template>
        </MsEmptyState>
        <MsEmptyState variant="solid" icon-tone="accent" title="Nenhuma Notificação Pendente" description="Você está em dia com todas as tarefas e aprovações do workspace."></MsEmptyState>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsEmptyState title="Vazio" description="...">
  <template #actions><MsButton>Ação</MsButton></template>
</MsEmptyState>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'containers'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsContainer com Larguras Responsivas (sm, md, lg, xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Containers</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <div style="border: 1px dashed var(--ms-color-primary); padding: 12px; border-radius: 8px;">
          <MsContainer max-width="md">
            <div style="background: var(--ms-color-surface-subtle); padding: 16px; text-align: center; border-radius: 6px;">
              Container Médio (md - 960px max)
            </div>
          </MsContainer>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsContainer max-width="md">
  <p>Conteúdo centralizado</p>
</MsContainer>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'separators'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Separadores Horizontais com Rótulo ("OU", "CONTINUAR")</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Separators with Labels</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; max-width: 440px;">
        <MsSeparator orientation="horizontal" tone="neutral" label="OU" align="center"></MsSeparator>
        <MsSeparator orientation="horizontal" tone="primary" label="NOVA SEÇÃO" align="left"></MsSeparator>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSeparator label="OU" align="center" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'app-shell'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Visualização Estrutural do MsAppShell Enterprise</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">App Shell Architecture</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; height: 260px; border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
        <div style="height: 40px; background: var(--ms-color-surface-inverse); color: white; display: flex; align-items: center; padding: 0 16px; font-size: 12px; font-weight: bold;">
          TOPBAR • MAGICSTYLE ENTERPRISE
        </div>
        <div style="flex: 1; display: flex;">
          <div style="width: 180px; background: var(--ms-color-surface-raised); border-right: 1px solid var(--ms-color-border-subtle); padding: 12px; font-size: 11px;">
            SIDEBAR NAVEGAÇÃO
          </div>
          <div style="flex: 1; background: var(--ms-color-surface-default); padding: 16px; font-size: 12px;">
            CONTEÚDO PRINCIPAL (MAIN VIEWPORT)
          </div>
        </div>
        <div style="height: 24px; background: var(--ms-color-surface-subtle); display: flex; align-items: center; padding: 0 16px; font-size: 10px; color: var(--ms-color-text-muted);">
          STATUS BAR • 100% OPERACIONAL
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAppShell>
  <template #topbar>...</template>
  <template #sidebar>...</template>
  <router-view />
</MsAppShell>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'pages'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsPage com Header Semântico, Breadcrumbs & Ações</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Page Headers</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; padding: 20px; background: var(--ms-color-surface-raised);">
        <MsPage title="Gestão de Módulos & Licenças" description="Acompanhe o ciclo de vida dos componentes e as versões publicadas.">
          <template #actions>
            <MsButton variant="outline" tone="neutral" size="sm">Exportar CSV</MsButton>
            <MsButton variant="solid" tone="primary" size="sm">+ Novo Módulo</MsButton>
          </template>
        </MsPage>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsPage title="Gestão de Módulos" description="...">
  <template #actions><MsButton>Novo</MsButton></template>
</MsPage>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'tables'">
    <!-- 1. ENTERPRISE USER MANAGEMENT TABLE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Tabela Corporativa de Usuários & Acessos (Enterprise Users)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Enterprise Table</span>
      </div>
      <div class="variation-preview-box">
        <div style="width: 100%; overflow-x: auto;">
          <MsTable variant="default" density="normal" hoverable striped caption="Membros da Organização">
            <MsTableHead>
              <MsTableRow>
                <MsTableHeaderCell style="width: 40px;"><input type="checkbox" checked style="cursor: pointer;" /></MsTableHeaderCell>
                <MsTableHeaderCell>Usuário</MsTableHeaderCell>
                <MsTableHeaderCell>Função / Cargo</MsTableHeaderCell>
                <MsTableHeaderCell align="center">Status</MsTableHeaderCell>
                <MsTableHeaderCell>Último Acesso</MsTableHeaderCell>
                <MsTableHeaderCell align="right">Ações</MsTableHeaderCell>
              </MsTableRow>
            </MsTableHead>
            <MsTableBody>
              <MsTableRow>
                <MsTableCell><input type="checkbox" checked style="cursor: pointer;" /></MsTableCell>
                <MsTableCell>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <MsAvatar name="Bruno Cavalcante" size="sm" status="online" bordered />
                    <div>
                      <div style="font-weight: 700; color: var(--ms-color-text-primary);">Bruno Cavalcante</div>
                      <div style="font-size: 11px; color: var(--ms-color-text-muted);">bruno.netadmin@gmail.com</div>
                    </div>
                  </div>
                </MsTableCell>
                <MsTableCell><MsBadge tone="primary" variant="soft" data-pill>Super Admin</MsBadge></MsTableCell>
                <MsTableCell align="center"><MsBadge tone="success" variant="soft" data-pill data-pulse>Ativo</MsBadge></MsTableCell>
                <MsTableCell style="font-size: 12px; color: var(--ms-color-text-secondary);">Hoje às 16:42</MsTableCell>
                <MsTableCell align="right">
                  <div style="display: inline-flex; gap: 6px;">
                    <MsButton size="xs" variant="ghost" tone="neutral">Editar</MsButton>
                    <MsButton size="xs" variant="ghost" tone="danger">Revogar</MsButton>
                  </div>
                </MsTableCell>
              </MsTableRow>

              <MsTableRow>
                <MsTableCell><input type="checkbox" style="cursor: pointer;" /></MsTableCell>
                <MsTableCell>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <MsAvatar name="Helena Carvalho" size="sm" status="busy" bordered />
                    <div>
                      <div style="font-weight: 700; color: var(--ms-color-text-primary);">Helena Carvalho</div>
                      <div style="font-size: 11px; color: var(--ms-color-text-muted);">helena.carvalho@empresa.com</div>
                    </div>
                  </div>
                </MsTableCell>
                <MsTableCell><MsBadge tone="accent" variant="soft" data-pill>Staff Architect</MsBadge></MsTableCell>
                <MsTableCell align="center"><MsBadge tone="success" variant="soft" data-pill data-pulse>Ativo</MsBadge></MsTableCell>
                <MsTableCell style="font-size: 12px; color: var(--ms-color-text-secondary);">Ontem às 18:30</MsTableCell>
                <MsTableCell align="right">
                  <div style="display: inline-flex; gap: 6px;">
                    <MsButton size="xs" variant="ghost" tone="neutral">Editar</MsButton>
                    <MsButton size="xs" variant="ghost" tone="danger">Revogar</MsButton>
                  </div>
                </MsTableCell>
              </MsTableRow>

              <MsTableRow>
                <MsTableCell><input type="checkbox" style="cursor: pointer;" /></MsTableCell>
                <MsTableCell>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <MsAvatar name="Lucas Pereira" size="sm" status="away" bordered />
                    <div>
                      <div style="font-weight: 700; color: var(--ms-color-text-primary);">Lucas Pereira</div>
                      <div style="font-size: 11px; color: var(--ms-color-text-muted);">lucas.pereira@empresa.com</div>
                    </div>
                  </div>
                </MsTableCell>
                <MsTableCell><MsBadge tone="neutral" variant="soft" data-pill>QA Engineer</MsBadge></MsTableCell>
                <MsTableCell align="center"><MsBadge tone="warning" variant="soft" data-pill>Pendente</MsBadge></MsTableCell>
                <MsTableCell style="font-size: 12px; color: var(--ms-color-text-secondary);">Há 3 dias</MsTableCell>
                <MsTableCell align="right">
                  <div style="display: inline-flex; gap: 6px;">
                    <MsButton size="xs" variant="ghost" tone="neutral">Reenviar</MsButton>
                    <MsButton size="xs" variant="ghost" tone="danger">Cancelar</MsButton>
                  </div>
                </MsTableCell>
              </MsTableRow>
            </MsTableBody>
          </MsTable>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Tabela completa com avatares, badges semânticos e ações inline -->
<MsTable hoverable striped caption="Membros">
  <MsTableHead>
    <MsTableRow>
      <MsTableHeaderCell>Usuário</MsTableHeaderCell>
      <MsTableHeaderCell>Função</MsTableHeaderCell>
      <MsTableHeaderCell>Status</MsTableHeaderCell>
      <MsTableHeaderCell align="right">Ações</MsTableHeaderCell>
    </MsTableRow>
  </MsTableHead>
  <MsTableBody>
    <MsTableRow>
      <MsTableCell>
        <MsAvatar name="Bruno" size="sm" status="online" />
        <span>Bruno Cavalcante</span>
      </MsTableCell>
      <MsTableCell><MsBadge tone="primary">Admin</MsBadge></MsTableCell>
      <MsTableCell><MsBadge tone="success" data-pulse>Ativo</MsBadge></MsTableCell>
      <MsTableCell align="right"><MsButton size="xs">Editar</MsButton></MsTableCell>
    </MsTableRow>
  </MsTableBody>
</MsTable>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 2. MONOREPO PACKAGES REGISTRY TABLE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Registro de Pacotes do Monorepo (Baseline 1.2 Health Gate)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Monorepo Registry</span>
      </div>
      <div class="variation-preview-box">
        <div style="width: 100%; overflow-x: auto;">
          <MsTable variant="default" density="normal" striped bordered hoverable caption="Métricas de Qualidade dos Pacotes">
            <MsTableHead>
              <MsTableRow>
                <MsTableHeaderCell sortable sort-direction="asc">Pacote</MsTableHeaderCell>
                <MsTableHeaderCell>Tipo</MsTableHeaderCell>
                <MsTableHeaderCell align="right">Testes Unitários</MsTableHeaderCell>
                <MsTableHeaderCell align="right">Cobertura</MsTableHeaderCell>
                <MsTableHeaderCell align="center">Saúde</MsTableHeaderCell>
              </MsTableRow>
            </MsTableHead>
            <MsTableBody>
              <MsTableRow v-for="r in tableRows" :key="r.id">
                <MsTableCell style="font-weight: 700; font-family: monospace; color: var(--ms-color-primary);">{{ r.name }}</MsTableCell>
                <MsTableCell><MsBadge :tone="r.type === 'Público' ? 'primary' : 'neutral'" variant="soft">{{ r.type }}</MsBadge></MsTableCell>
                <MsTableCell align="right" style="font-weight: 600;">{{ r.tests }} testes</MsTableCell>
                <MsTableCell align="right" style="font-weight: 700; color: var(--ms-color-success);">{{ r.coverage }}</MsTableCell>
                <MsTableCell align="center">
                  <MsBadge tone="success" variant="soft" data-pill>{{ r.status }}</MsBadge>
                </MsTableCell>
              </MsTableRow>
            </MsTableBody>
          </MsTable>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Tabela com colunas numéricas alinhadas à direita e badges de saúde -->
<MsTable striped bordered hoverable>
  <MsTableHead>
    <MsTableRow>
      <MsTableHeaderCell sortable>Pacote</MsTableHeaderCell>
      <MsTableHeaderCell align="right">Testes</MsTableHeaderCell>
      <MsTableHeaderCell align="right">Cobertura</MsTableHeaderCell>
      <MsTableHeaderCell align="center">Status</MsTableHeaderCell>
    </MsTableRow>
  </MsTableHead>
  <MsTableBody>
    <MsTableRow v-for="r in rows" :key="r.id">
      <MsTableCell>{{ r.name }}</MsTableCell>
      <MsTableCell align="right">{{ r.tests }}</MsTableCell>
      <MsTableCell align="right">{{ r.coverage }}</MsTableCell>
      <MsTableCell align="center"><MsBadge tone="success">{{ r.status }}</MsBadge></MsTableCell>
    </MsTableRow>
  </MsTableBody>
</MsTable>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 3. FINANCIAL TRANSACTIONS TABLE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Tabela Financeira & Faturamento de Contratos</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Billing & Finance</span>
      </div>
      <div class="variation-preview-box">
        <div style="width: 100%; overflow-x: auto;">
          <MsTable variant="default" density="normal" hoverable caption="Histórico de Faturas">
            <MsTableHead>
              <MsTableRow>
                <MsTableHeaderCell>Fatura</MsTableHeaderCell>
                <MsTableHeaderCell>Cliente Corporativo</MsTableHeaderCell>
                <MsTableHeaderCell>Emissão</MsTableHeaderCell>
                <MsTableHeaderCell align="right">Valor Líquido</MsTableHeaderCell>
                <MsTableHeaderCell align="center">Status</MsTableHeaderCell>
              </MsTableRow>
            </MsTableHead>
            <MsTableBody>
              <MsTableRow>
                <MsTableCell style="font-family: monospace; font-weight: 700;">#INV-2026-0891</MsTableCell>
                <MsTableCell>Nubank Tecnologia S.A.</MsTableCell>
                <MsTableCell style="font-size: 12px; color: var(--ms-color-text-muted);">24 Set 2026</MsTableCell>
                <MsTableCell align="right" style="font-weight: 800; color: var(--ms-color-success);">+ R$ 24.890,00</MsTableCell>
                <MsTableCell align="center"><MsBadge tone="success" variant="solid" data-pill>Liquidado</MsBadge></MsTableCell>
              </MsTableRow>
              <MsTableRow>
                <MsTableCell style="font-family: monospace; font-weight: 700;">#INV-2026-0890</MsTableCell>
                <MsTableCell>Mercado Livre Brasil</MsTableCell>
                <MsTableCell style="font-size: 12px; color: var(--ms-color-text-muted);">22 Set 2026</MsTableCell>
                <MsTableCell align="right" style="font-weight: 800; color: var(--ms-color-success);">+ R$ 18.450,00</MsTableCell>
                <MsTableCell align="center"><MsBadge tone="success" variant="solid" data-pill>Liquidado</MsBadge></MsTableCell>
              </MsTableRow>
              <MsTableRow>
                <MsTableCell style="font-family: monospace; font-weight: 700;">#INV-2026-0889</MsTableCell>
                <MsTableCell>Stone Pagamentos</MsTableCell>
                <MsTableCell style="font-size: 12px; color: var(--ms-color-text-muted);">19 Set 2026</MsTableCell>
                <MsTableCell align="right" style="font-weight: 800; color: var(--ms-color-danger);">- R$ 1.200,00</MsTableCell>
                <MsTableCell align="center"><MsBadge tone="danger" variant="soft" data-pill>Estorno</MsBadge></MsTableCell>
              </MsTableRow>
            </MsTableBody>
          </MsTable>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Faturas financeiras com distinção de crédito e estorno -->
<MsTable hoverable>
  <MsTableBody>
    <MsTableRow>
      <MsTableCell>#INV-2026-0891</MsTableCell>
      <MsTableCell>Nubank</MsTableCell>
      <MsTableCell align="right" class="credit">+ R$ 24.890,00</MsTableCell>
      <MsTableCell align="center"><MsBadge tone="success">Liquidado</MsBadge></MsTableCell>
    </MsTableRow>
  </MsTableBody>
</MsTable>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <!-- 4. DENSITY SCALE -->
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Escala de Densidades (Compacta vs Espaçosa)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Densities</span>
      </div>
      <div class="variation-preview-box">
        <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
          <div>
            <div style="font-size: 12px; font-weight: 700; color: var(--ms-color-text-muted); margin-bottom: 6px;">DENSIDADE COMPACTA (density="compact" — Ideal para alta densidade e planilhas):</div>
            <MsTable density="compact" striped bordered>
              <MsTableHead>
                <MsTableRow>
                  <MsTableHeaderCell>Variável</MsTableHeaderCell>
                  <MsTableHeaderCell>Token</MsTableHeaderCell>
                  <MsTableHeaderCell align="right">Valor</MsTableHeaderCell>
                </MsTableRow>
              </MsTableHead>
              <MsTableBody>
                <MsTableRow>
                  <MsTableCell style="font-family: monospace; font-size: 11px;">--ms-space-1</MsTableCell>
                  <MsTableCell>Spacing Base Micro</MsTableCell>
                  <MsTableCell align="right" style="font-family: monospace;">4px</MsTableCell>
                </MsTableRow>
                <MsTableRow>
                  <MsTableCell style="font-family: monospace; font-size: 11px;">--ms-space-2</MsTableCell>
                  <MsTableCell>Spacing Base Small</MsTableCell>
                  <MsTableCell align="right" style="font-family: monospace;">8px</MsTableCell>
                </MsTableRow>
              </MsTableBody>
            </MsTable>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Tabela compacta para painéis operacionais -->
<MsTable density="compact" striped bordered>
  <MsTableHead>...</MsTableHead>
  <MsTableBody>...</MsTableBody>
</MsTable>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'timeline'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsTimeline nos Tons da Marca para Rastreamento e Logs</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Audit & Progress Timeline</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 500px;">
        <MsTimeline>
          <MsTimelineItem tone="success" title="Compilação Finalizada" time="10:45:02" description="Todos os 50 componentes Vue compilados com sucesso."></MsTimelineItem>
          <MsTimelineItem tone="primary" title="Validação de Arquitetura" time="10:45:15" description="Zero arestas proibidas detectadas pelo check-architecture.mjs."></MsTimelineItem>
          <MsTimelineItem tone="accent" title="Publicação em Staging" time="10:46:00" description="Pacote @magic-style/vue v0.1.0 disponível para testes visuais."></MsTimelineItem>
        </MsTimeline>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTimeline>
  <MsTimelineItem tone="success" title="Concluído" />
</MsTimeline>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'ratings'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsRating Interativo e Somente Leitura nos Tons da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Ratings & Stars</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
        <div>
          <div style="font-size: 12px; font-weight: bold; margin-bottom: 6px;">WARNING (GOLD - PADRÃO):</div>
          <MsRating tone="warning" :model-value="4"></MsRating>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: bold; margin-bottom: 6px;">ACCENT (VIOLETA):</div>
          <MsRating tone="accent" :model-value="5"></MsRating>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: bold; margin-bottom: 6px;">PRIMARY (AZUL):</div>
          <MsRating tone="primary" :model-value="3"></MsRating>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsRating tone="warning" :model-value="4" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'animated-numbers' || activeTab === 'animated-number'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsAnimatedNumber em Cards de Métricas e KPIs</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Metric KPI Counters</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; width: 100%;">
        <div style="padding: 16px; border-radius: 10px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); text-align: center;">
          <div style="font-size: 12px; color: var(--ms-color-text-muted);">USUÁRIOS ATIVOS</div>
          <div style="font-size: 32px; font-weight: bold; color: var(--ms-color-primary, #2e86de);">
            <MsAnimatedNumber :value="14850" prefix="+" suffix=""></MsAnimatedNumber>
          </div>
        </div>
        <div style="padding: 16px; border-radius: 10px; background: var(--ms-color-surface-raised); border: 1px solid var(--ms-color-border-subtle); text-align: center;">
          <div style="font-size: 12px; color: var(--ms-color-text-muted);">RECEITA MENSAL</div>
          <div style="font-size: 32px; font-weight: bold; color: var(--ms-color-success, #10ac84);">
            <MsAnimatedNumber :value="98450" prefix="R$ " suffix=""></MsAnimatedNumber>
          </div>
        </div>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAnimatedNumber :value="14850" prefix="+" />
<MsAnimatedNumber :value="98450" prefix="R$ " />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'lists'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsList com Itens Selecionáveis, Ícones Prefix e Suffix</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Interactive Lists</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 480px; border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; overflow: hidden; background: var(--ms-color-surface-raised);">
        <MsList>
          <MsListItem title="Tokens de Cores Semânticas" subtitle="8 tons oficiais com contraste WCAG 2.2 AAA">
            <template #prefix>🎨</template>
            <template #suffix><MsBadge tone="success" variant="soft">OK</MsBadge></template>
          </MsListItem>
          <MsListItem title="Unified Select Engine" subtitle="Single, multiple, searchable, creatable, pill">
            <template #prefix>⚡</template>
            <template #suffix><MsBadge tone="primary" variant="soft">v1.2</MsBadge></template>
          </MsListItem>
          <MsListItem title="Sidebar Sliding Menu" subtitle="Navegação hierárquica retrátil integrada">
            <template #prefix>📑</template>
            <template #suffix><MsBadge tone="accent" variant="soft">Novo</MsBadge></template>
          </MsListItem>
        </MsList>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsList>
  <MsListItem title="Item 1">
    <template #prefix>🎨</template>
  </MsListItem>
</MsList>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'steppers'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsStepper Horizontal de Checkout e Configuração</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Step Wizard</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 600px;">
        <MsStepper :current-step="2">
          <MsStep :step="1" title="Conta" description="Dados de acesso" completed></MsStep>
          <MsStep :step="2" title="Organização" description="Workspace" active></MsStep>
          <MsStep :step="3" title="Plano" description="Escolha"></MsStep>
          <MsStep :step="4" title="Finalizar" description="Ativação"></MsStep>
        </MsStepper>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsStepper :current-step="2">
  <MsStep :step="1" title="Passo 1" completed />
  <MsStep :step="2" title="Passo 2" active />
</MsStepper>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'trees' || activeTab === 'tree-views'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsTree Hierárquica com Ícones de Pastas e Arquivos</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Tree Hierarchy</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 440px; padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; background: var(--ms-color-surface-raised);">
        <MsTree>
          <MsTreeNode label="packages/" expanded>
            <MsTreeNode label="vue/ (Componentes Vue 3)"></MsTreeNode>
            <MsTreeNode label="css/ (CSS Layers & BEM)"></MsTreeNode>
            <MsTreeNode label="internal/ (Tokens & Themes)"></MsTreeNode>
          </MsTreeNode>
          <MsTreeNode label="apps/">
            <MsTreeNode label="preview/ (Studio Studio)"></MsTreeNode>
          </MsTreeNode>
        </MsTree>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsTree>
  <MsTreeNode label="src">
    <MsTreeNode label="index.ts" />
  </MsTreeNode>
</MsTree>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'context-menus'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsContextMenu Acionado por Clique com Botão Direito</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Context Menu Trigger Area</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 480px; height: 120px; border: 2px dashed var(--ms-color-border-subtle); border-radius: 12px; display: flex; align-items: center; justify-content: center; background: var(--ms-color-surface-default);">
        <span style="font-size: 13px; color: var(--ms-color-text-secondary);">Clique com o botão direito nesta área para abrir o menu</span>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsContextMenu :items="menuItems">
  <div>Área clicável</div>
</MsContextMenu>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'chat-bubbles'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsChatBubble em Tons da Marca (Incoming vs Outgoing)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Chat Conversations</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 480px;">
        <MsChatBubble tone="neutral" author="Ada Lovelace" time="14:32" message="Como estão os preparativos para o release da Baseline 1.2?"></MsChatBubble>
        <MsChatBubble tone="primary" outgoing author="Você" time="14:33" message="Todos os 50 componentes foram enriquecidos com os 8 tons corporativos e testes 100% green!"></MsChatBubble>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsChatBubble tone="neutral" author="Ada" message="..." />
<MsChatBubble tone="primary" outgoing message="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'carousels'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsCarousel com Navegação por Setas e Indicadores</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Carousel Slides</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 500px; height: 180px; border-radius: 12px; overflow: hidden;">
        <MsCarousel>
          <MsCarouselSlide>
            <div style="height: 180px; background: linear-gradient(135deg, #2e86de, #341f97); color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
              <h3 style="margin: 0;">Slide 1: Design Tokens</h3>
              <p style="margin: 4px 0 0;">Tokens W3C DTCG semânticos</p>
            </div>
          </MsCarouselSlide>
          <MsCarouselSlide>
            <div style="height: 180px; background: linear-gradient(135deg, #10ac84, #0abde3); color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;">
              <h3 style="margin: 0;">Slide 2: 8 Tons Oficiais</h3>
              <p style="margin: 4px 0 0;">Cores corporativas harmonizadas</p>
            </div>
          </MsCarouselSlide>
        </MsCarousel>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsCarousel>
  <MsCarouselSlide>Slide 1</MsCarouselSlide>
</MsCarousel>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'docks'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsDock Estilo macOS com Efeito de Escala Fluida</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Floating Dock</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; justify-content: center; width: 100%; padding: 20px;">
        <MsDock position="bottom">
          <MsDockItem label="Início" icon="🏠"></MsDockItem>
          <MsDockItem label="Projetos" icon="📁"></MsDockItem>
          <MsDockItem label="Componentes" icon="⚡" badge="51"></MsDockItem>
          <MsDockItem label="Configurações" icon="⚙️"></MsDockItem>
        </MsDock>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsDock position="bottom">
  <MsDockItem label="Home" icon="🏠" />
</MsDock>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'scroll-spies'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsScrollSpy para Navegação em Documentações Longas</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Scroll Spy Navigation</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; max-width: 320px; padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: 12px; background: var(--ms-color-surface-raised);">
        <MsScrollSpy :items="[
          { id: 'sec-1', label: '1. Introdução & Instalação' },
          { id: 'sec-2', label: '2. Paleta de 8 Tons' },
          { id: 'sec-3', label: '3. Variantes Visuais' },
          { id: 'sec-4', label: '4. API & TypeScript' }
        ]"></MsScrollSpy>
      </div>
    
      </div>
          <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollSpy :items="sections" />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>


  <div v-if="activeTab === 'navbar'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Galeria dos 8 Tons Semânticos Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <div v-for="t in allTones" :key="'nb-tone-' + t" style="width: 100%;">
          <MsNavbar :tone="t" size="sm">
            <template #brand>
              <span style="font-weight: 700; font-size: 14px; display: flex; align-items: center; gap: 6px;">
                ⚡ MagicStyle <span style="font-size: 11px; opacity: 0.85;">[{{ t.toUpperCase() }}]</span>
              </span>
            </template>
            <div style="display: flex; gap: 16px; font-size: 13px; align-items: center;">
              <a href="javascript:void(0)" style="color: inherit; text-decoration: none; font-weight: 500;">Visão Geral</a>
              <a href="javascript:void(0)" style="color: inherit; text-decoration: none; opacity: 0.85;">Recursos</a>
              <a href="javascript:void(0)" style="color: inherit; text-decoration: none; opacity: 0.85;">Preços</a>
            </div>
            <template #actions>
              <span style="font-size: 12px; opacity: 0.9; font-family: monospace;">{{ toneHexMap[t] }}</span>
            </template>
          </MsNavbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNavbar tone="primary" size="sm">
  <template #brand>⚡ MagicStyle</template>
  <div><a href="#">Visão Geral</a></div>
  <template #actions><span>#2e86de</span></template>
</MsNavbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes Visuais: Default, Elevated, Bordered e Glass (Vidro)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Visual Variants</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px; padding: 20px;">
        <div>
          <div style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary); margin-bottom: 6px;">Variante Default:</div>
          <MsNavbar variant="default">
            <template #brand><span>Default Surface</span></template>
            <div>Links de navegação</div>
            <template #actions><MsButton size="sm" variant="soft">Ação</MsButton></template>
          </MsNavbar>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary); margin-bottom: 6px;">Variante Elevated (Sombra de Superfície):</div>
          <MsNavbar variant="elevated">
            <template #brand><span>Elevated Card</span></template>
            <div>Links de navegação</div>
            <template #actions><MsButton size="sm" variant="solid" tone="primary">Novo Projeto</MsButton></template>
          </MsNavbar>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 600; color: var(--ms-color-text-secondary); margin-bottom: 6px;">Variante Bordered (Contorno Reforçado):</div>
          <MsNavbar variant="bordered">
            <template #brand><span>Bordered Stroke</span></template>
            <div>Links de navegação</div>
            <template #actions><MsButton size="sm" variant="outline">Documentação</MsButton></template>
          </MsNavbar>
        </div>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 16px; border-radius: 12px;">
          <div style="font-size: 12px; font-weight: 600; color: #ffffff; margin-bottom: 6px;">Variante Glass (Efeito Vidro com Backdrop Blur 14px):</div>
          <MsNavbar variant="glass">
            <template #brand><span style="color: white;">✨ Glassmorphism</span></template>
            <div style="color: rgba(255,255,255,0.9);">Transparência adaptativa com desfoque</div>
            <template #actions><MsButton size="sm" variant="solid" tone="accent">Conectar</MsButton></template>
          </MsNavbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNavbar variant="glass">
  <template #brand>✨ Glassmorphism</template>
  <template #actions><MsButton tone="accent">Conectar</MsButton></template>
</MsNavbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala de Tamanhos e Densidade (sm: 48px, md: 56px, lg: 68px)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Size Scales</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <MsNavbar size="sm" tone="neutral">
          <template #brand><span>Navbar Compacta (sm - 48px)</span></template>
          <template #actions><MsButton size="xs" variant="soft" tone="neutral">Compact</MsButton></template>
        </MsNavbar>
        <MsNavbar size="md" tone="neutral">
          <template #brand><span>Navbar Padrão (md - 56px)</span></template>
          <template #actions><MsButton size="sm" variant="soft" tone="neutral">Standard</MsButton></template>
        </MsNavbar>
        <MsNavbar size="lg" tone="neutral">
          <template #brand><span>Navbar Ampla / Portal (lg - 68px)</span></template>
          <template #actions><MsButton size="md" variant="soft" tone="neutral">Large Portal</MsButton></template>
        </MsNavbar>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNavbar size="lg" tone="neutral">...</MsNavbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Navbar Flutuante (Floating Mode)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Floating Variant</span>
      </div>
      <div class="variation-preview-box" style="background: var(--ms-color-surface-subtle, #f1f5f9); padding: 24px;">
        <MsNavbar floating variant="elevated">
          <template #brand>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 28px; height: 28px; border-radius: 6px; background: var(--ms-color-primary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700;">M</div>
              <strong>Magic App</strong>
            </div>
          </template>
          <div style="display: flex; gap: 20px; font-size: 14px;">
            <a href="javascript:void(0)" style="color: var(--ms-color-primary); text-decoration: none; font-weight: 600;">Início</a>
            <a href="javascript:void(0)" style="color: var(--ms-color-text-secondary); text-decoration: none;">Projetos</a>
            <a href="javascript:void(0)" style="color: var(--ms-color-text-secondary); text-decoration: none;">Equipe</a>
          </div>
          <template #actions>
            <MsButton size="sm" variant="solid" tone="primary" pill>Experimente Grátis</MsButton>
          </template>
        </MsNavbar>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNavbar floating variant="elevated">
  <template #brand>Magic App</template>
  <template #actions><MsButton pill>Experimente Grátis</MsButton></template>
</MsNavbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Escala de Efeitos de Sombra Inferior (none, sm, md, lg, xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shadow Elevations</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 20px; padding: 24px;">
        <MsNavbar shadow="sm">
          <template #brand><strong>Sombra Suave (shadow="sm")</strong></template>
          <template #actions><MsButton size="xs" variant="soft">Ação</MsButton></template>
        </MsNavbar>
        <MsNavbar shadow="md">
          <template #brand><strong>Sombra Média Corporativa (shadow="md")</strong></template>
          <template #actions><MsButton size="xs" variant="solid" tone="primary">Ação</MsButton></template>
        </MsNavbar>
        <MsNavbar shadow="lg">
          <template #brand><strong>Sombra Pronunciada (shadow="lg")</strong></template>
          <template #actions><MsButton size="xs" variant="solid" tone="accent">Ação</MsButton></template>
        </MsNavbar>
        <MsNavbar shadow="xl">
          <template #brand><strong>Sombra Intensa de Portal (shadow="xl")</strong></template>
          <template #actions><MsButton size="xs" variant="solid" tone="success">Ação</MsButton></template>
        </MsNavbar>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNavbar shadow="sm">...</MsNavbar>
<MsNavbar shadow="md">...</MsNavbar>
<MsNavbar shadow="lg">...</MsNavbar>
<MsNavbar shadow="xl">...</MsNavbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Contêiner Centralizado Responsivo (container="md", "xl", "fluid")</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Responsive Containers</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <MsNavbar container="md" tone="neutral">
          <template #brand><span>Container MD (768px máx)</span></template>
          <div>Navegação centralizada</div>
          <template #actions><MsButton size="xs">Entrar</MsButton></template>
        </MsNavbar>
        <MsNavbar container="xl" tone="primary">
          <template #brand><span>Container XL (1280px padrão)</span></template>
          <div>Navegação corporativa</div>
          <template #actions><MsButton size="xs" variant="soft" tone="neutral">Entrar</MsButton></template>
        </MsNavbar>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsNavbar container="xl" tone="primary">...</MsNavbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>

  <div v-if="activeTab === 'sidebar'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Galeria de Cores e Superfícies (Default, Neutral, Primary, Accent)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Tones & Surfaces</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <div style="height: 320px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
          <MsSidebar tone="default" position="relative" width="normal">
            <template #header><div style="font-weight: 700;">Superfície Padrão</div></template>
            <div style="padding: 12px; font-size: 13px;">Painel lateral com cor de superfície clara.</div>
            <template #footer><span style="font-size: 11px; opacity: 0.7;">MagicStyle 1.2</span></template>
          </MsSidebar>
        </div>
        <div style="height: 320px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
          <MsSidebar tone="neutral" position="relative" width="normal">
            <template #header><div style="font-weight: 700; color: #fff;">Dark Ink (#222f3e)</div></template>
            <div style="padding: 12px; font-size: 13px; color: rgba(255,255,255,0.85);">Painel com contraste escuro corporativo.</div>
            <template #footer><span style="font-size: 11px; opacity: 0.7; color: #fff;">Versão 1.2</span></template>
          </MsSidebar>
        </div>
        <div style="height: 320px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
          <MsSidebar tone="primary" position="relative" width="normal">
            <template #header><div style="font-weight: 700; color: #fff;">Primary (#2e86de)</div></template>
            <div style="padding: 12px; font-size: 13px; color: rgba(255,255,255,0.9);">Painel corporativo em tom azul vibrante.</div>
            <template #footer><span style="font-size: 11px; opacity: 0.7; color: #fff;">Versão 1.2</span></template>
          </MsSidebar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSidebar tone="neutral" position="relative">
  <template #header><strong>Dashboard</strong></template>
  <div>Menu Content</div>
  <template #footer>Versão 1.2</template>
</MsSidebar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Larguras: Compact (68px), Normal (260px) e Wide (320px)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Width Scales</span>
      </div>
      <div class="variation-preview-box" style="display: flex; gap: 16px; overflow-x: auto; padding: 12px;">
        <div style="height: 260px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
          <MsSidebar width="compact" position="relative">
            <template #header><div style="font-weight: 700; font-size: 12px;">68px</div></template>
            <div style="text-align: center; padding: 8px;">🔘</div>
          </MsSidebar>
        </div>
        <div style="height: 260px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
          <MsSidebar width="normal" position="relative">
            <template #header><div style="font-weight: 700;">Normal (260px)</div></template>
            <div style="padding: 12px; font-size: 13px;">Largura padrão corporativa balanceada.</div>
          </MsSidebar>
        </div>
        <div style="height: 260px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
          <MsSidebar width="wide" position="relative">
            <template #header><div style="font-weight: 700;">Wide (320px)</div></template>
            <div style="padding: 12px; font-size: 13px;">Largura expandida para navegações densas.</div>
          </MsSidebar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSidebar width="compact">...</MsSidebar>
<MsSidebar width="normal">...</MsSidebar>
<MsSidebar width="wide">...</MsSidebar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Mini Rail Colapsado Interativo com Alternância Dinâmica</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Collapsible Rail</span>
      </div>
      <div class="variation-preview-box" style="height: 320px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; overflow: hidden;">
        <MsSidebar :collapsed="sidebarProps.collapsed" show-toggle position="relative" @update:collapsed="sidebarProps.collapsed = $event">
          <template #header>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 18px;">⚡</span>
              <span v-if="!sidebarProps.collapsed" style="font-weight: 700;">Magic Suite</span>
            </div>
          </template>
          <div style="padding: 12px;">
            <div v-if="!sidebarProps.collapsed" style="font-size: 13px; color: var(--ms-color-text-secondary);">
              Clique no botão de topo para alternar entre painel completo e mini rail de 68px.
            </div>
            <div v-else style="text-align: center; font-size: 18px; display: flex; flex-direction: column; gap: 12px;">
              <span>📊</span>
              <span>📁</span>
              <span>⚙️</span>
            </div>
          </div>
          <template #footer>
            <span v-if="!sidebarProps.collapsed" style="font-size: 12px;">v1.2.0</span>
            <span v-else>•</span>
          </template>
        </MsSidebar>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsSidebar v-model:collapsed="isCollapsed" show-toggle>
  <template #header>Magic Suite</template>
  <div>Conteúdo</div>
</MsSidebar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>

  <div v-if="activeTab === 'footer'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Galeria de Tons Semânticos e Superfícies (Default, Neutral, Primary, Accent)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Tones & Surfaces</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <MsFooter tone="default" layout="simple" copyright="© 2026 MagicStyle Inc. Superfície Default.">
          <div style="display: flex; gap: 12px; font-size: 13px;">
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Termos</a>
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Privacidade</a>
          </div>
        </MsFooter>
        <MsFooter tone="neutral" layout="simple" copyright="© 2026 MagicStyle Inc. Fundo Neutral Dark (#222f3e).">
          <div style="display: flex; gap: 12px; font-size: 13px;">
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Compliance</a>
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Segurança</a>
          </div>
        </MsFooter>
        <MsFooter tone="primary" layout="simple" copyright="© 2026 MagicStyle Inc. Fundo Primary Corporate (#2e86de).">
          <div style="display: flex; gap: 12px; font-size: 13px;">
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Suporte</a>
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Status</a>
          </div>
        </MsFooter>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsFooter tone="neutral" layout="simple" copyright="© 2026 MagicStyle Inc.">
  <a href="#">Termos</a>
</MsFooter>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Layout Multi-Coluna Enterprise com Grid Responsivo</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Multi-Column Layout</span>
      </div>
      <div class="variation-preview-box">
        <MsFooter
          layout="multi-column"
          variant="bordered"
          :columns="[
            { title: 'Produto', links: [{ label: 'Design Tokens', href: '#' }, { label: 'Componentes Vue', href: '#' }, { label: 'CSS Architecture', href: '#' }] },
            { title: 'Soluções', links: [{ label: 'Design Systems', href: '#' }, { label: 'Acessibilidade WCAG', href: '#' }, { label: 'Enterprise Security', href: '#' }] },
            { title: 'Desenvolvedores', links: [{ label: 'Documentação 1.2', href: '#' }, { label: 'GitHub Monorepo', href: '#' }, { label: 'Changesets', href: '#' }] },
            { title: 'Institucional', links: [{ label: 'Sobre Nós', href: '#' }, { label: 'Carreiras', href: '#' }, { label: 'Contato', href: '#' }] }
          ]"
          copyright="© 2026 MagicStyle Design System. Todos os direitos reservados."
        >
          <template #brand>
            <div style="margin-bottom: 16px;">
              <strong style="font-size: 16px;">⚡ MagicStyle Enterprise</strong>
              <p style="font-size: 13px; color: #64748b; margin: 4px 0 0 0;">Infraestrutura de UI de alto desempenho baseada em Design Tokens e Vue 3.</p>
            </div>
          </template>
        </MsFooter>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsFooter layout="multi-column" :columns="columns" copyright="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Variantes Sunken (Rebaixada) e Inverse (Modo Escuro)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sunken & Inverse</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <MsFooter variant="sunken" layout="simple" copyright="Superfície Rebaixada (Sunken #f1f5f9) para contraste suave com o conteúdo.">
          <span style="font-size: 12px; color: #64748b;">Status do Sistema: Operacional</span>
        </MsFooter>
        <MsFooter variant="inverse" layout="simple" copyright="Modo Escuro Invertido (Inverse) para finalizações com alto impacto visual.">
          <span style="font-size: 12px; color: #94a3b8;">Segurança Verificada SSL</span>
        </MsFooter>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsFooter variant="sunken" layout="simple" copyright="..." />
<MsFooter variant="inverse" layout="simple" copyright="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Níveis de Sombra Superior (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Top Shadows</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 20px; padding: 24px;">
        <MsFooter shadow="sm" layout="simple" copyright="© 2026 Rodapé com Sombra Suave (shadow='sm')">
          <a href="javascript:void(0)" style="color: inherit; text-decoration: none; font-size: 13px;">Termos de Serviço</a>
        </MsFooter>
        <MsFooter shadow="md" layout="simple" copyright="© 2026 Rodapé com Sombra Média (shadow='md')">
          <a href="javascript:void(0)" style="color: inherit; text-decoration: none; font-size: 13px;">Termos de Serviço</a>
        </MsFooter>
        <MsFooter shadow="lg" layout="simple" copyright="© 2026 Rodapé com Sombra Pronunciada (shadow='lg')">
          <a href="javascript:void(0)" style="color: inherit; text-decoration: none; font-size: 13px;">Termos de Serviço</a>
        </MsFooter>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsFooter shadow="md" layout="simple" copyright="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Rodapé com Contêiner Centralizado Responsivo (container="xl", "fluid")</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Responsive Containers</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <MsFooter container="xl" layout="simple" copyright="© 2026 Contêiner Responsivo XL (1280px máx) centralizado">
          <div style="display: flex; gap: 16px; font-size: 13px;">
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Privacidade</a>
            <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Segurança</a>
          </div>
        </MsFooter>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsFooter container="xl" layout="simple" copyright="..." />'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>

  <div v-if="activeTab === 'scrollbar'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Galeria dos 8 Tons Semânticos Oficiais para o Cursor (Thumb)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div v-for="t in allTones" :key="'sb-tone-' + t" style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 10px; background: var(--ms-color-surface-raised);">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px; display: flex; justify-content: space-between;">
            <span>{{ t.toUpperCase() }}</span>
            <span style="font-family: monospace; font-size: 11px; color: #64748b;">{{ toneHexMap[t] }}</span>
          </div>
          <MsScrollbar :tone="t" max-height="120px" size="normal" visibility="always">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.6;">
              <p style="margin: 0 0 6px 0;">Role para visualizar o cursor temático customizado do Magic-Style.</p>
              <p style="margin: 0 0 6px 0;">Linha de dados 1: Configuração aprovada.</p>
              <p style="margin: 0 0 6px 0;">Linha de dados 2: Métricas coletadas com sucesso.</p>
              <p style="margin: 0 0 6px 0;">Linha de dados 3: Padrão arquitetural 1.2.</p>
              <p style="margin: 0;">Fim da lista rolável.</p>
            </div>
          </MsScrollbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollbar tone="accent" max-height="140px" visibility="always">
  <div>Conteúdo rolável...</div>
</MsScrollbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Espessuras do Cursor: Thin (4px), Normal (8px) e Thick (12px)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Thickness Scales</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 12px;">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">Thin (4px - Minimalista):</div>
          <MsScrollbar size="thin" tone="primary" max-height="130px">
            <div style="padding: 8px; font-size: 12px;">
              <div v-for="i in 6" :key="'thin-' + i" style="padding: 4px 0; border-bottom: 1px solid #f1f5f9;">
                Item de lista fina #{{ i }}
              </div>
            </div>
          </MsScrollbar>
        </div>
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 12px;">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">Normal (8px - Padrão):</div>
          <MsScrollbar size="normal" tone="primary" max-height="130px">
            <div style="padding: 8px; font-size: 12px;">
              <div v-for="i in 6" :key="'norm-' + i" style="padding: 4px 0; border-bottom: 1px solid #f1f5f9;">
                Item de lista padrão #{{ i }}
              </div>
            </div>
          </MsScrollbar>
        </div>
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 12px;">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">Thick (12px - Alta Densidade):</div>
          <MsScrollbar size="thick" tone="primary" max-height="130px">
            <div style="padding: 8px; font-size: 12px;">
              <div v-for="i in 6" :key="'thick-' + i" style="padding: 4px 0; border-bottom: 1px solid #f1f5f9;">
                Item de lista encorpada #{{ i }}
              </div>
            </div>
          </MsScrollbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollbar size="thin">...</MsScrollbar>
<MsScrollbar size="normal">...</MsScrollbar>
<MsScrollbar size="thick">...</MsScrollbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Rolagem Horizontal e Bidirecional</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Horizontal & Both</span>
      </div>
      <div class="variation-preview-box">
        <div style="margin-bottom: 8px; font-size: 12px; font-weight: 600; color: #64748b;">Carrossel / Linha Horizontal:</div>
        <MsScrollbar orientation="horizontal" tone="accent" style="padding-bottom: 8px;">
          <div style="display: flex; gap: 16px; width: max-content; padding: 4px;">
            <div v-for="card in 8" :key="'hcard-' + card" style="width: 180px; padding: 16px; border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; background: var(--ms-color-surface-raised);">
              <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">Cartão #{{ card }}</div>
              <div style="font-size: 12px; color: #64748b;">Conteúdo com scroll lateral suave.</div>
            </div>
          </div>
        </MsScrollbar>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollbar orientation="horizontal" tone="accent">
  <div style="display: flex; width: max-content;">...</div>
</MsScrollbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Modo Inteligente (Auto-Hide, Always e Sem Overflow)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Visibility Controls</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: var(--ms-color-surface-raised);">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px; color: var(--ms-color-primary);">Auto (Oculto em repouso / Visível no hover & scroll):</div>
          <MsScrollbar visibility="auto" tone="primary" max-height="130px">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7;">
              <p style="margin: 0 0 6px 0; color: #64748b;">Passe o mouse ou role para ver o cursor surgir suavemente.</p>
              <p v-for="i in 8" :key="'auto-item-' + i" style="margin: 0 0 4px 0; padding: 4px 8px; background: var(--ms-color-surface-subtle); border-radius: 4px;">
                Registro dinâmico #{{ i }}
              </p>
            </div>
          </MsScrollbar>
        </div>
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: var(--ms-color-surface-raised);">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px; color: #64748b;">Always (Cursor permanentemente visível):</div>
          <MsScrollbar visibility="always" tone="neutral" max-height="130px">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7;">
              <p style="margin: 0 0 6px 0; color: #64748b;">O cursor permanece visível mesmo em repouso.</p>
              <p v-for="i in 8" :key="'always-item-' + i" style="margin: 0 0 4px 0; padding: 4px 8px; background: var(--ms-color-surface-subtle); border-radius: 4px;">
                Registro fixo #{{ i }}
              </p>
            </div>
          </MsScrollbar>
        </div>
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: var(--ms-color-surface-raised);">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px; color: var(--ms-color-success, #10ac84);">Sem Overflow (Barra não é necessária):</div>
          <MsScrollbar visibility="auto" tone="success" max-height="130px">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7;">
              <p style="margin: 0 0 6px 0; color: #64748b;">Conteúdo curto que cabe no container.</p>
              <p style="margin: 0; padding: 4px 8px; background: var(--ms-color-surface-subtle); border-radius: 4px;">
                Sem transbordo: nenhuma barra é renderizada.
              </p>
            </div>
          </MsScrollbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollbar visibility="auto" tone="primary" max-height="130px">
  <div>Conteúdo rolável...</div>
</MsScrollbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Cores Customizadas de Fundo e Cursor (trackColor & thumbColor)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Custom Colors</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: #0f172a; color: #f8fafc;">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px; color: #38bdf8;">Dark Neon (Trilho Escuro + Thumb Ciano):</div>
          <MsScrollbar track-color="#1e293b" thumb-color="#38bdf8" max-height="130px" size="normal">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7; color: #cbd5e1;">
              <p v-for="i in 8" :key="'neon-item-' + i" style="margin: 0 0 4px 0; padding: 4px 8px; background: #1e293b; border-radius: 4px;">
                Terminal audit log #{{ i }} &bull; OK
              </p>
            </div>
          </MsScrollbar>
        </div>
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: #fff5f5;">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px; color: #e15f41;">Warm Sunset (Trilho Pêssego + Thumb Coral):</div>
          <MsScrollbar track-color="#fed7aa" thumb-color="#e15f41" max-height="130px" size="normal">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7; color: #7c2d12;">
              <p v-for="i in 8" :key="'warm-item-' + i" style="margin: 0 0 4px 0; padding: 4px 8px; background: #ffedd5; border-radius: 4px;">
                Evento de auditoria #{{ i }} &bull; Sucesso
              </p>
            </div>
          </MsScrollbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollbar track-color="#1e293b" thumb-color="#38bdf8">...</MsScrollbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Raio de Borda (Radius) e Setas Opcionais (Arrows)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Radius & Arrows</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: var(--ms-color-surface-raised);">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">Cursor Reto Geométrico (radius="0px"):</div>
          <MsScrollbar radius="0px" size="thick" tone="accent" max-height="130px">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7;">
              <p v-for="i in 8" :key="'sharp-item-' + i" style="margin: 0 0 4px 0; padding: 4px 8px; background: var(--ms-color-surface-subtle); border-radius: 2px;">
                Registro sharp #{{ i }}
              </p>
            </div>
          </MsScrollbar>
        </div>
        <div style="border: 1px solid var(--ms-color-border-subtle); border-radius: 8px; padding: 14px; background: var(--ms-color-surface-raised);">
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">Setas de Rolagem Ativadas (arrows=true):</div>
          <MsScrollbar arrows size="thick" tone="primary" max-height="130px">
            <div style="padding: 6px 10px; font-size: 12px; line-height: 1.7;">
              <p v-for="i in 8" :key="'arrow-item-' + i" style="margin: 0 0 4px 0; padding: 4px 8px; background: var(--ms-color-surface-subtle); border-radius: 4px;">
                Linha com setas #{{ i }}
              </p>
            </div>
          </MsScrollbar>
        </div>
      </div>
            <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsScrollbar radius="0px" size="thick">...</MsScrollbar>
<MsScrollbar arrows size="thick">...</MsScrollbar>'
          language="html"
          :show-line-numbers="false"
          :copyable="true"
        />
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- TAB: KBD (TECLAS / ATALHOS) -->
  <!-- ========================================== -->
  <div v-if="activeTab === 'kbd'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Escala de Tamanhos (Sizing Scale)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-primary">xs, sm, md, lg</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 12px; color: var(--ms-color-text-secondary);">xs (18px):</span>
          <MsKbd size="xs">⌘</MsKbd>
          <MsKbd size="xs">K</MsKbd>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 12px; color: var(--ms-color-text-secondary);">sm (22px - Padrão):</span>
          <MsKbd size="sm">⌘</MsKbd>
          <MsKbd size="sm">K</MsKbd>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 12px; color: var(--ms-color-text-secondary);">md (26px):</span>
          <MsKbd size="md">Ctrl</MsKbd>
          <MsKbd size="md">Shift</MsKbd>
          <MsKbd size="md">P</MsKbd>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 12px; color: var(--ms-color-text-secondary);">lg (32px):</span>
          <MsKbd size="lg">Space</MsKbd>
          <MsKbd size="lg">Enter ↵</MsKbd>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsKbd size="xs">⌘</MsKbd>
<MsKbd size="sm">⌘</MsKbd>
<MsKbd size="md">Ctrl</MsKbd>
<MsKbd size="lg">Space</MsKbd>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes Visuais (Variants)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-accent">raised, outline, flat</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <span style="font-size: 12px; font-weight: 600;">Raised (Efeito 3D Bisel):</span>
          <div style="display: flex; gap: 4px;">
            <MsKbd variant="raised">⌘</MsKbd>
            <MsKbd variant="raised">Option</MsKbd>
            <MsKbd variant="raised">I</MsKbd>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <span style="font-size: 12px; font-weight: 600;">Outline (Contorno Suave):</span>
          <div style="display: flex; gap: 4px;">
            <MsKbd variant="outline">⌘</MsKbd>
            <MsKbd variant="outline">Option</MsKbd>
            <MsKbd variant="outline">I</MsKbd>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <span style="font-size: 12px; font-weight: 600;">Flat (Preenchimento Plano):</span>
          <div style="display: flex; gap: 4px;">
            <MsKbd variant="flat">⌘</MsKbd>
            <MsKbd variant="flat">Option</MsKbd>
            <MsKbd variant="flat">I</MsKbd>
          </div>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Efeito físico biselado 3D (padrão) -->
<MsKbd variant="raised">⌘</MsKbd>

<!-- Estilo contornado moderno estilo Shadcn -->
<MsKbd variant="outline">⌘</MsKbd>

<!-- Estilo plano com fundo sólido discreto -->
<MsKbd variant="flat">⌘</MsKbd>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. 8 Tons Semânticos de Marca (Brand Tones)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-success">8 Tons</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <MsKbd tone="primary">Primary</MsKbd>
        <MsKbd tone="secondary">Secondary</MsKbd>
        <MsKbd tone="accent">Accent</MsKbd>
        <MsKbd tone="neutral">Neutral</MsKbd>
        <MsKbd tone="success">Success</MsKbd>
        <MsKbd tone="info">Info</MsKbd>
        <MsKbd tone="warning">Warning</MsKbd>
        <MsKbd tone="danger">Danger</MsKbd>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsKbd tone="primary">Primary</MsKbd>
<MsKbd tone="success">Success</MsKbd>
<MsKbd tone="danger">Danger</MsKbd>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Atalhos no Contexto de Controles (Inputs & Buttons)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-info">Prática Real</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        <div style="position: relative; display: inline-flex; align-items: center; width: 100%; max-width: 320px;">
          <input
            type="text"
            class="ms-input ms-input--md"
            placeholder="Pesquisar documentação..."
            style="width: 100%; padding-right: 56px;"
          />
          <div style="position: absolute; right: 8px; display: flex; gap: 2px;">
            <MsKbd size="xs">⌘</MsKbd>
            <MsKbd size="xs">K</MsKbd>
          </div>
        </div>

        <button class="ms-button ms-button--md ms-button--outline" style="display: inline-flex; align-items: center; gap: 8px;">
          <span>Salvar Alterações</span>
          <MsKbd size="xs">Ctrl</MsKbd>
          <MsKbd size="xs">S</MsKbd>
        </button>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<div style="position: relative; display: inline-flex; align-items: center;">
  <MsInput placeholder="Pesquisar documentação..." style="padding-right: 60px;" />
  <div style="position: absolute; right: 8px; display: flex; gap: 2px;">
    <MsKbd size="xs">⌘</MsKbd>
    <MsKbd size="xs">K</MsKbd>
  </div>
</div>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- TAB: ASPECT RATIO (PROPORÇÕES DE MÍDIA) -->
  <!-- ========================================== -->
  <div v-if="activeTab === 'aspect-ratio'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Proporções Canônicas de Vídeo & Imagem</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-primary">16:9, 4:3, 1:1, 21:9</span>
      </div>
      <div class="variation-preview-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <div>
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">16:9 (Vídeo HD Padrão):</div>
          <MsAspectRatio ratio="16:9" style="background: var(--ms-color-surface-sunken); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center; color: var(--ms-color-text-secondary); font-size: 13px;">
              <span style="font-size: 24px; display: block; margin-bottom: 4px;">🎬</span>
              16:9 Widescreen (1.777)
            </div>
          </MsAspectRatio>
        </div>

        <div>
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">4:3 (Fotografia / Retrô):</div>
          <MsAspectRatio ratio="4:3" style="background: var(--ms-color-surface-sunken); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center; color: var(--ms-color-text-secondary); font-size: 13px;">
              <span style="font-size: 24px; display: block; margin-bottom: 4px;">📷</span>
              4:3 Standard (1.333)
            </div>
          </MsAspectRatio>
        </div>

        <div>
          <div style="font-size: 12px; font-weight: 700; margin-bottom: 6px;">1:1 (Quadrado / Avatar):</div>
          <MsAspectRatio ratio="1:1" style="background: var(--ms-color-surface-sunken); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center; color: var(--ms-color-text-secondary); font-size: 13px;">
              <span style="font-size: 24px; display: block; margin-bottom: 4px;">⏹️</span>
              1:1 Square (1.000)
            </div>
          </MsAspectRatio>
        </div>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<!-- Proporção 16:9 para vídeos e banners -->
<MsAspectRatio ratio="16:9">
  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>
</MsAspectRatio>

<!-- Proporção 1:1 para cartões quadrados e avatares -->
<MsAspectRatio ratio="1:1">
  <img src="/avatar.jpg" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover;" />
</MsAspectRatio>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Imagem com Object-Fit Cover</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-accent">Hero Card</span>
      </div>
      <div class="variation-preview-box" style="max-width: 480px;">
        <MsAspectRatio ratio="16:9" style="border-radius: var(--ms-radius-lg); overflow: hidden; border: 1px solid var(--ms-color-border-subtle); position: relative;">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #2e86de 0%, #341f97 100%); display: flex; align-items: flex-end; padding: 20px; color: #fff;">
            <div>
              <span class="ms-badge ms-badge--sm" data-tone="primary" data-variant="solid">Novo Lançamento</span>
              <h4 style="margin: 8px 0 2px; color: #fff;">Magic-Style Architecture Baseline 1.2</h4>
              <p style="margin: 0; font-size: 12px; opacity: 0.85;">Preservação matemática de proporção sem flicker de renderização.</p>
            </div>
          </div>
        </MsAspectRatio>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsAspectRatio ratio="16:9" style="border-radius: 12px; overflow: hidden;">
  <img src="banner.webp" style="width: 100%; height: 100%; object-fit: cover;" />
</MsAspectRatio>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- TAB: HOVER CARD (OVERLAYS ESTILO SHADCN) -->
  <!-- ========================================== -->
  <div v-if="activeTab === 'hover-card'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Perfil de Usuário & Card de Autor (User Profile)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-primary">Shadcn DNA</span>
      </div>
      <div class="variation-preview-box" style="display: flex; gap: 24px; align-items: center; padding: 32px 16px;">
        <MsHoverCard placement="bottom" :open-delay="150" :close-delay="250">
          <template #trigger>
            <a href="javascript:void(0)" class="ms-link ms-link--tone-primary" style="font-weight: 600; text-decoration: underline; text-underline-offset: 3px;">
              @magicstyle
            </a>
          </template>
          <div style="display: flex; gap: 14px; align-items: flex-start; max-width: 320px;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #2e86de, #341f97); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">
              MS
            </div>
            <div>
              <div style="font-weight: 700; font-size: 14px; color: var(--ms-color-text-primary);">Magic-Style UI</div>
              <div style="font-size: 12px; color: var(--ms-color-text-secondary); margin-bottom: 6px;">@magicstyle • Sistema Enterprise</div>
              <p style="font-size: 12px; color: var(--ms-color-text-primary); margin: 0 0 10px; line-height: 1.4;">
                Design system governado pela Architecture Baseline 1.2 com contratos estritos de tokens e acessibilidade AAA.
              </p>
              <div style="display: flex; gap: 12px; font-size: 11px; color: var(--ms-color-text-muted);">
                <span><strong>2.4k</strong> Seguidores</span>
                <span><strong>100%</strong> Conforme</span>
              </div>
            </div>
          </div>
        </MsHoverCard>

        <span style="font-size: 13px; color: var(--ms-color-text-secondary);">
          Passe o mouse sobre o link <strong style="color: var(--ms-color-primary);">@magicstyle</strong> para visualizar o cartão flutuante.
        </span>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsHoverCard placement="bottom" :open-delay="150" :close-delay="250">
  <template #trigger>
    <a href="#" class="ms-link">@magicstyle</a>
  </template>
  
  <div style="display: flex; gap: 12px;">
    <MsAvatar name="Magic-Style" />
    <div>
      <h4>Magic-Style UI</h4>
      <p>Design system corporativo moderno.</p>
    </div>
  </div>
</MsHoverCard>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Posicionamento nos 4 Eixos (Placement)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-accent">top, bottom, left, right</span>
      </div>
      <div class="variation-preview-box" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; padding: 24px 16px;">
        <MsHoverCard placement="top">
          <template #trigger>
            <button class="ms-button ms-button--sm ms-button--outline">Hover: Top</button>
          </template>
          <div style="padding: 4px; font-size: 12px;">Cartão posicionado no topo</div>
        </MsHoverCard>

        <MsHoverCard placement="bottom">
          <template #trigger>
            <button class="ms-button ms-button--sm ms-button--outline">Hover: Bottom</button>
          </template>
          <div style="padding: 4px; font-size: 12px;">Cartão posicionado na base</div>
        </MsHoverCard>

        <MsHoverCard placement="left">
          <template #trigger>
            <button class="ms-button ms-button--sm ms-button--outline">Hover: Left</button>
          </template>
          <div style="padding: 4px; font-size: 12px;">Cartão posicionado à esquerda</div>
        </MsHoverCard>

        <MsHoverCard placement="right">
          <template #trigger>
            <button class="ms-button ms-button--sm ms-button--outline">Hover: Right</button>
          </template>
          <div style="padding: 4px; font-size: 12px;">Cartão posicionado à direita</div>
        </MsHoverCard>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsHoverCard placement="top">
  <template #trigger><button class="ms-button">Topo</button></template>
  <div>Conteúdo flutuante acima</div>
</MsHoverCard>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>
  </div>

  <!-- ========================================== -->
  <!-- TAB: GRID (12-COL VARIATIONS) -->
  <!-- ========================================== -->
  <div v-if="activeTab === 'grid'">
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Spans Básicos de 12 Colunas (MsRow & MsCol)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-primary">12 Colunas</span>
      </div>
      <div class="variation-preview-box">
        <MsRow gutter="sm" style="margin-bottom: 8px;">
          <MsCol :span="12">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-primary) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-primary); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="12" (100% da largura)
            </div>
          </MsCol>
        </MsRow>
        <MsRow gutter="sm" style="margin-bottom: 8px;">
          <MsCol :span="6">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-accent) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-accent); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="6" (50%)
            </div>
          </MsCol>
          <MsCol :span="6">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-accent) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-accent); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="6" (50%)
            </div>
          </MsCol>
        </MsRow>
        <MsRow gutter="sm">
          <MsCol :span="4">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-success) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-success); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="4" (33.3%)
            </div>
          </MsCol>
          <MsCol :span="4">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-success) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-success); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="4" (33.3%)
            </div>
          </MsCol>
          <MsCol :span="4">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-success) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-success); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="4" (33.3%)
            </div>
          </MsCol>
        </MsRow>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsRow gutter="sm">
  <MsCol :span="6"><div>Coluna A</div></MsCol>
  <MsCol :span="6"><div>Coluna B</div></MsCol>
</MsRow>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Deslocamentos Horizontais (Offsets)</div>
        <span class="ms-badge ms-badge--sm ms-badge--variant-soft ms-badge--tone-accent">offset 1..11</span>
      </div>
      <div class="variation-preview-box">
        <MsRow gutter="sm" style="margin-bottom: 8px;">
          <MsCol :span="8" :offset="2">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-primary) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-primary); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="8" offset="2" (Centralizado)
            </div>
          </MsCol>
        </MsRow>
        <MsRow gutter="sm">
          <MsCol :span="4" :offset="4">
            <div style="padding: 10px; background: color-mix(in oklch, var(--ms-color-accent) 15%, var(--ms-color-surface-raised)); border: 1px solid var(--ms-color-accent); border-radius: 4px; text-align: center; font-size: 12px; font-weight: 600;">
              span="4" offset="4"
            </div>
          </MsCol>
        </MsRow>
      </div>
      <div style="margin-top: 12px;">
        <MsCodeBlock
          code='<MsRow gutter="md">
  <MsCol :span="8" :offset="2">
    <div>Conteúdo centralizado ocupando 8 colunas com recuo de 2 colunas à esquerda</div>
  </MsCol>
</MsRow>'
          language="html"
          :show-line-numbers="false"
        />
      </div>
    </div>
  </div>

`;
