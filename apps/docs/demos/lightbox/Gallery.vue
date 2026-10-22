<script setup lang="ts">
import { computed, ref } from "vue";
import { MsLightbox, type MsLightboxItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const index = ref(0);

const photo = (id: number, width: number, height: number) =>
  `/demo/photo-${id}-${width}x${height}.svg`;

const photos = computed<(MsLightboxItem & { id: number })[]>(() => [
  { id: 1015, src: photo(1015, 1600, 1067), title: t.day1, caption: t.day1Caption },
  { id: 1016, src: photo(1016, 1600, 1067), title: t.day2, caption: t.day2Caption },
  { id: 1018, src: photo(1018, 1600, 1067), title: t.day3, caption: t.day3Caption },
  { id: 1039, src: photo(1039, 1600, 1067), title: t.day4, caption: t.day4Caption },
]);

function show(i: number) {
  index.value = i;
  open.value = true;
}
</script>

<template>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; max-width: 420px">
    <button
      v-for="(item, i) in photos"
      :key="item.id"
      type="button"
      style="padding: 0; border: 0; border-radius: 8px; overflow: hidden; cursor: zoom-in"
      @click="show(i)"
    >
      <img
        :src="photo(item.id, 400, 267)"
        :alt="item.title"
        width="200"
        height="133"
        style="display: block; width: 100%; height: auto"
      />
    </button>
  </div>
  <MsLightbox v-model="open" v-model:index="index" :items="photos" />
</template>
