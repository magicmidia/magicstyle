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
    <MsFab position="top-right" icon="?" :label="t.help" />
    <MsFab position="bottom-left" icon="💬" :label="t.chat" />
  </div>
</template>
