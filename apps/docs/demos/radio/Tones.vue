<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const health = ref("ok");
</script>

<template>
  <MsRadioGroup v-model="health" :aria-label="t.health">
    <MsRadio value="ok" tone="success" :label="t.ok" />
    <MsRadio value="degraded" tone="warning" :label="t.degraded" />
    <MsRadio value="down" tone="danger" :label="t.down" />
  </MsRadioGroup>
</template>
