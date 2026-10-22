<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsPointer, MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const enabled = ref(false);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: start">
    <MsSwitch v-model="enabled" :label="t.ringToggle" />
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsButton variant="outline" tone="neutral">{{ t.hoverMe }}</MsButton>
      <MsButton variant="soft">{{ t.orMe }}</MsButton>
    </div>
    <MsPointer v-if="enabled" variant="ring" />
  </div>
</template>
