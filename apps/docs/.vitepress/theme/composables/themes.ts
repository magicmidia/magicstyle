/** The 10 official themes (names match packages/internal/themes/src/themes/*.json). */
export const THEMES = [
  { name: "magic", label: "Magic" },
  { name: "shadcn", label: "Shadcn" },
  { name: "graphite", label: "Graphite" },
  { name: "vercel", label: "Vercel" },
  { name: "linear", label: "Linear" },
  { name: "github", label: "GitHub" },
  { name: "supabase", label: "Supabase" },
  { name: "material", label: "Material" },
  { name: "bootstrap", label: "Bootstrap" },
  { name: "nord", label: "Nord" },
] as const;

export type ThemeName = (typeof THEMES)[number]["name"];
