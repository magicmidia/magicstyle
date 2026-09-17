<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import type { MsListProps } from "./types.ts";
import { MS_LIST_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsListProps>(), {
  variant: "default",
  size: "md",
});

defineSlots<{
  default?(): unknown;
}>();

provide(MS_LIST_KEY, {
  variant: toRef(props, "variant"),
  size: toRef(props, "size"),
});

const listClasses = computed(() => [
  "ms-list",
  `ms-list--variant-${props.variant}`,
  `ms-list--size-${props.size}`,
]);
</script>

<template>
  <ul :class="listClasses" role="list" data-ms-list>
    <slot />
  </ul>
</template>
