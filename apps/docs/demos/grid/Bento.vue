<script setup lang="ts">
import { MsBentoGrid, MsBentoItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 760px">
    <MsBentoGrid :cols="3" gap="md">
      <MsBentoItem :col-span="2" variant="accent">
        <strong>{{ t.bentoMainTitle }}</strong>
        <p style="margin: 8px 0 0">{{ t.bentoMainBody }}</p>
      </MsBentoItem>
      <MsBentoItem :row-span="2" variant="elevated">
        <strong>{{ t.bentoSideTitle }}</strong>
        <p class="ms-u-text-muted" style="margin: 8px 0 0">{{ t.bentoSideBody }}</p>
      </MsBentoItem>
      <MsBentoItem>
        <strong>{{ t.bentoA }}</strong>
        <p class="ms-u-text-muted" style="margin: 8px 0 0">{{ t.bentoABody }}</p>
      </MsBentoItem>
      <MsBentoItem variant="ghost">
        <strong>{{ t.bentoB }}</strong>
        <p class="ms-u-text-muted" style="margin: 8px 0 0">{{ t.bentoBBody }}</p>
      </MsBentoItem>
    </MsBentoGrid>
  </div>
</template>
