<script setup lang="ts">
import { computed, provide, ref, toRef } from "vue";
import type { MsListProps } from "./types.ts";
import { MS_LIST_KEY } from "./types.ts";

defineOptions({ name: "MsList" });

const props = withDefaults(defineProps<MsListProps>(), {
  variant: "default",
  size: "md",
  selectable: false,
});

defineSlots<{
  /** `MsListItem` and `MsListGroup` children. */
  default?(): unknown;
}>();

const rootRef = ref<HTMLElement | null>(null);

provide(MS_LIST_KEY, {
  variant: toRef(props, "variant"),
  size: toRef(props, "size"),
  selectable: toRef(props, "selectable"),
});

const listClasses = computed(() => [
  "ms-list",
  `ms-list--variant-${props.variant}`,
  `ms-list--size-${props.size}`,
]);

function options(): HTMLElement[] {
  return Array.from(
    rootRef.value?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])') ??
      [],
  );
}

/**
 * The listbox itself is the entry tab stop, derived from props only so the server HTML and the
 * first client render agree (items cannot report their `active` state before they render).
 * Tabbing into it forwards focus to the selected option, else the first enabled one.
 */
function onFocus(event: FocusEvent): void {
  if (!props.selectable || event.target !== rootRef.value) return;
  const list = options();
  (list.find((option) => option.getAttribute("aria-selected") === "true") ?? list[0])?.focus();
}

/**
 * Shift+Tab from an option would land on the listbox (it precedes its options) and bounce
 * back in: take the listbox out of the tab order until focus has left it.
 */
function onFocusout(event: FocusEvent): void {
  const root = rootRef.value;
  if (!root || root.contains(event.relatedTarget as Node | null)) return;
  if (props.selectable) root.tabIndex = 0;
}

/** Listbox keyboard model (APG): arrows/Home/End move focus between enabled options. */
function onKeydown(event: KeyboardEvent): void {
  if (!props.selectable) return;
  if (event.key === "Tab" && event.shiftKey && event.target !== rootRef.value) {
    rootRef.value!.tabIndex = -1;
    return;
  }
  const list = options();
  if (list.length === 0) return;
  const current = list.findIndex((option) => option === document.activeElement);
  let next: number;
  switch (event.key) {
    case "ArrowDown":
      next = current === -1 ? 0 : Math.min(current + 1, list.length - 1);
      break;
    case "ArrowUp":
      next = current === -1 ? 0 : Math.max(current - 1, 0);
      break;
    case "Home":
      next = 0;
      break;
    case "End":
      next = list.length - 1;
      break;
    default:
      return;
  }
  event.preventDefault();
  list[next]!.focus();
}
</script>

<template>
  <ul
    ref="rootRef"
    :class="listClasses"
    :role="props.selectable ? 'listbox' : 'list'"
    :tabindex="props.selectable ? 0 : undefined"
    data-ms-list
    :data-selectable="props.selectable || undefined"
    @focus="onFocus"
    @focusout="onFocusout"
    @keydown="onKeydown"
  >
    <slot />
  </ul>
</template>
