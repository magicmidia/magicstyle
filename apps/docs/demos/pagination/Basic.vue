<script setup lang="ts">
import { ref } from "vue";
import { MsPagination } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const page = ref(1);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <MsPagination v-model:current-page="page" :total="248" />
    <span class="ms-u-text-muted">{{ t.currentPage }} {{ page }}</span>
  </div>
</template>
