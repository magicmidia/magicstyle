<script setup lang="ts">
import { MsAvatar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 20px">
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
      <MsAvatar name="Lucas Almeida" tone="primary" size="lg" />
      <MsAvatar name="Beatriz Nogueira" tone="accent" size="lg" />
      <MsAvatar name="Rafael Souza" tone="success" size="lg" />
      <MsAvatar name="Camila Ferreira" tone="warning" size="lg" />
      <MsAvatar name="Diego Martins" tone="danger" size="lg" />
      <MsAvatar name="Helena" size="lg" />
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
      <MsAvatar name="Pedro Lima" src="/avatars/missing.png" tone="primary" size="lg" />
      <MsAvatar name="Studio Norte" shape="rounded" tone="accent" size="lg" />
      <MsAvatar shape="square" tone="neutral" size="lg">{{ t.guest }}</MsAvatar>
    </div>
  </div>
</template>
