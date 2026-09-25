<script setup lang="ts">
import { ref } from "vue";
import { MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const sso = ref(true);
const beta = ref(false);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 380px">
    <MsSwitch v-model="sso" disabled :label="t.sso" :description="t.ssoHint" />
    <MsSwitch v-model="beta" disabled :label="t.beta" :description="t.betaHint" />
  </div>
</template>
