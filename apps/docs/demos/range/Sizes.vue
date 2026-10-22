<script setup lang="ts">
import { ref } from "vue";
import { MsRange } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const small = ref(30);
const medium = ref(50);
const large = ref(70);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <MsRange v-model="small" size="sm" :aria-label="t.small" />
    <MsRange v-model="medium" :aria-label="t.medium" />
    <MsRange v-model="large" size="lg" :aria-label="t.large" />
  </div>
</template>
