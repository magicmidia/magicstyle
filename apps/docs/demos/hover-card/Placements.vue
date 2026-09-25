<script setup lang="ts">
import { MsButton, MsHoverCard, type MsHoverCardPlacement } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const placements: MsHoverCardPlacement[] = ["top", "right", "bottom", "left"];
</script>

<template>
  <MsHoverCard v-for="placement in placements" :key="placement" :placement="placement" :width="200">
    <MsButton variant="outline" tone="neutral">{{ placement }}</MsButton>
    <template #content>
      <span style="font-size: 14px">{{ t.placementBody }}</span>
    </template>
  </MsHoverCard>
</template>
