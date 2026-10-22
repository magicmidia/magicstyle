<script setup lang="ts">
import { ref } from "vue";
import { MsGlimpse } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const loading = ref(true);
let timer: ReturnType<typeof setTimeout> | undefined;

function onOpen() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    loading.value = false;
  }, 1200);
}

function onClose() {
  clearTimeout(timer);
  loading.value = true;
}
</script>

<template>
  <div style="max-width: 560px; line-height: 1.7; padding-top: 240px">
    {{ t.loadingBefore }}
    <MsGlimpse
      href="https://developer.mozilla.org/docs/Web/Accessibility/ARIA"
      :label="t.loadingLabel"
      :title="t.mdnTitle"
      :description="t.mdnDescription"
      badge="MDN"
      :loading="loading"
      @open="onOpen"
      @close="onClose"
    >
      <template #image>
        <div
          style="width: 100%; height: 100%; background: linear-gradient(135deg, #0f172a, #2563eb)"
        />
      </template>
    </MsGlimpse>
    {{ t.loadingAfter }}
  </div>
</template>
