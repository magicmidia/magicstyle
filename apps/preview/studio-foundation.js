import { ref, computed } from "vue";

export function useFoundationStudio() {
  // --- TYPOGRAPHY STATE ---
  const typeScale = [
    {
      token: "--ms-typography-size-display-2xl",
      className: "ms-typography-display-2xl",
      size: "4.5rem (72px)",
      weight: "800",
      lineHeight: "1.05",
      tracking: "-0.04em",
      sample: "Design System 1.2",
      usage: "Hero headlines, banners principais de impacto",
    },
    {
      token: "--ms-typography-size-display-xl",
      className: "ms-typography-display-xl",
      size: "3.75rem (60px)",
      weight: "700",
      lineHeight: "1.1",
      tracking: "-0.035em",
      sample: "Display Extra Large",
      usage: "Sub-hero e títulos de seções de apresentação",
    },
    {
      token: "--ms-typography-size-display-lg",
      className: "ms-typography-display-lg",
      size: "3rem (48px)",
      weight: "700",
      lineHeight: "1.15",
      tracking: "-0.03em",
      sample: "Display Large",
      usage: "Títulos editoriais e destaques corporativos",
    },
    {
      token: "--ms-typography-size-heading-2xl",
      className: "ms-typography-heading-2xl",
      size: "2.5rem (40px)",
      weight: "700",
      lineHeight: "1.2",
      tracking: "-0.025em",
      sample: "Heading 2X Large",
      usage: "Títulos H1 de página e dashboards executivos",
    },
    {
      token: "--ms-typography-size-heading-xl",
      className: "ms-typography-heading-xl",
      size: "2.25rem (36px)",
      weight: "600",
      lineHeight: "1.25",
      tracking: "-0.02em",
      sample: "Heading Extra Large",
      usage: "Cabeçalhos de painel e modais expandidos",
    },
    {
      token: "--ms-typography-size-heading-lg",
      className: "ms-typography-heading-lg",
      size: "1.875rem (30px)",
      weight: "600",
      lineHeight: "1.3",
      tracking: "-0.015em",
      sample: "Heading Large",
      usage: "Títulos de seções (H2), cartões de alto destaque",
    },
    {
      token: "--ms-typography-size-heading-md",
      className: "ms-typography-heading-md",
      size: "1.5rem (24px)",
      weight: "600",
      lineHeight: "1.35",
      tracking: "-0.01em",
      sample: "Heading Medium",
      usage: "Sub-seções (H3), cabeçalhos de formulário e cards",
    },
    {
      token: "--ms-typography-size-heading-sm",
      className: "ms-typography-heading-sm",
      size: "1.25rem (20px)",
      weight: "600",
      lineHeight: "1.4",
      tracking: "0",
      sample: "Heading Small",
      usage: "Subtítulos menores (H4), grupos de campos",
    },
    {
      token: "--ms-typography-size-heading-xs",
      className: "ms-typography-heading-xs",
      size: "1.125rem (18px)",
      weight: "600",
      lineHeight: "1.45",
      tracking: "0",
      sample: "Heading Extra Small",
      usage: "Títulos de itens em listas densas (H5)",
    },
    {
      token: "--ms-typography-size-body-lg",
      className: "ms-typography-body-lg",
      size: "1.125rem (18px)",
      weight: "400",
      lineHeight: "1.6",
      tracking: "0",
      sample: "Lead paragraph para introduções de artigos e resumos de alto impacto visual.",
      usage: "Parágrafo de introdução (Lead) e artigos",
    },
    {
      token: "--ms-typography-size-body-md",
      className: "ms-typography-body-md",
      size: "1rem (16px)",
      weight: "400",
      lineHeight: "1.5",
      tracking: "0",
      sample: "Texto padrão corporativo utilizado em formulários, parágrafos e botões.",
      usage: "Tamanho canônico da interface Magic-Style",
    },
    {
      token: "--ms-typography-size-body-sm",
      className: "ms-typography-body-sm",
      size: "0.875rem (14px)",
      weight: "400",
      lineHeight: "1.45",
      tracking: "0",
      sample: "Metadados de tabela, descrições secundárias e formulários compactos.",
      usage: "Controles secundários, células de tabela",
    },
    {
      token: "--ms-typography-size-caption-xs",
      className: "ms-typography-caption-xs",
      size: "0.75rem (12px)",
      weight: "500",
      lineHeight: "1.4",
      tracking: "0.02em",
      sample: "MICRO RÓTULO, BADGES & DICAS FLUTUANTES",
      usage: "Badges, contadores, timestamps",
    },
    {
      token: "--ms-typography-size-caption-2xs",
      className: "ms-typography-caption-2xs",
      size: "0.625rem (10px)",
      weight: "600",
      lineHeight: "1.3",
      tracking: "0.04em",
      sample: "AVISO LEGAL, COPYRIGHT & ATRIBUIÇÕES",
      usage: "Copyright, rodapés compactos, tags ultra-compactas",
    },
  ];

  // Live Type Tester
  const testerText = ref("Magic-Style: Harmonia estética com precisão corporativa.");
  const testerSize = ref(28);
  const testerWeight = ref("600");
  const testerLineHeight = ref(1.3);
  const testerLetterSpacing = ref(0);
  const testerFont = ref("sans");
  const testerAlign = ref("left");
  const testerTransform = ref("none");

  const computedTesterStyles = computed(() => ({
    fontSize: `${testerSize.value}px`,
    fontWeight: testerWeight.value,
    lineHeight: testerLineHeight.value,
    letterSpacing: `${testerLetterSpacing.value}px`,
    fontFamily:
      testerFont.value === "sans"
        ? "var(--ms-font-sans)"
        : testerFont.value === "display"
          ? "var(--ms-font-display, var(--ms-font-sans))"
          : "var(--ms-font-mono)",
    textAlign: testerAlign.value,
    textTransform: testerTransform.value,
  }));

  const typographySnippetCode = computed(() => {
    const fontVar =
      testerFont.value === "sans"
        ? "--ms-font-sans"
        : testerFont.value === "display"
          ? "--ms-font-display"
          : "--ms-font-mono";
    return `.custom-type-specimen {
  font-family: var(${fontVar});
  font-size: ${testerSize.value}px;
  font-weight: ${testerWeight.value};
  line-height: ${testerLineHeight.value};
  letter-spacing: ${testerLetterSpacing.value}px;
  text-align: ${testerAlign.value};
  text-transform: ${testerTransform.value};
}`;
  });

  // --- COLORS STATE ---
  const activeColorTone = ref("primary");
  const copiedNotification = ref("");

  const brandTones = [
    {
      id: "primary",
      label: "Primary",
      name: "Corporate Blue",
      base: "#2e86de",
      desc: "Ação primária, destaques corporativos, foco interativo e estados de seleção.",
      stops: [
        { stop: "50", hex: "#f0f7ff", oklch: "oklch(0.970 0.028 252)", lightText: false },
        { stop: "100", hex: "#e0effe", oklch: "oklch(0.930 0.050 252)", lightText: false },
        { stop: "200", hex: "#b9ddfd", oklch: "oklch(0.860 0.082 252)", lightText: false },
        { stop: "300", hex: "#7cc0fb", oklch: "oklch(0.780 0.116 252)", lightText: false },
        { stop: "400", hex: "#389ef6", oklch: "oklch(0.690 0.141 252)", lightText: true },
        {
          stop: "500",
          hex: "#2e86de",
          oklch: "oklch(0.612 0.157 252)",
          lightText: true,
          isBase: true,
        },
        { stop: "600", hex: "#0b63c5", oklch: "oklch(0.520 0.154 252)", lightText: true },
        { stop: "700", hex: "#0a4fa2", oklch: "oklch(0.430 0.135 252)", lightText: true },
        { stop: "800", hex: "#0d4384", oklch: "oklch(0.360 0.107 252)", lightText: true },
        { stop: "900", hex: "#113a6e", oklch: "oklch(0.300 0.079 252)", lightText: true },
        { stop: "950", hex: "#0a2448", oklch: "oklch(0.230 0.057 252)", lightText: true },
      ],
    },
    {
      id: "secondary",
      label: "Secondary",
      name: "Coral Red",
      base: "#e15f41",
      desc: "Ações de apoio, call-to-actions quentes e diferenciação secundária.",
      stops: [
        { stop: "50", hex: "#fef3f1", oklch: "oklch(0.975 0.030 034)", lightText: false },
        { stop: "100", hex: "#fee5e1", oklch: "oklch(0.955 0.054 034)", lightText: false },
        { stop: "200", hex: "#fccfca", oklch: "oklch(0.885 0.088 034)", lightText: false },
        { stop: "300", hex: "#f8a89f", oklch: "oklch(0.800 0.125 034)", lightText: false },
        { stop: "400", hex: "#f17c6e", oklch: "oklch(0.715 0.152 034)", lightText: true },
        {
          stop: "500",
          hex: "#e15f41",
          oklch: "oklch(0.645 0.169 034)",
          lightText: true,
          isBase: true,
        },
        { stop: "600", hex: "#cc4125", oklch: "oklch(0.545 0.166 034)", lightText: true },
        { stop: "700", hex: "#a9331d", oklch: "oklch(0.455 0.145 034)", lightText: true },
        { stop: "800", hex: "#8b2e1c", oklch: "oklch(0.380 0.115 034)", lightText: true },
        { stop: "900", hex: "#732b1d", oklch: "oklch(0.320 0.085 034)", lightText: true },
        { stop: "950", hex: "#3e120a", oklch: "oklch(0.250 0.061 034)", lightText: true },
      ],
    },
    {
      id: "accent",
      label: "Accent",
      name: "Deep Indigo",
      base: "#341f97",
      desc: "Assinatura visual institucional, gradientes nobres e superfícies premium.",
      stops: [
        { stop: "50", hex: "#f5f3ff", oklch: "oklch(0.975 0.030 280)", lightText: false },
        { stop: "100", hex: "#ede9fe", oklch: "oklch(0.945 0.060 280)", lightText: false },
        { stop: "200", hex: "#ddd6fe", oklch: "oklch(0.870 0.090 280)", lightText: false },
        { stop: "300", hex: "#c4b5fd", oklch: "oklch(0.775 0.120 280)", lightText: false },
        { stop: "400", hex: "#9b7cf8", oklch: "oklch(0.660 0.150 280)", lightText: true },
        { stop: "500", hex: "#6c45e8", oklch: "oklch(0.560 0.175 280)", lightText: true },
        { stop: "600", hex: "#5128cc", oklch: "oklch(0.470 0.180 280)", lightText: true },
        {
          stop: "700",
          hex: "#341f97",
          oklch: "oklch(0.360 0.181 280)",
          lightText: true,
          isBase: true,
        },
        { stop: "800", hex: "#2b1979", oklch: "oklch(0.310 0.155 280)", lightText: true },
        { stop: "900", hex: "#23145f", oklch: "oklch(0.270 0.120 280)", lightText: true },
        { stop: "950", hex: "#150b3d", oklch: "oklch(0.210 0.090 280)", lightText: true },
      ],
    },
    {
      id: "neutral",
      label: "Neutral",
      name: "Deep Ink Slate",
      base: "#222f3e",
      desc: "Superfícies neutras, bordas, divisores, textos de alta legibilidade.",
      stops: [
        { stop: "50", hex: "#f8fafc", oklch: "oklch(0.975 0.004 252)", lightText: false },
        { stop: "100", hex: "#f1f5f9", oklch: "oklch(0.947 0.007 252)", lightText: false },
        { stop: "200", hex: "#e2e8f0", oklch: "oklch(0.895 0.010 252)", lightText: false },
        { stop: "300", hex: "#cbd5e1", oklch: "oklch(0.825 0.014 252)", lightText: false },
        { stop: "400", hex: "#94a3b8", oklch: "oklch(0.695 0.018 252)", lightText: false },
        { stop: "500", hex: "#64748b", oklch: "oklch(0.575 0.022 252)", lightText: true },
        { stop: "600", hex: "#475569", oklch: "oklch(0.440 0.026 252)", lightText: true },
        {
          stop: "700",
          hex: "#222f3e",
          oklch: "oklch(0.350 0.028 252)",
          lightText: true,
          isBase: true,
        },
        { stop: "800", hex: "#1e293b", oklch: "oklch(0.275 0.026 252)", lightText: true },
        { stop: "900", hex: "#0f172a", oklch: "oklch(0.215 0.023 252)", lightText: true },
        { stop: "950", hex: "#020617", oklch: "oklch(0.170 0.020 252)", lightText: true },
      ],
    },
    {
      id: "success",
      label: "Success",
      name: "Teal Green",
      base: "#10ac84",
      desc: "Operações bem-sucedidas, confirmações, status positivo e badges de validação.",
      stops: [
        { stop: "50", hex: "#f0fdf9", oklch: "oklch(0.980 0.024 168)", lightText: false },
        { stop: "100", hex: "#ccfbef", oklch: "oklch(0.965 0.042 168)", lightText: false },
        { stop: "200", hex: "#99f6df", oklch: "oklch(0.925 0.068 168)", lightText: false },
        { stop: "300", hex: "#5eead4", oklch: "oklch(0.875 0.094 168)", lightText: false },
        { stop: "400", hex: "#2dd4bf", oklch: "oklch(0.790 0.118 168)", lightText: false },
        {
          stop: "500",
          hex: "#10ac84",
          oklch: "oklch(0.663 0.131 168)",
          lightText: true,
          isBase: true,
        },
        { stop: "600", hex: "#0d8e6d", oklch: "oklch(0.575 0.128 168)", lightText: true },
        { stop: "700", hex: "#0e7158", oklch: "oklch(0.490 0.112 168)", lightText: true },
        { stop: "800", hex: "#105948", oklch: "oklch(0.415 0.089 168)", lightText: true },
        { stop: "900", hex: "#114a3c", oklch: "oklch(0.360 0.065 168)", lightText: true },
        { stop: "950", hex: "#052922", oklch: "oklch(0.290 0.047 168)", lightText: true },
      ],
    },
    {
      id: "info",
      label: "Info",
      name: "Cyan Blue",
      base: "#0abde3",
      desc: "Mensagens orientativas, informativos neutros e links educacionais.",
      stops: [
        { stop: "50", hex: "#f0faff", oklch: "oklch(0.985 0.024 219)", lightText: false },
        { stop: "100", hex: "#e0f5fe", oklch: "oklch(0.975 0.043 219)", lightText: false },
        { stop: "200", hex: "#bae7fd", oklch: "oklch(0.940 0.069 219)", lightText: false },
        { stop: "300", hex: "#7cd3fc", oklch: "oklch(0.885 0.098 219)", lightText: false },
        { stop: "400", hex: "#37b9f7", oklch: "oklch(0.815 0.120 219)", lightText: false },
        {
          stop: "500",
          hex: "#0abde3",
          oklch: "oklch(0.738 0.133 219)",
          lightText: true,
          isBase: true,
        },
        { stop: "600", hex: "#0284c7", oklch: "oklch(0.645 0.130 219)", lightText: true },
        { stop: "700", hex: "#0369a1", oklch: "oklch(0.555 0.114 219)", lightText: true },
        { stop: "800", hex: "#075985", oklch: "oklch(0.480 0.090 219)", lightText: true },
        { stop: "900", hex: "#0c4a6e", oklch: "oklch(0.420 0.067 219)", lightText: true },
        { stop: "950", hex: "#082f49", oklch: "oklch(0.350 0.048 219)", lightText: true },
      ],
    },
    {
      id: "warning",
      label: "Warning",
      name: "Vibrant Orange",
      base: "#ff9f43",
      desc: "Alertas de cuidado, alterações pendentes, limites de consumo e estados provisórios.",
      stops: [
        { stop: "50", hex: "#fff9eb", oklch: "oklch(0.990 0.028 061)", lightText: false },
        { stop: "100", hex: "#fef1d6", oklch: "oklch(0.985 0.049 061)", lightText: false },
        { stop: "200", hex: "#fde2ac", oklch: "oklch(0.965 0.080 061)", lightText: false },
        { stop: "300", hex: "#fbca73", oklch: "oklch(0.925 0.114 061)", lightText: false },
        { stop: "400", hex: "#f9ab3c", oklch: "oklch(0.865 0.139 061)", lightText: false },
        {
          stop: "500",
          hex: "#ff9f43",
          oklch: "oklch(0.785 0.154 061)",
          lightText: false,
          isBase: true,
        },
        { stop: "600", hex: "#d97706", oklch: "oklch(0.695 0.151 061)", lightText: true },
        { stop: "700", hex: "#b45309", oklch: "oklch(0.605 0.132 061)", lightText: true },
        { stop: "800", hex: "#92400e", oklch: "oklch(0.530 0.105 061)", lightText: true },
        { stop: "900", hex: "#78350f", oklch: "oklch(0.470 0.077 061)", lightText: true },
        { stop: "950", hex: "#451a03", oklch: "oklch(0.400 0.055 061)", lightText: true },
      ],
    },
    {
      id: "danger",
      label: "Danger",
      name: "Alert Red",
      base: "#ee5253",
      desc: "Erros críticos, falhas no sistema, exclusão irreversível e bloqueios de acesso.",
      stops: [
        { stop: "50", hex: "#fef2f2", oklch: "oklch(0.970 0.035 024)", lightText: false },
        { stop: "100", hex: "#fee2e2", oklch: "oklch(0.940 0.061 024)", lightText: false },
        { stop: "200", hex: "#fecaca", oklch: "oklch(0.875 0.100 024)", lightText: false },
        { stop: "300", hex: "#fca5a5", oklch: "oklch(0.795 0.142 024)", lightText: false },
        { stop: "400", hex: "#f87171", oklch: "oklch(0.720 0.173 024)", lightText: true },
        {
          stop: "500",
          hex: "#ee5253",
          oklch: "oklch(0.652 0.192 024)",
          lightText: true,
          isBase: true,
        },
        { stop: "600", hex: "#dc2626", oklch: "oklch(0.545 0.188 024)", lightText: true },
        { stop: "700", hex: "#b91c1c", oklch: "oklch(0.455 0.165 024)", lightText: true },
        { stop: "800", hex: "#991b1b", oklch: "oklch(0.380 0.131 024)", lightText: true },
        { stop: "900", hex: "#7f1d1d", oklch: "oklch(0.320 0.096 024)", lightText: true },
        { stop: "950", hex: "#450a0a", oklch: "oklch(0.250 0.069 024)", lightText: true },
      ],
    },
  ];

  // Semantic Surface Tokens
  const surfaceTokens = [
    {
      token: "--ms-color-surface-default",
      name: "Superfície Padrão",
      desc: "Fundo base de páginas e telas",
      lightColor: "#ffffff",
      darkColor: "#0f172a",
    },
    {
      token: "--ms-color-surface-raised",
      name: "Superfície Elevada",
      desc: "Cards, diálogos, menus e modais",
      lightColor: "#ffffff",
      darkColor: "#1e293b",
    },
    {
      token: "--ms-color-surface-sunken",
      name: "Superfície Rebaixada",
      desc: "Wells, snippets, áreas de código",
      lightColor: "#f8fafc",
      darkColor: "#020617",
    },
    {
      token: "--ms-color-surface-overlay",
      name: "Superfície Flutuante",
      desc: "Popovers, tooltips e dropups",
      lightColor: "#ffffff",
      darkColor: "#1e293b",
    },
    {
      token: "--ms-color-border-subtle",
      name: "Borda Sutil (Hairline)",
      desc: "Divisores discretos e separadores",
      lightColor: "#e2e8f0",
      darkColor: "#334155",
    },
    {
      token: "--ms-color-border-default",
      name: "Borda Padrão",
      desc: "Limites de inputs, cards e botões outline",
      lightColor: "#cbd5e1",
      darkColor: "#475569",
    },
    {
      token: "--ms-color-border-strong",
      name: "Borda Enfática",
      desc: "Inputs em hover, foco ou destaque",
      lightColor: "#94a3b8",
      darkColor: "#64748b",
    },
    {
      token: "--ms-color-text-primary",
      name: "Texto Primário",
      desc: "Títulos e corpo de alta ênfase",
      lightColor: "#0f172a",
      darkColor: "#f8fafc",
    },
    {
      token: "--ms-color-text-secondary",
      name: "Texto Secundário",
      desc: "Descrições e rótulos de campos",
      lightColor: "#475569",
      darkColor: "#94a3b8",
    },
    {
      token: "--ms-color-text-muted",
      name: "Texto Muted",
      desc: "Metadados, contadores e placeholders",
      lightColor: "#64748b",
      darkColor: "#64748b",
    },
  ];

  // WCAG Calculator
  const contrastBg = ref("#ffffff");
  const contrastFg = ref("#2e86de");

  function hexToRgb(hex) {
    let clean = String(hex || "").replace("#", "");
    if (clean.length === 3)
      clean = clean
        .split("")
        .map((c) => c + c)
        .join("");
    const num = parseInt(clean, 16);
    if (isNaN(num)) return { r: 255, g: 255, b: 255 };
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }

  function getLuminance({ r, g, b }) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  const contrastResult = computed(() => {
    try {
      const rgb1 = hexToRgb(contrastBg.value);
      const rgb2 = hexToRgb(contrastFg.value);
      const l1 = getLuminance(rgb1);
      const l2 = getLuminance(rgb2);
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      const ratio = (lighter + 0.05) / (darker + 0.05);
      return {
        ratio: ratio.toFixed(2),
        passNormalAA: ratio >= 4.5,
        passLargeAA: ratio >= 3.0,
        passAAA: ratio >= 7.0,
        passUI: ratio >= 3.0,
      };
    } catch {
      return {
        ratio: "4.50",
        passNormalAA: true,
        passLargeAA: true,
        passAAA: false,
        passUI: true,
      };
    }
  });

  const copyToken = (text) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      copiedNotification.value = text;
      setTimeout(() => {
        if (copiedNotification.value === text) copiedNotification.value = "";
      }, 2200);
    }
  };

  const applyContrastPreset = (bg, fg) => {
    contrastBg.value = bg;
    contrastFg.value = fg;
  };

  const colorsSnippetCode = computed(
    () => `/* Exemplo de uso de Tokens de Cores Magic-Style */
.meu-card-personalizado {
  background-color: var(--ms-color-surface-raised);
  border: 1px solid var(--ms-color-border-subtle);
  color: var(--ms-color-text-primary);
  box-shadow: var(--ms-elevation-card);
}

.meu-card-personalizado .destaque {
  color: var(--ms-color-primary); /* #2e86de */
  background: color-mix(in oklch, var(--ms-color-primary) 12%, transparent);
}`,
  );

  // --- GRID STATE ---
  const gridGutter = ref("md");
  const gridPreset = ref("4-4-4");
  const gridJustify = ref("start");
  const gridAlign = ref("top");
  const showGridGuides = ref(false);
  const gridInteractiveCols = ref([
    { span: 4, offset: 0, label: "Coluna 1 (span 4)" },
    { span: 4, offset: 0, label: "Coluna 2 (span 4)" },
    { span: 4, offset: 0, label: "Coluna 3 (span 4)" },
  ]);

  const setGridPreset = (preset) => {
    gridPreset.value = preset;
    if (preset === "12") {
      gridInteractiveCols.value = [{ span: 12, offset: 0, label: "Banner Total (span 12)" }];
    } else if (preset === "6-6") {
      gridInteractiveCols.value = [
        { span: 6, offset: 0, label: "Metade Esquerda (span 6)" },
        { span: 6, offset: 0, label: "Metade Direita (span 6)" },
      ];
    } else if (preset === "4-4-4") {
      gridInteractiveCols.value = [
        { span: 4, offset: 0, label: "Coluna A (span 4)" },
        { span: 4, offset: 0, label: "Coluna B (span 4)" },
        { span: 4, offset: 0, label: "Coluna C (span 4)" },
      ];
    } else if (preset === "3-3-3-3") {
      gridInteractiveCols.value = [
        { span: 3, offset: 0, label: "Card 1 (span 3)" },
        { span: 3, offset: 0, label: "Card 2 (span 3)" },
        { span: 3, offset: 0, label: "Card 3 (span 3)" },
        { span: 3, offset: 0, label: "Card 4 (span 3)" },
      ];
    } else if (preset === "8-4") {
      gridInteractiveCols.value = [
        { span: 8, offset: 0, label: "Feed Principal (span 8)" },
        { span: 4, offset: 0, label: "Barra Lateral (span 4)" },
      ];
    } else if (preset === "offset") {
      gridInteractiveCols.value = [
        { span: 8, offset: 2, label: "Conteúdo Centralizado (span 8 offset 2)" },
      ];
    }
  };

  const gridSnippetCode = computed(() => {
    const cols = gridInteractiveCols.value
      .map(
        (c) =>
          `  <MsCol :span="${c.span}"${c.offset ? ` :offset="${c.offset}"` : ""}>\n    <div class="grid-card">${c.label}</div>\n  </MsCol>`,
      )
      .join("\n");
    return `<MsRow gutter="${gridGutter.value}" justify="${gridJustify.value}" align="${gridAlign.value}">\n${cols}\n</MsRow>`;
  });

  // --- THEMES & DIALS STATE ---
  const selectedTheme = ref("magic");
  const selectedMode = ref("light");
  const selectedDensity = ref("comfortable");
  const selectedRadius = ref("medium");
  const dialRadius = ref(8);
  const dialElevation = ref(2);

  const themeList = [
    { value: "magic", label: "Magic (Oficial)", brand: "#2e86de" },
    { value: "shadcn", label: "Shadcn (Zinc)", brand: "#18181b" },
    { value: "bootstrap", label: "Bootstrap", brand: "#0d6efd" },
    { value: "material", label: "MaterialUI / M3", brand: "#6750a4" },
    { value: "github", label: "GitHub Primer", brand: "#1f883d" },
    { value: "linear", label: "Linear", brand: "#5e6ad2" },
    { value: "vercel", label: "Vercel Geist", brand: "#000000" },
    { value: "supabase", label: "Supabase", brand: "#24b47e" },
    { value: "nord", label: "Nord Arctic", brand: "#5e81ac" },
    { value: "graphite", label: "Graphite", brand: "#4b5563" },
  ];

  const computedDialStyles = computed(() => ({
    "--ms-radius-lg": `${dialRadius.value}px`,
    "--ms-radius-md": `${Math.max(dialRadius.value - 2, 2)}px`,
    "--ms-radius-sm": `${Math.max(dialRadius.value - 4, 1)}px`,
  }));

  const themeScopeSnippetCode = computed(
    () => `<MsThemeScope
  theme="${selectedTheme.value}"
  color-mode="${selectedMode.value}"
  density="${selectedDensity.value}"
  radius="${selectedRadius.value}"
>
  <!-- Conteúdo sob o tema ${selectedTheme.value} isolado -->
</MsThemeScope>`,
  );

  // --- RTL STATE ---
  const rtlDirection = ref("ltr");
  const toggleRtl = () => {
    rtlDirection.value = rtlDirection.value === "ltr" ? "rtl" : "ltr";
  };

  // --- CUSTOMIZATION STATE ---
  const customPrimary = ref("#2e86de");
  const customRadius = ref(8);
  const customFont = ref("sans-serif");

  const customStyles = computed(() => ({
    "--ms-color-primary": customPrimary.value,
    "--ms-radius-lg": `${customRadius.value}px`,
    fontFamily: customFont.value,
  }));

  const customCssCode = computed(
    () =>
      `:root {\n  --ms-color-primary: ${customPrimary.value};\n  --ms-radius-lg: ${customRadius.value}px;\n  --ms-font-sans: ${customFont.value};\n}`,
  );

  const applyGlobally = () => {
    if (typeof window !== "undefined") {
      window.document.documentElement.dataset.msTheme = selectedTheme.value;
      window.document.documentElement.dataset.msColorMode = selectedMode.value;
      window.document.documentElement.dataset.msDensity = selectedDensity.value;
      window.document.documentElement.dataset.msRadius = selectedRadius.value;
      window.localStorage.setItem("ms-theme", selectedTheme.value);
      window.localStorage.setItem("ms-color-mode", selectedMode.value);
      window.localStorage.setItem("ms-density", selectedDensity.value);
      window.localStorage.setItem("ms-radius", selectedRadius.value);
    }
  };

  return {
    typeScale,
    testerText,
    testerSize,
    testerWeight,
    testerLineHeight,
    testerLetterSpacing,
    testerFont,
    testerAlign,
    testerTransform,
    computedTesterStyles,
    typographySnippetCode,
    activeColorTone,
    brandTones,
    surfaceTokens,
    contrastBg,
    contrastFg,
    contrastResult,
    copiedNotification,
    copyToken,
    applyContrastPreset,
    colorsSnippetCode,
    gridGutter,
    gridPreset,
    gridJustify,
    gridAlign,
    showGridGuides,
    gridInteractiveCols,
    setGridPreset,
    gridSnippetCode,
    selectedTheme,
    selectedMode,
    selectedDensity,
    selectedRadius,
    themeList,
    dialRadius,
    dialElevation,
    computedDialStyles,
    themeScopeSnippetCode,
    rtlDirection,
    toggleRtl,
    customPrimary,
    customRadius,
    customFont,
    customStyles,
    customCssCode,
    applyGlobally,
  };
}

