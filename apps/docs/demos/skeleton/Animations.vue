<script setup lang="ts">
import { MsSkeleton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 12px 16px;
      width: 100%;
      max-width: 420px;
      font-size: 14px;
    "
  >
    <span>{{ t.pulse }}</span>
    <MsSkeleton animation="pulse" />
    <span>{{ t.shimmer }}</span>
    <MsSkeleton animation="shimmer" speed="slow" />
    <span>{{ t.none }}</span>
    <MsSkeleton animation="none" />
    <span>{{ t.primaryTone }}</span>
    <MsSkeleton tone="primary" animation="shimmer" />
    <span>{{ t.contrastTone }}</span>
    <MsSkeleton tone="contrast" />
  </div>
</template>
