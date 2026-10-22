<script setup lang="ts">
import { MsStatus } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsStatus size="sm" :label="t.small" />
  <MsStatus size="md" :label="t.medium" />
  <MsStatus size="lg" :label="t.large" />
</template>
