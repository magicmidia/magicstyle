<script setup lang="ts">
import { computed } from "vue";
import { MsMasonryGrid } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

interface Pin {
  id: number;
  src: string;
  title: string;
  height: number;
}

const pins = computed<Pin[]>(() => [
  { id: 1, src: "/demo/photo-1015-400x520.svg", title: t.pin1, height: 260 },
  { id: 2, src: "/demo/photo-1025-400x300.svg", title: t.pin2, height: 150 },
  { id: 3, src: "/demo/photo-1035-400x400.svg", title: t.pin3, height: 200 },
  { id: 4, src: "/demo/photo-1045-400x300.svg", title: t.pin4, height: 150 },
  { id: 5, src: "/demo/photo-1055-400x560.svg", title: t.pin5, height: 280 },
  { id: 6, src: "/demo/photo-1065-400x360.svg", title: t.pin6, height: 180 },
]);
</script>

<template>
  <div style="width: 100%; max-width: 720px">
    <MsMasonryGrid :items="pins" :cols="3" gap="sm">
      <template #default="{ item }">
        <figure style="margin: 0" class="ms-u-rounded-lg ms-u-border ms-u-bg-raised">
          <img
            :src="(item as Pin).src"
            :alt="(item as Pin).title"
            loading="lazy"
            :style="{
              display: 'block',
              width: '100%',
              height: `${(item as Pin).height}px`,
              objectFit: 'cover',
              borderRadius: '12px 12px 0 0',
            }"
          />
          <figcaption class="ms-u-p-2" style="font-size: var(--ms-typography-size-sm)">
            {{ (item as Pin).title }}
          </figcaption>
        </figure>
      </template>
    </MsMasonryGrid>
  </div>
</template>
