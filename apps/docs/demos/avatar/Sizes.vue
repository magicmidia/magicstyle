<script setup lang="ts">
import { MsAvatar, type MsAvatarProps } from "@magic-style/vue";

const sizes: NonNullable<MsAvatarProps["size"]>[] = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
];
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px">
    <MsAvatar
      v-for="size in sizes"
      :key="size"
      :size="size"
      name="Marina Costa"
      src="/demo/avatar-marina-costa.svg"
    />
  </div>
</template>
