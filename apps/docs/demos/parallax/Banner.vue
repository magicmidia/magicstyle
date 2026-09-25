<script setup lang="ts">
import { MsBadge, MsParallax } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; border-radius: 12px; overflow: hidden">
    <MsParallax :height="180">
      <template #background>
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style="position: absolute; inset: -30% 0; width: 100%; height: 160%"
        >
          <rect width="400" height="300" fill="#064e3b" />
          <circle cx="60" cy="80" r="70" fill="#10b981" opacity="0.5" />
          <circle cx="330" cy="60" r="50" fill="#34d399" opacity="0.4" />
          <circle cx="250" cy="240" r="90" fill="#059669" opacity="0.5" />
        </svg>
      </template>
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          height: 180px;
          padding: 24px 32px;
          color: #fff;
        "
      >
        <div style="display: grid; gap: 4px">
          <strong style="font-size: 1.25rem">{{ t.bannerTitle }}</strong>
          <span style="opacity: 0.85">{{ t.bannerText }}</span>
        </div>
        <MsBadge tone="success" pill>{{ t.bannerBadge }}</MsBadge>
      </div>
    </MsParallax>
  </div>
</template>
