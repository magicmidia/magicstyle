<script setup lang="ts">
import { MsButton, MsEmptyState } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsEmptyState :title="t.noProjectsTitle" :description="t.noProjectsDescription">
      <MsButton>{{ t.createProject }}</MsButton>
      <MsButton variant="outline" tone="neutral">{{ t.importProject }}</MsButton>
    </MsEmptyState>
  </div>
</template>
