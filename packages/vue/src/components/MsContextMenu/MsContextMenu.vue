<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import type { MsContextMenuProps, MsContextMenuEmits, MsContextMenuItem } from "./types.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { useMenuNavigation } from "../../composables/use-menu-navigation.ts";

const props = withDefaults(defineProps<MsContextMenuProps>(), {
  items: () => [],
  disabled: false,
});

const emit = defineEmits<MsContextMenuEmits>();

defineSlots<{
  default?(): unknown;
  item?(props: { item: MsContextMenuItem }): unknown;
}>();

const isOpen = ref(false);
const posX = ref(0);
const posY = ref(0);
const menuRef = ref<HTMLElement | null>(null);
let returnFocusTo: HTMLElement | null = null;

const VIEWPORT_MARGIN = 8;

const openAt = async (x: number, y: number) => {
  returnFocusTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  posX.value = x;
  posY.value = y;
  isOpen.value = true;

  await nextTick();

  if (menuRef.value && typeof window !== "undefined") {
    const rect = menuRef.value.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - VIEWPORT_MARGIN;
    const maxY = window.innerHeight - rect.height - VIEWPORT_MARGIN;
    // Never position off-screen, even when the menu is larger than the viewport.
    posX.value = Math.max(VIEWPORT_MARGIN, Math.min(posX.value, maxX));
    posY.value = Math.max(VIEWPORT_MARGIN, Math.min(posY.value, maxY));
  }
  navigation.focusFirst();
};

const handleContextMenu = (event: MouseEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  void openAt(event.clientX, event.clientY);
};

/** Keyboard equivalents of right-click: Shift+F10 and the ContextMenu key. */
const handleTriggerKeydown = (event: KeyboardEvent) => {
  if (props.disabled) return;
  if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
    event.preventDefault();
    const target = event.target instanceof HTMLElement ? event.target : null;
    const rect = target?.getBoundingClientRect();
    void openAt(rect ? rect.left : 0, rect ? rect.bottom : 0);
  }
};

const closeMenu = (restoreFocus = true) => {
  isOpen.value = false;
  if (restoreFocus && returnFocusTo?.isConnected) returnFocusTo.focus();
  returnFocusTo = null;
};

const navigation = useMenuNavigation(menuRef, { onClose: () => closeMenu(false) });

const handleItemClick = (item: MsContextMenuItem) => {
  if (item.disabled || item.divider) return;
  if (item.action) {
    item.action();
  }
  emit("select", item);
  closeMenu();
};

useDismissableLayer({
  active: isOpen,
  inside: [menuRef],
  onDismiss: (reason) => closeMenu(reason === "escape"),
});

const menuStyle = computed(() => ({
  left: `${posX.value}px`,
  top: `${posY.value}px`,
}));
</script>

<template>
  <div
    class="ms-context-menu-wrapper"
    data-ms-context-menu-trigger
    @contextmenu="handleContextMenu"
    @keydown="handleTriggerKeydown"
  >
    <slot />

    <Teleport to="body">
      <ul
        v-if="isOpen"
        ref="menuRef"
        class="ms-context-menu-panel"
        role="menu"
        tabindex="-1"
        :style="menuStyle"
        data-ms-context-menu
        @keydown="navigation.onKeydown"
      >
        <template v-for="(item, idx) in props.items" :key="item.id || idx">
          <li v-if="item.divider" class="ms-context-menu-divider" role="separator" />
          <li
            v-else
            class="ms-context-menu-item"
            :class="{
              'ms-context-menu-item--disabled': item.disabled,
              'ms-context-menu-item--danger': item.danger,
            }"
            role="menuitem"
            tabindex="-1"
            :aria-disabled="item.disabled || undefined"
            @click="handleItemClick(item)"
          >
            <slot name="item" :item="item">
              <span v-if="item.icon" class="ms-context-menu-item__icon" aria-hidden="true">
                {{ item.icon }}
              </span>
              <span class="ms-context-menu-item__label">
                {{ item.label }}
              </span>
              <span v-if="item.shortcut" class="ms-context-menu-item__shortcut">
                {{ item.shortcut }}
              </span>
            </slot>
          </li>
        </template>
      </ul>
    </Teleport>
  </div>
</template>
