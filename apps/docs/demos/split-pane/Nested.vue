<script setup lang="ts">
import { MsSplitPane } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    class="ms-u-border ms-u-rounded-lg"
    style="width: 100%; max-width: 760px; height: 340px; overflow: hidden"
  >
    <MsSplitPane :split="25" :min="15" :max="40">
      <template #first>
        <ul
          class="ms-u-p-3 ms-u-m-0 ms-u-font-mono ms-u-bg-sunken ms-u-h-full"
          style="list-style: none; display: grid; gap: 4px; align-content: start"
        >
          <li>{{ t.folderSrc }}</li>
          <li style="padding-inline-start: 12px">{{ t.fileMain }}</li>
          <li style="padding-inline-start: 12px">{{ t.fileApp }}</li>
          <li>{{ t.filePackage }}</li>
        </ul>
      </template>
      <template #second>
        <MsSplitPane direction="vertical" :split="70">
          <template #first>
            <pre class="ms-u-font-mono ms-u-p-4 ms-u-m-0">{{ t.code }}</pre>
          </template>
          <template #second>
            <pre class="ms-u-font-mono ms-u-p-4 ms-u-m-0">{{ t.terminal }}</pre>
          </template>
        </MsSplitPane>
      </template>
    </MsSplitPane>
  </div>
</template>
