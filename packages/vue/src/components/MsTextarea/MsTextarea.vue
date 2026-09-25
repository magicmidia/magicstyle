<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import type { MsTextareaEmits, MsTextareaProps } from "./types.ts";

defineOptions({ inheritAttrs: false });

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
const fieldControl = useFieldControl("ms-textarea");

const resolvedId = computed(() => fieldControl.id);
const describedBy = computed(() => fieldControl.describedBy.value);
const isInvalid = computed(() => props.invalid === true || fieldControl.fieldInvalid.value);
const resolvedTone = computed(() => (isInvalid.value ? "danger" : props.tone));

const currentLength = computed(() => props.modelValue?.length ?? 0);
const isExceeded = computed(
  () => props.maxLength !== undefined && currentLength.value > props.maxLength,
);

/** Height (content + vertical padding, like `scrollHeight`) of `rows` lines of text. */
function rowsHeight(el: HTMLTextAreaElement, rows: number): number {
  const style = getComputedStyle(el);
  const fontSize = parseFloat(style.fontSize) || 16;
  // "normal" line-height parses to NaN: approximate it like browsers do (~1.2em).
  const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;
  const padding = (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
  return lineHeight * rows + padding;
}

function adjustHeight(): void {
  if (!props.autoGrow || !textareaRef.value) return;
  const el = textareaRef.value;
  el.style.height = "auto";
  let height = el.scrollHeight;
  // maxRows caps the growth; the rest of the content scrolls.
  if (props.maxRows !== undefined && props.maxRows > 0) {
    const max = rowsHeight(el, props.maxRows);
    el.style.overflowY = height > max ? "auto" : "hidden";
    height = Math.min(height, max);
  }
  el.style.height = `${height}px`;
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
    v-bind="rootAttrs($attrs)"
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
      v-bind="controlAttrs($attrs)"
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
