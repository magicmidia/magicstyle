<script setup lang="ts">
import { MsBadge } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
      <MsBadge size="xs">{{ t.version }}</MsBadge>
      <MsBadge size="sm">{{ t.version }}</MsBadge>
      <MsBadge size="md">{{ t.version }}</MsBadge>
      <MsBadge size="lg">{{ t.version }}</MsBadge>
      <MsBadge size="xl">{{ t.version }}</MsBadge>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
      <MsBadge pill variant="soft" tone="success" dot>{{ t.active }}</MsBadge>
      <MsBadge pill variant="soft" tone="warning" dot>{{ t.pending }}</MsBadge>
      <MsBadge pill variant="soft" tone="danger" dot>{{ t.overdue }}</MsBadge>
      <MsBadge pill variant="outline" tone="neutral" dot>{{ t.archived }}</MsBadge>
    </div>
  </div>
</template>
