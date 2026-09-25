import { computed } from "vue";
import { useData } from "vitepress";
import { UI, siteLang } from "../i18n/ui.ts";

/** Chrome strings for the current page locale. */
export function useUi() {
  const { lang } = useData();
  return computed(() => UI[siteLang(lang.value)]);
}
