import { createApp, ref, reactive, computed, watch } from "vue";
import {
  MsButton,
  MsButtonGroup,
  MsDropdownButton,
  MsMenu,
  MsInput,
  MsTextarea,
  MsCheckbox,
  MsRadioGroup,
  MsRadio,
  MsSwitch,
  MsField,
  MsNativeSelect,
  MsBadge,
  MsDialog,
  MsAlert,
  MsCard,
  MsAvatar,
  MsAvatarGroup,
  MsTabs,
  MsTabList,
  MsTab,
  MsTabPanels,
  MsTabPanel,
  MsSpinner,
  MsProvider,
  MsThemeScope,
  MsProgress,
  MsSkeleton,
  MsTooltip,
  MsBreadcrumbs,
  MsBreadcrumbItem,
  MsBreadcrumbSeparator,
  MsTag,
  MsEmptyState,
  MsSeparator,
  MsIconButton,
  MsSegmentedControl,
  MsSearchField,
  MsAppShell,
  MsTopbar,
  MsSidebar,
  MsNavigationRail,
  MsContent,
  MsAside,
  MsFooter,
  MsStatusBar,
  MsPage,
  MsPageHeader,
  MsPageActions,
  MsSelect,
  MsTable,
  MsTableHead,
  MsTableBody,
  MsTableRow,
  MsTableHeaderCell,
  MsTableCell,
  MsTableFooter,
  MsContainer,
  MsBanner,
  MsDrawer,
  MsAccordion,
  MsAccordionItem,
  MsPopover,
  MsConfirmDialog,
  MsTimeline,
  MsTimelineItem,
  MsProgressRadial,
  MsStatus,
  MsRating,
  MsToast,
  MsToastContainer,
  MsAnimatedNumber,
  MsList,
  MsListItem,
  MsListGroup,
  MsRange,
  MsStepper,
  MsStep,
  MsFileInput,
  MsTree,
  MsTreeNode,
  MsContextMenu,
  MsChatBubble,
  MsCarousel,
  MsCarouselSlide,
  MsDock,
  MsDockItem,
  MsColorPicker,
  MsScrollSpy,
  MsSidebarMenu,
  MsSidebarMenuGroup,
  MsSidebarMenuItem,
  MsNavbar,
  MsScrollbar,
  MsCode,
  MsCodeBlock,
  MsLink,
  MsBlockquote,
  MsLabel,
  MsTruncate,
  MsPasswordInput,
  MsMaskedInput,
  MsPinInput,
  MsFormWizard,
  MsPagination,
  MsToggleGroup,
  MsToggleGroupItem,
  MsCollapse,
  MsIconPicker,
  MsEmojiPicker,
  MsDatePicker,
  MsCommandPalette,
  MsCanvas,
  MsBentoGrid,
  MsBentoItem,
  MsMasonryGrid,
  MsSplitPane,
  MsLightbox,
  MsDropzone,
  MsMarquee,
  MsParallax,
  MsPointer,
  MsFab,
  MsSnippet,
  MsChoicebox,
  MsChoiceboxItem,
  MsGlimpse,
} from "@magic-style/vue";
import { useBatch15, batch15TemplatesHtml } from "./studio-batch15.js";
import { useBatch9To14, batch9To14TemplatesHtml } from "./studio-batch9-14.js";
import { useFoundationStudio, foundationTemplatesHtml } from "./studio-foundation.js";
import { useBatchComponents, batchTemplatesHtml } from "./studio-batch5-8.js";
import { componentDocs } from "./studio-api-docs.js";
import { variationsTemplatesHtml } from "./studio-variations.js";
import { docTemplatesHtml } from "./studio-docs.js";

