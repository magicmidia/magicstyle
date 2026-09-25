<script setup lang="ts">
import type { MsFooterProps } from "./types";

defineProps<MsFooterProps>();
</script>

<template>
  <footer class="ms-app-shell__footer">
    <slot />
  </footer>
</template>
