<script setup lang="ts">
import { MsProgressRadial } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsProgressRadial size="sm" :value="25" :show-value="false" :aria-label="t.courseProgress" />
  <MsProgressRadial size="md" :value="50" :aria-label="t.courseProgress" />
  <MsProgressRadial size="lg" :value="75" :stroke-width="8" :aria-label="t.courseProgress" />
  <MsProgressRadial size="xl" :value="90" :stroke-width="10" :aria-label="t.courseProgress" />
</template>
