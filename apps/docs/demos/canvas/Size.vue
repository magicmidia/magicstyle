<script setup lang="ts">
import { MsCanvas } from "@magic-style/vue";
const sizes = [12, 20, 36];
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
      width: 100%;
      max-width: 720px;
    "
  >
    <MsCanvas
      v-for="size in sizes"
      :key="size"
      pattern="grid"
      :size="size"
      style="min-height: 160px"
    >
      <code>{{ `:size="${size}"` }}</code>
    </MsCanvas>
  </div>
</template>
