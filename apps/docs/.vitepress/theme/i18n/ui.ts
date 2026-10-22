/** Docs-site chrome strings (the components translate themselves via MsProvider `locale`). */
export type SiteLang = "pt-BR" | "en-US" | "es-ES";

export interface UiStrings {
  customize: string;
  theme: string;
  density: string;
  radius: string;
  contrast: string;
  reset: string;
  densities: { compact: string; comfortable: string; spacious: string };
  radii: { sharp: string; subtle: string; medium: string; rounded: string };
  contrasts: { normal: string; high: string };
  preview: string;
  code: string;
  copy: string;
  copied: string;
  props: string;
  events: string;
  slots: string;
  name: string;
  type: string;
  default: string;
  description: string;
  required: string;
  noApi: string;
  englishOnly: string;
  viewSource: string;
  reportIssue: string;
  import: string;
  openStackBlitz: string;
  viewport: string;
  viewports: { desktop: string; tablet: string; mobile: string };
}

export const UI: Record<SiteLang, UiStrings> = {
  "pt-BR": {
    customize: "Personalizar",
    theme: "Tema",
    density: "Densidade",
    radius: "Raio",
    contrast: "Contraste",
    reset: "Restaurar padrão",
    densities: { compact: "Compacta", comfortable: "Confortável", spacious: "Espaçosa" },
    radii: { sharp: "Reto", subtle: "Sutil", medium: "Médio", rounded: "Arredondado" },
    contrasts: { normal: "Normal", high: "Alto" },
    preview: "Visualização",
    code: "Código",
    copy: "Copiar código",
    copied: "Copiado!",
    props: "Props",
    events: "Eventos",
    slots: "Slots",
    name: "Nome",
    type: "Tipo",
    default: "Padrão",
    description: "Descrição",
    required: "obrigatório",
    noApi: "Sem itens.",
    englishOnly: "Descrição disponível em inglês.",
    viewSource: "Código-fonte",
    reportIssue: "Reportar problema",
    import: "Importação",
    openStackBlitz: "Abrir no StackBlitz",
    viewport: "Largura da prévia",
    viewports: { desktop: "Desktop", tablet: "Tablet", mobile: "Celular" },
  },
  "en-US": {
    customize: "Customize",
    theme: "Theme",
    density: "Density",
    radius: "Radius",
    contrast: "Contrast",
    reset: "Reset to default",
    densities: { compact: "Compact", comfortable: "Comfortable", spacious: "Spacious" },
    radii: { sharp: "Sharp", subtle: "Subtle", medium: "Medium", rounded: "Rounded" },
    contrasts: { normal: "Normal", high: "High" },
    preview: "Preview",
    code: "Code",
    copy: "Copy code",
    copied: "Copied!",
    props: "Props",
    events: "Events",
    slots: "Slots",
    name: "Name",
    type: "Type",
    default: "Default",
    description: "Description",
    required: "required",
    noApi: "None.",
    englishOnly: "Description available in English.",
    viewSource: "Source",
    reportIssue: "Report an issue",
    import: "Import",
    openStackBlitz: "Open in StackBlitz",
    viewport: "Preview width",
    viewports: { desktop: "Desktop", tablet: "Tablet", mobile: "Mobile" },
  },
  "es-ES": {
    customize: "Personalizar",
    theme: "Tema",
    density: "Densidad",
    radius: "Radio",
    contrast: "Contraste",
    reset: "Restablecer",
    densities: { compact: "Compacta", comfortable: "Cómoda", spacious: "Amplia" },
    radii: { sharp: "Recto", subtle: "Sutil", medium: "Medio", rounded: "Redondeado" },
    contrasts: { normal: "Normal", high: "Alto" },
    preview: "Vista previa",
    code: "Código",
    copy: "Copiar código",
    copied: "¡Copiado!",
    props: "Props",
    events: "Eventos",
    slots: "Slots",
    name: "Nombre",
    type: "Tipo",
    default: "Predeterminado",
    description: "Descripción",
    required: "obligatorio",
    noApi: "Ninguno.",
    englishOnly: "Descripción disponible en inglés.",
    viewSource: "Código fuente",
    reportIssue: "Reportar un problema",
    import: "Importación",
    openStackBlitz: "Abrir en StackBlitz",
    viewport: "Ancho de la vista previa",
    viewports: { desktop: "Escritorio", tablet: "Tableta", mobile: "Móvil" },
  },
};

export function siteLang(lang: string): SiteLang {
  if (lang.startsWith("pt")) return "pt-BR";
  if (lang.startsWith("es")) return "es-ES";
  return "en-US";
}
