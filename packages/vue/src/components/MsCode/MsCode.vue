<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue";
import type { MsCodeProps, MsCodeEmits } from "./types.ts";

const props = withDefaults(defineProps<MsCodeProps>(), {
  tone: "default",
  variant: "subtle",
  size: "md",
  copyable: false,
});

const emit = defineEmits<MsCodeEmits>();
const copied = ref(false);
const codeEl = ref<HTMLElement | null>(null);
let copyTimer: ReturnType<typeof setTimeout> | null = null;

onBeforeUnmount(() => {
  if (copyTimer) {
    clearTimeout(copyTimer);
    copyTimer = null;
  }
});

const classes = computed(() => [
  "ms-code",
  `ms-code--${props.variant}`,
  `ms-code--${props.tone}`,
  `ms-code--${props.size}`,
]);

const handleCopy = async (event: MouseEvent) => {
  event.stopPropagation();
  let textToCopy = "";
  if (codeEl.value) {
    textToCopy = codeEl.value.innerText.trim();
  }
  if (typeof navigator !== "undefined" && navigator.clipboard && textToCopy) {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copied.value = true;
      emit("copy", textToCopy);
      if (copyTimer) clearTimeout(copyTimer);
      copyTimer = setTimeout(() => {
        copied.value = false;
        copyTimer = null;
      }, 1500);
    } catch {
      // ignore
    }
  }
};
</script>

<template>
  <code
    ref="codeEl"
    :class="classes"
    :data-variant="props.variant"
    :data-tone="props.tone"
    :data-size="props.size"
    :data-copyable="props.copyable ? '' : undefined"
  >
    <slot />
    <button
      v-if="props.copyable"
      type="button"
      class="ms-code__copy-btn"
      :title="copied ? 'Copiado!' : 'Copiar código'"
      :aria-label="copied ? 'Copiado!' : 'Copiar código'"
      @click="handleCopy"
    >
      <svg
        v-if="!copied"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg
        v-else
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>
  </code>
</template>
