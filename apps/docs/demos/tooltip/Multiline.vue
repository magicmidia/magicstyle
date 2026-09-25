<script setup lang="ts">
import { MsButton, MsTooltip } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; align-items: center; gap: 4px; margin: 0; font-size: 14px">
    {{ t.feeLabel }}
    <MsTooltip :max-width="240" tone="dark" placement="bottom" :content="t.feeExplanation">
      <MsButton variant="text" size="xs" :aria-label="t.feeHelp">ⓘ</MsButton>
    </MsTooltip>
  </div>
</template>
