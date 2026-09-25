<script setup lang="ts">
import { MsBanner } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%">
    <MsBanner :title="t.releaseTitle" :action-label="t.seeWhatsNew">
      {{ t.releaseBody }}
    </MsBanner>
  </div>
</template>
