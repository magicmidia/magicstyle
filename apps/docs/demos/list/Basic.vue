<script setup lang="ts">
import { MsList, MsListItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsList>
      <MsListItem :title="t.feature1" :description="t.feature1Desc" />
      <MsListItem :title="t.feature2" :description="t.feature2Desc" />
      <MsListItem :title="t.feature3" :description="t.feature3Desc" />
    </MsList>
  </div>
</template>
