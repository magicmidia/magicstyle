<script setup lang="ts">
import type { MsDockItemProps } from "./types.ts";

const props = withDefaults(defineProps<MsDockItemProps>(), {
  active: false,
});

defineSlots<{
  default?(): unknown;
}>();

/** role="button" needs Enter/Space activation; it forwards to the native click listeners. */
function onKeydown(event: KeyboardEvent): void {
  if (event.target !== event.currentTarget) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  (event.currentTarget as HTMLElement).click();
}
</script>

<template>
  <li
    class="ms-dock-item"
    :title="props.label"
    :aria-label="props.label"
    role="button"
    tabindex="0"
    data-ms-dock-item
    @keydown="onKeydown"
  >
    <slot />
    <span v-if="props.active" class="ms-dock-item__dot" aria-hidden="true" />
  </li>
</template>
