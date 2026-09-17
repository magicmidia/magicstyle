<script setup lang="ts">
import { computed, inject, getCurrentInstance } from "vue";
import { type MsSidebarProps, MS_APP_SHELL_KEY } from "./types";

const props = defineProps<MsSidebarProps>();

const shellContext = inject(MS_APP_SHELL_KEY, null);
const instance = getCurrentInstance();

const isExplicit = computed(() => {
  const vnodeProps = instance?.vnode.props;
  return Boolean(vnodeProps && ("collapsed" in vnodeProps || "is-collapsed" in vnodeProps));
});

const isCollapsed = computed(() => {
  if (isExplicit.value) return props.collapsed ?? false;
  if (shellContext) return shellContext.sidebarCollapsed.value;
  return props.collapsed ?? false;
});

const classes = computed(() => [
  "ms-sidebar",
  {
    "ms-sidebar--collapsed": isCollapsed.value,
  },
]);

const style = computed(() => {
  const styles: Record<string, string> = {};
  if (props.width && !isCollapsed.value) {
    styles["--ms-app-shell-sidebar-width"] = props.width;
  }
  if (props.collapsedWidth && isCollapsed.value) {
    styles["--ms-app-shell-sidebar-collapsed-width"] = props.collapsedWidth;
  }
  return styles;
});
</script>

<template>
  <aside :class="classes" :style="style">
    <div v-if="$slots.header" class="ms-sidebar__header">
      <slot name="header" :collapsed="isCollapsed" />
    </div>
    <div class="ms-sidebar__content">
      <slot :collapsed="isCollapsed" />
    </div>
    <div v-if="$slots.footer" class="ms-sidebar__footer">
      <slot name="footer" :collapsed="isCollapsed" />
    </div>
  </aside>
</template>
