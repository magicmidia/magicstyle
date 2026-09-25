<script setup lang="ts">
import { ref } from "vue";
import { MsPagination } from "@magic-style/vue";
const page = ref(3);
const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center">
    <MsPagination
      v-for="size in sizes"
      :key="size"
      v-model:current-page="page"
      :size="size"
      :total="90"
      :show-total="false"
    />
  </div>
</template>
