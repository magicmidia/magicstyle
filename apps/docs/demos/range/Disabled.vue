<script setup lang="ts">
import { MsField, MsRange } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.quality" :description="t.qualityHint">
      <MsRange :model-value="40" disabled show-value />
    </MsField>
  </div>
</template>
