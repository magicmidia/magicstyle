import { onBeforeUnmount, watch, type Ref } from "vue";

let lockCount = 0;
let previousOverflow = "";
let previousPaddingRight = "";

function lock(): void {
  if (typeof document === "undefined") return;
  if (lockCount === 0) {
    const body = document.body;
    previousOverflow = body.style.overflow;
    previousPaddingRight = body.style.paddingRight;
    // Compensate the removed scrollbar so the page does not shift horizontally.
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    body.style.overflow = "hidden";
  }
  lockCount++;
}

function unlock(): void {
  if (typeof document === "undefined" || lockCount === 0) return;
  lockCount--;
  if (lockCount === 0) {
    document.body.style.overflow = previousOverflow;
    document.body.style.paddingRight = previousPaddingRight;
  }
}

/**
 * Ref-counted body scroll lock shared by every overlay: the page stays locked
 * while at least one active overlay holds it, and the original inline styles
 * are restored only when the last one releases (never on mount of a closed one).
 */
export function useScrollLock(active: Ref<boolean>): void {
  let held = false;
  const sync = (value: boolean): void => {
    if (value && !held) {
      lock();
      held = true;
    } else if (!value && held) {
      unlock();
      held = false;
    }
  };
  watch(active, sync, { immediate: true });
  onBeforeUnmount(() => sync(false));
}

/** Test helper: current number of active locks. */
export function scrollLockCount(): number {
  return lockCount;
}
