<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSegmentedControl } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const quality = ref("hd");

const options = computed(() => [
  { label: "720p", value: "sd" },
  { label: "1080p", value: "hd" },
  { label: "4K", value: "uhd", disabled: true },
]);
</script>

<template>
  <div style="display: grid; justify-items: center; gap: 12px">
    <MsSegmentedControl v-model="quality" :options="options" :aria-label="t.quality" />
    <MsSegmentedControl v-model="quality" :options="options" disabled :aria-label="t.quality" />
  </div>
</template>
