<script setup lang="ts">
import { ref } from "vue";
import { MsRange } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const cpu = ref(35);
const memory = ref(72);
const disk = ref(91);
const accent = ref(50);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <MsRange v-model="cpu" tone="success" show-value :aria-label="t.cpu" />
    <MsRange v-model="memory" tone="warning" show-value :aria-label="t.memory" />
    <MsRange v-model="disk" tone="danger" show-value :aria-label="t.disk" />
    <MsRange v-model="accent" tone="accent" show-value :aria-label="t.accent" />
  </div>
</template>
