import { onBeforeUnmount, watch, type Ref } from "vue";

export type DismissReason = "escape" | "outside";

export interface DismissableLayerOptions {
  /** Whether the layer is currently open. */
  active: Ref<boolean>;
  /** Elements considered "inside" the layer (content, trigger, anchors). */
  inside: ReadonlyArray<Ref<HTMLElement | null | undefined>>;
  onDismiss: (reason: DismissReason, event: Event) => void;
  closeOnEscape?: () => boolean;
  /** Dismiss on pointerdown outside every `inside` element. Modal overlays usually handle their own backdrop. */
  closeOnOutside?: () => boolean;
}

interface Layer {
  options: DismissableLayerOptions;
}

const stack: Layer[] = [];
let listening = false;

/** Floating content rendered elsewhere (e.g. a teleported listbox) opts out of outside-dismiss. */
const FLOATING_SELECTOR = "[data-ms-floating]";

function contains(layer: Layer, target: Node): boolean {
  return layer.options.inside.some((ref) => ref.value?.contains(target) ?? false);
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key !== "Escape" || event.defaultPrevented) return;
  for (let index = stack.length - 1; index >= 0; index--) {
    const layer = stack[index]!;
    if (layer.options.closeOnEscape?.() === false) continue;
    event.preventDefault();
    layer.options.onDismiss("escape", event);
    return;
  }
}

function onPointerdown(event: PointerEvent | MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (target instanceof Element && target.closest(FLOATING_SELECTOR)) return;
  // Walk from the top: dismiss each layer the pointer is outside of, stop at the first that contains it.
  for (let index = stack.length - 1; index >= 0; index--) {
    const layer = stack[index]!;
    if (contains(layer, target)) return;
    if (layer.options.closeOnOutside?.() === false) return;
    layer.options.onDismiss("outside", event);
  }
}

function syncListeners(): void {
  if (typeof document === "undefined") return;
  if (stack.length > 0 && !listening) {
    window.addEventListener("keydown", onKeydown);
    document.addEventListener("pointerdown", onPointerdown, true);
    listening = true;
  } else if (stack.length === 0 && listening) {
    window.removeEventListener("keydown", onKeydown);
    document.removeEventListener("pointerdown", onPointerdown, true);
    listening = false;
  }
}

/**
 * Registers an overlay in a shared layer stack: Escape and outside pointerdown
 * dismiss only the topmost layer(s), so nested overlays close one at a time and
 * no component needs `@click.stop` to protect itself.
 */
export function useDismissableLayer(options: DismissableLayerOptions): void {
  const layer: Layer = { options };
  const remove = (): void => {
    const index = stack.indexOf(layer);
    if (index !== -1) stack.splice(index, 1);
    syncListeners();
  };
  watch(
    options.active,
    (active) => {
      if (active) {
        if (!stack.includes(layer)) stack.push(layer);
        syncListeners();
      } else {
        remove();
      }
    },
    { immediate: true },
  );
  onBeforeUnmount(remove);
}

/** Test helper: number of open layers. */
export function dismissableLayerCount(): number {
  return stack.length;
}
