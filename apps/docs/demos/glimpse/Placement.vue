<script setup lang="ts">
import { MsGlimpse, type MsGlimpseProps } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const placements: NonNullable<MsGlimpseProps["placement"]>[] = ["top", "right", "bottom", "left"];
</script>

<template>
  <div
    style="display: flex; flex-wrap: wrap; justify-content: center; gap: 32px; padding: 180px 16px"
  >
    <MsGlimpse
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      href="https://vitepress.dev"
      :label="placement"
      title="VitePress"
      :description="t.vitepressDescription"
      badge="v2"
    />
  </div>
</template>
