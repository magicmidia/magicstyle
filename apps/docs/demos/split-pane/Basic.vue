<script setup lang="ts">
import { MsSplitPane } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    class="ms-u-border ms-u-rounded-lg"
    style="width: 100%; max-width: 720px; height: 280px; overflow: hidden"
  >
    <MsSplitPane>
      <template #first>
        <div class="ms-u-p-4 ms-u-h-full ms-u-bg-sunken">
          <div class="ms-u-font-semibold ms-u-mb-2">{{ t.markdown }}</div>
          <pre class="ms-u-font-mono ms-u-m-0" style="white-space: pre-wrap">{{ t.source }}</pre>
        </div>
      </template>
      <template #second>
        <div class="ms-u-p-4">
          <div class="ms-u-font-semibold ms-u-mb-2">{{ t.preview }}</div>
          <h3 style="margin: 0 0 8px">{{ t.heading }}</h3>
          <p style="margin: 0">{{ t.paragraph }}</p>
        </div>
      </template>
    </MsSplitPane>
  </div>
</template>
