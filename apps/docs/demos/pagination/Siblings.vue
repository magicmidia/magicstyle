<script setup lang="ts">
import { ref } from "vue";
import { MsPagination } from "@magic-style/vue";
const compact = ref(8);
const wide = ref(8);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center">
    <MsPagination
      v-model:current-page="compact"
      :total="400"
      :sibling-count="0"
      :show-edges="false"
      :show-total="false"
    />
    <MsPagination v-model:current-page="wide" :total="400" :sibling-count="2" :show-total="false" />
  </div>
</template>
