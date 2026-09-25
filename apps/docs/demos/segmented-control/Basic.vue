<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSegmentedControl } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const view = ref("list");

const options = computed(() => [
  { label: t.list, value: "list" },
  { label: t.board, value: "board" },
  { label: t.calendar, value: "calendar" },
]);
</script>

<template>
  <MsSegmentedControl v-model="view" :options="options" :aria-label="t.view" />
</template>
