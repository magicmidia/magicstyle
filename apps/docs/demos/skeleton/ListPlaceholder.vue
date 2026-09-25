<script setup lang="ts">
import { MsSkeleton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <ul
    aria-busy="true"
    :aria-label="t.loadingContacts"
    style="
      display: grid;
      gap: 16px;
      width: 100%;
      max-width: 400px;
      margin: 0;
      padding: 0;
      list-style: none;
    "
  >
    <li v-for="row in 4" :key="row" style="display: flex; align-items: center; gap: 12px">
      <MsSkeleton variant="avatar" />
      <div style="flex: 1">
        <MsSkeleton width="45%" height="14px" />
        <MsSkeleton width="75%" height="12px" tone="subtle" />
      </div>
      <MsSkeleton variant="button" width="72px" height="32px" />
    </li>
  </ul>
</template>
