<script setup lang="ts">
import { ref, computed } from "vue";
import type { MsBannerProps, MsBannerEmits } from "./types.ts";

const props = withDefaults(defineProps<MsBannerProps>(), {
  tone: "info",
  variant: "soft",
  position: "inline",
  dismissible: false,
});

const emit = defineEmits<MsBannerEmits>();

defineSlots<{
  default?(): unknown;
  icon?(): unknown;
  title?(): unknown;
  actions?(): unknown;
}>();

const visible = ref(true);

const bannerClasses = computed(() => [
  "ms-banner",
  `ms-banner--tone-${props.tone}`,
  `ms-banner--variant-${props.variant}`,
  `ms-banner--position-${props.position}`,
]);

const defaultIcons: Record<string, string> = {
  primary: "✨",
  info: "ℹ️",
  warning: "⚠️",
  danger: "🚫",
  success: "✅",
  neutral: "📢",
};

const handleDismiss = () => {
  visible.value = false;
  emit("dismiss");
};

const handleAction = () => {
  emit("action");
};
</script>

<template>
  <div v-if="visible" :class="bannerClasses" role="region" data-ms-banner>
    <div class="ms-banner__content">
      <span class="ms-banner__icon" aria-hidden="true">
        <slot name="icon">{{ defaultIcons[props.tone] }}</slot>
      </span>
      <div class="ms-banner__text">
        <strong v-if="props.title || $slots.title" class="ms-banner__title">
          <slot name="title">{{ props.title }}</slot>
        </strong>
        <slot />
      </div>
    </div>

    <div class="ms-banner__actions">
      <slot name="actions">
        <button
          v-if="props.actionLabel"
          type="button"
          class="ms-banner__action-btn"
          @click="handleAction"
        >
          {{ props.actionLabel }}
        </button>
      </slot>
      <button
        v-if="props.dismissible"
        type="button"
        class="ms-banner__close"
        aria-label="Fechar aviso"
        @click="handleDismiss"
      >
        ✕
      </button>
    </div>
  </div>
</template>
