<script setup lang="ts">
import { MsMarquee } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const brands = ["Nimbus", "Vértice", "Kora", "Lumen", "Aurora", "Quanta", "Solaris", "Polar"];
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; text-align: center">
    <small style="opacity: 0.7">{{ t.trustedBy }}</small>
    <MsMarquee>
      <span
        v-for="brand in brands"
        :key="brand"
        style="font-size: 1.375rem; font-weight: 700; letter-spacing: -0.02em; opacity: 0.6"
      >
        {{ brand }}
      </span>
    </MsMarquee>
  </div>
</template>
