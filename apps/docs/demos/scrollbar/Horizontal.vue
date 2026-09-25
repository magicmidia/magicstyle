<script setup lang="ts">
import { computed } from "vue";
import { MsScrollbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const artworks = computed(() => [
  { id: 1011, artist: t.artist1 },
  { id: 1015, artist: t.artist2 },
  { id: 1025, artist: t.artist3 },
  { id: 1035, artist: t.artist4 },
  { id: 1043, artist: t.artist5 },
  { id: 1050, artist: t.artist6 },
]);
</script>

<template>
  <MsScrollbar
    orientation="horizontal"
    class="ms-u-border ms-u-rounded-md"
    style="width: 100%; max-width: 480px"
    tabindex="0"
    role="region"
    :aria-label="t.gallery"
  >
    <div class="ms-u-flex ms-u-gap-4 ms-u-p-4" style="width: max-content">
      <figure v-for="art in artworks" :key="art.id" style="margin: 0">
        <img
          :src="`/demo/photo-${art.id}-300x400.svg`"
          :alt="art.artist"
          width="150"
          height="200"
          loading="lazy"
          class="ms-u-rounded-md"
          style="display: block; object-fit: cover"
        />
        <figcaption
          class="ms-u-text-muted"
          style="font-size: var(--ms-typography-size-sm); padding-top: 6px"
        >
          {{ art.artist }}
        </figcaption>
      </figure>
    </div>
  </MsScrollbar>
</template>
