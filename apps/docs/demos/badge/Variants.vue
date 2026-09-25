<script setup lang="ts">
import { MsBadge } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
    <MsBadge>{{ t.new }}</MsBadge>
    <MsBadge variant="outline">{{ t.beta }}</MsBadge>
    <MsBadge variant="soft">{{ t.draft }}</MsBadge>
  </div>
</template>
