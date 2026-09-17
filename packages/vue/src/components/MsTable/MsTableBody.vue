<script setup lang="ts">
defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <tbody class="ms-table__body">
    <slot />
  </tbody>
</template>