export const foundationNavHtml = `
  <div>
    <div class="sidebar-section-title">Fundação & Design System</div>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'typography' }" @click="activeTab = 'typography'">
      <span>🔤</span> Tipografia & Escala
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'colors' }" @click="activeTab = 'colors'">
      <span>🎨</span> Cores & WCAG Contraste
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'grid' }" @click="activeTab = 'grid'">
      <span>📐</span> Grid & Layout (12-Col)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'dials' }" @click="activeTab = 'dials'">
      <span>🎛️</span> Temas & Dials Visuais
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'utilities' }" @click="activeTab = 'utilities'">
      <span>🛠️</span> Utilitários & Variáveis CSS
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'rtl' }" @click="activeTab = 'rtl'">
      <span>🔄</span> Suporte RTL (Bidirecional)
    </button>
    <button class="sidebar-btn" :class="{ 'is-active': activeTab === 'customization' }" @click="activeTab = 'customization'">
      <span>✨</span> Customização & Playground
    </button>
  </div>
`;

export const foundationTemplatesHtml = `
  <!-- TAB: TYPOGRAPHY -->
  <div v-if="activeTab === 'typography'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Tipografia & Escala Harmônica</h2>
        <div class="panel-subtitle">Sistema tipográfico escalonado (13 níveis) baseado na Baseline 1.2 com tokens semânticos, fontes fluidas e pesos estritos.</div>
      </div>
      <div style="display: flex; gap: var(--ms-space-2);">
        <span class="ms-badge" data-tone="primary" data-variant="soft">13 Níveis de Escala</span>
        <span class="ms-badge" data-tone="accent" data-variant="soft">3 Famílias Canônicas</span>
      </div>
    </div>

    <!-- LIVE TYPE TESTER -->
    <div class="controls-card" style="margin-bottom: var(--ms-space-5); border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title" style="display: flex; justify-content: space-between; align-items: center;">
        <span>🎚️ Testador Tipográfico Interativo (Live Specimen)</span>
        <span class="ms-badge ms-badge--tone-info ms-badge--variant-soft">{{ foundation.testerSize }}px • {{ foundation.testerWeight }}</span>
      </div>

      <!-- INTERACTIVE CONTROLS BAR -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--ms-space-3); padding: var(--ms-space-3); background: var(--ms-color-surface-sunken); border-radius: var(--ms-radius-md); margin-bottom: var(--ms-space-4);">
        <div>
          <label style="font-size: 0.75rem; color: var(--ms-color-text-secondary); display: block; margin-bottom: 4px;">Família:</label>
          <select class="prop-select" v-model="foundation.testerFont" style="width: 100%;">
            <option value="sans">Sans-Serif (Inter / System UI)</option>
            <option value="display">Display (Syne / Plus Jakarta)</option>
            <option value="mono">Monospace (JetBrains Mono / Fira)</option>
          </select>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--ms-color-text-secondary); margin-bottom: 4px;">
            <span>Tamanho:</span>
            <span style="font-family: var(--ms-font-mono);">{{ foundation.testerSize }}px</span>
          </div>
          <input type="range" min="12" max="72" step="1" v-model.number="foundation.testerSize" style="width: 100%; accent-color: var(--ms-color-primary);" />
        </div>
        <div>
          <label style="font-size: 0.75rem; color: var(--ms-color-text-secondary); display: block; margin-bottom: 4px;">Peso (Weight):</label>
          <select class="prop-select" v-model="foundation.testerWeight" style="width: 100%;">
            <option value="300">Light (300)</option>
            <option value="400">Regular (400)</option>
            <option value="500">Medium (500)</option>
            <option value="600">Semibold (600)</option>
            <option value="700">Bold (700)</option>
            <option value="800">Extrabold (800)</option>
          </select>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--ms-color-text-secondary); margin-bottom: 4px;">
            <span>Line-Height:</span>
            <span style="font-family: var(--ms-font-mono);">{{ foundation.testerLineHeight }}</span>
          </div>
          <input type="range" min="1.0" max="2.0" step="0.05" v-model.number="foundation.testerLineHeight" style="width: 100%; accent-color: var(--ms-color-primary);" />
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--ms-color-text-secondary); margin-bottom: 4px;">
            <span>Letter-Spacing:</span>
            <span style="font-family: var(--ms-font-mono);">{{ foundation.testerLetterSpacing }}px</span>
          </div>
          <input type="range" min="-2" max="8" step="0.5" v-model.number="foundation.testerLetterSpacing" style="width: 100%; accent-color: var(--ms-color-primary);" />
        </div>
        <div>
          <label style="font-size: 0.75rem; color: var(--ms-color-text-secondary); display: block; margin-bottom: 4px;">Alinhamento:</label>
          <div style="display: flex; gap: 4px;">
            <button class="ms-button ms-button--xs" :data-variant="foundation.testerAlign === 'left' ? 'solid' : 'outline'" data-tone="neutral" @click="foundation.testerAlign = 'left'">Esq</button>
            <button class="ms-button ms-button--xs" :data-variant="foundation.testerAlign === 'center' ? 'solid' : 'outline'" data-tone="neutral" @click="foundation.testerAlign = 'center'">Centro</button>
            <button class="ms-button ms-button--xs" :data-variant="foundation.testerAlign === 'right' ? 'solid' : 'outline'" data-tone="neutral" @click="foundation.testerAlign = 'right'">Dir</button>
          </div>
        </div>
      </div>

      <!-- EDITABLE TEXT INPUT -->
      <div style="margin-bottom: var(--ms-space-3);">
        <input
          type="text"
          class="ms-input ms-input--md"
          v-model="foundation.testerText"
          placeholder="Digite um texto customizado para testar..."
          style="width: 100%;"
        />
      </div>

      <!-- PREVIEW CANVAS -->
      <div style="padding: var(--ms-space-5); border: 1px dashed var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-default); min-height: 110px; display: flex; align-items: center; justify-content: flex-start; overflow-x: auto;">
        <div :style="foundation.computedTesterStyles" style="width: 100%; word-break: break-word; color: var(--ms-color-text-primary); transition: all 0.15s ease;">
          {{ foundation.testerText }}
        </div>
      </div>

      <!-- CSS SNIPPET WITH MS-CODE-BLOCK -->
      <div style="margin-top: var(--ms-space-4);">
        <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary); margin-bottom: 6px; font-weight: 600;">
          Código CSS correspondente:
        </div>
        <MsCodeBlock :code="foundation.typographySnippetCode" language="css" filename="typography.css" :show-line-numbers="true" />
      </div>
    </div>

    <!-- FONT FAMILIES CARDS -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ms-space-4); margin-bottom: var(--ms-space-5);">
      <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; font-size: 1rem; color: var(--ms-color-primary);">Sans-Serif</span>
          <MsCode>--ms-font-sans</MsCode>
        </div>
        <div style="font-size: 1.15rem; font-family: var(--ms-font-sans); font-weight: 600; margin-bottom: 6px;">
          Inter, system-ui, -apple-system, sans-serif
        </div>
        <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0;">
          Usada em todo o corpo da aplicação, inputs, selects, botões e tabelas corporativas. Otimizada para leitura prolongada em monitores de alta e baixa densidade.
        </p>
      </div>

      <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; font-size: 1rem; color: var(--ms-color-accent);">Display</span>
          <MsCode>--ms-font-display</MsCode>
        </div>
        <div style="font-size: 1.15rem; font-family: var(--ms-font-display, var(--ms-font-sans)); font-weight: 700; margin-bottom: 6px;">
          Syne, Plus Jakarta Sans, var(--ms-font-sans)
        </div>
        <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0;">
          Usada em títulos de alto impacto, hero sections, banners institucionais e números animados para conferir personalidade visual única.
        </p>
      </div>

      <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; font-size: 1rem; color: var(--ms-color-success);">Monospace</span>
          <MsCode>--ms-font-mono</MsCode>
        </div>
        <div style="font-size: 1.15rem; font-family: var(--ms-font-mono); font-weight: 600; margin-bottom: 6px;">
          JetBrains Mono, Fira Code, monospace
        </div>
        <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0;">
          Para blocos de código, snippets, logs de servidor, valores numéricos alinhados por tabulação e hashes criptográficos.
        </p>
      </div>
    </div>

    <!-- FULL HARMONIC SCALE TABLE -->
    <div class="controls-card" style="border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title">Escala Harmônica Canônica Completa (13 Níveis)</div>
      <div style="display: flex; flex-direction: column; gap: var(--ms-space-4);">
        <div
          v-for="item in foundation.typeScale"
          :key="item.token"
          style="border-bottom: 1px solid var(--ms-color-border-subtle); padding-bottom: var(--ms-space-3);"
        >
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin-bottom: 6px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <MsCode>{{ item.token }}</MsCode>
              <span class="ms-badge ms-badge--xs ms-badge--variant-outline ms-badge--tone-neutral">.{{ item.className }}</span>
            </div>
            <div style="display: flex; gap: 12px; font-family: var(--ms-font-mono); font-size: 0.75rem;">
              <span><strong>{{ item.size }}</strong></span>
              <span>Peso: {{ item.weight }}</span>
              <span>LH: {{ item.lineHeight }}</span>
            </div>
          </div>
          <div
            :style="{
              fontSize: item.size.split(' ')[0],
              fontWeight: item.weight,
              lineHeight: item.lineHeight,
              letterSpacing: item.tracking,
            }"
            style="color: var(--ms-color-text-primary);"
          >
            {{ item.sample }}
          </div>
          <div style="font-size: 0.75rem; color: var(--ms-color-text-muted); margin-top: 4px;">
            Uso típico: {{ item.usage }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: COLORS & WCAG -->
  <div v-if="activeTab === 'colors'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Cores & Conformidade WCAG 2.2 AA / AAA</h2>
        <div class="panel-subtitle">Paleta semântica em espaço de cor OKLCH com escalas tonais completas de 50 a 950 e calculadora de contraste em tempo real.</div>
      </div>
      <div style="display: flex; gap: var(--ms-space-2);">
        <span class="ms-badge" data-tone="success" data-variant="soft">OKLCH Nativo</span>
        <span class="ms-badge" data-tone="primary" data-variant="soft">8 Tons Normativos</span>
      </div>
    </div>

    <!-- COPIED TOAST NOTIFICATION -->
    <div
      v-if="foundation.copiedNotification"
      style="position: fixed; bottom: 24px; right: 24px; background: var(--ms-color-neutral, #222f3e); color: #ffffff; padding: 10px 16px; border-radius: var(--ms-radius-md); box-shadow: var(--ms-elevation-3); z-index: 9999; display: flex; align-items: center; gap: 8px; font-size: 0.875rem;"
    >
      <span>📋</span> Token copiado: <strong style="font-family: var(--ms-font-mono);">{{ foundation.copiedNotification }}</strong>
    </div>

    <!-- TONE SELECTOR BUTTONS -->
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: var(--ms-space-4);">
      <button
        v-for="tone in foundation.brandTones"
        :key="tone.id"
        class="ms-button ms-button--sm"
        :data-variant="foundation.activeColorTone === tone.id ? 'solid' : 'outline'"
        :data-tone="tone.id"
        @click="foundation.activeColorTone = tone.id"
      >
        <span :style="{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: tone.base, marginRight: '4px' }"></span>
        {{ tone.label }} ({{ tone.name }})
      </button>
    </div>

    <!-- ACTIVE TONE FULL SCALE (50 - 950) -->
    <div
      v-for="tone in foundation.brandTones"
      :key="tone.id"
      v-show="foundation.activeColorTone === tone.id"
      class="controls-card"
      style="margin-bottom: var(--ms-space-5); border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);"
    >
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ms-space-3);">
        <div>
          <h3 style="margin: 0; font-size: 1.2rem; color: var(--ms-color-text-primary);">
            Escala Tonal {{ tone.label }} — {{ tone.name }}
          </h3>
          <p style="margin: 2px 0 0; font-size: 0.8125rem; color: var(--ms-color-text-secondary);">
            {{ tone.desc }} Clique em qualquer stop para copiar o token CSS.
          </p>
        </div>
        <span class="ms-badge" :data-tone="tone.id" data-variant="solid">{{ tone.base }}</span>
      </div>

      <!-- SWATCHES GRID -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(95px, 1fr)); gap: 8px;">
        <div
          v-for="stop in tone.stops"
          :key="stop.stop"
          @click="foundation.copyToken('--ms-color-' + tone.id + (stop.isBase ? '' : '-' + stop.stop))"
          style="cursor: pointer; border-radius: var(--ms-radius-md); overflow: hidden; border: 1px solid var(--ms-color-border-subtle); transition: transform 0.15s ease;"
          :style="{ backgroundColor: stop.hex, color: stop.lightText ? '#ffffff' : '#0f172a' }"
        >
          <div style="padding: 12px 8px; min-height: 85px; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <span style="font-weight: 700; font-size: 0.875rem;">{{ stop.stop }}</span>
              <span v-if="stop.isBase" style="font-size: 0.625rem; background: rgba(0,0,0,0.25); color: #fff; padding: 1px 4px; border-radius: 3px;">BASE</span>
            </div>
            <div>
              <div style="font-family: var(--ms-font-mono); font-size: 0.6875rem; opacity: 0.9;">{{ stop.hex }}</div>
              <div style="font-size: 0.5625rem; opacity: 0.75; margin-top: 2px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                {{ stop.oklch }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DYNAMIC INTERACTIVE WCAG CONTRAST CALCULATOR -->
    <div class="controls-card" style="margin-bottom: var(--ms-space-5); border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title">🧮 Calculadora Interativa de Contraste WCAG 2.2</div>

      <!-- COLOR PICKERS & PRESETS -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--ms-space-4); margin-bottom: var(--ms-space-4);">
        <!-- BACKGROUND PICKER -->
        <div style="padding: var(--ms-space-3); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-sunken);">
          <label style="font-size: 0.8125rem; font-weight: 600; display: block; margin-bottom: 6px;">Cor de Fundo (Background):</label>
          <div style="display: flex; gap: 8px; align-items: center;">
            <input type="color" v-model="foundation.contrastBg" style="width: 44px; height: 38px; border: none; cursor: pointer; border-radius: 4px;" />
            <input type="text" class="ms-input ms-input--sm" v-model="foundation.contrastBg" style="flex: 1; font-family: var(--ms-font-mono);" />
          </div>
        </div>

        <!-- FOREGROUND PICKER -->
        <div style="padding: var(--ms-space-3); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-sunken);">
          <label style="font-size: 0.8125rem; font-weight: 600; display: block; margin-bottom: 6px;">Cor do Texto (Foreground):</label>
          <div style="display: flex; gap: 8px; align-items: center;">
            <input type="color" v-model="foundation.contrastFg" style="width: 44px; height: 38px; border: none; cursor: pointer; border-radius: 4px;" />
            <input type="text" class="ms-input ms-input--sm" v-model="foundation.contrastFg" style="flex: 1; font-family: var(--ms-font-mono);" />
          </div>
        </div>
      </div>

      <!-- QUICK PRESETS -->
      <div style="margin-bottom: var(--ms-space-4);">
        <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary); margin-bottom: 6px;">Pares Canônicos Prontos:</div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          <button class="ms-button ms-button--xs ms-button--outline" @click="foundation.applyContrastPreset('#ffffff', '#2e86de')">Primary no Branco</button>
          <button class="ms-button ms-button--xs ms-button--outline" @click="foundation.applyContrastPreset('#ffffff', '#222f3e')">Texto Primário no Branco</button>
          <button class="ms-button ms-button--xs ms-button--outline" @click="foundation.applyContrastPreset('#2e86de', '#ffffff')">Branco no Primary</button>
          <button class="ms-button ms-button--xs ms-button--outline" @click="foundation.applyContrastPreset('#ffffff', '#10ac84')">Success no Branco</button>
          <button class="ms-button ms-button--xs ms-button--outline" @click="foundation.applyContrastPreset('#ffffff', '#ee5253')">Danger no Branco</button>
          <button class="ms-button ms-button--xs ms-button--outline" @click="foundation.applyContrastPreset('#0f172a', '#f8fafc')">Branco em Modo Escuro</button>
        </div>
      </div>

      <!-- LIVE CONTRAST RATIO & BADGES -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--ms-space-3); margin-bottom: var(--ms-space-4);">
        <!-- RATIO CARD -->
        <div style="padding: var(--ms-space-4); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-subtle); text-align: center;">
          <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary); text-transform: uppercase; font-weight: 700;">Taxa de Contraste</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--ms-font-mono); color: var(--ms-color-text-primary); margin: 4px 0;">
            {{ foundation.contrastResult.ratio }}:1
          </div>
          <span class="ms-badge" :data-tone="foundation.contrastResult.passNormalAA ? 'success' : 'danger'" data-variant="soft">
            {{ foundation.contrastResult.passNormalAA ? '✓ Conforme AA' : '✗ Abaixo do Recomendado' }}
          </span>
        </div>

        <!-- NORMAL TEXT -->
        <div style="padding: var(--ms-space-3); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary);">Texto Normal (&lt; 18pt)</div>
          <div style="font-weight: 700; margin: 4px 0;">Mínimo 4.5:1</div>
          <span class="ms-badge ms-badge--sm" :data-tone="foundation.contrastResult.passNormalAA ? 'success' : 'danger'" data-variant="solid">
            {{ foundation.contrastResult.passNormalAA ? 'PASS (AA)' : 'FAIL' }}
          </span>
        </div>

        <!-- LARGE TEXT -->
        <div style="padding: var(--ms-space-3); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary);">Texto Grande (≥ 18pt / 14pt bold)</div>
          <div style="font-weight: 700; margin: 4px 0;">Mínimo 3.0:1</div>
          <span class="ms-badge ms-badge--sm" :data-tone="foundation.contrastResult.passLargeAA ? 'success' : 'danger'" data-variant="solid">
            {{ foundation.contrastResult.passLargeAA ? 'PASS (AA)' : 'FAIL' }}
          </span>
        </div>

        <!-- AAA ENHANCED -->
        <div style="padding: var(--ms-space-3); border-radius: var(--ms-radius-md); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-subtle);">
          <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary);">Conformidade Rigorosa AAA</div>
          <div style="font-weight: 700; margin: 4px 0;">Mínimo 7.0:1</div>
          <span class="ms-badge ms-badge--sm" :data-tone="foundation.contrastResult.passAAA ? 'success' : 'neutral'" data-variant="outline">
            {{ foundation.contrastResult.passAAA ? 'PASS (AAA)' : 'Não Conforme AAA' }}
          </span>
        </div>
      </div>

      <!-- VISUAL SPECIMEN IN CALCULATED COLORS -->
      <div
        :style="{ backgroundColor: foundation.contrastBg, color: foundation.contrastFg }"
        style="padding: var(--ms-space-5); border-radius: var(--ms-radius-lg); border: 1px solid var(--ms-color-border-subtle); transition: all 0.2s ease;"
      >
        <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 6px;">
          Exemplo de Título em Contraste Auditado
        </div>
        <p style="margin: 0 0 12px; font-size: 0.9375rem; line-height: 1.5;">
          Este bloco simula visualmente como as duas cores selecionadas interagem em um componente real de produção. A legibilidade é garantida quando respeitadas as razões da WCAG 2.2 AA.
        </p>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="border: 1px solid currentColor; padding: 4px 10px; border-radius: 4px; font-size: 0.8125rem;">Botão Contornado</span>
          <span style="font-size: 0.75rem; opacity: 0.8;">Razão real: {{ foundation.contrastResult.ratio }}:1</span>
        </div>
      </div>
    </div>

    <!-- SEMANTIC SURFACE TOKENS TABLE -->
    <div class="controls-card" style="margin-bottom: var(--ms-space-5); border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title">Tokens Semânticos de Superfície, Bordas e Texto</div>
      <table class="ms-table ms-table--variant-surface" style="width: 100%;">
        <thead>
          <tr class="ms-table__header-row">
            <th class="ms-table__header-cell">Token CSS</th>
            <th class="ms-table__header-cell">Nome Semântico</th>
            <th class="ms-table__header-cell">Finalidade</th>
            <th class="ms-table__header-cell">Amostra Clara</th>
            <th class="ms-table__header-cell">Amostra Escura</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tok in foundation.surfaceTokens" :key="tok.token" class="ms-table__row">
            <td class="ms-table__cell"><MsCode>{{ tok.token }}</MsCode></td>
            <td class="ms-table__cell" style="font-weight: 600;">{{ tok.name }}</td>
            <td class="ms-table__cell" style="font-size: 0.8125rem; color: var(--ms-color-text-secondary);">{{ tok.desc }}</td>
            <td class="ms-table__cell">
              <span :style="{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: tok.lightColor }"></span>
            </td>
            <td class="ms-table__cell">
              <span :style="{ display: 'inline-block', width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #444', backgroundColor: tok.darkColor }"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CODE SNIPPET -->
    <div class="controls-card" style="border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title">Exemplo de Aplicação em CSS</div>
      <MsCodeBlock :code="foundation.colorsSnippetCode" language="css" filename="theme-custom.css" :show-line-numbers="true" />
    </div>
  </div>

  <!-- TAB: GRID & LAYOUT (12-COL) -->
  <div v-if="activeTab === 'grid'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Grid & Layout Responsivo de 12 Colunas</h2>
        <div class="panel-subtitle">Sistema estrutural unificado (&lt;MsRow&gt;, &lt;MsCol&gt;) com suporte a 12 colunas, offsets, gutters semânticos e guias visuais interativas.</div>
      </div>
      <div style="display: flex; gap: var(--ms-space-2);">
        <span class="ms-badge" data-tone="primary" data-variant="solid">12 Colunas</span>
        <span class="ms-badge" data-tone="success" data-variant="soft">Flexbox & Subgrid</span>
      </div>
    </div>

    <!-- INTERACTIVE 12-COLUMN VISUALIZER -->
    <div class="controls-card" style="margin-bottom: var(--ms-space-5); border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title" style="display: flex; justify-content: space-between; align-items: center;">
        <span>📐 Visualizador Interativo de 12 Colunas</span>
        <button
          class="ms-button ms-button--xs"
          :data-variant="foundation.showGridGuides ? 'solid' : 'outline'"
          data-tone="danger"
          @click="foundation.showGridGuides = !foundation.showGridGuides"
        >
          <span>📏</span> {{ foundation.showGridGuides ? 'Ocultar Guias de Coluna' : 'Exibir Guias de Coluna (12x)' }}
        </button>
      </div>

      <!-- PRESET BUTTONS & CONTROLS -->
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: var(--ms-space-4); align-items: center;">
        <span style="font-size: 0.75rem; font-weight: 600; color: var(--ms-color-text-secondary);">Layouts Prontos:</span>
        <button class="ms-button ms-button--xs" :data-variant="foundation.gridPreset === '12' ? 'solid' : 'outline'" data-tone="primary" @click="foundation.setGridPreset('12')">1x (12)</button>
        <button class="ms-button ms-button--xs" :data-variant="foundation.gridPreset === '6-6' ? 'solid' : 'outline'" data-tone="primary" @click="foundation.setGridPreset('6-6')">2x (6 + 6)</button>
        <button class="ms-button ms-button--xs" :data-variant="foundation.gridPreset === '4-4-4' ? 'solid' : 'outline'" data-tone="primary" @click="foundation.setGridPreset('4-4-4')">3x (4 + 4 + 4)</button>
        <button class="ms-button ms-button--xs" :data-variant="foundation.gridPreset === '3-3-3-3' ? 'solid' : 'outline'" data-tone="primary" @click="foundation.setGridPreset('3-3-3-3')">4x (3 + 3 + 3 + 3)</button>
        <button class="ms-button ms-button--xs" :data-variant="foundation.gridPreset === '8-4' ? 'solid' : 'outline'" data-tone="accent" @click="foundation.setGridPreset('8-4')">Dashboard (8 + 4)</button>
        <button class="ms-button ms-button--xs" :data-variant="foundation.gridPreset === 'offset' ? 'solid' : 'outline'" data-tone="neutral" @click="foundation.setGridPreset('offset')">Offset (span 8, off 2)</button>
      </div>

      <!-- GUTTER & ALIGNMENT DIALS -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--ms-space-3); padding: var(--ms-space-3); background: var(--ms-color-surface-sunken); border-radius: var(--ms-radius-md); margin-bottom: var(--ms-space-4);">
        <div>
          <label style="font-size: 0.75rem; color: var(--ms-color-text-secondary); display: block; margin-bottom: 4px;">Espaçamento (Gutter):</label>
          <select class="prop-select" v-model="foundation.gridGutter" style="width: 100%;">
            <option value="none">none (0px)</option>
            <option value="xs">xs (8px)</option>
            <option value="sm">sm (12px)</option>
            <option value="md">md (16px - Padrão)</option>
            <option value="lg">lg (24px)</option>
            <option value="xl">xl (32px)</option>
          </select>
        </div>
        <div>
          <label style="font-size: 0.75rem; color: var(--ms-color-text-secondary); display: block; margin-bottom: 4px;">Alinhamento Horizontal (Justify):</label>
          <select class="prop-select" v-model="foundation.gridJustify" style="width: 100%;">
            <option value="start">start (Início)</option>
            <option value="center">center (Centro)</option>
            <option value="end">end (Fim)</option>
            <option value="between">between (Espaço Entre)</option>
            <option value="around">around (Espaço Em Torno)</option>
          </select>
        </div>
        <div>
          <label style="font-size: 0.75rem; color: var(--ms-color-text-secondary); display: block; margin-bottom: 4px;">Alinhamento Vertical (Align):</label>
          <select class="prop-select" v-model="foundation.gridAlign" style="width: 100%;">
            <option value="top">top (Topo)</option>
            <option value="middle">middle (Meio)</option>
            <option value="bottom">bottom (Base)</option>
          </select>
        </div>
      </div>

      <!-- CANVAS RENDER WITH OPTIONAL GUIDES -->
      <div style="position: relative; padding: var(--ms-space-4); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); overflow: hidden;">
        <!-- 12-COLUMN OVERLAY GUIDES -->
        <div
          v-if="foundation.showGridGuides"
          style="position: absolute; inset: 0; display: grid; grid-template-columns: repeat(12, 1fr); gap: 8px; pointer-events: none; padding: var(--ms-space-4); z-index: 1;"
        >
          <div
            v-for="n in 12"
            :key="n"
            style="background: rgba(238, 82, 83, 0.08); border-left: 1px dashed rgba(238, 82, 83, 0.3); border-right: 1px dashed rgba(238, 82, 83, 0.3); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 4px; font-size: 0.625rem; font-family: var(--ms-font-mono); color: var(--ms-color-danger);"
          >
            {{ n }}
          </div>
        </div>

        <!-- ACTUAL MS-ROW / MS-COL RENDER -->
        <div style="position: relative; z-index: 2;">
          <MsRow :gutter="foundation.gridGutter" :justify="foundation.gridJustify" :align="foundation.gridAlign">
            <MsCol
              v-for="(col, idx) in foundation.gridInteractiveCols"
              :key="idx"
              :span="col.span"
              :offset="col.offset || 0"
            >
              <div
                style="padding: var(--ms-space-4); background: color-mix(in oklch, var(--ms-color-primary) 12%, var(--ms-color-surface-raised)); border: 1px solid color-mix(in oklch, var(--ms-color-primary) 30%, transparent); border-radius: var(--ms-radius-md); text-align: center; color: var(--ms-color-text-primary);"
              >
                <div style="font-weight: 700; font-size: 0.9375rem;">{{ col.label }}</div>
                <div style="font-family: var(--ms-font-mono); font-size: 0.75rem; color: var(--ms-color-primary); margin-top: 2px;">
                  span="{{ col.span }}"{{ col.offset ? ' offset="' + col.offset + '"' : '' }}
                </div>
              </div>
            </MsCol>
          </MsRow>
        </div>
      </div>

      <!-- CODE SNIPPET -->
      <div style="margin-top: var(--ms-space-4);">
        <div style="font-size: 0.75rem; color: var(--ms-color-text-secondary); margin-bottom: 6px; font-weight: 600;">
          Código Vue SFC para este layout:
        </div>
        <MsCodeBlock :code="foundation.gridSnippetCode" language="vue" filename="ResponsiveLayout.vue" :show-line-numbers="true" />
      </div>
    </div>

    <!-- BREAKPOINTS REFERENCE CARD -->
    <div class="controls-card" style="border: 1px solid var(--ms-color-border-subtle); background: var(--ms-color-surface-raised);">
      <div class="controls-card-title">Breakpoints Canônicos de Design Responsivo</div>
      <table class="ms-table ms-table--variant-surface" style="width: 100%;">
        <thead>
          <tr class="ms-table__header-row">
            <th class="ms-table__header-cell">Breakpoint</th>
            <th class="ms-table__header-cell">Largura Mínima</th>
            <th class="ms-table__header-cell">Dispositivo Alvo</th>
            <th class="ms-table__header-cell">Sintaxe Prop / Classe</th>
          </tr>
        </thead>
        <tbody>
          <tr class="ms-table__row">
            <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-neutral ms-badge--variant-soft">xs</span></td>
            <td class="ms-table__cell">&lt; 640px</td>
            <td class="ms-table__cell">Smartphones verticais</td>
            <td class="ms-table__cell"><MsCode>:span="12"</MsCode> • <MsCode>.ms-col--span-12</MsCode></td>
          </tr>
          <tr class="ms-table__row">
            <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-info ms-badge--variant-soft">sm</span></td>
            <td class="ms-table__cell">≥ 640px</td>
            <td class="ms-table__cell">Smartphones horizontais e phablets</td>
            <td class="ms-table__cell"><MsCode>:sm="6"</MsCode> • <MsCode>.ms-col--sm-6</MsCode></td>
          </tr>
          <tr class="ms-table__row">
            <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-primary ms-badge--variant-soft">md</span></td>
            <td class="ms-table__cell">≥ 768px</td>
            <td class="ms-table__cell">Tablets verticais e portáteis</td>
            <td class="ms-table__cell"><MsCode>:md="4"</MsCode> • <MsCode>.ms-col--md-4</MsCode></td>
          </tr>
          <tr class="ms-table__row">
            <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-accent ms-badge--variant-soft">lg</span></td>
            <td class="ms-table__cell">≥ 1024px</td>
            <td class="ms-table__cell">Laptops e desktops corporativos</td>
            <td class="ms-table__cell"><MsCode>:lg="3"</MsCode> • <MsCode>.ms-col--lg-3</MsCode></td>
          </tr>
          <tr class="ms-table__row">
            <td class="ms-table__cell"><span class="ms-badge ms-badge--tone-success ms-badge--variant-soft">xl</span></td>
            <td class="ms-table__cell">≥ 1280px</td>
            <td class="ms-table__cell">Monitores ultrawide e alta resolução</td>
            <td class="ms-table__cell"><MsCode>:xl="2"</MsCode> • <MsCode>.ms-col--xl-2</MsCode></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- TAB: THEMES & DIALS -->
  <div v-if="activeTab === 'dials'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Temas & Dials Visuais</h2>
        <div class="panel-subtitle">Experimente os 10 temas oficiais em tempo real com escopos locais isolados (&lt;MsThemeScope&gt;) ou aplicação global.</div>
      </div>
    </div>

    <div class="playground-grid">
      <div class="canvas-area">
        <!-- SCOPED THEMED CONTAINER -->
        <ms-theme-scope
          :theme="foundation.selectedTheme"
          :color-mode="foundation.selectedMode"
          :density="foundation.selectedDensity"
          :radius="foundation.selectedRadius"
          style="display: block; width: 100%;"
        >
          <div style="padding: var(--ms-space-6); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-default); border-radius: var(--ms-radius-xl); box-shadow: var(--ms-elevation-card); transition: all 0.2s ease;">
            <!-- HEADER -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ms-space-4); border-bottom: 1px solid var(--ms-color-border-subtle); padding-bottom: var(--ms-space-3);">
              <div>
                <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ms-color-text-muted); font-weight: 700;">Ambiente Temático Ativo</span>
                <h3 style="margin: 2px 0 0; font-size: 1.35rem; color: var(--ms-color-text-primary); text-transform: capitalize;">
                  Tema: {{ foundation.selectedTheme }}
                </h3>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="ms-badge" data-variant="solid" data-tone="primary" data-pill>
                  {{ String(foundation.selectedMode).toUpperCase() }}
                </span>
                <span class="ms-badge" data-variant="soft" data-tone="neutral">
                  {{ foundation.selectedDensity }}
                </span>
                <span class="ms-badge" data-variant="outline" data-tone="accent">
                  {{ foundation.selectedRadius }}
                </span>
              </div>
            </div>

            <!-- INTERACTIVE CARDS & FORM ELEMENTS -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ms-space-4);">
              <!-- CARD 1: FORM ELEMENTS -->
              <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
                <h4 style="margin: 0 0 var(--ms-space-2); color: var(--ms-color-text-primary);">Controles de Formulário</h4>
                <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0 0 var(--ms-space-3);">
                  Inputs, selects e foco adaptados às variáveis do tema selecionado.
                </p>

                <div style="display: flex; flex-direction: column; gap: 10px;">
                  <input
                    type="text"
                    class="ms-input"
                    value="Exemplo de texto corporativo..."
                    placeholder="Digite aqui..."
                  />

                  <select class="prop-select" style="width: 100%;">
                    <option>Opção 1 - Configuração Padrão</option>
                    <option>Opção 2 - Otimização de Performance</option>
                    <option>Opção 3 - Modo Alta Precisão</option>
                  </select>

                  <div style="display: flex; gap: 8px; margin-top: 4px;">
                    <span class="ms-tag" data-tone="primary" data-variant="soft">Tag Primária</span>
                    <span class="ms-tag" data-tone="success" data-variant="soft">Online</span>
                    <span class="ms-tag" data-tone="warning" data-variant="soft">Pendente</span>
                  </div>
                </div>
              </div>

              <!-- CARD 2: ACTION BUTTONS -->
              <div style="padding: var(--ms-space-4); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); background: var(--ms-color-surface-raised);">
                <h4 style="margin: 0 0 var(--ms-space-2); color: var(--ms-color-text-primary);">Hierarquia de Botões</h4>
                <p style="font-size: 0.8125rem; color: var(--ms-color-text-secondary); margin: 0 0 var(--ms-space-3);">
                  Botões com preenchimento sólido, contorno, tons semânticos e estado hover.
                </p>

                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  <button class="ms-button" data-variant="solid" data-tone="primary">Ação Primária</button>
                  <button class="ms-button" data-variant="outline" data-tone="neutral">Secundário</button>
                  <button class="ms-button" data-variant="soft" data-tone="success">Aprovado</button>
                  <button class="ms-button" data-variant="ghost" data-tone="danger">Excluir</button>
                </div>

                <div style="margin-top: var(--ms-space-3);">
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--ms-color-text-muted); margin-bottom: 4px;">
                    <span>Capacidade do Servidor</span>
                    <span>78%</span>
                  </div>
                  <div class="ms-progress" style="width: 100%;">
                    <div class="ms-progress__bar" style="width: 78%; background-color: var(--ms-color-primary);"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CODE PREVIEW USING MS-CODE-BLOCK -->
            <div style="margin-top: var(--ms-space-4);">
              <span style="font-size: 0.75rem; color: var(--ms-color-text-muted); font-weight: 600;">Código Vue SFC para este Escopo Temático:</span>
              <div style="margin-top: 6px;">
                <MsCodeBlock :code="foundation.themeScopeSnippetCode" language="vue" filename="ScopedSection.vue" :show-line-numbers="true" />
              </div>
            </div>
          </div>
        </ms-theme-scope>
      </div>

      <!-- CONTROLS CARD -->
      <div class="controls-card">
        <div class="controls-card-title">Dials do Design System</div>

        <!-- THEME SELECTOR -->
        <div class="prop-row">
          <label class="prop-label">Tema Oficial (data-ms-theme)</label>
          <select class="prop-select" v-model="foundation.selectedTheme">
            <option v-for="t in foundation.themeList" :key="t.value" :value="t.value">
              {{ t.label }}
            </option>
          </select>
        </div>

        <!-- COLOR MODE -->
        <div class="prop-row">
          <label class="prop-label">Modo de Cor (color-mode)</label>
          <select class="prop-select" v-model="foundation.selectedMode">
            <option value="light">Light Mode (Modo Claro)</option>
            <option value="dark">Dark Mode (Modo Escuro)</option>
          </select>
        </div>

        <!-- DENSITY -->
        <div class="prop-row">
          <label class="prop-label">Densidade (density)</label>
          <select class="prop-select" v-model="foundation.selectedDensity">
            <option value="compact">Compact (Alta densidade)</option>
            <option value="comfortable">Comfortable (Padrão)</option>
            <option value="spacious">Spacious (Espaçoso)</option>
          </select>
        </div>

        <!-- RADIUS -->
        <div class="prop-row">
          <label class="prop-label">Raio de Borda (radius dial)</label>
          <select class="prop-select" v-model="foundation.selectedRadius">
            <option value="sharp">Sharp (0px - Reto)</option>
            <option value="subtle">Subtle (4px - Sutil)</option>
            <option value="medium">Medium (8px - Equilibrado)</option>
            <option value="rounded">Rounded (16px - Arredondado)</option>
          </select>
        </div>

        <!-- ACTION TO APPLY GLOBALLY -->
        <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--ms-color-border-subtle);">
          <button
            class="ms-button"
            data-variant="solid"
            data-tone="primary"
            style="width: 100%;"
            @click="foundation.applyGlobally()"
          >
            🌐 Aplicar Tema Globalmente
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: UTILITIES & VARIABLES -->
  <div v-if="activeTab === 'utilities'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Utilitários CSS & Helpers</h2>
        <div class="panel-subtitle">Classes atômicas de layout, espaçamento, tipografia e flexbox sem !important para composição rápida.</div>
      </div>
    </div>

    <div class="playground-grid" style="grid-template-columns: 1fr;">
      <div class="canvas-area">
        <div class="controls-card">
          <div class="controls-card-title">Flexbox & Alinhamentos (.ms-u-flex .ms-u-justify-between)</div>
          <div class="ms-u-flex ms-u-items-center ms-u-justify-between ms-u-p-4 ms-u-border ms-u-rounded-lg">
            <span>Alinhado à Esquerda</span>
            <div class="ms-u-flex ms-u-gap-2">
              <span class="ms-badge ms-badge--tone-info">Flex Item 1</span>
              <span class="ms-badge ms-badge--tone-success">Flex Item 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: RTL -->
  <div v-if="activeTab === 'rtl'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Suporte RTL (Right-to-Left) Bidirecional</h2>
        <div class="panel-subtitle">Adaptação automática para idiomas árabes e hebraicos através de propriedades lógicas do CSS.</div>
      </div>
      <button class="ms-button ms-button--outline ms-button--tone-primary" @click="foundation.toggleRtl()">
        Alternar Direção: {{ String(foundation.rtlDirection || 'ltr').toUpperCase() }}
      </button>
    </div>

    <div class="playground-grid" style="grid-template-columns: 1fr;">
      <div class="canvas-area">
        <div :dir="foundation.rtlDirection" style="padding: var(--ms-space-6); background: var(--ms-color-surface-default); border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg);">
          <h3 style="margin-top: 0;">لوحة التحكم في التصميم (Painel de Controle)</h3>
          <p class="ms-u-text-muted">
            Este container está sob <code>dir="{{ foundation.rtlDirection }}"</code>. Observe como os ícones, textos e botões fluem organicamente.
          </p>
          <div style="display: flex; gap: var(--ms-space-3); align-items: center;">
            <button class="ms-button ms-button--solid ms-button--tone-primary">
              <span class="ms-u-rtl-flip">🚀</span> إرسال (Enviar)
            </button>
            <span class="ms-badge ms-badge--tone-success">متصل (Online)</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB: CUSTOMIZATION -->
  <div v-if="activeTab === 'customization'">
    <div class="panel-header">
      <div>
        <h2 class="panel-title">Customização & Playground Dinâmico</h2>
        <div class="panel-subtitle">Personalize a identidade visual e exporte variáveis CSS customizadas.</div>
      </div>
    </div>

    <div class="playground-grid">
      <div class="canvas-area">
        <div class="canvas-preview" :style="foundation.customStyles">
          <div style="padding: 24px; border: 1px solid var(--ms-color-border-subtle); border-radius: var(--ms-radius-lg); width: 100%; max-width: 440px; background: var(--ms-color-surface-raised);">
            <h3>Identidade Visual Customizada</h3>
            <p class="ms-u-text-muted">Veja como o tom primário customizado afeta os componentes.</p>
            <button class="ms-button ms-button--solid ms-button--tone-primary" style="width: 100%;">
              Ação com Cor Personalizada
            </button>
          </div>
        </div>
      </div>

      <div class="controls-card">
        <div class="controls-card-title">Controles de Marca</div>
        <div class="prop-row">
          <label class="prop-label">Cor Primária:</label>
          <input type="color" v-model="foundation.customPrimary" />
        </div>
        <div class="prop-row">
          <label class="prop-label">Raio de Borda (px):</label>
          <input type="number" class="prop-input" v-model.number="foundation.customRadius" />
        </div>
        <div style="margin-top: 16px;">
          <MsCodeBlock :code="foundation.customCssCode" language="css" filename="custom-tokens.css" :show-line-numbers="true" />
        </div>
      </div>
    </div>
  </div>
`;
