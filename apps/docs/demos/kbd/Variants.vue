<script setup lang="ts">
import { MsKbd } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
      <MsKbd variant="raised">Shift</MsKbd>
      <MsKbd variant="outline">Shift</MsKbd>
      <MsKbd variant="flat">Shift</MsKbd>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
      <MsKbd size="xs">Tab</MsKbd>
      <MsKbd size="sm">Tab</MsKbd>
      <MsKbd size="md">Tab</MsKbd>
      <MsKbd size="lg">Tab</MsKbd>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
      <MsKbd tone="primary">Enter</MsKbd>
      <MsKbd tone="success">Y</MsKbd>
      <MsKbd tone="danger">Delete</MsKbd>
      <MsKbd tone="info">?</MsKbd>
      <MsKbd tone="warning">F5</MsKbd>
    </div>
  </div>
</template>
