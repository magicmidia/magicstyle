<script setup lang="ts">
import { computed } from "vue";
import { useFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsNativeSelectProps } from "./types.ts";

const props = withDefaults(defineProps<MsNativeSelectProps>(), {
  size: "md",
  variant: "outline",
  tone: "default",
  pill: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  change: [value: string | number];
}>();

defineSlots<{
  default?(): unknown;
}>();

const field = useFieldContext();
const fallbackId = useMsId("ms-native-select");

const resolvedId = computed(() => field?.controlId ?? fallbackId);
const describedBy = computed(() => field?.describedBy());
const isInvalid = computed(() => props.invalid === true || field?.invalid() === true);

function onChange(event: Event): void {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
  emit("change", target.value);
}
</script>

<template>
  <div class="ms-native-select-wrapper">
    <select
      :id="resolvedId"
      class="ms-native-select"
      :data-size="props.size"
      :data-variant="props.variant"
      :data-tone="props.tone !== 'default' ? props.tone : undefined"
      :data-pill="props.pill || undefined"
      :data-invalid="isInvalid || undefined"
      :data-disabled="props.disabled || undefined"
      :value="props.modelValue"
      :disabled="props.disabled"
      :required="props.required"
      :name="props.name"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
      @change="onChange"
    >
      <option
        v-if="props.placeholder"
        value=""
        disabled
        :selected="props.modelValue === undefined || props.modelValue === ''"
      >
        {{ props.placeholder }}
      </option>
      <template v-if="props.options && props.options.length > 0">
        <option
          v-for="opt in props.options"
          :key="String(opt.value)"
          :value="opt.value"
          :disabled="opt.disabled"
        >
          {{ opt.label }}
        </option>
      </template>
      <slot v-else />
    </select>
    <span class="ms-native-select-chevron" aria-hidden="true">
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m4 6 4 4 4-4" />
      </svg>
    </span>
  </div>
</template>
