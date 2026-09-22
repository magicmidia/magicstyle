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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsDropdownButton tone="primary" variant="solid" label="PRIMARY" :items="menuItems" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsDropdownButton variant="outline" tone="neutral" label="Menu" :items="menuItems" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsDropdownButton size="sm" label="Pequeno" :items="items" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsIconButton tone="primary" variant="solid" aria-label="Raio"&gt;⚡&lt;/MsIconButton&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsIconButton shape="circle" aria-label="Favorito"&gt;⭐&lt;/MsIconButton&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsIconButton variant="ghost" aria-label="Pasta"&gt;📁&lt;/MsIconButton&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsIconButton size="xs" aria-label="Mini"&gt;●&lt;/MsIconButton&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsIconButton active aria-label="Sino"&gt;🔔&lt;/MsIconButton&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSegmentedControl tone="primary" :options="options" v-model="selected" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSegmentedControl size="sm" :options="options" v-model="selected" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSegmentedControl shape="pill" full-width :options="options" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSidebarMenu tone="primary" :items="menuItems" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSidebarMenu density="compact" shape="pill" :items="items" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBreadcrumbs separator-type="chevron" :items="items" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBreadcrumbs separator="/" :items="items" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBreadcrumbs size="sm" :items="items" /&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'tabs'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Variantes Visuais (Line, Enclosed, Soft, Pill)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Visual Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%;">
        <div>
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">VARIANTE LINE (UNDERLINE)</div>
          <MsTabs variant="line" model-value="t1">
            <MsTabList aria-label="Line Tabs">
              <MsTab value="t1">Visão Geral</MsTab>
              <MsTab value="t2">Analytics</MsTab>
              <MsTab value="t3">Configurações</MsTab>
            </MsTabList>
          </MsTabs>
        </div>
        <div>
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">VARIANTE ENCLOSED (CAIXA / ABAS)</div>
          <MsTabs variant="enclosed" model-value="t1">
            <MsTabList aria-label="Enclosed Tabs">
              <MsTab value="t1">Visão Geral</MsTab>
              <MsTab value="t2">Analytics</MsTab>
              <MsTab value="t3">Configurações</MsTab>
            </MsTabList>
          </MsTabs>
        </div>
        <div>
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">VARIANTE SOFT (FUNDO SUAVE)</div>
          <MsTabs variant="soft" model-value="t2">
            <MsTabList aria-label="Soft Tabs">
              <MsTab value="t1">Geral</MsTab>
              <MsTab value="t2">Segurança</MsTab>
              <MsTab value="t3">Permissões</MsTab>
            </MsTabList>
          </MsTabs>
        </div>
        <div>
          <div style="font-weight: bold; margin-bottom: 8px; font-size: 12px;">VARIANTE PILL (PÍLULA / CHIP)</div>
          <MsTabs variant="pill" model-value="t3">
            <MsTabList aria-label="Pill Tabs">
              <MsTab value="t1">Todos (128)</MsTab>
              <MsTab value="t2">Ativos (94)</MsTab>
              <MsTab value="t3">Pendentes (34)</MsTab>
            </MsTabList>
          </MsTabs>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTabs variant="line" v-model="tab"&gt;
  &lt;MsTabList&gt;
    &lt;MsTab value="t1"&gt;Tab 1&lt;/MsTab&gt;
  &lt;/MsTabList&gt;
&lt;/MsTabs&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Escala de Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <MsTabs size="sm" variant="enclosed" model-value="a">
          <MsTabList><MsTab value="a">SM Tab 1</MsTab><MsTab value="b">SM Tab 2</MsTab></MsTabList>
        </MsTabs>
        <MsTabs size="md" variant="enclosed" model-value="a">
          <MsTabList><MsTab value="a">MD Tab 1</MsTab><MsTab value="b">MD Tab 2</MsTab></MsTabList>
        </MsTabs>
        <MsTabs size="lg" variant="enclosed" model-value="a">
          <MsTabList><MsTab value="a">LG Tab 1</MsTab><MsTab value="b">LG Tab 2</MsTab></MsTabList>
        </MsTabs>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTabs size="sm" variant="enclosed"&gt;
  ...
&lt;/MsTabs&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'inputs'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsInput nos 8 Tons Semânticos da Marca (Bordas & Focus Ring)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t">
          <label style="display: block; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase; color: var(--ms-color-text-secondary);">
            {{ t }} ({{ toneHexMap[t] }})
          </label>
          <MsInput :tone="t" :model-value="'Tom: ' + t" size="md"></MsInput>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsInput tone="primary" placeholder="Primary Input" /&gt;
