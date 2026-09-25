<script setup lang="ts">
import { MsDropzone } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsDropzone disabled>
      <template #title>{{ t.limitTitle }}</template>
      <template #subtitle>{{ t.limitHint }}</template>
    </MsDropzone>
  </div>
</template>
