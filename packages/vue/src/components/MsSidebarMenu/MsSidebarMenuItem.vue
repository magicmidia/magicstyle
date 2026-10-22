<script setup lang="ts">
import { computed, inject, ref, watch } from "vue";
import {
  type MsSidebarMenuItemProps,
  sidebarMenuContextKey,
  type MsSidebarMenuItemData,
} from "./types";
import { safeHref } from "../../composables/safe-url.ts";

defineOptions({
  name: "MsSidebarMenuItem",
});

const props = withDefaults(defineProps<MsSidebarMenuItemProps>(), {
  label: "",
  disabled: false,
  hasChildren: false,
});

const emit = defineEmits<{
  /** Fires on click unless the item is disabled; payload is the native event. */
  (e: "click", evt: MouseEvent): void;
  /** Fires when a `hasChildren` item without an `id` (or outside `MsSidebarMenu`) toggles its submenu; payload is the new open state. Items with an `id` report through the menu's `toggle` event instead. */
  (e: "toggle", open: boolean): void;
}>();

const menuCtx = inject(sidebarMenuContextKey, null);

const localOpen = ref(props.open ?? false);
watch(
  () => props.open,
  (val) => {
    if (val !== undefined) {
      localOpen.value = val;
    }
  },
);

const isOpen = computed(() => {
  if (props.id && menuCtx) {
    return menuCtx.isItemOpen(props.id);
  }
  return localOpen.value;
});

const isActive = computed(() => {
  if (props.active) {
    return true;
  }
  if (props.id && menuCtx) {
    return menuCtx.isItemActive(props.id);
  }
  return false;
});

function handleClick(evt: MouseEvent) {
  if (props.disabled) {
    evt.preventDefault();
    return;
  }

  emit("click", evt);

  if (props.hasChildren) {
    if (props.id && menuCtx) {
      menuCtx.toggleOpen(props.id);
    } else {
      localOpen.value = !localOpen.value;
      emit("toggle", localOpen.value);
    }
  } else if (props.id && menuCtx) {
    const itemData: MsSidebarMenuItemData = {
      id: props.id,
      label: props.label,
      icon: props.icon,
      badge: props.badge,
      badgeTone: props.badgeTone,
      href: props.href,
      disabled: props.disabled,
    };
    menuCtx.selectItem(props.id, itemData);
  }
}

defineSlots<{
  /** Rich label; replaces the `label` prop. */
  default?(): unknown;
  /** Leading icon; replaces the `icon` prop. */
  icon?(): unknown;
  /** Badge after the label; replaces the `badge` prop. */
  badge?(): unknown;
  /** Replaces the submenu chevron (shown with `hasChildren`). */
  arrow?(): unknown;
  /** Nested `MsSidebarMenuItem` children, shown in the collapsible submenu (with `hasChildren`). */
  sub?(): unknown;
}>();
</script>

<template>
  <li class="ms-sidebar-menu-item" :data-open="isOpen" :data-active="isActive">
    <component
      :is="href ? 'a' : 'button'"
      :href="safeHref(href)"
      :type="href ? undefined : 'button'"
      class="ms-sidebar-menu-button"
      :class="{
        'is-active': isActive,
        'is-open': isOpen,
        'is-disabled': disabled,
      }"
      :disabled="disabled ? true : undefined"
      :aria-current="isActive ? 'page' : undefined"
      :aria-expanded="hasChildren ? isOpen : undefined"
      @click="handleClick"
    >
      <!-- Icon -->
      <span v-if="$slots.icon || icon" class="ms-sidebar-menu-icon">
        <slot name="icon">
          <span v-if="icon" class="ms-sidebar-menu-icon-char">{{ icon }}</span>
        </slot>
      </span>

      <!-- Label -->
      <span class="ms-sidebar-menu-label">
        <slot>{{ label }}</slot>
      </span>

      <!-- Badge -->
      <span
        v-if="$slots.badge || badge !== undefined"
        class="ms-sidebar-menu-badge"
        :data-tone="badgeTone"
      >
        <slot name="badge">{{ badge }}</slot>
      </span>

      <!-- Arrow for submenus -->
      <span v-if="hasChildren" class="ms-sidebar-menu-arrow" aria-hidden="true">
        <slot name="arrow">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </slot>
      </span>
    </component>

    <!-- Submenu Accordion -->
    <!-- Closed submenus are inert (out of the tab order and the a11y tree) but stay
         rendered so the grid-rows accordion animation keeps working. The <ul> keeps
         nested <li> items valid HTML (a bare <li> in a <div> breaks SSR hydration). -->
    <div
      v-if="hasChildren"
      class="ms-sidebar-menu-sub"
      :class="{ 'is-open': isOpen }"
      :inert="!isOpen || undefined"
    >
      <div class="ms-sidebar-menu-sub-inner">
        <ul class="ms-sidebar-menu-list ms-sidebar-menu-sub-list" role="list">
          <slot name="sub" />
        </ul>
      </div>
    </div>
  </li>
</template>
