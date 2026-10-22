<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSegmentedControl } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const range = ref("7d");

const options = computed(() => [
  { label: t.day, value: "24h" },
  { label: t.week, value: "7d" },
  { label: t.month, value: "30d" },
]);
</script>

<template>
  <div style="display: grid; justify-items: center; gap: 12px">
    <MsSegmentedControl v-model="range" :options="options" size="xs" :aria-label="t.period" />
    <MsSegmentedControl v-model="range" :options="options" size="sm" :aria-label="t.period" />
    <MsSegmentedControl v-model="range" :options="options" size="md" :aria-label="t.period" />
    <MsSegmentedControl v-model="range" :options="options" size="lg" :aria-label="t.period" />
  </div>
</template>
