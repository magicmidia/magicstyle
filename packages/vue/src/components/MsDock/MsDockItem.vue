<script setup lang="ts">
import type { MsDockItemProps } from "./types.ts";

const props = withDefaults(defineProps<MsDockItemProps>(), {
  active: false,
});

defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <li
    class="ms-dock-item"
    :title="props.label"
    :aria-label="props.label"
    role="button"
    tabindex="0"
    data-ms-dock-item
  >
    <slot />
    <span v-if="props.active" class="ms-dock-item__dot" aria-hidden="true" />
  </li>
</template>
