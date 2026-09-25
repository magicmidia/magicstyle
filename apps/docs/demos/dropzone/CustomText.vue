<script setup lang="ts">
import { MsDropzone } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsDropzone accept=".csv,.xlsx" :multiple="false">
      <template #title>{{ t.importTitle }}</template>
      <template #subtitle>{{ t.importHint }}</template>
    </MsDropzone>
  </div>
</template>
