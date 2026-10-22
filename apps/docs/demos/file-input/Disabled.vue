<script setup lang="ts">
import { MsField, MsFileInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsField :label="t.contract" :description="t.contractHint">
      <MsFileInput disabled :label="t.contractPrompt" />
    </MsField>
  </div>
</template>
