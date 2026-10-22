<script setup lang="ts">
import { MsButton, useToast, type MsToastPlacement } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const toast = useToast();
const placements: MsToastPlacement[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

function show(placement: MsToastPlacement) {
  toast.info(t.placementMessage, { placement });
}
</script>

<template>
  <div style="display: grid; grid-template-columns: repeat(3, auto); gap: 8px">
    <MsButton
      v-for="placement in placements"
      :key="placement"
      variant="outline"
      tone="neutral"
      size="sm"
      @click="show(placement)"
    >
      {{ placement }}
    </MsButton>
  </div>
</template>
