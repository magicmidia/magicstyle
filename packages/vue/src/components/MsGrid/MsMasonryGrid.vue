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

defineSlots<{
  /** Renders one item; `index` is the item's position in `items` (not within its column). */
  default?(props: { item: unknown; index: number }): unknown;
}>();

/** Round-robin distribution; each entry keeps its global index for the slot. */
const columns = computed(() => {
  const cols = Math.max(1, props.cols);
  const result: { item: unknown; index: number }[][] = Array.from({ length: cols }, () => []);
  props.items.forEach((item, index) => {
    result[index % cols]!.push({ item, index });
  });
  return result;
});
</script>

<template>
  <div class="ms-masonry-grid" :style="style">
    <div v-for="(col, colIdx) in columns" :key="colIdx" class="ms-masonry-grid__column">
      <template v-for="entry in col" :key="entry.index">
        <slot :item="entry.item" :index="entry.index">
          <div class="ms-bento-item">{{ entry.item }}</div>
        </slot>
      </template>
    </div>
  </div>
</template>
