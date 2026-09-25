<script setup lang="ts">
import { MsSkeleton } from "@magic-style/vue";
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <div style="display: flex; align-items: center; gap: 12px">
      <MsSkeleton variant="circle" />
      <MsSkeleton variant="avatar" />
      <MsSkeleton variant="button" />
    </div>
    <MsSkeleton variant="rect" />
    <MsSkeleton variant="card" radius="16px" />
  </div>
</template>
