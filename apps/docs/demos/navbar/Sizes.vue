<script setup lang="ts">
import { MsButton, MsNavbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 760px">
    <MsNavbar v-for="size in sizes" :key="size" :size="size" variant="bordered">
      <template #brand>{{ t.brand }}</template>
      <template #actions>
        <MsButton :size="size === 'lg' ? 'md' : 'sm'" variant="outline" tone="neutral">
          {{ t.signIn }}
        </MsButton>
      </template>
    </MsNavbar>
  </div>
</template>
