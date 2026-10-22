<script setup lang="ts">
defineSlots<{
  /** `MsTableRow` children, rendered inside `<tfoot>`. */
  default?(): unknown;
}>();
</script>

<template>
  <tfoot class="ms-table__footer">
    <slot />
  </tfoot>
</template>
