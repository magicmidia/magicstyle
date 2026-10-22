<script setup lang="ts">
import { MsBadge, MsHoverCard, MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="font-size: 14px">
    {{ t.builtWith }}
    <MsHoverCard :open-delay="400" :close-delay="300" :width="320">
      <MsLink href="#">magic-style/vue</MsLink>
      <template #content>
        <div style="display: grid; gap: 8px; font-size: 14px">
          <div style="display: flex; align-items: center; gap: 8px">
            <strong>magic-style/vue</strong>
            <MsBadge size="sm" tone="neutral" variant="outline">{{ t.public }}</MsBadge>
          </div>
          <span>{{ t.repoDescription }}</span>
          <span style="color: var(--ms-color-text-muted); font-size: 12px">{{ t.repoStats }}</span>
        </div>
      </template>
    </MsHoverCard>
  </div>
</template>
