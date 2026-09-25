<script setup lang="ts">
import { MsCard } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const variants = ["raised", "outline", "flat", "sunken", "glass"] as const;
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 820px;
    "
  >
    <MsCard
      v-for="variant in variants"
      :key="variant"
      :variant="variant"
      :title="variant"
      :description="t.variantDesc"
    />
  </div>
</template>
