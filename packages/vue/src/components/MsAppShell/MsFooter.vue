<script setup lang="ts">
import type { MsFooterProps } from "./types";

defineOptions({ name: "MsAppShellFooter" });

const props = withDefaults(defineProps<MsFooterProps>(), {
  bordered: true,
});

defineSlots<{
  /** Footer content (copyright, links, status). */
  default?(): unknown;
}>();
</script>

<template>
  <footer class="ms-app-shell__footer" :data-bordered="props.bordered ? '' : undefined">
    <slot />
  </footer>
</template>
