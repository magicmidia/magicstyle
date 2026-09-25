<script setup lang="ts">
import { MsSeparator } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <article style="width: 100%; max-width: 460px; line-height: 1.7">
    <p style="margin: 0">{{ t.chapterEnd }}</p>
    <MsSeparator :decorative="false" variant="dotted" spacing="lg" />
    <p style="margin: 0">{{ t.chapterStart }}</p>
  </article>
</template>
