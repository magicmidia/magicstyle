<script setup lang="ts">
import { MsLink, MsSeparator } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <div style="display: grid; gap: 4px">
      <strong>{{ t.title }}</strong>
      <span class="ms-u-text-muted">{{ t.subtitle }}</span>
    </div>
    <MsSeparator spacing="md" />
    <div class="ms-u-flex ms-u-items-center ms-u-gap-3" style="height: 20px">
      <MsLink href="#" variant="subtle" underline="hover">{{ t.blog }}</MsLink>
      <MsSeparator orientation="vertical" />
      <MsLink href="#" variant="subtle" underline="hover">{{ t.docs }}</MsLink>
      <MsSeparator orientation="vertical" />
      <MsLink href="#" variant="subtle" underline="hover">{{ t.source }}</MsLink>
    </div>
  </div>
</template>
