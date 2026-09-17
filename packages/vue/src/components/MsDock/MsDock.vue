<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import type { MsDockProps } from "./types.ts";
import { MS_DOCK_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsDockProps>(), {
  position: "bottom",
  size: "md",
});

defineSlots<{
  default?(): unknown;
}>();

provide(MS_DOCK_KEY, {
  size: toRef(props, "size"),
});

const containerClasses = computed(() => [
  "ms-dock-container",
  `ms-dock-container--${props.position}`,
]);

const dockClasses = computed(() => ["ms-dock", `ms-dock--size-${props.size}`]);
</script>

<template>
  <div :class="containerClasses" data-ms-dock-container>
    <ul :class="dockClasses" role="toolbar" aria-label="Barra de aplicativos dock" data-ms-dock>
      <slot />
    </ul>
  </div>
</template>
