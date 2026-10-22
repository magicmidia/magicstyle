<script setup lang="ts">
import { MsTab, MsTabList, MsTabs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div style="display: grid; gap: 20px; justify-items: center">
    <MsTabs v-for="size in sizes" :key="size" default-value="code" :size="size">
      <MsTabList :aria-label="t.view">
        <MsTab value="preview">{{ t.preview }}</MsTab>
        <MsTab value="code">{{ t.code }}</MsTab>
        <MsTab value="console">{{ t.console }}</MsTab>
      </MsTabList>
    </MsTabs>
  </div>
</template>
