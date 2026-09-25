<script setup lang="ts">
import { MsAvatar, MsHoverCard, MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsHoverCard :width="300">
    <MsLink href="#">@helena.dev</MsLink>
    <template #content>
      <div style="display: flex; gap: 12px">
        <MsAvatar name="Helena Duarte" />
        <div style="display: grid; gap: 4px; font-size: 14px">
          <strong>Helena Duarte</strong>
          <span>{{ t.bio }}</span>
          <span style="color: var(--ms-color-text-muted); font-size: 12px">{{ t.joined }}</span>
        </div>
      </div>
    </template>
  </MsHoverCard>
</template>
