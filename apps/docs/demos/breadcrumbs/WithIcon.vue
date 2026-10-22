<script setup lang="ts">
import { MsBreadcrumbItem, MsBreadcrumbSeparator, MsBreadcrumbs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsBreadcrumbs variant="solid">
    <MsBreadcrumbItem href="#">
      <template #icon>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      </template>
      {{ t.home }}
    </MsBreadcrumbItem>
    <MsBreadcrumbSeparator />
    <MsBreadcrumbItem href="#">{{ t.team }}</MsBreadcrumbItem>
    <MsBreadcrumbSeparator />
    <MsBreadcrumbItem disabled>{{ t.archived }}</MsBreadcrumbItem>
    <MsBreadcrumbSeparator />
    <MsBreadcrumbItem current>{{ t.members }}</MsBreadcrumbItem>
  </MsBreadcrumbs>
</template>
