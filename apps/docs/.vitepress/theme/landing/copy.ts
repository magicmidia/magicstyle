import type { SiteLang } from "../i18n/ui.ts";

export interface LandingCopy {
  hero: {
    badge: string;
    title: string;
    accent: string;
    subtitle: string;
    start: string;
    browse: string;
  };
  preview: {
    signUp: string;
    signUpHint: string;
    email: string;
    password: string;
    create: string;
    orContinue: string;
    revenue: string;
    revenueDelta: string;
    goal: string;
    team: string;
    teamHint: string;
    notifications: string;
    notificationsHint: string;
    payments: string;
    status: { paid: string; pending: string; failed: string };
    tabs: { overview: string; analytics: string; reports: string };
  };
  lab: {
    eyebrow: string;
    title: string;
    subtitle: string;
    theme: string;
    mode: string;
    light: string;
    dark: string;
    radius: string;
    density: string;
  };
  features: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  install: {
    eyebrow: string;
    title: string;
    subtitle: string;
    vite: string;
    inertia: string;
    css: string;
  };
  stats: { components: string; themes: string; tokens: string; languages: string; tests: string };
  cta: { title: string; subtitle: string; start: string; github: string };
}

export const LANDING: Record<SiteLang, LandingCopy> = {
  "pt-BR": {
    hero: {
      badge: "95 componentes · 10 temas · pt-BR, en, es",
      title: "Componentes Vue acessíveis,",
      accent: "prontos para produção.",
      subtitle:
        "Uma biblioteca Vue 3 com visual no estilo shadcn/ui, temas trocáveis em tempo real, tokens DTCG e SSR para Laravel + Inertia. Tudo tipado e acessível.",
      start: "Começar",
      browse: "Ver componentes",
    },
    preview: {
      signUp: "Criar conta",
      signUpHint: "Informe seu e-mail para começar.",
      email: "voce@empresa.com",
      password: "Senha",
      create: "Criar conta",
      orContinue: "Continuar com GitHub",
      revenue: "Receita do mês",
      revenueDelta: "+20,1% em relação ao mês anterior",
      goal: "Meta trimestral",
      team: "Equipe",
      teamHint: "Convide colegas para colaborar.",
      notifications: "Notificações por e-mail",
      notificationsHint: "Resumo semanal da atividade.",
      payments: "Pagamentos recentes",
      status: { paid: "Pago", pending: "Pendente", failed: "Falhou" },
      tabs: { overview: "Visão geral", analytics: "Análises", reports: "Relatórios" },
    },
    lab: {
      eyebrow: "Laboratório de temas",
      title: "Um contrato de 27 variáveis. Dez temas. Zero recompilação.",
      subtitle:
        "Troque tema, modo, raio e densidade: os mesmos componentes se adaptam na hora, com contraste AA verificado em todos os temas.",
      theme: "Tema",
      mode: "Modo",
      light: "Claro",
      dark: "Escuro",
      radius: "Raio",
      density: "Densidade",
    },
    features: {
      eyebrow: "Por que Magic-Style",
      title: "Tudo o que um design system de verdade precisa",
      items: [
        {
          title: "Acessível por padrão",
          text: "Padrões WAI-ARIA, foco visível com contraste 3:1, teclado completo e testes com axe.",
        },
        {
          title: "Temas em tempo real",
          text: "10 temas oficiais e um contrato pequeno para criar o seu, com validação de contraste.",
        },
        {
          title: "SSR e Laravel + Inertia",
          text: "Renderização no servidor sem erros de hidratação e modo escuro sem piscar.",
        },
        {
          title: "Três idiomas",
          text: "Textos dos componentes em português, inglês e espanhol, e datas com Intl.",
        },
        {
          title: "RTL nativo",
          text: "Propriedades lógicas em todo o CSS, com carrossel e marquee espelhados.",
        },
        {
          title: "Tokens DTCG",
          text: "Primitivas OKLCH dentro do sRGB, tipografia em rem e tokens tipados.",
        },
        {
          title: "Só CSS, se preferir",
          text: "O pacote @magic-style/css funciona sem Vue, em camadas @layer fáceis de sobrescrever.",
        },
        {
          title: "TypeScript estrito",
          text: "Props, eventos e slots tipados, com documentação gerada do código-fonte.",
        },
      ],
    },
    install: {
      eyebrow: "Instalação",
      title: "Do zero ao primeiro componente em um minuto",
      subtitle: "Funciona com Vite, Laravel + Inertia (com SSR) ou apenas CSS.",
      vite: "Vue 3 + Vite",
      inertia: "Laravel + Inertia",
      css: "Só CSS",
    },
    stats: {
      components: "componentes",
      themes: "temas oficiais",
      tokens: "tokens DTCG",
      languages: "idiomas",
      tests: "testes automatizados",
    },
    cta: {
      title: "Comece a construir hoje",
      subtitle: "Código aberto, licença MIT e pronto para o seu próximo projeto.",
      start: "Ler a documentação",
      github: "Ver no GitHub",
    },
  },
  "en-US": {
    hero: {
      badge: "95 components · 10 themes · pt-BR, en, es",
      title: "Accessible Vue components,",
      accent: "ready for production.",
      subtitle:
        "A Vue 3 library with a shadcn/ui-style look, live-switchable themes, DTCG tokens and SSR for Laravel + Inertia. Fully typed and accessible.",
      start: "Get started",
      browse: "Browse components",
    },
    preview: {
      signUp: "Create an account",
      signUpHint: "Enter your email to get started.",
      email: "you@company.com",
      password: "Password",
      create: "Create account",
      orContinue: "Continue with GitHub",
      revenue: "Monthly revenue",
      revenueDelta: "+20.1% from last month",
      goal: "Quarterly goal",
      team: "Team",
      teamHint: "Invite teammates to collaborate.",
      notifications: "Email notifications",
      notificationsHint: "Weekly activity digest.",
      payments: "Recent payments",
      status: { paid: "Paid", pending: "Pending", failed: "Failed" },
      tabs: { overview: "Overview", analytics: "Analytics", reports: "Reports" },
    },
    lab: {
      eyebrow: "Theme lab",
      title: "One 27-variable contract. Ten themes. Zero rebuilds.",
      subtitle:
        "Switch theme, mode, radius and density: the same components adapt instantly, with AA contrast verified in every theme.",
      theme: "Theme",
      mode: "Mode",
      light: "Light",
      dark: "Dark",
      radius: "Radius",
      density: "Density",
    },
    features: {
      eyebrow: "Why Magic-Style",
      title: "Everything a real design system needs",
      items: [
        {
          title: "Accessible by default",
          text: "WAI-ARIA patterns, 3:1 visible focus, full keyboard support and axe tests.",
        },
        {
          title: "Live theming",
          text: "10 official themes and a small contract to build your own, with contrast validation.",
        },
        {
          title: "SSR and Laravel + Inertia",
          text: "Server rendering without hydration mismatches and flash-free dark mode.",
        },
        {
          title: "Three languages",
          text: "Component strings in Portuguese, English and Spanish, and Intl-based dates.",
        },
        {
          title: "Native RTL",
          text: "Logical properties across the CSS, with mirrored carousel and marquee.",
        },
        {
          title: "DTCG tokens",
          text: "sRGB-safe OKLCH primitives, rem typography and typed tokens.",
        },
        {
          title: "CSS-only, if you prefer",
          text: "@magic-style/css works without Vue, in @layer cascade layers that are easy to override.",
        },
        {
          title: "Strict TypeScript",
          text: "Typed props, events and slots, with docs generated from the source.",
        },
      ],
    },
    install: {
      eyebrow: "Installation",
      title: "From zero to your first component in a minute",
      subtitle: "Works with Vite, Laravel + Inertia (with SSR) or plain CSS.",
      vite: "Vue 3 + Vite",
      inertia: "Laravel + Inertia",
      css: "CSS only",
    },
    stats: {
      components: "components",
      themes: "official themes",
      tokens: "DTCG tokens",
      languages: "languages",
      tests: "automated tests",
    },
    cta: {
      title: "Start building today",
      subtitle: "Open source, MIT licensed and ready for your next project.",
      start: "Read the docs",
      github: "View on GitHub",
    },
  },
  "es-ES": {
    hero: {
      badge: "95 componentes · 10 temas · pt-BR, en, es",
      title: "Componentes Vue accesibles,",
      accent: "listos para producción.",
      subtitle:
        "Una biblioteca Vue 3 con estilo shadcn/ui, temas intercambiables en tiempo real, tokens DTCG y SSR para Laravel + Inertia. Totalmente tipada y accesible.",
      start: "Comenzar",
      browse: "Ver componentes",
    },
    preview: {
      signUp: "Crear cuenta",
      signUpHint: "Ingresa tu correo para comenzar.",
      email: "tu@empresa.com",
      password: "Contraseña",
      create: "Crear cuenta",
      orContinue: "Continuar con GitHub",
      revenue: "Ingresos del mes",
      revenueDelta: "+20,1 % respecto al mes anterior",
      goal: "Meta trimestral",
      team: "Equipo",
      teamHint: "Invita a tus colegas a colaborar.",
      notifications: "Notificaciones por correo",
      notificationsHint: "Resumen semanal de actividad.",
      payments: "Pagos recientes",
      status: { paid: "Pagado", pending: "Pendiente", failed: "Fallido" },
      tabs: { overview: "Resumen", analytics: "Análisis", reports: "Informes" },
    },
    lab: {
      eyebrow: "Laboratorio de temas",
      title: "Un contrato de 27 variables. Diez temas. Cero recompilaciones.",
      subtitle:
        "Cambia tema, modo, radio y densidad: los mismos componentes se adaptan al instante, con contraste AA verificado en todos los temas.",
      theme: "Tema",
      mode: "Modo",
      light: "Claro",
      dark: "Oscuro",
      radius: "Radio",
      density: "Densidad",
    },
    features: {
      eyebrow: "Por qué Magic-Style",
      title: "Todo lo que necesita un sistema de diseño de verdad",
      items: [
        {
          title: "Accesible por defecto",
          text: "Patrones WAI-ARIA, foco visible con contraste 3:1, teclado completo y pruebas con axe.",
        },
        {
          title: "Temas en tiempo real",
          text: "10 temas oficiales y un contrato pequeño para crear el tuyo, con validación de contraste.",
        },
        {
          title: "SSR y Laravel + Inertia",
          text: "Renderizado en servidor sin errores de hidratación y modo oscuro sin parpadeo.",
        },
        {
          title: "Tres idiomas",
          text: "Textos de los componentes en portugués, inglés y español, y fechas con Intl.",
        },
        {
          title: "RTL nativo",
          text: "Propiedades lógicas en todo el CSS, con carrusel y marquee reflejados.",
        },
        {
          title: "Tokens DTCG",
          text: "Primitivas OKLCH dentro de sRGB, tipografía en rem y tokens tipados.",
        },
        {
          title: "Solo CSS, si lo prefieres",
          text: "@magic-style/css funciona sin Vue, en capas @layer fáciles de sobrescribir.",
        },
        {
          title: "TypeScript estricto",
          text: "Props, eventos y slots tipados, con documentación generada desde el código.",
        },
      ],
    },
    install: {
      eyebrow: "Instalación",
      title: "De cero a tu primer componente en un minuto",
      subtitle: "Funciona con Vite, Laravel + Inertia (con SSR) o solo CSS.",
      vite: "Vue 3 + Vite",
      inertia: "Laravel + Inertia",
      css: "Solo CSS",
    },
    stats: {
      components: "componentes",
      themes: "temas oficiales",
      tokens: "tokens DTCG",
      languages: "idiomas",
      tests: "pruebas automatizadas",
    },
    cta: {
      title: "Empieza a construir hoy",
      subtitle: "Código abierto, licencia MIT y listo para tu próximo proyecto.",
      start: "Leer la documentación",
      github: "Ver en GitHub",
    },
  },
};
