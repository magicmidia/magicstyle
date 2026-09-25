<script setup lang="ts">
import { ref, computed } from "vue";
import type { MsFileInputProps, MsFileInputEmits } from "./types.ts";
import { useFieldControl } from "../../composables/use-field-context.ts";

const props = withDefaults(defineProps<MsFileInputProps>(), {
  multiple: false,
  label: "Arraste e solte arquivos aqui, ou clique para selecionar",
  showFileList: true,
  disabled: false,
});

const emit = defineEmits<MsFileInputEmits>();

const fieldControl = useFieldControl("ms-file-input");

defineSlots<{
  default?(): unknown;
  icon?(): unknown;
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const selectedFiles = ref<File[]>([]);

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function processFiles(fileList: FileList | null) {
  if (!fileList || props.disabled) return;

  const validFiles: File[] = [];
  const files = Array.from(fileList);

  for (const file of files) {
    if (props.maxSize && file.size > props.maxSize) {
      emit("reject", file, "maxSize");
      continue;
    }

    validFiles.push(file);
  }

  if (props.multiple) {
    selectedFiles.value = [...selectedFiles.value, ...validFiles];
    emit("update:modelValue", selectedFiles.value);
    emit("change", selectedFiles.value);
  } else {
    const first = validFiles[0];
    if (first) {
      selectedFiles.value = [first];
      emit("update:modelValue", first);
      emit("change", [first]);
    }
  }
}

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  processFiles(target.files);
  if (inputRef.value) {
    inputRef.value.value = "";
  }
};

const handleDragOver = (event: DragEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (event: DragEvent) => {
  if (props.disabled) return;
  event.preventDefault();
  isDragging.value = false;
  if (event.dataTransfer?.files) {
    processFiles(event.dataTransfer.files);
  }
};

const triggerClick = () => {
  if (props.disabled) return;
  inputRef.value?.click();
};

const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1);
  if (props.multiple) {
    emit("update:modelValue", selectedFiles.value);
    emit("change", selectedFiles.value);
  } else {
    emit("update:modelValue", null);
    emit("change", []);
  }
};

const dropzoneClasses = computed(() => [
  "ms-file-input__dropzone",
  isDragging.value ? "ms-file-input__dropzone--active" : "",
]);
</script>

<template>
  <div
    class="ms-file-input"
    :class="{ 'ms-file-input--disabled': props.disabled }"
    data-ms-file-input
  >
    <input
      :id="fieldControl.id"
      ref="inputRef"
      type="file"
      class="ms-file-input__hidden"
      :accept="props.accept"
      :multiple="props.multiple"
      :disabled="props.disabled"
      @change="handleInputChange"
    />

    <div
      :class="dropzoneClasses"
      tabindex="0"
      role="button"
      :aria-labelledby="fieldControl.labelledBy.value"
      :aria-describedby="fieldControl.describedBy.value"
      :aria-disabled="props.disabled || undefined"
      @click="triggerClick"
      @keydown.enter.prevent="triggerClick"
      @keydown.space.prevent="triggerClick"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <span class="ms-file-input__icon" aria-hidden="true">
        <slot name="icon">📁</slot>
      </span>
      <span class="ms-file-input__label">
        <slot>{{ props.label }}</slot>
      </span>
      <span v-if="props.hint" class="ms-file-input__hint">
        {{ props.hint }}
      </span>
    </div>

    <!-- File list preview -->
    <ul v-if="props.showFileList && selectedFiles.length > 0" class="ms-file-input__list">
      <li
        v-for="(file, idx) in selectedFiles"
        :key="`${file.name}-${idx}`"
        class="ms-file-input__item"
      >
        <div class="ms-file-input__item-info">
          <span class="ms-file-input__item-name">{{ file.name }}</span>
          <span class="ms-file-input__item-size">({{ formatFileSize(file.size) }})</span>
        </div>
        <button
          type="button"
          class="ms-file-input__item-remove"
          aria-label="Remover arquivo"
          @click.stop="removeFile(idx)"
        >
          ✕
        </button>
      </li>
    </ul>
  </div>
</template>
