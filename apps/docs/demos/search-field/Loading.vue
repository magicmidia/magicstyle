<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from "vue";
import { MsSearchField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const query = ref("");
const loading = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

// Simulates a debounced request to a search API.
watch(query, (value) => {
  clearTimeout(timer);
  loading.value = value.length > 0;
  timer = setTimeout(() => (loading.value = false), 900);
});
onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsSearchField v-model="query" :loading="loading" :placeholder="t.ordersPlaceholder" />
  </div>
</template>
