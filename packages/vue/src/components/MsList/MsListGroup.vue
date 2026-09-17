<script setup lang="ts">
import type { MsListGroupProps } from "./types.ts";

const props = defineProps<MsListGroupProps>();

defineSlots<{
  default?(): unknown;
  header?(): unknown;
}>();
</script>

<template>
  <div class="ms-list-group" role="group" data-ms-list-group>
    <div v-if="props.title || $slots.header" class="ms-list-group__header">
      <slot name="header">{{ props.title }}</slot>
    </div>
    <slot />
  </div>
</template>
