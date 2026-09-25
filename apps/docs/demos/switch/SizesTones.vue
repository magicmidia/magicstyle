<script setup lang="ts">
import { ref } from "vue";
import { MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const small = ref(true);
const medium = ref(true);
const large = ref(true);
const success = ref(true);
const warning = ref(true);
const danger = ref(true);
</script>

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center">
      <MsSwitch v-model="small" size="sm" :label="t.small" />
      <MsSwitch v-model="medium" :label="t.medium" />
      <MsSwitch v-model="large" size="lg" :label="t.large" />
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center">
      <MsSwitch v-model="success" tone="success" :label="t.success" />
      <MsSwitch v-model="warning" tone="warning" :label="t.warning" />
      <MsSwitch v-model="danger" tone="danger" :label="t.danger" />
    </div>
  </div>
</template>
