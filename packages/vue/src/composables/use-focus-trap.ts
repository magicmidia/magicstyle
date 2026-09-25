import { nextTick, onBeforeUnmount, watch, type Ref } from "vue";

const TABBABLE = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function getTabbable(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(TABBABLE)).filter((element) => {
    if (element.closest("[hidden], [inert], [aria-hidden='true']")) return false;
    const style = getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden";
  });
}

export interface FocusTrapOptions {
  /** Element to focus first; defaults to [autofocus], then the first tabbable, then the container. */
  initialFocus?: () => HTMLElement | null | undefined;
  /** Restore focus to the element that was focused before activation (default true). */
  restoreFocus?: boolean;
}

const traps: symbol[] = [];

/**
 * Modal focus management (WAI-ARIA APG dialog): moves focus inside on open,
 * keeps Tab/Shift+Tab cycling within the container, and returns focus to the
 * previously focused element on close. Only the most recent trap is active.
 */
export function useFocusTrap(
  container: Ref<HTMLElement | null | undefined>,
  active: Ref<boolean>,
  options: FocusTrapOptions = {},
): void {
  const id = Symbol("ms-focus-trap");
  let previouslyFocused: HTMLElement | null = null;
  let engaged = false;

  const isTop = (): boolean => traps[traps.length - 1] === id;

  function onKeydown(event: KeyboardEvent): void {
    if (event.key !== "Tab" || !isTop()) return;
    const root = container.value;
    if (!root) return;
    const tabbable = getTabbable(root);
    if (tabbable.length === 0) {
      event.preventDefault();
      root.focus();
      return;
    }
    const first = tabbable[0]!;
    const last = tabbable[tabbable.length - 1]!;
    const current = document.activeElement;
    if (event.shiftKey && (current === first || !root.contains(current))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (current === last || !root.contains(current))) {
      event.preventDefault();
      first.focus();
    }
  }

  function onFocusin(event: FocusEvent): void {
    const root = container.value;
    if (!root || !isTop() || !(event.target instanceof Node)) return;
    if (root.contains(event.target)) return;
    if (event.target instanceof Element && event.target.closest("[data-ms-floating]")) return;
    (getTabbable(root)[0] ?? root).focus();
  }

  async function engage(): Promise<void> {
    if (typeof document === "undefined" || engaged) return;
    engaged = true;
    previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    traps.push(id);
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("focusin", onFocusin);
    await nextTick();
    const root = container.value;
    if (!root || !engaged) return;
    const target =
      options.initialFocus?.() ??
      root.querySelector<HTMLElement>("[autofocus]") ??
      getTabbable(root)[0] ??
      root;
    target.focus();
  }

  function release(): void {
    if (!engaged) return;
    engaged = false;
    const index = traps.indexOf(id);
    if (index !== -1) traps.splice(index, 1);
    document.removeEventListener("keydown", onKeydown);
    document.removeEventListener("focusin", onFocusin);
    const restoreTo = previouslyFocused;
    previouslyFocused = null;
    if (options.restoreFocus !== false && restoreTo?.isConnected) restoreTo.focus();
  }

  watch(active, (value) => (value ? void engage() : release()), { immediate: true });
  onBeforeUnmount(release);
}
