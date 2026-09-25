<script setup lang="ts">
import { MsField, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <MsField size="sm" :label="t.small" :description="t.sizeHint">
      <MsInput size="sm" :placeholder="t.usernamePlaceholder" />
    </MsField>
    <MsField :label="t.medium" :description="t.sizeHint">
      <MsInput :placeholder="t.usernamePlaceholder" />
    </MsField>
    <MsField size="lg" :label="t.large" :description="t.sizeHint">
      <MsInput size="lg" :placeholder="t.usernamePlaceholder" />
    </MsField>
  </div>
</template>
