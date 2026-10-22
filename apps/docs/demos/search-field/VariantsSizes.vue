<script setup lang="ts">
import { MsSearchField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsSearchField size="sm" :placeholder="t.small" />
    <MsSearchField :placeholder="t.outline" />
    <MsSearchField variant="filled" :placeholder="t.filled" />
    <MsSearchField variant="flushed" :placeholder="t.flushed" />
    <MsSearchField size="lg" :placeholder="t.large" />
    <MsSearchField disabled :placeholder="t.disabled" />
  </div>
</template>