&lt;MsInput tone="accent" placeholder="Accent Input" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes de Estilo (Outline, Filled, Flushed)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Visual Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 440px;">
        <div>
          <label style="font-size: 12px; font-weight: bold;">Outline (Borda Completa - Padrão):</label>
          <MsInput variant="outline" tone="primary" placeholder="Outline variant..."></MsInput>
        </div>
        <div>
          <label style="font-size: 12px; font-weight: bold;">Filled (Fundo Preenchido Sutil):</label>
          <MsInput variant="filled" tone="primary" placeholder="Filled variant..."></MsInput>
        </div>
        <div>
          <label style="font-size: 12px; font-weight: bold;">Flushed (Apenas Linha Inferior):</label>
          <MsInput variant="flushed" tone="primary" placeholder="Flushed underline variant..."></MsInput>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsInput variant="outline" /&gt;
&lt;MsInput variant="filled" /&gt;
&lt;MsInput variant="flushed" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala Completa de Tamanhos (xs a lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 440px;">
        <MsInput size="xs" tone="primary" placeholder="XS (28px - Extra Compacto)"></MsInput>
        <MsInput size="sm" tone="primary" placeholder="SM (32px - Compacto)"></MsInput>
        <MsInput size="md" tone="primary" placeholder="MD (40px - Padrão)"></MsInput>
        <MsInput size="lg" tone="primary" placeholder="LG (48px - Amplo)"></MsInput>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsInput size="xs" placeholder="XS 28px" /&gt;
&lt;MsInput size="md" placeholder="MD 40px" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Formato Pílula vs Rounded & Tipos de Entrada</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes & Types</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 440px;">
        <MsInput pill tone="primary" placeholder="Input no Formato Pílula (pill)"></MsInput>
        <MsInput password-toggle type="password" model-value="MagicStyle2026!" tone="primary"></MsInput>
        <MsInput clearable model-value="Texto com botão de limpar" tone="primary"></MsInput>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsInput pill placeholder="Pill" /&gt;
&lt;MsInput password-toggle type="password" /&gt;
&lt;MsInput clearable /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Com Slots de Ícones Prefix e Suffix</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Slots & Icons</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 440px;">
        <MsInput tone="primary" placeholder="user@company.com">
          <template #prefix>✉️</template>
        </MsInput>
        <MsInput tone="success" placeholder="Cupom de desconto">
          <template #prefix>🏷️</template>
          <template #suffix><span style="color: var(--ms-color-success); font-weight: bold;">APLICAR</span></template>
        </MsInput>
        <MsInput tone="accent" placeholder="Pesquisar registros...">
          <template #prefix>🔍</template>
          <template #suffix><kbd style="background: var(--ms-color-surface-subtle); padding: 2px 6px; border-radius: 4px; font-size: 10px;">⌘K</kbd></template>
        </MsInput>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsInput placeholder="Email"&gt;
  &lt;template #prefix&gt;✉️&lt;/template&gt;
&lt;/MsInput&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Matriz de Estados (Normal, Processando, Inválido, Desabilitado, Readonly)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">States Matrix</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; width: 100%;">
        <MsInput tone="primary" model-value="Estado Normal"></MsInput>
        <MsInput tone="primary" processing model-value="Processando verificação..."></MsInput>
        <MsInput tone="danger" invalid model-value="Valor Inválido (Erro)"></MsInput>
        <MsInput tone="neutral" disabled model-value="Desabilitado"></MsInput>
        <MsInput tone="neutral" readonly model-value="Somente Leitura"></MsInput>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsInput processing /&gt;
&lt;MsInput invalid tone="danger" /&gt;
&lt;MsInput disabled /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">7. MsTextarea (Área de Texto com Contador e Redimensionamento)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">MsTextarea</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 500px;">
        <MsTextarea rows="3" placeholder="Digite sua mensagem detalhada aqui..." show-count max-length="150" model-value="Interface enterprise construída com precisão sub-pixel e paleta de marca oficial."></MsTextarea>
        <MsTextarea rows="2" resize="none" tone="accent" placeholder="Textarea sem redimensionamento manual..."></MsTextarea>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTextarea rows="3" show-count :max-length="150" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSearchField variant="outline" shortcut="⌘K" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSearchField size="sm" /&gt;
&lt;MsSearchField loading /&gt;
&lt;MsSearchField clearable /&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'selections'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSwitch nos 8 Tons Oficiais da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; width: 100%;">
        <MsSwitch v-for="t in allTones" :key="t" :tone="t" :model-value="true" :label="t.toUpperCase()"></MsSwitch>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSwitch tone="primary" :model-value="true" label="PRIMARY" /&gt;
&lt;MsSwitch tone="accent" :model-value="true" label="ACCENT" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. MsCheckbox nos 8 Tons Oficiais</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; width: 100%;">
        <MsCheckbox v-for="t in allTones" :key="t" :tone="t" :model-value="true" :label="t.toUpperCase()"></MsCheckbox>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCheckbox tone="primary" :model-value="true" label="PRIMARY" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. MsCheckbox com Estado Indeterminado & Desabilitado</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Checkbox States</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <MsCheckbox tone="primary" indeterminate label="Seleção Parcial (Indeterminate)"></MsCheckbox>
        <MsCheckbox tone="primary" disabled :model-value="true" label="Marcado Desabilitado"></MsCheckbox>
        <MsCheckbox tone="primary" disabled :model-value="false" label="Desmarcado Desabilitado"></MsCheckbox>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCheckbox indeterminate label="Parcial" /&gt;
&lt;MsCheckbox disabled :model-value="true" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Modo Card Selecionável (Checkbox Card & Radio Card)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Selectable Cards</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <MsCheckbox card :model-value="true" tone="primary" label="Plano Enterprise" description="Acesso a 100 assentos, suporte SLA 1h e backups automáticos."></MsCheckbox>
        <MsCheckbox card :model-value="false" tone="accent" label="Plano Starter" description="Ideal para times até 10 pessoas com acesso a todos os componentes."></MsCheckbox>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCheckbox card tone="primary" label="Enterprise" description="..." /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsField label="Nome" required description="..."&gt;
  &lt;MsInput /&gt;
&lt;/MsField&gt;
&lt;MsField label="Email" error="Invalido"&gt;
  &lt;MsInput invalid tone="danger" /&gt;
&lt;/MsField&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsNativeSelect tone="primary" :options="options" v-model="val" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsNativeSelect variant="filled" :options="options" /&gt;
&lt;MsNativeSelect pill :options="options" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsNativeSelect size="sm" :options="options" /&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'select'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsSelect nos 8 Tons Oficiais da Marca (Bordas, Focus Ring & Tags)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t">
          <label style="display: block; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase;">{{ t }} ({{ toneHexMap[t] }})</label>
          <MsSelect :tone="t" :options="selectOptions" model-value="vue" size="md"></MsSelect>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSelect tone="primary" :options="options" v-model="val" /&gt;
&lt;MsSelect tone="accent" :options="options" v-model="val" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes de Contêiner: Outline, Filled e Flushed</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Container Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 460px;">
        <div>
          <label style="font-size: 12px; font-weight: bold;">Outline (Borda Completa - Padrão):</label>
          <MsSelect variant="outline" tone="primary" :options="selectOptions" model-value="vue"></MsSelect>
        </div>
        <div>
          <label style="font-size: 12px; font-weight: bold;">Filled (Fundo Suave Preenchido):</label>
          <MsSelect variant="filled" tone="primary" :options="selectOptions" model-value="tokens"></MsSelect>
        </div>
        <div>
          <label style="font-size: 12px; font-weight: bold;">Flushed (Apenas Linha Inferior):</label>
          <MsSelect variant="flushed" tone="primary" :options="selectOptions" model-value="css"></MsSelect>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSelect variant="outline" :options="options" /&gt;
&lt;MsSelect variant="filled" :options="options" /&gt;
&lt;MsSelect variant="flushed" :options="options" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala Completa de Tamanhos (xs a xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 460px;">
        <MsSelect size="xs" tone="primary" :options="selectOptions" model-value="vue" placeholder="XS (28px)"></MsSelect>
        <MsSelect size="sm" tone="primary" :options="selectOptions" model-value="vue" placeholder="SM (32px)"></MsSelect>
        <MsSelect size="md" tone="primary" :options="selectOptions" model-value="vue" placeholder="MD (40px)"></MsSelect>
        <MsSelect size="lg" tone="primary" :options="selectOptions" model-value="vue" placeholder="LG (48px)"></MsSelect>
        <MsSelect size="xl" tone="primary" :options="selectOptions" model-value="vue" placeholder="XL (56px)"></MsSelect>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSelect size="xs" :options="options" /&gt;
&lt;MsSelect size="md" :options="options" /&gt;
&lt;MsSelect size="xl" :options="options" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Formato Pílula (Pill Shape) & Seleção Múltipla com Tags</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Pill & Multi-Select</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 480px;">
        <div>
          <label style="font-size: 12px; font-weight: bold;">Formato Pílula (Pill):</label>
          <MsSelect pill tone="primary" :options="selectOptions" model-value="vue"></MsSelect>
        </div>
        <div>
          <label style="font-size: 12px; font-weight: bold;">Múltipla Seleção com Tags Coloridas:</label>
          <MsSelect multiple tone="primary" :options="selectOptions" :model-value="['vue', 'tokens']" clearable></MsSelect>
        </div>
        <div>
          <label style="font-size: 12px; font-weight: bold;">Tags no Tom Accent (Roxo):</label>
          <MsSelect multiple tone="accent" :options="selectOptions" :model-value="['tokens', 'css']" clearable></MsSelect>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSelect pill :options="options" /&gt;
&lt;MsSelect multiple tone="primary" :model-value="['vue', 'tokens']" clearable /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">5. Busca Integrada (Searchable) & Opções Agrupadas por Categoria</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Search & Groups</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 480px;">
        <MsSelect searchable clearable tone="primary" :options="selectOptions" model-value="vue" placeholder="Digite para filtrar opções..."></MsSelect>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSelect searchable clearable :options="groupedOptions" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">6. Matriz de Estados (Carregando/Loading, Inválido/Error, Desabilitado)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">States Matrix</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <div>
          <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block;">CARREGAMENTO ASSÍNCRONO</label>
          <MsSelect loading tone="primary" :options="selectOptions" placeholder="Carregando opções da API..."></MsSelect>
        </div>
        <div>
          <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block;">ESTADO INVÁLIDO (ERRO)</label>
          <MsSelect invalid tone="danger" :options="selectOptions" placeholder="Seleção obrigatória"></MsSelect>
        </div>
        <div>
          <label style="font-size: 11px; font-weight: bold; margin-bottom: 4px; display: block;">DESABILITADO</label>
          <MsSelect disabled tone="neutral" :options="selectOptions" model-value="vue"></MsSelect>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSelect loading placeholder="Carregando..." /&gt;
&lt;MsSelect invalid tone="danger" /&gt;
&lt;MsSelect disabled /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsRange tone="primary" :min="0" :max="100" v-model="val" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsRange size="sm" /&gt;
&lt;MsRange size="lg" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsFileInput label="Upload" placeholder="Escolher..." /&gt;
&lt;MsFileInput multiple /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsColorPicker model-value="#2e86de" /&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'badges'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsBadge nos 8 Tons Oficiais da Marca (Variante Solid)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Solid Badges</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <MsBadge v-for="t in allTones" :key="t" :tone="t" variant="solid" size="md">
          {{ t.toUpperCase() }}
        </MsBadge>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBadge tone="primary" variant="solid"&gt;PRIMARY&lt;/MsBadge&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. MsBadge na Variante Soft / Sutil</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Soft Badges</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <MsBadge v-for="t in allTones" :key="'soft-' + t" :tone="t" variant="soft" size="md">
          {{ t.toUpperCase() }}
        </MsBadge>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBadge tone="success" variant="soft"&gt;SUCCESS&lt;/MsBadge&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. MsBadge na Variante Outline</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Outline Badges</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
        <MsBadge v-for="t in allTones" :key="'out-' + t" :tone="t" variant="outline" size="md">
          {{ t.toUpperCase() }}
        </MsBadge>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBadge tone="danger" variant="outline"&gt;DANGER&lt;/MsBadge&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. Formatos Geométricos (Pill, Rounded, Square) & Ponto Indicador (Dot)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes & Dots</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <MsBadge pill tone="primary">Pill Badge</MsBadge>
        <MsBadge shape="rounded" tone="accent">Rounded Badge</MsBadge>
        <MsBadge shape="square" tone="neutral">Square Badge</MsBadge>
        <MsBadge dot tone="success" variant="soft">Online</MsBadge>
        <MsBadge dot pulse tone="danger" variant="soft">Erro Crítico</MsBadge>
        <MsBadge :count="5" tone="primary" pill></MsBadge>
        <MsBadge :count="128" :max-count="99" tone="danger" pill></MsBadge>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBadge pill tone="primary"&gt;Pill&lt;/MsBadge&gt;
&lt;MsBadge dot pulse tone="danger"&gt;Erro&lt;/MsBadge&gt;
&lt;MsBadge :count="128" :max-count="99" /&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'alerts'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsAlert nos 8 Tons Oficiais da Marca (Variante Soft com Ícone)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        <MsAlert v-for="t in allTones" :key="t" :tone="t" variant="soft" :title="'Alerta Semântico: ' + t.toUpperCase()" :description="'Mensagem informativa no tom corporativo oficial (' + toneHexMap[t] + ').'" dismissible></MsAlert>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAlert tone="info" variant="soft" title="Informação" description="..." dismissible /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes de Estilo (Solid, Soft, Outline, Left-Accent)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Style Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        <MsAlert tone="primary" variant="solid" title="Variante Solid Corporativa" description="Destaque de alta ênfase para anúncios principais."></MsAlert>
        <MsAlert tone="success" variant="soft" title="Variante Soft Agradável" description="Ideal para confirmações de salvamento e validações bem-sucedidas."></MsAlert>
        <MsAlert tone="warning" variant="outline" title="Variante Outline Contornada" description="Aviso leve sem fundo invasivo."></MsAlert>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAlert variant="solid" tone="primary" title="Solid" /&gt;
&lt;MsAlert variant="outline" tone="warning" title="Outline" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsBanner tone="primary" title="Novidades" description="..."&gt;
  &lt;template #actions&gt;&lt;MsButton&gt;Ver&lt;/MsButton&gt;&lt;/template&gt;
&lt;/MsBanner&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsToast tone="success" title="Salvo!" message="..." /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsConfirmDialog tone="danger" title="Excluir?" description="..." /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSpinner tone="primary" size="lg" /&gt;
&lt;MsSpinner tone="accent" size="lg" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSpinner size="xs" /&gt;
&lt;MsSpinner size="xl" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSkeleton variant="circle" width="48px" height="48px" /&gt;
&lt;MsSkeleton variant="text" width="100%" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsProgress tone="primary" :model-value="75" /&gt;
&lt;MsProgress tone="accent" :model-value="75" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsProgress size="sm" :model-value="60" /&gt;
&lt;MsProgress striped animated :model-value="80" /&gt;
&lt;MsProgress indeterminate /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsProgressRadial tone="primary" :value="68" size="md" /&gt;
&lt;MsProgressRadial tone="accent" :value="68" size="md" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsProgressRadial size="sm" :value="45" /&gt;
&lt;MsProgressRadial size="xl" :value="95" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsStatus tone="success" pulse label="ONLINE" /&gt;
&lt;MsStatus tone="danger" pulse label="DEGRADE" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTooltip content="Dica no Topo" placement="top"&gt;
  &lt;MsButton&gt;Hover&lt;/MsButton&gt;
&lt;/MsTooltip&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsPopover&gt;
  &lt;template #trigger&gt;&lt;MsButton&gt;Abrir&lt;/MsButton&gt;&lt;/template&gt;
  &lt;div&gt;Conteúdo rico&lt;/div&gt;
&lt;/MsPopover&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'cards'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsCard com Destaque de Borda nos 8 Tons da Marca</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones Borders</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <div v-for="t in allTones" :key="t">
          <MsCard :tone="t" variant="raised" :title="t.toUpperCase() + ' ACCENT'" :description="'Borda superior corporativa (' + toneHexMap[t] + ').'">
            <div style="font-size: 12px; color: var(--ms-color-text-secondary);">
              Cartão com elevação e acentuação de cor no padrão visual normativo MagicStyle.
            </div>
            <template #footer>
              <MsButton size="xs" variant="outline" :tone="t">Ação</MsButton>
            </template>
          </MsCard>
        </div>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCard tone="primary" title="Primary Card"&gt;
  &lt;p&gt;Conteúdo&lt;/p&gt;
&lt;/MsCard&gt;
&lt;MsCard tone="accent" title="Accent Card" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Variantes de Superfície (Raised, Flat, Outline, Sunken, Glass)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Surface Variants</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; width: 100%;">
        <MsCard variant="raised" title="Raised (Elevado com Sombra)">
          <p style="font-size: 12px; margin: 0;">Superfície padrão com elevação por sombra suave.</p>
        </MsCard>
        <MsCard variant="flat" title="Flat (Plano Sem Sombra)">
          <p style="font-size: 12px; margin: 0;">Fundo limpo integrado à página.</p>
        </MsCard>
        <MsCard variant="outline" title="Outline (Apenas Contorno)">
          <p style="font-size: 12px; margin: 0;">Foco em separação visual nítida por borda hairline.</p>
        </MsCard>
        <MsCard variant="sunken" title="Sunken (Rebaixado)">
          <p style="font-size: 12px; margin: 0;">Fundo rebaixado ideal para blocos de dados ou código.</p>
        </MsCard>
        <MsCard variant="glass" title="Glass (Efeito Translúcido)">
          <p style="font-size: 12px; margin: 0;">Efeito moderno com blur e transparência.</p>
        </MsCard>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCard variant="raised" /&gt;
&lt;MsCard variant="outline" /&gt;
&lt;MsCard variant="glass" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Padrão Completo de E-Commerce & Perfil de Usuário</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Real Composite Cards</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; width: 100%;">
        <MsCard variant="raised" tone="primary" title="MagicStyle Enterprise Edition" description="Licença corporativa de alto desempenho" interactive hoverable header-divider footer-divider>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <span style="font-size: 28px; font-weight: 800; color: var(--ms-color-primary, #2e86de);">R$ 2.490</span>
            <span style="font-size: 12px; color: var(--ms-color-text-muted);">/ano por cluster</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
            <div>✓ 51 Componentes Vue 3 & CSS Layers</div>
            <div>✓ 8 Tons Semânticos da Marca Oficiais</div>
            <div>✓ Suporte Prioritário & SLA de 1 hora</div>
          </div>
          <template #footer>
            <MsButton full-width variant="solid" tone="primary">Adquirir Licença</MsButton>
          </template>
        </MsCard>

        <MsCard variant="raised" tone="accent" title="Métricas de Qualidade da Baseline" description="Relatório em tempo real do monorepo" header-divider footer-divider>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="padding: 12px; background: var(--ms-color-surface-subtle); border-radius: 8px;">
              <div style="font-size: 11px; color: var(--ms-color-text-muted);">COBERTURA DE TESTES</div>
              <div style="font-size: 20px; font-weight: bold; color: var(--ms-color-success);">100%</div>
            </div>
            <div style="padding: 12px; background: var(--ms-color-surface-subtle); border-radius: 8px;">
              <div style="font-size: 11px; color: var(--ms-color-text-muted);">TEMPO DE CARGA</div>
              <div style="font-size: 20px; font-weight: bold; color: var(--ms-color-primary);">12ms</div>
            </div>
          </div>
          <template #footer>
            <MsButton variant="outline" tone="accent" size="sm">Exportar Relatório</MsButton>
          </template>
        </MsCard>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCard tone="primary" interactive hoverable&gt;
  &lt;template #footer&gt;&lt;MsButton&gt;Comprar&lt;/MsButton&gt;&lt;/template&gt;
&lt;/MsCard&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'avatars'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsAvatar nos 8 Tons Oficiais (Iniciais Automáticas)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">8 Brand Tones</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <MsAvatar v-for="t in allTones" :key="t" :tone="t" :name="t.toUpperCase() + ' User'" size="md"></MsAvatar>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAvatar tone="primary" name="Ada Lovelace" /&gt;
&lt;MsAvatar tone="accent" name="Grace Hopper" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">2. Formatos Geométricos (Circle, Rounded, Square) & Status</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Shapes & Status</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <MsAvatar shape="circle" tone="primary" name="Online User" status="online"></MsAvatar>
        <MsAvatar shape="rounded" tone="accent" name="Busy User" status="busy"></MsAvatar>
        <MsAvatar shape="square" tone="warning" name="Away User" status="away"></MsAvatar>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAvatar shape="circle" status="online" /&gt;
&lt;MsAvatar shape="rounded" status="busy" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">3. Escala Completa de Tamanhos (xs a 2xl)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Sizes Scale</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <MsAvatar size="xs" name="Ada Lovelace"></MsAvatar>
        <MsAvatar size="sm" name="Ada Lovelace"></MsAvatar>
        <MsAvatar size="md" name="Ada Lovelace"></MsAvatar>
        <MsAvatar size="lg" name="Ada Lovelace"></MsAvatar>
        <MsAvatar size="xl" name="Ada Lovelace"></MsAvatar>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAvatar size="xs" /&gt;
&lt;MsAvatar size="xl" /&gt;</code></pre>
    </div>
    </div>

    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">4. MsAvatarGroup Empilhado (Stacked)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Avatar Groups</span>
      </div>
      <div class="variation-preview-box">
        
      <MsAvatarGroup size="md" :max="3" spacing="normal">
        <MsAvatar name="Ada Lovelace"></MsAvatar>
        <MsAvatar name="Grace Hopper"></MsAvatar>
        <MsAvatar name="Alan Turing"></MsAvatar>
        <MsAvatar name="Margaret Hamilton"></MsAvatar>
        <MsAvatar name="Linus Torvalds"></MsAvatar>
      </MsAvatarGroup>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAvatarGroup :max="3"&gt;
  &lt;MsAvatar name="Ada" /&gt;
  &lt;MsAvatar name="Grace" /&gt;
&lt;/MsAvatarGroup&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'dialogs'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Diálogos de Confirmação & Tamanhos (sm, md, lg)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Dialog Triggers</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <MsButton variant="solid" tone="primary">Abrir Diálogo Médio (md)</MsButton>
        <MsButton variant="outline" tone="accent">Abrir Diálogo Grande (lg)</MsButton>
        <MsButton variant="soft" tone="neutral">Abrir Modal Pequeno (sm)</MsButton>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsDialog :open="open" title="Título" size="md"&gt;
  &lt;p&gt;Conteúdo modal&lt;/p&gt;
&lt;/MsDialog&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'drawers'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. Posicionamento de Gaveta (Esquerda, Direita, Inferior)</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Drawer Placements</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <MsButton variant="solid" tone="primary">Gaveta Lateral Esquerda (Menu)</MsButton>
        <MsButton variant="outline" tone="accent">Gaveta Lateral Direita (Carrinho)</MsButton>
        <MsButton variant="soft" tone="neutral">Gaveta Inferior (Mobile Sheet)</MsButton>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsDrawer placement="right" :open="open"&gt;
  &lt;p&gt;Gaveta lateral&lt;/p&gt;
&lt;/MsDrawer&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAccordion&gt;
  &lt;MsAccordionItem title="Dúvida 1"&gt;Resposta...&lt;/MsAccordionItem&gt;
&lt;/MsAccordion&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsEmptyState title="Vazio" description="..."&gt;
  &lt;template #actions&gt;&lt;MsButton&gt;Ação&lt;/MsButton&gt;&lt;/template&gt;
&lt;/MsEmptyState&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsContainer max-width="md"&gt;
  &lt;p&gt;Conteúdo centralizado&lt;/p&gt;
&lt;/MsContainer&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsSeparator label="OU" align="center" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAppShell&gt;
  &lt;template #topbar&gt;...&lt;/template&gt;
  &lt;template #sidebar&gt;...&lt;/template&gt;
  &lt;router-view /&gt;
&lt;/MsAppShell&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsPage title="Gestão de Módulos" description="..."&gt;
  &lt;template #actions&gt;&lt;MsButton&gt;Novo&lt;/MsButton&gt;&lt;/template&gt;
&lt;/MsPage&gt;</code></pre>
    </div>
    </div>
  </div>


  <div v-if="activeTab === 'tables'">
    
    <div class="variation-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div class="variation-card-title" style="margin: 0;">1. MsTable Completa com Cabeçalho Ordenável e Badges de Status</div>
        <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle, #e2e8f0); color: var(--ms-color-text-secondary); font-family: monospace;">Interactive Data Table</span>
      </div>
      <div class="variation-preview-box">
        
      <div style="width: 100%; overflow-x: auto;">
        <MsTable variant="default" density="normal" striped bordered hoverable caption="Pacotes do Monorepo MagicStyle">
          <MsTableHead>
            <MsTableRow>
              <MsTableHeaderCell sortable sort-direction="asc">Pacote</MsTableHeaderCell>
              <MsTableHeaderCell>Tipo</MsTableHeaderCell>
              <MsTableHeaderCell align="right">Testes</MsTableHeaderCell>
              <MsTableHeaderCell align="right">Cobertura</MsTableHeaderCell>
              <MsTableHeaderCell align="center">Status</MsTableHeaderCell>
            </MsTableRow>
          </MsTableHead>
          <MsTableBody>
            <MsTableRow v-for="r in tableRows" :key="r.pkg">
              <MsTableCell style="font-weight: bold; font-family: monospace;">{{ r.pkg }}</MsTableCell>
              <MsTableCell>{{ r.type }}</MsTableCell>
              <MsTableCell align="right">{{ r.tests }}</MsTableCell>
              <MsTableCell align="right">{{ r.coverage }}</MsTableCell>
              <MsTableCell align="center">
                <MsBadge :tone="r.status === 'Pass' ? 'success' : 'warning'" variant="soft">{{ r.status }}</MsBadge>
              </MsTableCell>
            </MsTableRow>
          </MsTableBody>
        </MsTable>
      </div>
    
      </div>
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTable striped bordered hoverable&gt;
  &lt;MsTableHead&gt;...&lt;/MsTableHead&gt;
  &lt;MsTableBody&gt;...&lt;/MsTableBody&gt;
&lt;/MsTable&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTimeline&gt;
  &lt;MsTimelineItem tone="success" title="Concluído" /&gt;
&lt;/MsTimeline&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsRating tone="warning" :model-value="4" /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsAnimatedNumber :value="14850" prefix="+" /&gt;
&lt;MsAnimatedNumber :value="98450" prefix="R$ " /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsList&gt;
  &lt;MsListItem title="Item 1"&gt;
    &lt;template #prefix&gt;🎨&lt;/template&gt;
  &lt;/MsListItem&gt;
&lt;/MsList&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsStepper :current-step="2"&gt;
  &lt;MsStep :step="1" title="Passo 1" completed /&gt;
  &lt;MsStep :step="2" title="Passo 2" active /&gt;
&lt;/MsStepper&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsTree&gt;
  &lt;MsTreeNode label="src"&gt;
    &lt;MsTreeNode label="index.ts" /&gt;
  &lt;/MsTreeNode&gt;
&lt;/MsTree&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsContextMenu :items="menuItems"&gt;
  &lt;div&gt;Área clicável&lt;/div&gt;
&lt;/MsContextMenu&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsChatBubble tone="neutral" author="Ada" message="..." /&gt;
&lt;MsChatBubble tone="primary" outgoing message="..." /&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsCarousel&gt;
  &lt;MsCarouselSlide&gt;Slide 1&lt;/MsCarouselSlide&gt;
&lt;/MsCarousel&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsDock position="bottom"&gt;
  &lt;MsDockItem label="Home" icon="🏠" /&gt;
&lt;/MsDock&gt;</code></pre>
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
    <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
      <pre style="margin: 0;"><code>&lt;MsScrollSpy :items="sections" /&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsNavbar tone="primary" size="sm"&gt;
  &lt;template #brand&gt;⚡ MagicStyle&lt;/template&gt;
  &lt;div&gt;&lt;a href="#"&gt;Visão Geral&lt;/a&gt;&lt;/div&gt;
  &lt;template #actions&gt;&lt;span&gt;#2e86de&lt;/span&gt;&lt;/template&gt;
&lt;/MsNavbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsNavbar variant="glass"&gt;
  &lt;template #brand&gt;✨ Glassmorphism&lt;/template&gt;
  &lt;template #actions&gt;&lt;MsButton tone="accent"&gt;Conectar&lt;/MsButton&gt;&lt;/template&gt;
&lt;/MsNavbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsNavbar size="lg" tone="neutral"&gt;...&lt;/MsNavbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsNavbar floating variant="elevated"&gt;
  &lt;template #brand&gt;Magic App&lt;/template&gt;
  &lt;template #actions&gt;&lt;MsButton pill&gt;Experimente Grátis&lt;/MsButton&gt;&lt;/template&gt;
&lt;/MsNavbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsNavbar shadow="sm"&gt;...&lt;/MsNavbar&gt;
&lt;MsNavbar shadow="md"&gt;...&lt;/MsNavbar&gt;
&lt;MsNavbar shadow="lg"&gt;...&lt;/MsNavbar&gt;
&lt;MsNavbar shadow="xl"&gt;...&lt;/MsNavbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsNavbar container="xl" tone="primary"&gt;...&lt;/MsNavbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsSidebar tone="neutral" position="relative"&gt;
  &lt;template #header&gt;&lt;strong&gt;Dashboard&lt;/strong&gt;&lt;/template&gt;
  &lt;div&gt;Menu Content&lt;/div&gt;
  &lt;template #footer&gt;Versão 1.2&lt;/template&gt;
&lt;/MsSidebar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsSidebar width="compact"&gt;...&lt;/MsSidebar&gt;
&lt;MsSidebar width="normal"&gt;...&lt;/MsSidebar&gt;
&lt;MsSidebar width="wide"&gt;...&lt;/MsSidebar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsSidebar v-model:collapsed="isCollapsed" show-toggle&gt;
  &lt;template #header&gt;Magic Suite&lt;/template&gt;
  &lt;div&gt;Conteúdo&lt;/div&gt;
&lt;/MsSidebar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsFooter tone="neutral" layout="simple" copyright="© 2026 MagicStyle Inc."&gt;
  &lt;a href="#"&gt;Termos&lt;/a&gt;
&lt;/MsFooter&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsFooter layout="multi-column" :columns="columns" copyright="..." /&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsFooter variant="sunken" layout="simple" copyright="..." /&gt;
&lt;MsFooter variant="inverse" layout="simple" copyright="..." /&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsFooter shadow="md" layout="simple" copyright="..." /&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsFooter container="xl" layout="simple" copyright="..." /&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsScrollbar tone="accent" max-height="140px" visibility="always"&gt;
  &lt;div&gt;Conteúdo rolável...&lt;/div&gt;
&lt;/MsScrollbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsScrollbar size="thin"&gt;...&lt;/MsScrollbar&gt;
&lt;MsScrollbar size="normal"&gt;...&lt;/MsScrollbar&gt;
&lt;MsScrollbar size="thick"&gt;...&lt;/MsScrollbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsScrollbar orientation="horizontal" tone="accent"&gt;
  &lt;div style="display: flex; width: max-content;"&gt;...&lt;/div&gt;
&lt;/MsScrollbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsScrollbar visibility="auto" tone="primary" max-height="130px"&gt;
  &lt;div&gt;Conteúdo rolável...&lt;/div&gt;
&lt;/MsScrollbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsScrollbar track-color="#1e293b" thumb-color="#38bdf8"&gt;...&lt;/MsScrollbar&gt;</code></pre>
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
      <div class="variation-code-box" style="margin-top: 12px; background: #0f172a; color: #f8fafc; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 11px; overflow-x: auto;">
        <pre style="margin: 0;"><code>&lt;MsScrollbar radius="0px" size="thick"&gt;...&lt;/MsScrollbar&gt;
&lt;MsScrollbar arrows size="thick"&gt;...&lt;/MsScrollbar&gt;</code></pre>
      </div>
    </div>
  </div>

`;
