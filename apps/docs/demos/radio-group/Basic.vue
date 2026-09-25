<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const theme = ref("system");
</script>

<template>
  <MsRadioGroup v-model="theme" :aria-label="t.theme">
    <MsRadio value="light" :label="t.light" />
    <MsRadio value="dark" :label="t.dark" />
    <MsRadio value="system" :label="t.system" />
  </MsRadioGroup>
</template>
