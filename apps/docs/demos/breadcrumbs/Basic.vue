<script setup lang="ts">
import { MsBreadcrumbItem, MsBreadcrumbSeparator, MsBreadcrumbs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsBreadcrumbs>
    <MsBreadcrumbItem href="#">{{ t.home }}</MsBreadcrumbItem>
    <MsBreadcrumbSeparator />
    <MsBreadcrumbItem href="#">{{ t.projects }}</MsBreadcrumbItem>
    <MsBreadcrumbSeparator />
    <MsBreadcrumbItem href="#">{{ t.marketingSite }}</MsBreadcrumbItem>
    <MsBreadcrumbSeparator />
    <MsBreadcrumbItem current>{{ t.settings }}</MsBreadcrumbItem>
  </MsBreadcrumbs>
</template>
