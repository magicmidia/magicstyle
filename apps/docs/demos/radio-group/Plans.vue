<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const plan = ref("pro");
</script>

<template>
  <div style="width: 100%; max-width: 420px">
    <MsRadioGroup v-model="plan" card orientation="vertical" :aria-label="t.plan">
      <MsRadio value="starter" :label="t.starter" :description="t.starterHint" />
      <MsRadio value="pro" :label="t.pro" :description="t.proHint" />
      <MsRadio value="business" :label="t.business" :description="t.businessHint" />
    </MsRadioGroup>
  </div>
</template>
