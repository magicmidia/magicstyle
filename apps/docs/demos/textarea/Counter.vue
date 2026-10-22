<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsTextarea } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const summary = ref(t.summaryValue);
</script>

<template>
  <div style="width: 100%; max-width: 420px">
    <MsField :label="t.summary">
      <MsTextarea v-model="summary" :max-length="160" show-count :rows="4" />
    </MsField>
  </div>
</template>
