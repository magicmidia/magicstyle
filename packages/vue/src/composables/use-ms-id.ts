import { useId } from "vue";

/**
 * SSR-stable, hydration-safe id (doc 08 §12).
 * Wraps Vue 3.5 useId with the ms- namespace.
 */
export function useMsId(prefix = "ms"): string {
  return `${prefix}-${useId()}`;
}
