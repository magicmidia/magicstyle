<script setup lang="ts">
import { computed } from "vue";
import { MsLink, MsSidebar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const links = computed(() => [t.overview, t.projects, t.tasks, t.settings]);
const tones = ["primary", "neutral"] as const;
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center">
    <div
      v-for="tone in tones"
      :key="tone"
      style="display: flex; height: 280px; overflow: hidden; border-radius: 12px"
    >
      <MsSidebar :tone="tone" position="relative" style="min-block-size: 0">
        <template #header>
          <strong>{{ t.brand }}</strong>
        </template>
        <nav :aria-label="t.brand" style="display: grid; gap: 12px; padding: 8px 4px">
          <MsLink v-for="link in links" :key="link" href="#" variant="subtle" underline="none">
            {{ link }}
          </MsLink>
        </nav>
      </MsSidebar>
    </div>
  </div>
</template>
