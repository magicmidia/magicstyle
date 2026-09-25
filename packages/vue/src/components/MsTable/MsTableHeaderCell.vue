<script setup lang="ts">
import { computed } from "vue";
import type { MsTableHeaderCellProps } from "./types.ts";

const props = withDefaults(defineProps<MsTableHeaderCellProps>(), {
  align: "left",
  sortable: false,
  sortDirection: "none",
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

defineSlots<{
  default?(): unknown;
  sortIcon?(props: { direction: string }): unknown;
}>();

const ariaSort = computed(() => {
  if (!props.sortable) return undefined;
  if (props.sortDirection === "asc") return "ascending";
  if (props.sortDirection === "desc") return "descending";
  return "none";
});

function onClick(event: MouseEvent): void {
  if (props.sortable) {
    emit("click", event);
  }
}
</script>

<template>
  <th
    class="ms-table__th"
    :class="{ 'ms-table__th--sortable': props.sortable }"
    :data-align="props.align"
    :aria-sort="ariaSort"
    :style="props.width ? { width: props.width } : undefined"
    @click="onClick"
  >
    <!-- A real button gives keyboard access (Enter/Space); its click bubbles to the th. -->
    <button v-if="props.sortable" type="button" class="ms-table__th-inner ms-table__sort-button">
      <slot />
      <slot name="sortIcon" :direction="props.sortDirection">
        <span class="ms-table__sort-icon" aria-hidden="true">
          <svg
            v-if="props.sortDirection === 'asc'"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 10l4-4 4 4" />
          </svg>
          <svg
            v-else-if="props.sortDirection === 'desc'"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
          <svg
            v-else
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 6l3-3 3 3M5 10l3 3 3-3" />
          </svg>
        </span>
      </slot>
    </button>
    <slot v-else />
  </th>
</template>
