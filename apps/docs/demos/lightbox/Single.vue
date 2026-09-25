<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsLightbox, type MsLightboxItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);

const cover = computed<MsLightboxItem[]>(() => [
  {
    src: "/demo/photo-1048-1600x1067.svg",
    title: t.coverTitle,
    caption: t.coverCaption,
    alt: t.coverAlt,
  },
]);
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.viewCover }}</MsButton>
  <MsLightbox v-model="open" :items="cover" />
</template>
