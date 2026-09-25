<script setup lang="ts">
import { computed } from "vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import type { MsSwitchProps } from "./types.ts";

defineOptions({
  name: "MsSwitch",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<MsSwitchProps>(), {
  // Explicit undefined keeps Vue from casting absent booleans to false (either binding may be used).
  modelValue: undefined,
  checked: undefined,
  size: "md",
  tone: "primary",
  labelPlacement: "right",
});

/** `v-model` and `v-model:checked` are both supported. */
const isChecked = computed(() => props.modelValue ?? props.checked ?? false);

const emit = defineEmits<{
  "update:modelValue": [checked: boolean];
  "update:checked": [checked: boolean];
  change: [checked: boolean];
}>();

defineSlots<{
  default?(): unknown;
  description?(): unknown;
}>();

const fieldControl = useFieldControl("ms-switch");
const controlId = computed(() => fieldControl.id);

function onChange(event: Event): void {
  const next = (event.target as HTMLInputElement).checked;
  emit("update:modelValue", next);
  emit("update:checked", next);
  emit("change", next);
}
</script>

<template>
  <label
    v-bind="rootAttrs($attrs)"
    class="ms-switch"
    :data-size="props.size"
    :data-tone="props.tone"
    :data-label-placement="props.labelPlacement"
    :data-disabled="props.disabled || undefined"
  >
    <input
      :id="controlId"
      class="ms-switch-native"
      type="checkbox"
      role="switch"
      :checked="isChecked"
      :disabled="props.disabled"
      :name="props.name"
      :value="props.value"
      :aria-invalid="fieldControl.fieldInvalid.value || undefined"
      :aria-describedby="fieldControl.describedBy.value"
      v-bind="controlAttrs($attrs)"
      @change="onChange"
    />
    <span class="ms-switch-track" aria-hidden="true" />
    <div
      v-if="props.label || $slots.default || props.description || $slots.description"
      class="ms-switch-label-group"
    >
      <span class="ms-switch-label">
        <slot>{{ props.label }}</slot>
      </span>
      <span v-if="props.description || $slots.description" class="ms-switch-description">
        <slot name="description">{{ props.description }}</slot>
      </span>
    </div>
  </label>
</template>
