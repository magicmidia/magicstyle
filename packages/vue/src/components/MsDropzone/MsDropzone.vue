<script setup lang="ts">
import { ref } from "vue";
import type { MsDropzoneProps, MsDropzoneEmits, MsDropzoneFile } from "./types.ts";

const props = withDefaults(defineProps<MsDropzoneProps>(), {
  accept: "*/*",
  multiple: true,
  disabled: false,
});

const emit = defineEmits<MsDropzoneEmits>();

const isDragOver = ref(false);
const fileList = ref<MsDropzoneFile[]>([]);
const inputRef = ref<HTMLInputElement | null>(null);

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

const triggerBrowse = () => {
  if (props.disabled) return;
  inputRef.value?.click();
};

const processFiles = (rawFiles: FileList | null) => {
  if (!rawFiles || rawFiles.length === 0) return;
  const validFiles: File[] = [];

  for (let i = 0; i < rawFiles.length; i++) {
    const f = rawFiles[i]!;
    if (props.maxSize && f.size > props.maxSize) continue;

    validFiles.push(f);
    fileList.value.push({
      id: `${f.name}-${Date.now()}-${i}`,
      name: f.name,
      size: f.size,
      formattedSize: formatBytes(f.size),
      file: f,
    });
  }

  if (validFiles.length > 0) {
    emit("files-dropped", validFiles);
  }
};

const onDragOver = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragOver.value = true;
};

const onDragLeave = () => {
  isDragOver.value = false;
};

const onDrop = (e: DragEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragOver.value = false;
  processFiles(e.dataTransfer?.files || null);
};

const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  processFiles(target.files);
  target.value = "";
};

const removeFile = (item: MsDropzoneFile) => {
  fileList.value = fileList.value.filter((f) => f.id !== item.id);
  emit("file-removed", item);
};
</script>

<template>
  <div
    class="ms-dropzone"
    :class="{
      'ms-dropzone--dragover': isDragOver,
      'ms-dropzone--disabled': props.disabled,
    }"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
    @click="triggerBrowse"
  >
    <input
      ref="inputRef"
      type="file"
      class="ms-dropzone__input"
      :accept="props.accept"
      :multiple="props.multiple"
      :disabled="props.disabled"
      @click.stop
      @change="onInputChange"
    />

    <svg
      class="ms-dropzone__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>

    <div class="ms-dropzone__title">
      <slot name="title">Arraste e solte arquivos aqui</slot>
    </div>
    <div class="ms-dropzone__subtitle">
      <slot name="subtitle">ou clique para selecionar do seu computador</slot>
    </div>

    <!-- Uploaded file previews -->
    <ul v-if="fileList.length > 0" class="ms-dropzone__files" @click.stop>
      <li v-for="item in fileList" :key="item.id" class="ms-dropzone__file-card">
        <div class="ms-dropzone__file-info">
          <span>📄</span>
          <div>
            <div class="ms-dropzone__file-name">{{ item.name }}</div>
            <div class="ms-dropzone__file-size">{{ item.formattedSize }}</div>
          </div>
        </div>

        <button
          type="button"
          class="ms-dropzone__remove-btn"
          title="Remover arquivo"
          @click="removeFile(item)"
        >
          ✕
        </button>
      </li>
    </ul>
  </div>
</template>
