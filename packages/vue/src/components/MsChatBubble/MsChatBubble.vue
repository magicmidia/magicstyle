<script setup lang="ts">
import { computed } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsChatBubbleProps } from "./types.ts";

const props = withDefaults(defineProps<MsChatBubbleProps>(), {
  placement: "start",
  variant: "soft",
  tone: "neutral",
  typing: false,
});

defineSlots<{
  /** Message content (not rendered while `typing`). */
  default?(): unknown;
  /** Avatar next to the bubble. */
  avatar?(): unknown;
  /** Replaces the name/timestamp header. */
  header?(): unknown;
  /** Replaces the whole footer (including the status). */
  footer?(): unknown;
  /** Replaces the delivery status indicator. */
  status?(): unknown;
}>();

const wrapperClasses = computed(() => [
  "ms-chat-bubble-wrapper",
  `ms-chat-bubble-wrapper--${props.placement}`,
]);

const bubbleClasses = computed(() => [
  "ms-chat-bubble",
  `ms-chat-bubble--variant-${props.variant}`,
  `ms-chat-bubble--tone-${props.tone}`,
  { "ms-chat-bubble--typing": props.typing },
]);

const t = useMsMessages();

const statusIcons: Record<string, string> = {
  sending: "⏳",
  sent: "✓",
  read: "✓✓",
};
</script>

<template>
  <div :class="wrapperClasses" data-ms-chat-bubble>
    <!-- Avatar -->
    <div v-if="$slots.avatar" class="ms-chat-bubble-avatar">
      <slot name="avatar" />
    </div>

    <div class="ms-chat-bubble-content">
      <!-- Header / Name -->
      <div v-if="props.name || $slots.header" class="ms-chat-bubble-header">
        <slot name="header">
          <span class="ms-chat-bubble-header__name">{{ props.name }}</span>
          <span v-if="props.timestamp" class="ms-chat-bubble-header__time">{{
            props.timestamp
          }}</span>
        </slot>
      </div>

      <!-- Bubble Body -->
      <div v-if="props.typing" :class="bubbleClasses" role="status">
        <span class="ms-chat-bubble__typing-label">{{ t.chatBubble.typing }}</span>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </div>
      <div v-else :class="bubbleClasses">
        <slot />
      </div>

      <!-- Footer / Status -->
      <div v-if="props.status || $slots.footer || $slots.status" class="ms-chat-bubble-footer">
        <slot name="footer">
          <slot name="status">
            <span
              v-if="props.status"
              class="ms-chat-bubble-status"
              role="img"
              :aria-label="t.chatBubble[props.status] ?? props.status"
            >
              {{ statusIcons[props.status] || props.status }}
            </span>
          </slot>
        </slot>
      </div>
    </div>
  </div>
</template>
