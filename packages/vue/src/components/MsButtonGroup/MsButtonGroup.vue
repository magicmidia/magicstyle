<script setup lang="ts">
import { computed } from "vue";
import type { MsButtonGroupProps } from "./types.ts";

defineOptions({
  name: "MsButtonGroup",
});

const props = withDefaults(defineProps<MsButtonGroupProps>(), {
  orientation: "horizontal",
  attached: true,
  fullWidth: false,
});

defineSlots<{
  default?(): unknown;
}>();

const classes = computed(() => [
  "ms-button-group",
  `ms-button-group--${props.orientation}`,
  {
    "ms-button-group--spaced": !props.attached,
    "ms-button-group--full-width": props.fullWidth,
  },
]);
</script>

<template>
  <div :class="classes" role="group">
    <slot />
  </div>
</template>
