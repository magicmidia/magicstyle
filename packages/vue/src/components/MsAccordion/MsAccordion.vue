<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import type { MsAccordionProps, MsAccordionEmits, MsAccordionValue } from "./types.ts";
import { MS_ACCORDION_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsAccordionProps>(), {
  multiple: false,
  variant: "default",
  size: "md",
});

const emit = defineEmits<MsAccordionEmits>();

defineSlots<{
  default?(): unknown;
}>();

const isExpanded = (value: MsAccordionValue): boolean => {
  if (props.modelValue === undefined) return false;
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

const toggle = (value: MsAccordionValue) => {
  if (props.multiple) {
    const current = Array.isArray(props.modelValue)
      ? [...props.modelValue]
      : props.modelValue !== undefined
        ? [props.modelValue]
        : [];
    const index = current.indexOf(value);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(value);
    }
    emit("update:modelValue", current);
    emit("change", current);
  } else {
    const next = props.modelValue === value ? "" : value;
    emit("update:modelValue", next);
    emit("change", next);
  }
};

provide(MS_ACCORDION_KEY, {
  isExpanded,
  toggle,
  variant: toRef(props, "variant"),
  size: toRef(props, "size"),
});

const accordionClasses = computed(() => [
  "ms-accordion",
  `ms-accordion--variant-${props.variant}`,
  `ms-accordion--size-${props.size}`,
]);
</script>

<template>
  <div :class="accordionClasses" role="presentation" data-ms-accordion>
    <slot />
  </div>
</template>
