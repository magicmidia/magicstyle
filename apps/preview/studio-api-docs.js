/**
 * Magic-Style API Documentation Registry & FlyonUI Spec Generator
 * Detailed Props, Slots, Emits, and Tokens for all enterprise components.
 */

export const componentDocs = {
  // --- AÇÕES & NAVEGAÇÃO ---
  buttons: {
    name: "MsButton",
    category: "Ações & Navegação",
    description:
      "Botão interativo enterprise de alta densidade e precisão. Suporta 8 tons semânticos da marca, 10 variantes visuais (incluindo Text e Glass), efeito onda (Wave), modificadores de geometria (Shape/Pill), modos Wide/Block/Responsive, indicador de carregamento, adornos prefix/suffix e acessibilidade completa WCAG 2.1 AAA.",
    props: [
      {
        name: "variant",
        type: "'solid' | 'soft' | 'outline' | 'text' | 'ghost' | 'glass' | 'gradient' | 'dashed' | 'link' | 'squared'",
        default: "'solid'",
        description: "Variante visual do botão (shadcn-guided, glassmorphism e brand signature).",
      },
      {
        name: "tone",
        type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'primary'",
        description: "Papel de cor semântica corporativa (8 tons da marca).",
      },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
        default: "'md'",
        description: "Escala de altura e densidade de controle (28px a 56px+).",
      },
      {
        name: "shape",
        type: "'square' | 'rounded' | 'rounded-sm' | 'rounded-lg' | 'pill'",
        default: "'rounded'",
        description: "Geometria de arredondamento de borda (0px a 9999px).",
      },
      {
        name: "pill",
        type: "boolean",
        default: "false",
        description: "Atalho booleano para formato arredondado em pílula (radius-full).",
      },
      {
        name: "wide",
        type: "boolean",
        default: "false",
        description:
          "Aplica largura mínima de 160px e padding horizontal generoso para destaque de CTA.",
      },
      {
        name: "block",
        type: "boolean",
        default: "false",
        description: "Preenche 100% da largura do contêiner pai.",
      },
      {
        name: "responsive",
        type: "boolean",
        default: "false",
        description:
          "Inline-flex no desktop; expande automaticamente para 100% de largura em telas móveis (<= 640px).",
      },
      {
        name: "wave",
        type: "boolean",
        default: "false",
        description:
          "Ativa microanimação luminosa de onda de choque radial no clique (:active::after).",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description:
          "Estado de carregamento com spinner tokenizado, aria-busy e bloqueio de cliques.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o botão e aplica opacidade atenuada com cursor not-allowed.",
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        description: "Alias para esticar o botão para preencher 100% da largura do contêiner.",
      },
      {
        name: "caret",
        type: "boolean",
        default: "false",
        description: "Renderiza chevron indicador de menu suspenso com rotação animada.",
      },
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controla a rotação de 180° do caret e o atributo aria-expanded.",
      },
      {
        name: "type",
        type: "'button' | 'submit' | 'reset'",
        default: "'button'",
        description: "Atributo HTML nativo do botão.",
      },
    ],
    slots: [
      { name: "default", description: "Conteúdo principal ou template rico customizado do botão." },
      { name: "prefix", description: "Adorno inicial (ícone, atalho kbd ou badge)." },
      { name: "suffix", description: "Adorno final (contador numérico ou ícone)." },
      { name: "icon-start", description: "Slot óptico para ícone no início do botão." },
      { name: "icon-end", description: "Slot óptico para ícone no final do botão." },
      { name: "caret", description: "Ícone chevron personalizado para dropdowns." },
      { name: "loading", description: "Indicador de carregamento ou spinner personalizado." },
    ],
    emits: [
      {
        name: "click",
        payload: "(event: MouseEvent)",
        description: "Disparado quando o botão é clicado (se não desabilitado ou carregando).",
      },
    ],
    tokens: [
      {
        name: "--ms-color-primary",
        default: "#2e86de",
        description: "Cor base para tone primary.",
      },
      {
        name: "--ms-color-secondary",
        default: "#e15f41",
        description: "Cor base para tone secondary.",
      },
      { name: "--ms-color-accent", default: "#341f97", description: "Cor base para tone accent." },
      {
        name: "--ms-control-radius",
        default: "6px",
        description: "Raio de curvatura padrão dos controles.",
      },
      {
        name: "--ms-layout-field-height-md",
        default: "38px",
        description: "Altura do botão tamanho md.",
      },
    ],
  },
  dropdown: {
    name: "MsDropdownButton & MsMenu",
    category: "Ações & Navegação",
    description:
      "Botão com menu suspenso suspenso (dropdown) integrado, alinhamento configurável, suporte a atalhos kbd e itens desabilitados.",
    props: [
      {
        name: "label",
        type: "string",
        default: "'Ações'",
        description: "Rótulo do botão gatilho.",
      },
      {
        name: "items",
        type: "MsMenuItem[]",
        default: "[]",
        description: "Lista de itens do menu { label, value, icon, shortcut, disabled }.",
      },
      {
        name: "variant",
        type: "MsButtonVariant",
        default: "'solid'",
        description: "Variante visual do botão gatilho.",
      },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom de cor semântica do botão gatilho.",
      },
      {
        name: "align",
        type: "'left' | 'right'",
        default: "'left'",
        description: "Alinhamento do menu suspenso em relação ao botão.",
      },
    ],
    slots: [
      { name: "default", description: "Gatilho customizado." },
      { name: "menu", description: "Conteúdo customizado do menu." },
    ],
    emits: [
      {
        name: "select",
        payload: "(item: MsMenuItem)",
        description: "Disparado quando um item é selecionado.",
      },
    ],
    tokens: [
      {
        name: "--ms-z-index-dropdown",
        default: "1000",
        description: "Camada de elevação do popup.",
      },
    ],
  },
  "icon-buttons": {
    name: "MsIconButton",
    category: "Ações & Navegação",
    description:
      "Botão compacto quadrado ou circular dedicado a ícones de ação rápida com rótulo de acessibilidade obrigatório (aria-label).",
    props: [
      {
        name: "ariaLabel",
        type: "string",
        default: "''",
        description: "Descrição acessível obrigatória para leitores de tela.",
      },
      {
        name: "variant",
        type: "'solid' | 'soft' | 'outline' | 'ghost'",
        default: "'ghost'",
        description: "Estilo visual do botão de ícone.",
      },
      {
        name: "tone",
        type: "MsTone",
        default: "'neutral'",
        description: "Tom semântico corporativo.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Tamanho do botão de ícone.",
      },
      {
        name: "shape",
        type: "'circle' | 'rounded' | 'square'",
        default: "'rounded'",
        description: "Formato geométrico do botão.",
      },
      {
        name: "active",
        type: "boolean",
        default: "false",
        description: "Estado pressionado/selecionado (aria-pressed).",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Exibe micro-spinner de carregamento.",
      },
    ],
    slots: [{ name: "default", description: "Ícone SVG ou caractere de ícone." }],
    emits: [{ name: "click", payload: "(event: MouseEvent)", description: "Disparado ao clicar." }],
    tokens: [{ name: "--ms-space-2", default: "8px", description: "Padding padrão." }],
  },
  "segmented-control": {
    name: "MsSegmentedControl",
    category: "Ações & Navegação",
    description:
      "Controle deslizante de opções mutuamente exclusivas com animação de indicador de seleção fluida.",
    props: [
      {
        name: "modelValue",
        type: "string | number",
        default: "undefined",
        description: "Valor atualmente selecionado.",
      },
      {
        name: "options",
        type: "MsSegmentedOption[]",
        default: "[]",
        description: "Opções { value, label, icon, disabled }.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala de altura do controle segmentado.",
      },
      {
        name: "fullWidth",
        type: "boolean",
        default: "false",
        description: "Expande para ocupar 100% da largura.",
      },
      {
        name: "tone",
        type: "MsTone",
        default: "'neutral'",
        description: "Tom do indicador ativo.",
      },
    ],
    slots: [{ name: "default", description: "Opções declarativas." }],
    emits: [
      {
        name: "update:modelValue",
        payload: "(value: any)",
        description: "Disparado na alteração de opção.",
      },
    ],
    tokens: [
      { name: "--ms-radius-md", default: "8px", description: "Raio do container segmentado." },
    ],
  },
  "sidebar-menu": {
    name: "MsSidebarMenu",
    category: "Ações & Navegação",
    description:
      "Menu lateral deslizante para navegação de dashboards e aplicações corporativas. Suporta submenus colapsáveis em acordeon, indicador deslizante, 8 tons da marca, 3 densidades, modo ícones (mini) e acessibilidade ARIA total.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "undefined",
        description: "ID do item de menu atualmente selecionado / ativo.",
      },
      {
        name: "items",
        type: "MsSidebarMenuItemData[] | MsSidebarMenuGroupData[]",
        default: "undefined",
        description: "Estrutura de dados para renderização declarativa automatizada.",
      },
      {
        name: "tone",
        type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'primary'",
        description: "Tom semântico para itens ativos e badges (8 tons da marca).",
      },
      {
        name: "density",
        type: "'compact' | 'normal' | 'spacious'",
        default: "'normal'",
        description: "Espaçamento vertical e tamanho da fonte dos itens.",
      },
      {
        name: "shape",
        type: "'rounded' | 'pill' | 'square'",
        default: "'rounded'",
        description: "Geometria dos itens de menu (arredondado, pílula ou reto).",
      },
      {
        name: "collapsed",
        type: "boolean",
        default: "false",
        description: "Modo compacto mini-sidebar exibindo apenas ícones com tooltips.",
      },
      {
        name: "accordion",
        type: "boolean",
        default: "false",
        description: "Modo acordeon exclusivo: abre apenas um submenu por vez.",
      },
    ],
    slots: [
      {
        name: "default",
        description:
          "Grupos e itens de menu definidos via tags MsSidebarMenuGroup / MsSidebarMenuItem.",
      },
    ],
    emits: [
      {
        name: "update:modelValue",
        payload: "(id: string)",
        description: "Disparado quando um item de menu é clicado.",
      },
      {
        name: "select",
        payload: "(item: MsSidebarMenuItemData)",
        description: "Emite o payload completo do item de menu selecionado.",
      },
      {
        name: "toggle",
        payload: "({ id: string, open: boolean })",
        description: "Disparado na abertura ou fechamento de submenus.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-primary",
        default: "#2e86de",
        description: "Cor de destaque do item ativo.",
      },
      {
        name: "--ms-radius-md",
        default: "8px",
        description: "Raio de curvatura dos itens de menu.",
      },
      {
        name: "--ms-motion-duration-moderate",
        default: "240ms",
        description: "Duração da animação deslizante do acordeon.",
      },
    ],
  },
  breadcrumbs: {
    name: "MsBreadcrumbs",
    category: "Ações & Navegação",
    description:
      "Trilha de navegação hierárquica acessível com suporte a separadores customizados e truncamento de itens longos.",
    props: [
      {
        name: "items",
        type: "MsBreadcrumbItemData[]",
        default: "[]",
        description: "Lista de nós da trilha { label, href, current }.",
      },
      {
        name: "separatorType",
        type: "'slash' | 'chevron' | 'arrow' | 'dot'",
        default: "'chevron'",
        description: "Caractere ou ícone separador entre itens.",
      },
      {
        name: "maxItems",
        type: "number",
        default: "undefined",
        description: "Limite de itens antes de colapsar intermediários com reticências.",
      },
    ],
    slots: [
      { name: "default", description: "Itens manuais MsBreadcrumbItem." },
      { name: "separator", description: "Separador SVG customizado." },
    ],
    emits: [],
    tokens: [
      { name: "--ms-color-text-muted", default: "#64748b", description: "Cor dos separadores." },
    ],
  },
  tabs: {
    name: "MsTabs",
    category: "Ações & Navegação",
    description:
      "Navegação por abas acessíveis compatíveis com WAI-ARIA tablist/tab/tabpanel, suporte a rolagem horizontal e modo automático/manual.",
    props: [
      {
        name: "modelValue",
        type: "string | number",
        default: "undefined",
        description: "Aba ativa v-model.",
      },
      {
        name: "variant",
        type: "'line' | 'enclosed' | 'pill'",
        default: "'line'",
        description: "Estilo visual da barra de abas.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala de altura das abas.",
      },
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "Direção de disposição das abas.",
      },
    ],
    slots: [{ name: "default", description: "MsTabList e MsTabPanels." }],
    emits: [
      {
        name: "update:modelValue",
        payload: "(tabId: string | number)",
        description: "Disparado ao alternar aba.",
      },
    ],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor do sublinhado ativo." },
    ],
  },

  // --- FORMULÁRIOS & ENTRADAS ---
  inputs: {
    name: "MsInput & MsTextarea",
    category: "Formulários & Entradas",
    description:
      "Campos de texto essenciais para entrada de dados de alta performance com adornos prefix/suffix, limpeza rápida e estados de validação.",
    props: [
      {
        name: "modelValue",
        type: "string | number",
        default: "''",
        description: "Valor de texto do campo.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "''",
        description: "Texto explicativo no estado vazio.",
      },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Altura do campo de texto (xs: 28px, sm: 32px, md: 40px, lg: 48px).",
      },
      {
        name: "tone",
        type: "'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'default'",
        description:
          "Tom semântico corporativo aplicado à borda e anel de foco nos 8 tons da marca.",
      },
      {
        name: "invalid",
        type: "boolean",
        default: "false",
        description: "Aplica estado de erro com borda no tom danger.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o campo para edição.",
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        description: "Exibe botão 'X' de limpeza rápida do texto.",
      },
    ],
    slots: [
      { name: "prefix", description: "Ícone à esquerda do campo." },
      { name: "suffix", description: "Ícone ou atalho à direita." },
    ],
    emits: [
      {
        name: "update:modelValue",
        payload: "(value: string)",
        description: "Disparado na digitação.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "#2e86de",
        description: "Cor do anel de foco.",
      },
    ],
  },
  "search-fields": {
    name: "MsSearchField",
    category: "Formulários & Entradas",
    description:
      "Campo de pesquisa dedicado com atalho de teclado global (ex: Ctrl+K), indicador de busca ativa e limpeza instantânea.",
    props: [
      { name: "modelValue", type: "string", default: "''", description: "Termo de busca atual." },
      {
        name: "placeholder",
        type: "string",
        default: "'Buscar...'",
        description: "Texto placeholder do campo.",
      },
      {
        name: "shortcut",
        type: "string",
        default: "'⌘K'",
        description: "Dica visual de atalho de teclado.",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Exibe spinner durante requisição de busca.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "search",
        payload: "(query: string)",
        description: "Disparado ao teclar Enter ou clicar no ícone.",
      },
    ],
    tokens: [
      { name: "--ms-radius-md", default: "8px", description: "Borda arredondada do campo." },
    ],
  },
  selections: {
    name: "MsCheckbox, MsRadio & MsSwitch",
    category: "Formulários & Entradas",
    description:
      "Controles de seleção booleana e múltipla com estados indeterminate, grupos acessíveis e suporte aos 8 tons corporativos.",
    props: [
      {
        name: "modelValue",
        type: "boolean | any[]",
        default: "false",
        description: "Estado marcado/desmarcado.",
      },
      { name: "label", type: "string", default: "''", description: "Texto do rótulo associado." },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom semântico quando marcado (8 tons da marca).",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o controle.",
      },
      {
        name: "indeterminate",
        type: "boolean",
        default: "false",
        description: "Estado intermediário para checkboxes parciais.",
      },
    ],
    slots: [{ name: "default", description: "Rótulo customizado com HTML." }],
    emits: [
      { name: "update:modelValue", payload: "(val: any)", description: "Disparado ao alternar." },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "#2e86de",
        description: "Cor do preenchimento quando ativo.",
      },
    ],
  },
  fields: {
    name: "MsField",
    category: "Formulários & Entradas",
    description:
      "Contêiner estrutural acessível que conecta rótulo (<label>), descrição auxiliar e mensagens de erro ao controle de formulário com IDs WAI-ARIA vinculados automaticamente.",
    props: [
      { name: "label", type: "string", default: "''", description: "Rótulo visível do campo." },
      {
        name: "description",
        type: "string",
        default: "''",
        description: "Texto explicativo de apoio.",
      },
      {
        name: "error",
        type: "string",
        default: "''",
        description: "Mensagem de validação de erro (ativa aria-invalid).",
      },
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Exibe asterisco vermelho de obrigatoriedade.",
      },
    ],
    slots: [{ name: "default", description: "Componente de input ou controle filho." }],
    emits: [],
    tokens: [
      { name: "--ms-color-danger", default: "#ee5253", description: "Cor do texto de erro." },
    ],
  },
  "native-select": {
    name: "MsNativeSelect",
    category: "Formulários & Entradas",
    description:
      "Seletor HTML nativo estilizado para máxima performance e compatibilidade perfeita com formulários mobile nativos.",
    props: [
      {
        name: "modelValue",
        type: "string | number",
        default: "''",
        description: "Valor selecionado.",
      },
      {
        name: "options",
        type: "Array<{ value: string, label: string }>",
        default: "[]",
        description: "Lista de opções.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala de altura.",
      },
    ],
    slots: [{ name: "default", description: "Tags <option> nativas." }],
    emits: [
      {
        name: "update:modelValue",
        payload: "(val: string)",
        description: "Disparado ao selecionar opção.",
      },
    ],
    tokens: [
      { name: "--ms-layout-field-height-md", default: "38px", description: "Altura do campo." },
    ],
  },
  select: {
    name: "MsSelect",
    category: "Formulários & Entradas",
    description:
      "Engine de seleção avançada unificada do Magic-Style. Substitui dropdowns improvisados oferecendo seleção única/múltipla, busca filtrável em tempo real, agrupamento por categorias, tags removíveis, criação inline e acessibilidade WAI-ARIA com navegação por teclado.",
    props: [
      {
        name: "modelValue",
        type: "string | number | (string | number)[] | null",
        default: "null",
        description: "Valor v-model selecionado (único ou array no modo múltiplo).",
      },
      {
        name: "options",
        type: "(MsSelectOption | MsSelectGroup)[]",
        default: "[]",
        description: "Lista de opções ou grupos de opções { value, label, group, disabled }.",
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Permite selecionar múltiplos valores como tags.",
      },
      {
        name: "searchable",
        type: "boolean",
        default: "false",
        description: "Exibe campo de busca interno para filtrar opções.",
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        description: "Exibe botão rápido de limpar seleção (ícone 'X').",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Exibe indicador de carregamento assíncrono de dados.",
      },
      {
        name: "creatable",
        type: "boolean",
        default: "false",
        description: "Permite criar novas opções digitando no campo de busca.",
      },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description:
          "Escala de altura do campo (xs: 28px, sm: 32px, md: 40px, lg: 48px, xl: 56px).",
      },
      {
        name: "tone",
        type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'primary'",
        description:
          "Tom semântico corporativo aplicado à borda, anel de foco, tags e opções selecionadas.",
      },
      {
        name: "variant",
        type: "'outline' | 'filled' | 'flushed'",
        default: "'outline'",
        description:
          "Variante visual do contêiner (outline com borda, filled com fundo sutil, flushed com borda inferior).",
      },
      {
        name: "pill",
        type: "boolean",
        default: "false",
        description: "Bordas totalmente arredondadas no formato pílula.",
      },
      { name: "disabled", type: "boolean", default: "false", description: "Desabilita o seletor." },
      {
        name: "invalid",
        type: "boolean",
        default: "false",
        description: "Aplica estado de erro e borda no tom danger.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "'Selecione...'",
        description: "Texto exibido quando nenhum valor está selecionado.",
      },
    ],
    slots: [
      { name: "prefix", description: "Ícone ou adorno inicial do campo." },
      {
        name: "option",
        scope: "{ option, selected }",
        description: "Template customizado para renderizar cada item da lista.",
      },
      { name: "empty", description: "Conteúdo exibido quando nenhuma opção corresponde à busca." },
    ],
    emits: [
      {
        name: "update:modelValue",
        payload: "(value: any)",
        description: "Disparado quando a seleção muda.",
      },
      {
        name: "change",
        payload: "(value: any)",
        description: "Disparado ao confirmar nova opção.",
      },
      {
        name: "search",
        payload: "(query: string)",
        description: "Disparado quando o usuário digita na busca.",
      },
      {
        name: "create",
        payload: "(label: string)",
        description: "Disparado ao criar uma nova opção inline.",
      },
      { name: "clear", payload: "()", description: "Disparado ao clicar no botão de limpar." },
    ],
    tokens: [
      {
        name: "--ms-color-border-subtle",
        default: "rgba(0,0,0,0.12)",
        description: "Borda padrão do gatilho.",
      },
      {
        name: "--ms-color-primary",
        default: "#2e86de",
        description: "Cor da borda e anel em foco.",
      },
      {
        name: "--ms-z-index-dropdown",
        default: "1000",
        description: "Camada de elevação do popup flutuante.",
      },
    ],
  },
  ranges: {
    name: "MsRange",
    category: "Formulários & Entradas",
    description:
      "Slider deslizante para seleção numérica contínua ou em passos com suporte a todos os 8 tons da marca, marcas de escala e balão de valor flutuante.",
    props: [
      { name: "modelValue", type: "number", default: "0", description: "Valor numérico atual." },
      { name: "min", type: "number", default: "0", description: "Valor mínimo da escala." },
      { name: "max", type: "number", default: "100", description: "Valor máximo da escala." },
      { name: "step", type: "number", default: "1", description: "Incremento por passo." },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom da barra de progresso do slider (8 tons).",
      },
    ],
    slots: [],
    emits: [
      { name: "update:modelValue", payload: "(val: number)", description: "Disparado no arraste." },
    ],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor da trilha preenchida." },
    ],
  },
  "file-inputs": {
    name: "MsFileInput",
    category: "Formulários & Entradas",
    description:
      "Zona de upload com suporte a Drag & Drop, miniaturas de imagem, lista de arquivos carregados e validação de extensões.",
    props: [
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Permite selecionar vários arquivos.",
      },
      {
        name: "accept",
        type: "string",
        default: "'*'",
        description: "Filtros MIME permitidos (ex: image/*).",
      },
      {
        name: "maxSizeMb",
        type: "number",
        default: "10",
        description: "Limite de tamanho por arquivo em MB.",
      },
    ],
    slots: [{ name: "default", description: "Instrução textual da área de drop." }],
    emits: [
      {
        name: "change",
        payload: "(files: File[])",
        description: "Disparado ao selecionar arquivos.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-border-subtle",
        default: "rgba(0,0,0,0.15)",
        description: "Borda tracejada da área de arraste.",
      },
    ],
  },
  "color-pickers": {
    name: "MsColorPicker",
    category: "Formulários & Entradas",
    description:
      "Seletor de cor corporativo com swatches predefinidos da marca Magic-Style e entrada de código hexadecimal com pré-visualização.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "'#2e86de'",
        description: "Valor hexadecimal da cor.",
      },
      {
        name: "swatches",
        type: "string[]",
        default: "Brand Swatches",
        description: "Lista de cores recomendadas na paleta.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "(hex: string)",
        description: "Disparado na troca de cor.",
      },
    ],
    tokens: [{ name: "--ms-radius-md", default: "8px", description: "Raio dos swatches." }],
  },

  // --- FEEDBACK & INDICADORES ---
  badges: {
    name: "MsBadge",
    category: "Feedback & Indicadores",
    description:
      "Emblema indicador de estado, categoria e contadores numéricos. Suporta 8 tons, variantes solid/soft/outline, formato pill e modo dot.",
    props: [
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom semântico corporativo (8 tons da marca).",
      },
      {
        name: "variant",
        type: "'solid' | 'soft' | 'outline'",
        default: "'soft'",
        description: "Estilo visual do emblema.",
      },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "Dimensão do emblema.",
      },
      {
        name: "pill",
        type: "boolean",
        default: "false",
        description: "Bordas totalmente arredondadas.",
      },
      {
        name: "dot",
        type: "boolean",
        default: "false",
        description: "Exibe ponto indicador colorido interno.",
      },
    ],
    slots: [{ name: "default", description: "Texto ou contador do badge." }],
    emits: [],
    tokens: [{ name: "--ms-color-primary", default: "#2e86de", description: "Cor base primária." }],
  },
  alerts: {
    name: "MsAlert",
    category: "Feedback & Indicadores",
    description:
      "Caixas de alerta e notificação em linha com suporte a 8 tons semânticos, variantes soft/solid/outline, botão fechar e slot de ações.",
    props: [
      {
        name: "tone",
        type: "MsTone",
        default: "'info'",
        description: "Tom semântico do alerta (8 tons da marca).",
      },
      {
        name: "variant",
        type: "'soft' | 'solid' | 'outline'",
        default: "'soft'",
        description: "Estilo visual do banner de alerta.",
      },
      {
        name: "title",
        type: "string",
        default: "undefined",
        description: "Título do alerta em negrito.",
      },
      {
        name: "closable",
        type: "boolean",
        default: "false",
        description: "Exibe botão 'X' de fechamento.",
      },
    ],
    slots: [
      { name: "default", description: "Mensagem principal." },
      { name: "actions", description: "Botões de ação rápida." },
    ],
    emits: [{ name: "close", payload: "()", description: "Disparado ao clicar em fechar." }],
    tokens: [
      { name: "--ms-color-info", default: "#0abde3", description: "Cor padrão do tom info." },
    ],
  },
  spinners: {
    name: "MsSpinner",
    category: "Feedback & Indicadores",
    description:
      "Indicador circular de carregamento fluido nos 8 tons da marca com espessura e velocidade configuráveis.",
    props: [
      { name: "tone", type: "MsTone", default: "'primary'", description: "Tom da cor do spinner." },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "Diâmetro do spinner.",
      },
      {
        name: "speed",
        type: "'slow' | 'normal' | 'fast'",
        default: "'normal'",
        description: "Velocidade da rotação.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor da barra giratória." },
    ],
  },
  progress: {
    name: "MsProgress",
    category: "Feedback & Indicadores",
    description:
      "Barra de progresso linear com suporte aos 8 tons, modo indeterminado (buffer animado) e rótulo de percentual.",
    props: [
      { name: "value", type: "number", default: "0", description: "Valor de 0 a 100." },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom da barra nos 8 tons da marca.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Espessura da barra.",
      },
      {
        name: "indeterminate",
        type: "boolean",
        default: "false",
        description: "Modo carregamento contínuo sem valor fixo.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      {
        name: "--ms-color-primary",
        default: "#2e86de",
        description: "Cor do preenchimento da barra.",
      },
    ],
  },
  "radial-progress": {
    name: "MsProgressRadial",
    category: "Feedback & Indicadores",
    description:
      "Indicador de progresso circular radial com valor centralizado, animação de arco suave e suporte aos 8 tons da marca.",
    props: [
      { name: "value", type: "number", default: "0", description: "Valor percentual de 0 a 100." },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom semântico do arco (8 tons da marca).",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "Diâmetro do círculo.",
      },
      {
        name: "strokeWidth",
        type: "number",
        default: "6",
        description: "Espessura da trilha circular.",
      },
    ],
    slots: [{ name: "default", description: "Texto ou ícone central customizado." }],
    emits: [],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor do traço ativo." },
    ],
  },
  skeletons: {
    name: "MsSkeleton",
    category: "Feedback & Indicadores",
    description:
      "Placeholders de carregamento estrutural simulando textos, botões e imagens com animação de onda ou pulso suave.",
    props: [
      {
        name: "variant",
        type: "'text' | 'circular' | 'rectangular' | 'rounded'",
        default: "'text'",
        description: "Geometria do placeholder.",
      },
      {
        name: "animation",
        type: "'wave' | 'pulse' | 'none'",
        default: "'wave'",
        description: "Efeito de brilho animado.",
      },
      {
        name: "width",
        type: "string",
        default: "undefined",
        description: "Largura inline (ex: '100px', '80%').",
      },
      {
        name: "height",
        type: "string",
        default: "undefined",
        description: "Altura do placeholder.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      {
        name: "--ms-color-surface-hover",
        default: "rgba(0,0,0,0.06)",
        description: "Cor base do esqueleto.",
      },
    ],
  },
  tooltips: {
    name: "MsTooltip",
    category: "Feedback & Indicadores",
    description:
      "Dica de contexto flutuante com cálculo de posicionamento inteligente, suporte a 12 direções e seta indicadora opcional.",
    props: [
      { name: "content", type: "string", default: "''", description: "Texto explicativo da dica." },
      {
        name: "placement",
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'top'",
        description: "Lado de exibição em relação ao elemento alvo.",
      },
      {
        name: "arrow",
        type: "boolean",
        default: "true",
        description: "Exibe triângulo indicador apontando para o gatilho.",
      },
    ],
    slots: [
      {
        name: "default",
        description: "Elemento alvo que dispara o tooltip ao passar o mouse ou focar.",
      },
    ],
    emits: [],
    tokens: [
      { name: "--ms-z-index-tooltip", default: "1200", description: "Camada de elevação na tela." },
    ],
  },
  status: {
    name: "MsStatus",
    category: "Feedback & Indicadores",
    description:
      "Ponto de status de conexão e disponibilidade com efeito radar/pulsante configurável nos 8 tons da marca.",
    props: [
      {
        name: "tone",
        type: "MsTone",
        default: "'success'",
        description: "Tom semântico do status (8 tons da marca).",
      },
      {
        name: "pulse",
        type: "boolean",
        default: "false",
        description: "Ativa animação de onda radar contínua.",
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        description: "Texto de legenda ao lado do ponto.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      {
        name: "--ms-color-success",
        default: "#10ac84",
        description: "Cor do ponto verde de sucesso.",
      },
    ],
  },
  toasts: {
    name: "MsToast & useToast",
    category: "Feedback & Indicadores",
    description:
      "Sistema de notificações e alertas efêmeros flutuantes. Inclui hook composable useToast() para disparo programático de notificações nos 8 tons com tempo limite, barra de progresso, ações integradas e 6 posições na tela.",
    props: [
      {
        name: "title",
        type: "string",
        default: "undefined",
        description: "Título do alerta em negrito.",
      },
      {
        name: "message",
        type: "string",
        default: "''",
        description: "Mensagem detalhada do aviso.",
      },
      {
        name: "tone",
        type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'info'",
        description: "Tom de cor semântica do toast (8 tons da marca).",
      },
      {
        name: "duration",
        type: "number",
        default: "5000",
        description: "Tempo em milissegundos antes do fechamento automático (0 = infinito).",
      },
      {
        name: "closable",
        type: "boolean",
        default: "true",
        description: "Exibe botão 'X' de fechamento manual.",
      },
    ],
    slots: [
      { name: "default", description: "Conteúdo customizado da notificação." },
      { name: "action", description: "Botão de ação interativa (ex: 'Desfazer')." },
    ],
    emits: [
      { name: "close", payload: "()", description: "Disparado quando a notificação é descartada." },
    ],
    tokens: [
      { name: "--ms-z-index-toast", default: "1100", description: "Camada de topo na viewport." },
      {
        name: "--ms-radius-lg",
        default: "12px",
        description: "Raio dos cantos do balão de notificação.",
      },
    ],
  },
  "confirm-dialog": {
    name: "MsConfirmDialog",
    category: "Feedback & Indicadores",
    description:
      "Diálogo modal transacional para confirmação de operações críticas (exclusão, cancelamento de contrato, rollback). Apresenta ícone de severidade nos 8 tons, botão de ação com estado loading reativo e foco automático.",
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Visibilidade do modal de confirmação (v-model:open).",
      },
      {
        name: "title",
        type: "string",
        default: "'Confirmação'",
        description: "Título claro da ação requerida.",
      },
      {
        name: "message",
        type: "string",
        default: "''",
        description: "Texto explicativo das consequências da ação.",
      },
      {
        name: "tone",
        type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'danger'",
        description: "Tom de severidade do diálogo (8 tons da marca).",
      },
      {
        name: "confirmText",
        type: "string",
        default: "'Confirmar'",
        description: "Texto do botão principal de ação.",
      },
      {
        name: "cancelText",
        type: "string",
        default: "'Cancelar'",
        description: "Texto do botão de cancelamento.",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Ativa estado de carregamento no botão de confirmação.",
      },
    ],
    slots: [
      { name: "default", description: "Mensagem ou elementos adicionais do diálogo." },
      { name: "icon", description: "Ícone customizado de severidade." },
    ],
    emits: [
      {
        name: "update:open",
        payload: "(open: boolean)",
        description: "Sincronização v-model:open.",
      },
      {
        name: "confirm",
        payload: "()",
        description: "Disparado ao clicar no botão de confirmação.",
      },
      { name: "cancel", payload: "()", description: "Disparado ao cancelar ou fechar." },
    ],
    tokens: [
      {
        name: "--ms-color-danger",
        default: "#ee5253",
        description: "Cor do botão de destruição e ícone de alerta.",
      },
    ],
  },

  // --- LAYOUT & SUPERFÍCIES ---
  cards: {
    name: "MsCard",
    category: "Layout & Superfícies",
    description:
      "Contêiner de superfície estruturado para cartões com divisões de cabeçalho, corpo e rodapé, variantes surface/outline e estados clicáveis.",
    props: [
      {
        name: "variant",
        type: "'raised' | 'flat' | 'outline' | 'sunken' | 'glass'",
        default: "'raised'",
        description: "Estilo de relevo, bordas e elevação do cartão.",
      },
      {
        name: "tone",
        type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "undefined",
        description: "Borda superior de destaque em um dos 8 tons oficiais da marca.",
      },
      {
        name: "padding",
        type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "Espaçamento interno do corpo do cartão.",
      },
      {
        name: "interactive",
        type: "boolean",
        default: "false",
        description: "Adiciona efeito de elevação e hover para cartões clicáveis.",
      },
      {
        name: "hoverable",
        type: "boolean",
        default: "false",
        description: "Eleva o cartão ao passar o cursor.",
      },
      {
        name: "orientation",
        type: "'vertical' | 'horizontal'",
        default: "'vertical'",
        description: "Orientação do layout do cartão.",
      },
      {
        name: "headerDivider",
        type: "boolean",
        default: "false",
        description: "Renderiza divisor sutil abaixo do cabeçalho.",
      },
      {
        name: "footerDivider",
        type: "boolean",
        default: "false",
        description: "Renderiza divisor sutil acima do rodapé.",
      },
    ],
    slots: [
      { name: "header", description: "Cabeçalho com título." },
      { name: "default", description: "Corpo de conteúdo." },
      { name: "footer", description: "Ações de rodapé." },
    ],
    emits: [{ name: "click", payload: "(event: MouseEvent)", description: "Disparado ao clicar." }],
    tokens: [
      {
        name: "--ms-elevation-card",
        default: "0 2px 4px rgba(0,0,0,0.06)",
        description: "Sombra suave de elevação.",
      },
    ],
  },
  avatars: {
    name: "MsAvatar & MsAvatarGroup",
    category: "Layout & Superfícies",
    description:
      "Exibição de fotos de usuários com fallback automático para iniciais calculadas ou ícone genérico, e agrupamento empilhado (stacked).",
    props: [
      {
        name: "src",
        type: "string",
        default: "undefined",
        description: "URL da imagem de perfil.",
      },
      {
        name: "name",
        type: "string",
        default: "''",
        description: "Nome completo do usuário para geração automática de iniciais.",
      },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "Diâmetro do avatar.",
      },
      {
        name: "shape",
        type: "'circle' | 'rounded' | 'square'",
        default: "'circle'",
        description: "Formato do avatar.",
      },
    ],
    slots: [{ name: "badge", description: "Ponto indicador de status de presença." }],
    emits: [],
    tokens: [{ name: "--ms-radius-full", default: "9999px", description: "Borda circular." }],
  },
  dialogs: {
    name: "MsDialog",
    category: "Layout & Superfícies",
    description:
      "Janela modal acessível sobreposta à página com bloqueio de rolagem de fundo, travas de foco ARIA e fechamento por tecla Escape.",
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Visibilidade do modal (v-model:open).",
      },
      {
        name: "title",
        type: "string",
        default: "undefined",
        description: "Título do cabeçalho da janela.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
        default: "'md'",
        description: "Largura máxima da janela.",
      },
    ],
    slots: [
      { name: "default", description: "Corpo do modal." },
      { name: "footer", description: "Botões de confirmação e cancelamento." },
    ],
    emits: [
      { name: "update:open", payload: "(val: boolean)", description: "Disparado ao abrir/fechar." },
    ],
    tokens: [
      { name: "--ms-z-index-modal", default: "1050", description: "Camada de sobreposição." },
    ],
  },
  drawers: {
    name: "MsDrawer",
    category: "Layout & Superfícies",
    description:
      "Gaveta lateral ou inferior deslizante para painéis de filtro, configurações, carrinhos e detalhes de registros. Suporta 4 posições, 5 larguras, backdrop com desfoque e armadilha de foco acessível.",
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controla a visibilidade aberta/fechada da gaveta (v-model:open).",
      },
      {
        name: "placement",
        type: "'left' | 'right' | 'top' | 'bottom'",
        default: "'right'",
        description: "Lado da tela de onde a gaveta desliza.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
        default: "'md'",
        description: "Dimensão da gaveta (largura ou altura dependendo da posição).",
      },
      {
        name: "title",
        type: "string",
        default: "undefined",
        description: "Título do cabeçalho da gaveta.",
      },
      {
        name: "closable",
        type: "boolean",
        default: "true",
        description: "Exibe botão 'X' de fechamento no canto superior.",
      },
      {
        name: "backdrop",
        type: "boolean",
        default: "true",
        description: "Renderiza máscara escura com desfoque sobre a página.",
      },
      {
        name: "closeOnBackdrop",
        type: "boolean",
        default: "true",
        description: "Fecha a gaveta ao clicar fora no backdrop.",
      },
      {
        name: "closeOnEsc",
        type: "boolean",
        default: "true",
        description: "Fecha a gaveta ao pressionar a tecla Escape.",
      },
    ],
    slots: [
      { name: "default", description: "Corpo principal do conteúdo da gaveta." },
      { name: "header", description: "Cabeçalho customizado da gaveta." },
      { name: "footer", description: "Rodapé fixo com botões de ação e confirmação." },
    ],
    emits: [
      {
        name: "update:open",
        payload: "(open: boolean)",
        description: "Disparado para sincronizar o estado v-model:open.",
      },
      { name: "close", payload: "()", description: "Disparado quando a gaveta é fechada." },
    ],
    tokens: [
      {
        name: "--ms-color-surface-raised",
        default: "#ffffff",
        description: "Fundo da gaveta no tema claro.",
      },
      { name: "--ms-z-index-modal", default: "1050", description: "Camada z-index sobreposta." },
    ],
  },
  accordions: {
    name: "MsAccordion",
    category: "Layout & Superfícies",
    description:
      "Painéis expansíveis e recolhíveis para perguntas frequentes (FAQ), formulários em etapas e seções condensadas. Suporta modo único ou múltiplos painéis abertos simultaneamente.",
    props: [
      {
        name: "modelValue",
        type: "string | number | (string | number)[]",
        default: "undefined",
        description: "ID ou array de IDs dos painéis abertos.",
      },
      {
        name: "variant",
        type: "'bordered' | 'flush' | 'separated'",
        default: "'bordered'",
        description: "Estilo das bordas e espaçamento entre painéis.",
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Permite manter múltiplos painéis abertos ao mesmo tempo.",
      },
    ],
    slots: [{ name: "default", description: "Conjunto de componentes MsAccordionItem." }],
    emits: [
      {
        name: "update:modelValue",
        payload: "(value: any)",
        description: "Disparado ao abrir ou fechar um painel.",
      },
    ],
    tokens: [
      {
        name: "--ms-motion-duration-moderate",
        default: "240ms",
        description: "Duração da animação de abertura.",
      },
    ],
  },
  popovers: {
    name: "MsPopover",
    category: "Layout & Superfícies",
    description:
      "Painel flutuante rico acionado por clique ou hover para pré-visualizações, seletores de data e menus contextuais detalhados.",
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controla visibilidade (v-model:open).",
      },
      {
        name: "placement",
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'bottom'",
        description: "Lado de ancoragem do popover.",
      },
      {
        name: "trigger",
        type: "'click' | 'hover'",
        default: "'click'",
        description: "Evento disparador da abertura.",
      },
    ],
    slots: [
      { name: "default", description: "Elemento gatilho." },
      { name: "content", description: "Conteúdo rico do painel flutuante." },
    ],
    emits: [
      {
        name: "update:open",
        payload: "(val: boolean)",
        description: "Disparado na alteração de estado.",
      },
    ],
    tokens: [{ name: "--ms-z-index-popover", default: "1050", description: "Camada de elevação." }],
  },
  banners: {
    name: "MsBanner",
    category: "Layout & Superfícies",
    description:
      "Faixa horizontal de destaque para anúncios corporativos, manutenção programada e novidades com 8 tons, variantes soft/solid/outline e posições fixas.",
    props: [
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom da barra de aviso (8 tons da marca).",
      },
      {
        name: "variant",
        type: "'soft' | 'solid' | 'outline'",
        default: "'soft'",
        description: "Variante visual de fundo e borda.",
      },
      {
        name: "closable",
        type: "boolean",
        default: "true",
        description: "Permite fechar o banner.",
      },
      {
        name: "sticky",
        type: "'top' | 'bottom' | undefined",
        default: "undefined",
        description: "Fixa o banner no topo ou rodapé da tela.",
      },
    ],
    slots: [
      { name: "default", description: "Mensagem principal." },
      { name: "action", description: "Botão de ação do banner." },
    ],
    emits: [{ name: "close", payload: "()", description: "Disparado ao fechar." }],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor base do tom primary." },
    ],
  },
  containers: {
    name: "MsContainer",
    category: "Layout & Superfícies",
    description:
      "Contêiner responsivo com larguras máximas padronizadas (sm, md, lg, xl, fluid) e espaçamento horizontal simétrico.",
    props: [
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl' | 'fluid'",
        default: "'lg'",
        description: "Largura máxima de leitura.",
      },
      {
        name: "centered",
        type: "boolean",
        default: "true",
        description: "Centraliza horizontalmente na viewport (margin inline auto).",
      },
    ],
    slots: [{ name: "default", description: "Conteúdo interno da página." }],
    emits: [],
    tokens: [
      {
        name: "--ms-layout-container-max-lg",
        default: "1152px",
        description: "Largura máxima container lg.",
      },
    ],
  },
  separators: {
    name: "MsSeparator",
    category: "Layout & Superfícies",
    description:
      "Divisor semântico horizontal ou vertical com suporte a texto/rótulo centralizado ou alinhado e espessura configurável.",
    props: [
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "Direção da linha divisória.",
      },
      {
        name: "label",
        type: "string",
        default: "undefined",
        description: "Texto central do divisor (ex: 'OU').",
      },
      {
        name: "tone",
        type: "MsTone",
        default: "'neutral'",
        description: "Tom da cor da linha divisória.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      {
        name: "--ms-color-border-subtle",
        default: "rgba(0,0,0,0.12)",
        description: "Cor da linha.",
      },
    ],
  },
  "empty-states": {
    name: "MsEmptyState",
    category: "Layout & Superfícies",
    description:
      "Mensagem de boas-vindas ou ausência de dados com ilustração/ícone, título, descrição e botões de ação recomendada.",
    props: [
      {
        name: "title",
        type: "string",
        default: "''",
        description: "Título de ausência de registros.",
      },
      {
        name: "description",
        type: "string",
        default: "''",
        description: "Explicação ou orientação para o usuário.",
      },
      {
        name: "variant",
        type: "'default' | 'dashed' | 'bordered'",
        default: "'dashed'",
        description: "Estilo da borda do contêiner.",
      },
    ],
    slots: [
      { name: "icon", description: "Ícone grande central." },
      { name: "actions", description: "Botões de criação ou recarregamento." },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-color-border-subtle",
        default: "rgba(0,0,0,0.15)",
        description: "Borda pontilhada.",
      },
    ],
  },
  "app-shell": {
    name: "MsAppShell",
    category: "Layout & Superfícies",
    description:
      "Estrutura master de layout de aplicações web empresariais organizando Topbar, Sidebar, Navigation Rail, Conteúdo e Rodapé com colapso responsivo.",
    props: [
      {
        name: "sidebarCollapsed",
        type: "boolean",
        default: "false",
        description: "Controla estado colapsado da barra lateral.",
      },
    ],
    slots: [
      { name: "topbar", description: "Barra superior de cabeçalho." },
      { name: "sidebar", description: "Navegação lateral." },
      { name: "default", description: "Área de conteúdo principal." },
    ],
    emits: [],
    tokens: [
      { name: "--ms-layout-topbar-height", default: "56px", description: "Altura do cabeçalho." },
    ],
  },
  pages: {
    name: "MsPage & MsPageHeader",
    category: "Layout & Superfícies",
    description:
      "Padronização de páginas corporativas com título padronizado, subtítulo, trilha de navegação (breadcrumbs) e barra de ações rápidas.",
    props: [
      { name: "title", type: "string", default: "''", description: "Título da página." },
      {
        name: "subtitle",
        type: "string",
        default: "undefined",
        description: "Subtítulo explicativo.",
      },
    ],
    slots: [
      { name: "breadcrumbs", description: "Trilha de navegação superior." },
      { name: "actions", description: "Botões de ação da página." },
      { name: "default", description: "Conteúdo da tela." },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-typography-size-2xl",
        default: "24px",
        description: "Tamanho da fonte do título.",
      },
    ],
  },

  // --- DADOS & ESTRUTURA ---
  tables: {
    name: "MsTable",
    category: "Dados & Estrutura",
    description:
      "Tabela corporativa completa com suporte a cabeçalho fixo (sticky), listras alternadas, bordas entre células, ordenação por coluna e densidades de xs a xl.",
    props: [
      {
        name: "variant",
        type: "'default' | 'surface' | 'flush'",
        default: "'surface'",
        description: "Estilo do invólucro da tabela.",
      },
      {
        name: "density",
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        description: "Espaçamento interno das células.",
      },
      {
        name: "striped",
        type: "boolean",
        default: "false",
        description: "Aplica listras alternadas nas linhas.",
      },
      {
        name: "hoverable",
        type: "boolean",
        default: "true",
        description: "Destaque ao passar o cursor sobre as linhas.",
      },
      {
        name: "stickyHeader",
        type: "boolean",
        default: "false",
        description: "Mantém cabeçalho fixo durante rolagem longa.",
      },
    ],
    slots: [{ name: "default", description: "MsTableHead, MsTableBody e MsTableFooter." }],
    emits: [],
    tokens: [
      {
        name: "--ms-color-border-subtle",
        default: "rgba(0,0,0,0.08)",
        description: "Bordas das células.",
      },
    ],
  },
  timeline: {
    name: "MsTimeline",
    category: "Dados & Estrutura",
    description:
      "Linha do tempo vertical para rastreamento de pedidos, histórico de alterações de auditoria e marcos de projetos nos 8 tons da marca.",
    props: [
      {
        name: "items",
        type: "MsTimelineItemData[]",
        default: "[]",
        description: "Lista de eventos da linha do tempo.",
      },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom padrão dos marcadores (8 tons da marca).",
      },
    ],
    slots: [{ name: "default", description: "Itens manuais MsTimelineItem." }],
    emits: [],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor da linha e nós." },
    ],
  },
  ratings: {
    name: "MsRating",
    category: "Dados & Estrutura",
    description:
      "Seletor de avaliação por estrelas com suporte a meias-estrelas, modo somente leitura e contagem personalizável.",
    props: [
      { name: "modelValue", type: "number", default: "0", description: "Pontuação atual." },
      { name: "max", type: "number", default: "5", description: "Quantidade total de estrelas." },
      {
        name: "readonly",
        type: "boolean",
        default: "false",
        description: "Modo somente exibição sem interação.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "(val: number)",
        description: "Disparado ao selecionar nota.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-warning",
        default: "#ff9f43",
        description: "Cor das estrelas preenchidas.",
      },
    ],
  },
  "animated-numbers": {
    name: "MsAnimatedNumber",
    category: "Dados & Estrutura",
    description:
      "Contador numérico animado para métricas de dashboards, valores monetários (R$) e taxas de conversão com easing suave.",
    props: [
      { name: "value", type: "number", default: "0", description: "Valor numérico final." },
      {
        name: "duration",
        type: "number",
        default: "1500",
        description: "Duração da transição em milissegundos.",
      },
      {
        name: "format",
        type: "'currency' | 'percent' | 'integer'",
        default: "'integer'",
        description: "Regra de formatação do valor.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      { name: "--ms-font-mono", default: "monospace", description: "Fonte numérica tabular." },
    ],
  },
  lists: {
    name: "MsList & MsListGroup",
    category: "Dados & Estrutura",
    description:
      "Listas interativas e grupos de itens para feeds de atividades, diretórios e seleções com suporte a badges, prefixos e sufixos.",
    props: [
      {
        name: "variant",
        type: "'default' | 'card' | 'bordered'",
        default: "'bordered'",
        description: "Estilo do contêiner da lista.",
      },
      {
        name: "density",
        type: "'compact' | 'normal' | 'spacious'",
        default: "'normal'",
        description: "Espaçamento vertical entre itens.",
      },
    ],
    slots: [{ name: "default", description: "Itens MsListItem." }],
    emits: [],
    tokens: [{ name: "--ms-radius-md", default: "8px", description: "Raio do grupo." }],
  },
  steppers: {
    name: "MsStepper",
    category: "Dados & Estrutura",
    description:
      "Indicador de passos para assistentes (wizards), fluxos de checkout e cadastros multipartes com estados concluído, ativo e erro.",
    props: [
      {
        name: "active",
        type: "number",
        default: "0",
        description: "Índice da etapa atual (base zero).",
      },
      {
        name: "steps",
        type: "Array<{ title: string, description?: string }>",
        default: "[]",
        description: "Lista das etapas do fluxo.",
      },
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "Direção de disposição das etapas.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:active",
        payload: "(index: number)",
        description: "Disparado ao avançar ou clicar na etapa.",
      },
    ],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor do passo concluído." },
    ],
  },
  trees: {
    name: "MsTree",
    category: "Dados & Estrutura",
    description:
      "Visualizador de estruturas hierárquicas e sistemas de arquivos com expansão/colapso recursivo, seleção de nós e linhas guia.",
    props: [
      {
        name: "nodes",
        type: "MsTreeNodeData[]",
        default: "[]",
        description: "Árvore de nós aninhados { key, label, children }.",
      },
      {
        name: "expandedKeys",
        type: "string[]",
        default: "[]",
        description: "Chaves dos nós expandidos.",
      },
      {
        name: "selectedKey",
        type: "string",
        default: "undefined",
        description: "Chave do nó selecionado.",
      },
    ],
    slots: [],
    emits: [
      { name: "select", payload: "(key: string)", description: "Disparado ao selecionar um nó." },
    ],
    tokens: [
      {
        name: "--ms-color-primary",
        default: "#2e86de",
        description: "Destaque do nó selecionado.",
      },
    ],
  },
  "context-menus": {
    name: "MsContextMenu",
    category: "Dados & Estrutura",
    description:
      "Menu de contexto disparado pelo botão direito do mouse com coordenadas dinâmicas, suporte a ícones, atalhos kbd e ação perigosa.",
    props: [
      {
        name: "items",
        type: "MsContextMenuItem[]",
        default: "[]",
        description: "Itens do menu de contexto.",
      },
    ],
    slots: [{ name: "default", description: "Área alvo que escuta o evento contextmenu." }],
    emits: [
      { name: "select", payload: "(id: string)", description: "Disparado ao clicar em uma opção." },
    ],
    tokens: [{ name: "--ms-z-index-dropdown", default: "1000", description: "Elevação do menu." }],
  },
  "chat-bubbles": {
    name: "MsChatBubble",
    category: "Dados & Estrutura",
    description:
      "Balões de mensagens para chats de suporte ao cliente, assistentes de IA e colaboração corporativa com status de entrega e timestamps.",
    props: [
      {
        name: "placement",
        type: "'start' | 'end'",
        default: "'start'",
        description: "Lado do balão (start = recebido, end = enviado).",
      },
      {
        name: "tone",
        type: "MsTone",
        default: "'primary'",
        description: "Tom da mensagem enviada (8 tons da marca).",
      },
      {
        name: "time",
        type: "string",
        default: "undefined",
        description: "Horário de envio (ex: '14:20').",
      },
    ],
    slots: [
      { name: "default", description: "Texto da mensagem." },
      { name: "avatar", description: "Foto do remetente." },
    ],
    emits: [],
    tokens: [{ name: "--ms-radius-lg", default: "12px", description: "Curvatura do balão." }],
  },
  carousels: {
    name: "MsCarousel",
    category: "Dados & Estrutura",
    description:
      "Carrossel deslizante com navegação por setas, pontos de paginação (dots), autoplay inteligente e arraste por toque em mobile.",
    props: [
      {
        name: "autoplay",
        type: "boolean",
        default: "false",
        description: "Avanço automático dos slides.",
      },
      {
        name: "interval",
        type: "number",
        default: "4000",
        description: "Intervalo em milissegundos entre slides.",
      },
      {
        name: "loop",
        type: "boolean",
        default: "true",
        description: "Retorna ao início ao atingir o final.",
      },
    ],
    slots: [{ name: "default", description: "Conjunto de slides MsCarouselSlide." }],
    emits: [
      { name: "change", payload: "(index: number)", description: "Disparado ao mudar de slide." },
    ],
    tokens: [
      {
        name: "--ms-motion-duration-moderate",
        default: "300ms",
        description: "Duração da transição.",
      },
    ],
  },
  docks: {
    name: "MsDock",
    category: "Dados & Estrutura",
    description:
      "Barra de atalhos em estilo dock com efeito de magnificação pelo cursor do mouse e tooltips de dica integrados.",
    props: [
      {
        name: "position",
        type: "'bottom' | 'top' | 'left' | 'right'",
        default: "'bottom'",
        description: "Posicionamento do dock na tela.",
      },
      {
        name: "magnification",
        type: "boolean",
        default: "true",
        description: "Ativa expansão proporcional dos ícones ao aproximar o mouse.",
      },
    ],
    slots: [{ name: "default", description: "Itens MsDockItem." }],
    emits: [],
    tokens: [
      {
        name: "--ms-elevation-overlay",
        default: "0 8px 32px rgba(0,0,0,0.18)",
        description: "Sombra do dock.",
      },
    ],
  },
  "scroll-spies": {
    name: "MsScrollSpy",
    category: "Dados & Estrutura",
    description:
      "Monitoramento automático de rolagem de página com atualização em tempo real do item ativo no índice de conteúdos.",
    props: [
      {
        name: "items",
        type: "MsScrollSpyItem[]",
        default: "[]",
        description: "Seções monitoradas { id, label }.",
      },
      {
        name: "offset",
        type: "number",
        default: "80",
        description: "Deslocamento em pixels a partir do topo.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "change",
        payload: "(activeId: string)",
        description: "Disparado ao atingir uma nova seção na leitura.",
      },
    ],
    tokens: [
      { name: "--ms-color-primary", default: "#2e86de", description: "Cor da marcação ativa." },
    ],
  },
  navbar: {
    name: "MsNavbar",
    category: "Ações & Navegação",
    description:
      "Barra de navegação superior responsiva para cabeçalhos corporativos e portais. Suporta 8 tons semânticos de marca, posições fixa, estática, sticky e floating, variantes de vidro (glass) com blur, slots estruturados para logotipo, links e ações rápidas.",
    props: [
      {
        name: "position",
        type: "'static' | 'sticky' | 'fixed'",
        default: "'static'",
        description: "Comportamento de posicionamento da barra na rolagem.",
      },
      {
        name: "variant",
        type: "'default' | 'elevated' | 'bordered' | 'glass'",
        default: "'default'",
        description: "Estilo visual de elevação, contorno ou efeito vidro translúcido.",
      },
      {
        name: "tone",
        type: "'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'default'",
        description: "Tom semântico corporativo aplicado à barra.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala de altura e preenchimento vertical (sm: 48px, md: 56px, lg: 68px).",
      },
      {
        name: "floating",
        type: "boolean",
        default: "false",
        description:
          "Aplica estilo flutuante destacado com margens laterais e bordas arredondadas.",
      },
      {
        name: "shadow",
        type: "boolean | 'none' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "undefined",
        description: "Escala de sombra projetada inferior (sm: 2px, md: 4px, lg: 8px, xl: 16px).",
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        description: "Atalho ergonômico para fixar a barra no topo da tela (position='fixed').",
      },
      {
        name: "container",
        type: "boolean | 'sm' | 'md' | 'lg' | 'xl' | 'fluid'",
        default: "undefined",
        description:
          "Envolve o conteúdo em um contêiner responsivo centralizado com largura máxima.",
      },
      {
        name: "mobileMenuOpen",
        type: "boolean",
        default: "undefined",
        description:
          "Controle reativo externo do estado do menu móvel (suporta v-model:mobileMenuOpen).",
      },
    ],
    slots: [
      { name: "brand", description: "Logotipo corporativo, marca ou identificador da aplicação." },
      { name: "default", description: "Links principais de navegação e menus dropdown centrais." },
      {
        name: "actions",
        description: "Botões de ação rápida, busca, notificações e avatar do usuário.",
      },
      { name: "mobile-toggle", description: "Ícone/botão de alternância do menu móvel." },
      {
        name: "mobile-menu",
        description: "Conteúdo customizado para o painel de menu móvel expansível.",
      },
    ],
    emits: [
      {
        name: "update:mobileMenuOpen",
        description: "Disparado quando o estado do menu móvel é alternado.",
      },
    ],
    tokens: [
      { name: "--ms-navbar-height", default: "56px", description: "Altura padrão da barra." },
      {
        name: "--ms-navbar-shadow",
        default: "var(--ms-elevation-1)",
        description: "Sombra projetada inferior.",
      },
    ],
  },
  sidebar: {
    name: "MsSidebar",
    category: "Ações & Navegação",
    description:
      "Painel de navegação lateral retrátil multi-estado. Suporta 3 larguras (compact: 68px mini rail, normal: 260px, wide: 320px), lados esquerdo ou direito, modo floating, recolhimento controlado (v-model:collapsed) e slots para cabeçalho e rodapé.",
    props: [
      {
        name: "collapsed",
        type: "boolean",
        default: "false",
        description: "Define se o painel está colapsado no modo mini rail.",
      },
      {
        name: "side",
        type: "'left' | 'right'",
        default: "'left'",
        description: "Lado de ancoragem da barra lateral.",
      },
      {
        name: "position",
        type: "'sticky' | 'fixed' | 'static'",
        default: "'sticky'",
        description: "Comportamento de posicionamento e rolagem.",
      },
      {
        name: "width",
        type: "'compact' | 'normal' | 'wide'",
        default: "'normal'",
        description: "Largura do painel (compact: 68px, normal: 260px, wide: 320px).",
      },
      {
        name: "variant",
        type: "'default' | 'bordered' | 'raised' | 'glass'",
        default: "'default'",
        description: "Estilo visual e elevação do painel lateral.",
      },
      {
        name: "tone",
        type: "'default' | 'neutral' | 'primary' | 'accent'",
        default: "'default'",
        description: "Tom semântico corporativo aplicado à barra lateral.",
      },
      {
        name: "showToggle",
        type: "boolean",
        default: "true",
        description: "Exibe botão integrado de alternância de recolhimento no topo.",
      },
    ],
    slots: [
      { name: "header", description: "Área superior com logotipo e controle de recolhimento." },
      { name: "default", description: "Corpo do painel para links ou MsSidebarMenu aninhado." },
      { name: "footer", description: "Área inferior de rodapé com perfil ou versão." },
    ],
    emits: [
      {
        name: "update:collapsed",
        description: "Disparado ao alternar o estado de recolhimento da barra lateral.",
      },
    ],
    tokens: [
      {
        name: "--ms-sidebar-width",
        default: "260px",
        description: "Largura padrão do painel lateral.",
      },
      { name: "--ms-z-index-sidebar", default: "90", description: "Z-index do painel lateral." },
    ],
  },
  footer: {
    name: "MsFooter",
    category: "Layout & Superfícies",
    description:
      "Rodapé semântico corporativo e institucional. Oferece layouts para multi-coluna com grid responsivo, barra compacta, modo simples e centralizado, com variantes sunken (rebaixada) e inverse (alto contraste), suporte a sombras superiores e contêiner responsivo.",
    props: [
      {
        name: "layout",
        type: "'simple' | 'compact' | 'centered' | 'multi-column'",
        default: "'simple'",
        description: "Disposição estrutural dos elementos do rodapé.",
      },
      {
        name: "variant",
        type: "'default' | 'bordered' | 'sunken' | 'inverse'",
        default: "'default'",
        description:
          "Estilo visual (padrão, borda reforçada, fundo rebaixado ou contraste invertido).",
      },
      {
        name: "tone",
        type: "'default' | 'neutral' | 'primary' | 'accent'",
        default: "'default'",
        description: "Tom semântico institucional aplicado ao rodapé.",
      },
      {
        name: "shadow",
        type: "boolean | 'none' | 'sm' | 'md' | 'lg'",
        default: "undefined",
        description: "Escala de sombra projetada superior (sm: 2px, md: 4px, lg: 8px).",
      },
      {
        name: "position",
        type: "'static' | 'sticky' | 'fixed'",
        default: "'static'",
        description: "Comportamento de posicionamento e ancoragem do rodapé.",
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        description: "Atalho ergonômico para fixar o rodapé na parte inferior (position='fixed').",
      },
      {
        name: "container",
        type: "boolean | 'sm' | 'md' | 'lg' | 'xl' | 'fluid'",
        default: "undefined",
        description:
          "Envolve o conteúdo do rodapé em contêiner centralizado responsivo com largura máxima.",
      },
      {
        name: "columns",
        type: "MsFooterColumn[]",
        default: "undefined",
        description: "Matriz de colunas com links ({ title, links: [{ label, href }] }).",
      },
      {
        name: "copyright",
        type: "string",
        default: "undefined",
        description: "Texto padrão de direitos autorais exibido no rodapé.",
      },
    ],
    slots: [
      { name: "brand", description: "Logotipo corporativo e texto introdutório." },
      { name: "columns", description: "Bloco customizado de colunas de navegação institucional." },
      { name: "default", description: "Conteúdo livre para layouts simples e customizados." },
      { name: "bottom", description: "Linha inferior com copyright e links de conformidade." },
      { name: "copyright", description: "Texto de direitos autorais customizado." },
      {
        name: "social",
        description: "Área reservada para ícones de redes sociais e certificados.",
      },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-color-surface-sunken",
        default: "#f1f5f9",
        description: "Fundo no modo sunken.",
      },
      {
        name: "--ms-color-surface-inverse",
        default: "#0f172a",
        description: "Fundo no modo inverse.",
      },
      {
        name: "--ms-footer-shadow",
        default: "var(--ms-elevation-1)",
        description: "Sombra superior projetada no rodapé.",
      },
    ],
  },
  scrollbar: {
    name: "MsScrollbar",
    category: "Layout & Superfícies",
    description:
      "Contêiner de rolagem customizado multiplataforma de alto desempenho. Suporta rolagem vertical, horizontal ou bidirecional, 3 espessuras (thin, normal, thick), modo auto com ocultação inteligente do cursor quando em repouso, setas opcionais e personalização de cores do cursor, do trilho e do raio de arredondamento.",
    props: [
      {
        name: "tag",
        type: "string",
        default: "'div'",
        description: "Elemento HTML base renderizado para o contêiner.",
      },
      {
        name: "orientation",
        type: "'vertical' | 'horizontal' | 'both'",
        default: "'vertical'",
        description: "Direção da rolagem permitida.",
      },
      {
        name: "size",
        type: "'thin' | 'normal' | 'thick'",
        default: "'normal'",
        description: "Espessura da barra de rolagem (thin: 4px, normal: 8px, thick: 12px).",
      },
      {
        name: "visibility",
        type: "'auto' | 'always' | 'none'",
        default: "'auto'",
        description:
          "Visibilidade da barra (auto: surge ao rolar e oculta no repouso, always: visível, none: invisível com rolagem ativa).",
      },
      {
        name: "tone",
        type: "'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'default'",
        description: "Tom semântico oficial da marca aplicado ao cursor (thumb) da rolagem.",
      },
      {
        name: "arrows",
        type: "boolean",
        default: "false",
        description:
          "Exibe setas de navegação nos extremos da barra de rolagem (ocultas por padrão).",
      },
      {
        name: "trackColor",
        type: "string",
        default: "undefined",
        description: "Cor customizada de fundo do trilho (sobrescreve --ms-scrollbar-track).",
      },
      {
        name: "thumbColor",
        type: "string",
        default: "undefined",
        description: "Cor customizada do cursor (thumb, sobrescreve --ms-scrollbar-thumb).",
      },
      {
        name: "thumbRadius",
        type: "string",
        default: "undefined",
        description: "Raio de curvatura das bordas do cursor (ex: '9999px', '8px', '0px').",
      },
      {
        name: "radius",
        type: "string",
        default: "undefined",
        description: "Alias para thumbRadius.",
      },
      {
        name: "maxHeight",
        type: "string | number",
        default: "undefined",
        description: "Altura máxima limite do contêiner (ex: 300 ou '300px').",
      },
      {
        name: "maxWidth",
        type: "string | number",
        default: "undefined",
        description: "Largura máxima limite do contêiner.",
      },
    ],
    slots: [{ name: "default", description: "Conteúdo rolável contido no elemento." }],
    emits: [],
    tokens: [
      {
        name: "--ms-scrollbar-size",
        default: "8px",
        description: "Largura/altura da barra de rolagem.",
      },
      {
        name: "--ms-scrollbar-track",
        default: "transparent",
        description: "Cor de fundo do trilho da rolagem.",
      },
      {
        name: "--ms-scrollbar-thumb",
        default: "rgba(148, 163, 184, 0.45)",
        description: "Cor base do thumb.",
      },
      {
        name: "--ms-scrollbar-thumb-hover",
        default: "rgba(100, 116, 139, 0.75)",
        description: "Cor no hover.",
      },
      {
        name: "--ms-scrollbar-radius",
        default: "9999px",
        description: "Raio de curvatura do cursor (thumb).",
      },
    ],
  },

  // --- NOVOS COMPONENTES (BATCH 9 - 14) ---
  code: {
    name: "MsCode",
    category: "Tipografia & Conteúdo",
    description:
      "Snippet inline de código com alta densidade, suporte a cópia rápida e variantes de destaque.",
    props: [
      {
        name: "tone",
        type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",
        default: "'default'",
        description: "Tom semântico do código.",
      },
      {
        name: "variant",
        type: "'subtle' | 'outline' | 'solid'",
        default: "'subtle'",
        description: "Variante visual de fundo e borda.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala de tamanho da fonte.",
      },
      {
        name: "copyable",
        type: "boolean",
        default: "false",
        description: "Exibe botão de cópia rápida integrado.",
      },
    ],
    slots: [{ name: "default", description: "Conteúdo textual do snippet de código." }],
    emits: [
      {
        name: "copy",
        payload: "text: string",
        description: "Disparado ao copiar o conteúdo com sucesso.",
      },
    ],
    tokens: [
      {
        name: "--ms-font-mono",
        default: "IBM Plex Mono, monospace",
        description: "Família tipográfica monoespaçada.",
      },
    ],
  },

  "code-block": {
    name: "MsCodeBlock",
    category: "Tipografia & Conteúdo",
    description:
      "Bloco de código syntax multi-linhas com calha de numeração de linhas, cabeçalho de metadados e botão de cópia.",
    props: [
      { name: "code", type: "string", default: "''", description: "Código-fonte a ser exibido." },
      {
        name: "language",
        type: "string",
        default: "''",
        description: "Linguagem para exibição no badge do cabeçalho.",
      },
      {
        name: "filename",
        type: "string",
        default: "''",
        description: "Nome do arquivo exibido no cabeçalho.",
      },
      {
        name: "showLineNumbers",
        type: "boolean",
        default: "false",
        description: "Exibe os números das linhas.",
      },
      {
        name: "copyable",
        type: "boolean",
        default: "true",
        description: "Habilita botão de cópia na barra superior.",
      },
      {
        name: "collapsible",
        type: "boolean",
        default: "false",
        description: "Permite expandir/recolher blocos longos.",
      },
    ],
    slots: [
      { name: "default", description: "Slot alternativo para o código bruto." },
      { name: "header", description: "Substitui os metadados do cabeçalho." },
      { name: "actions", description: "Ações adicionais na barra superior." },
    ],
    emits: [
      { name: "copy", payload: "code: string", description: "Disparado após a cópia do código." },
    ],
    tokens: [
      {
        name: "--ms-color-surface-sunken",
        default: "#f1f5f9",
        description: "Superfície do bloco de código.",
      },
    ],
  },

  link: {
    name: "MsLink",
    category: "Tipografia & Conteúdo",
    description:
      "Hiperlink semântico e acessível com detecção automática de links externos, variantes e estilos de sublinhado.",
    props: [
      { name: "href", type: "string", default: "''", description: "Destino do hiperlink." },
      {
        name: "variant",
        type: "'default' | 'primary' | 'muted' | 'subtle' | 'danger'",
        default: "'primary'",
        description: "Variante de cor corporativa.",
      },
      {
        name: "underline",
        type: "'always' | 'hover' | 'none'",
        default: "'hover'",
        description: "Comportamento da linha de sublinhado.",
      },
      {
        name: "external",
        type: "boolean",
        default: "undefined",
        description: "Força o link como externo (auto-detecta http/https).",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita interação e acessibilidade do link.",
      },
    ],
    slots: [
      { name: "default", description: "Texto do link." },
      { name: "prefix", description: "Ícone ou elemento antes do texto." },
      { name: "suffix", description: "Ícone ou elemento após o texto." },
    ],
    emits: [
      { name: "click", payload: "event: MouseEvent", description: "Disparado no clique do link." },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor base dos links primários.",
      },
    ],
  },

  blockquote: {
    name: "MsBlockquote",
    category: "Tipografia & Conteúdo",
    description:
      "Citação e testemunhal semântico com atribuição de autor, cargo, avatar e tons de destaque.",
    props: [
      { name: "author", type: "string", default: "''", description: "Nome do autor da citação." },
      {
        name: "authorRole",
        type: "string",
        default: "''",
        description: "Cargo ou organização do autor.",
      },
      {
        name: "authorAvatar",
        type: "string",
        default: "''",
        description: "URL da imagem de avatar do autor.",
      },
      { name: "cite", type: "string", default: "''", description: "URL ou referência da fonte." },
      {
        name: "tone",
        type: "'default' | 'primary' | 'accent' | 'warning' | 'info'",
        default: "'default'",
        description: "Tom da borda de destaque.",
      },
      {
        name: "variant",
        type: "'bordered' | 'card' | 'minimal' | 'filled'",
        default: "'bordered'",
        description: "Estilo do contêiner da citação.",
      },
    ],
    slots: [
      { name: "default", description: "Texto principal da citação." },
      { name: "author", description: "Customização do autor." },
      { name: "role", description: "Customização do cargo." },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-color-border-strong",
        default: "Border Strong",
        description: "Cor da borda lateral do bloco.",
      },
    ],
  },

  label: {
    name: "MsLabel",
    category: "Tipografia & Conteúdo",
    description:
      "Rótulo de formulário com marca de obrigatoriedade, badge opcional e ícone com tooltip integrado.",
    props: [
      {
        name: "for",
        type: "string",
        default: "undefined",
        description: "ID do input vinculado (acessibilidade HTML).",
      },
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Exibe o asterisco vermelho de obrigatoriedade.",
      },
      {
        name: "optional",
        type: "boolean",
        default: "false",
        description: "Exibe o texto auxiliar '(opcional)'.",
      },
      {
        name: "tooltip",
        type: "string",
        default: "undefined",
        description: "Texto explicativo exibido no hover do ícone de ajuda.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Tamanho tipográfico do rótulo.",
      },
    ],
    slots: [
      { name: "default", description: "Texto do rótulo." },
      { name: "tooltip", description: "Conteúdo customizado de ajuda." },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-color-status-danger",
        default: "Brand Danger",
        description: "Cor do asterisco obrigatório.",
      },
    ],
  },

  truncate: {
    name: "MsTruncate",
    category: "Tipografia & Conteúdo",
    description:
      "Truncamento inteligente de textos longos com line-clamp multilinhas, tooltip no overflow e alternador 'Ver mais'.",
    props: [
      {
        name: "text",
        type: "string",
        default: "''",
        description: "Texto completo a ser truncado.",
      },
      {
        name: "lines",
        type: "number",
        default: "1",
        description: "Quantidade de linhas permitidas antes do truncamento.",
      },
      {
        name: "position",
        type: "'end' | 'middle'",
        default: "'end'",
        description: "Posição das reticências (fim ou meio do texto).",
      },
      {
        name: "expandable",
        type: "boolean",
        default: "false",
        description: "Renderiza botão alternador 'Ver mais / Ver menos'.",
      },
      {
        name: "expanded",
        type: "boolean",
        default: "false",
        description: "Estado de expansão (v-model:expanded).",
      },
    ],
    slots: [
      { name: "default", description: "Texto a ser truncado." },
      { name: "expand-trigger", description: "Gatilho customizado de expansão." },
    ],
    emits: [
      {
        name: "update:expanded",
        payload: "value: boolean",
        description: "Atualiza o estado de expansão.",
      },
      {
        name: "toggle",
        payload: "expanded: boolean",
        description: "Disparado ao alternar a expansão.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor do botão de expansão.",
      },
    ],
  },

  "password-input": {
    name: "MsPasswordInput",
    category: "Formulários Avançados",
    description:
      "Campo de senha corporativo com alternador visual de visibilidade, medidor animado de entropia e checklist de regras.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "''",
        description: "Valor da senha inserida.",
      },
      {
        name: "showToggle",
        type: "boolean",
        default: "true",
        description: "Exibe o ícone de alternância de visualização.",
      },
      {
        name: "showStrengthMeter",
        type: "boolean",
        default: "false",
        description: "Renderiza a barra colorida de segurança.",
      },
      {
        name: "showCriteria",
        type: "boolean",
        default: "false",
        description: "Exibe a lista dinâmica de critérios atendidos.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "value: string",
        description: "Emite o valor digitado.",
      },
      {
        name: "strength-change",
        payload: "score: number",
        description: "Emite a pontuação de força (0 a 4).",
      },
    ],
    tokens: [
      {
        name: "--ms-color-status-success",
        default: "Brand Success",
        description: "Cor da barra para senha forte.",
      },
    ],
  },

  "masked-input": {
    name: "MsMaskedInput",
    category: "Formulários Avançados",
    description:
      "Input com formatação por máscara automática para CPF, CNPJ, telefones, CEPs, cartões e formatos customizados.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "''",
        description: "Valor com máscara aplicada.",
      },
      {
        name: "unmasked",
        type: "string",
        default: "''",
        description: "Valor bruto sem caracteres de máscara.",
      },
      {
        name: "mask",
        type: "'cpf' | 'cnpj' | 'phone' | 'date' | 'cep' | 'credit-card' | string",
        default: "''",
        description: "Preset ou padrão de máscara customizado.",
      },
      {
        name: "clearable",
        type: "boolean",
        default: "false",
        description: "Exibe botão para limpar campo preenchido.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "value: string",
        description: "Emite o valor formatado.",
      },
      {
        name: "update:unmasked",
        payload: "value: string",
        description: "Emite o valor cru sem máscara.",
      },
      {
        name: "complete",
        payload: "value: string",
        description: "Disparado quando todos os dígitos da máscara são preenchidos.",
      },
    ],
    tokens: [
      {
        name: "--ms-control-height-md",
        default: "40px",
        description: "Altura do campo de formulário.",
      },
    ],
  },

  "pin-input": {
    name: "MsPinInput",
    category: "Formulários Avançados",
    description:
      "Entrada segmentada para códigos de confirmação PIN e OTP com avanço automático, backspace e suporte a colar código.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "''",
        description: "Valor do código concatenado.",
      },
      {
        name: "length",
        type: "number",
        default: "4",
        description: "Quantidade de caixas de entrada de dígitos.",
      },
      {
        name: "mask",
        type: "boolean",
        default: "false",
        description: "Oculta os dígitos como password.",
      },
      {
        name: "separator",
        type: "string",
        default: "''",
        description: "Caractere divisor intermediário (ex: '-').",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "value: string",
        description: "Emite o código completo.",
      },
      {
        name: "complete",
        payload: "value: string",
        description: "Disparado ao preencher todos os campos.",
      },
    ],
    tokens: [
      {
        name: "--ms-radius-md",
        default: "Radius Medium",
        description: "Arredondamento das caixas de PIN.",
      },
    ],
  },

  "form-wizard": {
    name: "MsFormWizard",
    category: "Formulários Avançados",
    description:
      "Assistente de formulário multi-etapas com stepper de navegação, validação síncrona/assíncrona e botões automáticos.",
    props: [
      {
        name: "steps",
        type: "MsWizardStep[]",
        default: "[]",
        description: "Definição de títulos e etapas do assistente.",
      },
      {
        name: "modelValue",
        type: "number",
        default: "0",
        description: "Índice da etapa ativa atual.",
      },
      {
        name: "linear",
        type: "boolean",
        default: "true",
        description: "Obriga a completar as etapas em sequência linear.",
      },
    ],
    slots: [
      { name: "default", description: "Conteúdo da etapa corrente." },
      { name: "footer", description: "Barra de navegação customizada." },
    ],
    emits: [
      {
        name: "update:modelValue",
        payload: "index: number",
        description: "Emite o novo índice ativo.",
      },
      {
        name: "step-change",
        payload: "from: number, to: number",
        description: "Disparado na troca de etapa.",
      },
      { name: "finish", payload: "void", description: "Disparado ao concluir a última etapa." },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor do passo ativo no stepper.",
      },
    ],
  },

  pagination: {
    name: "MsPagination",
    category: "Navegação & Paginação",
    description:
      "Barra de paginação enterprise completa com elipses adaptativas, botões primeiro/último, seletor de itens e jumper numérico.",
    props: [
      {
        name: "total",
        type: "number",
        default: "0",
        description: "Quantidade total de registros na base.",
      },
      { name: "pageSize", type: "number", default: "10", description: "Registros por página." },
      {
        name: "currentPage",
        type: "number",
        default: "1",
        description: "Página ativa atual (v-model:currentPage).",
      },
      {
        name: "showEdges",
        type: "boolean",
        default: "true",
        description: "Exibe botões para Primeira e Última página.",
      },
      {
        name: "showJumper",
        type: "boolean",
        default: "false",
        description: "Exibe campo para salto direto a uma página específica.",
      },
    ],
    slots: [{ name: "total", description: "Customização da legenda de total de itens." }],
    emits: [
      {
        name: "update:currentPage",
        payload: "page: number",
        description: "Emite a nova página selecionada.",
      },
      {
        name: "change",
        payload: "page: number",
        description: "Disparado ao alterar a página ativa.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor do botão da página ativa.",
      },
    ],
  },

  "toggle-group": {
    name: "MsToggleGroup",
    category: "Navegação & Paginação",
    description:
      "Agrupamento de botões de alternância com seleção única ou múltipla, variantes visuais e suporte total a teclado.",
    props: [
      {
        name: "modelValue",
        type: "string | string[]",
        default: "undefined",
        description: "Valor(es) selecionado(s).",
      },
      {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Habilita seleção de múltiplos itens simultâneos.",
      },
      {
        name: "variant",
        type: "'solid' | 'outline'",
        default: "'solid'",
        description: "Variante de acabamento do contêiner.",
      },
      {
        name: "items",
        type: "MsToggleGroupItemOption[]",
        default: "[]",
        description: "Opções rápidas pré-configuradas.",
      },
    ],
    slots: [{ name: "default", description: "Itens filhos MsToggleGroupItem customizados." }],
    emits: [
      {
        name: "update:modelValue",
        payload: "val: string | string[]",
        description: "Emite o novo valor da seleção.",
      },
      {
        name: "change",
        payload: "val: string | string[]",
        description: "Disparado em qualquer alteração de escolha.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-surface-sunken",
        default: "Surface Sunken",
        description: "Fundo base do contêiner de toggles.",
      },
    ],
  },

  collapse: {
    name: "MsCollapse",
    category: "Navegação & Paginação",
    description:
      "Painel retrátil independente com animação fluida por CSS Grid 0fr-1fr, chevron rotativo e cabeçalho expansível.",
    props: [
      {
        name: "modelValue",
        type: "boolean",
        default: "false",
        description: "Estado aberto/fechado (v-model).",
      },
      {
        name: "title",
        type: "string",
        default: "''",
        description: "Título exibido na barra de acionamento.",
      },
      {
        name: "variant",
        type: "'bordered' | 'card' | 'ghost'",
        default: "'bordered'",
        description: "Estilo do contêiner.",
      },
    ],
    slots: [
      { name: "default", description: "Conteúdo retrátil protegido pela animação." },
      { name: "header", description: "Customização total da barra de disparo." },
      { name: "extra", description: "Ações à direita ao lado do chevron." },
    ],
    emits: [
      {
        name: "update:modelValue",
        payload: "open: boolean",
        description: "Emite o novo estado aberto/fechado.",
      },
      { name: "toggle", payload: "open: boolean", description: "Disparado ao alternar o painel." },
    ],
    tokens: [
      {
        name: "--ms-motion-duration-normal",
        default: "200ms",
        description: "Duração da animação de abertura.",
      },
    ],
  },

  "icon-picker": {
    name: "MsIconPicker",
    category: "Seletores & Comandos",
    description:
      "Seletor de ícones popover com filtro de pesquisa textual, navegação por abas de categorias e grade interativa.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "''",
        description: "Identificador do ícone selecionado.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "'Selecione um ícone...'",
        description: "Texto no gatilho sem seleção.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Bloqueia a abertura do seletor.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "id: string",
        description: "Emite o identificador do ícone.",
      },
      {
        name: "select",
        payload: "icon: MsIconItem",
        description: "Disparado com o objeto do ícone selecionado.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-surface-elevated",
        default: "#ffffff",
        description: "Fundo flutuante do popover de ícones.",
      },
    ],
  },

  "emoji-picker": {
    name: "MsEmojiPicker",
    category: "Seletores & Comandos",
    description:
      "Seletor de emojis Unicode com classificação por categorias (Carinhas, Gestos, Símbolos) e campo de busca instantânea.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "''",
        description: "Emoji selecionado em formato caractere Unicode.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "'😀'",
        description: "Placeholder do botão disparador.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "emoji: string",
        description: "Emite o emoji escolhido.",
      },
      {
        name: "select",
        payload: "item: MsEmojiItem",
        description: "Disparado com os metadados do emoji.",
      },
    ],
    tokens: [
      {
        name: "--ms-shadow-md",
        default: "Shadow Medium",
        description: "Sombra do dropdown de emojis.",
      },
    ],
  },

  "date-picker": {
    name: "MsDatePicker",
    category: "Seletores & Comandos",
    description:
      "Seletor de datas moderno com popover de calendário mensal, atalhos de seleção rápida e validação de limites.",
    props: [
      {
        name: "modelValue",
        type: "string",
        default: "''",
        description: "Data selecionada no formato ISO 'YYYY-MM-DD'.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "'Selecione uma data...'",
        description: "Texto quando nenhuma data está escolhida.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "date: string",
        description: "Emite a data escolhida.",
      },
      { name: "change", payload: "date: string", description: "Disparado ao confirmar a seleção." },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor do dia ativo selecionado.",
      },
    ],
  },

  "command-palette": {
    name: "MsCommandPalette",
    category: "Seletores & Comandos",
    description:
      "Central de comandos modal acionada via atalho de teclado global (Cmd+K / Ctrl+K) com pesquisa rápida e badges KBD.",
    props: [
      {
        name: "modelValue",
        type: "boolean",
        default: "false",
        description: "Estado visível do modal de comando.",
      },
      {
        name: "items",
        type: "MsCommandItem[]",
        default: "undefined",
        description: "Lista de comandos e ações disponíveis.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "'Digite um comando ou pesquise...'",
        description: "Texto no campo de busca.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "open: boolean",
        description: "Atualiza o estado aberto/fechado do modal.",
      },
      {
        name: "select",
        payload: "item: MsCommandItem",
        description: "Disparado ao executar um comando.",
      },
    ],
    tokens: [
      {
        name: "--ms-font-mono",
        default: "IBM Plex Mono",
        description: "Tipografia dos badges de atalho de tecla.",
      },
    ],
  },

  canvas: {
    name: "MsCanvas",
    category: "Superfícies & Mídia",
    description:
      "Superfície paramétrica com padrões decorativos vetoriais (pontos, grade, cruzes, linhas) para workspaces e seções hero.",
    props: [
      {
        name: "pattern",
        type: "'dots' | 'grid' | 'cross' | 'lines'",
        default: "'dots'",
        description: "Padrão geométrico renderizado no fundo.",
      },
      {
        name: "size",
        type: "number",
        default: "20",
        description: "Espaçamento em pixels da repetição do padrão.",
      },
      {
        name: "interactive",
        type: "boolean",
        default: "false",
        description: "Aplica cursor tátil de arraste de espaço de trabalho.",
      },
    ],
    slots: [{ name: "default", description: "Elementos sobrepostos na tela de trabalho." }],
    emits: [],
    tokens: [
      {
        name: "--ms-color-border-subtle",
        default: "Border Subtle",
        description: "Cor das linhas e cruzes da grade.",
      },
    ],
  },

  "bento-grid": {
    name: "MsBentoGrid",
    category: "Superfícies & Mídia",
    description:
      "Sistema de grade modular Bento Box com controle dinâmico de col-span e row-span para dashboards modernos.",
    props: [
      {
        name: "cols",
        type: "1 | 2 | 3 | 4 | 5 | 6",
        default: "3",
        description: "Quantidade de colunas base do grid.",
      },
    ],
    slots: [{ name: "default", description: "Itens MsBentoItem que compõem o painel." }],
    emits: [],
    tokens: [
      {
        name: "--ms-space-4",
        default: "1rem",
        description: "Espaçamento gap entre os cartões Bento.",
      },
    ],
  },

  "masonry-grid": {
    name: "MsMasonryGrid",
    category: "Superfícies & Mídia",
    description:
      "Grade responsiva estilo Pinterest com distribuição automática e balanceamento vertical uniforme de elementos.",
    props: [
      {
        name: "cols",
        type: "number",
        default: "3",
        description: "Quantidade de colunas do layout.",
      },
      {
        name: "items",
        type: "any[]",
        default: "[]",
        description: "Coleção de itens distribuídos dinamicamente.",
      },
    ],
    slots: [
      { name: "default", description: "Template customizado de renderização para cada cartão." },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-space-4",
        default: "1rem",
        description: "Espaçamento vertical e horizontal entre os cartões.",
      },
    ],
  },

  "split-pane": {
    name: "MsSplitPane",
    category: "Superfícies & Mídia",
    description:
      "Painéis redimensionáveis horizontal ou verticalmente com calha de arraste arrastável por mouse ou toque.",
    props: [
      {
        name: "direction",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "Orientação da divisão dos painéis.",
      },
      {
        name: "split",
        type: "number",
        default: "50",
        description: "Porcentagem da divisão inicial (1 a 99).",
      },
    ],
    slots: [
      { name: "first", description: "Conteúdo do primeiro painel (esquerdo/superior)." },
      { name: "second", description: "Conteúdo do segundo painel (direito/inferior)." },
    ],
    emits: [
      {
        name: "update:split",
        payload: "percentage: number",
        description: "Emite a nova porcentagem do painel.",
      },
      {
        name: "resize",
        payload: "percentage: number",
        description: "Disparado continuamente durante o arraste.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor da calha no estado ativo/arraste.",
      },
    ],
  },

  lightbox: {
    name: "MsLightbox",
    category: "Superfícies & Mídia",
    description:
      "Visualizador de galeria de imagens em tela cheia com overlay escuro, navegação anterior/próximo e atalhos de teclado.",
    props: [
      {
        name: "modelValue",
        type: "boolean",
        default: "false",
        description: "Exibe o visualizador em tela cheia.",
      },
      {
        name: "items",
        type: "MsLightboxItem[]",
        default: "[]",
        description: "Lista de imagens e legendas.",
      },
      {
        name: "index",
        type: "number",
        default: "0",
        description: "Índice da imagem atualmente visualizada.",
      },
    ],
    slots: [],
    emits: [
      {
        name: "update:modelValue",
        payload: "open: boolean",
        description: "Controla a abertura/fechamento.",
      },
      {
        name: "update:index",
        payload: "index: number",
        description: "Emite o índice da imagem ativa.",
      },
    ],
    tokens: [
      {
        name: "--ms-radius-md",
        default: "Radius Medium",
        description: "Arredondamento da imagem em destaque.",
      },
    ],
  },

  dropzone: {
    name: "MsDropzone",
    category: "Superfícies & Mídia",
    description:
      "Área de upload por arraste e solte com estado visual de dragover, lista de cartões de arquivos e botão de remoção.",
    props: [
      {
        name: "accept",
        type: "string",
        default: "'*/*'",
        description: "Filtro de extensões aceitas (ex: 'image/*,.pdf').",
      },
      {
        name: "multiple",
        type: "boolean",
        default: "true",
        description: "Permite arrastar múltiplos arquivos de uma só vez.",
      },
    ],
    slots: [
      { name: "title", description: "Texto principal do gatilho de upload." },
      { name: "subtitle", description: "Legenda e instruções complementares." },
    ],
    emits: [
      {
        name: "files-dropped",
        payload: "files: File[]",
        description: "Disparado ao soltar arquivos válidos na área.",
      },
      {
        name: "file-removed",
        payload: "file: MsDropzoneFile",
        description: "Disparado ao remover um arquivo da lista.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor da borda e ícone no dragover.",
      },
    ],
  },

  marquee: {
    name: "MsMarquee",
    category: "Visual FX & Ações",
    description:
      "Letreiro infinito contínuo e acelerado por GPU com suporte a pausa no hover e máscara gradiente de fade nas bordas.",
    props: [
      {
        name: "speed",
        type: "number",
        default: "25",
        description: "Duração em segundos de um ciclo completo de rolagem.",
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        description: "Inverte o sentido da rolagem da direita para a esquerda.",
      },
      {
        name: "pauseOnHover",
        type: "boolean",
        default: "true",
        description: "Pausa o movimento ao passar o ponteiro do mouse.",
      },
      {
        name: "fade",
        type: "boolean",
        default: "true",
        description: "Aplica máscara translúcida nas extremidades laterais.",
      },
    ],
    slots: [{ name: "default", description: "Conteúdo textual ou conjunto de logos repetidos." }],
    emits: [],
    tokens: [
      {
        name: "--ms-marquee-gap",
        default: "1.5rem",
        description: "Espaçamento entre os elementos do letreiro.",
      },
    ],
  },

  parallax: {
    name: "MsParallax",
    category: "Visual FX & Ações",
    description:
      "Contêiner de efeito visual de paralaxe sincronizado com o scroll da página, conferindo sensação de profundidade 3D.",
    props: [
      {
        name: "speed",
        type: "number",
        default: "0.3",
        description: "Fator multiplicador de velocidade de deslocamento.",
      },
      {
        name: "height",
        type: "string | number",
        default: "'320px'",
        description: "Altura do contêiner com corte de overflow.",
      },
    ],
    slots: [
      {
        name: "background",
        description: "Camada de fundo que se desloca em velocidade alternativa.",
      },
      { name: "default", description: "Conteúdo em primeiro plano." },
    ],
    emits: [],
    tokens: [
      {
        name: "--ms-motion-easing-standard",
        default: "Easing",
        description: "Curva de suavização de movimento.",
      },
    ],
  },

  pointer: {
    name: "MsPointer",
    category: "Visual FX & Ações",
    description:
      "Ponteiro de mouse customizado e magnético que substitui o cursor nativo com efeitos de ponto, anel ou holofote.",
    props: [
      {
        name: "variant",
        type: "'dot' | 'ring' | 'spotlight'",
        default: "'dot'",
        description: "Estilo visual do indicador do cursor.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desativa o efeito de cursor customizado.",
      },
    ],
    slots: [],
    emits: [],
    tokens: [
      {
        name: "--ms-color-interactive-primary",
        default: "Brand Primary",
        description: "Cor do indicador do ponteiro.",
      },
    ],
  },

  fab: {
    name: "MsFab",
    category: "Visual FX & Ações",
    description:
      "Botão de Ação Flutuante (Floating Action Button) ancorado na tela com menu speed-dial de ações secundárias.",
    props: [
      {
        name: "position",
        type: "'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'",
        default: "'bottom-right'",
        description: "Canto da tela onde o botão ficará ancorado.",
      },
      {
        name: "label",
        type: "string",
        default: "''",
        description: "Rótulo textual no modo estendido.",
      },
      { name: "icon", type: "string", default: "'+'", description: "Ícone principal do botão." },
      {
        name: "actions",
        type: "MsFabAction[]",
        default: "[]",
        description: "Lista de ações secundárias do speed-dial.",
      },
    ],
    slots: [{ name: "icon", description: "Ícone customizado do botão." }],
    emits: [
      { name: "click", payload: "void", description: "Disparado no clique do botão principal." },
      {
        name: "action-click",
        payload: "action: MsFabAction",
        description: "Disparado ao selecionar uma ação do speed-dial.",
      },
    ],
    tokens: [
      {
        name: "--ms-shadow-lg",
        default: "Shadow Large",
        description: "Sombra de elevação flutuante do botão FAB.",
      },
    ],
  },

  snippet: {
    name: "MsSnippet",
    category: "Tipografia & Conteúdo",
    description:
      "Contêiner acessível de comandos e trechos de código com suporte a abas de gerenciadores de pacotes, indicador de prompt configurável e botão de cópia com feedback visual integrado.",
    props: [
      {
        name: "code",
        type: "string",
        default: "''",
        description: "Código ou comando único exibido no snippet.",
      },
      {
        name: "tabs",
        type: "MsSnippetItem[]",
        default: "[]",
        description: "Lista de abas de comandos/linguagens para navegação rápida.",
      },
      {
        name: "activeTab",
        type: "string | number",
        default: "0",
        description: "Aba ativa atualmente (v-model:active-tab).",
      },
      {
        name: "prompt",
        type: "string",
        default: "'$ '",
        description: "Símbolo prefixo de linha de comando.",
      },
      {
        name: "copyPrompt",
        type: "boolean",
        default: "false",
        description: "Define se o símbolo de prompt é copiado junto com o código.",
      },
      {
        name: "copyTimeout",
        type: "number",
        default: "2000",
        description: "Tempo em milissegundos para manter o estado 'Copiado!' visível.",
      },
      {
        name: "variant",
        type: "'default' | 'bordered' | 'flat'",
        default: "'default'",
        description: "Estilo visual do contêiner.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala de tamanho e padding.",
      },
      {
        name: "tone",
        type: "'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'",
        default: "'neutral'",
        description: "Tom semântico de realce lateral.",
      },
      {
        name: "wrapLines",
        type: "boolean",
        default: "false",
        description: "Permite quebra automática de linhas extensas.",
      },
      {
        name: "copyable",
        type: "boolean",
        default: "true",
        description: "Exibe o botão interativo de cópia para a área de transferência.",
      },
    ],
    slots: [
      { name: "default", description: "Conteúdo customizado de código." },
      { name: "tab", description: "Renderizador customizado para o rótulo de cada aba." },
      { name: "copy-button", description: "Botão de cópia customizado com slot scope { copied }." },
      { name: "prefix", description: "Prefixo ou ícone customizado no lugar do prompt." },
    ],
    emits: [
      {
        name: "copy",
        payload: "{ code: string, tab?: string | number }",
        description: "Disparado ao copiar o conteúdo com sucesso.",
      },
      {
        name: "tab-change",
        payload: "tab: MsSnippetItem, index: number",
        description: "Disparado ao selecionar uma nova aba.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-surface-sunken",
        default: "Neutral Sunken",
        description: "Fundo base do terminal de comando.",
      },
      {
        name: "--ms-color-surface-raised",
        default: "Neutral Raised",
        description: "Fundo da barra de abas e botão de cópia.",
      },
    ],
  },

  choicebox: {
    name: "MsChoicebox",
    category: "Formulários Avançados",
    description:
      "Seleção interativa de opções em cards estilizados (radio cards e checkbox cards) com título, descrição, badges, preços, ícones e navegação total por teclado.",
    props: [
      {
        name: "modelValue",
        type: "string | number | (string | number)[]",
        default: "undefined",
        description: "Valor vinculado bidirecionalmente via v-model.",
      },
      {
        name: "items",
        type: "MsChoiceboxItemData[]",
        default: "[]",
        description: "Lista de itens a serem renderizados como cards de escolha.",
      },
      {
        name: "type",
        type: "'radio' | 'checkbox'",
        default: "'radio'",
        description: "Modo de seleção: rádio (único) ou checkbox (múltiplo).",
      },
      {
        name: "layout",
        type: "'vertical' | 'horizontal' | 'grid'",
        default: "'vertical'",
        description: "Disposição dos cards no contêiner.",
      },
      {
        name: "columns",
        type: "1 | 2 | 3 | 4",
        default: "2",
        description: "Número de colunas quando layout='grid'.",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Escala e espaçamento interno dos cards.",
      },
      {
        name: "tone",
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'accent'",
        default: "'primary'",
        description: "Tom semântico de borda e seleção ativa.",
      },
      {
        name: "indicatorPlacement",
        type: "'left' | 'right'",
        default: "'left'",
        description: "Posição do círculo de rádio ou caixa de seleção.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita a interação com todo o grupo.",
      },
    ],
    slots: [{ name: "default", description: "Cards filhos <MsChoiceboxItem> customizados." }],
    emits: [
      {
        name: "update:modelValue",
        payload: "value",
        description: "Atualização da seleção para v-model.",
      },
      {
        name: "change",
        payload: "value",
        description: "Disparado quando o usuário altera uma seleção.",
      },
    ],
    tokens: [
      {
        name: "--ms-color-surface-raised",
        default: "Card Surface",
        description: "Superfície dos cards de seleção.",
      },
      {
        name: "--ms-color-brand-primary",
        default: "Brand Primary",
        description: "Realce e contorno do item selecionado.",
      },
    ],
  },

  glimpse: {
    name: "MsGlimpse",
    category: "Overlays & Diálogos",
    description:
      "Cartão flutuante de pré-visualização de links (URL Hovercard / Open Graph Card) ativado ao passar o mouse ou focar links, com suporte a skeleton, imagem, título e domínio.",
    props: [
      { name: "href", type: "string", default: "'#'", description: "URL de destino do link." },
      {
        name: "label",
        type: "string",
        default: "''",
        description: "Texto âncora exibido para o link.",
      },
      {
        name: "title",
        type: "string",
        default: "''",
        description: "Título do artigo ou página de destino.",
      },
      {
        name: "description",
        type: "string",
        default: "''",
        description: "Resumo ou descrição meta da página.",
      },
      {
        name: "image",
        type: "string",
        default: "''",
        description: "URL da imagem de capa / miniatura Open Graph.",
      },
      {
        name: "domain",
        type: "string",
        default: "''",
        description: "Domínio limpo exibido no cabeçalho do cartão.",
      },
      {
        name: "favicon",
        type: "string",
        default: "''",
        description: "Ícone favicon do site de destino.",
      },
      {
        name: "badge",
        type: "string",
        default: "''",
        description: "Badge ou etiqueta de contexto.",
      },
      {
        name: "placement",
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'top'",
        description: "Lado em que o cartão flutuante surge em relação ao link.",
      },
      {
        name: "showDelay",
        type: "number",
        default: "180",
        description: "Tempo de espera em milissegundos para abrir o cartão ao passar o mouse.",
      },
      {
        name: "hideDelay",
        type: "number",
        default: "150",
        description:
          "Tempo de espera em milissegundos antes de fechar o cartão ao retirar o mouse.",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Ativa o skeleton animado simulando busca de metadados.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desativa o hovercard exibindo apenas o link comum.",
      },
    ],
    slots: [
      { name: "default", description: "Elemento de disparo (link customizado ou botão)." },
      { name: "preview", description: "Conteúdo customizado para o interior do cartão flutuante." },
      { name: "image", description: "Área customizada de mídia/imagem." },
      { name: "meta", description: "Cabeçalho de metadados com domínio e badges." },
    ],
    emits: [
      { name: "open", payload: "void", description: "Disparado quando o hovercard é aberto." },
      { name: "close", payload: "void", description: "Disparado quando o hovercard é fechado." },
    ],
    tokens: [
      {
        name: "--ms-color-surface-raised",
        default: "Popover Surface",
        description: "Fundo do cartão flutuante.",
      },
      {
        name: "--ms-elevation-dropdown",
        default: "Dropdown Shadow",
        description: "Sombra de elevação projetada pelo cartão.",
      },
    ],
  },
};
