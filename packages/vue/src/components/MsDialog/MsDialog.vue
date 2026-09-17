<script setup lang="ts">
import { computed, watch, onMounted, onBeforeUnmount } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsDialogProps } from "./types.ts";

const props = withDefaults(defineProps<MsDialogProps>(), {
  open: false,
  size: "md",
  placement: "center",
  tone: "default",
  role: "dialog",
  closeOnEscape: true,
  closeOnOutsideClick: true,
  showClose: true,
});

const emit = defineEmits<{
  "update:open": [value: boolean];
  close: [];
}>();

defineSlots<{
  default?(): unknown;
  header?(): unknown;
  footer?(): unknown;
  close?(): unknown;
}>();

const titleId = useMsId("ms-dialog-title");
const descriptionId = useMsId("ms-dialog-desc");

const ariaLabelledby = computed(() => (props.title ? titleId : undefined));
const ariaDescribedby = computed(() => (props.description ? descriptionId : undefined));

function requestClose(): void {
  emit("update:open", false);
  emit("close");
}

function onOverlayClick(event: MouseEvent): void {
  if (event.target === event.currentTarget && props.closeOnOutsideClick) {
    requestClose();
  }
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape" && props.closeOnEscape && props.open) {
    event.preventDefault();
    requestClose();
  }
}

let prevBodyOverflow = "";

watch(
  () => props.open,
  (isOpen) => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      prevBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else if (prevBodyOverflow !== undefined) {
      document.body.style.overflow = prevBodyOverflow;
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", onKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", onKeydown);
  }
  if (typeof document !== "undefined" && props.open) {
    document.body.style.overflow = prevBodyOverflow;
  }
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.open"
      :class="['ms-dialog-overlay', `ms-dialog-overlay--${props.placement}`]"
      @click="onOverlayClick"
    >
      <div
        class="ms-dialog-content"
        :role="props.role"
        aria-modal="true"
        :aria-labelledby="ariaLabelledby"
        :aria-describedby="ariaDescribedby"
        :data-size="props.size"
        :data-tone="props.tone !== 'default' ? props.tone : undefined"
        tabindex="-1"
      >
        <button
          v-if="props.showClose"
          type="button"
          class="ms-dialog-close"
          aria-label="Fechar"
          @click="requestClose"
        >
          <slot name="close">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </slot>
        </button>

        <div v-if="$slots.header || props.title || props.description" class="ms-dialog-header">
          <slot name="header">
            <h2 v-if="props.title" :id="titleId" class="ms-dialog-title">
              {{ props.title }}
            </h2>
            <p v-if="props.description" :id="descriptionId" class="ms-dialog-description">
              {{ props.description }}
            </p>
          </slot>
        </div>

        <div class="ms-dialog-body">
          <slot />
        </div>

        <div v-if="$slots.footer" class="ms-dialog-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
