<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { type MsAppShellProps, type MsAppShellEmits, MS_APP_SHELL_KEY } from "./types";

const props = withDefaults(defineProps<MsAppShellProps>(), {
  fullHeight: true,
  sidebarCollapsed: false,
});

const emit = defineEmits<MsAppShellEmits>();

const internalCollapsed = ref(props.sidebarCollapsed);

watch(
  () => props.sidebarCollapsed,
  (newVal) => {
    internalCollapsed.value = newVal ?? false;
  },
);

const isCollapsed = computed(() => {
  if (typeof props.sidebarCollapsed === "boolean") {
    return props.sidebarCollapsed;
  }
  return internalCollapsed.value;
});

const toggleSidebarCollapse = () => {
  internalCollapsed.value = !isCollapsed.value;
  emit("update:sidebarCollapsed", internalCollapsed.value);
};

provide(MS_APP_SHELL_KEY, {
  sidebarCollapsed: isCollapsed,
  toggleSidebarCollapse,
});

const classes = computed(() => [
  "ms-app-shell",
  {
    "ms-app-shell--full-height": props.fullHeight,
  },
]);
</script>

<template>
  <div :class="classes">
    <slot name="topbar" />
    <div class="ms-app-shell__body">
      <slot name="rail" />
      <slot name="sidebar" />
      <slot />
      <slot name="aside" />
    </div>
    <slot name="footer" />
    <slot name="statusbar" />
  </div>
</template>
