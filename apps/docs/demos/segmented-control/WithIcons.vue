<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSegmentedControl } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const theme = ref("system");

const options = computed(() => [
  { label: t.light, value: "light", icon: "☀️" },
  { label: t.dark, value: "dark", icon: "🌙" },
  { label: t.system, value: "system", icon: "💻" },
]);
</script>

<template>
  <MsSegmentedControl v-model="theme" :options="options" tone="primary" :aria-label="t.theme" />
</template>
