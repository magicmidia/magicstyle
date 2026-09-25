import { computed, type ComputedRef } from "vue";
import { useData } from "vitepress";
import { siteLang, type SiteLang } from "../i18n/ui.ts";

export type DemoStrings<K extends string = string> = Record<SiteLang, Record<K, string>>;

/**
 * Demo copy for the current page locale. In templates use only `{{ t.key }}` or
 * `:attr="t.key"` — the markdown plugin inlines those as literals in the displayed code.
 */
export function useDemoStrings<K extends string>(
  strings: DemoStrings<K>,
): ComputedRef<Record<K, string>> {
  const { lang } = useData();
  return computed(() => strings[siteLang(lang.value)]);
}
