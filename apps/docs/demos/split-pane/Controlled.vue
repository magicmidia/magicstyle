<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsSplitPane } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const split = ref(30);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 720px">
    <div class="ms-u-flex ms-u-items-center ms-u-gap-2">
      <MsButton size="sm" variant="outline" tone="neutral" @click="split = 20">{{
        t.narrow
      }}</MsButton>
      <MsButton size="sm" variant="outline" tone="neutral" @click="split = 50">{{
        t.half
      }}</MsButton>
      <span class="ms-u-text-muted ms-text-numeric" style="margin-inline-start: auto"
        >{{ split }}%</span
      >
    </div>
    <div class="ms-u-border ms-u-rounded-lg" style="height: 240px; overflow: hidden">
      <MsSplitPane v-model:split="split" :min="20" :max="60">
        <template #first>
          <ul class="ms-u-p-3 ms-u-m-0" style="list-style: none; display: grid; gap: 6px">
            <li class="ms-u-font-semibold">{{ t.inbox }}</li>
            <li>{{ t.mail1 }}</li>
            <li>{{ t.mail2 }}</li>
            <li>{{ t.mail3 }}</li>
          </ul>
        </template>
        <template #second>
          <div class="ms-u-p-4">
            <h4 style="margin: 0 0 8px">{{ t.mail1 }}</h4>
            <p class="ms-u-text-muted" style="margin: 0">{{ t.mailBody }}</p>
          </div>
        </template>
      </MsSplitPane>
    </div>
  </div>
</template>
