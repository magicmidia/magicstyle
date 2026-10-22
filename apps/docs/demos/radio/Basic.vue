<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const frequency = ref("weekly");
</script>

<template>
  <MsRadioGroup v-model="frequency" orientation="vertical" :aria-label="t.frequency">
    <MsRadio value="daily" :label="t.daily" />
    <MsRadio value="weekly" :label="t.weekly" />
    <MsRadio value="monthly" :label="t.monthly" />
  </MsRadioGroup>
</template>
