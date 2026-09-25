import { getCurrentInstance, onBeforeUnmount, onMounted, ref, type Ref } from "vue";

/**
 * Tracks `(prefers-reduced-motion: reduce)`. SSR-safe: it starts `false` on the server and
 * in the hydrating render (no mismatch), reads `matchMedia` after mount and follows
 * changes until unmount. Components should also honor the media query in CSS so motion
 * is suppressed before hydration.
 */
export function usePrefersReducedMotion(): Ref<boolean> {
  const reduced = ref(false);
  if (!getCurrentInstance()) return reduced;

  let mediaQuery: MediaQueryList | undefined;
  const handler = (event: MediaQueryListEvent) => {
    reduced.value = event.matches;
  };

  onMounted(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    try {
      mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      reduced.value = mediaQuery.matches;
      mediaQuery.addEventListener?.("change", handler);
    } catch {
      // Environments without media query support keep motion enabled.
    }
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener?.("change", handler);
  });

  return reduced;
}
