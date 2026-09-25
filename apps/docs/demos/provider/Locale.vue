<script setup lang="ts">
import { ref } from "vue";
import { MsPagination, MsProvider } from "@magic-style/vue";

const locales = ["pt-BR", "en-US", "es-ES"] as const;
const page = ref(4);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center">
    <MsProvider v-for="locale in locales" :key="locale" :locale="locale">
      <div class="ms-u-flex ms-u-flex-wrap ms-u-items-center ms-u-justify-center ms-u-gap-3">
        <code>{{ locale }}</code>
        <MsPagination v-model:current-page="page" :total="137" :sibling-count="0" show-jumper />
      </div>
    </MsProvider>
  </div>
</template>
