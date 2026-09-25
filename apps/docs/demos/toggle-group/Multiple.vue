<script setup lang="ts">
import { ref } from "vue";
import { MsToggleGroup, MsToggleGroupItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const marks = ref<string | string[]>(["bold"]);
</script>

<template>
  <MsToggleGroup v-model="marks" multiple :aria-label="t.formatting">
    <MsToggleGroupItem value="bold" :aria-label="t.bold">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        aria-hidden="true"
      >
        <path d="M6 4h8a4 4 0 0 1 0 8H6zM6 12h9a4 4 0 0 1 0 8H6z" />
      </svg>
    </MsToggleGroupItem>
    <MsToggleGroupItem value="italic" :aria-label="t.italic">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M19 4h-9M14 20H5M15 4 9 20" />
      </svg>
    </MsToggleGroupItem>
    <MsToggleGroupItem value="underline" :aria-label="t.underline">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16" />
      </svg>
    </MsToggleGroupItem>
    <MsToggleGroupItem value="strike" :aria-label="t.strikethrough">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6M4 12h16" />
      </svg>
    </MsToggleGroupItem>
  </MsToggleGroup>
</template>
