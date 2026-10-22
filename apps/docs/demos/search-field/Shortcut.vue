<script setup lang="ts">
import { ref } from "vue";
import { MsSearchField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const query = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsSearchField v-model="query" shortcut="⌘K" :placeholder="t.docsPlaceholder" />
  </div>
</template>
