<script setup lang="ts">
import { MsButton, MsTooltip, type MsTooltipPlacement } from "@magic-style/vue";

const placements: MsTooltipPlacement[] = ["top", "right", "bottom", "left"];
</script>

<template>
  <MsTooltip
    v-for="placement in placements"
    :key="placement"
    :content="placement"
    :placement="placement"
  >
    <MsButton variant="outline" tone="neutral">{{ placement }}</MsButton>
  </MsTooltip>
</template>
