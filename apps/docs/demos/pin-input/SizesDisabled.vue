<script setup lang="ts">
import { MsField, MsPinInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px">
    <MsField size="sm" :label="t.small">
      <MsPinInput size="sm" />
    </MsField>
    <MsField size="lg" :label="t.large">
      <MsPinInput size="lg" />
    </MsField>
    <MsField :label="t.disabled">
      <MsPinInput model-value="4821" disabled />
    </MsField>
  </div>
</template>
