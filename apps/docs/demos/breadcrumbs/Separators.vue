<script setup lang="ts">
import { computed } from "vue";
import { MsBreadcrumbs, type BreadcrumbItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<BreadcrumbItemData[]>(() => [
  { label: t.home, href: "#" },
  { label: t.docs, href: "#" },
  { label: t.components, href: "#" },
  { label: t.breadcrumbs },
]);
</script>

<template>
  <div style="display: grid; gap: 16px">
    <MsBreadcrumbs :items="items" separator-type="chevron" />
    <MsBreadcrumbs :items="items" separator-type="slash" />
    <MsBreadcrumbs :items="items" separator-type="arrow" />
    <MsBreadcrumbs :items="items" separator-type="dot" />
  </div>
</template>
