<script setup lang="ts">
defineSlots<{
  /** `MsTableRow` children, rendered inside `<tbody>`. */
  default?(): unknown;
}>();
</script>

<template>
  <tbody class="ms-table__body">
    <slot />
  </tbody>
</template>
