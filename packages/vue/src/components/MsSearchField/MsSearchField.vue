<script setup lang="ts">
import { computed, ref } from "vue";
import type { MsSearchFieldEmits, MsSearchFieldProps } from "./types.ts";
import MsSpinner from "../MsSpinner/MsSpinner.vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<MsSearchFieldProps>(), {
  modelValue: "",
  size: "md",
  variant: "outline",
  disabled: false,
  readonly: false,
  loading: false,
  clearable: true,
  autofocus: false,
});

const emit = defineEmits<MsSearchFieldEmits>();

const t = useMsMessages();
const placeholderText = computed(() => props.placeholder ?? t.value.searchField.placeholder);

defineSlots<{
  /** Replaces the leading magnifier icon. */
  icon?(): unknown;
  /** Extra controls at the end of the field (after spinner/clear/shortcut). */
  actions?(): unknown;
}>();

const fieldControl = useFieldControl("ms-search");
const inputId = computed(() => props.id || fieldControl.id);
const inputRef = ref<HTMLInputElement | null>(null);

const classes = computed(() => [
  "ms-search-field",
  `ms-search-field--${props.size}`,
  `ms-search-field--${props.variant}`,
  {
    "ms-search-field--has-shortcut": Boolean(props.shortcut),
    "is-disabled": props.disabled,
    "is-loading": props.loading,
  },
]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    emit("search", props.modelValue || "");
  } else if (event.key === "Escape" && props.modelValue) {
    clear();
  }
};

const clear = () => {
  if (props.disabled || props.readonly) return;
  emit("update:modelValue", "");
  emit("clear");
  inputRef.value?.focus();
};

const showClearButton = computed(() => {
  return props.clearable && !props.disabled && !props.readonly && Boolean(props.modelValue);
});
</script>

<template>
  <div v-bind="rootAttrs($attrs)" :class="classes">
    <span class="ms-search-field__icon" aria-hidden="true">
      <slot name="icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </slot>
    </span>

    <input
      :id="inputId"
      ref="inputRef"
      type="search"
      class="ms-search-field__input"
      :value="modelValue"
      :placeholder="placeholderText"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      role="searchbox"
      :aria-label="fieldControl.field ? undefined : t.searchField.label"
      :aria-describedby="fieldControl.describedBy.value"
      :aria-invalid="fieldControl.fieldInvalid.value || undefined"
      v-bind="controlAttrs($attrs)"
      @input="handleInput"
      @keydown="handleKeyDown"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />

    <div class="ms-search-field__actions">
      <MsSpinner v-if="loading" size="sm" tone="primary" />

      <button
        v-if="showClearButton"
        type="button"
        class="ms-search-field__clear"
        :aria-label="t.searchField.clear"
        tabindex="-1"
        @click="clear"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>

      <span v-if="props.shortcut && !showClearButton" class="ms-search-field__shortcut">
        {{ props.shortcut }}
      </span>

      <slot name="actions" />
    </div>
  </div>
</template>
