<script setup lang="ts">
import { ref } from "vue";
import { MsColorPicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const brand = ["#0f766e", "#14b8a6", "#f59e0b", "#e11d48", "#7c3aed", "#1e293b"];
const color = ref("#0f766e");
</script>

<template>
  <div style="display: grid; gap: 8px">
    <p style="margin: 0">{{ t.brandPalette }}</p>
    <MsColorPicker v-model="color" :swatches="brand" :show-input="false" />
  </div>
</template>
