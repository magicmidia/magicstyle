<script setup lang="ts">
import { MsCard, MsSkeleton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsCard
    variant="outline"
    padding="md"
    style="width: 100%; max-width: 320px"
    aria-busy="true"
    :aria-label="t.loadingArticle"
  >
    <div style="display: grid; gap: 12px">
      <MsSkeleton variant="card" height="140px" animation="shimmer" />
      <MsSkeleton width="80%" height="18px" animation="shimmer" />
      <MsSkeleton :count="2" animation="shimmer" />
      <div style="display: flex; align-items: center; gap: 8px">
        <MsSkeleton variant="circle" width="32px" height="32px" animation="shimmer" />
        <MsSkeleton width="120px" animation="shimmer" />
      </div>
    </div>
  </MsCard>
</template>
