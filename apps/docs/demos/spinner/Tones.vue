<script setup lang="ts">
import { MsSpinner, type MsSpinnerTone } from "@magic-style/vue";

const tones: MsSpinnerTone[] = ["primary", "neutral", "success", "warning", "danger"];
</script>

<template>
  <MsSpinner v-for="tone in tones" :key="tone" :tone="tone" size="lg" />
</template>
