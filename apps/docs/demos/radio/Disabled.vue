<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const storage = ref("50");
</script>

<template>
  <MsRadioGroup v-model="storage" orientation="vertical" :aria-label="t.storage">
    <MsRadio value="50" :label="t.storage50" />
    <MsRadio value="200" :label="t.storage200" />
    <MsRadio value="1000" disabled :label="t.storage1000" :description="t.storage1000Hint" />
  </MsRadioGroup>
</template>
