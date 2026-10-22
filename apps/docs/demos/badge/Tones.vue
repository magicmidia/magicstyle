<script setup lang="ts">
import { computed } from "vue";
import { MsBadge, type MsBadgeProps } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

type Tone = NonNullable<MsBadgeProps["tone"]>;

const tones = computed<{ tone: Tone; label: string }[]>(() => [
  { tone: "primary", label: t.primary },
  { tone: "secondary", label: t.secondary },
  { tone: "accent", label: t.accent },
  { tone: "neutral", label: t.neutral },
  { tone: "info", label: t.info },
  { tone: "success", label: t.success },
  { tone: "warning", label: t.warning },
  { tone: "danger", label: t.danger },
]);
</script>

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsBadge v-for="item in tones" :key="item.tone" :tone="item.tone">{{ item.label }}</MsBadge>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsBadge v-for="item in tones" :key="item.tone" :tone="item.tone" variant="soft">
        {{ item.label }}
      </MsBadge>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsBadge v-for="item in tones" :key="item.tone" :tone="item.tone" variant="outline">
        {{ item.label }}
      </MsBadge>
    </div>
  </div>
</template>
