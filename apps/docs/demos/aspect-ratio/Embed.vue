<script setup lang="ts">
import { MsAspectRatio } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsAspectRatio :ratio="4 / 3" class="ms-u-rounded-lg ms-u-border">
      <iframe
        :title="t.mapTitle"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66%2C-23.57%2C-46.62%2C-23.54&layer=mapnik"
        style="border: 0"
        loading="lazy"
      />
    </MsAspectRatio>
  </div>
</template>
