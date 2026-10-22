<script setup lang="ts">
import { MsSkeleton } from "@magic-style/vue";
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsSkeleton width="60%" height="20px" />
    <MsSkeleton :count="3" />
  </div>
</template>
