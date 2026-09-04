<script setup lang="ts">
import { computed } from "vue";
import { useFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsTextareaProps } from "./types.ts";

const props = withDefaults(defineProps<MsTextareaProps>(), {
  tone: "default",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const field = useFieldContext();
const fallbackId = useMsId("ms-textarea");

const resolvedId = computed(() => field?.controlId ?? fallbackId);
const describedBy = computed(() => field?.describedBy());
const isInvalid = computed(() => props.invalid === true || field?.invalid() === true);
const resolvedTone = computed(() => (isInvalid.value ? "danger" : props.tone));
</script>

<template>
  <div
    class="ms-input ms-textarea"
    :data-tone="resolvedTone === 'default' ? undefined : resolvedTone"
    :data-invalid="isInvalid || undefined"
    :data-disabled="props.disabled || undefined"
  >
    <textarea
      :id="resolvedId"
      class="ms-input-native"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :rows="props.rows"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :name="props.name"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>
