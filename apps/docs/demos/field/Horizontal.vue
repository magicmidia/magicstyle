<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsInput, MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const displayName = ref(t.displayNameValue);
const timezone = ref("america-sao-paulo");
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 520px">
    <MsField :label="t.displayName" orientation="horizontal" :description="t.displayNameHint">
      <MsInput v-model="displayName" />
    </MsField>
    <MsField :label="t.timezone" orientation="horizontal">
      <MsNativeSelect v-model="timezone">
        <option value="america-sao-paulo">{{ t.tzSaoPaulo }}</option>
        <option value="america-new-york">{{ t.tzNewYork }}</option>
        <option value="europe-madrid">{{ t.tzMadrid }}</option>
      </MsNativeSelect>
    </MsField>
  </div>
</template>
