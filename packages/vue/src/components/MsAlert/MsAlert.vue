<script setup lang="ts">
import { computed, ref } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsAlertProps } from "./types.ts";

const props = withDefaults(defineProps<MsAlertProps>(), {
  variant: "soft",
  tone: "info",
  size: "md",
  align: "center",
  iconStyle: "plain",
  dismissible: false,
});

const t = useMsMessages();

const emit = defineEmits<{
  close: [];
  "update:open": [value: boolean];
}>();

defineSlots<{
  default?(): unknown;
  icon?(): unknown;
  title?(): unknown;
  actions?(): unknown;
  close?(): unknown;
}>();

const visible = ref(true);

function onClose(): void {
  visible.value = false;
  emit("close");
  emit("update:open", false);
}

const iconDimensions = computed(() => {
  if (props.size === "sm") return 18;
  if (props.size === "lg") return 26;
  return 22;
});

const alertClasses = computed(() => {
  return ["ms-alert", `ms-alert--${props.size}`];
});

const iconClasses = computed(() => {
  return ["ms-alert-icon", props.iconStyle === "featured" ? "ms-alert-icon--featured" : ""].filter(
    Boolean,
  );
});
</script>

<template>
  <div
    v-if="visible"
    :class="alertClasses"
    role="alert"
    :data-variant="props.variant"
    :data-tone="props.tone"
    :data-align="props.align"
  >
    <div :class="iconClasses" aria-hidden="true">
      <slot name="icon">
        <!-- Default tone icons (22-26px, bold and centered) -->
        <svg
          v-if="props.tone === 'success'"
          :width="iconDimensions"
          :height="iconDimensions"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>

        <svg
          v-else-if="props.tone === 'warning'"
          :width="iconDimensions"
          :height="iconDimensions"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>

        <svg
          v-else-if="props.tone === 'danger'"
          :width="iconDimensions"
          :height="iconDimensions"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>

        <svg
          v-else
          :width="iconDimensions"
          :height="iconDimensions"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </slot>
    </div>

    <div class="ms-alert-content">
      <div v-if="$slots.title || props.title" class="ms-alert-title">
        <slot name="title">{{ props.title }}</slot>
      </div>

      <div v-if="$slots.default || props.description" class="ms-alert-description">
        <slot>{{ props.description }}</slot>
      </div>

      <div v-if="$slots.actions" class="ms-alert-actions">
        <slot name="actions" />
      </div>
    </div>

    <button
      v-if="props.dismissible"
      type="button"
      class="ms-alert-close"
      :aria-label="t.alert.dismiss"
      @click="onClose"
    >
      <slot name="close">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </slot>
    </button>
  </div>
</template>
