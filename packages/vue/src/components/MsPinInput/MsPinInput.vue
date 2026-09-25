<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from "vue";
import type { MsPinInputProps, MsPinInputEmits } from "./types.ts";
import { useFieldControl } from "../../composables/use-field-context.ts";

const props = withDefaults(defineProps<MsPinInputProps>(), {
  modelValue: "",
  length: 4,
  type: "numeric",
  mask: false,
  disabled: false,
  size: "md",
  separator: "",
  autoFocus: false,
});

const emit = defineEmits<MsPinInputEmits>();

const fieldControl = useFieldControl("ms-pin-input");

const inputRefs = ref<HTMLInputElement[]>([]);
const values = ref<string[]>(Array(props.length).fill(""));

// Sync external value to values array
watch(
  () => props.modelValue,
  (val) => {
    const chars = (val || "").split("");
    for (let i = 0; i < props.length; i++) {
      values.value[i] = chars[i] || "";
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (props.autoFocus && inputRefs.value[0]) {
    inputRefs.value[0].focus();
  }
});

const filterChar = (char: string): string => {
  if (props.type === "numeric") {
    return /^[0-9]$/.test(char) ? char : "";
  }
  return /^[a-zA-Z0-9]$/.test(char) ? char : "";
};

const notifyChange = () => {
  const combined = values.value.join("");
  emit("update:modelValue", combined);
  emit("change", combined);
  if (combined.length === props.length && !values.value.includes("")) {
    emit("complete", combined);
  }
};

const handleInput = (index: number, event: Event) => {
  const target = event.target as HTMLInputElement;
  const raw = target.value;
  const lastChar = raw ? raw.slice(-1) : "";
  const validChar = filterChar(lastChar);

  values.value[index] = validChar;
  target.value = validChar;

  notifyChange();

  if (validChar && index < props.length - 1) {
    nextTick(() => {
      inputRefs.value[index + 1]?.focus();
      inputRefs.value[index + 1]?.select();
    });
  }
};

const handleKeyDown = (index: number, event: KeyboardEvent) => {
  if (event.key === "Backspace") {
    if (!values.value[index] && index > 0) {
      inputRefs.value[index - 1]?.focus();
      values.value[index - 1] = "";
      notifyChange();
    } else {
      values.value[index] = "";
      notifyChange();
    }
  } else if (event.key === "ArrowLeft" && index > 0) {
    inputRefs.value[index - 1]?.focus();
  } else if (event.key === "ArrowRight" && index < props.length - 1) {
    inputRefs.value[index + 1]?.focus();
  }
};

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pasteData = event.clipboardData?.getData("text") || "";
  const validChars = pasteData.split("").map(filterChar).filter(Boolean).slice(0, props.length);

  for (let i = 0; i < validChars.length; i++) {
    values.value[i] = validChars[i] ?? "";
  }

  notifyChange();

  const nextFocusIdx = Math.min(validChars.length, props.length - 1);
  nextTick(() => {
    inputRefs.value[nextFocusIdx]?.focus();
  });
};

const classes = computed(() => [
  "ms-pin-input",
  `ms-pin-input--${props.size}`,
  {
    "ms-pin-input--disabled": props.disabled,
  },
]);
</script>

<template>
  <div
    :class="classes"
    :data-size="props.size"
    role="group"
    :aria-labelledby="fieldControl.labelledBy.value"
    :aria-describedby="fieldControl.describedBy.value"
  >
    <template v-for="(_, index) in props.length" :key="index">
      <input
        :id="index === 0 ? fieldControl.id : undefined"
        ref="inputRefs"
        :aria-invalid="fieldControl.fieldInvalid.value || undefined"
        :type="props.mask ? 'password' : 'text'"
        :inputmode="props.type === 'numeric' ? 'numeric' : 'text'"
        maxlength="1"
        class="ms-pin-input__box"
        :class="{ 'ms-pin-input__box--filled': values[index] }"
        :value="values[index]"
        :disabled="props.disabled"
        :aria-label="`Dígito ${index + 1} de ${props.length}`"
        @input="handleInput(index, $event)"
        @keydown="handleKeyDown(index, $event)"
        @paste="handlePaste"
      />
      <span
        v-if="props.separator && index < props.length - 1"
        class="ms-pin-input__separator"
        aria-hidden="true"
      >
        {{ props.separator }}
      </span>
    </template>
  </div>
</template>
