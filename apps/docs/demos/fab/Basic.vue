<script setup lang="ts">
import { MsFab } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <!-- In an app the FAB is fixed to the viewport; the transform keeps it inside this frame. -->
  <div
    style="
      position: relative;
      transform: translateZ(0);
      width: 100%;
      max-width: 380px;
      height: 260px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-default);
      border-radius: 12px;
    "
  >
    <MsFab>
      <template #icon>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <span class="ms-visually-hidden">{{ t.compose }}</span>
      </template>
    </MsFab>
  </div>
</template>
