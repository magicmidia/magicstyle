<script setup lang="ts">
import { computed } from "vue";
import { MsBreadcrumbs, type BreadcrumbItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<BreadcrumbItemData[]>(() => [
  { label: t.store, href: "#" },
  { label: t.catalog, href: "#" },
  { label: t.headphones, href: "#" },
  { label: t.product },
]);
</script>

<template>
  <div style="display: grid; gap: 20px; justify-items: start">
    <MsBreadcrumbs :items="items" variant="plain" />
    <MsBreadcrumbs :items="items" variant="pills" />
    <MsBreadcrumbs :items="items" variant="solid" />
  </div>
</template>
