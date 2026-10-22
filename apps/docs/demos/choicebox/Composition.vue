<script setup lang="ts">
import { ref } from "vue";
import { MsBadge, MsChoicebox, MsChoiceboxItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const shipping = ref<string | number | (string | number)[]>("express");
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsChoicebox v-model="shipping" tone="success" :aria-label="t.shippingLabel">
      <MsChoiceboxItem
        value="standard"
        :title="t.standard"
        :description="t.standardDesc"
        :price="t.free"
      />
      <MsChoiceboxItem
        value="express"
        :title="t.express"
        :description="t.expressDesc"
        :price="t.expressPrice"
      >
        <MsBadge tone="success" size="sm">{{ t.arrivesTomorrow }}</MsBadge>
      </MsChoiceboxItem>
      <MsChoiceboxItem
        value="pickup"
        :title="t.pickup"
        :description="t.pickupDesc"
        :price="t.free"
        disabled
      />
    </MsChoicebox>
  </div>
</template>
