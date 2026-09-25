<script setup lang="ts">
import { computed, ref } from "vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import type { MsInputProps } from "./types.ts";

defineOptions({
  name: "MsInput",
  inheritAttrs: false,
});

const props = withDefaults(defineProps<MsInputProps>(), {
  type: "text",
  variant: "outline",
  size: "md",
  tone: "default",
  pill: false,
  clearable: false,
  passwordToggle: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
  input: [value: string];
  clear: [];
}>();

defineSlots<{
  prefix?(): unknown;
  suffix?(): unknown;
}>();

const showPassword = ref(false);

const effectiveType = computed(() => {
  if (props.type === "password" && props.passwordToggle) {
    return showPassword.value ? "text" : "password";
  }
  return props.type;
});

function onClear(): void {
  emit("update:modelValue", "");
  emit("input", "");
  emit("clear");
}

const fieldControl = useFieldControl("ms-input");

const resolvedId = computed(() => fieldControl.id);
const describedBy = computed(() => fieldControl.describedBy.value);
const isInvalid = computed(() => props.invalid === true || fieldControl.fieldInvalid.value);
const resolvedTone = computed(() => (isInvalid.value ? "danger" : props.tone));
</script>

<template>
  <div
    v-bind="rootAttrs($attrs)"
    class="ms-input"
    :data-variant="props.variant !== 'outline' ? props.variant : undefined"
    :data-pill="props.pill || undefined"
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
      :type="effectiveType"
      :value="props.modelValue"
      :placeholder="props.floatingLabel ? ' ' : props.placeholder"
      :disabled="props.disabled || props.processing"
      :readonly="props.readonly"
      :name="props.name"
      :autocomplete="props.autocomplete"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
      v-bind="controlAttrs($attrs)"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value);
        emit('input', ($event.target as HTMLInputElement).value);
      "
    />
    <label v-if="props.floatingLabel" class="ms-input-floating-label" :for="resolvedId">
      {{ props.floatingLabel }}
    </label>

    <!-- Clear button -->
    <button
      v-if="props.clearable && props.modelValue && !props.disabled && !props.readonly"
      type="button"
      class="ms-input-action-btn"
      aria-label="Limpar campo"
      @click="onClear"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4l8 8m0-8l-8 8" />
      </svg>
    </button>

    <!-- Password reveal toggle button -->
    <button
      v-if="props.type === 'password' && props.passwordToggle && !props.disabled"
      type="button"
      class="ms-input-action-btn"
      :aria-label="showPassword ? 'Ocultar senha' : 'Exibir senha'"
      @click="showPassword = !showPassword"
    >
      <svg
        v-if="showPassword"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
        />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>

    <span v-if="$slots.suffix" class="ms-input-suffix" data-ms-slot="suffix">
      <slot name="suffix" />
    </span>
    <span v-if="props.processing" class="ms-input-spinner" aria-hidden="true" />
  </div>
</template>
