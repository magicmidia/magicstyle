<script setup lang="ts">
import { MsButton, MsCard } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 720px;
    "
  >
    <MsCard variant="outline" :title="t.infoTitle" :description="t.infoDesc" footer-divider>
      <template #footer>
        <MsButton size="sm" variant="soft">{{ t.viewPlans }}</MsButton>
      </template>
    </MsCard>
    <MsCard variant="outline" :title="t.dangerTitle" header-divider footer-divider>
      <p style="margin: 0">{{ t.dangerDesc }}</p>
      <template #footer>
        <MsButton size="sm" tone="danger">{{ t.deleteProject }}</MsButton>
      </template>
    </MsCard>
  </div>
</template>
