<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { MsButton, MsProgress } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const progress = ref(0);
const uploading = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

const done = computed(() => progress.value >= 100);

function start() {
  progress.value = 0;
  uploading.value = true;
  timer = setInterval(() => {
    progress.value = Math.min(100, progress.value + Math.round(Math.random() * 12 + 3));
    if (progress.value >= 100) {
      clearInterval(timer);
      uploading.value = false;
    }
  }, 300);
}

onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <MsProgress
      :model-value="progress"
      :tone="done ? 'success' : 'primary'"
      :label="t.fileName"
      show-value
    />
    <MsButton :disabled="uploading" @click="start">
      {{ done ? t.uploadAgain : t.startUpload }}
    </MsButton>
  </div>
</template>
