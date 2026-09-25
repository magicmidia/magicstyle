<script setup lang="ts">
import { MsProgressRadial } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsProgressRadial :value="72" :aria-label="t.courseProgress" />
</template>
