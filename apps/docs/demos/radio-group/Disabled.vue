<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const region = ref("sa-east");
</script>

<template>
  <MsField :label="t.region" :description="t.regionHint">
    <MsRadioGroup v-model="region" disabled>
      <MsRadio value="sa-east" :label="t.saEast" />
      <MsRadio value="us-east" :label="t.usEast" />
      <MsRadio value="eu-west" :label="t.euWest" />
    </MsRadioGroup>
  </MsField>
</template>
