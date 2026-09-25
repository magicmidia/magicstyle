<script setup lang="ts">
import { computed } from "vue";
import { MsDropdownButton, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<MsMenuItem[]>(() => [
  { label: t.edit, value: "edit" },
  { label: t.duplicate, value: "duplicate" },
  { label: t.archive, value: "archive" },
  { label: t.delete, value: "delete", tone: "danger", divider: true },
]);
</script>

<template>
  <MsDropdownButton :label="t.actions" :items="items" variant="outline" tone="neutral" />
</template>
