<script setup lang="ts">
import { MsField, MsPasswordInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <MsField size="sm" :label="t.small">
      <MsPasswordInput size="sm" />
    </MsField>
    <MsField size="lg" :label="t.large">
      <MsPasswordInput size="lg" />
    </MsField>
    <MsField :label="t.disabled" :description="t.disabledHint">
      <MsPasswordInput disabled />
    </MsField>
  </div>
</template>
