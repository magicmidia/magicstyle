<script setup lang="ts">
import { ref } from "vue";
import { MsAnimatedNumber, MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const visitors = ref(1284);

function addVisitors() {
  visitors.value += Math.floor(Math.random() * 400) + 50;
}
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <span style="font-size: 0.875rem; opacity: 0.7">{{ t.visitorsLabel }}</span>
    <MsAnimatedNumber :value="visitors" style="font-size: 2.5rem; font-weight: 700" />
    <MsButton variant="outline" tone="neutral" size="sm" @click="addVisitors">
      {{ t.simulate }}
    </MsButton>
  </div>
</template>
