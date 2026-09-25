<script setup lang="ts">
import { ref } from "vue";
import { MsTruncate } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const expanded = ref(false);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <MsTruncate :text="t.review" :lines="2" />
    <MsTruncate
      v-model:expanded="expanded"
      :text="t.description"
      :lines="3"
      expandable
      :expand-text="t.readMore"
      :collapse-text="t.readLess"
    />
  </div>
</template>
