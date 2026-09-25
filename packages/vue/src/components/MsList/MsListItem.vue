<script setup lang="ts">
import { computed, inject, onBeforeUnmount } from "vue";
import { MS_LIST_KEY, type MsListItemProps } from "./types.ts";

defineOptions({ name: "MsListItem" });

const props = withDefaults(defineProps<MsListItemProps>(), {
  interactive: false,
  active: false,
  disabled: false,
  as: "li",
});

defineSlots<{
  /** Extra body content below the title/description. */
  default?(): unknown;
  /** Leading media (icon, avatar). */
  leading?(): unknown;
  /** Rich title; replaces the `title` prop. */
  title?(): unknown;
  /** Rich description; replaces the `description` prop. */
  description?(): unknown;
  /** Trailing content (meta, badge, action). */
  trailing?(): unknown;
}>();

const list = inject(MS_LIST_KEY, null);
const isOption = computed(() => list?.selectable.value === true);
const unregister = list?.registerActive?.(() => props.active);
if (unregister) onBeforeUnmount(unregister);

/**
 * Listbox options use a roving tab stop (the selected option); interactive items in a
 * plain list are focusable. Disabled items are never in the tab order.
 */
const tabindex = computed(() => {
  if (props.disabled) return isOption.value ? -1 : undefined;
  if (isOption.value) return props.active ? 0 : -1;
  return props.interactive ? 0 : undefined;
});

/** Enter/Space activate focusable items like a click (they are not native buttons). */
function onKeydown(event: KeyboardEvent): void {
  if (props.disabled || event.target !== event.currentTarget) return;
  if (!props.interactive && !isOption.value) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  (event.currentTarget as HTMLElement).click();
}

const itemClasses = computed(() => [
  "ms-list-item",
  props.interactive || isOption.value ? "ms-list-item--interactive" : "",
  props.active ? "ms-list-item--active" : "",
  props.disabled ? "ms-list-item--disabled" : "",
]);
</script>

<template>
  <component
    :is="props.as"
    :class="itemClasses"
    :role="isOption ? 'option' : undefined"
    :tabindex="tabindex"
    :aria-disabled="props.disabled || undefined"
    :aria-selected="isOption ? props.active : undefined"
    :aria-current="!isOption && props.active ? 'true' : undefined"
    data-ms-list-item
    @keydown="onKeydown"
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
