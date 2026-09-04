<script setup lang="ts">
defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <div class="ms-button-group" role="group">
    <slot />
  </div>
</template>
