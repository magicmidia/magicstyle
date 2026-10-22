<script setup lang="ts">
import { MsSnippet } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsSnippet code="git checkout -b feat/invoices" variant="default" />
    <MsSnippet code="git checkout -b feat/invoices" variant="bordered" />
    <MsSnippet code="git checkout -b feat/invoices" variant="flat" />
    <MsSnippet code="pnpm test --run" tone="success" size="sm" />
    <MsSnippet code="rm -rf node_modules" tone="danger" size="lg" />
  </div>
</template>
