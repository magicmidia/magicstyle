<script setup lang="ts">
import type { MsTableRowProps } from "./types.ts";

const props = withDefaults(defineProps<MsTableRowProps>(), {
  selected: false,
  clickable: false,
});

defineEmits<{
  /** Fires on every click on the row; payload is the native event. */
  (e: "click", event: MouseEvent): void;
}>();

defineSlots<{
  /** `MsTableCell`/`MsTableHeaderCell` children, rendered inside `<tr>`. */
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
