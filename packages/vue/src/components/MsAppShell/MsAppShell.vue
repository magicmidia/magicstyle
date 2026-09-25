<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { type MsAppShellProps, type MsAppShellEmits, MS_APP_SHELL_KEY } from "./types";

const props = withDefaults(defineProps<MsAppShellProps>(), {
  fullHeight: true,
  // undefined (not false) so the shell is uncontrolled when v-model is not used.
  sidebarCollapsed: undefined,
});

const emit = defineEmits<MsAppShellEmits>();

const internalCollapsed = ref(props.sidebarCollapsed ?? false);

watch(
  () => props.sidebarCollapsed,
  (newVal) => {
    if (typeof newVal === "boolean") internalCollapsed.value = newVal;
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
