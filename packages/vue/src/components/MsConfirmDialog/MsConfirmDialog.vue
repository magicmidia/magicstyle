<script setup lang="ts">
import { computed, watch, onMounted, onBeforeUnmount } from "vue";
import type { MsConfirmDialogProps, MsConfirmDialogEmits } from "./types.ts";
import MsButton from "../MsButton/MsButton.vue";
import { useMsId } from "../../composables/use-ms-id.ts";

const props = withDefaults(defineProps<MsConfirmDialogProps>(), {
  open: false,
  tone: "danger",
  title: "Confirmar ação",
  confirmLabel: "Confirmar",
  cancelLabel: "Cancelar",
  loading: false,
  closeOnBackdrop: true,
  closeOnEscape: true,
  teleportTo: "body",
});

const emit = defineEmits<MsConfirmDialogEmits>();

defineSlots<{
  default?(): unknown;
  icon?(): unknown;
  title?(): unknown;
  footer?(): unknown;
}>();

const titleId = useMsId("ms-confirm-title");
const messageId = useMsId("ms-confirm-desc");

const toneIcons: Record<string, string> = {
  danger: "⚠️",
  warning: "⚡",
  info: "ℹ️",
  primary: "❓",
  secondary: "💡",
  accent: "✨",
  success: "✅",
  neutral: "💬",
};

const handleCancel = () => {
  if (props.loading) return;
  emit("update:open", false);
  emit("cancel");
};

const handleConfirm = () => {
  emit("confirm");
};

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget && props.closeOnBackdrop) {
    handleCancel();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (props.open && props.closeOnEscape && event.key === "Escape") {
    handleCancel();
  }
};

watch(
  () => props.open,
  (isOpen) => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
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

const dialogClasses = computed(() => [
  "ms-confirm-dialog",
  `ms-confirm-dialog--tone-${props.tone}`,
]);
</script>

<template>
  <Teleport :to="props.teleportTo">
    <div
      v-if="props.open"
      class="ms-confirm-dialog-backdrop"
      data-ms-confirm-dialog-backdrop
      @click="handleBackdropClick"
    >
      <div
        :class="dialogClasses"
        role="alertdialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        :aria-describedby="message || $slots.default ? messageId : undefined"
        data-ms-confirm-dialog
        @click.stop
      >
        <div class="ms-confirm-dialog__body">
          <div class="ms-confirm-dialog__icon" aria-hidden="true">
            <slot name="icon">{{ toneIcons[props.tone] }}</slot>
          </div>
          <div class="ms-confirm-dialog__text-group">
            <h3 :id="titleId" class="ms-confirm-dialog__title">
              <slot name="title">{{ props.title }}</slot>
            </h3>
            <div
              v-if="props.message || $slots.default"
              :id="messageId"
              class="ms-confirm-dialog__message"
            >
              <slot>{{ props.message }}</slot>
            </div>
          </div>
        </div>

        <div class="ms-confirm-dialog__footer">
          <slot name="footer">
            <MsButton variant="outline" size="sm" :disabled="props.loading" @click="handleCancel">
              {{ props.cancelLabel }}
            </MsButton>
            <MsButton
              variant="solid"
              size="sm"
              :tone="props.tone"
              :loading="props.loading"
              @click="handleConfirm"
            >
              {{ props.confirmLabel }}
            </MsButton>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
