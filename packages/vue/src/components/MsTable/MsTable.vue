<script setup lang="ts">
import { computed, provide } from "vue";
import { MS_TABLE_KEY, type MsTableContext, type MsTableProps } from "./types.ts";

const props = withDefaults(defineProps<MsTableProps>(), {
  striped: false,
  bordered: false,
  hoverable: true,
  density: "md",
  variant: "default",
  stickyHeader: false,
});

defineSlots<{
  default?(): unknown;
  caption?(): unknown;
}>();

const containerClasses = computed(() => {
  return [
    "ms-table-container",
    props.variant !== "default" ? `ms-table-container--${props.variant}` : "",
  ];
});

const tableClasses = computed(() => {
  return [
    "ms-table",
    `ms-table--${props.density}`,
    {
      "ms-table--striped": props.striped,
      "ms-table--bordered": props.bordered,
      "ms-table--hoverable": props.hoverable,
      "ms-table--sticky-header": props.stickyHeader,
    },
  ];
});

provide<MsTableContext>(MS_TABLE_KEY, {
  density: computed(() => props.density),
  striped: computed(() => props.striped),
  bordered: computed(() => props.bordered),
  hoverable: computed(() => props.hoverable),
});
</script>

<template>
  <div :class="containerClasses">
    <table :class="tableClasses">
      <caption v-if="props.caption || $slots.caption" class="ms-table__caption">
        <slot name="caption">{{ props.caption }}</slot>
      </caption>
      <slot />
    </table>
  </div>
</template>
