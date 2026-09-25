<script setup lang="ts">
import { computed } from "vue";
import type { MsMaskedInputProps, MsMaskedInputEmits } from "./types.ts";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<MsMaskedInputProps>(), {
  modelValue: "",
  unmasked: "",
  mask: "",
  placeholder: "",
  size: "md",
  disabled: false,
  readonly: false,
  invalid: false,
  clearable: false,
});

const emit = defineEmits<MsMaskedInputEmits>();

const fieldControl = useFieldControl("ms-masked-input");
const isInvalid = computed(() => props.invalid === true || fieldControl.fieldInvalid.value);

const maskPatterns: Record<string, string> = {
  cpf: "999.999.999-99",
  cnpj: "99.999.999/9999-99",
  phone: "(99) 99999-9999",
  date: "99/99/9999",
  cep: "99999-999",
  "credit-card": "9999 9999 9999 9999",
};

const activePattern = computed(() => {
  if (!props.mask) return "";
  return maskPatterns[props.mask] || props.mask;
});

const applyMask = (raw: string, pattern: string): { masked: string; unmasked: string } => {
  if (!pattern) return { masked: raw, unmasked: raw };
  const clean = raw.replace(/\D/g, ""); // digits for 9
  let masked = "";
  let cleanIdx = 0;

  for (let i = 0; i < pattern.length && cleanIdx < clean.length; i++) {
    const maskChar = pattern[i];
    if (maskChar === "9") {
      masked += clean[cleanIdx];
      cleanIdx++;
    } else {
      masked += maskChar;
      if (cleanIdx < clean.length && maskChar === clean[cleanIdx]) {
        cleanIdx++;
      }
    }
  }

  return { masked, unmasked: clean };
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const raw = target.value;
  if (!activePattern.value) {
    emit("update:modelValue", raw);
    emit("update:unmasked", raw);
    return;
  }

  const { masked, unmasked } = applyMask(raw, activePattern.value);
  target.value = masked;
  emit("update:modelValue", masked);
  emit("update:unmasked", unmasked);

  if (masked.length === activePattern.value.length) {
    emit("complete", masked);
  }
};

const handleClear = () => {
  emit("update:modelValue", "");
  emit("update:unmasked", "");
};

const classes = computed(() => [
  "ms-masked-input",
  `ms-masked-input--${props.size}`,
  {
    "ms-masked-input--invalid": props.invalid,
    "ms-masked-input--disabled": props.disabled,
  },
]);
</script>

<template>
  <div v-bind="rootAttrs($attrs)" :class="classes" :data-invalid="props.invalid ? '' : undefined">
    <input
      :id="fieldControl.id"
      type="text"
      class="ms-masked-input__field"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="fieldControl.describedBy.value"
      :value="props.modelValue"
      :placeholder="props.placeholder || activePattern"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :data-size="props.size"
      v-bind="controlAttrs($attrs)"
      @input="handleInput"
    />

    <button
      v-if="props.clearable && props.modelValue && !props.disabled && !props.readonly"
      type="button"
      class="ms-masked-input__clear"
      aria-label="Limpar campo"
      title="Limpar campo"
      @click="handleClear"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>
