<script setup lang="ts">
import { ref } from "vue";
import { MsCheckbox } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const marketing = ref(false);
const security = ref(true);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 380px">
    <MsCheckbox v-model="security" :label="t.securityLabel" :description="t.securityHint" />
    <MsCheckbox v-model="marketing" :label="t.marketingLabel" :description="t.marketingHint" />
  </div>
</template>
