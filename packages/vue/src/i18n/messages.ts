/**
 * UI strings rendered by the components themselves (accessible names, default
 * placeholders, empty states). Component props still win: a prop such as
 * `placeholder` or `emptyText` overrides the message for that instance.
 *
 * Provide a locale or partial overrides with `<MsProvider locale="en-US">` /
 * `<MsProvider :messages="{ select: { empty: '…' } }">`, or app-wide with
 * `app.use(createMsI18n({ locale, messages }))`.
 */
export interface MsMessages {
  /** BCP 47 tag used for Intl formatting (month and weekday names, long dates). */
  locale: string;
  alert: { dismiss: string };
  appShell: { rail: string };
  avatar: { fallback: string; more: string };
  banner: { dismiss: string };
  breadcrumbs: { label: string; showAll: string };
  carousel: {
    label: string;
    previous: string;
    next: string;
    play: string;
    pause: string;
    indicators: string;
    slide: (index: number, total: number) => string;
    goTo: (index: number) => string;
    roleDescription: string;
    slideRoleDescription: string;
  };
  code: { copy: string; copied: string };
  codeBlock: { copy: string; copied: string; expand: string; collapse: string };
  colorPicker: { pick: string; hex: string };
  commandPalette: {
    label: string;
    placeholder: string;
    empty: string;
    navigateHint: string;
    runHint: string;
    defaultGroup: string;
  };
  confirmDialog: { title: string; confirm: string; cancel: string };
  datePicker: {
    clear: string;
    previousMonth: string;
    nextMonth: string;
    chooseDate: string;
    chooseRange: string;
    chooseTime: string;
    time: string;
    hour: string;
    minutes: string;
    meridiem: string;
    today: string;
    tomorrow: string;
    nextDays: (days: number) => string;
    placeholderDate: string;
    placeholderDateTime: string;
    placeholderRange: string;
    placeholderTime: string;
    rangeSeparator: string;
  };
  dialog: { close: string };
  dock: { label: string };
  drawer: { close: string };
  dropzone: {
    prompt: string;
    hint: string;
    select: string;
    remove: string;
    removeFile: (name: string) => string;
  };
  emojiPicker: { search: string };
  fileInput: { prompt: string; remove: string };
  formWizard: { previous: string; next: string; finish: string; progress: string };
  glimpse: { label: string };
  iconPicker: { search: string; placeholder: string; all: string };
  input: { clear: string; showPassword: string; hidePassword: string };
  label: { required: string; optional: string };
  lightbox: { label: string; close: string; previous: string; next: string; image: string };
  navbar: { toggle: string };
  pinInput: { digit: (index: number, total: number) => string };
  pagination: {
    label: string;
    first: string;
    previous: string;
    next: string;
    last: string;
    goTo: string;
    total: (total: number) => string;
  };
  passwordInput: {
    placeholder: string;
    show: string;
    hide: string;
    strength: string;
    levels: readonly [string, string, string, string, string];
    criteria: {
      length: string;
      lowercase: string;
      uppercase: string;
      number: string;
      symbol: string;
    };
  };
  progress: { loading: string };
  scrollSpy: { label: string };
  searchField: { label: string; placeholder: string; clear: string };
  select: {
    placeholder: string;
    searchPlaceholder: string;
    clear: string;
    empty: string;
    create: (query: string) => string;
    selectedCount: (count: number) => string;
    more: (count: number) => string;
    removeOption: (label: string) => string;
  };
  sidebar: { expand: string; collapse: string };
  sidebarMenu: { label: string };
  snippet: { label: string; copy: string; copied: string; copyShort: string; copiedShort: string };
  spinner: { label: string };
  splitPane: { resize: string };
  stepper: { label: string };
  tabs: { previous: string; next: string };
  tag: { remove: string };
  toast: { dismiss: string };
  truncate: { more: string; less: string };
}

