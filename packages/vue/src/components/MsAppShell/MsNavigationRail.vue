<script setup lang="ts">
import { computed } from "vue";
import type { MsNavigationRailProps } from "./types";

const props = defineProps<MsNavigationRailProps>();

const style = computed(() => {
  const styles: Record<string, string> = {};
  if (props.width) {
    styles["--ms-app-shell-rail-width"] = props.width;
  }
  return styles;
});
</script>

<template>
  <nav class="ms-navigation-rail" :style="style" aria-label="Navegação compacta">
    <slot />
  </nav>
</template>
