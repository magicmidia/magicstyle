<script setup lang="ts">
import { nextTick, ref, toRef, watch } from "vue";
import type { MsMenuItem } from "./types.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";

export type MsMenuDismissReason = "escape" | "outside" | "tab" | "select";

const props = withDefaults(
  defineProps<{
    /** Menu entries, rendered in order as `role="menuitem"` rows. */
    items: readonly MsMenuItem[];
    /**
     * Whether the menu is open. Opening focuses the `initialFocus` item; the menu emits
     * `update:open` false on Escape, Tab and outside clicks. @default false
     */
    open?: boolean;
    /** Element treated as part of the menu for outside-click (usually the trigger wrapper). */
    anchor?: HTMLElement | null;
    /** Which enabled item receives focus when the menu opens. */
    initialFocus?: "first" | "last";
  }>(),
  { open: false, anchor: null, initialFocus: "first" },
);

const emit = defineEmits<{
  /** An enabled item was activated (click, Enter or Space). */
  select: [item: MsMenuItem];
  /** Emitted with `false` when the menu asks to close (Escape, Tab, outside click). */
  "update:open": [open: boolean];
  /** Why the menu is closing: "escape", "outside", "tab" or "select". */
  dismiss: [reason: MsMenuDismissReason];
}>();

const root = ref<HTMLElement | null>(null);
const itemRefs = ref<HTMLElement[]>([]);

const enabledIndexes = (): number[] =>
  props.items.flatMap((item, index) => (item.disabled === true ? [] : [index]));

function edgeEnabledIndex(edge: "first" | "last"): number {
  const enabled = enabledIndexes();
  if (enabled.length === 0) return -1;
  return edge === "first" ? enabled[0]! : enabled[enabled.length - 1]!;
}

const activeIndex = ref(edgeEnabledIndex(props.initialFocus));

function focusActive(): void {
  void nextTick(() => itemRefs.value[activeIndex.value]?.focus());
}

function moveTo(index: number): void {
  if (index < 0) return;
  activeIndex.value = index;
  focusActive();
}

function step(delta: 1 | -1): void {
  const enabled = enabledIndexes();
  if (enabled.length === 0) return;
  const position = enabled.indexOf(activeIndex.value);
  const next = position === -1 ? 0 : (position + delta + enabled.length) % enabled.length;
  moveTo(enabled[next]!);
}

/** Element focused before the menu took focus (normally its trigger). */
let returnFocusTo: HTMLElement | null = null;

function focusTarget(): HTMLElement | null {
  if (returnFocusTo?.isConnected && !root.value?.contains(returnFocusTo)) return returnFocusTo;
  const anchor = props.anchor;
  if (!anchor) return null;
  return anchor.matches("button, a[href], [tabindex]")
    ? anchor
    : anchor.querySelector<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])");
}

/**
 * Escape and selection hand focus back to the trigger, but only when focus is still in
 * the menu: Tab and outside clicks already moved it somewhere the user chose.
 */
function restoreFocus(): void {
  if (typeof document === "undefined") return;
  if (!root.value?.contains(document.activeElement)) return;
  focusTarget()?.focus();
}

function dismiss(reason: MsMenuDismissReason): void {
  if (reason === "escape") restoreFocus();
  emit("dismiss", reason);
  emit("update:open", false);
}

function onSelect(item: MsMenuItem): void {
  if (item.disabled === true) return;
  restoreFocus();
  emit("select", item);
  emit("dismiss", "select");
}

function typeahead(key: string): void {
  const enabled = enabledIndexes();
  const start = enabled.indexOf(activeIndex.value) + 1;
  for (let offset = 0; offset < enabled.length; offset++) {
    const index = enabled[(start + offset) % enabled.length]!;
    if (props.items[index]!.label.toLowerCase().startsWith(key)) {
      moveTo(index);
      return;
    }
  }
}

// WAI-ARIA APG menu keyboard model.
function onKeydown(event: KeyboardEvent): void {
  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      step(1);
      break;
    case "ArrowUp":
      event.preventDefault();
      step(-1);
      break;
    case "Home":
      event.preventDefault();
      moveTo(edgeEnabledIndex("first"));
      break;
    case "End":
      event.preventDefault();
      moveTo(edgeEnabledIndex("last"));
      break;
    case "Enter":
    case " ": {
      event.preventDefault();
      const item = props.items[activeIndex.value];
      if (item !== undefined) onSelect(item);
      break;
    }
    case "Escape":
      event.preventDefault();
      dismiss("escape");
      break;
    case "Tab":
      dismiss("tab");
      break;
    default:
      if (event.key.length === 1 && /\S/.test(event.key) && !event.ctrlKey && !event.metaKey) {
        typeahead(event.key.toLowerCase());
      }
  }
}

const isOpen = toRef(props, "open");
const anchorRef = toRef(props, "anchor");

useDismissableLayer({
  active: isOpen,
  inside: [root, anchorRef],
  onDismiss: (reason) => dismiss(reason),
});

watch(
  isOpen,
  (open) => {
    if (!open) return;
    if (typeof document !== "undefined") {
      const active = document.activeElement;
      returnFocusTo = active instanceof HTMLElement && active !== document.body ? active : null;
    }
    activeIndex.value = edgeEnabledIndex(props.initialFocus);
    focusActive();
  },
  { immediate: true },
);
</script>

<template>
  <div ref="root" class="ms-menu" role="menu" tabindex="-1" @keydown="onKeydown">
    <template v-for="(item, index) in props.items" :key="index">
      <!-- `divider` renders a separator before the item (see MsMenuItem). -->
      <div v-if="item.divider" class="ms-menu-divider" role="separator" />
      <div
        :ref="(el) => (itemRefs[index] = el as HTMLElement)"
        class="ms-menu-item"
        role="menuitem"
        :tabindex="index === activeIndex ? 0 : -1"
        :aria-disabled="item.disabled || undefined"
        :data-disabled="item.disabled || undefined"
        :data-active="index === activeIndex || undefined"
        :data-tone="item.tone || undefined"
        @click="onSelect(item)"
        @mousemove="item.disabled ? undefined : (activeIndex = index)"
      >
        <span v-if="item.prefix" class="ms-menu-item__prefix" aria-hidden="true">{{
          item.prefix
        }}</span>
        <span class="ms-menu-item__label">{{ item.label }}</span>
        <span v-if="item.suffix" class="ms-button-suffix" aria-hidden="true">{{
          item.suffix
        }}</span>
      </div>
    </template>
  </div>
</template>
