<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import type { MsContextMenuProps, MsContextMenuEmits, MsContextMenuItem } from "./types.ts";

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

const handleContextMenu = async (event: MouseEvent) => {
  if (props.disabled) return;
  event.preventDefault();

  posX.value = event.clientX;
  posY.value = event.clientY;
  isOpen.value = true;

  await nextTick();

  if (menuRef.value && typeof window !== "undefined") {
    const rect = menuRef.value.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width - 8;
    const maxY = window.innerHeight - rect.height - 8;

    if (posX.value > maxX) {
      posX.value = maxX;
    }
    if (posY.value > maxY) {
      posY.value = maxY;
    }
  }
};

const closeMenu = () => {
  isOpen.value = false;
};

const handleItemClick = (item: MsContextMenuItem) => {
  if (item.disabled || item.divider) return;
  if (item.action) {
    item.action();
  }
  emit("select", item);
  closeMenu();
};

const handleDocumentClick = (event: MouseEvent) => {
  if (isOpen.value) {
    const target = event.target as Node | null;
    if (menuRef.value && !menuRef.value.contains(target)) {
      closeMenu();
    }
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (isOpen.value && event.key === "Escape") {
    closeMenu();
  }
};

onMounted(() => {
  if (typeof document !== "undefined") {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("click", handleDocumentClick);
    document.removeEventListener("keydown", handleKeydown);
  }
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
  >
    <slot />

    <Teleport to="body">
      <ul
        v-if="isOpen"
        ref="menuRef"
        class="ms-context-menu-panel"
        role="menu"
        :style="menuStyle"
        data-ms-context-menu
        @click.stop
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
            :aria-disabled="item.disabled"
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
