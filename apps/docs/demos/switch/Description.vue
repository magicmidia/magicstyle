<script setup lang="ts">
import { ref } from "vue";
import { MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const twoFactor = ref(true);
</script>

<template>
  <div style="width: 100%; max-width: 380px">
    <MsSwitch v-model="twoFactor" :label="t.twoFactor" :description="t.twoFactorHint" />
  </div>
</template>
