<script setup lang="ts">
import { ref } from "vue";
import { MsAccordion, MsAccordionItem, type MsAccordionValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref<MsAccordionValue | MsAccordionValue[]>("shipping");
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsAccordion v-model="open">
      <MsAccordionItem value="shipping" :title="t.shippingTitle">
        <p>{{ t.shippingBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="returns" :title="t.returnsTitle">
        <p>{{ t.returnsBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="payment" :title="t.paymentTitle">
        <p>{{ t.paymentBody }}</p>
      </MsAccordionItem>
    </MsAccordion>
  </div>
</template>
