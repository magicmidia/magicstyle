<script setup lang="ts">
import { computed, provide, reactive, ref, toRef } from "vue";
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

/** Active flags of the rendered items (listbox mode needs to know whether one is selected). */
const activeFlags = reactive(new Set<() => boolean>());
const hasActive = computed(() => Array.from(activeFlags).some((isActive) => isActive()));

provide(MS_LIST_KEY, {
  variant: toRef(props, "variant"),
  size: toRef(props, "size"),
  selectable: toRef(props, "selectable"),
  hasActive,
  registerActive(isActive) {
    activeFlags.add(isActive);
    return () => {
      activeFlags.delete(isActive);
    };
  },
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

/** Listbox without a selected option: the list is the tab stop and forwards focus. */
function onFocus(event: FocusEvent): void {
  if (!props.selectable || hasActive.value || event.target !== rootRef.value) return;
  options()[0]?.focus();
}

/** Listbox keyboard model (APG): arrows/Home/End move focus between enabled options. */
function onKeydown(event: KeyboardEvent): void {
  if (!props.selectable) return;
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
    :tabindex="props.selectable && !hasActive ? 0 : undefined"
    data-ms-list
    :data-selectable="props.selectable || undefined"
    @focus="onFocus"
    @keydown="onKeydown"
  >
    <slot />
  </ul>
</template>
