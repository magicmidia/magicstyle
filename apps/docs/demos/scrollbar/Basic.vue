<script setup lang="ts">
import { computed } from "vue";
import { MsScrollbar, MsSeparator } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const releases = computed(() =>
  Array.from({ length: 30 }, (_, i) => `v1.${(30 - i).toString()}.0`),
);
</script>

<template>
  <MsScrollbar
    :max-height="240"
    class="ms-u-border ms-u-rounded-md"
    style="width: 220px"
    tabindex="0"
    role="region"
    :aria-label="t.tags"
  >
    <div class="ms-u-p-3">
      <div class="ms-u-font-semibold ms-u-mb-2">{{ t.tags }}</div>
      <template v-for="(tag, index) in releases" :key="tag">
        <div
          class="ms-u-font-mono"
          style="font-size: var(--ms-typography-size-sm); padding-block: 6px"
        >
          {{ tag }}
        </div>
        <MsSeparator v-if="index < releases.length - 1" />
      </template>
    </div>
  </MsScrollbar>
</template>
