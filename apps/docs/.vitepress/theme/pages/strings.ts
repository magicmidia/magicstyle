import type { SiteLang } from "../i18n/ui.ts";

export interface PageStrings {
  gallery: {
    mode: string;
    light: string;
    dark: string;
    apply: string;
    active: string;
    copy: string;
    copied: string;
    sample: { title: string; text: string; primary: string; secondary: string; input: string };
    descriptions: Record<string, string>;
  };
  builder: {
    base: string;
    primary: string;
    primaryDark: string;
    neutralTint: string;
    radius: string;
    depth: string;
    flat: string;
    soft: string;
    preview: string;
    definition: string;
    css: string;
    contrastOk: string;
    contrastIssues: string;
    contrastFg: string;
    contrastRatio: string;
    reset: string;
    name: string;
  };
  tokens: {
    search: string;
    contract: string;
    contractHint: string;
    derived: string;
    derivedHint: string;
    primitives: string;
    primitivesHint: string;
    token: string;
    value: string;
    preview: string;
    description: string;
    required: string;
    optional: string;
    copyName: string;
    copied: string;
    empty: string;
    count: string;
  };
  roles: Record<string, string>;
  contract: Record<string, string>;
}

type Role =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "danger";

function roleEntries(
  labels: Record<Role, string>,
  fill: (label: string) => string,
  content: (role: Role) => string,
): Record<string, string> {
  return Object.fromEntries(
    (Object.keys(labels) as Role[]).flatMap((role) => [
      [`color-${role}`, fill(labels[role])],
      [`color-${role}-content`, content(role)],
    ]),
  );
}

