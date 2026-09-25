<script setup lang="ts">
import { MsButton, MsContainer } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div class="ms-u-bg-sunken ms-u-rounded-lg ms-u-w-full" style="padding-block: 32px">
    <MsContainer max-width="sm" class="ms-u-text-center">
      <h3 style="margin: 0 0 8px">{{ t.heroTitle }}</h3>
      <p class="ms-u-text-muted" style="margin: 0 0 16px; line-height: 1.6">{{ t.heroBody }}</p>
      <MsButton>{{ t.getStarted }}</MsButton>
    </MsContainer>
  </div>
</template>
