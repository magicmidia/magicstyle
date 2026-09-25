<script setup lang="ts">
import { MsSeparator } from "@magic-style/vue";

const variants = ["default", "subtle", "strong", "dashed", "dotted", "gradient"] as const;
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 420px">
    <MsSeparator
      v-for="variant in variants"
      :key="variant"
      :variant="variant"
      :label="variant"
      align="start"
    />
  </div>
</template>
