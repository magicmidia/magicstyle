<script setup lang="ts">
import { ref } from "vue";
import { MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const subdomain = ref("acme");
const price = ref(t.priceValue);
const query = ref(t.queryValue);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsInput v-model="subdomain" :aria-label="t.subdomain">
      <template #prefix>https://</template>
      <template #suffix>.magicstyle.app</template>
    </MsInput>
    <MsInput v-model="price" inputmode="decimal" :aria-label="t.price">
      <template #prefix>{{ t.currency }}</template>
    </MsInput>
    <MsInput v-model="query" clearable :placeholder="t.searchPlaceholder" :aria-label="t.search" />
  </div>
</template>
