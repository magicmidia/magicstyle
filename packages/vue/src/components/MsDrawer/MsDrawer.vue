<script setup lang="ts">
import { computed, watch, onMounted, onBeforeUnmount } from "vue";
import type { MsDrawerProps, MsDrawerEmits } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";

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

const handleKeydown = (event: KeyboardEvent) => {
  if (props.open && props.closeOnEscape && event.key === "Escape") {
    event.stopPropagation();
    handleClose();
  }
};

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      emit("open");
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <Teleport :to="props.teleportTo">
    <div
      v-if="props.open"
      class="ms-drawer-backdrop"
      data-ms-drawer-backdrop
      @click="handleBackdropClick"
    >
      <div
        :class="drawerClasses"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title || $slots.title ? titleId : undefined"
        :aria-describedby="description || $slots.description ? descriptionId : undefined"
        data-ms-drawer
        @click.stop
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
              aria-label="Close drawer"
              @click="handleClose"
            >
              <slot name="close">✕</slot>
            </button>
          </slot>
        </header>

        <!-- Body Content -->
        <main class="ms-drawer__body">
          <slot />
        </main>

        <!-- Footer Actions -->
        <footer v-if="$slots.footer" class="ms-drawer__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>
