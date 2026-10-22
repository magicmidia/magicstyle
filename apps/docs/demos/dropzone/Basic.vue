<script setup lang="ts">
import { ref } from "vue";
import { MsDropzone } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const files = ref<File[]>([]);
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 480px">
    <MsDropzone @files-dropped="files = [...files, ...$event]" />
    <small v-if="files.length">{{ t.selectedCount }} {{ files.length }}</small>
  </div>
</template>
