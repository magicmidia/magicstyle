<script setup lang="ts">
import { MsColorPicker, MsField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.lockedLabel" :description="t.lockedHelp">
      <MsColorPicker model-value="#6366f1" disabled />
    </MsField>
  </div>
</template>
