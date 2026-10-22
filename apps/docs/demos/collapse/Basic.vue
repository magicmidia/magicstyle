<script setup lang="ts">
import { ref } from "vue";
import { MsCollapse } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(true);
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsCollapse v-model="open" :title="t.basicTitle">
      <p>{{ t.basicBody }}</p>
    </MsCollapse>
  </div>
</template>
