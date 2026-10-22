import { onMounted, reactive, watch } from "vue";

export interface SitePrefs {
  theme: string;
  density: "compact" | "comfortable" | "spacious";
  radius: "sharp" | "subtle" | "medium" | "rounded";
  contrast: "normal" | "high";
}

export const PREFS_KEY = "ms-docs-prefs";
export const DEFAULT_PREFS: SitePrefs = {
  theme: "magic",
  density: "comfortable",
  radius: "medium",
  contrast: "normal",
};

// One shared store: SSR and the first client render use the defaults (no hydration
// mismatch); stored preferences are applied after mount (the head script avoids a flash).
const prefs = reactive<SitePrefs>({ ...DEFAULT_PREFS });
let loaded = false;

export function useSitePrefs(): SitePrefs {
  onMounted(() => {
    if (loaded) return;
    loaded = true;
    try {
      const stored = JSON.parse(
        localStorage.getItem(PREFS_KEY) ?? "null",
      ) as Partial<SitePrefs> | null;
      if (stored) Object.assign(prefs, stored);
    } catch {
      /* storage unavailable: keep defaults */
    }
    watch(prefs, (value) => {
      try {
        localStorage.setItem(PREFS_KEY, JSON.stringify(value));
      } catch {
        /* ignore */
      }
    });
  });
  return prefs;
}

export function resetSitePrefs(): void {
  Object.assign(prefs, DEFAULT_PREFS);
}

/** Inline <head> script: applies stored preferences before the first paint. */
export const NO_FLASH_SCRIPT = `(function(){try{var d=document.documentElement,p=JSON.parse(localStorage.getItem("${PREFS_KEY}")||"{}");var a=localStorage.getItem("vitepress-theme-appearance");var dark=a==="dark"||((!a||a==="auto")&&matchMedia("(prefers-color-scheme: dark)").matches);d.setAttribute("data-ms-theme",p.theme||"magic");d.setAttribute("data-ms-color-mode",dark?"dark":"light");d.setAttribute("data-ms-density",p.density||"comfortable");d.setAttribute("data-ms-radius",p.radius||"medium");d.setAttribute("data-ms-contrast",p.contrast||"normal")}catch(e){}})();`;
