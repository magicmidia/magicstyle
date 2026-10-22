<script setup lang="ts">
import { ref } from "vue";
import { MsRating } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const small = ref(2);
const medium = ref(3);
const large = ref(4);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <MsRating v-model="small" size="sm" :aria-label="t.small" />
    <MsRating v-model="medium" :aria-label="t.medium" />
    <MsRating v-model="large" size="lg" :aria-label="t.large" />
  </div>
</template>
