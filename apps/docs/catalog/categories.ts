import type { Category } from "./types.ts";

export const CATEGORIES: Category[] = [
  { id: "actions", title: { "pt-BR": "Ações", "en-US": "Actions", "es-ES": "Acciones" } },
  { id: "forms", title: { "pt-BR": "Formulários", "en-US": "Forms", "es-ES": "Formularios" } },
  {
    id: "pickers",
    title: { "pt-BR": "Seletores", "en-US": "Pickers", "es-ES": "Selectores" },
  },
  {
    id: "overlays",
    title: { "pt-BR": "Sobreposições", "en-US": "Overlays", "es-ES": "Superposiciones" },
  },
  {
    id: "feedback",
    title: { "pt-BR": "Feedback", "en-US": "Feedback", "es-ES": "Retroalimentación" },
  },
  {
    id: "navigation",
    title: { "pt-BR": "Navegação", "en-US": "Navigation", "es-ES": "Navegación" },
  },
  {
    id: "layout",
    title: {
      "pt-BR": "Layout e superfícies",
      "en-US": "Layout & surfaces",
      "es-ES": "Diseño y superficies",
    },
  },
  {
    id: "data",
    title: { "pt-BR": "Dados e conteúdo", "en-US": "Data & content", "es-ES": "Datos y contenido" },
  },
];
