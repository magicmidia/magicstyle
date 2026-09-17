<script setup lang="ts">
import { computed } from "vue";
import type { MsBlockquoteProps } from "./types.ts";

const props = withDefaults(defineProps<MsBlockquoteProps>(), {
  cite: "",
  author: "",
  authorRole: "",
  authorAvatar: "",
  tone: "default",
  variant: "bordered",
  size: "md",
  icon: false,
});

const classes = computed(() => [
  "ms-blockquote",
  `ms-blockquote--${props.variant}`,
  `ms-blockquote--${props.tone}`,
  `ms-blockquote--${props.size}`,
]);
</script>

<template>
  <blockquote
    :class="classes"
    :cite="props.cite || undefined"
    :data-variant="props.variant"
    :data-tone="props.tone"
    :data-size="props.size"
  >
    <div v-if="props.icon || $slots.icon" class="ms-blockquote__icon" aria-hidden="true">
      <slot name="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path
            d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
          />
        </svg>
      </slot>
    </div>

    <div class="ms-blockquote__content">
      <slot />
    </div>

    <footer
      v-if="props.author || props.cite || props.authorRole || $slots.author || $slots.cite"
      class="ms-blockquote__footer"
    >
      <img
        v-if="props.authorAvatar"
        :src="props.authorAvatar"
        :alt="props.author"
        class="ms-blockquote__avatar"
      />
      <div class="ms-blockquote__author-group">
        <span v-if="props.author || $slots.author" class="ms-blockquote__author">
          <slot name="author">{{ props.author }}</slot>
        </span>
        <span v-if="props.authorRole || $slots.role" class="ms-blockquote__role">
          <slot name="role">{{ props.authorRole }}</slot>
        </span>
        <cite v-if="props.cite || $slots.cite" class="ms-blockquote__cite">
          <slot name="cite">{{ props.cite }}</slot>
        </cite>
      </div>
    </footer>
  </blockquote>
</template>
