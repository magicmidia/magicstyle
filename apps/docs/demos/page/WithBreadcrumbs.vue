<script setup lang="ts">
import { computed } from "vue";
import {
  MsBreadcrumbs,
  MsButton,
  MsPage,
  MsPageHeader,
  MsTag,
  type BreadcrumbItemData,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const trail = computed<BreadcrumbItemData[]>(() => [
  { label: t.orders, href: "#" },
  { label: t.orderNumber },
]);
</script>

<template>
  <MsPage compact>
    <MsPageHeader>
      <template #breadcrumbs>
        <MsBreadcrumbs :items="trail" size="sm" />
      </template>
      <template #title>
        <div class="ms-u-flex ms-u-items-center ms-u-gap-3">
          <h2 style="margin: 0">{{ t.orderNumber }}</h2>
          <MsTag tone="warning" dot>{{ t.awaitingShipment }}</MsTag>
        </div>
      </template>
      <template #description>
        <p class="ms-u-text-muted" style="margin: 0">{{ t.orderMeta }}</p>
      </template>
      <template #actions>
        <MsButton variant="ghost" tone="neutral">{{ t.refund }}</MsButton>
        <MsButton variant="outline" tone="neutral">{{ t.printLabel }}</MsButton>
        <MsButton>{{ t.markShipped }}</MsButton>
      </template>
    </MsPageHeader>
  </MsPage>
</template>
