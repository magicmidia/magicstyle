<script setup lang="ts">
import { ref } from "vue";
import { MsIconButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const favorite = ref(false);
const muted = ref(true);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
    <MsIconButton
      variant="ghost"
      tone="danger"
      :active="favorite"
      :ariaLabel="t.favorite"
      @click="favorite = !favorite"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        :fill="favorite ? 'currentColor' : 'none'"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        />
      </svg>
    </MsIconButton>
    <MsIconButton
      variant="outline"
      tone="neutral"
      :active="muted"
      :ariaLabel="t.mute"
      @click="muted = !muted"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path v-if="muted" d="m22 9-6 6M16 9l6 6" />
        <path v-else d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </MsIconButton>
  </div>
</template>
