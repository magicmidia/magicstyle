<script setup lang="ts">
import { computed, ref, toRef } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useScrollLock } from "../../composables/use-scroll-lock.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { useFocusTrap } from "../../composables/use-focus-trap.ts";
import type { MsDialogProps } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

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

const t = useMsMessages();

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

const isOpen = toRef(props, "open");
const contentRef = ref<HTMLElement | null>(null);

useScrollLock(isOpen);
useFocusTrap(contentRef, isOpen);
useDismissableLayer({
  active: isOpen,
  inside: [contentRef],
  onDismiss: requestClose,
  closeOnEscape: () => props.closeOnEscape,
  // The backdrop click is handled by onOverlayClick.
  closeOnOutside: () => false,
});
</script>

<template>
  <Teleport to="body">
    <Transition name="ms-dialog">
      <div
        v-if="props.open"
        :class="['ms-dialog-overlay', `ms-dialog-overlay--${props.placement}`]"
        @click="onOverlayClick"
      >
        <div
          ref="contentRef"
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
            :aria-label="t.dialog.close"
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
    </Transition>
  </Teleport>
</template>
