<script setup lang="ts">
import { computed } from "vue";
import { useFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsInputProps } from "./types.ts";

const props = withDefaults(defineProps<MsInputProps>(), {
  type: "text",
  size: "md",
  tone: "default",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  input: [value: string];
}>();

defineSlots<{
  prefix?(): unknown;
  suffix?(): unknown;
}>();

const field = useFieldContext();
const fallbackId = useMsId("ms-input");

const resolvedId = computed(() => field?.controlId ?? fallbackId);
const describedBy = computed(() => field?.describedBy());
const isInvalid = computed(() => props.invalid === true || field?.invalid() === true);
const resolvedTone = computed(() => (isInvalid.value ? "danger" : props.tone));
</script>

<template>
  <div
    class="ms-input"
    :data-size="props.size"
    :data-tone="resolvedTone === 'default' ? undefined : resolvedTone"
    :data-floating="props.floatingLabel ? '' : undefined"
    :data-invalid="isInvalid || undefined"
    :data-processing="props.processing || undefined"
    :data-disabled="props.disabled || props.processing || undefined"
  >
    <span v-if="$slots.prefix" class="ms-input-prefix" data-ms-slot="prefix">
      <slot name="prefix" />
    </span>
    <input
      :id="resolvedId"
      class="ms-input-native"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.floatingLabel ? ' ' : props.placeholder"
      :disabled="props.disabled || props.processing"
      :readonly="props.readonly"
      :name="props.name"
      :autocomplete="props.autocomplete"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value);
        emit('input', ($event.target as HTMLInputElement).value);
      "
    />
    <label v-if="props.floatingLabel" class="ms-input-floating-label" :for="resolvedId">
      {{ props.floatingLabel }}
    </label>
    <span v-if="$slots.suffix" class="ms-input-suffix" data-ms-slot="suffix">
      <slot name="suffix" />
    </span>
    <span v-if="props.processing" class="ms-input-spinner" aria-hidden="true" />
  </div>
</template>
