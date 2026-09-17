<script setup lang="ts">
import { computed, inject, ref, watch } from "vue";
import {
  type MsSidebarMenuItemProps,
  sidebarMenuContextKey,
  type MsSidebarMenuItemData,
} from "./types";

defineOptions({
  name: "MsSidebarMenuItem",
});

const props = withDefaults(defineProps<MsSidebarMenuItemProps>(), {
  label: "",
  disabled: false,
  hasChildren: false,
});

const emit = defineEmits<{
  (e: "click", evt: MouseEvent): void;
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
</script>

<template>
  <li class="ms-sidebar-menu-item" :data-open="isOpen" :data-active="isActive">
    <component
      :is="href ? 'a' : 'button'"
      :href="href"
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
    <div
      v-if="hasChildren"
      class="ms-sidebar-menu-sub"
      :class="{ 'is-open': isOpen }"
      :aria-hidden="!isOpen"
    >
      <div class="ms-sidebar-menu-sub-inner">
        <slot name="sub" />
      </div>
    </div>
  </li>
</template>
