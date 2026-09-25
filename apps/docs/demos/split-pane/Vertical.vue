<script setup lang="ts">
import { MsSplitPane } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    class="ms-u-border ms-u-rounded-lg"
    style="width: 100%; max-width: 720px; height: 320px; overflow: hidden"
  >
    <MsSplitPane direction="vertical" :split="65">
      <template #first>
        <pre class="ms-u-font-mono ms-u-p-4 ms-u-m-0">{{ t.code }}</pre>
      </template>
      <template #second>
        <pre class="ms-u-font-mono ms-u-p-4 ms-u-m-0 ms-u-bg-sunken ms-u-h-full">{{
          t.terminal
        }}</pre>
      </template>
    </MsSplitPane>
  </div>
</template>
