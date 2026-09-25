<script setup lang="ts">
import { ref } from "vue";
import { MsDropzone, type MsDropzoneRejection } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const rejected = ref<MsDropzoneRejection[]>([]);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 480px">
    <MsDropzone
      accept="image/png,image/jpeg,image/webp"
      :max-size="2 * 1024 * 1024"
      @files-dropped="rejected = []"
      @files-rejected="rejected = $event"
    >
      <template #title>{{ t.photosTitle }}</template>
      <template #subtitle>{{ t.photosHint }}</template>
    </MsDropzone>
    <ul v-if="rejected.length" role="alert" style="margin: 0; padding-inline-start: 20px">
      <li v-for="item in rejected" :key="item.file.name">
        <strong>{{ item.file.name }}</strong>
        <span v-if="item.reason === 'size'"> {{ t.tooLarge }}</span>
        <span v-else-if="item.reason === 'type'"> {{ t.wrongType }}</span>
        <span v-else> {{ t.tooMany }}</span>
      </li>
    </ul>
  </div>
</template>
