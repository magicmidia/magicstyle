<script setup lang="ts">
import { computed, inject, getCurrentInstance } from "vue";
import type { MsSidebarProps, MsSidebarEmits } from "./types";
import { MS_APP_SHELL_KEY } from "../MsAppShell/types";

defineOptions({
  name: "MsSidebar",
});

const props = withDefaults(defineProps<MsSidebarProps>(), {
  collapsed: false,
  side: "left",
  position: "sticky",
  width: "normal",
  variant: "default",
  tone: "default",
  showToggle: false,
});

const emit = defineEmits<MsSidebarEmits>();

const shellContext = inject(MS_APP_SHELL_KEY, null);
const instance = getCurrentInstance();

const isExplicitCollapsed = computed(() => {
  const vnodeProps = instance?.vnode?.props;
  return Boolean(vnodeProps && ("collapsed" in vnodeProps || "is-collapsed" in vnodeProps));
});

const isCollapsed = computed(() => {
  if (isExplicitCollapsed.value) return props.collapsed;
  if (shellContext) return shellContext.sidebarCollapsed.value;
  return props.collapsed;
});

function handleToggle() {
  const next = !isCollapsed.value;
  emit("update:collapsed", next);
  emit("toggle");
  if (shellContext) {
    shellContext.toggleSidebarCollapse();
  }
}

const classes = computed(() => [
  "ms-sidebar",
  `ms-sidebar--side-${props.side}`,
  `ms-sidebar--position-${props.position}`,
  `ms-sidebar--width-${props.width}`,
  isCollapsed.value ? "ms-sidebar--collapsed" : undefined,
  props.variant !== "default" ? `ms-sidebar--variant-${props.variant}` : undefined,
  props.tone !== "default" ? `ms-sidebar--tone-${props.tone}` : undefined,
]);
</script>

<template>
  <aside
    :class="classes"
    :data-side="side"
    :data-position="position"
    :data-width="width"
    :data-collapsed="isCollapsed ? 'true' : 'false'"
    :data-variant="variant"
    :data-tone="tone"
  >
    <div v-if="$slots.header || showToggle" class="ms-sidebar__header">
      <slot name="header" />
      <button
        v-if="showToggle"
        type="button"
        class="ms-sidebar__collapse-btn"
        :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        @click="handleToggle"
      >
        <slot name="toggle-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        </slot>
      </button>
    </div>

    <div class="ms-sidebar__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="ms-sidebar__footer">
      <slot name="footer" />
    </div>
  </aside>
</template>
