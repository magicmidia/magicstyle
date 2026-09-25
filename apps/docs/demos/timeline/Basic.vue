<script setup lang="ts">
import { MsTimeline, MsTimelineItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsTimeline>
      <MsTimelineItem :title="t.created" :timestamp="t.createdAt" :description="t.createdDesc" />
      <MsTimelineItem :title="t.reviewed" :timestamp="t.reviewedAt" :description="t.reviewedDesc" />
      <MsTimelineItem :title="t.merged" :timestamp="t.mergedAt" :description="t.mergedDesc" />
      <MsTimelineItem :title="t.deployed" :timestamp="t.deployedAt" :description="t.deployedDesc" />
    </MsTimeline>
  </div>
</template>
