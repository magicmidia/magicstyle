<script setup lang="ts">
import { MsAspectRatio } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsAspectRatio ratio="16/9" class="ms-u-rounded-lg">
      <img src="/demo/photo-1036-960x540.svg" :alt="t.mountainsAlt" loading="lazy" />
    </MsAspectRatio>
  </div>
</template>