export const PAGES: Record<SiteLang, PageStrings> = {
  "pt-BR": {
    gallery: {
      mode: "Modo",
      light: "Claro",
      dark: "Escuro",
      apply: "Usar no site",
      active: "Em uso",
      copy: "Copiar atributo",
      copied: "Copiado!",
      sample: {
        title: "Plano Pro",
        text: "Recursos avançados para a sua equipe.",
        primary: "Assinar",
        secondary: "Detalhes",
        input: "voce@empresa.com",
      },
      descriptions: {
        magic: "Azul técnico sobre superfícies neutras e silenciosas. Tema padrão.",
        shadcn: "Monocromático zinco inspirado no shadcn/ui, com contraste marcante.",
        graphite: "Aço suave e neutros mais densos para interfaces de produto compactas.",
        vercel: "Preto e branco hiperminimalista, inspirado no Geist da Vercel.",
        linear: "Superfícies escuras e índigo elétrico, inspirado no Linear e no Raycast.",
        github: "Estética do Primer: bordas nítidas e ações no verde do GitHub.",
        supabase: "Verde esmeralda sobre ardósia, no estilo de dashboards do Supabase.",
        material: "Superfícies tonais e contornos arredondados do Material Design 3.",
        bootstrap: "UI corporativa clássica, com o azul royal do Bootstrap 5.",
        nord: "Paleta Nord: noite polar, neve e acentos em ciano gelado.",
      },
    },
    builder: {
      base: "Tema base",
      primary: "Primária (claro)",
      primaryDark: "Primária (escuro)",
      neutralTint: "Matiz dos neutros",
      radius: "Raio",
      depth: "Sombras",
      flat: "Planas",
      soft: "Suaves",
      preview: "Prévia",
      definition: "Definição (TypeScript)",
      css: "CSS gerado",
      contrastOk: "Contraste AA verificado nos modos claro e escuro.",
      contrastIssues: "problemas de contraste",
      contrastFg: "Par",
      contrastRatio: "Contraste",
      reset: "Restaurar",
      name: "Nome do tema",
    },
    tokens: {
      search: "Buscar token…",
      contract: "Contrato do tema",
      contractHint: "As únicas variáveis que um tema define. Todo o resto é derivado delas.",
      derived: "Tokens semânticos",
      derivedHint: "Derivados do contrato no próprio CSS. Os valores mudam com o tema e o modo.",
      primitives: "Primitivas",
      primitivesHint:
        "Tokens DTCG fixos: paletas OKLCH, espaçamento, tipografia, movimento e camadas.",
      token: "Token",
      value: "Valor",
      preview: "Prévia",
      description: "Descrição",
      required: "Obrigatório",
      optional: "Opcional",
      copyName: "Copiar nome",
      copied: "Copiado",
      empty: "Nenhum token encontrado.",
      count: "tokens",
    },
    roles: {
      primary: "Primária",
      secondary: "Secundária",
      accent: "Destaque",
      neutral: "Neutra",
      info: "Informação",
      success: "Sucesso",
      warning: "Aviso",
      danger: "Perigo",
    },
    contract: {
      "color-base-100": "Superfície da página e dos componentes.",
      "color-base-200": "Superfície rebaixada (poços, listras de tabela).",
      "color-base-300": "Cor padrão de bordas e divisores.",
      "color-base-content": "Cor principal do texto sobre as superfícies.",
      "color-base-raised": "Superfície elevada (cards, menus). Padrão: base-100.",
      ...roleEntries(
        {
          primary: "Ação principal e marca",
          secondary: "Ação secundária",
          accent: "Destaque",
          neutral: "Ação neutra (escura/inversa)",
          info: "Feedback informativo",
          success: "Feedback de sucesso",
          warning: "Feedback de aviso",
          danger: "Erro e ações destrutivas",
        },
        (label) => `${label}: cor de preenchimento.`,
        (role) => `Texto e ícones sobre --ms-color-${role} (mínimo AA 4,5:1).`,
      ),
      "radius-selector": "Elementos pequenos: checkbox, tag, badge.",
      "radius-field": "Campos e inputs.",
      "radius-box": "Cards, diálogos e popovers.",
      "radius-control": "Botões e controles, quando diferem dos campos. Padrão: radius-field.",
      "border-width": "Largura padrão das bordas.",
      depth: "Intensidade das sombras (0 = plano, 1 = padrão).",
      "font-sans": "Fonte da interface.",
      "font-mono": "Fonte de código.",
      "font-display": "Fonte dos títulos. Padrão: font-sans.",
    },
  },
  "en-US": {
    gallery: {
      mode: "Mode",
      light: "Light",
      dark: "Dark",
      apply: "Use on this site",
      active: "In use",
      copy: "Copy attribute",
      copied: "Copied!",
      sample: {
        title: "Pro plan",
        text: "Advanced features for your team.",
        primary: "Subscribe",
        secondary: "Details",
        input: "you@company.com",
      },
      descriptions: {
        magic: "Technical blue on quiet neutral surfaces. The default theme.",
        shadcn: "Zinc monochrome inspired by shadcn/ui, with stark contrast.",
        graphite: "Muted steel and denser neutrals for compact product UI.",
        vercel: "Hyper-minimal black and white, inspired by Vercel Geist.",
        linear: "Obsidian surfaces and electric indigo, inspired by Linear and Raycast.",
        github: "Primer aesthetics: crisp borders and GitHub-green actions.",
        supabase: "Emerald on slate, in the style of Supabase dashboards.",
        material: "Tonal surfaces and rounded contours from Material Design 3.",
        bootstrap: "Classic enterprise UI with Bootstrap 5 royal blue.",
        nord: "The Nord palette: polar night, snow storm and frost cyan accents.",
      },
    },
    builder: {
      base: "Base theme",
      primary: "Primary (light)",
      primaryDark: "Primary (dark)",
      neutralTint: "Neutral hue",
      radius: "Radius",
      depth: "Shadows",
      flat: "Flat",
      soft: "Soft",
      preview: "Preview",
      definition: "Definition (TypeScript)",
      css: "Generated CSS",
      contrastOk: "AA contrast verified in light and dark modes.",
      contrastIssues: "contrast issues",
      contrastFg: "Pair",
      contrastRatio: "Contrast",
      reset: "Reset",
      name: "Theme name",
    },
    tokens: {
      search: "Search tokens…",
      contract: "Theme contract",
      contractHint: "The only variables a theme defines. Everything else derives from them.",
      derived: "Semantic tokens",
      derivedHint: "Derived from the contract in CSS. Values follow the active theme and mode.",
      primitives: "Primitives",
      primitivesHint: "Fixed DTCG tokens: OKLCH palettes, spacing, typography, motion and layers.",
      token: "Token",
      value: "Value",
      preview: "Preview",
      description: "Description",
      required: "Required",
      optional: "Optional",
      copyName: "Copy name",
      copied: "Copied",
      empty: "No tokens found.",
      count: "tokens",
    },
    roles: {
      primary: "Primary",
      secondary: "Secondary",
      accent: "Accent",
      neutral: "Neutral",
      info: "Info",
      success: "Success",
      warning: "Warning",
      danger: "Danger",
    },
    contract: {
      "color-base-100": "Page and component surface.",
      "color-base-200": "Sunken surface (wells, table stripes).",
      "color-base-300": "Default border and divider color.",
      "color-base-content": "Main text color on base surfaces.",
      "color-base-raised": "Raised surface (cards, menus). Default: base-100.",
      ...roleEntries(
        {
          primary: "Main action and brand",
          secondary: "Secondary action",
          accent: "Highlight",
          neutral: "Neutral (dark/inverse) action",
          info: "Informational feedback",
          success: "Success feedback",
          warning: "Warning feedback",
          danger: "Error and destructive actions",
        },
        (label) => `${label}: fill color.`,
        (role) => `Text and icons on --ms-color-${role} (AA 4.5:1 minimum).`,
      ),
      "radius-selector": "Small elements: checkbox, tag, badge.",
      "radius-field": "Inputs and fields.",
      "radius-box": "Cards, dialogs and popovers.",
      "radius-control": "Buttons and controls when they differ from fields. Default: radius-field.",
      "border-width": "Default border width.",
      depth: "Shadow intensity (0 = flat, 1 = default).",
      "font-sans": "UI font stack.",
      "font-mono": "Code font stack.",
      "font-display": "Headings font stack. Default: font-sans.",
    },
  },
  "es-ES": {
    gallery: {
      mode: "Modo",
      light: "Claro",
      dark: "Oscuro",
      apply: "Usar en el sitio",
      active: "En uso",
      copy: "Copiar atributo",
      copied: "¡Copiado!",
      sample: {
        title: "Plan Pro",
        text: "Funciones avanzadas para tu equipo.",
        primary: "Suscribirse",
        secondary: "Detalles",
        input: "tu@empresa.com",
      },
      descriptions: {
        magic: "Azul técnico sobre superficies neutras y tranquilas. El tema por defecto.",
        shadcn: "Monocromo zinc inspirado en shadcn/ui, con contraste marcado.",
        graphite: "Acero suave y neutros más densos para interfaces de producto compactas.",
        vercel: "Blanco y negro hiperminimalista, inspirado en Geist de Vercel.",
        linear: "Superficies oscuras e índigo eléctrico, inspirado en Linear y Raycast.",
        github: "Estética de Primer: bordes nítidos y acciones en el verde de GitHub.",
        supabase: "Esmeralda sobre pizarra, al estilo de los paneles de Supabase.",
        material: "Superficies tonales y contornos redondeados de Material Design 3.",
        bootstrap: "UI corporativa clásica, con el azul real de Bootstrap 5.",
        nord: "La paleta Nord: noche polar, nieve y acentos en cian helado.",
      },
    },
    builder: {
      base: "Tema base",
      primary: "Primario (claro)",
      primaryDark: "Primario (oscuro)",
      neutralTint: "Matiz de los neutros",
      radius: "Radio",
      depth: "Sombras",
      flat: "Planas",
      soft: "Suaves",
      preview: "Vista previa",
      definition: "Definición (TypeScript)",
      css: "CSS generado",
      contrastOk: "Contraste AA verificado en los modos claro y oscuro.",
      contrastIssues: "problemas de contraste",
      contrastFg: "Par",
      contrastRatio: "Contraste",
      reset: "Restablecer",
      name: "Nombre del tema",
    },
    tokens: {
      search: "Buscar token…",
      contract: "Contrato del tema",
      contractHint: "Las únicas variables que define un tema. Todo lo demás se deriva de ellas.",
      derived: "Tokens semánticos",
      derivedHint:
        "Derivados del contrato en el propio CSS. Los valores cambian con el tema y el modo.",
      primitives: "Primitivas",
      primitivesHint:
        "Tokens DTCG fijos: paletas OKLCH, espaciado, tipografía, movimiento y capas.",
      token: "Token",
      value: "Valor",
      preview: "Vista previa",
      description: "Descripción",
      required: "Obligatorio",
      optional: "Opcional",
      copyName: "Copiar nombre",
      copied: "Copiado",
      empty: "No se encontraron tokens.",
      count: "tokens",
    },
    roles: {
      primary: "Primario",
      secondary: "Secundario",
      accent: "Acento",
      neutral: "Neutro",
      info: "Información",
      success: "Éxito",
      warning: "Advertencia",
      danger: "Peligro",
    },
    contract: {
      "color-base-100": "Superficie de la página y de los componentes.",
      "color-base-200": "Superficie hundida (pozos, filas alternas de tabla).",
      "color-base-300": "Color por defecto de bordes y divisores.",
      "color-base-content": "Color principal del texto sobre las superficies.",
      "color-base-raised": "Superficie elevada (tarjetas, menús). Por defecto: base-100.",
      ...roleEntries(
        {
          primary: "Acción principal y marca",
          secondary: "Acción secundaria",
          accent: "Acento",
          neutral: "Acción neutra (oscura/inversa)",
          info: "Mensaje informativo",
          success: "Mensaje de éxito",
          warning: "Mensaje de advertencia",
          danger: "Errores y acciones destructivas",
        },
        (label) => `${label}: color de relleno.`,
        (role) => `Texto e iconos sobre --ms-color-${role} (mínimo AA 4,5:1).`,
      ),
      "radius-selector": "Elementos pequeños: checkbox, etiqueta, insignia.",
      "radius-field": "Campos e inputs.",
      "radius-box": "Tarjetas, diálogos y popovers.",
      "radius-control":
        "Botones y controles cuando difieren de los campos. Por defecto: radius-field.",
      "border-width": "Ancho de borde por defecto.",
      depth: "Intensidad de las sombras (0 = plano, 1 = por defecto).",
      "font-sans": "Fuente de la interfaz.",
      "font-mono": "Fuente de código.",
      "font-display": "Fuente de los títulos. Por defecto: font-sans.",
    },
  },
};
