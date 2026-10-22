<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsDialog } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(false);
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.termsOpen }}</MsButton>
  <MsDialog v-model:open="open" size="lg" :title="t.termsTitle" :description="t.termsUpdated">
    <h3>{{ t.terms1Title }}</h3>
    <p>{{ t.terms1Body }}</p>
    <h3>{{ t.terms2Title }}</h3>
    <p>{{ t.terms2Body }}</p>
    <h3>{{ t.terms3Title }}</h3>
    <p>{{ t.terms3Body }}</p>
    <h3>{{ t.terms4Title }}</h3>
    <p>{{ t.terms4Body }}</p>
    <h3>{{ t.terms5Title }}</h3>
    <p>{{ t.terms5Body }}</p>
    <h3>{{ t.terms6Title }}</h3>
    <p>{{ t.terms6Body }}</p>
    <template #footer>
      <MsButton variant="outline" tone="neutral" @click="open = false">{{ t.decline }}</MsButton>
      <MsButton @click="open = false">{{ t.agree }}</MsButton>
    </template>
  </MsDialog>
</template>
