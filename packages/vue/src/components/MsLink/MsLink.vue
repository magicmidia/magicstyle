<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";
import type { MsLinkProps, MsLinkEmits } from "./types.ts";

const props = withDefaults(defineProps<MsLinkProps>(), {
  href: "",
  variant: "primary",
  underline: "hover",
  disabled: false,
});

const emit = defineEmits<MsLinkEmits>();
const instance = getCurrentInstance();

const isExternal = computed(() => {
  const rawProps = instance?.vnode.props;
  if (rawProps && ("external" in rawProps || "external" in (instance?.attrs || {}))) {
    return Boolean(props.external);
  }
  if (!props.href) return false;
  return /^(https?:\/\/|\/\/)/i.test(props.href);
});

const resolvedTarget = computed(() => {
  if (props.target) return props.target;
  return isExternal.value ? "_blank" : undefined;
});

const resolvedRel = computed(() => {
  if (props.rel) return props.rel;
  return isExternal.value ? "noopener noreferrer" : undefined;
});

const classes = computed(() => [
  "ms-link",
  `ms-link--${props.variant}`,
  `ms-link--underline-${props.underline}`,
  {
    "ms-link--external": isExternal.value,
    "ms-link--disabled": props.disabled,
  },
]);

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit("click", event);
};
</script>

<template>
  <a
    :class="classes"
    :href="props.disabled ? undefined : props.href || undefined"
    :target="props.disabled ? undefined : resolvedTarget"
    :rel="props.disabled ? undefined : resolvedRel"
    :download="props.disabled ? undefined : props.download"
    :aria-disabled="props.disabled ? 'true' : undefined"
    :tabindex="props.disabled ? -1 : undefined"
    :data-variant="props.variant"
    :data-underline="props.underline"
    :data-external="isExternal ? '' : undefined"
    @click="handleClick"
  >
    <span v-if="$slots.prefix" class="ms-link__prefix">
      <slot name="prefix" />
    </span>

    <slot />

    <span v-if="$slots.suffix" class="ms-link__suffix">
      <slot name="suffix" />
    </span>

    <span v-if="isExternal" class="ms-link__external-icon" aria-hidden="true">
      <slot name="external-icon">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </slot>
    </span>
  </a>
</template>
