<script setup lang="ts">
defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <tfoot class="ms-table__footer">
    <slot />
  </tfoot>
</template>
