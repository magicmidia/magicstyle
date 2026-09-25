<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSidebarMenu, type MsSidebarMenuGroupData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const active = ref("dashboard");
const menu = computed<MsSidebarMenuGroupData[]>(() => [
  {
    title: t.general,
    items: [
      { id: "dashboard", label: t.dashboard },
      { id: "orders", label: t.orders, badge: 8 },
      { id: "products", label: t.products },
      { id: "customers", label: t.customers, badge: t.newBadge, badgeTone: "success" },
    ],
  },
  {
    title: t.store,
    items: [
      { id: "discounts", label: t.discounts },
      { id: "shipping", label: t.shipping },
      { id: "reports", label: t.reports, disabled: true },
    ],
  },
]);
</script>

<template>
  <div class="ms-u-p-3 ms-u-rounded-lg ms-u-border ms-u-bg-raised" style="width: 260px">
    <MsSidebarMenu v-model="active" :items="menu" />
  </div>
</template>
