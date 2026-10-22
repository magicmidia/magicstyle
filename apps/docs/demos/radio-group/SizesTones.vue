<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const small = ref("a");
const large = ref("a");
const success = ref("a");
</script>

<template>
  <div style="display: grid; gap: 16px">
    <MsRadioGroup v-model="small" size="sm" :aria-label="t.small">
      <MsRadio value="a" :label="t.small" />
      <MsRadio value="b" :label="t.other" />
    </MsRadioGroup>
    <MsRadioGroup v-model="large" size="lg" :aria-label="t.large">
      <MsRadio value="a" :label="t.large" />
      <MsRadio value="b" :label="t.other" />
    </MsRadioGroup>
    <MsRadioGroup v-model="success" tone="success" :aria-label="t.success">
      <MsRadio value="a" :label="t.success" />
      <MsRadio value="b" :label="t.other" />
    </MsRadioGroup>
  </div>
</template>
