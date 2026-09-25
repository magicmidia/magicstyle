<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import type { MsCheckboxProps } from "./types.ts";

defineOptions({
  name: "MsCheckbox",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<MsCheckboxProps>(), {
  // Explicit undefined keeps Vue from casting absent booleans to false (either binding may be used).
  modelValue: undefined,
  checked: undefined,
  size: "md",
  tone: "primary",
  card: false,
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

const fieldControl = useFieldControl("ms-checkbox");
const inputRef = ref<HTMLInputElement | null>(null);

const resolvedId = computed(() => fieldControl.id);

// `indeterminate` is a DOM property, not an attribute: apply it once the input exists and on
// every change (the browser also clears it on user clicks, so re-sync after checked changes).
function syncIndeterminate(): void {
  if (inputRef.value !== null) inputRef.value.indeterminate = props.indeterminate === true;
}
onMounted(syncIndeterminate);
watch(() => [props.indeterminate, isChecked.value], syncIndeterminate, { flush: "post" });

function onChange(event: Event): void {
  const checked = (event.target as HTMLInputElement).checked;
  emit("update:modelValue", checked);
  emit("update:checked", checked);
  emit("change", checked);
}
</script>

<template>
  <label
    v-bind="rootAttrs($attrs)"
    class="ms-checkbox"
    :data-size="props.size"
    :data-tone="props.tone"
    :data-card="props.card || undefined"
    :data-disabled="props.disabled || undefined"
  >
    <input
      :id="resolvedId"
      ref="inputRef"
      class="ms-checkbox-native"
      type="checkbox"
      :checked="isChecked"
      :disabled="props.disabled"
      :name="props.name"
      :value="props.value"
      :aria-checked="props.indeterminate ? 'mixed' : undefined"
      :aria-invalid="fieldControl.fieldInvalid.value || undefined"
      :aria-describedby="fieldControl.describedBy.value"
      v-bind="controlAttrs($attrs)"
      @change="onChange"
    />
    <span class="ms-checkbox-box" aria-hidden="true" />
    <div
      v-if="props.label || $slots.default || props.description || $slots.description"
      class="ms-checkbox-label-group"
    >
      <span class="ms-checkbox-label">
        <slot>{{ props.label }}</slot>
      </span>
      <span v-if="props.description || $slots.description" class="ms-checkbox-description">
        <slot name="description">{{ props.description }}</slot>
      </span>
    </div>
  </label>
</template>
