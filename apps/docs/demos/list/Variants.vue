<script setup lang="ts">
import { MsList, MsListItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 24px;
      width: 100%;
    "
  >
    <MsList variant="default" size="sm">
      <MsListItem :title="t.inbox" />
      <MsListItem :title="t.drafts" />
      <MsListItem :title="t.archive" />
    </MsList>
    <MsList variant="divided" size="md">
      <MsListItem :title="t.inbox" />
      <MsListItem :title="t.drafts" />
      <MsListItem :title="t.archive" />
    </MsList>
    <MsList variant="bordered" size="lg">
      <MsListItem :title="t.inbox" />
      <MsListItem :title="t.drafts" />
      <MsListItem :title="t.archive" />
    </MsList>
  </div>
</template>
