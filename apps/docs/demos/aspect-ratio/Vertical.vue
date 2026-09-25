<script setup lang="ts">
import { MsAspectRatio } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 200px">
    <MsAspectRatio ratio="9/16" class="ms-u-rounded-xl">
      <img src="/demo/photo-1011-540x960.svg" :alt="t.storyAlt" loading="lazy" />
    </MsAspectRatio>
  </div>
</template>
