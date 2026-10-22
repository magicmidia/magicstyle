<script setup lang="ts">
defineSlots<{
  /** Header `MsTableRow` children, rendered inside `<thead>`. */
  default?(): unknown;
}>();
</script>

<template>
  <thead class="ms-table__head">
    <slot />
  </thead>
</template>
