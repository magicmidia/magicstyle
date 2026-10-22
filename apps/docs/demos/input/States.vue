<script setup lang="ts">
import { ref } from "vue";
import { MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const invalid = ref(t.invalidValue);
const apiKey = ref("sk_live_51Hx9QeLkd8Z2");
const checking = ref(t.checkingValue);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsInput disabled :placeholder="t.disabled" :aria-label="t.disabled" />
    <MsInput v-model="apiKey" readonly :aria-label="t.readonly" />
    <MsInput v-model="invalid" invalid :aria-label="t.invalid" />
    <MsInput v-model="checking" processing :aria-label="t.processing" />
  </div>
</template>
