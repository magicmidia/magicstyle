<script setup lang="ts">
import { MsCol, MsRow } from "@magic-style/vue";

const justifies = ["start", "center", "end", "space-between"] as const;
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 640px">
    <MsRow
      v-for="justify in justifies"
      :key="justify"
      :justify="justify"
      class="ms-u-p-2 ms-u-rounded-md ms-u-bg-sunken"
    >
      <MsCol v-for="n in 3" :key="n" :span="2">
        <div
          class="ms-u-p-2 ms-u-rounded-sm ms-u-bg-raised ms-u-border ms-u-text-center ms-u-font-mono"
        >
          {{ n }}
        </div>
      </MsCol>
    </MsRow>
  </div>
</template>
