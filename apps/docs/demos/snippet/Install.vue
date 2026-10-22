<script setup lang="ts">
import { ref } from "vue";
import { MsSnippet, type MsSnippetItem } from "@magic-style/vue";

const manager = ref<string | number>("pnpm");

const tabs: MsSnippetItem[] = [
  { id: "pnpm", label: "pnpm", code: "pnpm add @magic-style/vue" },
  { id: "npm", label: "npm", code: "npm install @magic-style/vue" },
  { id: "yarn", label: "yarn", code: "yarn add @magic-style/vue" },
  { id: "bun", label: "bun", code: "bun add @magic-style/vue" },
];
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsSnippet v-model:active-tab="manager" :tabs="tabs" />
  </div>
</template>