export const msMessagesPtBR: MsMessages = {
  locale: "pt-BR",
  alert: { dismiss: "Fechar alerta" },
  appShell: { rail: "Navegação compacta" },
  avatar: { fallback: "Avatar", more: "Mais membros" },
  banner: { dismiss: "Fechar aviso" },
  breadcrumbs: { label: "Navegação estrutural", showAll: "Mostrar todos os níveis" },
  carousel: {
    label: "Galeria de slides",
    previous: "Slide anterior",
    next: "Próximo slide",
    play: "Iniciar rotação automática",
    pause: "Pausar rotação automática",
    indicators: "Seletores de slide",
    slide: (index, total) => `${index} de ${total}`,
    goTo: (index) => `Ir para o slide ${index}`,
    roleDescription: "carrossel",
    slideRoleDescription: "slide",
  },
  code: { copy: "Copiar código", copied: "Copiado!" },
  codeBlock: {
    copy: "Copiar",
    copied: "Copiado",
    expand: "Mostrar mais linhas",
    collapse: "Recolher código",
  },
  colorPicker: { pick: "Selecionar cor", hex: "Código hexadecimal da cor" },
  commandPalette: {
    label: "Paleta de comandos",
    placeholder: "Digite um comando ou pesquise...",
    empty: "Nenhum comando encontrado.",
    navigateHint: "Navegar com ↑ ↓",
    runHint: "Executar com ↵",
    defaultGroup: "Ações",
  },
  confirmDialog: { title: "Confirmar ação", confirm: "Confirmar", cancel: "Cancelar" },
  datePicker: {
    clear: "Limpar data",
    previousMonth: "Mês anterior",
    nextMonth: "Próximo mês",
    chooseDate: "Escolher data",
    chooseRange: "Escolher período",
    chooseTime: "Escolher horário",
    time: "Horário",
    hour: "Hora",
    minutes: "Minutos",
    meridiem: "AM ou PM",
    today: "Hoje",
    tomorrow: "Amanhã",
    nextDays: (days) => `Próximos ${days} dias`,
    placeholderDate: "Selecione uma data...",
    placeholderDateTime: "Selecione data e horário...",
    placeholderRange: "Selecione o período (início até fim)...",
    placeholderTime: "Selecione o horário (HH:mm)...",
    rangeSeparator: " até ",
  },
  dialog: { close: "Fechar" },
  dock: { label: "Barra de aplicativos" },
  drawer: { close: "Fechar painel" },
  dropzone: {
    prompt: "Arraste e solte arquivos aqui",
    hint: "ou clique para selecionar do seu computador",
    select: "Selecionar arquivos",
    remove: "Remover arquivo",
    removeFile: (name) => `Remover ${name}`,
  },
  emojiPicker: { search: "Buscar emoji..." },
  fileInput: {
    prompt: "Arraste e solte arquivos aqui, ou clique para selecionar",
    remove: "Remover arquivo",
  },
  formWizard: {
    previous: "Voltar",
    next: "Avançar",
    finish: "Concluir",
    progress: "Progresso do formulário",
  },
  glimpse: { label: "Pré-visualização do link" },
  iconPicker: { search: "Buscar ícones...", placeholder: "Selecione um ícone...", all: "Todos" },
  input: { clear: "Limpar campo", showPassword: "Exibir senha", hidePassword: "Ocultar senha" },
  label: { required: "Obrigatório", optional: "(opcional)" },
  lightbox: {
    label: "Visualizador de imagens",
    close: "Fechar visualizador",
    previous: "Imagem anterior",
    next: "Próxima imagem",
    image: "Imagem em destaque",
  },
  navbar: { toggle: "Alternar menu de navegação" },
  pinInput: { digit: (index, total) => `Dígito ${index} de ${total}` },
  pagination: {
    label: "Paginação",
    first: "Primeira página",
    previous: "Página anterior",
    next: "Próxima página",
    last: "Última página",
    goTo: "Ir para",
    total: (total) => `Total de ${total} itens`,
  },
  passwordInput: {
    placeholder: "Digite sua senha...",
    show: "Exibir senha",
    hide: "Ocultar senha",
    strength: "Segurança da senha:",
    levels: ["Muito fraca", "Fraca", "Razoável", "Boa", "Excelente"],
    criteria: {
      length: "Mínimo de 8 caracteres",
      lowercase: "Pelo menos 1 letra minúscula",
      uppercase: "Pelo menos 1 letra maiúscula",
      number: "Pelo menos 1 número",
      symbol: "Pelo menos 1 caractere especial",
    },
  },
  progress: { loading: "Carregando..." },
  scrollSpy: { label: "Navegação na página" },
  searchField: { label: "Pesquisar", placeholder: "Pesquisar...", clear: "Limpar pesquisa" },
  select: {
    placeholder: "Selecione...",
    searchPlaceholder: "Buscar...",
    clear: "Limpar seleção",
    empty: "Nenhuma opção encontrada",
    create: (query) => `Criar "${query}"`,
    selectedCount: (count) => `${count} selecionados`,
    more: (count) => `+${count} mais`,
    removeOption: (label) => `Remover ${label}`,
  },
  sidebar: { expand: "Expandir barra lateral", collapse: "Recolher barra lateral" },
  sidebarMenu: { label: "Navegação lateral" },
  snippet: {
    label: "Gerenciadores e comandos",
    copy: "Copiar comando",
    copied: "Copiado para a área de transferência",
    copyShort: "Copiar",
    copiedShort: "Copiado!",
  },
  spinner: { label: "Carregando..." },
  splitPane: { resize: "Redimensionar painéis" },
  stepper: { label: "Passos do processo" },
  tabs: { previous: "Abas anteriores", next: "Próximas abas" },
  tag: { remove: "Remover" },
  toast: { dismiss: "Fechar notificação" },
  truncate: { more: "Ver mais", less: "Ver menos" },
};

