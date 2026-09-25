<script setup lang="ts">
import { computed, ref, toRef, watch } from "vue";
import type { MsDrawerProps, MsDrawerEmits } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useScrollLock } from "../../composables/use-scroll-lock.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { useFocusTrap } from "../../composables/use-focus-trap.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

const props = withDefaults(defineProps<MsDrawerProps>(), {
  open: false,
  placement: "right",
  size: "md",
  closeOnEscape: true,
  closeOnBackdrop: true,
  showClose: true,
  teleportTo: "body",
});

const emit = defineEmits<MsDrawerEmits>();

const t = useMsMessages();

defineSlots<{
  default?(): unknown;
  header?(): unknown;
  title?(): unknown;
  description?(): unknown;
  footer?(): unknown;
  close?(): unknown;
}>();

const titleId = useMsId("ms-drawer-title");
const descriptionId = useMsId("ms-drawer-desc");

const drawerClasses = computed(() => [
  "ms-drawer",
  `ms-drawer--placement-${props.placement}`,
  `ms-drawer--size-${props.size}`,
]);

const handleClose = () => {
  emit("update:open", false);
  emit("close");
};

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget && props.closeOnBackdrop) {
    handleClose();
  }
};

const isOpen = toRef(props, "open");
const panelRef = ref<HTMLElement | null>(null);

watch(isOpen, (open) => open && emit("open"), { immediate: true });

useScrollLock(isOpen);
useFocusTrap(panelRef, isOpen);
useDismissableLayer({
  active: isOpen,
  inside: [panelRef],
  onDismiss: handleClose,
  closeOnEscape: () => props.closeOnEscape,
  // The backdrop click is handled by handleBackdropClick.
  closeOnOutside: () => false,
});
</script>

<template>
  <Teleport :to="props.teleportTo">
    <Transition name="ms-drawer">
      <div
        v-if="props.open"
        class="ms-drawer-backdrop"
        data-ms-drawer-backdrop
        @click="handleBackdropClick"
      >
        <div
          ref="panelRef"
          :class="drawerClasses"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title || $slots.title ? titleId : undefined"
          :aria-describedby="description || $slots.description ? descriptionId : undefined"
          data-ms-drawer
          tabindex="-1"
        >
          <!-- Header -->
          <header
            v-if="title || description || $slots.header || $slots.title || showClose"
            class="ms-drawer__header"
          >
            <slot name="header">
              <div class="ms-drawer__title-group">
                <h2 v-if="title || $slots.title" :id="titleId" class="ms-drawer__title">
                  <slot name="title">{{ title }}</slot>
                </h2>
                <p
                  v-if="description || $slots.description"
                  :id="descriptionId"
                  class="ms-drawer__description"
                >
                  <slot name="description">{{ description }}</slot>
                </p>
              </div>
              <button
                v-if="showClose"
                type="button"
                class="ms-drawer__close"
                :aria-label="t.drawer.close"
                @click="handleClose"
              >
                <slot name="close">✕</slot>
              </button>
            </slot>
          </header>

          <!-- Body Content -->
          <div class="ms-drawer__body">
            <slot />
          </div>

          <!-- Footer Actions -->
          <footer v-if="$slots.footer" class="ms-drawer__footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
