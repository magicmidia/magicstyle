<script setup lang="ts">
import type { MsSidebarMenuGroupProps } from "./types";

defineOptions({
  name: "MsSidebarMenuGroup",
});

defineProps<MsSidebarMenuGroupProps>();
</script>

<template>
  <div class="ms-sidebar-menu-group" role="group">
    <div v-if="$slots.title || title" class="ms-sidebar-menu-title">
      <slot name="title">
        <span>{{ title }}</span>
      </slot>
      <slot name="extra" />
    </div>
    <ul class="ms-sidebar-menu-list">
      <slot />
    </ul>
  </div>
</template>
