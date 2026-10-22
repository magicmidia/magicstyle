<script setup lang="ts">
import { ref } from "vue";
import { MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const perPage = ref("25");
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 240px">
    <MsNativeSelect v-model="perPage" size="sm" :aria-label="t.perPage">
      <option value="10">{{ t.per10 }}</option>
      <option value="25">{{ t.per25 }}</option>
      <option value="50">{{ t.per50 }}</option>
    </MsNativeSelect>
    <MsNativeSelect v-model="perPage" :aria-label="t.perPage">
      <option value="10">{{ t.per10 }}</option>
      <option value="25">{{ t.per25 }}</option>
      <option value="50">{{ t.per50 }}</option>
    </MsNativeSelect>
    <MsNativeSelect v-model="perPage" size="lg" :aria-label="t.perPage">
      <option value="10">{{ t.per10 }}</option>
      <option value="25">{{ t.per25 }}</option>
      <option value="50">{{ t.per50 }}</option>
    </MsNativeSelect>
    <MsNativeSelect v-model="perPage" size="xl" :aria-label="t.perPage">
      <option value="10">{{ t.per10 }}</option>
      <option value="25">{{ t.per25 }}</option>
      <option value="50">{{ t.per50 }}</option>
    </MsNativeSelect>
  </div>
</template>
