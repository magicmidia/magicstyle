<script setup lang="ts">
import { MsTruncate } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 280px">
    <strong>{{ t.productName }}</strong>
    <MsTruncate :text="t.productSubtitle" />
  </div>
</template>