export const msMessagesEn: MsMessages = {
  locale: "en-US",
  alert: { dismiss: "Dismiss alert" },
  appShell: { rail: "Compact navigation" },
  avatar: { fallback: "Avatar", more: "More members" },
  banner: { dismiss: "Dismiss notice" },
  breadcrumbs: { label: "Breadcrumb", showAll: "Show all breadcrumb items" },
  carousel: {
    label: "Slides",
    previous: "Previous slide",
    next: "Next slide",
    play: "Start automatic rotation",
    pause: "Pause automatic rotation",
    indicators: "Choose slide",
    slide: (index, total) => `${index} of ${total}`,
    goTo: (index) => `Go to slide ${index}`,
    roleDescription: "carousel",
    slideRoleDescription: "slide",
  },
  code: { copy: "Copy code", copied: "Copied!" },
  codeBlock: {
    copy: "Copy",
    copied: "Copied",
    expand: "Show more lines",
    collapse: "Collapse code",
  },
  colorPicker: { pick: "Pick color", hex: "Hex color code" },
  commandPalette: {
    label: "Command palette",
    placeholder: "Type a command or search...",
    empty: "No commands found.",
    navigateHint: "Navigate with ↑ ↓",
    runHint: "Run with ↵",
    defaultGroup: "Actions",
  },
  confirmDialog: { title: "Confirm action", confirm: "Confirm", cancel: "Cancel" },
  datePicker: {
    clear: "Clear date",
    previousMonth: "Previous month",
    nextMonth: "Next month",
    chooseDate: "Choose date",
    chooseRange: "Choose date range",
    chooseTime: "Choose time",
    time: "Time",
    hour: "Hour",
    minutes: "Minutes",
    meridiem: "AM or PM",
    today: "Today",
    tomorrow: "Tomorrow",
    nextDays: (days) => `Next ${days} days`,
    placeholderDate: "Select a date...",
    placeholderDateTime: "Select date and time...",
    placeholderRange: "Select a range (start to end)...",
    placeholderTime: "Select a time (HH:mm)...",
    rangeSeparator: " to ",
  },
  dialog: { close: "Close" },
  dock: { label: "App dock" },
  drawer: { close: "Close drawer" },
  dropzone: {
    prompt: "Drag and drop files here",
    hint: "or click to select from your computer",
    select: "Select files",
    remove: "Remove file",
    removeFile: (name) => `Remove ${name}`,
  },
  emojiPicker: { search: "Search emoji..." },
  fileInput: { prompt: "Drag and drop files here, or click to select", remove: "Remove file" },
  formWizard: { previous: "Back", next: "Next", finish: "Finish", progress: "Form progress" },
  glimpse: { label: "Link preview" },
  iconPicker: { search: "Search icons...", placeholder: "Select an icon...", all: "All" },
  input: { clear: "Clear field", showPassword: "Show password", hidePassword: "Hide password" },
  label: { required: "Required", optional: "(optional)" },
  lightbox: {
    label: "Image viewer",
    close: "Close viewer",
    previous: "Previous image",
    next: "Next image",
    image: "Featured image",
  },
  navbar: { toggle: "Toggle navigation menu" },
  pinInput: { digit: (index, total) => `Digit ${index} of ${total}` },
  pagination: {
    label: "Pagination",
    first: "First page",
    previous: "Previous page",
    next: "Next page",
    last: "Last page",
    goTo: "Go to",
    total: (total) => `${total} items in total`,
  },
  passwordInput: {
    placeholder: "Enter your password...",
    show: "Show password",
    hide: "Hide password",
    strength: "Password strength:",
    levels: ["Very weak", "Weak", "Fair", "Good", "Excellent"],
    criteria: {
      length: "At least 8 characters",
      lowercase: "At least 1 lowercase letter",
      uppercase: "At least 1 uppercase letter",
      number: "At least 1 number",
      symbol: "At least 1 special character",
    },
  },
  progress: { loading: "Loading..." },
  scrollSpy: { label: "On this page" },
  searchField: { label: "Search", placeholder: "Search...", clear: "Clear search" },
  select: {
    placeholder: "Select...",
    searchPlaceholder: "Search...",
    clear: "Clear selection",
    empty: "No options found",
    create: (query) => `Create "${query}"`,
    selectedCount: (count) => `${count} selected`,
    more: (count) => `+${count} more`,
    removeOption: (label) => `Remove ${label}`,
  },
  sidebar: { expand: "Expand sidebar", collapse: "Collapse sidebar" },
  sidebarMenu: { label: "Sidebar navigation" },
  snippet: {
    label: "Package managers and commands",
    copy: "Copy command",
    copied: "Copied to clipboard",
    copyShort: "Copy",
    copiedShort: "Copied!",
  },
  spinner: { label: "Loading..." },
  splitPane: { resize: "Resize panels" },
  stepper: { label: "Process steps" },
  tabs: { previous: "Previous tabs", next: "Next tabs" },
  tag: { remove: "Remove" },
  toast: { dismiss: "Dismiss notification" },
  truncate: { more: "Show more", less: "Show less" },
};

