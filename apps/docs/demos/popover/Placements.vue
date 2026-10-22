<script setup lang="ts">
import { MsButton, MsPopover, type MsPopoverPlacement } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const placements: MsPopoverPlacement[] = ["top", "right", "bottom", "left"];
</script>

<template>
  <MsPopover v-for="placement in placements" :key="placement" :placement="placement">
    <template #trigger>
      <MsButton variant="outline" tone="neutral">{{ placement }}</MsButton>
    </template>
    {{ t.placementBody }}
  </MsPopover>
</template>
