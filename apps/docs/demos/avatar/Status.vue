<script setup lang="ts">
import { MsAvatar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 24px">
    <div style="display: grid; justify-items: center; gap: 6px">
      <MsAvatar name="Ana Ribeiro" src="/demo/avatar-ana-ribeiro.svg" status="online" size="lg" />
      <small>{{ t.online }}</small>
    </div>
    <div style="display: grid; justify-items: center; gap: 6px">
      <MsAvatar name="Bruno Tavares" tone="primary" status="busy" size="lg" />
      <small>{{ t.busy }}</small>
    </div>
    <div style="display: grid; justify-items: center; gap: 6px">
      <MsAvatar name="Clara Mendes" tone="accent" status="away" size="lg" />
      <small>{{ t.away }}</small>
    </div>
    <div style="display: grid; justify-items: center; gap: 6px">
      <MsAvatar
        name="Tiago Rocha"
        tone="neutral"
        status="offline"
        status-placement="top-right"
        size="lg"
      />
      <small>{{ t.offline }}</small>
    </div>
  </div>
</template>
