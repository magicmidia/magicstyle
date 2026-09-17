<template>
  <component :is="as" class="ms-tab-panels">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { MsTabPanelsProps } from "./types.ts";

defineOptions({
  name: "MsTabPanels",
});

withDefaults(defineProps<MsTabPanelsProps>(), {
  as: "div",
});
</script>
