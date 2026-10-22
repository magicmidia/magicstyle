<script setup lang="ts">
import { MsParallax } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      width: 100%;
    "
  >
    <div style="border-radius: 12px; overflow: hidden">
      <MsParallax :speed="0.15" height="220px">
        <template #background>
          <div
            style="
              position: absolute;
              inset: -30% 0;
              background: repeating-linear-gradient(45deg, #0ea5e9 0 18px, #0284c7 18px 36px);
            "
          />
        </template>
        <div
          style="display: grid; place-content: center; height: 220px; color: #fff; font-weight: 600"
        >
          {{ t.slow }}
        </div>
      </MsParallax>
    </div>
    <div style="border-radius: 12px; overflow: hidden">
      <MsParallax :speed="0.6" height="220px">
        <template #background>
          <div
            style="
              position: absolute;
              inset: -80% 0;
              background: repeating-linear-gradient(45deg, #f97316 0 18px, #ea580c 18px 36px);
            "
          />
        </template>
        <div
          style="display: grid; place-content: center; height: 220px; color: #fff; font-weight: 600"
        >
          {{ t.fast }}
        </div>
      </MsParallax>
    </div>
  </div>
</template>
