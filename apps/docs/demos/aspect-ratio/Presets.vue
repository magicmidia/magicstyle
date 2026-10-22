<script setup lang="ts">
import { MsAspectRatio } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const ratios = ["1/1", "4/3", "16/9", "21/9"] as const;
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 720px;
      align-items: end;
    "
  >
    <figure v-for="ratio in ratios" :key="ratio" style="margin: 0; display: grid; gap: 6px">
      <MsAspectRatio :ratio="ratio" class="ms-u-rounded-md">
        <img src="/demo/photo-1043-800x800.svg" :alt="t.forestAlt" loading="lazy" />
      </MsAspectRatio>
      <figcaption class="ms-u-text-muted ms-u-text-center ms-u-font-mono">{{ ratio }}</figcaption>
    </figure>
  </div>
</template>
