<script setup lang="ts">
import { MsButton, MsCard, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center">
    <MsCard
      cover-src="/demo/photo-1040-640x360.svg"
      :cover-alt="t.cabinAlt"
      :title="t.cabinTitle"
      :description="t.cabinLocation"
      hoverable
      style="width: 300px"
    >
      <template #actions>
        <MsTag tone="success" size="sm">{{ t.superhost }}</MsTag>
      </template>
      <p style="margin: 0">{{ t.cabinBody }}</p>
      <template #footer>
        <span class="ms-u-font-semibold" style="margin-inline-end: auto">{{ t.price }}</span>
        <MsButton size="sm">{{ t.book }}</MsButton>
      </template>
    </MsCard>
    <MsCard
      orientation="horizontal"
      cover-src="/demo/photo-1080-320x320.svg"
      :cover-alt="t.recipeAlt"
      :title="t.recipeTitle"
      :description="t.recipeMeta"
      interactive
      style="width: 100%; max-width: 420px"
    >
      <p style="margin: 0">{{ t.recipeBody }}</p>
    </MsCard>
  </div>
</template>
