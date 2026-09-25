<script setup lang="ts">
import { MsCanvas } from "@magic-style/vue";

const patterns = [
  "dots",
  "grid",
  "lines",
  "cross",
  "plus",
  "isometric",
  "diagonal-stripes",
  "honeycomb",
  "waves",
  "checkerboard",
  "blueprint",
] as const;
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 12px;
      width: 100%;
      max-width: 720px;
    "
  >
    <MsCanvas
      v-for="pattern in patterns"
      :key="pattern"
      :pattern="pattern"
      style="min-height: 110px"
    >
      <code>{{ pattern }}</code>
    </MsCanvas>
  </div>
</template>
