<script setup lang="ts">
import { computed } from "vue";
import { MsCanvas, MsCard, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const nodes = computed(() => [
  { id: "trigger", title: t.trigger, detail: t.triggerDetail, tag: t.event },
  { id: "filter", title: t.filter, detail: t.filterDetail, tag: t.logic },
  { id: "action", title: t.action, detail: t.actionDetail, tag: t.integration },
]);
</script>

<template>
  <MsCanvas pattern="dots" :size="16" interactive style="max-width: 760px; min-height: 320px">
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px;
      "
    >
      <template v-for="(node, index) in nodes" :key="node.id">
        <MsCard variant="raised" padding="sm" style="width: 180px">
          <MsTag size="sm" tone="primary">{{ node.tag }}</MsTag>
          <div class="ms-u-font-semibold ms-u-mt-2">{{ node.title }}</div>
          <div class="ms-u-text-muted" style="font-size: var(--ms-typography-size-sm)">
            {{ node.detail }}
          </div>
        </MsCard>
        <svg
          v-if="index < nodes.length - 1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ms-u-text-muted"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </template>
    </div>
  </MsCanvas>
</template>
