<script setup lang="ts">
import { ref, computed, useAttrs, useSlots } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsBannerProps, MsBannerEmits } from "./types.ts";

const props = withDefaults(defineProps<MsBannerProps>(), {
  tone: "info",
  variant: "soft",
  position: "inline",
  dismissible: false,
});

const emit = defineEmits<MsBannerEmits>();

const t = useMsMessages();

defineSlots<{
  /** Banner message body. */
  default?(): unknown;
  /** Replaces the tone's default emoji icon. */
  icon?(): unknown;
  /** Rich title; replaces the `title` prop and names the region. */
  title?(): unknown;
  /** Replaces the default action button (the dismiss button is kept). */
  actions?(): unknown;
}>();

const visible = ref(true);
const attrs = useAttrs();
const slots = useSlots();
const titleId = useMsId("ms-banner-title");

/**
 * A `region` landmark needs an accessible name: the visible title when there is one,
 * else the localized `banner.label`. An explicit aria-label/aria-labelledby attr wins.
 */
const hasTitle = computed(() => Boolean(props.title) || slots.title !== undefined);
const regionName = computed(() => {
  if (attrs["aria-label"] !== undefined || attrs["aria-labelledby"] !== undefined) return {};
  return hasTitle.value ? { "aria-labelledby": titleId } : { "aria-label": t.value.banner.label };
});

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
  secondary: "ℹ️",
  accent: "ℹ️",
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
  <div v-if="visible" :class="bannerClasses" role="region" data-ms-banner v-bind="regionName">
    <div class="ms-banner__content">
      <span class="ms-banner__icon" aria-hidden="true">
        <slot name="icon">{{ defaultIcons[props.tone] }}</slot>
      </span>
      <div class="ms-banner__text">
        <strong v-if="hasTitle" :id="titleId" class="ms-banner__title">
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
        :aria-label="t.banner.dismiss"
        @click="handleDismiss"
      >
        ✕
      </button>
    </div>
  </div>
</template>
