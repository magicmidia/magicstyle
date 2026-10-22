<script setup lang="ts">
import { MsButton, MsCanvas } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsCanvas style="max-width: 640px">
    <div style="display: grid; gap: 12px; justify-items: center; text-align: center">
      <h3 style="margin: 0">{{ t.emptyTitle }}</h3>
      <p class="ms-u-text-muted" style="margin: 0; max-width: 360px">{{ t.emptyBody }}</p>
      <MsButton>{{ t.addNode }}</MsButton>
    </div>
  </MsCanvas>
</template>
