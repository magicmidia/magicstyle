<script setup lang="ts">
import { ref } from "vue";
import { MsPagination } from "@magic-style/vue";
const page = ref(12);
</script>

<template>
  <MsPagination v-model:current-page="page" :total="1250" :page-size="25" show-jumper />
</template>
