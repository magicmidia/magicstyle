<script setup lang="ts">
import { ref } from "vue";
import { MsCheckbox } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const small = ref(true);
const medium = ref(true);
const large = ref(true);
const success = ref(true);
const warning = ref(true);
const accent = ref(true);
</script>

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center">
      <MsCheckbox v-model="small" size="sm" :label="t.small" />
      <MsCheckbox v-model="medium" :label="t.medium" />
      <MsCheckbox v-model="large" size="lg" :label="t.large" />
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center">
      <MsCheckbox v-model="success" tone="success" :label="t.success" />
      <MsCheckbox v-model="warning" tone="warning" :label="t.warning" />
      <MsCheckbox v-model="accent" tone="accent" :label="t.accent" />
    </div>
  </div>
</template>
