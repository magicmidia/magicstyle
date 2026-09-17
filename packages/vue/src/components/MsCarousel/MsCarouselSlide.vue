<script setup lang="ts">
defineSlots<{
  default?(): unknown;
}>();
</script>

<template>
  <div class="ms-carousel-slide" role="group" aria-roledescription="slide" data-ms-carousel-slide>
    <slot />
  </div>
</template>
