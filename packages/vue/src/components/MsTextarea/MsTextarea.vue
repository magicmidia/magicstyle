<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsTextareaEmits, MsTextareaProps } from "./types.ts";

const props = withDefaults(defineProps<MsTextareaProps>(), {
  modelValue: "",
  tone: "default",
  size: "md",
  resize: "vertical",
  rows: 3,
  disabled: false,
  readonly: false,
  showCount: false,
  autoGrow: false,
});

const emit = defineEmits<MsTextareaEmits>();

defineSlots<{
  default?(): unknown;
  helper?(): unknown;
  counter?(props: { count: number; max?: number | undefined }): unknown;
  footer?(): unknown;
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const field = useFieldContext();
const fallbackId = useMsId("ms-textarea");

const resolvedId = computed(() => field?.controlId ?? fallbackId);
const describedBy = computed(() => field?.describedBy());
const isInvalid = computed(() => props.invalid === true || field?.invalid() === true);
const resolvedTone = computed(() => (isInvalid.value ? "danger" : props.tone));

const currentLength = computed(() => props.modelValue?.length ?? 0);
const isExceeded = computed(
  () => props.maxLength !== undefined && currentLength.value > props.maxLength,
);

function adjustHeight(): void {
  if (!props.autoGrow || !textareaRef.value) return;
  const el = textareaRef.value;
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}

function onInput(event: Event): void {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
  emit("input", event);
  adjustHeight();
}

function onChange(event: Event): void {
  emit("change", event);
}

watch(
  () => props.modelValue,
  () => {
    nextTick(adjustHeight);
  },
);

onMounted(() => {
  nextTick(adjustHeight);
});
</script>

<template>
  <div
    class="ms-input ms-textarea"
    :class="[`ms-textarea--${props.size}`, `ms-textarea--resize-${props.resize}`]"
    :data-size="props.size"
    :data-tone="resolvedTone === 'default' ? undefined : resolvedTone"
    :data-invalid="isInvalid || undefined"
    :data-disabled="props.disabled || undefined"
  >
    <textarea
      :id="resolvedId"
      ref="textareaRef"
      class="ms-input-native"
      :class="`ms-textarea--resize-${props.resize}`"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :rows="props.rows"
      :maxlength="props.maxLength"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :name="props.name"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
      @input="onInput"
      @change="onChange"
    />

    <div v-if="props.showCount || $slots.helper || $slots.footer" class="ms-textarea__footer">
      <div class="ms-textarea__helper">
        <slot name="helper" />
      </div>
      <slot name="footer" />
      <div
        v-if="props.showCount"
        class="ms-textarea__counter"
        :data-exceeded="isExceeded || undefined"
      >
        <slot name="counter" :count="currentLength" :max="props.maxLength">
          <span v-if="props.maxLength">{{ currentLength }} / {{ props.maxLength }}</span>
          <span v-else>{{ currentLength }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>
