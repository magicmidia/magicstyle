<script setup lang="ts">
import { MsCode } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsCode>git status</MsCode>
      <MsCode variant="outline">git status</MsCode>
      <MsCode variant="solid">git status</MsCode>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsCode tone="primary">useTheme()</MsCode>
      <MsCode tone="secondary">defineProps</MsCode>
      <MsCode tone="info">v-model</MsCode>
      <MsCode tone="success">200 OK</MsCode>
      <MsCode tone="warning">@deprecated</MsCode>
      <MsCode tone="danger">404 Not Found</MsCode>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsCode variant="solid" tone="primary">main</MsCode>
      <MsCode variant="outline" tone="success">v2.4.0</MsCode>
      <MsCode variant="solid" tone="danger">ERR_NETWORK</MsCode>
    </div>
  </div>
</template>
