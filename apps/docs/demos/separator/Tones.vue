<script setup lang="ts">
import { MsSeparator } from "@magic-style/vue";

const tones = ["primary", "accent", "success", "warning", "danger"] as const;
const thicknesses = [1, 2, 4] as const;
</script>

<template>
  <div style="display: grid; gap: 24px; width: 100%; max-width: 420px">
    <div style="display: grid; gap: 16px">
      <MsSeparator v-for="tone in tones" :key="tone" :tone="tone" :thickness="2" />
    </div>
    <div style="display: grid; gap: 16px">
      <MsSeparator
        v-for="thickness in thicknesses"
        :key="thickness"
        :thickness="thickness"
        tone="strong"
      />
    </div>
  </div>
</template>
