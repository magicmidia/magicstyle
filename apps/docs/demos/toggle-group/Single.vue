<script setup lang="ts">
import { ref } from "vue";
import { MsToggleGroup, MsToggleGroupItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const align = ref("left");
</script>

<template>
  <MsToggleGroup v-model="align" variant="outline" :aria-label="t.textAlign">
    <MsToggleGroupItem value="left" :aria-label="t.alignLeft">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M21 6H3M15 12H3M17 18H3" />
      </svg>
    </MsToggleGroupItem>
    <MsToggleGroupItem value="center" :aria-label="t.alignCenter">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M21 6H3M17 12H7M19 18H5" />
      </svg>
    </MsToggleGroupItem>
    <MsToggleGroupItem value="right" :aria-label="t.alignRight">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M21 6H3M21 12H9M21 18H7" />
      </svg>
    </MsToggleGroupItem>
  </MsToggleGroup>
</template>
