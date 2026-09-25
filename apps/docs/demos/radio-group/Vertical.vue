<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const payment = ref("pix");
</script>

<template>
  <MsField :label="t.payment" :description="t.paymentHint">
    <MsRadioGroup v-model="payment" orientation="vertical">
      <MsRadio value="pix" :label="t.pix" />
      <MsRadio value="card" :label="t.card" />
      <MsRadio value="boleto" :label="t.boleto" />
    </MsRadioGroup>
  </MsField>
</template>
