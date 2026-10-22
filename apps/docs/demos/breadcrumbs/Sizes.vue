<script setup lang="ts">
import { computed } from "vue";
import { MsBreadcrumbs, type BreadcrumbItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<BreadcrumbItemData[]>(() => [
  { label: t.billing, href: "#" },
  { label: t.invoices, href: "#" },
  { label: t.invoiceNumber },
]);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: start">
    <MsBreadcrumbs :items="items" size="sm" />
    <MsBreadcrumbs :items="items" size="md" />
    <MsBreadcrumbs :items="items" size="lg" />
  </div>
</template>
