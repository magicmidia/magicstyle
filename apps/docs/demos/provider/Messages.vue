<script setup lang="ts">
import { computed, ref } from "vue";
import { MsPagination, MsProvider, type MsMessagesOverride } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const page = ref(2);
const messages = computed<MsMessagesOverride>(() => ({
  pagination: { goTo: t.jumpTo, next: t.nextPage, previous: t.previousPage },
}));
</script>

<template>
  <MsProvider :messages="messages" color-mode="inherit">
    <MsPagination v-model:current-page="page" :total="64" show-jumper :show-total="false" />
  </MsProvider>
</template>
