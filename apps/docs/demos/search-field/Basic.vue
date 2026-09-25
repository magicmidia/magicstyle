<script setup lang="ts">
import { ref } from "vue";
import { MsSearchField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const query = ref("");
const lastSearch = ref("");
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 360px">
    <MsSearchField
      v-model="query"
      :placeholder="t.placeholder"
      @search="lastSearch = $event"
      @clear="lastSearch = ''"
    />
    <small v-if="lastSearch">{{ t.searchedFor }} {{ lastSearch }}</small>
  </div>
</template>
