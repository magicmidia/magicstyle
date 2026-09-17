<script setup lang="ts">
defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <thead class="ms-table__head">
    <slot />
  </thead>
</template>
