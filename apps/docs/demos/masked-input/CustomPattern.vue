<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsMaskedInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const time = ref("");
const invoice = ref("");
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsField :label="t.time" :description="t.timeHint">
      <MsMaskedInput v-model="time" mask="99:99" />
    </MsField>
    <MsField :label="t.invoice" :description="t.invoiceHint">
      <MsMaskedInput v-model="invoice" mask="NF-999.999" />
    </MsField>
  </div>
</template>
