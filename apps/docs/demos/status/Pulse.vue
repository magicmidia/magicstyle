<script setup lang="ts">
import { MsStatus } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsStatus pulse tone="danger" :label="t.live" />
  <MsStatus pulse tone="success" :label="t.recording" />
</template>
