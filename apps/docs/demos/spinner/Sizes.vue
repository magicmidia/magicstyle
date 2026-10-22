<script setup lang="ts">
import { MsSpinner, type MsSpinnerSize } from "@magic-style/vue";

const sizes: MsSpinnerSize[] = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"];
</script>

<template>
  <MsSpinner v-for="size in sizes" :key="size" :size="size" />
</template>
