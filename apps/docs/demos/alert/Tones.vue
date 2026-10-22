<script setup lang="ts">
import { MsAlert } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsAlert tone="info" :title="t.infoTitle" :description="t.infoDescription" />
    <MsAlert tone="success" :title="t.successTitle" :description="t.successDescription" />
    <MsAlert tone="warning" :title="t.warningTitle" :description="t.warningDescription" />
    <MsAlert tone="danger" :title="t.dangerTitle" :description="t.dangerDescription" />
  </div>
</template>