export const msMessagesEs: MsMessages = {
  locale: "es-ES",
  alert: { dismiss: "Cerrar alerta" },
  appShell: { rail: "Navegación compacta" },
  avatar: { fallback: "Avatar", more: "Más miembros" },
  banner: { dismiss: "Cerrar aviso" },
  breadcrumbs: { label: "Ruta de navegación", showAll: "Mostrar todos los niveles" },
  carousel: {
    label: "Galería de diapositivas",
    previous: "Diapositiva anterior",
    next: "Diapositiva siguiente",
    play: "Iniciar rotación automática",
    pause: "Pausar rotación automática",
    indicators: "Elegir diapositiva",
    slide: (index, total) => `${index} de ${total}`,
    goTo: (index) => `Ir a la diapositiva ${index}`,
    roleDescription: "carrusel",
    slideRoleDescription: "diapositiva",
  },
  code: { copy: "Copiar código", copied: "¡Copiado!" },
  codeBlock: {
    copy: "Copiar",
    copied: "Copiado",
    expand: "Mostrar más líneas",
    collapse: "Contraer código",
  },
  colorPicker: { pick: "Elegir color", hex: "Código hexadecimal del color" },
  commandPalette: {
    label: "Paleta de comandos",
    placeholder: "Escribe un comando o busca...",
    empty: "No se encontraron comandos.",
    navigateHint: "Navegar con ↑ ↓",
    runHint: "Ejecutar con ↵",
    defaultGroup: "Acciones",
  },
  confirmDialog: { title: "Confirmar acción", confirm: "Confirmar", cancel: "Cancelar" },
  datePicker: {
    clear: "Borrar fecha",
    previousMonth: "Mes anterior",
    nextMonth: "Mes siguiente",
    chooseDate: "Elegir fecha",
    chooseRange: "Elegir período",
    chooseTime: "Elegir hora",
    time: "Hora",
    hour: "Hora",
    minutes: "Minutos",
    meridiem: "AM o PM",
    today: "Hoy",
    tomorrow: "Mañana",
    nextDays: (days) => `Próximos ${days} días`,
    placeholderDate: "Selecciona una fecha...",
    placeholderDateTime: "Selecciona fecha y hora...",
    placeholderRange: "Selecciona el período (inicio a fin)...",
    placeholderTime: "Selecciona la hora (HH:mm)...",
    rangeSeparator: " a ",
  },
  dialog: { close: "Cerrar" },
  dock: { label: "Barra de aplicaciones" },
  drawer: { close: "Cerrar panel" },
  dropzone: {
    prompt: "Arrastra y suelta archivos aquí",
    hint: "o haz clic para seleccionarlos en tu equipo",
    select: "Seleccionar archivos",
    remove: "Quitar archivo",
    removeFile: (name) => `Quitar ${name}`,
  },
  emojiPicker: { search: "Buscar emoji..." },
  fileInput: {
    prompt: "Arrastra y suelta archivos aquí, o haz clic para seleccionar",
    remove: "Quitar archivo",
  },
  formWizard: {
    previous: "Atrás",
    next: "Siguiente",
    finish: "Finalizar",
    progress: "Progreso del formulario",
  },
  glimpse: { label: "Vista previa del enlace" },
  iconPicker: { search: "Buscar iconos...", placeholder: "Selecciona un icono...", all: "Todos" },
  input: {
    clear: "Borrar campo",
    showPassword: "Mostrar contraseña",
    hidePassword: "Ocultar contraseña",
  },
  label: { required: "Obligatorio", optional: "(opcional)" },
  lightbox: {
    label: "Visor de imágenes",
    close: "Cerrar visor",
    previous: "Imagen anterior",
    next: "Imagen siguiente",
    image: "Imagen destacada",
  },
  navbar: { toggle: "Alternar menú de navegación" },
  pinInput: { digit: (index, total) => `Dígito ${index} de ${total}` },
  pagination: {
    label: "Paginación",
    first: "Primera página",
    previous: "Página anterior",
    next: "Página siguiente",
    last: "Última página",
    goTo: "Ir a",
    total: (total) => `${total} elementos en total`,
  },
  passwordInput: {
    placeholder: "Escribe tu contraseña...",
    show: "Mostrar contraseña",
    hide: "Ocultar contraseña",
    strength: "Seguridad de la contraseña:",
    levels: ["Muy débil", "Débil", "Aceptable", "Buena", "Excelente"],
    criteria: {
      length: "Al menos 8 caracteres",
      lowercase: "Al menos 1 letra minúscula",
      uppercase: "Al menos 1 letra mayúscula",
      number: "Al menos 1 número",
      symbol: "Al menos 1 carácter especial",
    },
  },
  progress: { loading: "Cargando..." },
  scrollSpy: { label: "En esta página" },
  searchField: { label: "Buscar", placeholder: "Buscar...", clear: "Borrar búsqueda" },
  select: {
    placeholder: "Selecciona...",
    searchPlaceholder: "Buscar...",
    clear: "Borrar selección",
    empty: "No se encontraron opciones",
    create: (query) => `Crear "${query}"`,
    selectedCount: (count) => `${count} seleccionados`,
    more: (count) => `+${count} más`,
    removeOption: (label) => `Quitar ${label}`,
  },
  sidebar: { expand: "Expandir barra lateral", collapse: "Contraer barra lateral" },
  sidebarMenu: { label: "Navegación lateral" },
  snippet: {
    label: "Gestores de paquetes y comandos",
    copy: "Copiar comando",
    copied: "Copiado al portapapeles",
    copyShort: "Copiar",
    copiedShort: "¡Copiado!",
  },
  spinner: { label: "Cargando..." },
  splitPane: { resize: "Redimensionar paneles" },
  stepper: { label: "Pasos del proceso" },
  tabs: { previous: "Pestañas anteriores", next: "Pestañas siguientes" },
  tag: { remove: "Quitar" },
  toast: { dismiss: "Cerrar notificación" },
  truncate: { more: "Ver más", less: "Ver menos" },
};

