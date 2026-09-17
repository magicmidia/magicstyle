<script setup lang="ts">
import { computed } from "vue";
import type { MsTopbarProps } from "./types";

const props = withDefaults(defineProps<MsTopbarProps>(), {
  fixed: false,
});

const classes = computed(() => [
  "ms-topbar",
  {
    "ms-topbar--fixed": props.fixed,
  },
]);
</script>

<template>
  <header :class="classes">
    <div class="ms-topbar__leading">
      <slot name="leading" />
    </div>
    <div class="ms-topbar__center">
      <slot />
    </div>
    <div class="ms-topbar__trailing">
      <slot name="trailing" />
    </div>
  </header>
</template>
