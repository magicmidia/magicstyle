<script setup lang="ts">
import type { MsFooterProps } from "./types";

defineProps<MsFooterProps>();
</script>

<template>
  <footer class="ms-footer">
    <slot />
  </footer>
</template>
