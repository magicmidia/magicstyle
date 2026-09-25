<script setup lang="ts">
import { ref } from "vue";
import { MsInput, MsLabel } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const webhook = ref("");
</script>

<template>
  <div style="display: grid; gap: 6px; width: 100%; max-width: 360px">
    <MsLabel for="label-demo-webhook" :tooltip="t.webhookHelp">{{ t.webhook }}</MsLabel>
    <MsInput id="label-demo-webhook" v-model="webhook" type="url" placeholder="https://" />
  </div>
</template>
