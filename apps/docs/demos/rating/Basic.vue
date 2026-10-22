<script setup lang="ts">
import { ref } from "vue";
import { MsRating } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const rating = ref(3);
</script>

<template>
  <MsRating v-model="rating" :aria-label="t.rateProduct" />
</template>
