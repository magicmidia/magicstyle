<script setup lang="ts">
import { computed } from "vue";
import type { MsCardProps } from "./types.ts";

defineOptions({
  name: "MsCard",
});

const props = withDefaults(defineProps<MsCardProps>(), {
  variant: "raised",
  padding: "md",
  interactive: false,
  hoverable: false,
  orientation: "vertical",
  headerDivider: false,
  footerDivider: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

defineSlots<{
  default?(): unknown;
  header?(): unknown;
  title?(): unknown;
  description?(): unknown;
  actions?(): unknown;
  footer?(): unknown;
  cover?(): unknown;
}>();

function onClick(event: MouseEvent): void {
  if (props.interactive) {
    emit("click", event);
  }
}

/** Interactive cards are focusable, so Enter/Space must activate them like a click. */
function onKeydown(event: KeyboardEvent): void {
  if (!props.interactive || event.target !== event.currentTarget) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  emit("click", event as unknown as MouseEvent);
}

const cardClasses = computed(() =>
  [
    "ms-card",
    props.headerDivider ? "ms-card--header-divider" : null,
    props.footerDivider ? "ms-card--footer-divider" : null,
    props.hoverable ? "ms-card--hoverable" : null,
    props.tone ? `ms-card--tone-${props.tone}` : null,
  ].filter(Boolean),
);
</script>

<template>
  <div
    :class="cardClasses"
    :data-variant="props.variant"
    :data-padding="props.padding"
    :data-tone="props.tone"
    :data-interactive="props.interactive || undefined"
    :data-hoverable="props.hoverable || undefined"
    :data-orientation="props.orientation !== 'vertical' ? props.orientation : undefined"
    :data-header-divider="props.headerDivider || undefined"
    :data-footer-divider="props.footerDivider || undefined"
    :tabindex="props.interactive ? 0 : undefined"
    @click="onClick"
    @keydown="onKeydown"
  >
    <!-- Cover Media -->
    <div v-if="$slots.cover || props.coverSrc" class="ms-card__cover">
      <slot name="cover">
        <img v-if="props.coverSrc" :src="props.coverSrc" :alt="props.coverAlt || ''" />
      </slot>
    </div>

    <!-- Body Wrapper (useful for horizontal cards) -->
    <div class="ms-card__body-wrapper">
      <div
        v-if="
          $slots.header ||
          $slots.title ||
          $slots.description ||
          props.title ||
          props.description ||
          $slots.actions
        "
        class="ms-card-header"
      >
        <slot name="header">
          <div class="ms-card-header-main">
            <div v-if="$slots.title || props.title" class="ms-card-title">
              <slot name="title">{{ props.title }}</slot>
            </div>
            <div v-if="$slots.description || props.description" class="ms-card-description">
              <slot name="description">{{ props.description }}</slot>
            </div>
          </div>
          <div v-if="$slots.actions" class="ms-card-actions">
            <slot name="actions" />
          </div>
        </slot>
      </div>

      <div v-if="$slots.default" class="ms-card-content">
        <slot />
      </div>

      <div v-if="$slots.footer" class="ms-card-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
