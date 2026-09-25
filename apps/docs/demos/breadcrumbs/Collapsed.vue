<script setup lang="ts">
import { computed } from "vue";
import { MsBreadcrumbs, type BreadcrumbItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const path = computed<BreadcrumbItemData[]>(() => [
  { label: t.drive, href: "#" },
  { label: t.team, href: "#" },
  { label: t.year, href: "#" },
  { label: t.quarter, href: "#" },
  { label: t.reports, href: "#" },
  { label: t.file },
]);
</script>

<template>
  <MsBreadcrumbs
    :items="path"
    :max-items="4"
    :items-before-collapse="1"
    :items-after-collapse="2"
    separator-type="slash"
  />
</template>
