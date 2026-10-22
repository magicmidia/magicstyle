<script setup lang="ts">
import { MsButton, MsLink, MsNavbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const variants = ["bordered", "elevated", "glass"] as const;
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 760px">
    <MsNavbar v-for="variant in variants" :key="variant" :variant="variant" size="sm">
      <template #brand>{{ t.brand }}</template>
      <MsLink href="#" variant="subtle" underline="none">{{ t.pricing }}</MsLink>
      <MsLink href="#" variant="subtle" underline="none">{{ t.docs }}</MsLink>
      <MsLink href="#" variant="subtle" underline="none">{{ t.blog }}</MsLink>
      <template #actions>
        <MsButton size="sm">{{ t.signUp }}</MsButton>
      </template>
    </MsNavbar>
  </div>
</template>
