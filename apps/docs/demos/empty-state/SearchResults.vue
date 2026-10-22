<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsEmptyState, MsSearchField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const query = ref(t.initialQuery);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 480px">
    <MsSearchField v-model="query" :placeholder="t.searchPlaceholder" />
    <MsEmptyState
      v-if="query"
      variant="plain"
      size="sm"
      :title="t.noResultsTitle"
      :description="t.noResultsDescription"
    >
      <template #icon>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </template>
      <MsButton variant="outline" tone="neutral" size="sm" @click="query = ''">
        {{ t.clearSearch }}
      </MsButton>
    </MsEmptyState>
    <p v-else style="margin: 0; font-size: 14px; text-align: center">{{ t.typeToSearch }}</p>
  </div>
</template>
