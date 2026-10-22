<script setup lang="ts">
import { MsProgress } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 420px">
    <MsProgress :model-value="68" :label="t.profileComplete" show-value />
  </div>
</template>
