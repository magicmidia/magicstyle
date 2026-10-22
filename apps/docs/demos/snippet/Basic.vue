<script setup lang="ts">
import { MsSnippet } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsSnippet code="npx degit magicmidia/starter my-app" />
    <MsSnippet code="cd my-app && pnpm dev" />
  </div>
</template>
