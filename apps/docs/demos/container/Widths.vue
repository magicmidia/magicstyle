<script setup lang="ts">
import { MsContainer } from "@magic-style/vue";

const widths = ["sm", "md", "lg", "fluid"] as const;
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%">
    <MsContainer v-for="width in widths" :key="width" :max-width="width" :padded="false">
      <div
        class="ms-u-p-2 ms-u-rounded-md ms-u-border ms-u-bg-raised ms-u-text-center ms-u-font-mono"
      >
        {{ `max-width="${width}"` }}
      </div>
    </MsContainer>
  </div>
</template>
