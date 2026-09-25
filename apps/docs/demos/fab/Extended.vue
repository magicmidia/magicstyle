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
    <MsFab :label="t.newTask">
      <template #icon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      </template>
    </MsFab>
  </div>
</template>
