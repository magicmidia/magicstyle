<script setup lang="ts">
import { ref } from "vue";
import { MsAvatar, MsSkeleton, MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const loading = ref(true);
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 360px">
    <MsSwitch v-model="loading" :label="t.simulateLoading" />
    <div :aria-busy="loading" style="display: flex; gap: 12px; min-height: 64px">
      <template v-if="loading">
        <MsSkeleton variant="avatar" />
        <div style="flex: 1">
          <MsSkeleton width="50%" height="16px" />
          <MsSkeleton :count="2" />
        </div>
      </template>
      <template v-else>
        <MsAvatar name="Beatriz Nogueira" size="lg" />
        <div style="font-size: 14px">
          <strong>Beatriz Nogueira</strong>
          <p style="margin: 4px 0 0">{{ t.bio }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
