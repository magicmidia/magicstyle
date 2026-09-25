<script setup lang="ts">
import { MsTruncate } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 280px">
    <MsTruncate
      text="relatorio-financeiro-consolidado-terceiro-trimestre-2026.pdf"
      position="middle"
      :middle-chars="8"
    />
    <MsTruncate
      text="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
      position="middle"
      :middle-chars="6"
    />
    <MsTruncate
      text="/home/deploy/apps/storefront/releases/2026-09-25/public/index.html"
      position="middle"
      :middle-chars="10"
    />
  </div>
</template>
