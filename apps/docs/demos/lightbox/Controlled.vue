<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsLightbox, type MsLightboxItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const index = ref(2);

const photos = computed<MsLightboxItem[]>(() => [
  { src: "/demo/photo-1015-1600x1067.svg", title: t.day1 },
  { src: "/demo/photo-1016-1600x1067.svg", title: t.day2 },
  { src: "/demo/photo-1018-1600x1067.svg", title: t.day3 },
  { src: "/demo/photo-1039-1600x1067.svg", title: t.day4 },
]);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <MsButton @click="open = true">{{ t.resume }}</MsButton>
    <p style="margin: 0; font-size: 14px">
      {{ t.lastViewed }} <strong>{{ photos[index]?.title }}</strong>
    </p>
  </div>
  <MsLightbox v-model="open" v-model:index="index" :items="photos" />
</template>
