<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import { MS_TABLE_KEY, type MsTableContext, type MsTableProps } from "./types.ts";

const props = withDefaults(defineProps<MsTableProps>(), {
  striped: false,
  bordered: false,
  hoverable: true,
  density: "md",
  variant: "default",
  stickyHeader: false,
});

const slots = defineSlots<{
  default?(): unknown;
  caption?(): unknown;
}>();

const t = useMsMessages();
const captionId = useMsId("ms-table-caption");
const containerRef = ref<HTMLElement | null>(null);
/**
 * True when the container scrolls (wide tables, or `stickyHeader` with a fixed height);
 * measured on the client only (SSR-stable). A scrolling container becomes a focusable,
 * named region so keyboard users can scroll it.
 */
const scrollable = ref(false);
let resizeObserver: ResizeObserver | undefined;

function measure(): void {
  const el = containerRef.value;
  scrollable.value = el
    ? el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight
    : false;
}

onMounted(() => {
  measure();
  if (typeof ResizeObserver !== "undefined" && containerRef.value) {
    resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(containerRef.value);
    const table = containerRef.value.querySelector("table");
    if (table) resizeObserver.observe(table);
  }
});
onBeforeUnmount(() => resizeObserver?.disconnect());

const hasCaption = computed(() => Boolean(props.caption || slots.caption));

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
  <div
    ref="containerRef"
    :class="containerClasses"
    :role="scrollable ? 'region' : undefined"
    :tabindex="scrollable ? 0 : undefined"
    :aria-labelledby="scrollable && hasCaption ? captionId : undefined"
    :aria-label="scrollable && !hasCaption ? t.table.label : undefined"
  >
    <table :class="tableClasses">
      <caption v-if="hasCaption" :id="captionId" class="ms-table__caption">
        <slot name="caption">{{ props.caption }}</slot>
      </caption>
      <slot />
    </table>
  </div>
</template>
