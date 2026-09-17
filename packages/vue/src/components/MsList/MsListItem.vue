<script setup lang="ts">
import { computed } from "vue";
import type { MsListItemProps } from "./types.ts";

const props = withDefaults(defineProps<MsListItemProps>(), {
  interactive: false,
  active: false,
  disabled: false,
  as: "li",
});

defineSlots<{
  default?(): unknown;
  leading?(): unknown;
  title?(): unknown;
  description?(): unknown;
  trailing?(): unknown;
}>();

const itemClasses = computed(() => [
  "ms-list-item",
  props.interactive ? "ms-list-item--interactive" : "",
  props.active ? "ms-list-item--active" : "",
  props.disabled ? "ms-list-item--disabled" : "",
]);
</script>

<template>
  <component
    :is="props.as"
    :class="itemClasses"
    :aria-disabled="props.disabled"
    :aria-selected="props.active"
    data-ms-list-item
  >
    <div v-if="$slots.leading" class="ms-list-item__leading">
      <slot name="leading" />
    </div>

    <div class="ms-list-item__body">
      <div v-if="props.title || $slots.title" class="ms-list-item__title">
        <slot name="title">{{ props.title }}</slot>
      </div>
      <div v-if="props.description || $slots.description" class="ms-list-item__description">
        <slot name="description">{{ props.description }}</slot>
      </div>
      <slot />
    </div>

    <div v-if="$slots.trailing" class="ms-list-item__trailing">
      <slot name="trailing" />
    </div>
  </component>
</template>
