<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsCheckboxProps } from "./types.ts";

const props = defineProps<MsCheckboxProps>();

const emit = defineEmits<{
  "update:checked": [checked: boolean];
  change: [checked: boolean];
}>();

const field = useFieldContext();
const fallbackId = useMsId("ms-checkbox");
const inputRef = ref<HTMLInputElement | null>(null);

const resolvedId = computed(() => field?.controlId ?? fallbackId);

watch(
  () => props.indeterminate,
  (value) => {
    if (inputRef.value !== null) inputRef.value.indeterminate = value === true;
  },
  { immediate: true },
);

function onChange(event: Event): void {
  const checked = (event.target as HTMLInputElement).checked;
  emit("update:checked", checked);
  emit("change", checked);
}
</script>

<template>
  <label class="ms-checkbox" :data-disabled="props.disabled || undefined">
    <input
      :id="resolvedId"
      ref="inputRef"
      class="ms-checkbox-native"
      type="checkbox"
      :checked="props.checked"
      :disabled="props.disabled"
      :name="props.name"
      :value="props.value"
      :aria-checked="props.indeterminate ? 'mixed' : props.checked"
      @change="onChange"
    />
    <span class="ms-checkbox-box" aria-hidden="true" />
    <span v-if="props.label">{{ props.label }}</span>
  </label>
</template>
