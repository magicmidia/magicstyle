<template>
  <div
    :class="classes"
    :role="computedType === 'radio' ? 'radio' : 'checkbox'"
    :aria-checked="selected"
    :aria-disabled="computedDisabled ? 'true' : undefined"
    :tabindex="computedDisabled || !tabbable ? -1 : 0"
    @click="handleClick"
    @keydown.space.prevent="handleClick"
    @keydown.enter.prevent="handleClick"
  >
    <!-- Indicator (Radio circle or Checkbox square) -->
    <div
      class="ms-choicebox-item__indicator"
      :class="`ms-choicebox-item__indicator--${computedType}`"
      aria-hidden="true"
    >
      <slot name="indicator" :selected="selected" :type="computedType">
        <svg
          v-if="computedType === 'checkbox'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </slot>
    </div>

    <!-- Content -->
    <div class="ms-choicebox-item__content">
      <div
        v-if="title || $slots.title || badge || $slots.badge || price || $slots.price"
        class="ms-choicebox-item__header"
      >
        <div class="ms-choicebox-item__title-wrap">
          <span v-if="icon || $slots.icon" class="ms-choicebox-item__icon">
            <slot name="icon">{{ icon }}</slot>
          </span>
          <h4 v-if="title || $slots.title" class="ms-choicebox-item__title">
            <slot name="title">{{ title }}</slot>
          </h4>
          <span v-if="badge || $slots.badge" class="ms-choicebox-item__badge">
            <slot name="badge">{{ badge }}</slot>
          </span>
        </div>

        <span v-if="price || $slots.price" class="ms-choicebox-item__price">
          <slot name="price">{{ price }}</slot>
        </span>
      </div>

      <p v-if="description || $slots.description" class="ms-choicebox-item__description">
        <slot name="description">{{ description }}</slot>
      </p>

      <div v-if="$slots.default || $slots.extra" class="ms-choicebox-item__extra">
        <slot name="extra" />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount } from "vue";
import { MS_CHOICEBOX_KEY, type MsChoiceboxItemProps } from "./types.ts";

defineOptions({
  name: "MsChoiceboxItem",
});

const props = withDefaults(defineProps<MsChoiceboxItemProps>(), {
  title: "",
  description: "",
  badge: "",
  price: "",
  icon: "",
  disabled: false,
});

const group = inject(MS_CHOICEBOX_KEY, null);

const computedType = computed(() => props.type || group?.type || "radio");
const computedSize = computed(() => props.size || group?.size || "md");
const computedTone = computed(() => props.tone || group?.tone || "primary");
const computedIndicatorPlacement = computed(
  () => props.indicatorPlacement || group?.indicatorPlacement || "left",
);
const computedDisabled = computed(() => props.disabled || group?.disabled || false);

const unregister = group?.register?.(props.value, () => computedDisabled.value);
if (unregister) onBeforeUnmount(unregister);

/** In a radio group only one item (checked, else first enabled) is in the tab order. */
const tabbable = computed(() => (group?.isTabbable ? group.isTabbable(props.value) : true));

const selected = computed(() => {
  if (group) {
    return group.isSelected(props.value);
  }
  return false;
});

const classes = computed(() => [
  "ms-choicebox-item",
  `ms-choicebox-item--${computedSize.value}`,
  `ms-choicebox-item--tone-${computedTone.value}`,
  {
    "ms-choicebox-item--selected": selected.value,
    "ms-choicebox-item--disabled": computedDisabled.value,
    "ms-choicebox-item--indicator-right": computedIndicatorPlacement.value === "right",
  },
]);

function handleClick() {
  if (computedDisabled.value) return;
  if (group) {
    group.toggleValue(props.value);
  }
}
</script>
