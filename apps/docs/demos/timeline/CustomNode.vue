<script setup lang="ts">
import { MsAvatar, MsTimeline, MsTimelineItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsTimeline>
      <MsTimelineItem :title="t.activity1" :timestamp="t.activity1At">
        <template #node>
          <MsAvatar name="Helena Duarte" size="2xs" tone="primary" />
        </template>
        {{ t.activity1Desc }}
      </MsTimelineItem>
      <MsTimelineItem tone="accent" :title="t.activity2" :timestamp="t.activity2At">
        <template #node>
          <MsAvatar name="Igor Santana" size="2xs" tone="accent" />
        </template>
        {{ t.activity2Desc }}
      </MsTimelineItem>
      <MsTimelineItem tone="success" :title="t.activity3" :timestamp="t.activity3At">
        <template #node>
          <span>✓</span>
        </template>
        {{ t.activity3Desc }}
      </MsTimelineItem>
    </MsTimeline>
  </div>
</template>
