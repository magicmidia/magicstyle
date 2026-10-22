<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const shipping = ref("standard");
</script>

<template>
  <div style="width: 100%; max-width: 400px">
    <MsRadioGroup v-model="shipping" orientation="vertical" :aria-label="t.shipping">
      <MsRadio value="standard" card :label="t.standard" :description="t.standardHint" />
      <MsRadio value="express" card :label="t.express" :description="t.expressHint" />
    </MsRadioGroup>
  </div>
</template>
