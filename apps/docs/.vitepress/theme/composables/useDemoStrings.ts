import { computed } from "vue";
import { useData } from "vitepress";
import { siteLang, type SiteLang } from "../i18n/ui.ts";

export type DemoStrings<K extends string = string> = Record<SiteLang, Record<K, string>>;

/**
 * Demo copy for the current page locale, as a reactive object: `t.key` works in
 * templates and in script (e.g. inside `computed`). The markdown plugin replaces
 * every `t.key` with a string literal in the code shown to readers.
 */
export function useDemoStrings<K extends string>(
  strings: DemoStrings<K>,
): Readonly<Record<K, string>> {
  const { lang } = useData();
  const current = computed(() => strings[siteLang(lang.value)]);
  const t = {} as Record<K, string>;
  for (const key of Object.keys(strings["pt-BR"]) as K[]) {
    Object.defineProperty(t, key, { enumerable: true, get: () => current.value[key] });
  }
  return t;
}
