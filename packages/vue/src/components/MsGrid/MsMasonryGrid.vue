<script setup lang="ts">
import { computed } from "vue";
import type { MsMasonryGridProps } from "./types.ts";

const props = withDefaults(defineProps<MsMasonryGridProps>(), {
  cols: 3,
  gap: "md",
  items: () => [],
});

const gapValues: Record<string, string> = {
  xs: "var(--ms-space-2, 8px)",
  sm: "var(--ms-space-3, 12px)",
  md: "var(--ms-space-4, 16px)",
  lg: "var(--ms-space-6, 24px)",
  xl: "var(--ms-space-8, 32px)",
};

const style = computed(() => {
  const gapVal =
    typeof props.gap === "number" ? `${props.gap}px` : gapValues[props.gap] || props.gap;
  return {
    "--ms-masonry-gap": gapVal,
  };
});

const columns = computed(() => {
  const result: any[][] = Array.from({ length: props.cols }, () => []);
  props.items.forEach((item, index) => {
    const colIndex = index % props.cols;
    result[colIndex]!.push(item);
  });
  return result;
});
</script>

<template>
  <div class="ms-masonry-grid" :style="style">
    <div v-for="(col, colIdx) in columns" :key="colIdx" class="ms-masonry-grid__column">
      <slot v-for="(item, itemIdx) in col" :key="itemIdx" :item="item" :index="itemIdx">
        <div class="ms-bento-item">{{ item }}</div>
      </slot>
    </div>
  </div>
</template>
