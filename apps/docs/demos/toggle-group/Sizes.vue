<script setup lang="ts">
import { ref } from "vue";
import { MsToggleGroup, MsToggleGroupItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const layout = ref("grid");
</script>

<template>
  <div style="display: grid; justify-items: center; gap: 12px">
    <MsToggleGroup v-model="layout" mandatory size="sm" :aria-label="t.layout">
      <MsToggleGroupItem value="grid">{{ t.grid }}</MsToggleGroupItem>
      <MsToggleGroupItem value="list">{{ t.list }}</MsToggleGroupItem>
    </MsToggleGroup>
    <MsToggleGroup v-model="layout" mandatory size="md" :aria-label="t.layout">
      <MsToggleGroupItem value="grid">{{ t.grid }}</MsToggleGroupItem>
      <MsToggleGroupItem value="list">{{ t.list }}</MsToggleGroupItem>
    </MsToggleGroup>
    <MsToggleGroup v-model="layout" mandatory size="lg" :aria-label="t.layout">
      <MsToggleGroupItem value="grid">{{ t.grid }}</MsToggleGroupItem>
      <MsToggleGroupItem value="list">{{ t.list }}</MsToggleGroupItem>
    </MsToggleGroup>
  </div>
</template>
