<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const shipping = ref("");
const status = ref("paid");
const region = ref("south");
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 320px">
    <MsField :label="t.shipping" :error="shipping ? undefined : t.shippingError" required>
      <MsNativeSelect v-model="shipping" :placeholder="t.shippingPlaceholder" required>
        <option value="standard">{{ t.standard }}</option>
        <option value="express">{{ t.express }}</option>
        <option value="pickup">{{ t.pickup }}</option>
      </MsNativeSelect>
    </MsField>
    <MsField :label="t.status">
      <MsNativeSelect v-model="status" tone="success">
        <option value="paid">{{ t.paid }}</option>
        <option value="refunded">{{ t.refunded }}</option>
      </MsNativeSelect>
    </MsField>
    <MsField :label="t.region" :description="t.regionHint">
      <MsNativeSelect v-model="region" disabled>
        <option value="south">{{ t.south }}</option>
      </MsNativeSelect>
    </MsField>
  </div>
</template>
