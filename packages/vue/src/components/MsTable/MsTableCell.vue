<script setup lang="ts">
import type { MsTableCellProps } from "./types.ts";

const props = withDefaults(defineProps<MsTableCellProps>(), {
  align: "left",
});

defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <td class="ms-table__td" :data-align="props.align">
    <slot />
  </td>
</template>