const App = {
  components: {
    MsSidebarMenu,
    MsSidebarMenuGroup,
    MsSidebarMenuItem,
    MsButton,
    MsButtonGroup,
    MsDropdownButton,
    MsMenu,
    MsInput,
    MsTextarea,
    MsCheckbox,
    MsRadioGroup,
    MsRadio,
    MsSwitch,
    MsField,
    MsNativeSelect,
    MsBadge,
    MsDialog,
    MsAlert,
    MsCard,
    MsAvatar,
    MsAvatarGroup,
    MsTabs,
    MsTabList,
    MsTab,
    MsTabPanels,
    MsTabPanel,
    MsSpinner,
    MsProvider,
    MsThemeScope,
    MsProgress,
    MsSkeleton,
    MsTooltip,
    MsBreadcrumbs,
    MsBreadcrumbItem,
    MsBreadcrumbSeparator,
    MsTag,
    MsEmptyState,
    MsSeparator,
    MsIconButton,
    MsSegmentedControl,
    MsSearchField,
    MsAppShell,
    MsTopbar,
    MsSidebar,
    MsNavigationRail,
    MsContent,
    MsAside,
    MsFooter,
    MsStatusBar,
    MsPage,
    MsPageHeader,
    MsPageActions,
    MsSelect,
    MsTable,
    MsTableHead,
    MsTableBody,
    MsTableRow,
    MsTableHeaderCell,
    MsTableCell,
    MsTableFooter,
    MsContainer,
    MsBanner,
    MsDrawer,
    MsAccordion,
    MsAccordionItem,
    MsPopover,
    MsConfirmDialog,
    MsTimeline,
    MsTimelineItem,
    MsProgressRadial,
    MsStatus,
    MsRating,
    MsToast,
    MsToastContainer,
    MsAnimatedNumber,
    MsList,
    MsListItem,
    MsListGroup,
    MsRange,
    MsStepper,
    MsStep,
    MsFileInput,
    MsTree,
    MsTreeNode,
    MsContextMenu,
    MsChatBubble,
    MsCarousel,
    MsCarouselSlide,
    MsDock,
    MsDockItem,
    MsColorPicker,
    MsScrollSpy,
    MsNavbar,
    MsScrollbar,
    MsCode,
    MsCodeBlock,
    MsLink,
    MsBlockquote,
    MsLabel,
    MsTruncate,
    MsPasswordInput,
    MsMaskedInput,
    MsPinInput,
    MsFormWizard,
    MsPagination,
    MsToggleGroup,
    MsToggleGroupItem,
    MsCollapse,
    MsIconPicker,
    MsEmojiPicker,
    MsDatePicker,
    MsCommandPalette,
    MsCanvas,
    MsBentoGrid,
    MsBentoItem,
    MsMasonryGrid,
    MsSplitPane,
    MsLightbox,
    MsDropzone,
    MsMarquee,
    MsParallax,
    MsPointer,
    MsFab,
    MsSnippet,
    MsChoicebox,
    MsChoiceboxItem,
    MsGlimpse,
  },
  setup() {
    const TAB_ALIASES = {
      button: "buttons",
      buttons: "buttons",
      input: "inputs",
      inputs: "inputs",
      select: "select",
      badge: "badges",
      badges: "badges",
      card: "cards",
      cards: "cards",
      dialog: "dialogs",
      dialogs: "dialogs",
      alert: "alerts",
      alerts: "alerts",
      avatar: "avatars",
      avatars: "avatars",
      tab: "tabs",
      tabs: "tabs",
      table: "tables",
      tables: "tables",
      spinner: "spinners",
      spinners: "spinners",
      skeleton: "skeletons",
      skeletons: "skeletons",
      tooltip: "tooltips",
      tooltips: "tooltips",
      breadcrumb: "breadcrumbs",
      breadcrumbs: "breadcrumbs",
      tag: "tags",
      tags: "tags",
      switch: "selections",
      checkbox: "selections",
      radio: "selections",
      selections: "selections",
      textarea: "inputs",
      field: "fields",
      fields: "fields",
      drawer: "drawers",
      drawers: "drawers",
      accordion: "accordions",
      accordions: "accordions",
      popover: "popovers",
      popovers: "popovers",
      toast: "toasts",
      toasts: "toasts",
      rating: "ratings",
      ratings: "ratings",
      list: "lists",
      lists: "lists",
      container: "containers",
      containers: "containers",
      banner: "banners",
      banners: "banners",
      timeline: "timeline",
      stepper: "stepper",
      tree: "tree",
      menu: "dropdown",
      dropdown: "dropdown",
      navbar: "navbar",
      sidebar: "sidebar",
      footer: "footer",
      scrollbar: "scrollbar",
      forms: "inputs",
    };

    const getNormalizedTab = (raw) => {
      const clean = (raw || "").toLowerCase().replace(/^#/, "").replace(/^ms-?/, "");
      return TAB_ALIASES[clean] || clean || "overview";
    };

    const initialTab =
      typeof window !== "undefined" && window.location.hash
        ? getNormalizedTab(window.location.hash)
        : "overview";
    const activeTab = ref(initialTab || "overview");

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", () => {
        const nextTab = getNormalizedTab(window.location.hash);
        if (nextTab && activeTab.value !== nextTab) {
          activeTab.value = nextTab;
        }
      });
    }

    watch(activeTab, (val) => {
      if (typeof window !== "undefined") {
        if (window.location.hash.replace(/^#/, "") !== val) {
          window.history.replaceState(null, "", `#${val}`);
        }
      }
    });

    const copiedImport = ref(null);
    const copyImport = (cmpName) => {
      const kebab = cmpName
        .replace(/^Ms/, "")
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "");
      const code =
        "import { " +
        cmpName +
        " } from '@magic-style/vue';\nimport '@magic-style/css/components/" +
        kebab +
        ".css';";
      if (typeof window !== "undefined" && window.navigator?.clipboard) {
        window.navigator.clipboard.writeText(code);
        copiedImport.value = cmpName;
        setTimeout(() => {
          if (copiedImport.value === cmpName) copiedImport.value = null;
        }, 2000);
      }
    };
    const copied = ref(false);
    const foundation = reactive(useFoundationStudio());
    const batch = reactive(useBatchComponents());
    const b9 = reactive(useBatch9To14());
    const b15 = reactive(useBatch15());

    if (typeof window !== "undefined") {
      window.__studio = { activeTab, foundation };
    }

    const docsSnippetInstall = [
      { label: "pnpm", code: "pnpm add @magic-style/vue @magic-style/css", language: "bash" },
      { label: "npm", code: "npm install @magic-style/vue @magic-style/css", language: "bash" },
      { label: "yarn", code: "yarn add @magic-style/vue @magic-style/css", language: "bash" },
    ];
    const docsMainTsCode =
      "import { createApp } from 'vue';\nimport App from './App.vue';\n\n// Fundação de Design Tokens & Theming Magic-Style\nimport '@magic-style/css/reset.css';\nimport '@magic-style/css/tokens.css';\nimport '@magic-style/css/themes.css';\nimport '@magic-style/css/components/index.css';\n\nconst app = createApp(App);\napp.mount('#app');";
    const docsAppVueCode =
      '<script setup lang="ts">\nimport { MsButton, MsCard, MsBadge, MsInput } from "@magic-style/vue";\nimport { ref } from "vue";\n\nconst username = ref("");\n</script>\n\n<template>\n  <MsCard>\n    <div style="display: flex; justify-content: space-between; align-items: center;">\n      <h2>Painel Magic-Style</h2>\n      <MsBadge tone="success" variant="soft" data-pill>Sistema Conectado</MsBadge>\n    </div>\n\n    <MsInput v-model="username" placeholder="Digite seu nome..." clearable />\n\n    <div style="margin-top: 16px;">\n      <MsButton variant="solid" tone="primary">Confirmar Operação</MsButton>\n    </div>\n  </MsCard>\n</template>';
    const docsIndexHtmlCode =
      '<!-- Configuração recomendada na raiz da aplicação -->\n<html lang="pt-BR"\n      data-ms-theme="magic"\n      data-ms-color-mode="dark"\n      data-ms-density="comfortable"\n      data-ms-radius="medium">\n  <body>\n    <div id="app"></div>\n  </body>\n</html>';
    const docsThemeScopeCode =
      '<script setup>\nimport { MsThemeScope, MsCard, MsButton } from "@magic-style/vue";\n</script>\n\n<template>\n  <!-- Escopo local forçado em Dark Mode com densidade compacta -->\n  <MsThemeScope color-mode="dark" density="compact" radius="rounded">\n    <MsCard>\n      <h4>Área com Theming Isolado</h4>\n      <MsButton tone="accent">Ação no Escopo Escuro</MsButton>\n    </MsCard>\n  </MsThemeScope>\n</template>';

    // --- BUTTONS STATE ---
    const buttonProps = reactive({
      variant: "solid",
      tone: "primary",
      size: "md",
      pill: false,
      caret: false,
      loading: false,
      disabled: false,
      label: "Explorar MagicStyle",
      showPrefix: true,
      showSuffix: false,
    });
    const buttonGroupProps = reactive({
      orientation: "horizontal",
      attached: true,
      fullWidth: false,
    });
    const clickCount = ref(0);
    const onButtonClick = () => {
      clickCount.value++;
    };

    // --- DROPDOWN & MENU STATE ---
    const dropdownProps = reactive({
      variant: "solid",
      tone: "primary",
      size: "md",
      align: "left",
      fullWidth: false,
    });
    const menuItems = [
      { label: "Editar Perfil", value: "edit", prefix: "✏️", suffix: "⌘E" },
      { label: "Duplicar Item", value: "duplicate", prefix: "📋", suffix: "⌘D" },
      { label: "Exportar Dados", value: "export", prefix: "📤" },
      { divider: true },
      { label: "Excluir Registro", value: "delete", prefix: "🗑️", tone: "danger", suffix: "⌘⌫" },
    ];
    const lastSelectedAction = ref(null);
    const onMenuSelect = (item) => {
      lastSelectedAction.value = item.label;
    };

    // --- INPUTS & TEXTAREA STATE ---
    const inputProps = reactive({
      variant: "outline",
      size: "md",
      tone: "default",
      placeholder: "Digite seu nome...",
      disabled: false,
      readonly: false,
      invalid: false,
      processing: false,
      pill: false,
      clearable: true,
      passwordToggle: false,
      type: "text",
      showPrefix: true,
      showSuffix: false,
    });
    const inputValue = ref("Design System 2026");
    const textareaValue = ref("MagicStyle Vue 3 components: accessible, responsive, theme-aware.");
    const textareaRows = ref(3);
    const textareaProps = reactive({
      size: "md",
      resize: "vertical",
      autoGrow: false,
      showCount: true,
      maxLength: 200,
    });

    // --- SELECTIONS & TOGGLES STATE ---
    const checkboxState = reactive({
      checked: true,
      indeterminate: false,
      disabled: false,
      size: "md",
      tone: "primary",
      card: false,
      label: "Habilitar atualizações automáticas",
      description: "Atualizações de segurança aplicadas em segundo plano sem reiniciar",
    });
    const selectedPlan = ref("pro");
    const radioProps = reactive({
      orientation: "vertical",
      size: "md",
      tone: "primary",
      card: false,
    });
    const switchState = reactive({
      checked: true,
      disabled: false,
      size: "md",
      tone: "primary",
      labelPlacement: "right",
      label: "Modo de Alta Produtividade",
      description: "Otimiza a renderização de componentes e efeitos com aceleração GPU",
    });

    // --- FIELD COMPONENT STATE ---
    const fieldProps = reactive({
      label: "Endereço de E-mail",
      description: "Usaremos este e-mail exclusivamente para confirmação de conta.",
      error: "",
      required: true,
      optional: false,
      orientation: "vertical",
      size: "md",
      hasError: false,
    });
    const fieldInput = ref("user@magicstyle.dev");
    const toggleFieldError = () => {
      fieldProps.hasError = !fieldProps.hasError;
      fieldProps.error = fieldProps.hasError
        ? "Por favor, insira um e-mail corporativo válido."
        : "";
    };

    // --- NATIVE SELECT STATE ---
    const nativeSelectProps = reactive({
      size: "md",
      variant: "outline",
      tone: "default",
      pill: false,
      disabled: false,
      required: false,
      placeholder: "Selecione uma especialidade...",
      modelValue: "vue",
    });
    const nativeSelectOptions = [
      { label: "Vue 3 Component Engine", value: "vue" },
      { label: "Design Tokens (DTCG)", value: "tokens" },
      { label: "Architecture Baseline 1.2", value: "baseline" },
      { label: "WAI-ARIA Accessibility", value: "a11y" },
      { label: "Item Desabilitado", value: "disabled_opt", disabled: true },
    ];

    // --- BADGE STATE ---
    const badgeProps = reactive({
      variant: "soft",
      tone: "primary",
      size: "md",
      pill: true,
      dot: true,
      count: 5,
      maxCount: 99,
      dotOnly: false,
      pulse: false,
      bordered: false,
      placement: "none",
      text: "Baseline 1.2 Stable",
    });

    // --- DIALOG (OVERLAY) STATE ---
    const dialogProps = reactive({
      open: false,
      title: "Publicação de Pacote",
      description: "Deseja validar e publicar a nova versão estável do Magic-Style?",
      size: "md",
      placement: "center",
      tone: "default",
      role: "dialog",
      closeOnEscape: true,
      closeOnOutsideClick: true,
      showClose: true,
    });
    const lastDialogEvent = ref("Nenhum evento registrado");
    const onDialogClose = () => {
      lastDialogEvent.value = `Diálogo fechado às ${new Date().toLocaleTimeString()}`;
    };

    // --- ALERT STATE ---
    const alertProps = reactive({
      variant: "soft",
      tone: "info",
      size: "md",
      align: "center",
      iconStyle: "featured",
      title: "Atualização Disponível",
      description:
        "Uma nova versão estável da Architecture Baseline 1.2 foi compilada com sucesso.",
      dismissible: true,
    });

    // --- CARD STATE ---
    const cardProps = reactive({
      variant: "raised",
      padding: "md",
      tone: "default",
      title: "Visão Geral do Workspace",
      description: "Métricas consolidadas de qualidade e performance do monorepo.",
      interactive: true,
      hoverable: false,
      headerDivider: false,
      footerDivider: false,
      coverSrc: "",
      orientation: "vertical",
    });
    const cardClickCount = ref(0);

    // --- AVATAR STATE ---
    const avatarProps = reactive({
      size: "md",
      shape: "circle",
      tone: "primary",
      status: "online",
      statusPlacement: "bottom-right",
      bordered: false,
      name: "Ada Lovelace",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      showImage: true,
      showGroup: false,
    });

    // --- TABS STATE ---
    const tabsProps = reactive({
      variant: "line",
      size: "md",
      orientation: "horizontal",
      fitted: false,
      activationMode: "automatic",
      scrollable: true,
      showArrows: true,
    });
    const currentTab = ref("tab1");

    // --- SPINNER STATE ---
    const spinnerProps = reactive({
      size: "md",
      tone: "primary",
      thickness: "normal",
      speed: "normal",
      label: "Processando dados...",
    });

    // --- THEMING & THEME SCOPE STATE ---
    const themeScopeProps = reactive({
      theme: "graphite",
      colorMode: "dark",
      density: "compact",
      contrast: "normal",
      radius: "sharp",
    });

    // --- PROGRESS STATE ---
    const progressProps = reactive({
      modelValue: 65,
      min: 0,
      max: 100,
      size: "md",
      tone: "primary",
      shape: "pill",
      gradient: false,
      inlineValue: false,
      indeterminate: false,
      showValue: true,
      striped: false,
      animated: false,
      label: "Sincronização de Dados",
    });

    // --- SKELETON STATE ---
    const skeletonProps = reactive({
      variant: "rect",
      animation: "shimmer",
      tone: "default",
      speed: "normal",
      width: "100%",
      height: "80px",
      count: 1,
    });

    // --- TOOLTIP STATE ---
    const tooltipProps = reactive({
      content: "Salvar alterações no repositório (⌘S)",
      placement: "top",
      tone: "dark",
      size: "md",
      arrow: true,
      maxWidth: "",
      showDelay: 150,
      hideDelay: 100,
      disabled: false,
    });

    // --- BREADCRUMBS STATE ---
    const breadcrumbsProps = reactive({
      variant: "plain",
      size: "md",
      separator: "›",
      separatorType: "chevron",
      maxItems: 5,
    });
    const breadcrumbsItems = [
      { label: "Início", href: "#", icon: "🏠" },
      { label: "Workspace", href: "#workspace", icon: "📁" },
      { label: "MagicStyle", href: "#magicstyle", icon: "✨" },
      { label: "Pacotes", href: "#packages", icon: "📦" },
      { label: "Vue", href: "#vue", icon: "⚡" },
      { label: "Componentes", icon: "🧩" },
    ];

    // --- TAG STATE ---
    const tagProps = reactive({
      variant: "soft",
      tone: "primary",
      size: "md",
      shape: "rounded",
      dot: false,
      closable: true,
      label: "Design System",
      visible: true,
    });
    const resetTag = () => {
      tagProps.visible = true;
    };

    // --- EMPTY STATE STATE ---
    const emptyStateProps = reactive({
      size: "md",
      variant: "dashed",
      iconTone: "neutral",
      title: "Nenhum componente encontrado",
      description:
        "Não foram localizados registros correspondentes à busca solicitada. Tente ajustar os filtros de pesquisa.",
      showActions: true,
    });

    // --- ICON BUTTON STATE ---
    const iconButtonProps = reactive({
      variant: "solid",
      tone: "primary",
      size: "md",
      shape: "rounded",
      circle: false,
      active: false,
      loading: false,
      disabled: false,
      ariaLabel: "Configurações do Sistema",
    });
    const iconButtonClickCount = ref(0);
    const onIconButtonClick = () => {
      iconButtonClickCount.value++;
    };

    // --- SEPARATOR STATE ---
    const separatorProps = reactive({
      orientation: "horizontal",
      variant: "default",
      tone: "neutral",
      thickness: 1,
      spacing: "md",
      label: "OU",
      align: "center",
      decorative: true,
    });

    // --- SEGMENTED CONTROL STATE ---
    const segmentedOptions = [
      { label: "Mês", value: "month", icon: "📅" },
      { label: "Semana", value: "week", icon: "📊" },
      { label: "Dia", value: "day", icon: "⚡" },
      { label: "Ano", value: "year", disabled: true, icon: "📁" },
    ];
    const selectedSegment = ref("week");
    const segmentedProps = reactive({
      size: "md",
      shape: "rounded",
      tone: "neutral",
      fullWidth: false,
      disabled: false,
    });

    // --- SEARCH FIELD STATE ---
    const searchQuery = ref("");
    const searchFieldProps = reactive({
      size: "md",
      variant: "outline",
      placeholder: "Pesquisar tokens, componentes...",
      shortcut: "⌘K",
      loading: false,
      disabled: false,
      readonly: false,
      clearable: true,
    });
    const lastSearchSubmitted = ref("");
    const onSearchSubmit = (query) => {
      lastSearchSubmitted.value = query;
    };

    // --- APP SHELL STATE ---
    const appShellProps = reactive({
      sidebarCollapsed: false,
      showTopbar: true,
      showSidebar: true,
      showRail: false,
      showAside: false,
      showFooter: true,
      showStatusBar: true,
      statusBarTone: "success",
    });
    const toggleShellSidebar = () => {
      appShellProps.sidebarCollapsed = !appShellProps.sidebarCollapsed;
    };

    // --- PAGE STATE ---
    const pageProps = reactive({
      fluid: false,
      compact: false,
      title: "Painel de Controle do Workspace",
      description:
        "Monitore a arquitetura, métricas de qualidade e o status dos pacotes do monorepo.",
    });

    // --- ADVANCED SELECT STATE ---
    const selectProps = reactive({
      size: "md",
      tone: "primary",
      variant: "outline",
      pill: false,
      multiple: false,
      searchable: true,
      clearable: true,
      loading: false,
      creatable: false,
      disabled: false,
      invalid: false,
      placeholder: "Escolha uma tecnologia...",
    });
    const singleSelectValue = ref("vue");
    const multiSelectValue = ref(["vue", "tokens"]);
    const selectOptions = [
      {
        group: "Frontend & UI",
        options: [
          {
            value: "vue",
            label: "Vue 3 Engine",
            description: "Composition API & TypeScript estrito",
          },
          {
            value: "tokens",
            label: "Design Tokens (DTCG)",
            description: "Tokens semânticos e dial de raio",
          },
          { value: "css", label: "CSS Layers", description: "Variáveis CSS semânticas e BEM" },
        ],
      },
      {
        group: "Arquitetura & Qualidade",
        options: [
          { value: "baseline", label: "Baseline 1.2", description: "Governança normativa 01-28" },
          {
            value: "a11y",
            label: "WAI-ARIA 1.2",
            description: "WCAG 2.2 AA e navegação por teclado",
          },
          { value: "tests", label: "Vitest Health Gate", description: "100% verde sem Fake Green" },
        ],
      },
    ];

    // --- TABLE STATE ---
    const tableProps = reactive({
      variant: "default",
      striped: true,
      bordered: false,
      hoverable: true,
      stickyHeader: false,
      density: "md",
      caption: "Métricas de Qualidade dos Pacotes (Baseline 1.2)",
    });
    const tableSortDirection = ref("asc");
    const tableRows = reactive([
      {
        id: 1,
        name: "@magic-style/vue",
        type: "Público",
        tests: 138,
        coverage: "98.4%",
        status: "Ativo",
      },
      {
        id: 2,
        name: "@magic-style/css",
        type: "Público",
        tests: 9,
        coverage: "100%",
        status: "Ativo",
      },
      {
        id: 3,
        name: "@magic-style-internal/tokens",
        type: "Interno",
        tests: 23,
        coverage: "99.1%",
        status: "Estável",
      },
      {
        id: 4,
        name: "@magic-style-internal/themes",
        type: "Interno",
        tests: 4,
        coverage: "100%",
        status: "Estável",
      },
    ]);
    const selectedTableRow = ref(1);
    const toggleTableSort = () => {
      tableSortDirection.value = tableSortDirection.value === "asc" ? "desc" : "asc";
      tableRows.sort((a, b) => {
        return tableSortDirection.value === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
    };

    // --- NAVBAR STATE ---
    const navbarProps = reactive({
      position: "static",
      variant: "default",
      tone: "default",
      size: "md",
      floating: false,
      shadow: "none",
      fixed: false,
      container: "xl",
      brandText: "MagicStyle Enterprise",
    });

    // --- SIDEBAR STATE ---
    const sidebarProps = reactive({
      collapsed: false,
      side: "left",
      position: "sticky",
      width: "normal",
      variant: "default",
      tone: "default",
      showToggle: true,
    });

    // --- FOOTER STATE ---
    const footerProps = reactive({
      layout: "multi-column",
      variant: "default",
      tone: "default",
      shadow: "none",
      position: "static",
      fixed: false,
      container: "xl",
      copyright: "© 2026 MagicStyle Design System. Todos os direitos reservados.",
    });

    // --- SCROLLBAR STATE ---
    const scrollbarProps = reactive({
      orientation: "vertical",
      size: "normal",
      visibility: "auto",
      tone: "primary",
      arrows: false,
      trackColor: "",
      thumbColor: "",
      thumbRadius: "",
      radius: "",
      maxHeight: 200,
    });

    // --- DYNAMIC CODE GENERATOR ---
    const generatedCode = computed(() => {
      if (activeTab.value === "buttons") {
        const parts = ["<MsButton"];
        if (buttonProps.variant !== "solid") parts.push(`  variant="${buttonProps.variant}"`);
        if (buttonProps.tone !== "primary") parts.push(`  tone="${buttonProps.tone}"`);
        if (buttonProps.size !== "md") parts.push(`  size="${buttonProps.size}"`);
        if (buttonProps.pill) parts.push("  pill");
        if (buttonProps.caret) parts.push("  caret");
        if (buttonProps.loading) parts.push("  loading");
        if (buttonProps.disabled) parts.push("  disabled");
        parts.push(">");
        if (buttonProps.showPrefix) {
          parts.push("  <template #prefix>⚡</template>");
        }
        parts.push(`  ${buttonProps.label}`);
        if (buttonProps.showSuffix) {
          parts.push("  <template #suffix>→</template>");
        }
        parts.push("</MsButton>");
        parts.push("");
        parts.push("<!-- Exemplo de Grupo Agrupado -->");
        parts.push(
          "<MsButtonGroup" +
            (buttonGroupProps.orientation !== "horizontal"
              ? ` orientation="${buttonGroupProps.orientation}"`
              : "") +
            (!buttonGroupProps.attached ? ' :attached="false"' : "") +
            (buttonGroupProps.fullWidth ? " full-width" : "") +
            ">",
        );
        parts.push('  <MsButton variant="outline" tone="neutral">Esquerda</MsButton>');
        parts.push('  <MsButton variant="outline" tone="neutral">Centro</MsButton>');
        parts.push('  <MsButton variant="outline" tone="neutral">Direita</MsButton>');
        parts.push("</MsButtonGroup>");
        return parts.join("\n");
      }

      if (activeTab.value === "dropdown") {
        return `<MsDropdownButton
  label="Gerenciar Projeto"${dropdownProps.variant !== "solid" ? `\n  variant="${dropdownProps.variant}"` : ""}${dropdownProps.tone !== "primary" ? `\n  tone="${dropdownProps.tone}"` : ""}${dropdownProps.size !== "md" ? `\n  size="${dropdownProps.size}"` : ""}${dropdownProps.align !== "left" ? `\n  align="${dropdownProps.align}"` : ""}${dropdownProps.fullWidth ? "\n  full-width" : ""}
  :items="[
    { label: 'Editar Perfil', value: 'edit', prefix: '✏️', suffix: '⌘E' },
    { label: 'Duplicar Item', value: 'duplicate', prefix: '📋', suffix: '⌘D' },
    { label: 'Exportar Dados', value: 'export', prefix: '📤' },
    { divider: true },
    { label: 'Excluir Registro', value: 'delete', prefix: '🗑️', tone: 'danger', suffix: '⌘⌫' },
  ]"
  @select="onMenuSelect"
/>`;
      }

      if (activeTab.value === "inputs") {
        const parts = ["<MsInput", '  v-model="textValue"'];
        if (inputProps.variant !== "outline") parts.push(`  variant="${inputProps.variant}"`);
        if (inputProps.size !== "md") parts.push(`  size="${inputProps.size}"`);
        if (inputProps.tone !== "default") parts.push(`  tone="${inputProps.tone}"`);
        if (inputProps.pill) parts.push("  pill");
        if (inputProps.clearable) parts.push("  clearable");
        if (inputProps.passwordToggle) parts.push("  password-toggle");
        if (inputProps.type !== "text") parts.push(`  type="${inputProps.type}"`);
        if (inputProps.disabled) parts.push("  disabled");
        if (inputProps.readonly) parts.push("  readonly");
        if (inputProps.invalid) parts.push("  invalid");
        if (inputProps.processing) parts.push("  processing");
        if (inputProps.placeholder) parts.push(`  placeholder="${inputProps.placeholder}"`);
        parts.push("/>");
        parts.push("");
        parts.push("<MsTextarea");
        parts.push('  v-model="bio"');
        parts.push(`  size="${textareaProps.size}"`);
        parts.push(`  resize="${textareaProps.resize}"`);
        parts.push(`  :rows="${textareaRows.value}"`);
        if (textareaProps.autoGrow) parts.push("  auto-grow");
        if (textareaProps.showCount) parts.push("  show-count");
        if (textareaProps.maxLength) parts.push(`  :max-length="${textareaProps.maxLength}"`);
        parts.push('  placeholder="Fale um pouco sobre você..."');
        parts.push("/>");
        return parts.join("\n");
      }

      if (activeTab.value === "selections") {
        return `<MsCheckbox
  v-model="accepted"
  label="${checkboxState.label}"${checkboxState.size !== "md" ? `\n  size="${checkboxState.size}"` : ""}${checkboxState.tone !== "primary" ? `\n  tone="${checkboxState.tone}"` : ""}${checkboxState.card ? "\n  card" : ""}${checkboxState.description ? `\n  description="${checkboxState.description}"` : ""}
/>

<MsSwitch
  v-model="enabled"
  label="${switchState.label}"${switchState.size !== "md" ? `\n  size="${switchState.size}"` : ""}${switchState.tone !== "primary" ? `\n  tone="${switchState.tone}"` : ""}${switchState.labelPlacement !== "right" ? `\n  label-placement="${switchState.labelPlacement}"` : ""}${switchState.description ? `\n  description="${switchState.description}"` : ""}
/>

<MsRadioGroup
  v-model="plan"${radioProps.orientation !== "vertical" ? `\n  orientation="${radioProps.orientation}"` : ""}${radioProps.size !== "md" ? `\n  size="${radioProps.size}"` : ""}${radioProps.tone !== "primary" ? `\n  tone="${radioProps.tone}"` : ""}${radioProps.card ? "\n  card" : ""}
>
  <MsRadio value="starter" label="Plano Starter" description="Ideal para testes e aprendizado" />
  <MsRadio value="pro" label="Plano Profissional" description="Para produtos em produção com suporte técnico" />
  <MsRadio value="enterprise" label="Plano Corporativo" description="SLA dedicado e infraestrutura isolada" />
</MsRadioGroup>`;
      }

      if (activeTab.value === "fields") {
        return `<MsField
  label="${fieldProps.label}"
  description="${fieldProps.description}"${fieldProps.orientation !== "vertical" ? `\n  orientation="${fieldProps.orientation}"` : ""}${fieldProps.size !== "md" ? `\n  size="${fieldProps.size}"` : ""}${fieldProps.optional ? "\n  optional" : ""}${fieldProps.error ? `\n  error="${fieldProps.error}"` : ""}${fieldProps.required ? "\n  required" : ""}
>
  <MsInput v-model="email" type="email" placeholder="seu@email.com" />
</MsField>`;
      }

      if (activeTab.value === "native-select") {
        return `<MsNativeSelect
  v-model="selectedValue"
  ${nativeSelectProps.size !== "md" ? `size="${nativeSelectProps.size}"\n  ` : ""}${nativeSelectProps.variant !== "outline" ? `variant="${nativeSelectProps.variant}"\n  ` : ""}${nativeSelectProps.tone !== "default" ? `tone="${nativeSelectProps.tone}"\n  ` : ""}${nativeSelectProps.pill ? "pill\n  " : ""}${nativeSelectProps.disabled ? "disabled\n  " : ""}:options="[
    { label: 'Vue 3 Component Engine', value: 'vue' },
    { label: 'Design Tokens (DTCG)', value: 'tokens' },
    { label: 'Architecture Baseline 1.2', value: 'baseline' },
    { label: 'WAI-ARIA Accessibility', value: 'a11y' },
  ]"
/>`;
      }

      if (activeTab.value === "badges") {
        return `<MsBadge
  variant="${badgeProps.variant}"
  tone="${badgeProps.tone}"
  size="${badgeProps.size}"${badgeProps.pill ? "\n  pill" : ""}${badgeProps.dot ? "\n  dot" : ""}${badgeProps.dotOnly ? "\n  dot-only" : ""}${badgeProps.pulse ? "\n  pulse" : ""}${badgeProps.bordered ? "\n  bordered" : ""}${badgeProps.count !== undefined && badgeProps.count !== null ? `\n  :count="${badgeProps.count}"` : ""}${badgeProps.maxCount !== 99 ? `\n  :max-count="${badgeProps.maxCount}"` : ""}${badgeProps.placement !== "none" ? `\n  placement="${badgeProps.placement}"` : ""}
>
  ${badgeProps.text}
</MsBadge>`;
      }

      if (activeTab.value === "dialogs") {
        return `<MsDialog
  v-model:open="isOpen"
  title="${dialogProps.title}"
  description="${dialogProps.description}"
  size="${dialogProps.size}"${dialogProps.placement !== "center" ? `\n  placement="${dialogProps.placement}"` : ""}${dialogProps.tone !== "default" ? `\n  tone="${dialogProps.tone}"` : ""}${dialogProps.role !== "dialog" ? `\n  role="${dialogProps.role}"` : ""}
  @close="onClose"
>
  <p>Conteúdo do diálogo modal totalmente acessível.</p>
  <template #footer>
    <MsButton variant="outline" tone="neutral" @click="isOpen = false">Cancelar</MsButton>
    <MsButton variant="solid" tone="primary" @click="isOpen = false">Confirmar</MsButton>
  </template>
</MsDialog>`;
      }

      if (activeTab.value === "alerts") {
        return `<MsAlert
  variant="${alertProps.variant}"
  tone="${alertProps.tone}"
  size="${alertProps.size}"${alertProps.align !== "center" ? `\n  align="${alertProps.align}"` : ""}${alertProps.iconStyle !== "plain" ? `\n  icon-style="${alertProps.iconStyle}"` : ""}
  title="${alertProps.title}"
  description="${alertProps.description}"${alertProps.dismissible ? "\n  dismissible" : ""}
/>`;
      }

      if (activeTab.value === "cards") {
        return `<MsCard
  variant="${cardProps.variant}"
  padding="${cardProps.padding}"${cardProps.tone !== "default" ? `\n  tone="${cardProps.tone}"` : ""}
  title="${cardProps.title}"
  description="${cardProps.description}"${cardProps.orientation !== "vertical" ? `\n  orientation="${cardProps.orientation}"` : ""}${cardProps.interactive ? "\n  interactive" : ""}${cardProps.hoverable ? "\n  hoverable" : ""}${cardProps.headerDivider ? "\n  header-divider" : ""}${cardProps.footerDivider ? "\n  footer-divider" : ""}${cardProps.coverSrc ? `\n  cover-src="${cardProps.coverSrc}"` : ""}
>
  <p>Conteúdo principal do cartão encapsulado.</p>
</MsCard>`;
      }

      if (activeTab.value === "avatars") {
        if (avatarProps.showGroup) {
          return `<MsAvatarGroup size="${avatarProps.size}" :max="3" spacing="normal">
  <MsAvatar name="Ada Lovelace" src="${avatarProps.src}" />
  <MsAvatar name="Grace Hopper" />
  <MsAvatar name="Alan Turing" />
  <MsAvatar name="Margaret Hamilton" />
  <MsAvatar name="Linus Torvalds" />
</MsAvatarGroup>`;
        }
        return `<MsAvatar
  name="${avatarProps.name}"
  size="${avatarProps.size}"
  shape="${avatarProps.shape}"
  tone="${avatarProps.tone}"${avatarProps.bordered ? "\n  bordered" : ""}${avatarProps.status ? `\n  status="${avatarProps.status}"` : ""}${avatarProps.status && avatarProps.statusPlacement !== "bottom-right" ? `\n  status-placement="${avatarProps.statusPlacement}"` : ""}${avatarProps.showImage ? `\n  src="${avatarProps.src}"` : ""}
/>`;
      }

      if (activeTab.value === "tabs") {
        return `<MsTabs
  v-model="currentTab"
  variant="${tabsProps.variant}"
  size="${tabsProps.size}"
  orientation="${tabsProps.orientation}"${tabsProps.fitted ? "\n  fitted" : ""}${!tabsProps.scrollable ? '\n  :scrollable="false"' : ""}${!tabsProps.showArrows ? '\n  :show-arrows="false"' : ""}
>
  <MsTabList aria-label="Navegação do módulo">
    <MsTab value="tab1">Geral</MsTab>
    <MsTab value="tab2">Segurança</MsTab>
    <MsTab value="tab3">Métricas</MsTab>
    <MsTab value="tab4" disabled>Faturamento</MsTab>
  </MsTabList>

  <MsTabPanels>
    <MsTabPanel value="tab1">Painel principal da aplicação.</MsTabPanel>
    <MsTabPanel value="tab2">Ajustes de segurança e chaves de API.</MsTabPanel>
    <MsTabPanel value="tab3">Métricas e telemetria em tempo real.</MsTabPanel>
  </MsTabPanels>
</MsTabs>`;
      }

      if (activeTab.value === "spinners") {
        return `<MsSpinner
  size="${spinnerProps.size}"
  tone="${spinnerProps.tone}"
  thickness="${spinnerProps.thickness}"${spinnerProps.speed !== "normal" ? `\n  speed="${spinnerProps.speed}"` : ""}
  label="${spinnerProps.label}"
/>`;
      }

      if (activeTab.value === "theming") {
        return `<MsThemeScope
  theme="${themeScopeProps.theme}"
  colorMode="${themeScopeProps.colorMode}"
  density="${themeScopeProps.density}"
  contrast="${themeScopeProps.contrast}"
  radius="${themeScopeProps.radius}"
>
  <div style="padding: var(--ms-space-4);">
    <h4>Container com Escopo Visual</h4>
    <MsButton tone="primary">Botão Escopado</MsButton>
  </div>
</MsThemeScope>`;
      }

      if (activeTab.value === "progress") {
        return `<MsProgress
  :model-value="${progressProps.indeterminate ? "undefined" : progressProps.modelValue}"
  size="${progressProps.size}"
  tone="${progressProps.tone}"${progressProps.shape !== "pill" ? `\n  shape="${progressProps.shape}"` : ""}${progressProps.gradient ? "\n  gradient" : ""}${progressProps.inlineValue ? "\n  inline-value" : ""}${progressProps.indeterminate ? "\n  indeterminate" : ""}${progressProps.striped ? "\n  striped" : ""}${progressProps.animated ? "\n  animated" : ""}${progressProps.showValue ? "\n  show-value" : ""}${progressProps.label ? `\n  label="${progressProps.label}"` : ""}
/>`;
      }

      if (activeTab.value === "skeletons") {
        return `<MsSkeleton
  variant="${skeletonProps.variant}"
  animation="${skeletonProps.animation}"
  tone="${skeletonProps.tone}"
  speed="${skeletonProps.speed}"${skeletonProps.width ? `\n  width="${skeletonProps.width}"` : ""}${skeletonProps.height ? `\n  height="${skeletonProps.height}"` : ""}${skeletonProps.count > 1 ? `\n  :count="${skeletonProps.count}"` : ""}
/>`;
      }

      if (activeTab.value === "tooltips") {
        return `<MsTooltip
  content="${tooltipProps.content}"
  placement="${tooltipProps.placement}"${tooltipProps.tone !== "dark" ? `\n  tone="${tooltipProps.tone}"` : ""}${tooltipProps.size !== "md" ? `\n  size="${tooltipProps.size}"` : ""}${!tooltipProps.arrow ? '\n  :arrow="false"' : ""}${tooltipProps.maxWidth ? `\n  max-width="${tooltipProps.maxWidth}"` : ""}
>
  <MsButton variant="solid" tone="primary">Ação com Dica</MsButton>
</MsTooltip>`;
      }

      if (activeTab.value === "breadcrumbs") {
        return `<MsBreadcrumbs
  variant="${breadcrumbsProps.variant}"
  size="${breadcrumbsProps.size}"
  separator-type="${breadcrumbsProps.separatorType}"${breadcrumbsProps.maxItems ? `\n  :max-items="${breadcrumbsProps.maxItems}"` : ""}
  :items="breadcrumbsItems"
/>`;
      }

      if (activeTab.value === "tags") {
        return `<MsTag
  variant="${tagProps.variant}"
  tone="${tagProps.tone}"
  size="${tagProps.size}"${tagProps.shape !== "rounded" ? `\n  shape="${tagProps.shape}"` : ""}${tagProps.dot ? "\n  dot" : ""}${tagProps.closable ? '\n  closable\n  @close="onClose"' : ""}
>
  ${tagProps.label}
</MsTag>`;
      }

      if (activeTab.value === "empty-states") {
        return `<MsEmptyState
  size="${emptyStateProps.size}"${emptyStateProps.variant !== "dashed" ? `\n  variant="${emptyStateProps.variant}"` : ""}${emptyStateProps.iconTone !== "neutral" ? `\n  icon-tone="${emptyStateProps.iconTone}"` : ""}
  title="${emptyStateProps.title}"
  description="${emptyStateProps.description}"
>
  <template #actions>
    <MsButton variant="solid" tone="primary">Novo Item</MsButton>
    <MsButton variant="outline" tone="neutral">Recarregar</MsButton>
  </template>
</MsEmptyState>`;
      }

      if (activeTab.value === "icon-buttons") {
        return `<MsIconButton
  aria-label="${iconButtonProps.ariaLabel}"
  variant="${iconButtonProps.variant}"
  tone="${iconButtonProps.tone}"
  size="${iconButtonProps.size}"${iconButtonProps.shape !== "rounded" ? `\n  shape="${iconButtonProps.shape}"` : ""}${iconButtonProps.active ? "\n  active" : ""}${iconButtonProps.loading ? "\n  loading" : ""}${iconButtonProps.disabled ? "\n  disabled" : ""}
>
  ⚙️
</MsIconButton>`;
      }

      if (activeTab.value === "separators") {
        return `<MsSeparator
  orientation="${separatorProps.orientation}"
  variant="${separatorProps.variant}"
  tone="${separatorProps.tone}"
  :thickness="${separatorProps.thickness}"
  spacing="${separatorProps.spacing}"${separatorProps.label ? `\n  label="${separatorProps.label}"\n  align="${separatorProps.align}"` : ""}${!separatorProps.decorative ? '\n  :decorative="false"' : ""}
/>`;
      }

      if (activeTab.value === "segmented-control") {
        return `<MsSegmentedControl
  v-model="selectedSegment"
  :options="segmentedOptions"
  size="${segmentedProps.size}"${segmentedProps.shape !== "rounded" ? `\n  shape="${segmentedProps.shape}"` : ""}${segmentedProps.tone !== "neutral" ? `\n  tone="${segmentedProps.tone}"` : ""}${segmentedProps.fullWidth ? "\n  full-width" : ""}${segmentedProps.disabled ? "\n  disabled" : ""}
/>`;
      }

      if (activeTab.value === "search-fields") {
        return `<MsSearchField
  v-model="searchQuery"
  variant="${searchFieldProps.variant}"
  size="${searchFieldProps.size}"
  placeholder="${searchFieldProps.placeholder}"${searchFieldProps.shortcut ? `\n  shortcut="${searchFieldProps.shortcut}"` : ""}${searchFieldProps.loading ? "\n  loading" : ""}${searchFieldProps.disabled ? "\n  disabled" : ""}${!searchFieldProps.clearable ? '\n  :clearable="false"' : ""}
  @search="onSearchSubmit"
/>`;
      }

      if (activeTab.value === "app-shell") {
        return `<MsAppShell :sidebar-collapsed="${appShellProps.sidebarCollapsed}">
  <template #topbar>
    <MsTopbar>
      <template #leading>
        <MsIconButton aria-label="Alternar Menu" variant="ghost" @click="toggleSidebar">☰</MsIconButton>
        <strong style="margin-left: 8px;">MagicStyle</strong>
      </template>
      <MsSearchField placeholder="Buscar no sistema..." size="sm" />
      <template #trailing>
        <MsAvatar name="Admin" size="sm" />
      </template>
    </MsTopbar>
  </template>

  <template #sidebar>
    <MsSidebar>
      <template #header="{ collapsed }">
        <span v-if="!collapsed">Navegação Principal</span>
      </template>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <MsButton variant="ghost" tone="neutral">📊 Dashboard</MsButton>
        <MsButton variant="ghost" tone="neutral">📁 Projetos</MsButton>
        <MsButton variant="ghost" tone="neutral">⚙️ Ajustes</MsButton>
      </div>
    </MsSidebar>
  </template>

  <MsContent padded>
    <h2>Conteúdo da Aplicação</h2>
    <p>O AppShell orquestra todas as regiões com responsividade automática.</p>
  </MsContent>

  <template #statusbar>
    <MsStatusBar tone="${appShellProps.statusBarTone}">
      <span>Pronto</span>
      <span>UTF-8 • Node 24</span>
    </MsStatusBar>
  </template>
</MsAppShell>`;
      }

      if (activeTab.value === "pages") {
        return `<MsPage${pageProps.fluid ? "\n  fluid" : ""}${pageProps.compact ? "\n  compact" : ""}>
  <MsPageHeader
    title="${pageProps.title}"
    description="${pageProps.description}"
  >
    <template #breadcrumbs>
      <MsBreadcrumbs :items="[{ label: 'Início', href: '#' }, { label: 'Painel' }]" />
    </template>
    <template #actions>
      <MsPageActions>
        <MsButton variant="outline" tone="neutral">Exportar</MsButton>
        <MsButton variant="solid" tone="primary">Novo Registro</MsButton>
      </MsPageActions>
    </template>
  </MsPageHeader>

  <MsCard variant="outline">
    <div style="padding: 16px;">
      Conteúdo e seções organizadas da página.
    </div>
  </MsCard>
</MsPage>`;
      }

      if (activeTab.value === "select") {
        return `<MsSelect
  v-model="${selectProps.multiple ? "multiSelectValue" : "singleSelectValue"}"
  size="${selectProps.size}"${selectProps.tone !== "primary" ? `\n  tone="${selectProps.tone}"` : ""}${selectProps.variant !== "outline" ? `\n  variant="${selectProps.variant}"` : ""}${selectProps.pill ? "\n  pill" : ""}${selectProps.multiple ? "\n  multiple" : ""}${selectProps.searchable ? "\n  searchable" : ""}${selectProps.clearable ? "\n  clearable" : ""}${selectProps.loading ? "\n  loading" : ""}${selectProps.creatable ? "\n  creatable" : ""}${selectProps.disabled ? "\n  disabled" : ""}${selectProps.invalid ? "\n  invalid" : ""}
  placeholder="${selectProps.placeholder}"
  :options="selectOptions"
/>`;
      }

      if (activeTab.value === "tables") {
        return `<MsTable${tableProps.variant !== "default" ? `\n  variant="${tableProps.variant}"` : ""}
  density="${tableProps.density}"${tableProps.striped ? "\n  striped" : ""}${tableProps.bordered ? "\n  bordered" : ""}${tableProps.hoverable ? "\n  hoverable" : ""}${tableProps.stickyHeader ? "\n  sticky-header" : ""}
  caption="${tableProps.caption}"
>
  <MsTableHead>
    <MsTableRow>
      <MsTableHeaderCell sortable sort-direction="${tableSortDirection.value}" @click="toggleTableSort">Pacote</MsTableHeaderCell>
      <MsTableHeaderCell>Tipo</MsTableHeaderCell>
      <MsTableHeaderCell align="right">Testes</MsTableHeaderCell>
      <MsTableHeaderCell align="right">Cobertura</MsTableHeaderCell>
      <MsTableHeaderCell align="center">Status</MsTableHeaderCell>
    </MsTableRow>
  </MsTableHead>
  <MsTableBody>
    <MsTableRow v-for="row in tableRows" :key="row.id" :selected="row.id === selectedTableRow" clickable @click="selectedTableRow = row.id">
      <MsTableCell>{{ row.name }}</MsTableCell>
      <MsTableCell>{{ row.type }}</MsTableCell>
      <MsTableCell align="right">{{ row.tests }}</MsTableCell>
      <MsTableCell align="right">{{ row.coverage }}</MsTableCell>
      <MsTableCell align="center"><MsBadge tone="success">{{ row.status }}</MsBadge></MsTableCell>
    </MsTableRow>
  </MsTableBody>
  <MsTableFooter>
    <MsTableRow>
      <MsTableCell>Total Monorepo</MsTableCell>
      <MsTableCell>4 pacotes</MsTableCell>
      <MsTableCell align="right">174 testes</MsTableCell>
      <MsTableCell align="right">99.4%</MsTableCell>
      <MsTableCell align="center"><MsBadge tone="primary">100% Verde</MsBadge></MsTableCell>
    </MsTableRow>
  </MsTableFooter>
</MsTable>`;
      }

      if (activeTab.value === "sidebar-menu") {
        return `<MsSidebarMenu
  tone="${sidebarMenuTone.value}"
  density="${sidebarMenuDensity.value}"
  shape="${sidebarMenuShape.value}"${sidebarMenuCollapsed.value ? "\n  collapsed" : ""}
  :items="menuItems"
/>`;
      }

      if (activeTab.value === "containers") {
        return `<MsContainer${batch.containerMaxWidth !== "xl" ? ` max-width="${batch.containerMaxWidth}"` : ""}${!batch.containerPadded ? ' :padded="false"' : ""}>
  <div style="background: var(--ms-color-surface-subtle); padding: 24px; border-radius: var(--ms-radius-lg); border: 1px solid var(--ms-color-border);">
    <h3>Conteúdo em MsContainer</h3>
    <p>Largura máxima delimitada com paddings responsivos corporativos.</p>
  </div>
</MsContainer>`;
      }

      if (activeTab.value === "banners") {
        const parts = ["<MsBanner"];
        if (batch.bannerTone !== "info") parts.push(`  tone="${batch.bannerTone}"`);
        if (batch.bannerVariant !== "soft") parts.push(`  variant="${batch.bannerVariant}"`);
        if (batch.bannerTitle) parts.push(`  title="${batch.bannerTitle}"`);
        if (batch.bannerAction) parts.push(`  action-label="${batch.bannerAction}"`);
        if (batch.bannerDismissible) parts.push("  dismissible");
        parts.push(">");
        parts.push(
          "  Uma nova versão estável da plataforma Magic-Style já está disponível com novos recursos.",
        );
        parts.push("</MsBanner>");
        return parts.join("\n");
      }

      if (activeTab.value === "drawers") {
        return `<MsDrawer
  v-model:open="drawerOpen"
  placement="${batch.drawerPlacement}"
  size="${batch.drawerSize}"
  title="${batch.drawerTitle}"
  description="${batch.drawerDescription}"
>
  <p>Conteúdo da gaveta lateral off-canvas com rolagem independente.</p>
  <template #footer>
    <MsButton variant="outline" tone="neutral" @click="drawerOpen = false">Cancelar</MsButton>
    <MsButton variant="solid" tone="primary" @click="drawerOpen = false">Salvar Alterações</MsButton>
  </template>
</MsDrawer>`;
      }

      if (activeTab.value === "accordions") {
        return `<MsAccordion
  v-model="activeAccordion"
  variant="${batch.accordionVariant}"
  size="${batch.accordionSize}"${batch.accordionMultiple ? "\n  multiple" : ""}
>
  <MsAccordionItem value="item-1" title="O que é a Architecture Baseline 1.2?" subtitle="Fundação arquitetural">
    A Baseline 1.2 define as 28 regras canônicas do Magic-Style.
  </MsAccordionItem>
  <MsAccordionItem value="item-2" title="Como funciona a governança de tokens?" subtitle="DTCG Semântico">
    Todos os componentes consomem tokens prefixados com --ms-* gerados a partir do schema normativo.
  </MsAccordionItem>
  <MsAccordionItem value="item-3" title="Compatibilidade SSR e Frameworks" subtitle="Universalidade ESM">
    100% compatível com SSR, Nuxt 3, Vite e empacotado em padrão ESM estrito.
  </MsAccordionItem>
</MsAccordion>`;
      }

      if (activeTab.value === "popovers") {
        return `<MsPopover
  placement="${batch.popoverPlacement}"
  width="${batch.popoverWidth}"
  trigger="${batch.popoverTrigger}"
  title="${batch.popoverTitle}"
>
  <template #trigger>
    <MsButton variant="outline" tone="primary">Abrir Painel Popover</MsButton>
  </template>
  <div>
    <strong>Carlos Henrique</strong>
    <p style="margin: 4px 0 12px; font-size: 0.8125rem;">Engenheiro de Software Sênior</p>
    <MsBadge tone="success">Status: Disponível</MsBadge>
  </div>
  <template #footer>
    <MsButton variant="solid" tone="primary" size="sm" full-width>Ver Perfil Completo</MsButton>
  </template>
</MsPopover>`;
      }

      if (activeTab.value === "confirm-dialog") {
        return `<MsConfirmDialog
  v-model:open="confirmOpen"
  tone="${batch.confirmTone}"
  title="${batch.confirmTitle}"
  message="${batch.confirmMessage}"
  confirm-label="${batch.confirmButtonLabel}"
  cancel-label="${batch.confirmCancelLabel}"${batch.confirmLoading ? "\n  loading" : ""}
  @confirm="onConfirm"
  @cancel="confirmOpen = false"
/>`;
      }

      if (activeTab.value === "timeline") {
        return `<MsTimeline direction="${batch.timelineDirection}">
  <MsTimelineItem title="Deploy Realizado em Produção" timestamp="Hoje às 18:45" tone="${batch.timelineTone}">
    Pipeline de CI/CD finalizou a validação de 49 suites de teste e publicou o pacote estável.
  </MsTimelineItem>
  <MsTimelineItem title="Aprovação de Pull Request" timestamp="Hoje às 17:30" tone="primary">
    Revisão arquitetural aprovada conforme Baseline 1.2 sem arestas proibidas.
  </MsTimelineItem>
  <MsTimelineItem title="Início da Implementação" timestamp="Hoje às 14:00" tone="neutral">
    Desenvolvimento de componentes corporativos com suporte aos 8 tons da marca.
  </MsTimelineItem>
</MsTimeline>`;
      }

      if (activeTab.value === "progress-radial" || activeTab.value === "radial-progress") {
        return `<MsProgressRadial
  :value="${batch.radialIndeterminate ? 0 : batch.radialValue}"
  size="${batch.radialSize}"
  tone="${batch.radialTone}"
  :stroke-width="${batch.radialStrokeWidth}"${batch.radialIndeterminate ? "\n  indeterminate" : ""}
/>`;
      }

      if (activeTab.value === "status-indicator" || activeTab.value === "status") {
        return `<MsStatus
  tone="${batch.statusTone}"
  size="${batch.statusSize}"${batch.statusPulse ? "\n  pulse" : ""}${batch.statusLabel ? `\n  label="${batch.statusLabel}"` : ""}
/>`;
      }

      if (activeTab.value === "ratings") {
        return `<MsRating
  v-model="rating"
  :max="${batch.ratingMax}"
  size="${batch.ratingSize}"${batch.ratingReadonly ? "\n  readonly" : ""}${batch.ratingDisabled ? "\n  disabled" : ""}
/>`;
      }

      if (activeTab.value === "toasts") {
        return `<!-- Disparo imperativo via composable useToast() -->
<MsButton
  variant="solid"
  tone="${batch.toastTone}"
  @click="showToast"
>
  Disparar Notificação (${batch.toastTone})
</MsButton>

<!-- No script setup: -->
// const toast = useToast();
// const showToast = () => {
//   toast.${batch.toastTone}("${batch.toastMessage}", {
//     title: "${batch.toastTitle}",
//     duration: ${batch.toastDuration}
//   });
// };`;
      }

      if (activeTab.value === "animated-number" || activeTab.value === "animated-numbers") {
        return `<MsAnimatedNumber
  :value="${batch.tickerValue}"
  :duration="${batch.tickerDuration}"
  :decimals="${batch.tickerDecimals}"${batch.tickerPrefix ? `\n  prefix="${batch.tickerPrefix}"` : ""}${batch.tickerSuffix ? `\n  suffix="${batch.tickerSuffix}"` : ""}
/>`;
      }

      if (activeTab.value === "lists") {
        return `<MsList variant="${batch.listVariant}" size="${batch.listSize}">
  <MsListGroup title="Servidores de Infraestrutura">
    <MsListItem title="Cluster-Alpha-Primary" description="Região us-east-1 • 99.99% Uptime"${batch.listInteractive ? " interactive" : ""}>
      <template #leading>🖥️</template>
      <template #trailing><MsBadge tone="success">Ativo</MsBadge></template>
    </MsListItem>
    <MsListItem title="Staging-Environment-Beta" description="Região sa-east-1 • 98.2% Uptime"${batch.listInteractive ? " interactive" : ""}>
      <template #leading>⚙️</template>
      <template #trailing><MsBadge tone="warning">Reboot</MsBadge></template>
    </MsListItem>
  </MsListGroup>
</MsList>`;
      }

      if (activeTab.value === "ranges") {
        return `<MsRange
  v-model="sliderValue"
  :min="${batch.rangeMin}"
  :max="${batch.rangeMax}"
  :step="${batch.rangeStep}"
  tone="${batch.rangeTone}"
  size="${batch.rangeSize}"${batch.rangeShowValue ? "\n  show-value" : ""}${batch.rangeDisabled ? "\n  disabled" : ""}
/>`;
      }

      if (activeTab.value === "steppers") {
        return `<MsStepper
  v-model="currentStep"
  direction="${batch.stepperDirection}"${batch.stepperClickable ? "\n  clickable" : ""}
>
  <MsStep :index="0" title="Informações Pessoais" subtitle="Dados cadastrais" />
  <MsStep :index="1" title="Endereço de Cobrança" subtitle="CEP e localidade" />
  <MsStep :index="2" title="Forma de Pagamento" subtitle="Cartão ou Pix" />
  <MsStep :index="3" title="Confirmação Final" subtitle="Revisão dos dados" />
</MsStepper>`;
      }

      if (activeTab.value === "file-inputs") {
        return `<MsFileInput
  label="${batch.fileLabel}"
  hint="${batch.fileHint}"${batch.fileMultiple ? "\n  multiple" : ""}${!batch.fileShowList ? '\n  :show-file-list="false"' : ""}${batch.fileDisabled ? "\n  disabled" : ""}
  accept=".pdf,.xlsx,.csv"
  @change="onFileChange"
/>`;
      }

      if (activeTab.value === "tree-views" || activeTab.value === "trees") {
        return `<MsTree
  :items="treeItems"
  v-model:selected-key="selectedNode"
  v-model:expanded-keys="expandedNodes"
/>`;
      }

      if (activeTab.value === "context-menus") {
        return `<MsContextMenu :items="menuItems">
  <div style="padding: 64px 24px; border: 2px dashed var(--ms-color-primary); border-radius: var(--ms-radius-xl); text-align: center;">
    <strong>Clique com o botão direito nesta área delimitada</strong>
    <p>O menu de contexto corporativo do Magic-Style aparecerá nas coordenadas exatas do cursor.</p>
  </div>
</MsContextMenu>`;
      }

      if (activeTab.value === "chat-bubbles") {
        return `<MsChatBubble
  placement="start"
  variant="${batch.chatVariant}"
  tone="neutral"
  name="Assistente IA"
  timestamp="10:14"
  status="read"
>
  <template #avatar>🤖</template>
  Olá! Como posso ajudar na sua aplicação corporativa hoje?
</MsChatBubble>

<MsChatBubble
  placement="end"
  variant="${batch.chatVariant}"
  tone="${batch.chatTone}"
  name="Você"
  timestamp="10:15"
  status="sent"
>
  <template #avatar>👤</template>
  Preciso de um componente para seleção avançada e modais de confirmação.
</MsChatBubble>`;
      }

      if (activeTab.value === "carousels") {
        return `<MsCarousel
  v-model="activeSlide"
  :total-slides="3"${batch.carouselAutoplay ? `\n  autoplay\n  :interval="${batch.carouselInterval}"` : ""}${!batch.carouselLoop ? '\n  :loop="false"' : ""}${!batch.carouselShowArrows ? '\n  :show-arrows="false"' : ""}${!batch.carouselShowIndicators ? '\n  :show-indicators="false"' : ""}
>
  <MsCarouselSlide>
    <h2>Slide 1: Inovação Corporativa</h2>
  </MsCarouselSlide>
  <MsCarouselSlide>
    <h2>Slide 2: Arquitetura Enterprise</h2>
  </MsCarouselSlide>
  <MsCarouselSlide>
    <h2>Slide 3: Desempenho Imbatível</h2>
  </MsCarouselSlide>
</MsCarousel>`;
      }

      if (activeTab.value === "docks") {
        return `<MsDock position="${batch.dockPosition}" size="${batch.dockSize}">
  <MsDockItem label="Início" :active="activeItem === 'home'" @click="activeItem = 'home'">🏠</MsDockItem>
  <MsDockItem label="Pesquisa" :active="activeItem === 'search'" @click="activeItem = 'search'">🔍</MsDockItem>
  <MsDockItem label="Mensagens" :active="activeItem === 'messages'" @click="activeItem = 'messages'">💬</MsDockItem>
  <MsDockItem label="Configurações" :active="activeItem === 'settings'" @click="activeItem = 'settings'">⚙️</MsDockItem>
</MsDock>`;
      }

      if (activeTab.value === "color-pickers") {
        return `<MsColorPicker v-model="pickedColor" />`;
      }

      if (activeTab.value === "scroll-spies") {
        return `<div style="display: flex; gap: 24px;">
  <div style="flex: 1; max-height: 320px; overflow-y: auto; padding: 24px;">
    <section id="sec-visao-geral"><h3>1. Visão Geral</h3><p>Conteúdo...</p></section>
    <section id="sec-arquitetura"><h3>2. Arquitetura</h3><p>Conteúdo...</p></section>
  </div>
  <MsScrollSpy :items="[{ id: 'sec-visao-geral', label: '1. Visão Geral' }, { id: 'sec-arquitetura', label: '2. Arquitetura' }]" />
</div>`;
      }

      if (activeTab.value === "navbar") {
        const parts = ["<MsNavbar"];
        if (navbarProps.position !== "static") parts.push(`  position="${navbarProps.position}"`);
        if (navbarProps.fixed) parts.push("  fixed");
        if (navbarProps.shadow && navbarProps.shadow !== "none")
          parts.push(`  shadow="${navbarProps.shadow}"`);
        if (navbarProps.container && navbarProps.container !== "none")
          parts.push(`  container="${navbarProps.container}"`);
        if (navbarProps.variant !== "default") parts.push(`  variant="${navbarProps.variant}"`);
        if (navbarProps.tone !== "default") parts.push(`  tone="${navbarProps.tone}"`);
        if (navbarProps.size !== "md") parts.push(`  size="${navbarProps.size}"`);
        if (navbarProps.floating) parts.push("  floating");
        parts.push(">");
        parts.push("  <template #brand>");
        parts.push(`    <strong>⚡ ${navbarProps.brandText}</strong>`);
        parts.push("  </template>");
        parts.push('  <div style="display: flex; gap: 16px;">');
        parts.push('    <a href="#">Início</a>');
        parts.push('    <a href="#">Módulos</a>');
        parts.push('    <a href="#">Relatórios</a>');
        parts.push("  </div>");
        parts.push("  <template #actions>");
        parts.push('    <MsButton size="sm" variant="solid" tone="primary">Acessar</MsButton>');
        parts.push("  </template>");
        parts.push("</MsNavbar>");
        return parts.join("\n");
      }

      if (activeTab.value === "sidebar") {
        const parts = ["<MsSidebar"];
        if (sidebarProps.collapsed) parts.push('  :collapsed="true"');
        if (sidebarProps.side !== "left") parts.push(`  side="${sidebarProps.side}"`);
        if (sidebarProps.position !== "sticky") parts.push(`  position="${sidebarProps.position}"`);
        if (sidebarProps.width !== "normal") parts.push(`  width="${sidebarProps.width}"`);
        if (sidebarProps.variant !== "default") parts.push(`  variant="${sidebarProps.variant}"`);
        if (sidebarProps.tone !== "default") parts.push(`  tone="${sidebarProps.tone}"`);
        if (sidebarProps.showToggle) parts.push("  show-toggle");
        parts.push(">");
        parts.push("  <template #header>");
        parts.push("    <strong>⚡ Workspace</strong>");
        parts.push("  </template>");
        parts.push('  <div style="padding: 12px;">');
        parts.push("    <p>Corpo de navegação ou MsSidebarMenu</p>");
        parts.push("  </div>");
        parts.push("  <template #footer>");
        parts.push("    <span>Usuário: Admin</span>");
        parts.push("  </template>");
        parts.push("</MsSidebar>");
        return parts.join("\n");
      }

      if (activeTab.value === "footer") {
        const parts = ["<MsFooter"];
        if (footerProps.layout !== "simple") parts.push(`  layout="${footerProps.layout}"`);
        if (footerProps.position !== "static") parts.push(`  position="${footerProps.position}"`);
        if (footerProps.fixed) parts.push("  fixed");
        if (footerProps.shadow && footerProps.shadow !== "none")
          parts.push(`  shadow="${footerProps.shadow}"`);
        if (footerProps.container && footerProps.container !== "none")
          parts.push(`  container="${footerProps.container}"`);
        if (footerProps.variant !== "default") parts.push(`  variant="${footerProps.variant}"`);
        if (footerProps.tone !== "default") parts.push(`  tone="${footerProps.tone}"`);
        if (footerProps.layout === "multi-column") {
          parts.push('  :columns="columns"');
        }
        parts.push(`  copyright="${footerProps.copyright}"`);
        parts.push(">");
        if (footerProps.layout !== "multi-column") {
          parts.push('  <div><a href="#">Termos</a> &bull; <a href="#">Privacidade</a></div>');
        }
        parts.push("</MsFooter>");
        return parts.join("\n");
      }

      if (activeTab.value === "scrollbar") {
        const parts = ["<MsScrollbar"];
        if (scrollbarProps.orientation !== "vertical")
          parts.push(`  orientation="${scrollbarProps.orientation}"`);
        if (scrollbarProps.size !== "normal") parts.push(`  size="${scrollbarProps.size}"`);
        if (scrollbarProps.visibility !== "auto")
          parts.push(`  visibility="${scrollbarProps.visibility}"`);
        if (scrollbarProps.tone !== "default") parts.push(`  tone="${scrollbarProps.tone}"`);
        if (scrollbarProps.arrows) parts.push("  arrows");
        if (scrollbarProps.trackColor) parts.push(`  track-color="${scrollbarProps.trackColor}"`);
        if (scrollbarProps.thumbColor) parts.push(`  thumb-color="${scrollbarProps.thumbColor}"`);
        if (scrollbarProps.thumbRadius)
          parts.push(`  thumb-radius="${scrollbarProps.thumbRadius}"`);
        if (scrollbarProps.radius) parts.push(`  radius="${scrollbarProps.radius}"`);
        if (scrollbarProps.maxHeight) parts.push(`  :max-height="${scrollbarProps.maxHeight}"`);
        parts.push(">");
        parts.push('  <div style="padding: 16px;">Conteúdo longo rolável...</div>');
        parts.push("</MsScrollbar>");
        return parts.join("\n");
      }

      return "";
    });

    // FlyonUI Docs & Navigation State
    const subTab = ref("preview");
    const sidebarFilter = ref("");
    const allTones = [
      "primary",
      "secondary",
      "accent",
      "neutral",
      "success",
      "info",
      "warning",
      "danger",
    ];
    const toneHexMap = {
      primary: "#2e86de",
      secondary: "#e15f41",
      accent: "#341f97",
      neutral: "#222f3e",
      success: "#10ac84",
      info: "#0abde3",
      warning: "#ff9f43",
      danger: "#ee5253",
    };

    const navGroups = [
      {
        title: "🚀 Primeiros Passos",
        items: [
          {
            id: "overview",
            label: "Visão Geral da Biblioteca",
            icon: "📖",
            badge: "Início",
            badgeTone: "primary",
          },
          {
            id: "installation",
            label: "Instalação & Setup",
            icon: "📦",
            badge: "Quickstart",
            badgeTone: "success",
          },
          {
            id: "theming-guide",
            label: "Guia de Theming & Dials",
            icon: "🎨",
            badge: "Tokens",
            badgeTone: "accent",
          },
        ],
      },
      {
        title: "🎨 Fundações & Design Tokens",
        items: [
          { id: "typography", label: "Tipografia & Escala", icon: "🔤" },
          {
            id: "colors",
            label: "Cores & WCAG 2.2",
            icon: "🎨",
            badge: "Brand",
            badgeTone: "accent",
          },
          { id: "dials", label: "Temas & Dials Visuais", icon: "🎛️" },
          { id: "utilities", label: "Utilitários CSS & Grid", icon: "🛠️" },
          { id: "rtl", label: "Suporte RTL Bidirecional", icon: "🔄" },
          { id: "customization", label: "Customização Dinâmica", icon: "✨" },
        ],
      },
      {
        title: "🏛️ Layout & Estrutura",
        items: [
          { id: "app-shell", label: "MsAppShell", icon: "🏛️" },
          { id: "containers", label: "MsContainer", icon: "📦" },
          { id: "pages", label: "MsPage & Headers", icon: "📄" },
          { id: "cards", label: "MsCard (Superfície)", icon: "🃏" },
          { id: "separators", label: "MsSeparator", icon: "➖" },
          {
            id: "scrollbar",
            label: "MsScrollbar (Barra Rolagem)",
            icon: "📜",
            badge: "8 Tons",
            badgeTone: "info",
          },
        ],
      },
      {
        title: "🔘 Ações & Gatilhos",
        items: [
          {
            id: "buttons",
            label: "MsButton (Botões)",
            icon: "🔘",
            badge: "8 Tons",
            badgeTone: "primary",
          },
          { id: "icon-buttons", label: "MsIconButton", icon: "🔲" },
          { id: "dropdown", label: "MsDropdown & Menu", icon: "🔽" },
          { id: "segmented-control", label: "MsSegmentedControl", icon: "🎚️" },
        ],
      },
      {
        title: "📝 Formulários & Entradas",
        items: [
          { id: "inputs", label: "MsInput & Textarea", icon: "📝" },
          { id: "search-fields", label: "MsSearchField", icon: "🔍" },
          { id: "selections", label: "Checkbox, Radio, Switch", icon: "☑️" },
          { id: "fields", label: "MsField (Acessível)", icon: "🏷️" },
          { id: "native-select", label: "MsNativeSelect", icon: "📋" },
          {
            id: "select",
            label: "MsSelect (Unificado)",
            icon: "🎯",
            badge: "Core",
            badgeTone: "primary",
          },
          { id: "ranges", label: "MsRange (Slider)", icon: "📏", badge: "8 Tons" },
          { id: "file-inputs", label: "MsFileInput (Upload)", icon: "📁" },
          { id: "color-pickers", label: "MsColorPicker", icon: "🎨" },
        ],
      },
      {
        title: "🧭 Navegação",
        items: [
          {
            id: "navbar",
            label: "MsNavbar (Barra Superior)",
            icon: "🧭",
            badge: "8 Tons",
            badgeTone: "primary",
          },
          {
            id: "sidebar",
            label: "MsSidebar (Painel Lateral)",
            icon: "📑",
            badge: "8 Tons",
            badgeTone: "accent",
          },
          {
            id: "sidebar-menu",
            label: "MsSidebarMenu",
            icon: "📋",
            badge: "Novo",
            badgeTone: "success",
          },
          { id: "breadcrumbs", label: "MsBreadcrumbs", icon: "🧭" },
          { id: "tabs", label: "MsTabs (Abas)", icon: "🗂️" },
          { id: "steppers", label: "MsStepper (Passos)", icon: "👣" },
          { id: "docks", label: "MsDock (Barra)", icon: "⚓" },
          { id: "scroll-spies", label: "MsScrollSpy", icon: "📜" },
        ],
      },
      {
        title: "💬 Feedback & Notificações",
        items: [
          { id: "alerts", label: "MsAlert (Avisos)", icon: "⚠️", badge: "8 Tons" },
          { id: "banners", label: "MsBanner (Notícias)", icon: "📢", badge: "8 Tons" },
          { id: "badges", label: "MsBadge & Tags", icon: "🏷️", badge: "8 Tons" },
          { id: "toasts", label: "MsToast (Notificações)", icon: "🔔", badge: "8 Tons" },
          { id: "progress", label: "MsProgress (Barras)", icon: "📊", badge: "8 Tons" },
          { id: "radial-progress", label: "MsProgressRadial", icon: "⭕", badge: "8 Tons" },
          { id: "spinners", label: "MsSpinner (Loading)", icon: "⏳" },
          { id: "skeletons", label: "MsSkeleton (Ghost)", icon: "💀" },
          { id: "tooltips", label: "MsTooltip (Dicas)", icon: "💬" },
          { id: "status", label: "MsStatus (Pulso)", icon: "🟢", badge: "8 Tons" },
          {
            id: "confirm-dialog",
            label: "MsConfirmDialog",
            icon: "🛑",
            badge: "Crítico",
            badgeTone: "danger",
          },
        ],
      },
      {
        title: "🪟 Overlays & Diálogos",
        items: [
          { id: "dialogs", label: "MsDialog (Modal)", icon: "🪟" },
          { id: "drawers", label: "MsDrawer (Gavetas)", icon: "🗄️" },
          { id: "accordions", label: "MsAccordion (Sanfona)", icon: "🪗" },
          { id: "popovers", label: "MsPopover (Flutuante)", icon: "💬" },
          { id: "context-menus", label: "MsContextMenu", icon: "🖱️" },
          { id: "glimpse", label: "MsGlimpse (Hovercard)", icon: "🔍", badge: "Novo" },
        ],
      },
      {
        title: "📊 Exibição de Dados",
        items: [
          { id: "tables", label: "MsTable (Tabelas)", icon: "📊" },
          { id: "lists", label: "MsList & Grupos", icon: "📃" },
          { id: "timeline", label: "MsTimeline", icon: "⏳", badge: "8 Tons" },
          { id: "trees", label: "MsTree (Hierarquia)", icon: "🌲" },
          { id: "empty-states", label: "MsEmptyState", icon: "📭" },
          { id: "animated-numbers", label: "MsAnimatedNumber", icon: "🔢" },
          { id: "ratings", label: "MsRating (Estrelas)", icon: "⭐" },
          { id: "chat-bubbles", label: "MsChatBubble", icon: "💬" },
          { id: "carousels", label: "MsCarousel (Slides)", icon: "🎠" },
          { id: "avatars", label: "MsAvatar & Grupo", icon: "👤" },
          {
            id: "footer",
            label: "MsFooter (Rodapé)",
            icon: "🦶",
            badge: "8 Tons",
            badgeTone: "neutral",
          },
        ],
      },
      {
        title: "⚙️ Provedores & Escopos",
        items: [{ id: "theming", label: "MsThemeScope & Provider", icon: "🎨" }],
      },
      {
        title: "📝 Tipografia & Conteúdo",
        items: [
          { id: "code", label: "MsCode (Inline)", icon: "💻", badge: "8 Tons" },
          { id: "code-block", label: "MsCodeBlock", icon: "📑", badge: "Destacado" },
          { id: "snippet", label: "MsSnippet (Terminal)", icon: "📋", badge: "Abas" },
          { id: "link", label: "MsLink (Hiperlink)", icon: "🔗", badge: "8 Tons" },
          { id: "blockquote", label: "MsBlockquote", icon: "💬", badge: "8 Tons" },
          { id: "label", label: "MsLabel (Rótulo)", icon: "🏷️" },
          { id: "truncate", label: "MsTruncate (Retrátil)", icon: "✂️" },
        ],
      },
      {
        title: "📋 Formulários Avançados",
        items: [
          { id: "choicebox", label: "MsChoicebox (Cards)", icon: "☑️", badge: "Cards" },
          { id: "password-input", label: "MsPasswordInput", icon: "🔒", badge: "Força" },
          { id: "masked-input", label: "MsMaskedInput", icon: "🎭", badge: "Máscaras" },
          { id: "pin-input", label: "MsPinInput (OTP)", icon: "🔢", badge: "Segurança" },
          { id: "form-wizard", label: "MsFormWizard", icon: "🧙‍♂️", badge: "Etapas" },
        ],
      },
      {
        title: "🧭 Navegação & Alternância",
        items: [
          { id: "pagination", label: "MsPagination", icon: "📄", badge: "Páginas" },
          { id: "toggle-group", label: "MsToggleGroup", icon: "🎛️", badge: "Segmentado" },
          { id: "collapse", label: "MsCollapse", icon: "↕️", badge: "Acordeão" },
        ],
      },
      {
        title: "🎯 Seletores & Comandos",
        items: [
          { id: "icon-picker", label: "MsIconPicker", icon: "🎨", badge: "Busca" },
          { id: "emoji-picker", label: "MsEmojiPicker", icon: "😀", badge: "Categorias" },
          { id: "date-picker", label: "MsDatePicker", icon: "📅", badge: "Calendário" },
          { id: "command-palette", label: "MsCommandPalette", icon: "⌘", badge: "Atalho" },
        ],
      },
      {
        title: "🖼️ Superfícies & Mídia",
        items: [
          { id: "canvas", label: "MsCanvas (Padrões)", icon: "📐", badge: "SVG" },
          { id: "bento-grid", label: "MsBentoGrid", icon: "🍱", badge: "Bento" },
          { id: "masonry-grid", label: "MsMasonryGrid", icon: "🧱", badge: "Cascata" },
          { id: "split-pane", label: "MsSplitPane", icon: "🪟", badge: "Divisor" },
          { id: "lightbox", label: "MsLightbox", icon: "🔍", badge: "Modal" },
          { id: "dropzone", label: "MsDropzone (Drag)", icon: "📥", badge: "Upload" },
        ],
      },
      {
        title: "✨ Visual FX & Ações",
        items: [
          { id: "marquee", label: "MsMarquee", icon: "📜", badge: "Infinito" },
          { id: "parallax", label: "MsParallax", icon: "🌌", badge: "Profundidade" },
          { id: "pointer", label: "MsPointer", icon: "🖱️", badge: "Custom" },
          { id: "fab", label: "MsFab (Floating)", icon: "🔴", badge: "SpeedDial" },
        ],
      },
    ];

    const filteredNavGroups = computed(() => {
      const q = sidebarFilter.value.trim().toLowerCase();
      if (!q) return navGroups;
      return navGroups
        .map((g) => ({
          title: g.title,
          items: g.items.filter(
            (i) => i.label.toLowerCase().includes(q) || i.id.toLowerCase().includes(q),
          ),
        }))
        .filter((g) => g.items.length > 0);
    });

    const activeMeta = computed(() => {
      return componentDocs[activeTab.value] || null;
    });

    // MsSidebarMenu Playground State
    const sidebarMenuTone = ref("primary");
    const sidebarMenuDensity = ref("normal");
    const sidebarMenuShape = ref("rounded");
    const sidebarMenuCollapsed = ref(false);
    const sampleMenuPreviewItems = [
      {
        title: "Módulos Corporativos",
        items: [
          { id: "m-dash", label: "Dashboard Executivo", icon: "📊" },
          {
            id: "m-sales",
            label: "Operações Comerciais",
            icon: "💳",
            badge: "Pro",
            badgeTone: "accent",
            children: [
              { id: "m-orders", label: "Pedidos Faturados" },
              { id: "m-invoices", label: "Notas Fiscais" },
              { id: "m-returns", label: "Devoluções & Trocas" },
            ],
          },
          {
            id: "m-team",
            label: "Gestão de Clientes",
            icon: "👥",
            badge: "24",
            badgeTone: "primary",
            children: [
              { id: "m-clients", label: "Contas Ativas" },
              { id: "m-leads", label: "Pipeline de Leads" },
            ],
          },
        ],
      },
      {
        title: "Segurança & Configuração",
        items: [
          { id: "m-sec", label: "Acessos & Permissões", icon: "🔒" },
          { id: "m-audit", label: "Trilhas de Auditoria", icon: "📜" },
        ],
      },
    ];

    const generatedFullCode = computed(() => {
      const cmp = activeMeta.value?.name || "MsComponent";
      const code = generatedCode.value || `<${cmp} />`;
      const matches = code.match(/<Ms[A-Za-z0-9]+/g);
      const componentsList = matches ? [...new Set(matches.map((m) => m.slice(1)))].sort() : [cmp];
      if (activeTab.value === "toasts" && !componentsList.includes("useToast")) {
        componentsList.push("useToast");
      }
      const importList = componentsList.join(", ");
      return `<template>\n  ${code.split("\n").join("\n  ")}\n</template>\n\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { ${importList} } from "@magic-style/vue";\n</script>`;
    });

    const copyCode = () => {
      const textToCopy =
        subTab.value === "code"
          ? generatedFullCode.value
          : generatedCode.value || generatedFullCode.value;
      if (window.navigator?.clipboard) {
        window.navigator.clipboard.writeText(textToCopy);
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 2000);
      }
    };

    const res = {
      activeTab,
      subTab,
      sidebarFilter,
      allTones,
      toneHexMap,
      navGroups,
      filteredNavGroups,
      activeMeta,
      sidebarMenuTone,
      sidebarMenuDensity,
      sidebarMenuShape,
      sidebarMenuCollapsed,
      sampleMenuPreviewItems,
      generatedFullCode,
      copied,
      buttonProps,
      buttonGroupProps,
      clickCount,
      onButtonClick,
      dropdownProps,
      menuItems,
      lastSelectedAction,
      onMenuSelect,
      inputProps,
      inputValue,
      textareaValue,
      textareaRows,
      textareaProps,
      checkboxState,
      selectedPlan,
      radioProps,
      switchState,
      fieldProps,
      fieldInput,
      toggleFieldError,
      nativeSelectProps,
      nativeSelectOptions,
      badgeProps,
      dialogProps,
      lastDialogEvent,
      onDialogClose,
      alertProps,
      cardProps,
      cardClickCount,
      avatarProps,
      tabsProps,
      currentTab,
      spinnerProps,
      themeScopeProps,
      progressProps,
      skeletonProps,
      tooltipProps,
      breadcrumbsProps,
      breadcrumbsItems,
      tagProps,
      resetTag,
      emptyStateProps,
      iconButtonProps,
      iconButtonClickCount,
      onIconButtonClick,
      separatorProps,
      segmentedOptions,
      selectedSegment,
      segmentedProps,
      searchQuery,
      searchFieldProps,
      lastSearchSubmitted,
      onSearchSubmit,
      appShellProps,
      toggleShellSidebar,
      pageProps,
      selectProps,
      singleSelectValue,
      multiSelectValue,
      selectOptions,
      tableProps,
      tableSortDirection,
      tableRows,
      selectedTableRow,
      toggleTableSort,
      generatedCode,
      copyCode,
      copiedImport,
      copyImport,
      navbarProps,
      sidebarProps,
      footerProps,
      scrollbarProps,
      foundation,
      batch,
      b9,
      b15,
      docsSnippetInstall,
      docsMainTsCode,
      docsAppVueCode,
      docsIndexHtmlCode,
      docsThemeScopeCode,
      triggerToast: (...args) => batch.triggerToast(...args),
    };
    if (typeof window !== "undefined") {
      window.__studio = res;
    }
    return res;
  },
  template: `
    <div class="studio-container">
      <!-- SIDEBAR SLIDING MENU (MsSidebarMenu) -->
      <aside class="studio-sidebar">
        <div class="sidebar-search-box">
          <input
            type="text"
            v-model="sidebarFilter"
            class="sidebar-search-input"
            placeholder="🔍 Filtrar 82 componentes..."
          />
        </div>

        <MsSidebarMenu v-model="activeTab" @select="subTab = 'preview'" tone="primary" density="compact" shape="rounded">
          <MsSidebarMenuGroup
            v-for="grp in filteredNavGroups"
            :key="grp.title"
            :title="grp.title"
          >
            <MsSidebarMenuItem
              v-for="itm in grp.items"
              :key="itm.id"
              :id="itm.id"
              :label="itm.label"
              :icon="itm.icon"
              :badge="itm.badge"
              :badge-tone="itm.badgeTone"
              :active="activeTab === itm.id"
              @click="activeTab = itm.id; subTab = 'preview'"
            />
          </MsSidebarMenuGroup>
        </MsSidebarMenu>
      </aside>

      <!-- MAIN CONTENT -->
      <main class="studio-content">
        <div class="viewport-wrapper" data-viewport-container>
          <MsToastContainer />

          <!-- OFFICIAL DOCUMENTATION COMPONENT HEADER -->
          <div v-if="activeMeta" class="component-header">
            <div class="component-header-top">
              <div class="doc-breadcrumbs">
                <a href="#" @click.prevent="activeTab = 'overview'">Documentação</a>
                <span class="doc-breadcrumbs-sep">/</span>
                <span>{{ activeMeta.category }}</span>
                <span class="doc-breadcrumbs-sep">/</span>
                <span style="color: var(--ms-color-text-primary); font-weight: 700;">{{ activeMeta.name }}</span>
              </div>
              <div class="component-title-row">
                <h1 class="component-title">{{ activeMeta.name }}</h1>
                <span class="version-tag" style="font-size: 11px;">v0.1.0</span>
                <span class="ms-badge" data-tone="primary" data-variant="soft" data-pill>Estável</span>
                <span class="ms-badge" data-tone="neutral" data-variant="outline">{{ activeMeta.category }}</span>
                <span class="ms-badge" data-tone="success" data-variant="soft" data-pill>WCAG AAA</span>
              </div>
              <p class="component-desc">{{ activeMeta.description }}</p>

              <!-- QUICK IMPORT SNIPPET -->
              <div style="margin-top: var(--ms-space-3); max-width: 680px;">
                <MsSnippet
                  :tabs="[
                    { label: 'Vue SFC', code: 'import { ' + activeMeta.name + ' } from \\'@magic-style/vue\\';', language: 'ts' },
                    { label: 'CSS Global', code: '@import \\'@magic-style/css/dist/index.css\\';', language: 'css' },
                    { label: 'pnpm', code: 'pnpm add @magic-style/vue @magic-style/css', language: 'bash' }
                  ]"
                />
              </div>
            </div>
            <div style="margin-top: var(--ms-space-4); margin-bottom: var(--ms-space-1);">
              <MsTabs v-model="subTab" variant="line" size="md">
                <MsTabList aria-label="Abas de Documentação do Componente">
                  <MsTab value="preview">✨ Preview Interativo</MsTab>
                  <MsTab value="code">📋 Código Vue SFC</MsTab>
                  <MsTab value="api">📖 Especificação de API</MsTab>
                  <MsTab value="variations">🎨 Galeria de Variações</MsTab>
                </MsTabList>
              </MsTabs>
            </div>
          </div>

          <!-- TAB CONTENT: CODE -->
          <div v-if="activeMeta && subTab === 'code'" style="margin-block: var(--ms-space-4);">
            <MsCodeBlock
              :code="generatedFullCode"
              language="vue"
              :filename="activeMeta.name + '.vue'"
              :show-line-numbers="true"
            />
          </div>

          <!-- TAB CONTENT: API SPECIFICATION -->
          <div v-if="activeMeta && subTab === 'api'" class="api-section">
            <div class="api-section-title">📦 Propriedades (Props)</div>
            <div class="api-table-wrapper">
              <table class="api-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Tipo TypeScript</th>
                    <th>Padrão</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="p in activeMeta.props" :key="p.name">
                    <td class="api-prop-name">{{ p.name }}</td>
                    <td><code class="api-type-tag">{{ p.type }}</code></td>
                    <td class="api-default-val">{{ p.default }}</td>
                    <td>{{ p.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-if="activeMeta.slots && activeMeta.slots.length > 0">
              <div class="api-section-title">📥 Slots</div>
              <div class="api-table-wrapper">
                <table class="api-table">
                  <thead>
                    <tr>
                      <th>Nome do Slot</th>
                      <th>Props do Escopo</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="s in activeMeta.slots" :key="s.name">
                      <td class="api-prop-name">#{{ s.name }}</td>
                      <td><code class="api-type-tag">{{ s.scope || '—' }}</code></td>
                      <td>{{ s.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div v-if="activeMeta.emits && activeMeta.emits.length > 0">
              <div class="api-section-title">⚡ Eventos (Emits)</div>
              <div class="api-table-wrapper">
                <table class="api-table">
                  <thead>
                    <tr>
                      <th>Evento</th>
                      <th>Payload</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="e in activeMeta.emits" :key="e.name">
                      <td class="api-prop-name">@{{ e.name }}</td>
                      <td><code class="api-type-tag">{{ e.payload }}</code></td>
                      <td>{{ e.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div v-if="activeMeta.tokens && activeMeta.tokens.length > 0">
              <div class="api-section-title">🎨 Tokens de Design & Variáveis CSS</div>
              <div class="api-table-wrapper">
                <table class="api-table">
                  <thead>
                    <tr>
                      <th>Variável CSS</th>
                      <th>Valor Padrão</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="tok in activeMeta.tokens" :key="tok.name">
                      <td class="api-prop-name">{{ tok.name }}</td>
                      <td><code class="api-default-val">{{ tok.default }}</code></td>
                      <td>{{ tok.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- TAB CONTENT: VARIATIONS -->
          <div v-if="activeMeta && subTab === 'variations'" class="variations-gallery">
            ${variationsTemplatesHtml}
          </div>

          <!-- TAB: SIDEBAR MENU PLAYGROUND (NEW) -->
          <div v-if="activeTab === 'sidebar-menu' && subTab === 'preview'">
            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="background: var(--ms-color-surface-default); padding: 32px; justify-content: flex-start;">
                  <div style="inline-size: 100%; max-inline-size: 320px; border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); padding: 16px; background: var(--ms-color-surface-raised); box-shadow: var(--ms-elevation-card);">
                    <MsSidebarMenu
                      :tone="sidebarMenuTone"
                      :density="sidebarMenuDensity"
                      :shape="sidebarMenuShape"
                      :collapsed="sidebarMenuCollapsed"
                      :items="sampleMenuPreviewItems"
                    />
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSidebarMenu</div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
                  <select class="prop-select" v-model="sidebarMenuTone">
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
                  <label class="prop-label">Densidade (density)</label>
                  <select class="prop-select" v-model="sidebarMenuDensity">
                    <option value="compact">compact (Espaçamento reduzido)</option>
                    <option value="normal">normal (Padrão corporativo)</option>
                    <option value="spacious">spacious (Amplo e confortável)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Formato dos Itens (shape)</label>
                  <select class="prop-select" v-model="sidebarMenuShape">
                    <option value="rounded">rounded (Cantos arredondados)</option>
                    <option value="pill">pill (Pílula completa)</option>
                    <option value="square">square (Cantos retos 0px)</option>
                  </select>
                </div>

                <div style="margin-top: 8px;">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="sidebarMenuCollapsed" />
                    <span>Modo Compacto / Ícones (collapsed)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- COMPONENT PREVIEW PLAYGROUNDS (SHOWN WHEN subTab === 'preview' OR ON FOUNDATION) -->
          <div v-show="!activeMeta || subTab === 'preview'">
            ${docTemplatesHtml}
            ${foundationTemplatesHtml}
            ${batchTemplatesHtml}
            ${batch9To14TemplatesHtml}
            ${batch15TemplatesHtml}

            <!-- TAB: BUTTONS -->
          <div v-if="activeTab === 'buttons'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsButton & MsButtonGroup</h2>
                <div class="panel-subtitle">Botões atômicos e agrupados com suporte a variantes, tones, tamanhos e acessibilidade completa.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview">
                  <MsButton
                    :variant="buttonProps.variant"
                    :tone="buttonProps.tone"
                    :size="buttonProps.size"
                    :pill="buttonProps.pill"
                    :caret="buttonProps.caret"
                    :loading="buttonProps.loading"
                    :disabled="buttonProps.disabled"
                    @click="onButtonClick"
                  >
                    <template v-if="buttonProps.showPrefix" #prefix>⚡</template>
                    {{ buttonProps.label }}
                    <template v-if="buttonProps.showSuffix" #suffix>→</template>
                  </MsButton>
                </div>

                <!-- Event log -->
                <div class="events-log">
                  <strong>Interações:</strong> Cliques registrados: {{ clickCount }}
                </div>

                <!-- Group Preview -->
                <div class="controls-card">
                  <div class="controls-card-title">MsButtonGroup Dinâmico</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-4);">
                    <div style="display: flex; gap: var(--ms-space-4); align-items: center; flex-wrap: wrap;">
                      <MsButtonGroup
                        :orientation="buttonGroupProps.orientation"
                        :attached="buttonGroupProps.attached"
                        :full-width="buttonGroupProps.fullWidth"
                      >
                        <MsButton variant="outline" tone="neutral">Esquerda</MsButton>
                        <MsButton variant="outline" tone="neutral">Centro</MsButton>
                        <MsButton variant="outline" tone="neutral">Direita</MsButton>
                      </MsButtonGroup>

                      <MsButtonGroup
                        :orientation="buttonGroupProps.orientation"
                        :attached="buttonGroupProps.attached"
                      >
                        <MsButton variant="solid" tone="primary">Salvar</MsButton>
                        <MsButton variant="solid" tone="primary" caret aria-label="Opções de salvar" />
                      </MsButtonGroup>
                    </div>

                    <div style="display: flex; gap: var(--ms-space-3); align-items: center; flex-wrap: wrap; padding-top: var(--ms-space-2); border-top: 1px solid var(--ms-color-border-subtle);">
                      <label class="prop-label" style="margin: 0;">Orientação:</label>
                      <select class="prop-select" style="width: auto;" v-model="buttonGroupProps.orientation">
                        <option value="horizontal">horizontal</option>
                        <option value="vertical">vertical</option>
                      </select>

                      <label class="prop-checkbox" style="margin: 0;">
                        <input type="checkbox" v-model="buttonGroupProps.attached" />
                        <span>Attached</span>
                      </label>

                      <label class="prop-checkbox" style="margin: 0;">
                        <input type="checkbox" v-model="buttonGroupProps.fullWidth" />
                        <span>Full Width</span>
                      </label>
                    </div>
                  </div>
                </div>

                <!-- Code Card -->
                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <!-- Controls sidebar -->
              <div class="controls-card">
                <div class="controls-card-title">Propriedades & Modificadores</div>

                <div class="prop-row">
                  <label class="prop-label">Label do Botão</label>
                  <input class="prop-input" type="text" v-model="buttonProps.label" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variant (Estilo)</label>
                  <select class="prop-select" v-model="buttonProps.variant">
                    <option value="solid">solid</option>
                    <option value="soft">soft</option>
                    <option value="outline">outline</option>
                    <option value="ghost">ghost</option>
                    <option value="dashed">dashed (Tracejado)</option>
                    <option value="link">link (Link de Texto)</option>
                    <option value="gradient">gradient</option>
                    <option value="squared">squared</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tone (Papel Semântico)</label>
                  <select class="prop-select" v-model="buttonProps.tone">
                    <option value="primary">primary</option>
                    <option value="secondary">secondary</option>
                    <option value="accent">accent</option>
                    <option value="neutral">neutral</option>
                    <option value="success">success</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Size (Escala)</label>
                  <select class="prop-select" v-model="buttonProps.size">
                    <option value="xs">xs (Extra Pequeno - 28px)</option>
                    <option value="sm">sm (Pequeno - 32px)</option>
                    <option value="md">md (Padrão - 40px)</option>
                    <option value="lg">lg (Grande - 48px)</option>
                    <option value="xl">xl (Extra Grande - 56px)</option>
                    <option value="xxl">xxl (Gigante)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="buttonProps.pill" />
                    <span>Formato Pill (Arredondado)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="buttonProps.caret" />
                    <span>Indicador Caret (Dropdown)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="buttonProps.loading" />
                    <span>Estado Loading (Spinner)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="buttonProps.disabled" />
                    <span>Desabilitado (disabled)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="buttonProps.showPrefix" />
                    <span>Ícone Prefix</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="buttonProps.showSuffix" />
                    <span>Ícone Suffix</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: DROPDOWN & MENU -->
          <div v-if="activeTab === 'dropdown'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsDropdownButton & MsMenu</h2>
                <div class="panel-subtitle">Menu de ações suspenso com posicionamento flutuante, prefixos de ícones, separadores, tons de perigo, alinhamento e navegação por teclado.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="min-block-size: 280px; align-items: flex-start; padding-block-start: var(--ms-space-6);">
                  <div :style="dropdownProps.fullWidth ? 'width: 100%; max-width: 380px;' : ''">
                    <MsDropdownButton
                      label="Gerenciar Projeto"
                      :variant="dropdownProps.variant"
                      :tone="dropdownProps.tone"
                      :size="dropdownProps.size"
                      :align="dropdownProps.align"
                      :full-width="dropdownProps.fullWidth"
                      :items="menuItems"
                      @select="onMenuSelect"
                    />
                  </div>
                </div>

                <div class="events-log">
                  <strong>Última ação selecionada:</strong>
                  <span v-if="lastSelectedAction" style="color: var(--ms-color-interactive-primary); font-weight: bold;"> {{ lastSelectedAction }}</span>
                  <span v-else style="color: var(--ms-color-text-muted);"> Nenhuma ação disparada ainda.</span>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsDropdownButton</div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="dropdownProps.variant">
                    <option value="solid">solid</option>
                    <option value="soft">soft</option>
                    <option value="outline">outline</option>
                    <option value="ghost">ghost</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="dropdownProps.tone">
                    <option value="primary">primary</option>
                    <option value="neutral">neutral</option>
                    <option value="secondary">secondary</option>
                    <option value="accent">accent</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="dropdownProps.size">
                    <option value="sm">sm</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Alinhamento do Menu (align)</label>
                  <select class="prop-select" v-model="dropdownProps.align">
                    <option value="left">left (Esquerda - Padrão)</option>
                    <option value="right">right (Direita)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="dropdownProps.fullWidth" />
                    <span>Largura Total (full-width)</span>
                  </label>
                </div>

                <div class="controls-card-title" style="margin-top: var(--ms-space-4);">Itens do MsMenu</div>
                <ul style="padding-inline-start: var(--ms-space-4); margin-block: var(--ms-space-2); font-size: var(--ms-typography-size-xs); color: var(--ms-color-text-secondary);">
                  <li v-for="(item, idx) in menuItems" :key="idx">
                    <span v-if="item.divider" style="color: var(--ms-color-text-muted);">--- [Divisor de Itens] ---</span>
                    <span v-else>
                      <span v-if="item.prefix">{{ item.prefix }} </span>
                      {{ item.label }}
                      <span v-if="item.suffix"> ({{ item.suffix }})</span>
                      <span v-if="item.tone === 'danger'" style="color: var(--ms-color-status-danger);"> [tone: danger]</span>
                      <span v-if="item.disabled" style="color: var(--ms-color-status-danger);"> [Desabilitado]</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- TAB: INPUTS & TEXTAREA -->
          <div v-if="activeTab === 'inputs'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsInput & MsTextarea</h2>
                <div class="panel-subtitle">Campos de texto unificados com validação, ícones prefix/suffix, estados de processamento e floating label.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="flex-direction: column; gap: var(--ms-space-5); align-items: stretch; max-inline-size: 480px; margin-inline: auto;">
                  <div>
                    <label class="prop-label" style="display: block; margin-block-end: var(--ms-space-1)">Campo de Entrada (MsInput)</label>
                    <MsInput
                      v-model="inputValue"
                      :variant="inputProps.variant"
                      :size="inputProps.size"
                      :tone="inputProps.tone"
                      :placeholder="inputProps.placeholder"
                      :disabled="inputProps.disabled"
                      :readonly="inputProps.readonly"
                      :invalid="inputProps.invalid"
                      :processing="inputProps.processing"
                      :pill="inputProps.pill"
                      :clearable="inputProps.clearable"
                      :password-toggle="inputProps.passwordToggle"
                      :type="inputProps.type"
                    >
                      <template v-if="inputProps.showPrefix" #prefix>🔍</template>
                      <template v-if="inputProps.showSuffix" #suffix>✓</template>
                    </MsInput>
                  </div>

                  <div>
                    <label class="prop-label" style="display: block; margin-block-end: var(--ms-space-1)">Área de Texto (MsTextarea)</label>
                    <MsTextarea
                      v-model="textareaValue"
                      :size="textareaProps.size"
                      :resize="textareaProps.resize"
                      :rows="textareaRows"
                      :auto-grow="textareaProps.autoGrow"
                      :show-count="textareaProps.showCount"
                      :max-length="textareaProps.maxLength"
                      :disabled="inputProps.disabled"
                      :invalid="inputProps.invalid"
                      placeholder="Observações complementares..."
                    />
                  </div>
                </div>

                <div class="events-log">
                  <div><strong>v-model MsInput:</strong> "{{ inputValue }}"</div>
                  <div style="margin-block-start: var(--ms-space-1);"><strong>v-model MsTextarea:</strong> "{{ textareaValue }}"</div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do Input</div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="inputProps.variant">
                    <option value="outline">outline (Borda sutil - Padrão)</option>
                    <option value="filled">filled (Preenchido com fundo sunken)</option>
                    <option value="flushed">flushed (Apenas linha inferior)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tipo (type)</label>
                  <select class="prop-select" v-model="inputProps.type">
                    <option value="text">text (Texto)</option>
                    <option value="password">password (Senha)</option>
                    <option value="email">email</option>
                    <option value="number">number</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (Size)</label>
                  <select class="prop-select" v-model="inputProps.size">
                    <option value="xs">xs (28px - Compacto)</option>
                    <option value="sm">sm (32px)</option>
                    <option value="md">md (40px - Padrão)</option>
                    <option value="lg">lg (48px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (Tone)</label>
                  <select class="prop-select" v-model="inputProps.tone">
                    <option value="default">default (Padrão)</option>
                    <option value="primary">primary (Azul)</option>
                    <option value="secondary">secondary (Coral)</option>
                    <option value="accent">accent (Roxo)</option>
                    <option value="neutral">neutral (Slate)</option>
                    <option value="success">success (Verde)</option>
                    <option value="info">info (Ciano)</option>
                    <option value="warning">warning (Âmbar)</option>
                    <option value="danger">danger (Vermelho)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Placeholder</label>
                  <input class="prop-input" type="text" v-model="inputProps.placeholder" />
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.pill" />
                    <span>Formato Pílula (pill)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.clearable" />
                    <span>Botão Limpar (clearable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.passwordToggle" />
                    <span>Alternar Visibilidade (passwordToggle)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.invalid" />
                    <span>Estado Inválido (invalid)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.processing" />
                    <span>Processando (processing)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.disabled" />
                    <span>Desabilitado (disabled)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.readonly" />
                    <span>Somente Leitura (readonly)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.showPrefix" />
                    <span>Slot Prefix</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="inputProps.showSuffix" />
                    <span>Slot Suffix</span>
                  </label>
                </div>

                <div class="controls-card-title" style="margin-top: var(--ms-space-4);">Propriedades do Textarea</div>

                <div class="prop-row">
                  <label class="prop-label">Redimensionamento (resize)</label>
                  <select class="prop-select" v-model="textareaProps.resize">
                    <option value="vertical">vertical (Apenas vertical)</option>
                    <option value="both">both (Livre - horizontal e vertical)</option>
                    <option value="horizontal">horizontal (Apenas horizontal)</option>
                    <option value="none">none (Travado)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="textareaProps.size">
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Linhas Iniciais (rows)</label>
                  <input class="prop-input" type="number" min="2" max="10" v-model.number="textareaRows" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Limite de Caracteres (maxLength)</label>
                  <input class="prop-input" type="number" min="20" max="1000" v-model.number="textareaProps.maxLength" />
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="textareaProps.autoGrow" />
                    <span>Auto-expansão com o texto (autoGrow)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="textareaProps.showCount" />
                    <span>Exibir Contador de Caracteres (showCount)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SELECTIONS & TOGGLES -->
          <div v-if="activeTab === 'selections'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">Checkbox, Radio Group & Switch</h2>
                <div class="panel-subtitle">Controles de seleção atômicos e compostos com estados checked, indeterminate e disabled.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="flex-direction: column; gap: var(--ms-space-5); align-items: flex-start;">
                  <div>
                    <div class="prop-label" style="margin-block-end: var(--ms-space-2)">MsCheckbox:</div>
                    <MsCheckbox
                      v-model:checked="checkboxState.checked"
                      :indeterminate="checkboxState.indeterminate"
                      :disabled="checkboxState.disabled"
                      :size="checkboxState.size"
                      :tone="checkboxState.tone"
                      :card="checkboxState.card"
                      :label="checkboxState.label"
                      :description="checkboxState.card ? checkboxState.description : undefined"
                    />
                  </div>

                  <div>
                    <div class="prop-label" style="margin-block-end: var(--ms-space-2)">MsSwitch:</div>
                    <MsSwitch
                      v-model:checked="switchState.checked"
                      :disabled="switchState.disabled"
                      :size="switchState.size"
                      :tone="switchState.tone"
                      :label-placement="switchState.labelPlacement"
                      :label="switchState.label"
                      :description="switchState.description"
                    />
                  </div>

                  <div>
                    <div class="prop-label" style="margin-block-end: var(--ms-space-2)">MsRadioGroup & MsRadio:</div>
                    <MsRadioGroup
                      v-model="selectedPlan"
                      :orientation="radioProps.orientation"
                      :size="radioProps.size"
                      :tone="radioProps.tone"
                      :card="radioProps.card"
                    >
                      <MsRadio value="starter" label="Plano Starter (Gratuito)" description="Ideal para testes e protótipos locais" />
                      <MsRadio value="pro" label="Plano Profissional (R$ 49/mês)" description="Acesso completo a componentes, temas e suporte técnico" />
                      <MsRadio value="enterprise" label="Plano Corporativo (Customizado)" description="SLA dedicado, suporte 24/7 e arquitetura customizada" />
                    </MsRadioGroup>
                  </div>
                </div>

                <div class="events-log">
                  <div><strong>Checkbox:</strong> {{ checkboxState.checked }} (indeterminado: {{ checkboxState.indeterminate }})</div>
                  <div><strong>Switch:</strong> {{ switchState.checked }}</div>
                  <div><strong>Plano Selecionado (Radio):</strong> {{ selectedPlan }}</div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do Checkbox</div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="checkboxState.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="checkboxState.tone">
                    <option value="primary">primary</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="checkboxState.card" />
                    <span>Estilo Card Selecionável (card)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="checkboxState.indeterminate" />
                    <span>Checkbox Indeterminado</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="checkboxState.disabled" />
                    <span>Desabilitar Checkbox</span>
                  </label>
                </div>

                <div class="controls-card-title" style="margin-top: var(--ms-space-4);">Propriedades do Switch</div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="switchState.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="switchState.tone">
                    <option value="primary">primary</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                    <option value="accent">accent</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posição do Label (labelPlacement)</label>
                  <select class="prop-select" v-model="switchState.labelPlacement">
                    <option value="right">right (Direita - Padrão)</option>
                    <option value="left">left (Esquerda)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="switchState.disabled" />
                    <span>Desabilitar Switch</span>
                  </label>
                </div>

                <div class="controls-card-title" style="margin-top: var(--ms-space-4);">Propriedades do RadioGroup</div>

                <div class="prop-row">
                  <label class="prop-label">Orientação (orientation)</label>
                  <select class="prop-select" v-model="radioProps.orientation">
                    <option value="vertical">vertical (Vertical - Padrão)</option>
                    <option value="horizontal">horizontal (Horizontal)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="radioProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="radioProps.tone">
                    <option value="primary">primary</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="radioProps.card" />
                    <span>Estilo Card Selecionável (card)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: FIELDS -->
          <div v-if="activeTab === 'fields'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsField Container</h2>
                <div class="panel-subtitle">Container de controle acessível integrando Label, Description, Required / Optional indicators, layout horizontal/vertical e escalas de tamanho WAI-ARIA.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="justify-content: stretch;">
                  <div style="inline-size: 100%; max-inline-size: 520px; margin-inline: auto;">
                    <MsField
                      :label="fieldProps.label"
                      :description="fieldProps.description"
                      :error="fieldProps.error"
                      :required="fieldProps.required"
                      :optional="fieldProps.optional"
                      :orientation="fieldProps.orientation"
                      :size="fieldProps.size"
                    >
                      <MsInput
                        v-model="fieldInput"
                        type="email"
                        placeholder="seu.nome@empresa.com"
                      />
                    </MsField>
                  </div>
                </div>

                <div class="events-log">
                  <strong>Estado do Formulário:</strong>
                  <div>Valor atual: "{{ fieldInput }}"</div>
                  <div>Status de erro: {{ fieldProps.hasError ? 'Ativo' : 'Válido' }}</div>
                  <div>Orientação: {{ fieldProps.orientation }} | Escala: {{ fieldProps.size }}</div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsField</div>

                <div class="prop-row">
                  <label class="prop-label">Rótulo (Label)</label>
                  <input class="prop-input" type="text" v-model="fieldProps.label" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Texto de Ajuda (Description)</label>
                  <input class="prop-input" type="text" v-model="fieldProps.description" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Orientação (orientation)</label>
                  <select class="prop-select" v-model="fieldProps.orientation">
                    <option value="vertical">vertical (Vertical - Padrão)</option>
                    <option value="horizontal">horizontal (Horizontal Lado a Lado)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Escala de Tamanho (size)</label>
                  <select class="prop-select" v-model="fieldProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="fieldProps.required" />
                    <span>Campo Obrigatório (required)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="fieldProps.optional" />
                    <span>Indicador Opcional (optional)</span>
                  </label>
                  <button
                    class="ms-button"
                    data-ms-button
                    data-variant="outline"
                    data-tone="danger"
                    data-size="sm"
                    @click="toggleFieldError"
                    style="margin-top: var(--ms-space-2);"
                  >
                    {{ fieldProps.hasError ? 'Remover Erro' : 'Simular Erro de Validação' }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: NATIVE SELECT -->
          <div v-if="activeTab === 'native-select'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsNativeSelect</h2>
                <div class="panel-subtitle">Seletor HTML nativo canônico (Doc 27 §6) com layout tokens, estados de validação e chevron SVG acessível.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview">
                  <div style="inline-size: 100%; max-inline-size: 360px;">
                    <MsField label="Especialidade Principal" description="Selecione sua área técnica primária">
                      <MsNativeSelect
                        v-model="nativeSelectProps.modelValue"
                        :size="nativeSelectProps.size"
                        :variant="nativeSelectProps.variant"
                        :tone="nativeSelectProps.tone"
                        :pill="nativeSelectProps.pill"
                        :disabled="nativeSelectProps.disabled"
                        :required="nativeSelectProps.required"
                        :placeholder="nativeSelectProps.placeholder"
                        :options="nativeSelectOptions"
                      />
                    </MsField>
                  </div>
                </div>

                <div class="events-log">
                  <strong>Valor Selecionado (v-model):</strong> {{ nativeSelectProps.modelValue }}
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsNativeSelect</div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="nativeSelectProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Grande)</option>
                    <option value="xl">xl (Extra Grande)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="nativeSelectProps.variant">
                    <option value="outline">outline (Contorno - Padrão)</option>
                    <option value="filled">filled (Preenchido)</option>
                    <option value="flushed">flushed (Apenas linha inferior)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="nativeSelectProps.tone">
                    <option value="default">default (Neutro)</option>
                    <option value="success">success (Sucesso)</option>
                    <option value="warning">warning (Atenção)</option>
                    <option value="danger">danger (Erro/Perigo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Placeholder</label>
                  <input class="prop-input" type="text" v-model="nativeSelectProps.placeholder" />
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="nativeSelectProps.pill" />
                    <span>Bordas Arredondadas (pill)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="nativeSelectProps.disabled" />
                    <span>Desabilitado (disabled)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="nativeSelectProps.required" />
                    <span>Obrigatório (required)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: BADGES -->
          <div v-if="activeTab === 'badges'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsBadge & Tags</h2>
                <div class="panel-subtitle">Indicadores de status semânticos e contadores (Doc 05 §10) com variantes tonal soft, solid e outline.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-4); flex-wrap: wrap; align-items: center; justify-content: center; min-height: 120px;">
                  <div v-if="badgeProps.placement !== 'none'">
                    <MsBadge
                      :variant="badgeProps.variant"
                      :tone="badgeProps.tone"
                      :size="badgeProps.size"
                      :pill="badgeProps.pill"
                      :dot="badgeProps.dot"
                      :dot-only="badgeProps.dotOnly"
                      :pulse="badgeProps.pulse"
                      :bordered="badgeProps.bordered"
                      :count="badgeProps.count"
                      :max-count="badgeProps.maxCount"
                      :placement="badgeProps.placement"
                    >
                      <MsButton variant="outline" tone="neutral">Notificações 🔔</MsButton>
                    </MsBadge>
                  </div>
                  <div v-else>
                    <MsBadge
                      :variant="badgeProps.variant"
                      :tone="badgeProps.tone"
                      :size="badgeProps.size"
                      :pill="badgeProps.pill"
                      :dot="badgeProps.dot"
                      :dot-only="badgeProps.dotOnly"
                      :pulse="badgeProps.pulse"
                      :bordered="badgeProps.bordered"
                      :count="badgeProps.count"
                      :max-count="badgeProps.maxCount"
                    >
                      {{ badgeProps.dotOnly ? '' : badgeProps.text }}
                    </MsBadge>
                  </div>
                </div>

                <!-- Showcase of all tones -->
                <div class="controls-card">
                  <div class="controls-card-title">Galeria de Tons Semânticos ({{ badgeProps.variant }})</div>
                  <div style="display: flex; flex-wrap: wrap; gap: var(--ms-space-2); align-items: center;">
                    <MsBadge :variant="badgeProps.variant" tone="primary" :pill="badgeProps.pill" :dot="badgeProps.dot">Primary</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="secondary" :pill="badgeProps.pill" :dot="badgeProps.dot">Secondary</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="accent" :pill="badgeProps.pill" :dot="badgeProps.dot">Accent</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="neutral" :pill="badgeProps.pill" :dot="badgeProps.dot">Neutral</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="success" :pill="badgeProps.pill" :dot="badgeProps.dot">Success</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="info" :pill="badgeProps.pill" :dot="badgeProps.dot">Info</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="warning" :pill="badgeProps.pill" :dot="badgeProps.dot">Warning</MsBadge>
                    <MsBadge :variant="badgeProps.variant" tone="danger" :pill="badgeProps.pill" :dot="badgeProps.dot">Danger</MsBadge>
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsBadge</div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="badgeProps.variant">
                    <option value="soft">soft (Tonal - Padrão)</option>
                    <option value="solid">solid (Preenchimento Total)</option>
                    <option value="outline">outline (Apenas Contorno)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Papel Semântico (tone)</label>
                  <select class="prop-select" v-model="badgeProps.tone">
                    <option value="primary">primary</option>
                    <option value="secondary">secondary</option>
                    <option value="accent">accent</option>
                    <option value="neutral">neutral</option>
                    <option value="success">success</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="badgeProps.size">
                    <option value="xs">xs (16px - Micro)</option>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl (32px - Destaque)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Contador Numérico (count)</label>
                  <input class="prop-input" type="number" min="0" max="999" v-model.number="badgeProps.count" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Teto do Contador (maxCount)</label>
                  <input class="prop-input" type="number" min="1" max="999" v-model.number="badgeProps.maxCount" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posicionamento Relativo (placement)</label>
                  <select class="prop-select" v-model="badgeProps.placement">
                    <option value="none">none (Stand-alone - Em Linha)</option>
                    <option value="top-right">top-right (Canto Superior Direito)</option>
                    <option value="top-left">top-left (Canto Superior Esquerdo)</option>
                    <option value="bottom-right">bottom-right (Canto Inferior Direito)</option>
                    <option value="bottom-left">bottom-left (Canto Inferior Esquerdo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Texto do Badge</label>
                  <input class="prop-input" type="text" v-model="badgeProps.text" />
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="badgeProps.pill" />
                    <span>Formato Pílula (pill)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="badgeProps.dot" />
                    <span>Indicador Ponto (dot)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="badgeProps.dotOnly" />
                    <span>Apenas Ponto sem Texto (dotOnly)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="badgeProps.pulse" />
                    <span>Animação Radar/Pulso (pulse)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="badgeProps.bordered" />
                    <span>Anel de Contorno (bordered)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: DIALOGS -->
          <div v-if="activeTab === 'dialogs'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsDialog (Overlay Slice — Milestone M9)</h2>
                <div class="panel-subtitle">Janela modal acessível (WAI-ARIA Dialog) com teleporte ao body, foco acessível, tecla Escape e animações de elevação.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview">
                  <MsButton
                    variant="solid"
                    tone="primary"
                    size="md"
                    @click="dialogProps.open = true"
                  >
                    Abrir Diálogo Modal
                  </MsButton>
                </div>

                <div class="events-log">
                  <strong>Status do Diálogo:</strong> {{ dialogProps.open ? 'Aberto (aria-modal="true")' : 'Fechado' }} | {{ lastDialogEvent }}
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>

                <!-- Live MsDialog instance -->
                <MsDialog
                  v-model:open="dialogProps.open"
                  :title="dialogProps.title"
                  :description="dialogProps.description"
                  :size="dialogProps.size"
                  :placement="dialogProps.placement"
                  :tone="dialogProps.tone"
                  :role="dialogProps.role"
                  :close-on-escape="dialogProps.closeOnEscape"
                  :close-on-outside-click="dialogProps.closeOnOutsideClick"
                  :show-close="dialogProps.showClose"
                  @close="onDialogClose"
                >
                  <p style="margin: 0; margin-bottom: var(--ms-space-3);">
                    Este diálogo demonstra o padrão canônico de overlay da <strong>Architecture Baseline 1.2</strong>.
                  </p>
                  <div style="background: var(--ms-color-surface-sunken); padding: var(--ms-space-3); border-radius: var(--ms-radius-md); font-size: var(--ms-typography-size-xs);">
                    ✓ Foco preso com acessibilidade modal<br />
                    ✓ Suporte a tons semânticos (borda indicadora) e posicionamento (center/top/bottom-sheet)<br />
                    ✓ Fecha com clique fora ou pressionando &lt;kbd&gt;Escape&lt;/kbd&gt;<br />
                    ✓ Fundo bloqueia rolagem do documento
                  </div>

                  <template #footer>
                    <MsButton
                      variant="outline"
                      tone="neutral"
                      size="sm"
                      @click="dialogProps.open = false"
                    >
                      Cancelar
                    </MsButton>
                    <MsButton
                      variant="solid"
                      :tone="dialogProps.tone === 'danger' ? 'danger' : 'primary'"
                      size="sm"
                      @click="dialogProps.open = false"
                    >
                      Confirmar Operação
                    </MsButton>
                  </template>
                </MsDialog>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Configuração do Diálogo</div>

                <div class="prop-row">
                  <label class="prop-label">Título (title)</label>
                  <input class="prop-input" type="text" v-model="dialogProps.title" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Descrição (description)</label>
                  <input class="prop-input" type="text" v-model="dialogProps.description" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posicionamento (placement)</label>
                  <select class="prop-select" v-model="dialogProps.placement">
                    <option value="center">center (Centro da Tela - Padrão)</option>
                    <option value="top">top (Topo / Banner)</option>
                    <option value="bottom">bottom (Inferior / Bottom Sheet)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="dialogProps.tone">
                    <option value="default">default (Padrão)</option>
                    <option value="danger">danger (Ação Destrutiva)</option>
                    <option value="warning">warning (Aviso)</option>
                    <option value="success">success (Confirmação Positiva)</option>
                    <option value="info">info (Informativo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Papel ARIA (role)</label>
                  <select class="prop-select" v-model="dialogProps.role">
                    <option value="dialog">dialog (Diálogo padrão)</option>
                    <option value="alertdialog">alertdialog (Alerta crítico)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Largura / Tamanho (size)</label>
                  <select class="prop-select" v-model="dialogProps.size">
                    <option value="sm">sm (380px)</option>
                    <option value="md">md (480px - Padrão)</option>
                    <option value="lg">lg (640px)</option>
                    <option value="xl">xl (800px)</option>
                    <option value="full">full (Tela Quase Inteira)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="dialogProps.closeOnEscape" />
                    <span>Fechar ao teclar Escape</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="dialogProps.closeOnOutsideClick" />
                    <span>Fechar ao clicar fora</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="dialogProps.showClose" />
                    <span>Mostrar botão de fechar (X)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: ALERTS -->
          <div v-if="activeTab === 'alerts'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsAlert</h2>
                <div class="panel-subtitle">Banners de feedback semântico e status (Doc 05 §8) com variantes tonal soft, solid e outline.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="flex-direction: column; gap: var(--ms-space-3);">
                  <MsAlert
                    :variant="alertProps.variant"
                    :tone="alertProps.tone"
                    :size="alertProps.size"
                    :align="alertProps.align"
                    :icon-style="alertProps.iconStyle"
                    :title="alertProps.title"
                    :description="alertProps.description"
                    :dismissible="alertProps.dismissible"
                  />
                </div>

                <!-- Showcase of all alert tones -->
                <div class="controls-card">
                  <div class="controls-card-title">Galeria de Tons de Alerta ({{ alertProps.variant }} · Ícone Destacado)</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-2);">
                    <MsAlert :variant="alertProps.variant" tone="info" icon-style="featured" title="Informação">Mensagem informativa com ícone ampliado e centralizado verticalmente.</MsAlert>
                    <MsAlert :variant="alertProps.variant" tone="success" icon-style="featured" title="Sucesso!">A operação foi processada e salva com êxito.</MsAlert>
                    <MsAlert :variant="alertProps.variant" tone="warning" icon-style="featured" title="Atenção">Verifique as permissões de acesso da sua conta.</MsAlert>
                    <MsAlert :variant="alertProps.variant" tone="danger" icon-style="featured" title="Erro Crítico">Falha ao estabelecer conexão com o endpoint.</MsAlert>
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsAlert</div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="alertProps.variant">
                    <option value="soft">soft (Tonal - Padrão)</option>
                    <option value="solid">solid (Preenchimento Total)</option>
                    <option value="outline">outline (Apenas Contorno)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="alertProps.tone">
                    <option value="info">info</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                    <option value="primary">primary</option>
                    <option value="neutral">neutral</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="alertProps.size">
                    <option value="sm">sm (Compacto · Ícone 18px)</option>
                    <option value="md">md (Padrão · Ícone 22px)</option>
                    <option value="lg">lg (Grande · Ícone 26px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Estilo do Ícone (iconStyle)</label>
                  <select class="prop-select" v-model="alertProps.iconStyle">
                    <option value="featured">featured (Ícone em Destaque com Badge Circular)</option>
                    <option value="plain">plain (Ícone sem Badge)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Alinhamento Vertical (align)</label>
                  <select class="prop-select" v-model="alertProps.align">
                    <option value="center">center (Centralizado Verticalmente)</option>
                    <option value="start">start (Alinhado ao Topo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Título</label>
                  <input class="prop-input" type="text" v-model="alertProps.title" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Descrição</label>
                  <input class="prop-input" type="text" v-model="alertProps.description" />
                </div>

                <div style="margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="alertProps.dismissible" />
                    <span>Fechável (dismissible)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: CARDS -->
          <div v-if="activeTab === 'cards'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsCard</h2>
                <div class="panel-subtitle">Container canônico para superfícies e cartões (Doc 05 §10) com variantes raised, flat, outline e sunken.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview">
                  <MsCard
                    :variant="cardProps.variant"
                    :padding="cardProps.padding"
                    :tone="cardProps.tone !== 'default' ? cardProps.tone : undefined"
                    :title="cardProps.title"
                    :description="cardProps.description"
                    :interactive="cardProps.interactive"
                    :hoverable="cardProps.hoverable"
                    :header-divider="cardProps.headerDivider"
                    :footer-divider="cardProps.footerDivider"
                    :orientation="cardProps.orientation"
                    :cover-src="cardProps.coverSrc || undefined"
                    @click="cardClickCount++"
                    style="inline-size: 100%; max-inline-size: 460px;"
                  >
                    <p style="margin: 0; margin-bottom: var(--ms-space-3);">
                      Este componente encapsula seções de conteúdo respeitando a elevação e as cores de superfície do tema ativo.
                    </p>
                    <div style="display: flex; gap: var(--ms-space-2);">
                      <MsBadge variant="soft" tone="success">99.9% Uptime</MsBadge>
                      <MsBadge variant="soft" tone="info">Node 24</MsBadge>
                    </div>

                    <template #footer>
                      <MsButton variant="outline" tone="neutral" size="sm">Detalhes</MsButton>
                      <MsButton variant="solid" tone="primary" size="sm">Explorar</MsButton>
                    </template>
                  </MsCard>
                </div>

                <div class="events-log">
                  <strong>Interações do Card:</strong> Cliques registrados: {{ cardClickCount }}
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsCard</div>

                <div class="prop-row">
                  <label class="prop-label">Tom de Borda Superior (tone)</label>
                  <select class="prop-select" v-model="cardProps.tone">
                    <option value="default">default (Sem destaque)</option>
                    <option value="primary">primary (Azul)</option>
                    <option value="secondary">secondary (Coral)</option>
                    <option value="accent">accent (Roxo)</option>
                    <option value="neutral">neutral (Slate)</option>
                    <option value="success">success (Verde)</option>
                    <option value="info">info (Ciano)</option>
                    <option value="warning">warning (Âmbar)</option>
                    <option value="danger">danger (Vermelho)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="cardProps.variant">
                    <option value="raised">raised (Elevado - Padrão)</option>
                    <option value="flat">flat (Plano)</option>
                    <option value="outline">outline (Apenas Contorno)</option>
                    <option value="sunken">sunken (Rebaixado)</option>
                    <option value="glass">glass (Translúcido / Blur)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Espaçamento Interno (padding)</label>
                  <select class="prop-select" v-model="cardProps.padding">
                    <option value="none">none (Sem padding)</option>
                    <option value="xs">xs (Extra compacto)</option>
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                    <option value="xl">xl (Super espaçoso)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Orientação (orientation)</label>
                  <select class="prop-select" v-model="cardProps.orientation">
                    <option value="vertical">vertical (Vertical - Padrão)</option>
                    <option value="horizontal">horizontal (Horizontal lado a lado)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Imagem de Capa (coverSrc)</label>
                  <input class="prop-input" type="text" placeholder="https://images.unsplash.com/..." v-model="cardProps.coverSrc" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Título</label>
                  <input class="prop-input" type="text" v-model="cardProps.title" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Descrição</label>
                  <input class="prop-input" type="text" v-model="cardProps.description" />
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="cardProps.interactive" />
                    <span>Interativo (interactive)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="cardProps.hoverable" />
                    <span>Elevação ao Passar Cursor (hoverable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="cardProps.headerDivider" />
                    <span>Divisor do Cabeçalho (headerDivider)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="cardProps.footerDivider" />
                    <span>Divisor do Rodapé (footerDivider)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: AVATARS -->
          <div v-if="activeTab === 'avatars'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsAvatar</h2>
                <div class="panel-subtitle">Identidade de usuários e entidades com suporte a imagem, iniciais automáticas, tamanhos e indicador de status.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-4); align-items: center; justify-content: center; min-height: 120px;">
                  <div v-if="avatarProps.showGroup">
                    <MsAvatarGroup :size="avatarProps.size" :max="3" spacing="normal">
                      <MsAvatar name="Ada Lovelace" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" />
                      <MsAvatar name="Grace Hopper" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" />
                      <MsAvatar name="Alan Turing" />
                      <MsAvatar name="Margaret Hamilton" />
                      <MsAvatar name="Linus Torvalds" />
                    </MsAvatarGroup>
                  </div>
                  <div v-else style="display: flex; gap: var(--ms-space-4); align-items: center;">
                    <MsAvatar
                      :name="avatarProps.name"
                      :src="avatarProps.showImage ? avatarProps.src : undefined"
                      :size="avatarProps.size"
                      :shape="avatarProps.shape"
                      :tone="avatarProps.tone"
                      :status="avatarProps.status || undefined"
                      :status-placement="avatarProps.statusPlacement"
                      :bordered="avatarProps.bordered"
                    />
                    <div>
                      <div style="font-weight: 600;">{{ avatarProps.name }}</div>
                      <div style="font-size: var(--ms-typography-size-xs); color: var(--ms-color-text-secondary);">
                        Status: {{ avatarProps.status || 'Nenhum' }} | Formato: {{ avatarProps.shape }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Showcase of sizes and shapes -->
                <div class="controls-card">
                  <div class="controls-card-title">Escala de Tamanhos (2xs a 3xl)</div>
                  <div style="display: flex; gap: var(--ms-space-3); align-items: center; flex-wrap: wrap;">
                    <MsAvatar name="Ada Lovelace" size="2xs" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="xs" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="sm" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="md" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="lg" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="xl" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="2xl" :status="avatarProps.status || undefined" />
                    <MsAvatar name="Ada Lovelace" size="3xl" :status="avatarProps.status || undefined" />
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? 'Copiado!' : 'Copiar Código' }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsAvatar</div>

                <div class="prop-row">
                  <label class="prop-label">Nome (iniciais automáticas)</label>
                  <input class="prop-input" type="text" v-model="avatarProps.name" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="avatarProps.size">
                    <option value="2xs">2xs (16px - Micro)</option>
                    <option value="xs">xs (24px)</option>
                    <option value="sm">sm (32px)</option>
                    <option value="md">md (40px - Padrão)</option>
                    <option value="lg">lg (48px)</option>
                    <option value="xl">xl (64px)</option>
                    <option value="2xl">2xl (80px)</option>
                    <option value="3xl">3xl (96px - Mega)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Formato (shape)</label>
                  <select class="prop-select" v-model="avatarProps.shape">
                    <option value="circle">circle (Circular - Padrão)</option>
                    <option value="rounded">rounded (Arredondado)</option>
                    <option value="square">square (Quadrado)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom do Fallback (tone)</label>
                  <select class="prop-select" v-model="avatarProps.tone">
                    <option value="primary">primary</option>
                    <option value="accent">accent</option>
                    <option value="neutral">neutral</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Indicador de Status</label>
                  <select class="prop-select" v-model="avatarProps.status">
                    <option value="">Nenhum</option>
                    <option value="online">online (Verde)</option>
                    <option value="busy">busy (Vermelho)</option>
                    <option value="away">away (Amarelo)</option>
                    <option value="offline">offline (Cinza)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posição do Status (statusPlacement)</label>
                  <select class="prop-select" v-model="avatarProps.statusPlacement">
                    <option value="bottom-right">bottom-right (Inferior Direito - Padrão)</option>
                    <option value="top-right">top-right (Superior Direito)</option>
                    <option value="bottom-left">bottom-left (Inferior Esquerdo)</option>
                    <option value="top-left">top-left (Superior Esquerdo)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="avatarProps.bordered" />
                    <span>Anel de Borda (bordered)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="avatarProps.showGroup" />
                    <span>Exibir Grupo de Avatares (MsAvatarGroup)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="avatarProps.showImage" />
                    <span>Carregar Foto (desmarque para testar fallback)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: TABS -->
          <div v-if="activeTab === 'tabs'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsTabs</h2>
                <div class="panel-subtitle">Navegação estruturada por abas acessíveis WAI-ARIA, suporte a variantes (line, pill, enclosed) e navegação completa por teclado.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: block; width: 100%;">
                  <MsTabs
                    v-model="currentTab"
                    :variant="tabsProps.variant"
                    :size="tabsProps.size"
                    :orientation="tabsProps.orientation"
                    :fitted="tabsProps.fitted"
                    :activation-mode="tabsProps.activationMode"
                  >
                    <MsTabList aria-label="Navegação interativa">
                      <MsTab value="tab1">Visão Geral</MsTab>
                      <MsTab value="tab2">Segurança</MsTab>
                      <MsTab value="tab3">Métricas</MsTab>
                      <MsTab value="tab4" disabled>Faturamento (Bloqueado)</MsTab>
                    </MsTabList>

                    <MsTabPanels>
                      <MsTabPanel value="tab1">
                        <div style="padding: var(--ms-space-4); background: var(--ms-color-surface-sunken, #f1f5f9); border-radius: var(--ms-radius-md);">
                          <strong>Painel 1: Visão Geral</strong>
                          <p style="margin: var(--ms-space-2) 0 0 0; color: var(--ms-color-text-secondary);">Estrutura de componentes montada segundo a Baseline 1.2 do Magic-Style.</p>
                        </div>
                      </MsTabPanel>
                      <MsTabPanel value="tab2">
                        <div style="padding: var(--ms-space-4); background: var(--ms-color-surface-sunken, #f1f5f9); border-radius: var(--ms-radius-md);">
                          <strong>Painel 2: Configurações de Segurança</strong>
                          <p style="margin: var(--ms-space-2) 0 0 0; color: var(--ms-color-text-secondary);">Chaves de autenticação, permissões e tokens de acesso.</p>
                        </div>
                      </MsTabPanel>
                      <MsTabPanel value="tab3">
                        <div style="padding: var(--ms-space-4); background: var(--ms-color-surface-sunken, #f1f5f9); border-radius: var(--ms-radius-md);">
                          <strong>Painel 3: Métricas em Tempo Real</strong>
                          <p style="margin: var(--ms-space-2) 0 0 0; color: var(--ms-color-text-secondary);">Health gate de qualidade, testes unitários e tempos de resposta do monorepo.</p>
                        </div>
                      </MsTabPanel>
                    </MsTabPanels>
                  </MsTabs>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Variantes Visuais Canônicas</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-4);">
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Variante: Line (Padrão)</div>
                      <MsTabs default-value="l1" variant="line">
                        <MsTabList>
                          <MsTab value="l1">Painel A</MsTab>
                          <MsTab value="l2">Painel B</MsTab>
                        </MsTabList>
                      </MsTabs>
                    </div>

                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Variante: Pill (Cápsula)</div>
                      <MsTabs default-value="p1" variant="pill">
                        <MsTabList>
                          <MsTab value="p1">Visualização</MsTab>
                          <MsTab value="p2">Código</MsTab>
                        </MsTabList>
                      </MsTabs>
                    </div>

                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Variante: Enclosed (Abas Fechadas)</div>
                      <MsTabs default-value="e1" variant="enclosed">
                        <MsTabList>
                          <MsTab value="e1">Geral</MsTab>
                          <MsTab value="e2">Detalhes</MsTab>
                        </MsTabList>
                      </MsTabs>
                    </div>

                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Variante: Solid (Preenchida / Alto Contraste)</div>
                      <MsTabs default-value="s1" variant="solid">
                        <MsTabList>
                          <MsTab value="s1">Dashboard</MsTab>
                          <MsTab value="s2">Relatórios</MsTab>
                          <MsTab value="s3">Configurações</MsTab>
                        </MsTabList>
                      </MsTabs>
                    </div>

                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Carrossel com Setas de Rolagem (Overflow / Telas Pequenas)</div>
                      <div style="max-width: 460px; padding: var(--ms-space-3); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-default);">
                        <MsTabs default-value="t1" variant="solid" :scrollable="true" :show-arrows="true">
                          <MsTabList>
                            <MsTab value="t1">1. Visão Geral</MsTab>
                            <MsTab value="t2">2. Desempenho</MsTab>
                            <MsTab value="t3">3. Arquitetura</MsTab>
                            <MsTab value="t4">4. Tokens DTCG</MsTab>
                            <MsTab value="t5">5. Componentes</MsTab>
                            <MsTab value="t6">6. Acessibilidade</MsTab>
                            <MsTab value="t7">7. Testes Vitest</MsTab>
                            <MsTab value="t8">8. Deploy CI/CD</MsTab>
                          </MsTabList>
                        </MsTabs>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsTabs</div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="tabsProps.variant">
                    <option value="line">line (Linha inferior indicadora)</option>
                    <option value="pill">pill (Cápsula destacada)</option>
                    <option value="enclosed">enclosed (Pasta com bordas)</option>
                    <option value="solid">solid (Preenchida / Segmentada)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="tabsProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Médio - Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Orientação (orientation)</label>
                  <select class="prop-select" v-model="tabsProps.orientation">
                    <option value="horizontal">horizontal</option>
                    <option value="vertical">vertical</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Ativação por Teclado</label>
                  <select class="prop-select" v-model="tabsProps.activationMode">
                    <option value="automatic">automatic (Ativa ao focar)</option>
                    <option value="manual">manual (Exige Enter/Espaço)</option>
                  </select>
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tabsProps.fitted" />
                    <span>Ocupar Largura Total (fitted)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tabsProps.scrollable" />
                    <span>Rolagem Horizontal Automática (scrollable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tabsProps.showArrows" />
                    <span>Setas de Navegação no Overflow (showArrows)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SPINNERS -->
          <div v-if="activeTab === 'spinners'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsSpinner</h2>
                <div class="panel-subtitle">Indicador visual de atividade e carregamento indeterminado, com velocidades configuráveis, espessuras e escala de 2xs a 2xl.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-6);">
                  <MsSpinner
                    :size="spinnerProps.size"
                    :tone="spinnerProps.tone"
                    :thickness="spinnerProps.thickness"
                    :speed="spinnerProps.speed"
                    :label="spinnerProps.label"
                  />
                  <span style="font-weight: var(--ms-typography-weight-medium); color: var(--ms-color-text-secondary);">
                    {{ spinnerProps.label }}
                  </span>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Escala Completa de Tamanhos (2xs → 2xl)</div>
                  <div style="display: flex; align-items: center; gap: var(--ms-space-5); flex-wrap: wrap;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="2xs" />
                      <span class="ms-micro">2xs (8px)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="xs" />
                      <span class="ms-micro">xs (12px)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="sm" />
                      <span class="ms-micro">sm (16px)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="md" />
                      <span class="ms-micro">md (24px)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="lg" />
                      <span class="ms-micro">lg (32px)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="xl" />
                      <span class="ms-micro">xl (48px)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner size="2xl" />
                      <span class="ms-micro">2xl (64px)</span>
                    </div>
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Velocidades de Giro (speed)</div>
                  <div style="display: flex; align-items: center; gap: var(--ms-space-6); flex-wrap: wrap;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner speed="fast" size="lg" tone="accent" />
                      <span class="ms-micro">fast (0.4s)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner speed="normal" size="lg" tone="primary" />
                      <span class="ms-micro">normal (0.8s)</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: var(--ms-space-2);">
                      <MsSpinner speed="slow" size="lg" tone="neutral" />
                      <span class="ms-micro">slow (1.4s)</span>
                    </div>
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Paleta de Tons Semânticos</div>
                  <div style="display: flex; align-items: center; gap: var(--ms-space-4); flex-wrap: wrap;">
                    <MsSpinner tone="primary" size="md" />
                    <MsSpinner tone="neutral" size="md" />
                    <MsSpinner tone="success" size="md" />
                    <MsSpinner tone="warning" size="md" />
                    <MsSpinner tone="danger" size="md" />
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSpinner</div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="spinnerProps.size">
                    <option value="2xs">2xs (8px - Micro)</option>
                    <option value="xs">xs (12px)</option>
                    <option value="sm">sm (16px)</option>
                    <option value="md">md (24px - Padrão)</option>
                    <option value="lg">lg (32px)</option>
                    <option value="xl">xl (48px)</option>
                    <option value="2xl">2xl (64px - Mega)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Velocidade (speed)</label>
                  <select class="prop-select" v-model="spinnerProps.speed">
                    <option value="fast">fast (0.4s - Rápida)</option>
                    <option value="normal">normal (0.8s - Padrão)</option>
                    <option value="slow">slow (1.4s - Lenta)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="spinnerProps.tone">
                    <option value="primary">primary</option>
                    <option value="neutral">neutral</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                    <option value="current">current (herda currentColor)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Espessura do Traço (thickness)</label>
                  <select class="prop-select" v-model="spinnerProps.thickness">
                    <option value="thin">thin (Fino)</option>
                    <option value="normal">normal (Padrão)</option>
                    <option value="thick">thick (Espesso)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Texto Acessível (label)</label>
                  <input class="prop-input" type="text" v-model="spinnerProps.label" />
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: THEMING -->
          <div v-if="activeTab === 'theming'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsThemeScope & MsProvider</h2>
                <div class="panel-subtitle">Gerenciamento normativo de temas e escopos visuais locais (Doc 07), com herança de dials, modos claro/escuro e densidades.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: block; width: 100%;">
                  <div style="margin-bottom: var(--ms-space-3); font-weight: var(--ms-typography-weight-medium); color: var(--ms-color-text-secondary);">
                    Ambiente Exterior (Tema Base da Aplicação):
                  </div>
                  <div style="display: flex; gap: var(--ms-space-2); margin-bottom: var(--ms-space-4);">
                    <MsBadge tone="neutral">Contexto Global</MsBadge>
                    <MsBadge tone="primary">MagicStyle Root</MsBadge>
                  </div>

                  <!-- Escopo Aninhado -->
                  <MsThemeScope
                    :theme="themeScopeProps.theme"
                    :color-mode="themeScopeProps.colorMode"
                    :density="themeScopeProps.density"
                    :contrast="themeScopeProps.contrast"
                    :radius="themeScopeProps.radius"
                  >
                    <div style="padding: var(--ms-space-6); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); box-shadow: var(--ms-elevation-2);">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ms-space-4);">
                        <div>
                          <h3 style="margin: 0; font-size: var(--ms-typography-size-lg);">Escopo Visual Local (MsThemeScope)</h3>
                          <div style="font-size: var(--ms-typography-size-xs); color: var(--ms-color-text-secondary);">
                            Tema: {{ themeScopeProps.theme }} | Modo: {{ themeScopeProps.colorMode }} | Densidade: {{ themeScopeProps.density }}
                          </div>
                        </div>
                        <MsBadge tone="success" pill dot>Isolado</MsBadge>
                      </div>

                      <p style="color: var(--ms-color-text-secondary); margin-bottom: var(--ms-space-4);">
                        Os componentes dentro deste escopo reagem imediatamente aos atributos data-ms-* injetados sem conflitar com o restante da página.
                      </p>

                      <div style="display: flex; gap: var(--ms-space-3); align-items: center; flex-wrap: wrap;">
                        <MsButton tone="primary">Ação Primária</MsButton>
                        <MsButton variant="outline" tone="neutral">Secundário</MsButton>
                        <MsSpinner size="sm" tone="primary" />
                        <MsBadge tone="warning">Aviso Escopado</MsBadge>
                      </div>
                    </div>
                  </MsThemeScope>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Dials do Escopo Aninhado</div>

                <div class="prop-row">
                  <label class="prop-label">Tema Visual (theme)</label>
                  <select class="prop-select" v-model="themeScopeProps.theme">
                    <option value="magic">magic (Azul técnico - Padrão)</option>
                    <option value="graphite">graphite (Neutro denso)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Modo de Cor (color-mode)</label>
                  <select class="prop-select" v-model="themeScopeProps.colorMode">
                    <option value="light">light (Claro)</option>
                    <option value="dark">dark (Escuro)</option>
                    <option value="system">system (Automático)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Densidade Espacial (density)</label>
                  <select class="prop-select" v-model="themeScopeProps.density">
                    <option value="compact">compact (0.875x)</option>
                    <option value="comfortable">comfortable (1x - Padrão)</option>
                    <option value="spacious">spacious (1.125x)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Nível de Contraste (contrast)</label>
                  <select class="prop-select" v-model="themeScopeProps.contrast">
                    <option value="normal">normal</option>
                    <option value="high">high (Alto contraste)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Curvatura de Cantos (radius)</label>
                  <select class="prop-select" v-model="themeScopeProps.radius">
                    <option value="sharp">sharp (2px)</option>
                    <option value="subtle">subtle (4px)</option>
                    <option value="medium">medium (6px - Padrão)</option>
                    <option value="rounded">rounded (8px)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: PROGRESS -->
          <div v-if="activeTab === 'progress'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsProgress</h2>
                <div class="panel-subtitle">Barra de progresso acessível para processos determinados e contínuos, com suporte a tons semânticos, listras animadas e escala dimensional.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: block; width: 100%;">
                  <MsProgress
                    :model-value="progressProps.indeterminate ? undefined : progressProps.modelValue"
                    :min="progressProps.min"
                    :max="progressProps.max"
                    :size="progressProps.size"
                    :tone="progressProps.tone"
                    :shape="progressProps.shape"
                    :gradient="progressProps.gradient"
                    :inline-value="progressProps.inlineValue"
                    :indeterminate="progressProps.indeterminate"
                    :striped="progressProps.striped"
                    :animated="progressProps.animated"
                    :show-value="progressProps.showValue"
                    :label="progressProps.label"
                  />
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Paleta de Tons Semânticos</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-3);">
                    <MsProgress :model-value="75" tone="primary" label="Primary (Ação)" show-value />
                    <MsProgress :model-value="60" tone="accent" label="Accent (Destaque)" show-value />
                    <MsProgress :model-value="90" tone="success" label="Success (Concluído)" show-value />
                    <MsProgress :model-value="45" tone="warning" label="Warning (Atenção)" show-value />
                    <MsProgress :model-value="25" tone="danger" label="Danger (Crítico)" show-value />
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Escala de Espessuras (2xs → 2xl) e Formatos</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-3);">
                    <MsProgress :model-value="60" size="2xs" label="2xs (2px Micro)" />
                    <MsProgress :model-value="60" size="xs" label="xs (4px)" show-value />
                    <MsProgress :model-value="60" size="sm" label="sm (6px)" show-value />
                    <MsProgress :model-value="60" size="md" label="md (8px - Padrão)" show-value />
                    <MsProgress :model-value="60" size="lg" label="lg (12px)" show-value />
                    <MsProgress :model-value="60" size="xl" label="xl (16px)" show-value />
                    <MsProgress :model-value="75" size="2xl" label="2xl (24px com Inline Value)" inline-value show-value gradient />
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsProgress</div>

                <div class="prop-row" v-if="!progressProps.indeterminate">
                  <label class="prop-label">Valor do Progresso: {{ progressProps.modelValue }}%</label>
                  <input class="prop-input" type="range" min="0" max="100" v-model.number="progressProps.modelValue" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="progressProps.size">
                    <option value="2xs">2xs (2px Micro)</option>
                    <option value="xs">xs (4px)</option>
                    <option value="sm">sm (6px)</option>
                    <option value="md">md (8px - Padrão)</option>
                    <option value="lg">lg (12px)</option>
                    <option value="xl">xl (16px)</option>
                    <option value="2xl">2xl (24px Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Formato (shape)</label>
                  <select class="prop-select" v-model="progressProps.shape">
                    <option value="pill">pill (Pílula - Padrão)</option>
                    <option value="rounded">rounded (Arredondado)</option>
                    <option value="square">square (Retangular 90°)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="progressProps.tone">
                    <option value="primary">primary</option>
                    <option value="accent">accent</option>
                    <option value="neutral">neutral</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Texto do Rótulo (label)</label>
                  <input class="prop-input" type="text" v-model="progressProps.label" />
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-3);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="progressProps.indeterminate" />
                    <span>Modo Indeterminado (Carregamento contínuo)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="progressProps.showValue" />
                    <span>Exibir Percentual Numérico</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="progressProps.gradient" />
                    <span>Gradiente Estilizado (gradient)</span>
                  </label>
                  <label class="prop-checkbox" v-if="!progressProps.indeterminate && ['md', 'lg', 'xl', '2xl'].includes(progressProps.size)">
                    <input type="checkbox" v-model="progressProps.inlineValue" />
                    <span>Texto de Valor Interno (inlineValue)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="progressProps.striped" />
                    <span>Padrão Listrado (Striped)</span>
                  </label>
                  <label class="prop-checkbox" v-if="progressProps.striped">
                    <input type="checkbox" v-model="progressProps.animated" />
                    <span>Animar Listras</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SKELETONS -->
          <div v-if="activeTab === 'skeletons'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsSkeleton</h2>
                <div class="panel-subtitle">Placeholders provisórios acessíveis para mitigar a percepção de espera com animações fluidas em shimmer ou pulso.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: block; width: 100%;">
                  <MsSkeleton
                    :variant="skeletonProps.variant"
                    :animation="skeletonProps.animation"
                    :tone="skeletonProps.tone"
                    :speed="skeletonProps.speed"
                    :width="skeletonProps.width"
                    :height="skeletonProps.height"
                    :count="skeletonProps.count"
                  />
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Composição de Exemplo (Card de Perfil Carregando)</div>
                  <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-default);">
                    <div style="display: flex; gap: var(--ms-space-4); align-items: center; margin-bottom: var(--ms-space-4);">
                      <MsSkeleton variant="avatar" />
                      <div style="flex: 1;">
                        <MsSkeleton variant="text" width="60%" />
                        <MsSkeleton variant="text" width="40%" />
                      </div>
                    </div>
                    <MsSkeleton variant="rect" height="100px" style="margin-bottom: var(--ms-space-3);" />
                    <MsSkeleton variant="text" :count="3" />
                    <div style="display: flex; gap: var(--ms-space-3); margin-top: var(--ms-space-4);">
                      <MsSkeleton variant="button" />
                      <MsSkeleton variant="button" width="80px" />
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSkeleton</div>

                <div class="prop-row">
                  <label class="prop-label">Formato Geométrico (variant)</label>
                  <select class="prop-select" v-model="skeletonProps.variant">
                    <option value="text">text (Linha de texto)</option>
                    <option value="circle">circle (Círculo 40px)</option>
                    <option value="avatar">avatar (Avatar 48px)</option>
                    <option value="button">button (Preset Botão)</option>
                    <option value="card">card (Preset Cartão)</option>
                    <option value="rect">rect (Retângulo Customizável)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Efeito de Animação (animation)</label>
                  <select class="prop-select" v-model="skeletonProps.animation">
                    <option value="shimmer">shimmer (Onda de brilho - Padrão)</option>
                    <option value="pulse">pulse (Pulso de opacidade)</option>
                    <option value="none">none (Estático)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom de Contraste (tone)</label>
                  <select class="prop-select" v-model="skeletonProps.tone">
                    <option value="default">default (Cinza Neutro 200 - Nítido)</option>
                    <option value="subtle">subtle (Suave / Afundado)</option>
                    <option value="contrast">contrast (Alto Contraste)</option>
                    <option value="primary">primary (Tint Azul Primário)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Velocidade da Animação (speed)</label>
                  <select class="prop-select" v-model="skeletonProps.speed">
                    <option value="fast">fast (1.0s - Rápida)</option>
                    <option value="normal">normal (1.6s - Padrão)</option>
                    <option value="slow">slow (2.4s - Suave)</option>
                  </select>
                </div>

                <div class="prop-row" v-if="skeletonProps.variant === 'rect' || skeletonProps.variant === 'circle'">
                  <label class="prop-label">Largura (width)</label>
                  <input class="prop-input" type="text" v-model="skeletonProps.width" />
                </div>

                <div class="prop-row" v-if="skeletonProps.variant === 'rect' || skeletonProps.variant === 'circle'">
                  <label class="prop-label">Altura (height)</label>
                  <input class="prop-input" type="text" v-model="skeletonProps.height" />
                </div>

                <div class="prop-row" v-if="skeletonProps.variant === 'text'">
                  <label class="prop-label">Quantidade de Linhas (count)</label>
                  <select class="prop-select" v-model.number="skeletonProps.count">
                    <option :value="1">1 linha</option>
                    <option :value="2">2 linhas</option>
                    <option :value="3">3 linhas</option>
                    <option :value="4">4 linhas</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: TOOLTIPS -->
          <div v-if="activeTab === 'tooltips'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsTooltip</h2>
                <div class="panel-subtitle">Dicas contextuais flutuantes acessíveis acionadas por hover e foco, com tons claro/escuro/primário, tamanhos, setas e limite de largura.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-6); min-height: 140px;">
                  <MsTooltip
                    :content="tooltipProps.content"
                    :placement="tooltipProps.placement"
                    :tone="tooltipProps.tone"
                    :size="tooltipProps.size"
                    :arrow="tooltipProps.arrow"
                    :max-width="tooltipProps.maxWidth || undefined"
                    :show-delay="tooltipProps.showDelay"
                    :hide-delay="tooltipProps.hideDelay"
                    :disabled="tooltipProps.disabled"
                  >
                    <MsButton variant="solid" tone="primary">
                      Passe o cursor aqui ou foque via teclado
                    </MsButton>
                  </MsTooltip>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Tons Semânticos e Estilos Visuais</div>
                  <div style="display: flex; gap: var(--ms-space-4); justify-content: center; align-items: center; flex-wrap: wrap; padding: var(--ms-space-4) 0;">
                    <MsTooltip content="Dica em Tom Dark (Padrão)" tone="dark">
                      <MsButton variant="outline" tone="neutral">Tom Dark</MsButton>
                    </MsTooltip>
                    <MsTooltip content="Dica em Tom Light (Contraste Invertido)" tone="light">
                      <MsButton variant="outline" tone="neutral">Tom Light</MsButton>
                    </MsTooltip>
                    <MsTooltip content="Dica em Tom Primary (Identidade Magic)" tone="primary">
                      <MsButton variant="outline" tone="primary">Tom Primary</MsButton>
                    </MsTooltip>
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Posicionamentos Direcionais (Placements)</div>
                  <div style="display: flex; gap: var(--ms-space-4); justify-content: center; align-items: center; flex-wrap: wrap; padding: var(--ms-space-4) 0;">
                    <MsTooltip content="Dica Superior" placement="top">
                      <MsButton variant="outline" tone="neutral">Top</MsButton>
                    </MsTooltip>
                    <MsTooltip content="Dica Inferior" placement="bottom">
                      <MsButton variant="outline" tone="neutral">Bottom</MsButton>
                    </MsTooltip>
                    <MsTooltip content="Dica à Esquerda" placement="left">
                      <MsButton variant="outline" tone="neutral">Left</MsButton>
                    </MsTooltip>
                    <MsTooltip content="Dica à Direita" placement="right">
                      <MsButton variant="outline" tone="neutral">Right</MsButton>
                    </MsTooltip>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsTooltip</div>

                <div class="prop-row">
                  <label class="prop-label">Conteúdo da Dica (content)</label>
                  <input class="prop-input" type="text" v-model="tooltipProps.content" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="tooltipProps.tone">
                    <option value="dark">dark (Escuro - Padrão)</option>
                    <option value="light">light (Claro com sombra)</option>
                    <option value="primary">primary (Azul da marca)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Escala de Tamanho (size)</label>
                  <select class="prop-select" v-model="tooltipProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posicionamento (placement)</label>
                  <select class="prop-select" v-model="tooltipProps.placement">
                    <option value="top">top (Superior - Padrão)</option>
                    <option value="bottom">bottom (Inferior)</option>
                    <option value="left">left (Esquerda)</option>
                    <option value="right">right (Direita)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Largura Máxima (maxWidth)</label>
                  <input class="prop-input" type="text" v-model="tooltipProps.maxWidth" placeholder="ex: 200px" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Atraso para Exibir (ms)</label>
                  <input class="prop-input" type="number" step="50" v-model.number="tooltipProps.showDelay" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Atraso para Ocultar (ms)</label>
                  <input class="prop-input" type="number" step="50" v-model.number="tooltipProps.hideDelay" />
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tooltipProps.arrow" />
                    <span>Exibir Seta Direcional (arrow)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tooltipProps.disabled" />
                    <span>Desabilitar Tooltip</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: BREADCRUMBS -->
          <div v-if="activeTab === 'breadcrumbs'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsBreadcrumbs</h2>
                <div class="panel-subtitle">Navegação estrutural por trilhas hierárquicas, seguindo o padrão WAI-ARIA breadcrumb com separadores customizáveis.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: block; width: 100%;">
                  <MsBreadcrumbs
                    :variant="breadcrumbsProps.variant"
                    :size="breadcrumbsProps.size"
                    :separator-type="breadcrumbsProps.separatorType"
                    :separator="breadcrumbsProps.separator"
                    :items="breadcrumbsItems"
                    :max-items="breadcrumbsProps.maxItems"
                  />
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Variantes e Estilos de Trilha</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-4);">
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Variante: Pills (Cápsulas com Ícones)</div>
                      <MsBreadcrumbs variant="pills" :items="breadcrumbsItems" separator-type="chevron" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Variante: Solid (Container Card)</div>
                      <MsBreadcrumbs variant="solid" :items="breadcrumbsItems" separator-type="slash" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-2);">Colapso Automático com Reticências (maxItems: 4)</div>
                      <MsBreadcrumbs :items="breadcrumbsItems" :max-items="4" separator-type="arrow" />
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsBreadcrumbs</div>

                <div class="prop-row">
                  <label class="prop-label">Variante Visual (variant)</label>
                  <select class="prop-select" v-model="breadcrumbsProps.variant">
                    <option value="plain">plain (Links limpos em linha)</option>
                    <option value="pills">pills (Cápsulas destacadas)</option>
                    <option value="solid">solid (Card enclausurado)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="breadcrumbsProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Médio - Padrão)</option>
                    <option value="lg">lg (Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tipo de Separador (separatorType)</label>
                  <select class="prop-select" v-model="breadcrumbsProps.separatorType">
                    <option value="chevron">chevron (›)</option>
                    <option value="slash">slash (/)</option>
                    <option value="arrow">arrow (→)</option>
                    <option value="dot">dot (•)</option>
                    <option value="custom">custom (Personalizado)</option>
                  </select>
                </div>

                <div class="prop-row" v-if="breadcrumbsProps.separatorType === 'custom'">
                  <label class="prop-label">Caractere Separador (separator)</label>
                  <input class="prop-input" type="text" v-model="breadcrumbsProps.separator" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Limite de Itens Visíveis (maxItems)</label>
                  <select class="prop-select" v-model.number="breadcrumbsProps.maxItems">
                    <option :value="0">Sem colapso (Mostrar todos)</option>
                    <option :value="3">3 itens (Colapsa intermediários)</option>
                    <option :value="4">4 itens</option>
                    <option :value="5">5 itens</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: TAGS -->
          <div v-if="activeTab === 'tags'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsTag</h2>
                <div class="panel-subtitle">Etiquetas compactas para categorização, metadados e filtragem de conteúdo com variantes visuais e suporte a remoção.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-4);">
                  <MsTag
                    v-if="tagProps.visible"
                    :variant="tagProps.variant"
                    :tone="tagProps.tone"
                    :size="tagProps.size"
                    :shape="tagProps.shape"
                    :dot="tagProps.dot"
                    :closable="tagProps.closable"
                    @close="tagProps.visible = false"
                  >
                    {{ tagProps.label }}
                  </MsTag>
                  <MsButton
                    v-else
                    variant="outline"
                    size="sm"
                    @click="resetTag"
                  >
                    Restaurar Tag
                  </MsButton>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Variantes Semânticas (soft / solid / outline)</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-3);">
                    <div style="display: flex; gap: var(--ms-space-2); flex-wrap: wrap;">
                      <MsTag variant="soft" tone="neutral">Neutral Soft</MsTag>
                      <MsTag variant="soft" tone="primary">Primary Soft</MsTag>
                      <MsTag variant="soft" tone="success">Success Soft</MsTag>
                      <MsTag variant="soft" tone="warning">Warning Soft</MsTag>
                      <MsTag variant="soft" tone="danger">Danger Soft</MsTag>
                      <MsTag variant="soft" tone="info">Info Soft</MsTag>
                      <MsTag variant="soft" tone="accent">Accent Soft</MsTag>
                    </div>
                    <div style="display: flex; gap: var(--ms-space-2); flex-wrap: wrap;">
                      <MsTag variant="solid" tone="neutral">Neutral Solid</MsTag>
                      <MsTag variant="solid" tone="primary">Primary Solid</MsTag>
                      <MsTag variant="solid" tone="success">Success Solid</MsTag>
                      <MsTag variant="solid" tone="warning">Warning Solid</MsTag>
                      <MsTag variant="solid" tone="danger">Danger Solid</MsTag>
                      <MsTag variant="solid" tone="info">Info Solid</MsTag>
                      <MsTag variant="solid" tone="accent">Accent Solid</MsTag>
                    </div>
                    <div style="display: flex; gap: var(--ms-space-2); flex-wrap: wrap;">
                      <MsTag variant="outline" tone="neutral">Neutral Outline</MsTag>
                      <MsTag variant="outline" tone="primary">Primary Outline</MsTag>
                      <MsTag variant="outline" tone="success">Success Outline</MsTag>
                      <MsTag variant="outline" tone="warning">Warning Outline</MsTag>
                      <MsTag variant="outline" tone="danger">Danger Outline</MsTag>
                      <MsTag variant="outline" tone="info">Info Outline</MsTag>
                      <MsTag variant="outline" tone="accent">Accent Outline</MsTag>
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsTag</div>

                <div class="prop-row">
                  <label class="prop-label">Texto da Etiqueta (label)</label>
                  <input class="prop-input" type="text" v-model="tagProps.label" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante Visual (variant)</label>
                  <select class="prop-select" v-model="tagProps.variant">
                    <option value="soft">soft (Suave com fundo translúcido)</option>
                    <option value="solid">solid (Preenchimento sólido vibrante)</option>
                    <option value="outline">outline (Borda sutil)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="tagProps.tone">
                    <option value="neutral">neutral</option>
                    <option value="primary">primary</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                    <option value="info">info</option>
                    <option value="accent">accent</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Formato (shape)</label>
                  <select class="prop-select" v-model="tagProps.shape">
                    <option value="rounded">rounded (Arredondado - Padrão)</option>
                    <option value="pill">pill (Pílula)</option>
                    <option value="square">square (Quadrado 90°)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Escala / Tamanho (size)</label>
                  <select class="prop-select" v-model="tagProps.size">
                    <option value="sm">sm (Pequeno)</option>
                    <option value="md">md (Médio - Padrão)</option>
                    <option value="lg">lg (Grande)</option>
                  </select>
                </div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2); margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tagProps.dot" />
                    <span>Indicador Ponto (dot)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tagProps.closable" />
                    <span>Habilitar Botão de Fechar (closable)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: EMPTY STATES -->
          <div v-if="activeTab === 'empty-states'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsEmptyState</h2>
                <div class="panel-subtitle">Painel de feedback acolhedor para ausência de registros, resultados de busca vazios ou fluxos em branco.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: block; width: 100%;">
                  <MsEmptyState
                    :size="emptyStateProps.size"
                    :variant="emptyStateProps.variant"
                    :icon-tone="emptyStateProps.iconTone"
                    :title="emptyStateProps.title"
                    :description="emptyStateProps.description"
                  >
                    <template #actions v-if="emptyStateProps.showActions">
                      <MsButton variant="solid" tone="primary">Novo Item</MsButton>
                      <MsButton variant="outline" tone="neutral">Recarregar</MsButton>
                    </template>
                  </MsEmptyState>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Variantes de Estilo e Ícones Temáticos</div>
                  <div style="display: flex; gap: var(--ms-space-4); flex-direction: column;">
                    <MsEmptyState variant="plain" size="sm" icon-tone="primary" title="Nenhuma notificação" description="Você leu todas as mensagens pendentes." />
                    <MsEmptyState variant="card" size="sm" icon-tone="warning" title="Aguardando Aprovação" description="Existem itens pendentes no fluxo de liberação." />
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsEmptyState</div>

                <div class="prop-row">
                  <label class="prop-label">Título Principal (title)</label>
                  <input class="prop-input" type="text" v-model="emptyStateProps.title" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Descrição (description)</label>
                  <textarea class="prop-textarea" rows="3" v-model="emptyStateProps.description"></textarea>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante de Estilo (variant)</label>
                  <select class="prop-select" v-model="emptyStateProps.variant">
                    <option value="dashed">dashed (Borda tracejada - Padrão)</option>
                    <option value="plain">plain (Sem borda / Minimalista)</option>
                    <option value="card">card (Cartão fechado com superfície)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom do Ícone (iconTone)</label>
                  <select class="prop-select" v-model="emptyStateProps.iconTone">
                    <option value="neutral">neutral (Neutro - Padrão)</option>
                    <option value="primary">primary (Ação)</option>
                    <option value="success">success (Sucesso)</option>
                    <option value="warning">warning (Atenção)</option>
                    <option value="danger">danger (Erro/Perigo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho do Container (size)</label>
                  <select class="prop-select" v-model="emptyStateProps.size">
                    <option value="sm">sm (Compacto)</option>
                    <option value="md">md (Médio - Padrão)</option>
                    <option value="lg">lg (Expandido)</option>
                  </select>
                </div>

                <div style="margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="emptyStateProps.showActions" />
                    <span>Exibir Ações de Exemplo</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: ICON BUTTONS -->
          <div v-if="activeTab === 'icon-buttons'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsIconButton</h2>
                <div class="panel-subtitle">Botão compacto exclusivo para ícones com acessibilidade nativa via aria-label obrigatório, estados de loading e formas circulares/quadradas.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-4);">
                  <MsIconButton
                    :aria-label="iconButtonProps.ariaLabel"
                    :variant="iconButtonProps.variant"
                    :tone="iconButtonProps.tone"
                    :size="iconButtonProps.size"
                    :shape="iconButtonProps.shape"
                    :active="iconButtonProps.active"
                    :loading="iconButtonProps.loading"
                    :disabled="iconButtonProps.disabled"
                    @click="onIconButtonClick"
                  >
                    <span>⚙️</span>
                  </MsIconButton>
                  <span style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">
                    Cliques: <strong>{{ iconButtonClickCount }}</strong> | Ativo: <strong>{{ iconButtonProps.active }}</strong>
                  </span>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Variantes e Tons de Ação</div>
                  <div style="display: flex; gap: var(--ms-space-3); flex-wrap: wrap; align-items: center;">
                    <MsIconButton aria-label="Favoritar" variant="solid" tone="primary" :active="true">⭐</MsIconButton>
                    <MsIconButton aria-label="Salvar" variant="solid" tone="success">💾</MsIconButton>
                    <MsIconButton aria-label="Excluir" variant="solid" tone="danger" shape="square">🗑️</MsIconButton>
                    <MsIconButton aria-label="Editar" variant="soft" tone="primary">✏️</MsIconButton>
                    <MsIconButton aria-label="Copiar" variant="outline" tone="neutral" size="2xs">📋</MsIconButton>
                    <MsIconButton aria-label="Fechar" variant="ghost" tone="neutral" shape="circle">✕</MsIconButton>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsIconButton</div>

                <div class="prop-row">
                  <label class="prop-label">Rótulo Acessível (aria-label)</label>
                  <input class="prop-input" type="text" v-model="iconButtonProps.ariaLabel" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="iconButtonProps.variant">
                    <option value="solid">solid</option>
                    <option value="soft">soft</option>
                    <option value="outline">outline</option>
                    <option value="ghost">ghost</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="iconButtonProps.tone">
                    <option value="primary">primary</option>
                    <option value="neutral">neutral</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="iconButtonProps.size">
                    <option value="2xs">2xs (20px Micro)</option>
                    <option value="xs">xs (24px)</option>
                    <option value="sm">sm (32px)</option>
                    <option value="md">md (40px)</option>
                    <option value="lg">lg (48px)</option>
                    <option value="xl">xl (56px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Formato (shape)</label>
                  <select class="prop-select" v-model="iconButtonProps.shape">
                    <option value="rounded">rounded (Arredondado - Padrão)</option>
                    <option value="circle">circle (Circular 360°)</option>
                    <option value="square">square (Quadrado 90°)</option>
                  </select>
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="iconButtonProps.active" />
                    <span>Estado Ativo/Pressionado (active / aria-pressed)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="iconButtonProps.loading" />
                    <span>Estado de Carregamento (loading)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="iconButtonProps.disabled" />
                    <span>Desabilitado</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SEPARATORS -->
          <div v-if="activeTab === 'separators'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsSeparator</h2>
                <div class="panel-subtitle">Divisor visual ou semântico acessível com orientações horizontal e vertical e variantes sutis, fortes ou tracejadas.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="display: flex; flex-direction: column; gap: var(--ms-space-4); width: 100%;">
                  <div>Seção Superior de Conteúdo</div>
                  <MsSeparator
                    :orientation="separatorProps.orientation"
                    :variant="separatorProps.variant"
                    :tone="separatorProps.tone"
                    :thickness="separatorProps.thickness"
                    :spacing="separatorProps.spacing"
                    :label="separatorProps.label"
                    :align="separatorProps.align"
                    :decorative="separatorProps.decorative"
                  />
                  <div>Seção Inferior de Conteúdo</div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Variedade de Estilos e Separadores com Rótulo</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-4);">
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Divisor com Rótulo Central ("OU")</div>
                      <MsSeparator label="OU" tone="primary" align="center" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Tracejado Suave com Tom Accent</div>
                      <MsSeparator variant="dashed" tone="accent" :thickness="2" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Pontilhado (Dotted) Danger</div>
                      <MsSeparator variant="dotted" tone="danger" :thickness="2" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Gradiente Suave Desvanecente</div>
                      <MsSeparator variant="gradient" tone="primary" :thickness="2" />
                    </div>
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Separador Vertical em Barra de Ferramentas</div>
                  <div style="display: flex; align-items: center; gap: var(--ms-space-3); height: 40px; padding: 0 var(--ms-space-3); background: var(--ms-color-surface-sunken); border-radius: var(--ms-radius-md);">
                    <button style="border: none; background: transparent; cursor: pointer;">✏️ Editar</button>
                    <button style="border: none; background: transparent; cursor: pointer;">📋 Copiar</button>
                    <MsSeparator orientation="vertical" :thickness="2" tone="strong" />
                    <button style="border: none; background: transparent; cursor: pointer;">🗑️ Excluir</button>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSeparator</div>

                <div class="prop-row">
                  <label class="prop-label">Orientação (orientation)</label>
                  <select class="prop-select" v-model="separatorProps.orientation">
                    <option value="horizontal">horizontal (Linha horizontal)</option>
                    <option value="vertical">vertical (Linha vertical)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Estilo Visual (variant)</label>
                  <select class="prop-select" v-model="separatorProps.variant">
                    <option value="default">default (Linha contínua)</option>
                    <option value="subtle">subtle (Extra suave)</option>
                    <option value="strong">strong (Contraste forte)</option>
                    <option value="dashed">dashed (Tracejado)</option>
                    <option value="dotted">dotted (Pontilhado)</option>
                    <option value="gradient">gradient (Gradiente suave)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom de Cor (tone)</label>
                  <select class="prop-select" v-model="separatorProps.tone">
                    <option value="neutral">neutral (Borda neutra)</option>
                    <option value="muted">muted (Transparente suave)</option>
                    <option value="strong">strong (Contraste escuro)</option>
                    <option value="primary">primary (Azul Primário)</option>
                    <option value="accent">accent (Índigo Marca)</option>
                    <option value="success">success (Verde)</option>
                    <option value="warning">warning (Laranja)</option>
                    <option value="danger">danger (Vermelho)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Espessura da Linha (thickness)</label>
                  <select class="prop-select" v-model.number="separatorProps.thickness">
                    <option :value="1">1px (Hairline padrão)</option>
                    <option :value="2">2px (Médio)</option>
                    <option :value="4">4px (Grosso)</option>
                  </select>
                </div>

                <div class="prop-row" v-if="separatorProps.orientation === 'horizontal'">
                  <label class="prop-label">Texto do Rótulo (label)</label>
                  <input class="prop-input" type="text" v-model="separatorProps.label" placeholder="ex: OU" />
                </div>

                <div class="prop-row" v-if="separatorProps.orientation === 'horizontal' && separatorProps.label">
                  <label class="prop-label">Alinhamento do Rótulo (align)</label>
                  <select class="prop-select" v-model="separatorProps.align">
                    <option value="center">center (Centralizado)</option>
                    <option value="start">start (Início / Esquerda)</option>
                    <option value="end">end (Final / Direita)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Espaçamento de Margem (spacing)</label>
                  <select class="prop-select" v-model="separatorProps.spacing">
                    <option value="none">none (Sem margem)</option>
                    <option value="sm">sm (8px)</option>
                    <option value="md">md (16px)</option>
                    <option value="lg">lg (24px)</option>
                  </select>
                </div>

                <div style="margin-top: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="separatorProps.decorative" />
                    <span>Apenas Decorativo (aria-hidden)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SEGMENTED CONTROL -->
          <div v-if="activeTab === 'segmented-control'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsSegmentedControl</h2>
                <div class="panel-subtitle">Barra de seleção linear contígua acessível com suporte a navegação por setas de teclado, formatos pill/square/rounded, tons e escala de xs a xl.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-4); flex-direction: column;">
                  <MsSegmentedControl
                    v-model="selectedSegment"
                    :options="segmentedOptions"
                    :size="segmentedProps.size"
                    :shape="segmentedProps.shape"
                    :tone="segmentedProps.tone"
                    :full-width="segmentedProps.fullWidth"
                    :disabled="segmentedProps.disabled"
                  />
                  <div style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">
                    Opção Selecionada: <strong>{{ selectedSegment }}</strong> | Formato: <strong>{{ segmentedProps.shape }}</strong> | Tom: <strong>{{ segmentedProps.tone }}</strong>
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Formatos Geométricos (Shapes)</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-3);">
                    <div>
                      <span class="ms-micro" style="display: block; margin-bottom: var(--ms-space-1);">Formato: Pill (Cápsula 9999px)</span>
                      <MsSegmentedControl :options="segmentedOptions" default-value="month" shape="pill" tone="primary" />
                    </div>
                    <div>
                      <span class="ms-micro" style="display: block; margin-bottom: var(--ms-space-1);">Formato: Rounded (Arredondado Padrão)</span>
                      <MsSegmentedControl :options="segmentedOptions" default-value="week" shape="rounded" tone="accent" />
                    </div>
                    <div>
                      <span class="ms-micro" style="display: block; margin-bottom: var(--ms-space-1);">Formato: Square (Cantos Retos 90°)</span>
                      <MsSegmentedControl :options="segmentedOptions" default-value="day" shape="square" tone="neutral" />
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSegmentedControl</div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="segmentedProps.size">
                    <option value="xs">xs (Micro - 24px)</option>
                    <option value="sm">sm (Pequeno - 32px)</option>
                    <option value="md">md (Médio - 40px)</option>
                    <option value="lg">lg (Grande - 48px)</option>
                    <option value="xl">xl (Extra Grande - 56px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Formato (shape)</label>
                  <select class="prop-select" v-model="segmentedProps.shape">
                    <option value="rounded">rounded (Arredondado - Padrão)</option>
                    <option value="pill">pill (Pílula Total)</option>
                    <option value="square">square (Retangular 90°)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="segmentedProps.tone">
                    <option value="neutral">neutral (Neutro)</option>
                    <option value="primary">primary (Azul Destaque)</option>
                    <option value="accent">accent (Índigo Marca)</option>
                  </select>
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="segmentedProps.fullWidth" />
                    <span>Largura Total (full-width)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="segmentedProps.disabled" />
                    <span>Desabilitar Grupo</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SEARCH FIELDS -->
          <div v-if="activeTab === 'search-fields'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsSearchField</h2>
                <div class="panel-subtitle">Campo de busca otimizado com ícone integrado, botão para limpar termo, spinner de carregamento e submissão por Enter.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="gap: var(--ms-space-4); flex-direction: column; width: 100%;">
                  <MsSearchField
                    v-model="searchQuery"
                    :variant="searchFieldProps.variant"
                    :size="searchFieldProps.size"
                    :placeholder="searchFieldProps.placeholder"
                    :shortcut="searchFieldProps.shortcut"
                    :loading="searchFieldProps.loading"
                    :disabled="searchFieldProps.disabled"
                    :readonly="searchFieldProps.readonly"
                    :clearable="searchFieldProps.clearable"
                    @search="onSearchSubmit"
                  />
                  <div style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">
                    Termo Digitado: <strong>{{ searchQuery || "(vazio)" }}</strong>
                    <span v-if="lastSearchSubmitted" style="margin-left: var(--ms-space-3); color: var(--ms-color-primary-default);">
                      Última busca confirmada: <strong>{{ lastSearchSubmitted }}</strong>
                    </span>
                  </div>
                </div>

                <div class="showcase-card">
                  <div class="showcase-title">Galeria de Variantes de Busca</div>
                  <div style="display: flex; flex-direction: column; gap: var(--ms-space-3);">
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Variante: Outline (Borda Completa)</div>
                      <MsSearchField variant="outline" placeholder="Pesquisa rápida..." shortcut="⌘K" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Variante: Filled (Preenchimento Sutil)</div>
                      <MsSearchField variant="filled" placeholder="Buscar registros na nuvem..." shortcut="Ctrl+F" />
                    </div>
                    <div>
                      <div class="prop-label" style="margin-bottom: var(--ms-space-1);">Variante: Flushed (Apenas Linha Inferior)</div>
                      <MsSearchField variant="flushed" placeholder="Digite para filtrar instantaneamente..." />
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSearchField</div>

                <div class="prop-row">
                  <label class="prop-label">Variante Visual (variant)</label>
                  <select class="prop-select" v-model="searchFieldProps.variant">
                    <option value="outline">outline (Borda completa - Padrão)</option>
                    <option value="filled">filled (Fundo tonal afundado)</option>
                    <option value="flushed">flushed (Linha inferior sem laterais)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Placeholder</label>
                  <input class="prop-input" type="text" v-model="searchFieldProps.placeholder" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Atalho de Teclado (shortcut)</label>
                  <input class="prop-input" type="text" v-model="searchFieldProps.shortcut" placeholder="ex: ⌘K" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho (size)</label>
                  <select class="prop-select" v-model="searchFieldProps.size">
                    <option value="sm">sm (32px)</option>
                    <option value="md">md (40px)</option>
                    <option value="lg">lg (48px)</option>
                  </select>
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="searchFieldProps.loading" />
                    <span>Carregando Busca (loading)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="searchFieldProps.clearable" />
                    <span>Botão de Limpar (clearable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="searchFieldProps.disabled" />
                    <span>Desabilitado</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: APP SHELL -->
          <div v-if="activeTab === 'app-shell'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsAppShell (Application Layout System)</h2>
                <div class="panel-subtitle">Container de arquitetura canônica para aplicações completas (Doc 03 §3, Doc 05 §3) orquestrando Topbar, Sidebar, Rail, Content, Aside, Footer e StatusBar.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="padding: 0; min-height: 480px; overflow: hidden; border-radius: var(--ms-radius-lg); border: 1px solid var(--ms-color-border-subtle); width: 100%;">
                  <MsAppShell :sidebar-collapsed="appShellProps.sidebarCollapsed" :full-height="false" style="min-height: 480px;">
                    <template #topbar v-if="appShellProps.showTopbar">
                      <MsTopbar>
                        <template #leading>
                          <MsIconButton aria-label="Alternar Barra Lateral" variant="ghost" @click="toggleShellSidebar">☰</MsIconButton>
                          <strong style="margin-left: var(--ms-space-2); color: var(--ms-color-primary-default);">MagicStyle OS</strong>
                        </template>
                        <MsSearchField placeholder="Busca global no workspace..." size="sm" style="max-width: 380px;" />
                        <template #trailing>
                          <MsIconButton aria-label="Notificações" variant="ghost" size="sm">🔔</MsIconButton>
                          <MsAvatar name="Dev Admin" size="sm" status="online" />
                        </template>
                      </MsTopbar>
                    </template>

                    <template #rail v-if="appShellProps.showRail">
                      <MsNavigationRail>
                        <MsIconButton aria-label="Início" variant="ghost">🏠</MsIconButton>
                        <MsIconButton aria-label="Dashboard" variant="ghost">📊</MsIconButton>
                        <MsIconButton aria-label="Configurações" variant="ghost">⚙️</MsIconButton>
                      </MsNavigationRail>
                    </template>

                    <template #sidebar v-if="appShellProps.showSidebar">
                      <MsSidebar>
                        <template #header="{ collapsed }">
                          <span v-if="!collapsed" style="font-weight: var(--ms-font-weight-semibold); font-size: var(--ms-font-size-sm);">Workspace Hub</span>
                          <span v-else>📁</span>
                        </template>
                        <div style="display: flex; flex-direction: column; gap: var(--ms-space-1);">
                          <MsButton variant="ghost" tone="neutral" style="justify-content: flex-start;">
                            <template #prefix>📊</template>
                            <span v-if="!appShellProps.sidebarCollapsed">Métricas & Logs</span>
                          </MsButton>
                          <MsButton variant="ghost" tone="neutral" style="justify-content: flex-start;">
                            <template #prefix>🧩</template>
                            <span v-if="!appShellProps.sidebarCollapsed">Componentes</span>
                          </MsButton>
                          <MsButton variant="ghost" tone="neutral" style="justify-content: flex-start;">
                            <template #prefix>🎨</template>
                            <span v-if="!appShellProps.sidebarCollapsed">Temas & Tokens</span>
                          </MsButton>
                        </div>
                        <template #footer="{ collapsed }">
                          <div v-if="!collapsed" style="font-size: var(--ms-font-size-xs); color: var(--ms-color-text-muted);">
                            Baseline 1.2 • Monorepo
                          </div>
                        </template>
                      </MsSidebar>
                    </template>

                    <MsContent padded>
                      <div style="background: var(--ms-color-surface-default); padding: var(--ms-space-6); border-radius: var(--ms-radius-lg); border: 1px solid var(--ms-color-border-subtle); display: flex; flex-direction: column; gap: var(--ms-space-4);">
                        <h3 style="margin: 0;">Área de Trabalho Principal (MsContent)</h3>
                        <p style="margin: 0; color: var(--ms-color-text-muted);">
                          O AppShell gerencia automaticamente o contexto das regiões e responde ao colapso da barra lateral sem re-renderizar a árvore de filhos.
                        </p>
                        <div style="display: flex; gap: var(--ms-space-3);">
                          <MsButton variant="solid" tone="primary" @click="toggleShellSidebar">
                            {{ appShellProps.sidebarCollapsed ? "Expandir Sidebar" : "Recolher Sidebar" }}
                          </MsButton>
                          <MsButton variant="outline" tone="neutral" @click="appShellProps.showAside = !appShellProps.showAside">
                            {{ appShellProps.showAside ? "Ocultar Painel Lateral" : "Exibir Painel Lateral" }}
                          </MsButton>
                        </div>
                      </div>
                    </MsContent>

                    <template #aside v-if="appShellProps.showAside">
                      <MsAside>
                        <div style="padding: var(--ms-space-4);">
                          <h4 style="margin: 0 0 var(--ms-space-2) 0;">Painel Contextual</h4>
                          <p style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">
                            Informações auxiliares ou inspeção de detalhes.
                          </p>
                        </div>
                      </MsAside>
                    </template>

                    <template #footer v-if="appShellProps.showFooter">
                      <MsFooter>
                        <span>© 2026 MagicStyle Design System</span>
                        <span>v1.2 Canonical Architecture</span>
                      </MsFooter>
                    </template>

                    <template #statusbar v-if="appShellProps.showStatusBar">
                      <MsStatusBar :tone="appShellProps.statusBarTone">
                        <span>● Status: Online (Conectado ao Engine)</span>
                        <span>UTF-8 • LF • Strict Node 24</span>
                      </MsStatusBar>
                    </template>
                  </MsAppShell>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsAppShell</div>

                <div style="display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.sidebarCollapsed" />
                    <span>Recolher Barra Lateral (collapsed)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.showTopbar" />
                    <span>Exibir Topbar</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.showSidebar" />
                    <span>Exibir Sidebar</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.showRail" />
                    <span>Exibir Navigation Rail</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.showAside" />
                    <span>Exibir Painel Lateral (Aside)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.showFooter" />
                    <span>Exibir Footer</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="appShellProps.showStatusBar" />
                    <span>Exibir StatusBar</span>
                  </label>
                </div>

                <div class="prop-row" style="margin-top: var(--ms-space-3);" v-if="appShellProps.showStatusBar">
                  <label class="prop-label">Tom da Barra de Status</label>
                  <select class="prop-select" v-model="appShellProps.statusBarTone">
                    <option value="default">default</option>
                    <option value="info">info</option>
                    <option value="success">success</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: PAGES -->
          <div v-if="activeTab === 'pages'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsPage & MsPageHeader</h2>
                <div class="panel-subtitle">Primitivas padronizadas de layout de página com largura máxima controlada, espaçamento harmônico e cabeçalho enriquecido com trilhas e ações.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="background: var(--ms-color-surface-sunken); padding: var(--ms-space-6); width: 100%;">
                  <MsPage :fluid="pageProps.fluid" :compact="pageProps.compact">
                    <MsPageHeader
                      :title="pageProps.title"
                      :description="pageProps.description"
                    >
                      <template #breadcrumbs>
                        <MsBreadcrumbs :items="[{ label: 'Início', href: '#' }, { label: 'Projetos', href: '#' }, { label: 'MagicStyle' }]" />
                      </template>
                      <template #actions>
                        <MsPageActions>
                          <MsButton variant="outline" tone="neutral">Exportar Dados</MsButton>
                          <MsButton variant="solid" tone="primary">Novo Item</MsButton>
                        </MsPageActions>
                      </template>
                    </MsPageHeader>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--ms-space-4);">
                      <MsCard variant="outline">
                        <div style="padding: var(--ms-space-4);">
                          <div style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">Componentes Core</div>
                          <div style="font-size: var(--ms-font-size-2xl); font-weight: bold; margin-top: 4px;">25+</div>
                        </div>
                      </MsCard>
                      <MsCard variant="outline">
                        <div style="padding: var(--ms-space-4);">
                          <div style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">Testes Unitários</div>
                          <div style="font-size: var(--ms-font-size-2xl); font-weight: bold; color: var(--ms-color-success-default); margin-top: 4px;">150+</div>
                        </div>
                      </MsCard>
                      <MsCard variant="outline">
                        <div style="padding: var(--ms-space-4);">
                          <div style="font-size: var(--ms-font-size-sm); color: var(--ms-color-text-muted);">Exportações CSS</div>
                          <div style="font-size: var(--ms-font-size-2xl); font-weight: bold; color: var(--ms-color-primary-default); margin-top: 4px;">37</div>
                        </div>
                      </MsCard>
                    </div>
                  </MsPage>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsPage</div>

                <div class="prop-row">
                  <label class="prop-label">Título da Página (title)</label>
                  <input class="prop-input" type="text" v-model="pageProps.title" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Descrição (description)</label>
                  <textarea class="prop-textarea" rows="2" v-model="pageProps.description"></textarea>
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="pageProps.fluid" />
                    <span>Largura Fluida (fluid - 100%)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="pageProps.compact" />
                    <span>Largura Compacta (compact - 960px)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SELECT -->
          <div v-if="activeTab === 'select'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsSelect (Unified Advanced Select Engine)</h2>
                <div class="panel-subtitle">Engine avançado unificado da Baseline 1.2 com suporte a seleção simples, múltipla com tags, busca com filtro dinâmico, grupos, remoção, loading e modo creatable.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="min-height: 280px; align-items: flex-start; justify-content: flex-start; padding: var(--ms-space-6);">
                  <div style="width: 100%; max-width: 420px; display: flex; flex-direction: column; gap: var(--ms-space-4);">
                    <MsSelect
                      v-if="selectProps.multiple"
                      v-model="multiSelectValue"
                      :size="selectProps.size"
                      :tone="selectProps.tone"
                      :variant="selectProps.variant"
                      :pill="selectProps.pill"
                      :multiple="true"
                      :searchable="selectProps.searchable"
                      :clearable="selectProps.clearable"
                      :loading="selectProps.loading"
                      :creatable="selectProps.creatable"
                      :disabled="selectProps.disabled"
                      :invalid="selectProps.invalid"
                      :placeholder="selectProps.placeholder"
                      :options="selectOptions"
                    />
                    <MsSelect
                      v-else
                      v-model="singleSelectValue"
                      :size="selectProps.size"
                      :tone="selectProps.tone"
                      :variant="selectProps.variant"
                      :pill="selectProps.pill"
                      :multiple="false"
                      :searchable="selectProps.searchable"
                      :clearable="selectProps.clearable"
                      :loading="selectProps.loading"
                      :creatable="selectProps.creatable"
                      :disabled="selectProps.disabled"
                      :invalid="selectProps.invalid"
                      :placeholder="selectProps.placeholder"
                      :options="selectOptions"
                    />

                    <div style="font-size: var(--ms-font-size-body-sm); color: var(--ms-color-text-muted); padding: 8px 12px; background: var(--ms-color-surface-sunken, #f1f5f9); border-radius: var(--ms-radius-sm);">
                      <strong>Valor Selecionado:</strong> {{ selectProps.multiple ? JSON.stringify(multiSelectValue) : JSON.stringify(singleSelectValue) }}
                    </div>
                  </div>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSelect</div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="selectProps.tone">
                    <option value="primary">primary (Azul)</option>
                    <option value="secondary">secondary (Coral)</option>
                    <option value="accent">accent (Roxo)</option>
                    <option value="neutral">neutral (Slate)</option>
                    <option value="success">success (Verde)</option>
                    <option value="info">info (Ciano)</option>
                    <option value="warning">warning (Âmbar)</option>
                    <option value="danger">danger (Vermelho)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante Visual (variant)</label>
                  <select class="prop-select" v-model="selectProps.variant">
                    <option value="outline">outline (Borda completa)</option>
                    <option value="filled">filled (Fundo sutil preenchido)</option>
                    <option value="flushed">flushed (Apenas linha inferior)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Escala de Tamanho (size)</label>
                  <select class="prop-select" v-model="selectProps.size">
                    <option value="xs">xs (28px - Compacto)</option>
                    <option value="sm">sm (32px)</option>
                    <option value="md">md (40px - Padrão)</option>
                    <option value="lg">lg (48px)</option>
                    <option value="xl">xl (56px - Amplo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Placeholder</label>
                  <input class="prop-input" type="text" v-model="selectProps.placeholder" />
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.pill" />
                    <span>Formato Pílula (pill)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.multiple" />
                    <span>Múltipla Seleção (multiple / tags)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.searchable" />
                    <span>Busca Integrada (searchable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.clearable" />
                    <span>Botão de Limpeza (clearable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.loading" />
                    <span>Estado de Carregamento (loading)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.creatable" />
                    <span>Permitir Criar Opções (creatable)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.disabled" />
                    <span>Desabilitado (disabled)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="selectProps.invalid" />
                    <span>Estado Inválido (invalid)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: TABLES -->
          <div v-if="activeTab === 'tables'">
            <div class="panel-header">
              <div>
                <h2 class="panel-title">MsTable (Semantic Data Table)</h2>
                <div class="panel-subtitle">Tabela semântica padronizada com container responsivo com rolagem horizontal, cabeçalhos ordenáveis, linhas clicáveis/selecionadas e 3 densidades.</div>
              </div>
            </div>

            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="padding: var(--ms-space-6); width: 100%;">
                  <MsTable
                    :variant="tableProps.variant"
                    :striped="tableProps.striped"
                    :bordered="tableProps.bordered"
                    :hoverable="tableProps.hoverable"
                    :sticky-header="tableProps.stickyHeader"
                    :density="tableProps.density"
                    :caption="tableProps.caption"
                  >
                    <MsTableHead>
                      <MsTableRow>
                        <MsTableHeaderCell sortable :sort-direction="tableSortDirection" @click="toggleTableSort">
                          Pacote do Monorepo
                        </MsTableHeaderCell>
                        <MsTableHeaderCell>Tipo</MsTableHeaderCell>
                        <MsTableHeaderCell align="right">Testes Unitários</MsTableHeaderCell>
                        <MsTableHeaderCell align="right">Cobertura</MsTableHeaderCell>
                        <MsTableHeaderCell align="center">Status</MsTableHeaderCell>
                      </MsTableRow>
                    </MsTableHead>
                    <MsTableBody>
                      <MsTableRow
                        v-for="row in tableRows"
                        :key="row.id"
                        :selected="row.id === selectedTableRow"
                        clickable
                        @click="selectedTableRow = row.id"
                      >
                        <MsTableCell><strong>{{ row.name }}</strong></MsTableCell>
                        <MsTableCell>{{ row.type }}</MsTableCell>
                        <MsTableCell align="right">{{ row.tests }}</MsTableCell>
                        <MsTableCell align="right">{{ row.coverage }}</MsTableCell>
                        <MsTableCell align="center">
                          <MsBadge tone="success" size="sm">{{ row.status }}</MsBadge>
                        </MsTableCell>
                      </MsTableRow>
                    </MsTableBody>
                    <MsTableFooter>
                      <MsTableRow>
                        <MsTableCell>Total do Monorepo</MsTableCell>
                        <MsTableCell>4 pacotes</MsTableCell>
                        <MsTableCell align="right">174 testes</MsTableCell>
                        <MsTableCell align="right">99.4%</MsTableCell>
                        <MsTableCell align="center">
                          <MsBadge tone="primary" size="sm">100% Verde</MsBadge>
                        </MsTableCell>
                      </MsTableRow>
                    </MsTableFooter>
                  </MsTable>
                </div>

                <div class="code-box">
                  <div class="code-box-header">
                    <span class="code-box-title">Código Vue / Template Gerado</span>
                    <button class="copy-btn" @click="copyCode">
                      {{ copied ? "✓ Copiado!" : "📋 Copiar" }}
                    </button>
                  </div>
                  <pre class="code-content"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsTable</div>

                <div class="prop-row">
                  <label class="prop-label">Variante (variant)</label>
                  <select class="prop-select" v-model="tableProps.variant">
                    <option value="default">default (Padrão)</option>
                    <option value="surface">surface (Superfície elevada com borda)</option>
                    <option value="flush">flush (Sem bordas externas)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Densidade (density)</label>
                  <select class="prop-select" v-model="tableProps.density">
                    <option value="xs">xs (Micro - 11px)</option>
                    <option value="sm">sm (Compacto - 13px)</option>
                    <option value="md">md (Padrão - 14px)</option>
                    <option value="lg">lg (Amplo - 16px)</option>
                    <option value="xl">xl (Confortável - 18px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Legenda (caption)</label>
                  <input class="prop-input" type="text" v-model="tableProps.caption" />
                </div>

                <div style="margin-top: var(--ms-space-2); display: flex; flex-direction: column; gap: var(--ms-space-2);">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tableProps.stickyHeader" />
                    <span>Cabeçalho Fixo (sticky-header)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tableProps.striped" />
                    <span>Listras Alternadas (striped)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tableProps.bordered" />
                    <span>Bordas em Todas as Células (bordered)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="tableProps.hoverable" />
                    <span>Efeito Hover nas Linhas (hoverable)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
          <!-- TAB: NAVBAR PLAYGROUND -->
          <div v-if="activeTab === 'navbar' && subTab === 'preview'">
            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="padding: 32px; width: 100%; box-sizing: border-box;">
                  <div style="width: 100%;">
                    <MsNavbar
                      :position="navbarProps.position"
                      :variant="navbarProps.variant"
                      :tone="navbarProps.tone"
                      :size="navbarProps.size"
                      :floating="navbarProps.floating"
                      :shadow="navbarProps.shadow !== 'none' ? navbarProps.shadow : undefined"
                      :fixed="navbarProps.fixed"
                      :container="navbarProps.container !== 'none' ? navbarProps.container : undefined"
                    >
                      <template #brand>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 28px; height: 28px; border-radius: 6px; background: var(--ms-color-primary, #2e86de); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px;">M</div>
                          <strong style="font-size: 15px;">{{ navbarProps.brandText }}</strong>
                        </div>
                      </template>
                      <div style="display: flex; gap: 20px; font-size: 14px; align-items: center;">
                        <a href="javascript:void(0)" style="color: inherit; text-decoration: none; font-weight: 600;">Painel Geral</a>
                        <a href="javascript:void(0)" style="color: inherit; text-decoration: none; opacity: 0.85;">Operações</a>
                        <a href="javascript:void(0)" style="color: inherit; text-decoration: none; opacity: 0.85;">Relatórios</a>
                        <a href="javascript:void(0)" style="color: inherit; text-decoration: none; opacity: 0.85;">Configurações</a>
                      </div>
                      <template #actions>
                        <MsButton size="sm" variant="solid" tone="primary">Novo Projeto</MsButton>
                      </template>
                    </MsNavbar>
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsNavbar</div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone - 8 Cores da Marca)</label>
                  <select class="prop-select" v-model="navbarProps.tone">
                    <option value="default">default (Superfície Neutra Padrão)</option>
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
                  <select class="prop-select" v-model="navbarProps.variant">
                    <option value="default">default (Padrão com borda inferior sutil)</option>
                    <option value="elevated">elevated (Sombra de elevação card)</option>
                    <option value="bordered">bordered (Contorno de borda nítido)</option>
                    <option value="glass">glass (Efeito vidro com backdrop-filter blur)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Efeito de Sombra (shadow)</label>
                  <select class="prop-select" v-model="navbarProps.shadow">
                    <option value="none">none (Sem sombra projetada)</option>
                    <option value="sm">sm (Sombra sutil inferior)</option>
                    <option value="md">md (Sombra média corporativa)</option>
                    <option value="lg">lg (Sombra pronunciada)</option>
                    <option value="xl">xl (Sombra intensa de portal)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Contêiner Responsivo (container)</label>
                  <select class="prop-select" v-model="navbarProps.container">
                    <option value="none">none (Largura total livre)</option>
                    <option value="sm">sm (640px)</option>
                    <option value="md">md (768px)</option>
                    <option value="lg">lg (1024px)</option>
                    <option value="xl">xl (1280px padrão)</option>
                    <option value="fluid">fluid (Fluido 100% com padding)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tamanho / Altura (size)</label>
                  <select class="prop-select" v-model="navbarProps.size">
                    <option value="sm">sm (Compacto - 48px)</option>
                    <option value="md">md (Padrão - 56px)</option>
                    <option value="lg">lg (Amplo / Portal - 68px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posicionamento (position)</label>
                  <select class="prop-select" v-model="navbarProps.position">
                    <option value="static">static (Rolagem normal com a página)</option>
                    <option value="sticky">sticky (Fixado ao topo durante a rolagem)</option>
                    <option value="fixed">fixed (Fixo em coordenadas absolutas)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Texto da Marca</label>
                  <input class="prop-input" type="text" v-model="navbarProps.brandText" />
                </div>

                <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="navbarProps.floating" />
                    <span>Modo Flutuante (floating)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="navbarProps.fixed" />
                    <span>Posicionamento Fixo (fixed)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SIDEBAR PLAYGROUND -->
          <div v-if="activeTab === 'sidebar' && subTab === 'preview'">
            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="background: var(--ms-color-surface-default); padding: 32px; justify-content: flex-start; min-height: 480px;">
                  <div style="display: flex; height: 380px; width: 100%; border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); overflow: hidden; background: var(--ms-color-surface-raised);">
                    <MsSidebar
                      :collapsed="sidebarProps.collapsed"
                      :side="sidebarProps.side"
                      :position="sidebarProps.position"
                      :width="sidebarProps.width"
                      :variant="sidebarProps.variant"
                      :tone="sidebarProps.tone"
                      :show-toggle="sidebarProps.showToggle"
                      @update:collapsed="sidebarProps.collapsed = $event"
                    >
                      <template #header>
                        <div style="display: flex; align-items: center; gap: 8px; padding: 4px 0;">
                          <div style="width: 24px; height: 24px; border-radius: 4px; background: var(--ms-color-primary, #2e86de); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 11px;">M</div>
                          <strong v-if="!sidebarProps.collapsed" style="font-size: 14px;">Magic Workspace</strong>
                        </div>
                      </template>
                      
                      <div v-if="!sidebarProps.collapsed" style="display: flex; flex-direction: column; gap: 4px; padding: 12px 0;">
                        <a href="javascript:void(0)" style="padding: 8px 12px; border-radius: 6px; background: var(--ms-color-surface-subtle); color: var(--ms-color-primary); font-weight: 600; text-decoration: none; font-size: 13px;">
                          📊 Métricas Gerais
                        </a>
                        <a href="javascript:void(0)" style="padding: 8px 12px; border-radius: 6px; color: inherit; text-decoration: none; font-size: 13px; opacity: 0.85;">
                          📦 Componentes
                        </a>
                        <a href="javascript:void(0)" style="padding: 8px 12px; border-radius: 6px; color: inherit; text-decoration: none; font-size: 13px; opacity: 0.85;">
                          🎨 Design Tokens
                        </a>
                        <a href="javascript:void(0)" style="padding: 8px 12px; border-radius: 6px; color: inherit; text-decoration: none; font-size: 13px; opacity: 0.85;">
                          ⚙️ Ajustes Globais
                        </a>
                      </div>

                      <template #footer>
                        <div v-if="!sidebarProps.collapsed" style="font-size: 12px; color: #64748b;">
                          <span>Versão 1.2 Estável</span>
                        </div>
                      </template>
                    </MsSidebar>

                    <div style="flex: 1; padding: 24px; background: var(--ms-color-surface-subtle); display: flex; flex-direction: column; justify-content: center; align-items: center; color: var(--ms-color-text-secondary);">
                      <p style="font-weight: 600; margin-bottom: 4px;">Área Principal de Conteúdo</p>
                      <p style="font-size: 12px; margin: 0;">O painel lateral expande e recolhe de acordo com as propriedades.</p>
                    </div>
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsSidebar</div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="sidebarProps.tone">
                    <option value="default">default (Superfície Padrão)</option>
                    <option value="neutral">neutral (#222f3e - Dark Ink)</option>
                    <option value="primary">primary (#2e86de - Corporate Blue)</option>
                    <option value="accent">accent (#341f97 - Deep Indigo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Largura (width)</label>
                  <select class="prop-select" v-model="sidebarProps.width">
                    <option value="narrow">narrow (Estreito - 200px)</option>
                    <option value="normal">normal (Padrão - 260px)</option>
                    <option value="wide">wide (Amplo - 320px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante Visual (variant)</label>
                  <select class="prop-select" v-model="sidebarProps.variant">
                    <option value="default">default (Borda lateral sutil)</option>
                    <option value="bordered">bordered (Borda reforçada)</option>
                    <option value="floating">floating (Painel destacado com sombra)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Lado de Encaixe (side)</label>
                  <select class="prop-select" v-model="sidebarProps.side">
                    <option value="left">left (Esquerdo)</option>
                    <option value="right">right (Direito)</option>
                  </select>
                </div>

                <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="sidebarProps.collapsed" />
                    <span>Recolhido (collapsed)</span>
                  </label>
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="sidebarProps.showToggle" />
                    <span>Exibir Botão de Toggle (showToggle)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: FOOTER PLAYGROUND -->
          <div v-if="activeTab === 'footer' && subTab === 'preview'">
            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="padding: 32px; width: 100%; box-sizing: border-box;">
                  <div style="width: 100%;">
                    <MsFooter
                      :layout="footerProps.layout"
                      :variant="footerProps.variant"
                      :tone="footerProps.tone"
                      :copyright="footerProps.copyright"
                      :shadow="footerProps.shadow !== 'none' ? footerProps.shadow : undefined"
                      :position="footerProps.position"
                      :fixed="footerProps.fixed"
                      :container="footerProps.container !== 'none' ? footerProps.container : undefined"
                      :columns="footerProps.layout === 'multi-column' ? [
                        { title: 'Produto', links: [{ label: 'Design Tokens', href: '#' }, { label: 'Componentes Vue', href: '#' }, { label: 'CSS Architecture', href: '#' }] },
                        { title: 'Soluções', links: [{ label: 'Enterprise Security', href: '#' }, { label: 'Acessibilidade WCAG', href: '#' }, { label: 'Cloud Deploy', href: '#' }] },
                        { title: 'Recursos', links: [{ label: 'Documentação 1.2', href: '#' }, { label: 'Guia FlyonUI', href: '#' }, { label: 'Release Notes', href: '#' }] },
                        { title: 'Empresa', links: [{ label: 'Sobre Nós', href: '#' }, { label: 'Contato Comercial', href: '#' }, { label: 'Privacidade & Termos', href: '#' }] }
                      ] : undefined"
                    >
                      <template #brand v-if="footerProps.layout === 'multi-column'">
                        <div style="margin-bottom: 20px;">
                          <strong style="font-size: 16px;">⚡ MagicStyle Design System</strong>
                          <p style="font-size: 13px; opacity: 0.8; margin: 4px 0 0 0;">Soluções enterprise completas para arquiteturas web escaláveis.</p>
                        </div>
                      </template>
                      <template #default v-if="footerProps.layout !== 'multi-column'">
                        <div style="display: flex; gap: 16px; font-size: 13px;">
                          <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Termos de Uso</a>
                          <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Privacidade</a>
                          <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Segurança</a>
                          <a href="javascript:void(0)" style="color: inherit; text-decoration: none;">Status do Sistema</a>
                        </div>
                      </template>
                    </MsFooter>
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsFooter</div>

                <div class="prop-row">
                  <label class="prop-label">Disposição de Layout (layout)</label>
                  <select class="prop-select" v-model="footerProps.layout">
                    <option value="multi-column">multi-column (Grade de 4 colunas corporativa)</option>
                    <option value="simple">simple (Barra horizontal simples com links)</option>
                    <option value="compact">compact (Barra minimalista densa - 40px)</option>
                    <option value="centered">centered (Alinhamento centralizado para landing pages)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico (tone)</label>
                  <select class="prop-select" v-model="footerProps.tone">
                    <option value="default">default (Superfície Padrão)</option>
                    <option value="neutral">neutral (#222f3e - Dark Ink)</option>
                    <option value="primary">primary (#2e86de - Corporate Blue)</option>
                    <option value="accent">accent (#341f97 - Deep Indigo)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Variante Visual (variant)</label>
                  <select class="prop-select" v-model="footerProps.variant">
                    <option value="default">default (Borda superior sutil)</option>
                    <option value="bordered">bordered (Borda reforçada 2px)</option>
                    <option value="sunken">sunken (Superfície rebaixada cinza suave)</option>
                    <option value="inverse">inverse (Fundo escuro invertido de alto contraste)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Efeito de Sombra (shadow)</label>
                  <select class="prop-select" v-model="footerProps.shadow">
                    <option value="none">none (Sem sombra)</option>
                    <option value="sm">sm (Sombra sutil superior)</option>
                    <option value="md">md (Sombra média corporativa)</option>
                    <option value="lg">lg (Sombra pronunciada superior)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Posicionamento (position)</label>
                  <select class="prop-select" v-model="footerProps.position">
                    <option value="static">static (Rolagem natural com a página)</option>
                    <option value="sticky">sticky (Fixado na viewport)</option>
                    <option value="fixed">fixed (Coordenadas fixas absolutas)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Contêiner Responsivo (container)</label>
                  <select class="prop-select" v-model="footerProps.container">
                    <option value="none">none (Largura total 100%)</option>
                    <option value="sm">sm (640px)</option>
                    <option value="md">md (768px)</option>
                    <option value="lg">lg (1024px)</option>
                    <option value="xl">xl (1280px padrão)</option>
                    <option value="fluid">fluid (Fluido com padding)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Texto de Direitos Autorais (copyright)</label>
                  <input class="prop-input" type="text" v-model="footerProps.copyright" />
                </div>

                <div style="margin-top: 10px;">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="footerProps.fixed" />
                    <span>Fixar no Rodapé (fixed)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB: SCROLLBAR PLAYGROUND -->
          <div v-if="activeTab === 'scrollbar' && subTab === 'preview'">
            <div class="playground-grid">
              <div class="canvas-area">
                <div class="canvas-preview" style="padding: 32px; width: 100%; box-sizing: border-box;">
                  <div style="width: 100%; max-width: 480px; border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised); padding: 16px; box-shadow: var(--ms-elevation-card);">
                    <div style="font-size: 13px; font-weight: 700; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                      <span>Área com Scrollbar Customizada</span>
                      <span style="font-size: 11px; padding: 2px 8px; border-radius: 9999px; background: var(--ms-color-surface-subtle); color: var(--ms-color-text-secondary); font-family: monospace;">
                        {{ scrollbarProps.size }} / {{ scrollbarProps.tone }}
                      </span>
                    </div>

                    <MsScrollbar
                      :orientation="scrollbarProps.orientation"
                      :size="scrollbarProps.size"
                      :visibility="scrollbarProps.visibility"
                      :tone="scrollbarProps.tone"
                      :max-height="scrollbarProps.maxHeight"
                      :arrows="scrollbarProps.arrows"
                      :track-color="scrollbarProps.trackColor || undefined"
                      :thumb-color="scrollbarProps.thumbColor || undefined"
                      :thumb-radius="scrollbarProps.thumbRadius || undefined"
                      :radius="scrollbarProps.radius || undefined"
                    >
                      <div style="padding: 10px; font-size: 13px; line-height: 1.8;">
                        <p style="margin: 0 0 8px 0; font-weight: 600; color: var(--ms-color-primary, #2e86de);">
                          Role o conteúdo para ver a animação e estilização do cursor (thumb).
                        </p>
                        <p v-for="n in 12" :key="'sc-item-' + n" style="margin: 0 0 6px 0; padding: 6px 10px; background: var(--ms-color-surface-subtle); border-radius: 6px;">
                          Registro corporativo #{{ n }} &bull; Verificação de auditoria concluída com sucesso.
                        </p>
                        <p style="margin: 0; color: #64748b; font-size: 12px;">Final dos registros do contêiner.</p>
                      </div>
                    </MsScrollbar>
                  </div>
                </div>

                <div class="code-card">
                  <button class="code-copy-btn" @click="copyCode">
                    {{ copied ? "✓ Copiado!" : "📋 Copiar Código" }}
                  </button>
                  <pre style="margin: 0;"><code>{{ generatedCode }}</code></pre>
                </div>
              </div>

              <div class="controls-card">
                <div class="controls-card-title">Propriedades do MsScrollbar</div>

                <div class="prop-row">
                  <label class="prop-label">Tom Semântico do Cursor (tone - 8 Cores da Marca)</label>
                  <select class="prop-select" v-model="scrollbarProps.tone">
                    <option value="default">default (Cinza neutro suave)</option>
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
                  <label class="prop-label">Espessura do Cursor (size)</label>
                  <select class="prop-select" v-model="scrollbarProps.size">
                    <option value="thin">thin (Fino - 4px)</option>
                    <option value="normal">normal (Padrão - 8px)</option>
                    <option value="thick">thick (Encorpado - 12px)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Orientação da Rolagem (orientation)</label>
                  <select class="prop-select" v-model="scrollbarProps.orientation">
                    <option value="vertical">vertical (Apenas vertical)</option>
                    <option value="horizontal">horizontal (Apenas horizontal)</option>
                    <option value="both">both (Ambas as direções)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Visibilidade do Cursor (visibility)</label>
                  <select class="prop-select" v-model="scrollbarProps.visibility">
                    <option value="auto">auto (Surge ao rolar o conteúdo e oculta no repouso)</option>
                    <option value="always">always (Sempre visível)</option>
                    <option value="none">none (Oculto com rolagem ativa)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Cor de Fundo do Trilho (trackColor)</label>
                  <input class="prop-input" type="text" v-model="scrollbarProps.trackColor" placeholder="Ex: #f1f5f9 ou rgba(0,0,0,0.05)" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Cor do Cursor / Thumb (thumbColor)</label>
                  <input class="prop-input" type="text" v-model="scrollbarProps.thumbColor" placeholder="Ex: #2e86de ou #341f97" />
                </div>

                <div class="prop-row">
                  <label class="prop-label">Raio de Borda do Cursor (thumbRadius / radius)</label>
                  <select class="prop-select" v-model="scrollbarProps.thumbRadius">
                    <option value="">Padrão (8px arredondado)</option>
                    <option value="0px">0px (sharp - reto)</option>
                    <option value="4px">4px (subtle - sutil)</option>
                    <option value="8px">8px (medium)</option>
                    <option value="9999px">9999px (full pill)</option>
                  </select>
                </div>

                <div class="prop-row">
                  <label class="prop-label">Altura Máxima (maxHeight em px)</label>
                  <input class="prop-input" type="number" v-model.number="scrollbarProps.maxHeight" />
                </div>

                <div style="margin-top: 10px;">
                  <label class="prop-checkbox">
                    <input type="checkbox" v-model="scrollbarProps.arrows" />
                    <span>Exibir Setas de Rolagem (arrows)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

        </main>
    </div>
  `,
};

createApp(App).mount("#app");
