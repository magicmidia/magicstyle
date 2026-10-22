<script setup lang="ts">
import { MsTimeline, MsTimelineItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; overflow-x: auto">
    <MsTimeline direction="horizontal">
      <MsTimelineItem tone="success" title="v1.0" :timestamp="t.q1" :description="t.v1" />
      <MsTimelineItem tone="success" title="v1.5" :timestamp="t.q2" :description="t.v15" />
      <MsTimelineItem tone="primary" title="v2.0" :timestamp="t.q3" :description="t.v2" />
      <MsTimelineItem tone="neutral" title="v2.5" :timestamp="t.q4" :description="t.v25" />
    </MsTimeline>
  </div>
</template>
