<template>
  <li :class="classes">
    <span v-if="current" class="ms-breadcrumbs__current" aria-current="page">
      <span v-if="$slots.icon || icon" class="ms-breadcrumbs__icon" aria-hidden="true">
        <slot name="icon">{{ icon }}</slot>
      </span>
      <slot />
    </span>
    <a v-else-if="href && !disabled" class="ms-breadcrumbs__link" :href="href">
      <span v-if="$slots.icon || icon" class="ms-breadcrumbs__icon" aria-hidden="true">
        <slot name="icon">{{ icon }}</slot>
      </span>
      <slot />
    </a>
    <span v-else class="ms-breadcrumbs__text">
      <span v-if="$slots.icon || icon" class="ms-breadcrumbs__icon" aria-hidden="true">
        <slot name="icon">{{ icon }}</slot>
      </span>
      <slot />
    </span>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MsBreadcrumbItemProps } from "./types.ts";

defineOptions({
  name: "MsBreadcrumbItem",
});

const props = withDefaults(defineProps<MsBreadcrumbItemProps>(), {
  current: false,
  disabled: false,
});

const classes = computed(() => {
  return [
    "ms-breadcrumbs__item",
    {
      "ms-breadcrumbs__item--current": props.current,
      "ms-breadcrumbs__item--disabled": props.disabled,
    },
  ];
});
</script>
