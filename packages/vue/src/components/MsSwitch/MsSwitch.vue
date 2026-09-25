<script setup lang="ts">
import { computed } from "vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import type { MsSwitchProps } from "./types.ts";

defineOptions({
  inheritAttrs: false,
  name: "MsSwitch",
});

const props = withDefaults(defineProps<MsSwitchProps>(), {
  size: "md",
  tone: "primary",
  labelPlacement: "right",
});

const emit = defineEmits<{
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
  const isChecked = (event.target as HTMLInputElement).checked;
  emit("update:checked", isChecked);
  emit("change", isChecked);
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
      :checked="props.checked"
      :disabled="props.disabled"
      :name="props.name"
      :value="props.value"
      :aria-invalid="fieldControl.fieldInvalid.value || undefined"
      :aria-describedby="fieldControl.describedBy.value"
      @change="onChange"
      v-bind="controlAttrs($attrs)"
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
