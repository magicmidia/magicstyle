<script setup lang="ts">
import { MsButton, MsParallax } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; border-radius: 16px; overflow: hidden">
    <MsParallax :height="360">
      <template #background>
        <div
          style="
            position: absolute;
            inset: -40% 0;
            background:
              radial-gradient(circle at 20% 30%, #a78bfa 0, transparent 40%),
              radial-gradient(circle at 80% 70%, #22d3ee 0, transparent 45%),
              linear-gradient(160deg, #1e1b4b, #0f172a);
          "
        />
      </template>
      <div
        style="
          display: grid;
          place-content: center;
          justify-items: center;
          gap: 16px;
          height: 360px;
          padding: 24px;
          color: #fff;
          text-align: center;
        "
      >
        <strong style="font-size: 2rem; line-height: 1.2">{{ t.heroTitle }}</strong>
        <span style="max-width: 420px; opacity: 0.85">{{ t.heroText }}</span>
        <MsButton>{{ t.heroCta }}</MsButton>
      </div>
    </MsParallax>
  </div>
</template>
