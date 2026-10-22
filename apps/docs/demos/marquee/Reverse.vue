<script setup lang="ts">
import { computed } from "vue";
import { MsMarquee, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const topics = computed(() => [t.topic1, t.topic2, t.topic3, t.topic4, t.topic5, t.topic6]);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%">
    <MsMarquee :speed="30" gap="0.75rem">
      <MsTag v-for="topic in topics" :key="topic" tone="primary" shape="pill">{{ topic }}</MsTag>
    </MsMarquee>
    <MsMarquee :speed="40" gap="0.75rem" reverse>
      <MsTag v-for="topic in topics" :key="topic" tone="accent" shape="pill">{{ topic }}</MsTag>
    </MsMarquee>
  </div>
</template>
