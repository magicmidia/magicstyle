<script setup lang="ts">
import { ref } from "vue";
import { MsBadge, MsCollapse } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(false);
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsCollapse v-model="open" variant="card">
      <template #title>
        <span style="display: grid; gap: 2px; text-align: start">
          <strong>{{ t.orderTitle }}</strong>
          <small style="opacity: 0.7">{{ t.orderMeta }}</small>
        </span>
      </template>
      <template #extra>
        <MsBadge variant="soft" tone="success" pill>{{ t.orderStatus }}</MsBadge>
      </template>
      <dl style="display: grid; grid-template-columns: 1fr auto; gap: 8px 16px; margin: 0">
        <dt>{{ t.item1 }}</dt>
        <dd style="margin: 0">{{ t.item1Price }}</dd>
        <dt>{{ t.item2 }}</dt>
        <dd style="margin: 0">{{ t.item2Price }}</dd>
        <dt>{{ t.shipping }}</dt>
        <dd style="margin: 0">{{ t.shippingPrice }}</dd>
        <dt>
          <strong>{{ t.total }}</strong>
        </dt>
        <dd style="margin: 0">
          <strong>{{ t.totalPrice }}</strong>
        </dd>
      </dl>
    </MsCollapse>
  </div>
</template>
