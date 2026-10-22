<script setup lang="ts">
import { MsAlert } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsAlert :title="t.basicTitle" :description="t.basicDescription" />
  </div>
</template>
