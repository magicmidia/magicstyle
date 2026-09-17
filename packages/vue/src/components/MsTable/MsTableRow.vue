<script setup lang="ts">
import type { MsTableRowProps } from "./types.ts";

const props = withDefaults(defineProps<MsTableRowProps>(), {
  selected: false,
  clickable: false,
});

defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <tr
    class="ms-table__row"
    :data-selected="props.selected || undefined"
    :data-clickable="props.clickable || undefined"
    @click="$emit('click', $event)"
  >
    <slot />
  </tr>
</template>
