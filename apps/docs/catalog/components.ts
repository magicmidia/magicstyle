import type { CatalogEntry } from "./types.ts";

export const COMPONENTS: CatalogEntry[] = [
  {
    slug: "button",
    dir: "MsButton",
    components: ["MsButton"],
    category: "actions",
    title: {
      "pt-BR": "Botão",
      "en-US": "Button",
      "es-ES": "Botón",
    },
    description: {
      "pt-BR": "Botão de ação com variantes, tons, tamanhos, ícones e estado de carregamento.",
      "en-US": "Action button with variants, tones, sizes, icons and a loading state.",
      "es-ES": "Botón de acción con variantes, tonos, tamaños, iconos y estado de carga.",
    },
  },
  {
    slug: "button-group",
    dir: "MsButtonGroup",
    components: ["MsButtonGroup"],
    category: "actions",
    title: {
      "pt-BR": "Grupo de botões",
      "en-US": "Button Group",
      "es-ES": "Grupo de botones",
    },
    description: {
      "pt-BR":
        "Agrupa botões relacionados na horizontal ou vertical, unidos pelas bordas ou espaçados.",
      "en-US":
        "Groups related buttons horizontally or vertically, either joined at the borders or spaced apart.",
      "es-ES":
        "Agrupa botones relacionados en horizontal o vertical, unidos por los bordes o separados.",
    },
  },
  {
    slug: "dropdown-button",
    dir: "MsDropdownButton",
    components: ["MsDropdownButton"],
    category: "actions",
    title: {
      "pt-BR": "Botão com menu",
      "en-US": "Dropdown Button",
      "es-ES": "Botón desplegable",
    },
    description: {
      "pt-BR": "Botão que abre um menu de ações suspenso, alinhado ao gatilho.",
      "en-US": "Button that opens a dropdown menu of actions aligned to the trigger.",
      "es-ES": "Botón que abre un menú desplegable de acciones alineado al disparador.",
    },
    apg: "menu-button",
  },
  {
    slug: "fab",
    dir: "MsFab",
    components: ["MsFab"],
    category: "actions",
    title: {
      "pt-BR": "Botão de ação flutuante",
      "en-US": "Floating Action Button",
      "es-ES": "Botón de acción flotante",
    },
    description: {
      "pt-BR":
        "Botão fixo em um canto da tela para a ação principal, com rótulo opcional e ações extras em speed dial.",
      "en-US":
        "Button fixed to a viewport corner for the primary action, with an optional label and speed-dial actions.",
      "es-ES":
        "Botón fijo en una esquina de la pantalla para la acción principal, con etiqueta opcional y acciones en speed dial.",
    },
  },
  {
    slug: "icon-button",
    dir: "MsIconButton",
    components: ["MsIconButton"],
    category: "actions",
    title: {
      "pt-BR": "Botão de ícone",
      "en-US": "Icon Button",
      "es-ES": "Botón de icono",
    },
    description: {
      "pt-BR": "Botão apenas com ícone que exige nome acessível e pode funcionar como alternância.",
      "en-US": "Icon-only button that requires an accessible name and can act as a toggle.",
      "es-ES":
        "Botón solo con icono que requiere un nombre accesible y puede funcionar como alternador.",
    },
  },
  {
    slug: "segmented-control",
    dir: "MsSegmentedControl",
    components: ["MsSegmentedControl"],
    category: "actions",
    title: {
      "pt-BR": "Controle segmentado",
      "en-US": "Segmented Control",
      "es-ES": "Control segmentado",
    },
    description: {
      "pt-BR":
        "Conjunto compacto de segmentos mutuamente exclusivos para escolher uma opção ou visualização.",
      "en-US": "Compact set of mutually exclusive segments for choosing one option or view.",
      "es-ES":
        "Conjunto compacto de segmentos mutuamente excluyentes para elegir una opción o vista.",
    },
    apg: "radio",
  },
  {
    slug: "toggle-group",
    dir: "MsToggleGroup",
    components: ["MsToggleGroup", "MsToggleGroupItem"],
    category: "actions",
    title: {
      "pt-BR": "Grupo de alternância",
      "en-US": "Toggle Group",
      "es-ES": "Grupo de alternancia",
    },
    description: {
      "pt-BR": "Grupo de botões de alternância com seleção única ou múltipla.",
      "en-US": "Group of toggle buttons with single or multiple selection.",
      "es-ES": "Grupo de botones de alternancia con selección única o múltiple.",
    },
  },
  {
    slug: "checkbox",
    dir: "MsCheckbox",
    components: ["MsCheckbox"],
    category: "forms",
    title: {
      "pt-BR": "Caixa de seleção",
      "en-US": "Checkbox",
      "es-ES": "Casilla de verificación",
    },
    description: {
      "pt-BR": "Caixa de seleção com rótulo, descrição e estado indeterminado.",
      "en-US": "Checkbox with label, description and an indeterminate state.",
      "es-ES": "Casilla de verificación con etiqueta, descripción y estado indeterminado.",
    },
    apg: "checkbox",
  },
  {
    slug: "dropzone",
    dir: "MsDropzone",
    components: ["MsDropzone"],
    category: "forms",
    title: {
      "pt-BR": "Área de soltura",
      "en-US": "Dropzone",
      "es-ES": "Zona de arrastre",
    },
    description: {
      "pt-BR":
        "Área para arrastrar e soltar ou procurar arquivos, com validação de tipo, tamanho e quantidade.",
      "en-US": "Area to drag and drop or browse for files, with type, size and count validation.",
      "es-ES":
        "Área para arrastrar y soltar o buscar archivos, con validación de tipo, tamaño y cantidad.",
    },
  },
  {
    slug: "field",
    dir: "MsField",
    components: ["MsField"],
    category: "forms",
    title: {
      "pt-BR": "Campo",
      "en-US": "Field",
      "es-ES": "Campo",
    },
    description: {
      "pt-BR":
        "Envolve um controle de formulário com rótulo, texto de ajuda, mensagem de erro e indicador de obrigatório.",
      "en-US":
        "Wraps a form control with a label, helper text, error message and required indicator.",
      "es-ES":
        "Envuelve un control de formulario con etiqueta, texto de ayuda, mensaje de error e indicador de obligatorio.",
    },
  },
  {
    slug: "file-input",
    dir: "MsFileInput",
    components: ["MsFileInput"],
    category: "forms",
    title: {
      "pt-BR": "Entrada de arquivo",
      "en-US": "File Input",
      "es-ES": "Entrada de archivo",
    },
    description: {
      "pt-BR":
        "Seletor de arquivos com filtro de formatos, seleção múltipla e lista dos arquivos escolhidos.",
      "en-US":
        "File selector with format filtering, multiple selection and a list of the chosen files.",
      "es-ES":
        "Selector de archivos con filtro de formatos, selección múltiple y lista de los archivos elegidos.",
    },
  },
  {
    slug: "form-wizard",
    dir: "MsFormWizard",
    components: ["MsFormWizard"],
    category: "forms",
    title: {
      "pt-BR": "Assistente de formulário",
      "en-US": "Form Wizard",
      "es-ES": "Asistente de formulario",
    },
    description: {
      "pt-BR":
        "Divide um formulário em etapas com cabeçalho de progresso e navegação entre passos.",
      "en-US": "Splits a form into steps with a progress header and step-by-step navigation.",
      "es-ES": "Divide un formulario en pasos con encabezado de progreso y navegación entre pasos.",
    },
  },
  {
    slug: "input",
    dir: "MsInput",
    components: ["MsInput"],
    category: "forms",
    title: {
      "pt-BR": "Campo de texto",
      "en-US": "Input",
      "es-ES": "Campo de texto",
    },
    description: {
      "pt-BR":
        "Campo de texto de uma linha com variantes, prefixo e sufixo, rótulo flutuante e estado de carregamento.",
      "en-US":
        "Single-line text input with variants, prefix and suffix, floating label and a loading state.",
      "es-ES":
        "Campo de texto de una línea con variantes, prefijo y sufijo, etiqueta flotante y estado de carga.",
    },
  },
  {
    slug: "label",
    dir: "MsLabel",
    components: ["MsLabel"],
    category: "forms",
    title: {
      "pt-BR": "Rótulo",
      "en-US": "Label",
      "es-ES": "Etiqueta",
    },
    description: {
      "pt-BR":
        "Rótulo de controle de formulário com indicador de obrigatório ou opcional e dica de ajuda.",
      "en-US": "Form control label with a required or optional indicator and a help tooltip.",
      "es-ES":
        "Etiqueta de control de formulario con indicador de obligatorio u opcional y ayuda emergente.",
    },
  },
  {
    slug: "masked-input",
    dir: "MsMaskedInput",
    components: ["MsMaskedInput"],
    category: "forms",
    title: {
      "pt-BR": "Campo com máscara",
      "en-US": "Masked Input",
      "es-ES": "Campo con máscara",
    },
    description: {
      "pt-BR":
        "Campo que formata a digitação por máscara, com presets para CPF, CNPJ, telefone, data, CEP e cartão.",
      "en-US":
        "Input that formats typing with a mask, with presets for Brazilian documents, phone, date, postal code and card.",
      "es-ES":
        "Campo que formatea la escritura con una máscara, con presets para documentos brasileños, teléfono, fecha y tarjeta.",
    },
  },
  {
    slug: "native-select",
    dir: "MsNativeSelect",
    components: ["MsNativeSelect"],
    category: "forms",
    title: {
      "pt-BR": "Seleção nativa",
      "en-US": "Native Select",
      "es-ES": "Selección nativa",
    },
    description: {
      "pt-BR": "Elemento select nativo do navegador com os estilos e variantes da biblioteca.",
      "en-US": "The browser's native select element styled with the library's variants.",
      "es-ES": "Elemento select nativo del navegador con los estilos y variantes de la biblioteca.",
    },
  },
  {
    slug: "password-input",
    dir: "MsPasswordInput",
    components: ["MsPasswordInput"],
    category: "forms",
    title: {
      "pt-BR": "Campo de senha",
      "en-US": "Password Input",
      "es-ES": "Campo de contraseña",
    },
    description: {
      "pt-BR":
        "Campo de senha com botão de exibir e ocultar, medidor de força e lista de critérios.",
      "en-US": "Password input with a show/hide toggle, strength meter and criteria checklist.",
      "es-ES":
        "Campo de contraseña con botón para mostrar u ocultar, medidor de fortaleza y lista de criterios.",
    },
  },
  {
    slug: "pin-input",
    dir: "MsPinInput",
    components: ["MsPinInput"],
    category: "forms",
    title: {
      "pt-BR": "Campo de PIN",
      "en-US": "PIN Input",
      "es-ES": "Campo de PIN",
    },
    description: {
      "pt-BR":
        "Sequência de caixas de um caractere para códigos numéricos ou alfanuméricos, como códigos de verificação.",
      "en-US":
        "Row of single-character boxes for numeric or alphanumeric codes such as verification codes.",
      "es-ES":
        "Serie de casillas de un carácter para códigos numéricos o alfanuméricos, como códigos de verificación.",
    },
  },
  {
    slug: "radio",
    dir: "MsRadio",
    components: ["MsRadio"],
    category: "forms",
    title: {
      "pt-BR": "Botão de opção",
      "en-US": "Radio",
      "es-ES": "Botón de opción",
    },
    description: {
      "pt-BR": "Opção individual de um grupo de rádio, com rótulo e descrição.",
      "en-US": "Single option of a radio group, with label and description.",
      "es-ES": "Opción individual de un grupo de radio, con etiqueta y descripción.",
    },
  },
  {
    slug: "radio-group",
    dir: "MsRadioGroup",
    components: ["MsRadioGroup"],
    category: "forms",
    title: {
      "pt-BR": "Grupo de opções",
      "en-US": "Radio Group",
      "es-ES": "Grupo de opciones",
    },
    description: {
      "pt-BR": "Agrupa botões de opção e controla o valor selecionado com v-model.",
      "en-US": "Groups radio buttons and manages the selected value with v-model.",
      "es-ES": "Agrupa botones de opción y controla el valor seleccionado con v-model.",
    },
    apg: "radio",
  },
  {
    slug: "range",
    dir: "MsRange",
    components: ["MsRange"],
    category: "forms",
    title: {
      "pt-BR": "Controle deslizante",
      "en-US": "Range",
      "es-ES": "Control deslizante",
    },
    description: {
      "pt-BR": "Controle deslizante para escolher um valor numérico entre um mínimo e um máximo.",
      "en-US": "Slider for choosing a numeric value between a minimum and a maximum.",
      "es-ES": "Control deslizante para elegir un valor numérico entre un mínimo y un máximo.",
    },
    apg: "slider",
  },
  {
    slug: "rating",
    dir: "MsRating",
    components: ["MsRating"],
    category: "forms",
    title: {
      "pt-BR": "Avaliação",
      "en-US": "Rating",
      "es-ES": "Valoración",
    },
    description: {
      "pt-BR": "Avaliação por estrelas ajustável pelo mouse ou teclado, com modo somente leitura.",
      "en-US": "Star rating adjustable by pointer or keyboard, with a read-only mode.",
      "es-ES":
        "Valoración con estrellas ajustable con el puntero o el teclado, con modo de solo lectura.",
    },
    apg: "slider",
  },
  {
    slug: "search-field",
    dir: "MsSearchField",
    components: ["MsSearchField"],
    category: "forms",
    title: {
      "pt-BR": "Campo de busca",
      "en-US": "Search Field",
      "es-ES": "Campo de búsqueda",
    },
    description: {
      "pt-BR": "Campo de busca com ícone e botão para limpar o termo digitado.",
      "en-US": "Search input with an icon and a button to clear the query.",
      "es-ES": "Campo de búsqueda con icono y botón para borrar el término escrito.",
    },
  },
  {
    slug: "switch",
    dir: "MsSwitch",
    components: ["MsSwitch"],
    category: "forms",
    title: {
      "pt-BR": "Interruptor",
      "en-US": "Switch",
      "es-ES": "Interruptor",
    },
    description: {
      "pt-BR": "Interruptor liga/desliga com rótulo, descrição e tom de destaque.",
      "en-US": "On/off switch with label, description and an accent tone.",
      "es-ES": "Interruptor de encendido y apagado con etiqueta, descripción y tono de acento.",
    },
    apg: "switch",
  },
  {
    slug: "textarea",
    dir: "MsTextarea",
    components: ["MsTextarea"],
    category: "forms",
    title: {
      "pt-BR": "Área de texto",
      "en-US": "Textarea",
      "es-ES": "Área de texto",
    },
    description: {
      "pt-BR":
        "Campo de texto de várias linhas com número de linhas e direção de redimensionamento configuráveis.",
      "en-US": "Multi-line text input with configurable rows and resize direction.",
      "es-ES":
        "Campo de texto de varias líneas con número de filas y dirección de redimensionado configurables.",
    },
  },
  {
    slug: "choicebox",
    dir: "MsChoicebox",
    components: ["MsChoicebox", "MsChoiceboxItem"],
    category: "pickers",
    title: {
      "pt-BR": "Caixa de escolha",
      "en-US": "Choicebox",
      "es-ES": "Caja de elección",
    },
    description: {
      "pt-BR":
        "Opções em cartões com título, descrição, preço e selo, para seleção única ou múltipla.",
      "en-US":
        "Card-style options with title, description, price and badge, for single or multiple selection.",
      "es-ES":
        "Opciones en tarjetas con título, descripción, precio e insignia, para selección única o múltiple.",
    },
    apg: "radio",
  },
  {
    slug: "color-picker",
    dir: "MsColorPicker",
    components: ["MsColorPicker"],
    category: "pickers",
    title: {
      "pt-BR": "Seletor de cores",
      "en-US": "Color Picker",
      "es-ES": "Selector de color",
    },
    description: {
      "pt-BR":
        "Seletor de cor com o controle nativo, campo hexadecimal e paleta de amostras predefinidas.",
      "en-US":
        "Color picker with the native control, a hex text field and a palette of preset swatches.",
      "es-ES":
        "Selector de color con el control nativo, campo hexadecimal y paleta de muestras predefinidas.",
    },
  },
  {
    slug: "command-palette",
    dir: "MsCommandPalette",
    components: ["MsCommandPalette"],
    category: "pickers",
    title: {
      "pt-BR": "Paleta de comandos",
      "en-US": "Command Palette",
      "es-ES": "Paleta de comandos",
    },
    description: {
      "pt-BR": "Diálogo com busca para filtrar e executar comandos pelo teclado.",
      "en-US": "Searchable dialog to filter and run commands from the keyboard.",
      "es-ES": "Diálogo con búsqueda para filtrar y ejecutar comandos desde el teclado.",
    },
    apg: "combobox",
  },
  {
    slug: "date-picker",
    dir: "MsDatePicker",
    components: ["MsDatePicker"],
    category: "pickers",
    title: {
      "pt-BR": "Seletor de data",
      "en-US": "Date Picker",
      "es-ES": "Selector de fecha",
    },
    description: {
      "pt-BR":
        "Seletor com calendário para data, intervalo de datas, horário ou data e hora, com limites mínimo e máximo.",
      "en-US":
        "Calendar picker for a date, date range, time or date and time, with minimum and maximum limits.",
      "es-ES":
        "Selector con calendario para fecha, rango de fechas, hora o fecha y hora, con límites mínimo y máximo.",
    },
  },
  {
    slug: "emoji-picker",
    dir: "MsEmojiPicker",
    components: ["MsEmojiPicker"],
    category: "pickers",
    title: {
      "pt-BR": "Seletor de emoji",
      "en-US": "Emoji Picker",
      "es-ES": "Selector de emoji",
    },
    description: {
      "pt-BR": "Seletor de emoji com busca e filtro por categoria.",
      "en-US": "Emoji picker with search and category filtering.",
      "es-ES": "Selector de emoji con búsqueda y filtro por categoría.",
    },
  },
  {
    slug: "icon-picker",
    dir: "MsIconPicker",
    components: ["MsIconPicker"],
    category: "pickers",
    title: {
      "pt-BR": "Seletor de ícones",
      "en-US": "Icon Picker",
      "es-ES": "Selector de iconos",
    },
    description: {
      "pt-BR":
        "Seletor de ícones com busca, que aceita um conjunto embutido ou ícones SVG personalizados.",
      "en-US": "Searchable icon picker that accepts a built-in set or custom SVG icons.",
      "es-ES":
        "Selector de iconos con búsqueda que acepta un conjunto integrado o iconos SVG personalizados.",
    },
  },
  {
    slug: "select",
    dir: "MsSelect",
    components: ["MsSelect"],
    category: "pickers",
    title: {
      "pt-BR": "Seleção",
      "en-US": "Select",
      "es-ES": "Selección",
    },
    description: {
      "pt-BR":
        "Seleção personalizada com busca, múltipla escolha, grupos de opções e criação de novos itens.",
      "en-US": "Custom select with search, multiple selection, option groups and item creation.",
      "es-ES":
        "Selección personalizada con búsqueda, selección múltiple, grupos de opciones y creación de elementos.",
    },
    apg: "combobox",
  },
  {
    slug: "confirm-dialog",
    dir: "MsConfirmDialog",
    components: ["MsConfirmDialog"],
    category: "overlays",
    title: {
      "pt-BR": "Diálogo de confirmação",
      "en-US": "Confirm Dialog",
      "es-ES": "Diálogo de confirmación",
    },
    description: {
      "pt-BR":
        "Diálogo modal que pede confirmação antes de uma ação, com tom para ações destrutivas.",
      "en-US":
        "Modal dialog that asks for confirmation before an action, with a tone for destructive actions.",
      "es-ES":
        "Diálogo modal que pide confirmación antes de una acción, con tono para acciones destructivas.",
    },
    apg: "alertdialog",
  },
  {
    slug: "context-menu",
    dir: "MsContextMenu",
    components: ["MsContextMenu"],
    category: "overlays",
    title: {
      "pt-BR": "Menu de contexto",
      "en-US": "Context Menu",
      "es-ES": "Menú contextual",
    },
    description: {
      "pt-BR": "Menu de ações aberto com clique direito sobre a área envolvida.",
      "en-US": "Menu of actions opened by right-clicking the wrapped area.",
      "es-ES": "Menú de acciones que se abre con clic derecho sobre el área envuelta.",
    },
    apg: "menu",
  },
  {
    slug: "dialog",
    dir: "MsDialog",
    components: ["MsDialog"],
    category: "overlays",
    title: {
      "pt-BR": "Diálogo",
      "en-US": "Dialog",
      "es-ES": "Diálogo",
    },
    description: {
      "pt-BR":
        "Janela modal com título, descrição, tamanhos e posicionamento central, no topo ou como bottom sheet.",
      "en-US":
        "Modal window with title, description, sizes and center, top or bottom-sheet placement.",
      "es-ES":
        "Ventana modal con título, descripción, tamaños y posición central, superior o como hoja inferior.",
    },
    apg: "dialog-modal",
  },
  {
    slug: "drawer",
    dir: "MsDrawer",
    components: ["MsDrawer"],
    category: "overlays",
    title: {
      "pt-BR": "Gaveta",
      "en-US": "Drawer",
      "es-ES": "Panel lateral",
    },
    description: {
      "pt-BR":
        "Painel modal que desliza de uma borda da tela para conteúdo secundário ou formulários.",
      "en-US": "Modal panel that slides in from a screen edge for secondary content or forms.",
      "es-ES":
        "Panel modal que se desliza desde un borde de la pantalla para contenido secundario o formularios.",
    },
    apg: "dialog-modal",
  },
  {
    slug: "hover-card",
    dir: "MsHoverCard",
    components: ["MsHoverCard"],
    category: "overlays",
    title: {
      "pt-BR": "Hover Card",
      "en-US": "Hover Card",
      "es-ES": "Hover Card",
    },
    description: {
      "pt-BR":
        "Cartão flutuante que exibe uma prévia ao passar o cursor ou focar o gatilho, com atrasos configuráveis.",
      "en-US":
        "Floating card that shows a preview when the trigger is hovered or focused, with configurable delays.",
      "es-ES":
        "Tarjeta flotante que muestra una vista previa al pasar el cursor o enfocar el disparador, con retardos configurables.",
    },
  },
  {
    slug: "lightbox",
    dir: "MsLightbox",
    components: ["MsLightbox"],
    category: "overlays",
    title: {
      "pt-BR": "Lightbox",
      "en-US": "Lightbox",
      "es-ES": "Lightbox",
    },
    description: {
      "pt-BR": "Visualizador de imagens em tela cheia com legendas e navegação entre imagens.",
      "en-US": "Full-screen image viewer with captions and navigation between images.",
      "es-ES": "Visor de imágenes a pantalla completa con leyendas y navegación entre imágenes.",
    },
    apg: "dialog-modal",
  },
  {
    slug: "menu",
    dir: "MsMenu",
    components: ["MsMenu"],
    category: "overlays",
    title: {
      "pt-BR": "Menu",
      "en-US": "Menu",
      "es-ES": "Menú",
    },
    description: {
      "pt-BR":
        "Lista de ações com navegação por teclado, atalhos, ícones, separadores e tom para ações destrutivas.",
      "en-US":
        "List of actions with keyboard navigation, shortcuts, icons, separators and a destructive tone.",
      "es-ES":
        "Lista de acciones con navegación por teclado, atajos, iconos, separadores y tono para acciones destructivas.",
    },
    apg: "menu",
  },
  {
    slug: "popover",
    dir: "MsPopover",
    components: ["MsPopover"],
    category: "overlays",
    title: {
      "pt-BR": "Popover",
      "en-US": "Popover",
      "es-ES": "Popover",
    },
    description: {
      "pt-BR":
        "Painel flutuante ancorado a um gatilho, aberto por clique ou hover, para conteúdo interativo.",
      "en-US":
        "Floating panel anchored to a trigger, opened on click or hover, for interactive content.",
      "es-ES":
        "Panel flotante anclado a un disparador, abierto con clic o hover, para contenido interactivo.",
    },
  },
  {
    slug: "tooltip",
    dir: "MsTooltip",
    components: ["MsTooltip"],
    category: "overlays",
    title: {
      "pt-BR": "Tooltip",
      "en-US": "Tooltip",
      "es-ES": "Tooltip",
    },
    description: {
      "pt-BR": "Dica textual curta exibida ao passar o cursor ou focar um elemento.",
      "en-US": "Short text hint shown when an element is hovered or focused.",
      "es-ES": "Sugerencia de texto breve que se muestra al pasar el cursor o enfocar un elemento.",
    },
    apg: "tooltip",
  },
  {
    slug: "alert",
    dir: "MsAlert",
    components: ["MsAlert"],
    category: "feedback",
    title: {
      "pt-BR": "Alerta",
      "en-US": "Alert",
      "es-ES": "Alerta",
    },
    description: {
      "pt-BR": "Mensagem em destaque com tom semântico, título, ícone e ações.",
      "en-US": "Prominent message with a semantic tone, title, icon and actions.",
      "es-ES": "Mensaje destacado con tono semántico, título, icono y acciones.",
    },
    apg: "alert",
  },
  {
    slug: "banner",
    dir: "MsBanner",
    components: ["MsBanner"],
    category: "feedback",
    title: {
      "pt-BR": "Banner",
      "en-US": "Banner",
      "es-ES": "Banner",
    },
    description: {
      "pt-BR": "Faixa de aviso em linha ou fixa no topo ou rodapé, com ação e opção de fechar.",
      "en-US":
        "Notice strip shown inline or pinned to the top or bottom, with an action and optional dismissal.",
      "es-ES": "Franja de aviso en línea o fija arriba o abajo, con acción y opción de cerrar.",
    },
  },
  {
    slug: "empty-state",
    dir: "MsEmptyState",
    components: ["MsEmptyState"],
    category: "feedback",
    title: {
      "pt-BR": "Estado vazio",
      "en-US": "Empty State",
      "es-ES": "Estado vacío",
    },
    description: {
      "pt-BR": "Mensagem para quando não há conteúdo a exibir, com ícone, descrição e ações.",
      "en-US":
        "Placeholder for when there is no content to show, with icon, description and actions.",
      "es-ES":
        "Mensaje para cuando no hay contenido que mostrar, con icono, descripción y acciones.",
    },
  },
  {
    slug: "progress",
    dir: "MsProgress",
    components: ["MsProgress"],
    category: "feedback",
    title: {
      "pt-BR": "Barra de progresso",
      "en-US": "Progress",
      "es-ES": "Barra de progreso",
    },
    description: {
      "pt-BR": "Barra de progresso linear com valor determinado ou animação indeterminada.",
      "en-US": "Linear progress bar with a determinate value or an indeterminate animation.",
      "es-ES": "Barra de progreso lineal con valor determinado o animación indeterminada.",
    },
  },
  {
    slug: "progress-radial",
    dir: "MsProgressRadial",
    components: ["MsProgressRadial"],
    category: "feedback",
    title: {
      "pt-BR": "Progresso circular",
      "en-US": "Radial Progress",
      "es-ES": "Progreso circular",
    },
    description: {
      "pt-BR": "Indicador de progresso circular com o percentual opcional exibido no centro.",
      "en-US": "Circular progress indicator with an optional percentage shown in the center.",
      "es-ES": "Indicador de progreso circular con el porcentaje opcional mostrado en el centro.",
    },
  },
  {
    slug: "skeleton",
    dir: "MsSkeleton",
    components: ["MsSkeleton"],
    category: "feedback",
    title: {
      "pt-BR": "Skeleton",
      "en-US": "Skeleton",
      "es-ES": "Skeleton",
    },
    description: {
      "pt-BR": "Espaço reservado animado que imita o formato do conteúdo durante o carregamento.",
      "en-US": "Animated placeholder that mimics the shape of content while it loads.",
      "es-ES": "Marcador animado que imita la forma del contenido mientras se carga.",
    },
  },
  {
    slug: "spinner",
    dir: "MsSpinner",
    components: ["MsSpinner"],
    category: "feedback",
    title: {
      "pt-BR": "Spinner",
      "en-US": "Spinner",
      "es-ES": "Spinner",
    },
    description: {
      "pt-BR": "Indicador de carregamento giratório, anunciado a leitores de tela.",
      "en-US": "Spinning loading indicator announced to screen readers.",
      "es-ES": "Indicador de carga giratorio anunciado a los lectores de pantalla.",
    },
  },
  {
    slug: "status",
    dir: "MsStatus",
    components: ["MsStatus"],
    category: "feedback",
    title: {
      "pt-BR": "Status",
      "en-US": "Status",
      "es-ES": "Estado",
    },
    description: {
      "pt-BR": "Ponto indicador de estado com tom semântico, rótulo opcional e pulso animado.",
      "en-US": "Status dot with a semantic tone, optional label and a pulsing animation.",
      "es-ES": "Punto indicador de estado con tono semántico, etiqueta opcional y pulso animado.",
    },
  },
  {
    slug: "toast",
    dir: "MsToast",
    components: ["MsToast", "MsToastContainer"],
    category: "feedback",
    title: {
      "pt-BR": "Toast",
      "en-US": "Toast",
      "es-ES": "Toast",
    },
    description: {
      "pt-BR":
        "Notificações temporárias empilhadas em um contêiner e anunciadas a tecnologias assistivas.",
      "en-US":
        "Temporary notifications stacked in a container and announced to assistive technologies.",
      "es-ES":
        "Notificaciones temporales apiladas en un contenedor y anunciadas a las tecnologías de asistencia.",
    },
  },
  {
    slug: "breadcrumbs",
    dir: "MsBreadcrumbs",
    components: ["MsBreadcrumbs", "MsBreadcrumbItem", "MsBreadcrumbSeparator"],
    category: "navigation",
    title: {
      "pt-BR": "Trilha de navegação",
      "en-US": "Breadcrumbs",
      "es-ES": "Ruta de navegación",
    },
    description: {
      "pt-BR": "Trilha que mostra a posição da página atual na hierarquia do site.",
      "en-US": "Trail that shows the current page's position in the site hierarchy.",
      "es-ES": "Ruta que muestra la posición de la página actual en la jerarquía del sitio.",
    },
    apg: "breadcrumb",
  },
  {
    slug: "dock",
    dir: "MsDock",
    components: ["MsDock", "MsDockItem"],
    category: "navigation",
    title: {
      "pt-BR": "Dock",
      "en-US": "Dock",
      "es-ES": "Dock",
    },
    description: {
      "pt-BR": "Barra de ícones fixa em uma borda da tela, com rótulos e indicador de item ativo.",
      "en-US": "Icon bar anchored to a screen edge, with labels and an active-item indicator.",
      "es-ES":
        "Barra de iconos anclada a un borde de la pantalla, con etiquetas e indicador de elemento activo.",
    },
    apg: "toolbar",
  },
  {
    slug: "link",
    dir: "MsLink",
    components: ["MsLink"],
    category: "navigation",
    title: {
      "pt-BR": "Link",
      "en-US": "Link",
      "es-ES": "Enlace",
    },
    description: {
      "pt-BR": "Link estilizado com URL sanitizada e detecção automática de links externos.",
      "en-US": "Styled link with a sanitized URL and automatic external-link detection.",
      "es-ES": "Enlace con estilo, URL saneada y detección automática de enlaces externos.",
    },
  },
  {
    slug: "navbar",
    dir: "MsNavbar",
    components: ["MsNavbar"],
    category: "navigation",
    title: {
      "pt-BR": "Barra de navegação",
      "en-US": "Navbar",
      "es-ES": "Barra de navegación",
    },
    description: {
      "pt-BR":
        "Barra de navegação superior com marca, links e ações, posicionamento configurável e menu móvel.",
      "en-US":
        "Top navigation bar with brand, links and actions, configurable positioning and a mobile menu.",
      "es-ES":
        "Barra de navegación superior con marca, enlaces y acciones, posición configurable y menú móvil.",
    },
  },
  {
    slug: "pagination",
    dir: "MsPagination",
    components: ["MsPagination"],
    category: "navigation",
    title: {
      "pt-BR": "Paginação",
      "en-US": "Pagination",
      "es-ES": "Paginación",
    },
    description: {
      "pt-BR":
        "Controles para navegar entre páginas de resultados, com reticências e botões de primeira e última página.",
      "en-US":
        "Controls to move between pages of results, with ellipses and first/last page buttons.",
      "es-ES":
        "Controles para moverse entre páginas de resultados, con puntos suspensivos y botones de primera y última página.",
    },
  },
  {
    slug: "scroll-spy",
    dir: "MsScrollSpy",
    components: ["MsScrollSpy"],
    category: "navigation",
    title: {
      "pt-BR": "Scroll Spy",
      "en-US": "Scroll Spy",
      "es-ES": "Scroll Spy",
    },
    description: {
      "pt-BR":
        "Navegação que destaca a seção visível durante a rolagem e rola até a seção escolhida.",
      "en-US":
        "Navigation that highlights the section in view while scrolling and scrolls to the chosen section.",
      "es-ES":
        "Navegación que resalta la sección visible al desplazarse y se desplaza hasta la sección elegida.",
    },
  },
  {
    slug: "sidebar",
    dir: "MsSidebar",
    components: ["MsSidebar"],
    category: "navigation",
    title: {
      "pt-BR": "Barra lateral",
      "en-US": "Sidebar",
      "es-ES": "Barra lateral",
    },
    description: {
      "pt-BR": "Painel lateral recolhível para navegação, integrado ao estado do MsAppShell.",
      "en-US": "Collapsible side panel for navigation, integrated with the MsAppShell state.",
      "es-ES": "Panel lateral plegable para navegación, integrado con el estado de MsAppShell.",
    },
  },
  {
    slug: "sidebar-menu",
    dir: "MsSidebarMenu",
    components: ["MsSidebarMenu", "MsSidebarMenuGroup", "MsSidebarMenuItem"],
    category: "navigation",
    title: {
      "pt-BR": "Menu lateral",
      "en-US": "Sidebar Menu",
      "es-ES": "Menú lateral",
    },
    description: {
      "pt-BR": "Menu de navegação vertical com grupos recolhíveis, item ativo e selos.",
      "en-US": "Vertical navigation menu with collapsible groups, an active item and badges.",
      "es-ES": "Menú de navegación vertical con grupos plegables, elemento activo e insignias.",
    },
  },
  {
    slug: "stepper",
    dir: "MsStepper",
    components: ["MsStepper", "MsStep"],
    category: "navigation",
    title: {
      "pt-BR": "Etapas",
      "en-US": "Stepper",
      "es-ES": "Pasos",
    },
    description: {
      "pt-BR":
        "Indicador de etapas horizontal ou vertical com status por etapa e navegação opcional por clique.",
      "en-US":
        "Horizontal or vertical step indicator with per-step status and optional click navigation.",
      "es-ES":
        "Indicador de pasos horizontal o vertical con estado por paso y navegación opcional por clic.",
    },
  },
  {
    slug: "tabs",
    dir: "MsTabs",
    components: ["MsTabs", "MsTabList", "MsTab", "MsTabPanels", "MsTabPanel"],
    category: "navigation",
    title: {
      "pt-BR": "Abas",
      "en-US": "Tabs",
      "es-ES": "Pestañas",
    },
    description: {
      "pt-BR":
        "Organiza conteúdo em painéis alternados por uma lista de abas navegável pelo teclado.",
      "en-US": "Organizes content into panels switched by a keyboard-navigable tab list.",
      "es-ES":
        "Organiza el contenido en paneles alternados mediante una lista de pestañas navegable con el teclado.",
    },
    apg: "tabs",
  },
  {
    slug: "app-shell",
    dir: "MsAppShell",
    components: [
      "MsAppShell",
      "MsTopbar",
      "MsAppShellSidebar",
      "MsNavigationRail",
      "MsContent",
      "MsAside",
      "MsAppShellFooter",
      "MsStatusBar",
    ],
    category: "layout",
    title: {
      "pt-BR": "App Shell",
      "en-US": "App Shell",
      "es-ES": "App Shell",
    },
    description: {
      "pt-BR":
        "Estrutura de aplicação com barra superior, barra lateral, trilho de navegação, conteúdo, painel lateral, rodapé e barra de status.",
      "en-US":
        "Application frame with top bar, sidebar, navigation rail, content, aside, footer and status bar.",
      "es-ES":
        "Estructura de aplicación con barra superior, barra lateral, riel de navegación, contenido, panel lateral, pie y barra de estado.",
    },
  },
  {
    slug: "aspect-ratio",
    dir: "MsAspectRatio",
    components: ["MsAspectRatio"],
    category: "layout",
    title: {
      "pt-BR": "Proporção",
      "en-US": "Aspect Ratio",
      "es-ES": "Relación de aspecto",
    },
    description: {
      "pt-BR": "Mantém o conteúdo em uma proporção fixa, como 16/9 ou 1/1.",
      "en-US": "Keeps content at a fixed aspect ratio such as 16/9 or 1/1.",
      "es-ES": "Mantiene el contenido en una relación de aspecto fija, como 16/9 o 1/1.",
    },
  },
  {
    slug: "canvas",
    dir: "MsCanvas",
    components: ["MsCanvas"],
    category: "layout",
    title: {
      "pt-BR": "Canvas",
      "en-US": "Canvas",
      "es-ES": "Canvas",
    },
    description: {
      "pt-BR":
        "Superfície com padrão de fundo em pontos, grade ou linhas para diagramas e quadros.",
      "en-US": "Surface with a dotted, grid or lined background pattern for diagrams and boards.",
      "es-ES":
        "Superficie con patrón de fondo de puntos, cuadrícula o líneas para diagramas y tableros.",
    },
  },
  {
    slug: "card",
    dir: "MsCard",
    components: ["MsCard"],
    category: "layout",
    title: {
      "pt-BR": "Cartão",
      "en-US": "Card",
      "es-ES": "Tarjeta",
    },
    description: {
      "pt-BR":
        "Superfície que agrupa conteúdo relacionado, com título, subtítulo e estados interativos.",
      "en-US": "Surface that groups related content, with title, subtitle and interactive states.",
      "es-ES":
        "Superficie que agrupa contenido relacionado, con título, subtítulo y estados interactivos.",
    },
  },
  {
    slug: "container",
    dir: "MsContainer",
    components: ["MsContainer"],
    category: "layout",
    title: {
      "pt-BR": "Contêiner",
      "en-US": "Container",
      "es-ES": "Contenedor",
    },
    description: {
      "pt-BR":
        "Limita a largura do conteúdo aos breakpoints do design e aplica margens horizontais responsivas.",
      "en-US":
        "Constrains content width to design breakpoints and applies responsive horizontal padding.",
      "es-ES":
        "Limita el ancho del contenido a los breakpoints del diseño y aplica márgenes horizontales adaptables.",
    },
  },
  {
    slug: "footer",
    dir: "MsFooter",
    components: ["MsFooter"],
    category: "layout",
    title: {
      "pt-BR": "Rodapé",
      "en-US": "Footer",
      "es-ES": "Pie de página",
    },
    description: {
      "pt-BR": "Rodapé de página com layouts, superfícies e largura máxima configuráveis.",
      "en-US": "Page footer with configurable layouts, surfaces and maximum width.",
      "es-ES": "Pie de página con diseños, superficies y ancho máximo configurables.",
    },
  },
  {
    slug: "grid",
    dir: "MsGrid",
    components: ["MsGrid", "MsBentoGrid", "MsBentoItem", "MsMasonryGrid", "MsRow", "MsCol"],
    category: "layout",
    title: {
      "pt-BR": "Grade",
      "en-US": "Grid",
      "es-ES": "Cuadrícula",
    },
    description: {
      "pt-BR":
        "Primitivas de layout: grade CSS, linhas e colunas de 12 colunas, grade bento e grade masonry.",
      "en-US":
        "Layout primitives: CSS grid, 12-column rows and columns, bento grid and masonry grid.",
      "es-ES":
        "Primitivas de diseño: cuadrícula CSS, filas y columnas de 12 columnas, cuadrícula bento y masonry.",
    },
  },
  {
    slug: "page",
    dir: "MsPage",
    components: ["MsPage", "MsPageHeader", "MsPageActions"],
    category: "layout",
    title: {
      "pt-BR": "Página",
      "en-US": "Page",
      "es-ES": "Página",
    },
    description: {
      "pt-BR":
        "Estrutura de página com cabeçalho de título, descrição e ações, e área de conteúdo com espaçamento padrão.",
      "en-US":
        "Page structure with a header for title, description and actions, and a consistently spaced content area.",
      "es-ES":
        "Estructura de página con encabezado de título, descripción y acciones, y área de contenido con espaciado uniforme.",
    },
  },
  {
    slug: "provider",
    dir: "MsProvider",
    components: ["MsProvider"],
    category: "layout",
    title: {
      "pt-BR": "Provider",
      "en-US": "Provider",
      "es-ES": "Provider",
    },
    description: {
      "pt-BR":
        "Componente raiz que define tema, modo de cor, densidade e mensagens localizadas para a aplicação.",
      "en-US":
        "Root component that sets the theme, color mode, density and localized messages for the app.",
      "es-ES":
        "Componente raíz que define el tema, el modo de color, la densidad y los mensajes localizados de la aplicación.",
    },
  },
  {
    slug: "scrollbar",
    dir: "MsScrollbar",
    components: ["MsScrollbar"],
    category: "layout",
    title: {
      "pt-BR": "Barra de rolagem",
      "en-US": "Scrollbar",
      "es-ES": "Barra de desplazamiento",
    },
    description: {
      "pt-BR":
        "Contêiner rolável com barras de rolagem estilizadas, eixo, espessura e visibilidade configuráveis.",
      "en-US":
        "Scrollable container with styled scrollbars and configurable axis, thickness and visibility.",
      "es-ES":
        "Contenedor desplazable con barras estilizadas y eje, grosor y visibilidad configurables.",
    },
  },
  {
    slug: "separator",
    dir: "MsSeparator",
    components: ["MsSeparator"],
    category: "layout",
    title: {
      "pt-BR": "Separador",
      "en-US": "Separator",
      "es-ES": "Separador",
    },
    description: {
      "pt-BR": "Linha divisória horizontal ou vertical com estilos e rótulo opcional.",
      "en-US": "Horizontal or vertical divider line with styles and an optional label.",
      "es-ES": "Línea divisoria horizontal o vertical con estilos y etiqueta opcional.",
    },
  },
  {
    slug: "split-pane",
    dir: "MsSplitPane",
    components: ["MsSplitPane"],
    category: "layout",
    title: {
      "pt-BR": "Painel dividido",
      "en-US": "Split Pane",
      "es-ES": "Panel dividido",
    },
    description: {
      "pt-BR":
        "Dois painéis redimensionáveis separados por um divisor arrastável e operável pelo teclado.",
      "en-US": "Two resizable panes separated by a draggable, keyboard-operable divider.",
      "es-ES":
        "Dos paneles redimensionables separados por un divisor arrastrable y operable con el teclado.",
    },
    apg: "windowsplitter",
  },
  {
    slug: "theme-scope",
    dir: "MsThemeScope",
    components: ["MsThemeScope"],
    category: "layout",
    title: {
      "pt-BR": "Escopo de tema",
      "en-US": "Theme Scope",
      "es-ES": "Ámbito de tema",
    },
    description: {
      "pt-BR": "Sobrescreve tema, modo de cor e densidade apenas para uma parte da interface.",
      "en-US": "Overrides the theme, color mode and density for one part of the interface.",
      "es-ES":
        "Sobrescribe el tema, el modo de color y la densidad solo para una parte de la interfaz.",
    },
  },
  {
    slug: "accordion",
    dir: "MsAccordion",
    components: ["MsAccordion", "MsAccordionItem"],
    category: "data",
    title: {
      "pt-BR": "Acordeão",
      "en-US": "Accordion",
      "es-ES": "Acordeón",
    },
    description: {
      "pt-BR": "Lista de seções recolhíveis com expansão única ou múltipla.",
      "en-US": "Stack of collapsible sections with single or multiple expansion.",
      "es-ES": "Lista de secciones plegables con expansión única o múltiple.",
    },
    apg: "accordion",
  },
  {
    slug: "animated-number",
    dir: "MsAnimatedNumber",
    components: ["MsAnimatedNumber"],
    category: "data",
    title: {
      "pt-BR": "Número animado",
      "en-US": "Animated Number",
      "es-ES": "Número animado",
    },
    description: {
      "pt-BR":
        "Exibe um número que anima até o valor alvo, com casas decimais, prefixo, sufixo e formatação.",
      "en-US":
        "Displays a number that animates to its target value, with decimals, prefix, suffix and formatting.",
      "es-ES":
        "Muestra un número que se anima hasta el valor objetivo, con decimales, prefijo, sufijo y formato.",
    },
  },
  {
    slug: "avatar",
    dir: "MsAvatar",
    components: ["MsAvatar", "MsAvatarGroup"],
    category: "data",
    title: {
      "pt-BR": "Avatar",
      "en-US": "Avatar",
      "es-ES": "Avatar",
    },
    description: {
      "pt-BR":
        "Imagem de perfil com fallback de iniciais e indicador de status, além de grupo empilhado de avatares.",
      "en-US":
        "Profile image with an initials fallback and status indicator, plus a stacked avatar group.",
      "es-ES":
        "Imagen de perfil con iniciales de respaldo e indicador de estado, además de un grupo apilado de avatares.",
    },
  },
  {
    slug: "badge",
    dir: "MsBadge",
    components: ["MsBadge"],
    category: "data",
    title: {
      "pt-BR": "Badge",
      "en-US": "Badge",
      "es-ES": "Badge",
    },
    description: {
      "pt-BR": "Selo compacto para status, rótulos e contadores numéricos.",
      "en-US": "Compact badge for status, labels and numeric counters.",
      "es-ES": "Insignia compacta para estados, etiquetas y contadores numéricos.",
    },
  },
  {
    slug: "blockquote",
    dir: "MsBlockquote",
    components: ["MsBlockquote"],
    category: "data",
    title: {
      "pt-BR": "Citação",
      "en-US": "Blockquote",
      "es-ES": "Cita",
    },
    description: {
      "pt-BR": "Bloco de citação com fonte, autor, cargo e avatar.",
      "en-US": "Quotation block with source, author, role and avatar.",
      "es-ES": "Bloque de cita con fuente, autor, cargo y avatar.",
    },
  },
  {
    slug: "carousel",
    dir: "MsCarousel",
    components: ["MsCarousel", "MsCarouselSlide"],
    category: "data",
    title: {
      "pt-BR": "Carrossel",
      "en-US": "Carousel",
      "es-ES": "Carrusel",
    },
    description: {
      "pt-BR": "Sequência de slides com setas, indicadores e rotação automática opcional.",
      "en-US": "Sequence of slides with arrows, indicators and optional autoplay.",
      "es-ES": "Secuencia de diapositivas con flechas, indicadores y rotación automática opcional.",
    },
    apg: "carousel",
  },
  {
    slug: "chat-bubble",
    dir: "MsChatBubble",
    components: ["MsChatBubble"],
    category: "data",
    title: {
      "pt-BR": "Balão de conversa",
      "en-US": "Chat Bubble",
      "es-ES": "Burbuja de chat",
    },
    description: {
      "pt-BR":
        "Balão de mensagem de conversa alinhado como enviado ou recebido, com autor e horário.",
      "en-US": "Chat message bubble aligned as sent or received, with author and timestamp.",
      "es-ES": "Burbuja de mensaje de chat alineada como enviada o recibida, con autor y hora.",
    },
  },
  {
    slug: "code",
    dir: "MsCode",
    components: ["MsCode"],
    category: "data",
    title: {
      "pt-BR": "Código",
      "en-US": "Code",
      "es-ES": "Código",
    },
    description: {
      "pt-BR": "Trecho de código em linha com tons, variantes e tamanhos.",
      "en-US": "Inline code snippet with tones, variants and sizes.",
      "es-ES": "Fragmento de código en línea con tonos, variantes y tamaños.",
    },
  },
  {
    slug: "code-block",
    dir: "MsCodeBlock",
    components: ["MsCodeBlock"],
    category: "data",
    title: {
      "pt-BR": "Bloco de código",
      "en-US": "Code Block",
      "es-ES": "Bloque de código",
    },
    description: {
      "pt-BR":
        "Bloco de código com realce de sintaxe, números de linha, nome do arquivo e botão de copiar.",
      "en-US": "Code block with syntax highlighting, line numbers, file name and a copy button.",
      "es-ES":
        "Bloque de código con resaltado de sintaxis, números de línea, nombre de archivo y botón de copiar.",
    },
  },
  {
    slug: "collapse",
    dir: "MsCollapse",
    components: ["MsCollapse"],
    category: "data",
    title: {
      "pt-BR": "Recolhível",
      "en-US": "Collapse",
      "es-ES": "Plegable",
    },
    description: {
      "pt-BR": "Painel único que expande e recolhe o conteúdo ao clicar no cabeçalho.",
      "en-US": "Single panel that expands and collapses its content when the header is clicked.",
      "es-ES": "Panel único que expande y contrae su contenido al hacer clic en el encabezado.",
    },
    apg: "disclosure",
  },
  {
    slug: "glimpse",
    dir: "MsGlimpse",
    components: ["MsGlimpse"],
    category: "data",
    title: {
      "pt-BR": "Glimpse",
      "en-US": "Glimpse",
      "es-ES": "Glimpse",
    },
    description: {
      "pt-BR":
        "Link que mostra um cartão de prévia com título, descrição, imagem e domínio ao passar o cursor ou focar.",
      "en-US":
        "Link that shows a preview card with title, description, image and domain on hover or focus.",
      "es-ES":
        "Enlace que muestra una tarjeta de vista previa con título, descripción, imagen y dominio al pasar el cursor o enfocar.",
    },
  },
  {
    slug: "kbd",
    dir: "MsKbd",
    components: ["MsKbd"],
    category: "data",
    title: {
      "pt-BR": "Tecla",
      "en-US": "Kbd",
      "es-ES": "Tecla",
    },
    description: {
      "pt-BR": "Representa teclas e atalhos de teclado em formato de tecla.",
      "en-US": "Renders keyboard keys and shortcuts as keycaps.",
      "es-ES": "Representa teclas y atajos de teclado con forma de tecla.",
    },
  },
  {
    slug: "list",
    dir: "MsList",
    components: ["MsList", "MsListItem", "MsListGroup"],
    category: "data",
    title: {
      "pt-BR": "Lista",
      "en-US": "List",
      "es-ES": "Lista",
    },
    description: {
      "pt-BR":
        "Lista de itens com título, descrição, conteúdo inicial e final, e agrupamento com cabeçalho.",
      "en-US":
        "List of items with title, description, leading and trailing content, and headed groups.",
      "es-ES":
        "Lista de elementos con título, descripción, contenido inicial y final, y grupos con encabezado.",
    },
  },
  {
    slug: "marquee",
    dir: "MsMarquee",
    components: ["MsMarquee"],
    category: "data",
    title: {
      "pt-BR": "Letreiro",
      "en-US": "Marquee",
      "es-ES": "Marquesina",
    },
    description: {
      "pt-BR":
        "Faixa que rola o conteúdo continuamente, com velocidade, direção, pausa ao passar o cursor e bordas esmaecidas.",
      "en-US":
        "Strip that scrolls content continuously, with speed, direction, pause on hover and faded edges.",
      "es-ES":
        "Franja que desplaza el contenido de forma continua, con velocidad, dirección, pausa al pasar el cursor y bordes difuminados.",
    },
  },
  {
    slug: "parallax",
    dir: "MsParallax",
    components: ["MsParallax"],
    category: "data",
    title: {
      "pt-BR": "Parallax",
      "en-US": "Parallax",
      "es-ES": "Parallax",
    },
    description: {
      "pt-BR": "Seção com camada de fundo que se move em velocidade diferente durante a rolagem.",
      "en-US": "Section with a background layer that moves at a different speed while scrolling.",
      "es-ES":
        "Sección con una capa de fondo que se mueve a otra velocidad durante el desplazamiento.",
    },
  },
  {
    slug: "pointer",
    dir: "MsPointer",
    components: ["MsPointer"],
    category: "data",
    title: {
      "pt-BR": "Ponteiro",
      "en-US": "Pointer",
      "es-ES": "Puntero",
    },
    description: {
      "pt-BR":
        "Elemento decorativo que acompanha o cursor do mouse, com estilos visuais configuráveis.",
      "en-US": "Decorative element that follows the mouse cursor, with configurable visual styles.",
      "es-ES":
        "Elemento decorativo que sigue el cursor del ratón, con estilos visuales configurables.",
    },
  },
  {
    slug: "snippet",
    dir: "MsSnippet",
    components: ["MsSnippet"],
    category: "data",
    title: {
      "pt-BR": "Snippet",
      "en-US": "Snippet",
      "es-ES": "Snippet",
    },
    description: {
      "pt-BR":
        "Comando de terminal com prompt e botão de copiar, com abas opcionais para variantes como npm e pnpm.",
      "en-US":
        "Terminal command with a prompt and copy button, with optional tabs for variants such as npm and pnpm.",
      "es-ES":
        "Comando de terminal con prompt y botón de copiar, con pestañas opcionales para variantes como npm y pnpm.",
    },
  },
  {
    slug: "table",
    dir: "MsTable",
    components: [
      "MsTable",
      "MsTableHead",
      "MsTableBody",
      "MsTableRow",
      "MsTableHeaderCell",
      "MsTableCell",
      "MsTableFooter",
    ],
    category: "data",
    title: {
      "pt-BR": "Tabela",
      "en-US": "Table",
      "es-ES": "Tabla",
    },
    description: {
      "pt-BR":
        "Tabela de dados com linhas zebradas, bordas, densidade, cabeçalho fixo e colunas ordenáveis.",
      "en-US":
        "Data table with striped rows, borders, density, a sticky header and sortable columns.",
      "es-ES":
        "Tabla de datos con filas alternas, bordes, densidad, encabezado fijo y columnas ordenables.",
    },
  },
  {
    slug: "tag",
    dir: "MsTag",
    components: ["MsTag"],
    category: "data",
    title: {
      "pt-BR": "Tag",
      "en-US": "Tag",
      "es-ES": "Etiqueta",
    },
    description: {
      "pt-BR": "Rótulo compacto para categorizar conteúdo, com tons, variantes e opção de remover.",
      "en-US":
        "Compact label for categorizing content, with tones, variants and an optional remove button.",
      "es-ES":
        "Etiqueta compacta para categorizar contenido, con tonos, variantes y opción de eliminar.",
    },
  },
  {
    slug: "timeline",
    dir: "MsTimeline",
    components: ["MsTimeline", "MsTimelineItem"],
    category: "data",
    title: {
      "pt-BR": "Linha do tempo",
      "en-US": "Timeline",
      "es-ES": "Línea de tiempo",
    },
    description: {
      "pt-BR": "Sequência cronológica de marcos com título, data e descrição.",
      "en-US": "Chronological sequence of milestones with title, timestamp and description.",
      "es-ES": "Secuencia cronológica de hitos con título, fecha y descripción.",
    },
  },
  {
    slug: "tree",
    dir: "MsTree",
    components: ["MsTree", "MsTreeNode"],
    category: "data",
    title: {
      "pt-BR": "Árvore",
      "en-US": "Tree",
      "es-ES": "Árbol",
    },
    description: {
      "pt-BR": "Árvore hierárquica de nós expansíveis e selecionáveis, navegável pelo teclado.",
      "en-US": "Hierarchical tree of expandable, selectable nodes with keyboard navigation.",
      "es-ES": "Árbol jerárquico de nodos expandibles y seleccionables, navegable con el teclado.",
    },
    apg: "treeview",
  },
  {
    slug: "truncate",
    dir: "MsTruncate",
    components: ["MsTruncate"],
    category: "data",
    title: {
      "pt-BR": "Truncar",
      "en-US": "Truncate",
      "es-ES": "Truncar",
    },
    description: {
      "pt-BR": "Trunca texto em uma ou várias linhas ou no meio, com opção de expandir.",
      "en-US":
        "Truncates text to one or more lines or in the middle, with an optional expand toggle.",
      "es-ES": "Trunca el texto en una o varias líneas o en el medio, con opción de expandir.",
    },
  },
];
