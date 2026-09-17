<script setup lang="ts">
import { computed } from "vue";
import type { MsAsideProps } from "./types";

const props = defineProps<MsAsideProps>();

const style = computed(() => {
  const styles: Record<string, string> = {};
  if (props.width) {
    styles["width"] = props.width;
  }
  return styles;
});
</script>

<template>
  <aside class="ms-aside" :style="style">
    <slot />
  </aside>
</template>