/** Built-in dictionaries by language (the region is ignored: "en-GB" uses English). */
export const MS_BUILTIN_MESSAGES: Readonly<Record<string, MsMessages>> = {
  pt: msMessagesPtBR,
  en: msMessagesEn,
  es: msMessagesEs,
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (...args: never[]) => unknown
    ? T[K]
    : T[K] extends readonly unknown[]
      ? T[K]
      : T[K] extends object
        ? DeepPartial<T[K]>
        : T[K];
};

/** Partial overrides: set only the strings you want to change. */
export type MsMessagesOverride = DeepPartial<MsMessages>;

/** Built-in dictionary for a BCP 47 tag, falling back to Portuguese. */
export function msMessagesForLocale(locale: string): MsMessages {
  const language = locale.toLowerCase().split("-")[0] ?? "pt";
  const base = MS_BUILTIN_MESSAGES[language] ?? msMessagesPtBR;
  return base.locale === locale ? base : { ...base, locale };
}

/** Merges partial overrides onto a full dictionary (one level of groups). */
export function mergeMsMessages(base: MsMessages, override?: MsMessagesOverride): MsMessages {
  if (!override) return base;
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) continue;
    const current = out[key];
    out[key] =
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      typeof current === "object" &&
      current !== null
        ? mergeMsMessages(current as MsMessages, value as MsMessagesOverride)
        : value;
  }
  return out as unknown as MsMessages;
}
